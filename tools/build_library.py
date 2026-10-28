"""Build the research library pages from research/*.md.

Run from anywhere:

    python tools/build_library.py

Writes library/<page>.html for every Markdown document under research/,
styled like the support page, with each document's own dates, its last
revision time, and the time it was added to this site. Links between
documents point at the generated pages; links to data files point at the
raw files Pages already serves. Nothing links back to the repository.

tools/library-manifest.json keeps the "Last revised" times stable on a
fresh clone: a time is taken from the file's mtime only when the file's
content changes.
"""

import hashlib
import html
import json
import posixpath
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

from markdown_it import MarkdownIt

ROOT = Path(__file__).resolve().parent.parent
RESEARCH = ROOT / "research"
OUT = ROOT / "library"
MANIFEST = ROOT / "tools" / "library-manifest.json"
EASTERN = ZoneInfo("America/New_York")
MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]

# Documents that are not numbered NN-name.md, in reading order after the numbered ones.
SPECIAL = {
    "README.md": ("index.html", "Research library"),
    "supports/README.md": ("supports.html", "Proven supports"),
    "benchmark/README.md": ("benchmark.html", "Benchmark harness"),
    "benchmark/runner-contract-v0.1.md": ("benchmark-runner-contract-v0.1.html", "Benchmark harness"),
}

META_LINE = re.compile(r"^\*\*([^*]+?):\*\*\s*(.*?)\s*$")
KICKER_LINE = re.compile(r"^\*\*([^*:]+)\*\*\s*$")
NUMBERED = re.compile(r"^(\d\d)-[\w.-]+\.md$")
SCHEME = re.compile(r"^[a-z][a-z0-9+.-]*:", re.I)

ICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E"
        "%3Ccircle cx='16' cy='16' r='12' fill='%23e7f2eb'/%3E%3Ccircle cx='16' cy='16' r='6' "
        "fill='%232f5644'/%3E%3C/svg%3E")


def esc(text):
    return html.escape(text, quote=True)


def human_time(iso):
    dt = datetime.fromisoformat(iso).astimezone(EASTERN)
    hour = dt.hour % 12 or 12
    half = "AM" if dt.hour < 12 else "PM"
    return f"{dt.day} {MONTHS[dt.month - 1]} {dt.year}, {hour}:{dt.minute:02d} {half} ET"


class Slugger:
    """GitHub-compatible heading ids, so the corpus's existing #anchors keep working."""

    def __init__(self):
        self.seen = {}

    def slug(self, text):
        base = re.sub(r"[^\w\- ]", "", text.strip().lower()).replace(" ", "-")
        count = self.seen.get(base, 0)
        self.seen[base] = count + 1
        return base if count == 0 else f"{base}-{count}"


def plain_text(inline_token):
    return "".join(child.content for child in inline_token.children or []
                   if child.type in ("text", "code_inline"))


def split_document(text, rel):
    lines = text.split("\n")
    if not lines or not lines[0].startswith("# "):
        sys.exit(f"{rel}: expected the first line to be a '# ' title")
    title = lines[0][2:].strip()
    i = 1
    while i < len(lines) and not lines[i].strip():
        i += 1
    kickers, meta = [], []
    while i < len(lines):
        match = META_LINE.match(lines[i])
        kicker = KICKER_LINE.match(lines[i])
        if match:
            meta.append((match.group(1).strip(), match.group(2)))
        elif kicker:
            kickers.append(kicker.group(1).strip())
        else:
            break
        i += 1
    if not meta:
        # A bold line with no labelled dates after it is ordinary body text.
        return title, [], [], "\n".join(lines[1:])
    return title, kickers, meta, "\n".join(lines[i:])


def discover():
    """Return [(rel, output name, eyebrow)] in reading order."""
    rels = sorted(p.relative_to(RESEARCH).as_posix() for p in RESEARCH.rglob("*.md"))
    numbered = [r for r in rels if NUMBERED.match(r)]
    pages = [("README.md",) + SPECIAL["README.md"]] if "README.md" in rels else []
    for rel in numbered:
        number = NUMBERED.match(rel).group(1)
        pages.append((rel, rel[:-3] + ".html", f"Research library · Document {number}"))
    for rel, (name, eyebrow) in SPECIAL.items():
        if rel != "README.md" and rel in rels:
            pages.append((rel, name, eyebrow))
    known = {p[0] for p in pages}
    for rel in rels:
        if rel not in known:
            pages.append((rel, rel[:-3].replace("/", "-") + ".html", "Research library"))
    return pages


def git_added(rel_from_root):
    try:
        out = subprocess.run(
            ["git", "log", "--diff-filter=A", "--format=%cI", "--", rel_from_root],
            cwd=ROOT, capture_output=True, text=True, check=True,
        ).stdout.split()
    except (OSError, subprocess.CalledProcessError):
        return None
    return out[-1] if out else None


def timestamps(rel, raw, manifest):
    entry = manifest.setdefault(rel, {})
    digest = hashlib.sha256(raw.encode("utf-8")).hexdigest()
    if entry.get("sha256") != digest:
        mtime = (RESEARCH / rel).stat().st_mtime
        entry["sha256"] = digest
        entry["revised"] = datetime.fromtimestamp(mtime, tz=EASTERN).isoformat(timespec="minutes")
    if not entry.get("added"):
        added = git_added(f"research/{rel}")
        if added:
            entry["added"] = added
    return entry


class Builder:
    def __init__(self, pages):
        self.pages = pages
        self.page_for = {rel: name for rel, name, _ in pages}
        self.ids = {}          # output name -> set of heading ids
        self.anchor_links = []  # (source rel, target page, fragment)
        self.problems = []
        self.md = MarkdownIt("commonmark", {"html": False}).enable(["table", "strikethrough"])
        self.md.add_render_rule("table_open", self._table_open)
        self.md.add_render_rule("table_close", self._table_close)

    @staticmethod
    def _table_open(renderer, tokens, idx, options, env):
        return ('<div class="table-wrap" role="region" tabindex="0" aria-label="Table">\n'
                + renderer.renderToken(tokens, idx, options, env))

    @staticmethod
    def _table_close(renderer, tokens, idx, options, env):
        return renderer.renderToken(tokens, idx, options, env) + "</div>\n"

    def rewrite(self, href, rel):
        if not href or href.startswith("#") or SCHEME.match(href):
            return href
        path, _, fragment = href.partition("#")
        target = posixpath.normpath(posixpath.join(posixpath.dirname(rel), path))
        if target in self.page_for:
            new = self.page_for[target]
            if fragment:
                self.anchor_links.append((rel, new, fragment))
        else:
            if not (RESEARCH / target).resolve().exists():
                self.problems.append(f"{rel}: link to missing file {href}")
            new = posixpath.normpath("../research/" + target)
        return new + ("#" + fragment if fragment else "")

    def rewrite_links(self, tokens, rel):
        for token in tokens:
            for child in token.children or []:
                if child.type == "link_open":
                    child.attrSet("href", self.rewrite(child.attrGet("href"), rel))

    def render_inline(self, text, rel):
        tokens = self.md.parseInline(text)
        self.rewrite_links(tokens, rel)
        return self.md.renderer.render(tokens, self.md.options, {})

    def render_body(self, body, rel, name):
        tokens = self.md.parse(body)
        slugger = Slugger()
        contents = []
        description = ""
        for idx, token in enumerate(tokens):
            if token.type == "heading_open":
                text = plain_text(tokens[idx + 1])
                slug = slugger.slug(text)
                token.attrSet("id", slug)
                if token.tag == "h2":
                    contents.append((text, slug))
            elif token.type == "paragraph_open" and not description and token.level == 0:
                description = plain_text(tokens[idx + 1])
        self.rewrite_links(tokens, rel)
        own_ids = set(slugger.seen)
        own_ids.update(f"{base}-{n}" for base, count in slugger.seen.items() for n in range(1, count))
        self.ids[name] = own_ids
        for token in tokens:
            for child in token.children or []:
                if child.type == "link_open" and (child.attrGet("href") or "").startswith("#"):
                    self.anchor_links.append((rel, name, child.attrGet("href")[1:]))
        return self.md.renderer.render(tokens, self.md.options, {}), contents, description

    def check_anchors(self):
        for rel, page, fragment in self.anchor_links:
            if fragment not in self.ids.get(page, set()):
                self.problems.append(f"{rel}: no heading #{fragment} in {page}")


def shorten(text, limit=158):
    text = " ".join(text.split())
    if len(text) <= limit:
        return text
    return text[:limit].rsplit(" ", 1)[0].rstrip(",;:") + "…"


def page_html(*, title, eyebrow, kickers, meta_rows, contents, body, description, snapshot, name, prev, nxt):
    current = ' aria-current="page"' if name == "index.html" else ""
    kicker_html = "".join(f'\n        <p class="doc-kicker">{esc(text)}</p>' for text in kickers)
    rows = "\n".join(
        f'          <div><dt>{esc(label)}</dt><dd>{value}</dd></div>' for label, value in meta_rows
    )
    toc = ""
    if len(contents) >= 3:
        items = "\n".join(f'            <li><a href="#{esc(slug)}">{esc(text)}</a></li>'
                          for text, slug in contents)
        toc = f"""
        <nav class="doc-toc" aria-label="On this page">
          <p class="eyebrow">On this page</p>
          <ol>
{items}
          </ol>
        </nav>"""
    pager = []
    if prev:
        pager.append(f'        <a class="card pager-link" href="{prev[0]}" rel="prev"><span class="eyebrow">Previous</span>'
                     f'<span class="pager-title">{esc(prev[1])}</span></a>')
    if nxt:
        pager.append(f'        <a class="card pager-link pager-next" href="{nxt[0]}" rel="next"><span class="eyebrow">Next</span>'
                     f'<span class="pager-title">{esc(nxt[1])}</span></a>')
    pager_html = "\n".join(pager)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>{esc(title)} — Project Valens research library</title>
  <meta name="description" content="{esc(shorten(description))}">
  <meta name="theme-color" content="#f2ece3">
  <link rel="icon" href="{ICON}">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="library.css">
</head>
<body>
  <a class="skip" href="#content">Skip to content</a>

  <header class="site-header">
    <div class="wrap wide header-inner">
      <a class="wordmark" href="../index.html">
        <span class="wordmark-name">Project Valens</span>
        <span class="wordmark-note">Research library</span>
      </a>
      <nav class="nav" aria-label="Library">
        <a href="../index.html">Support page</a>
        <a href="index.html"{current}>Library index</a>
        <a href="../index.html#research">What the research says</a>
      </nav>
    </div>
  </header>

  <main id="content">
    <section class="doc-head" aria-labelledby="doc-title">
      <div class="wrap reading">
        <p class="eyebrow">{esc(eyebrow)}</p>
        <h1 id="doc-title">{esc(title)}</h1>{kicker_html}
        <dl class="doc-meta">
{rows}
        </dl>
        <p class="doc-note">Part of Voelori’s Project Valens research library, snapshot {esc(snapshot)}. It is research, not medical advice, a diagnosis, or a treatment.</p>{toc}
      </div>
    </section>

    <article class="section doc-body" aria-labelledby="doc-title">
      <div class="wrap reading prose">
{body}      </div>
    </article>

    <nav class="wrap reading doc-pager" aria-label="More from the library">
{pager_html}
    </nav>
  </main>

  <footer class="site-footer">
    <div class="wrap narrow">
      <p class="footer-name">Project Valens</p>
      <p>The research library is general information. It is not medical advice, a diagnosis, or a treatment, and it does not replace a conversation with a qualified professional.</p>
      <p class="footer-quiet">If you are in immediate danger, contact local emergency services. In the United States, call or text 988.</p>
    </div>
  </footer>
</body>
</html>
"""


def main():
    pages = discover()
    builder = Builder(pages)
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8")) if MANIFEST.exists() else {}

    parsed = {}
    for rel, name, eyebrow in pages:
        raw = (RESEARCH / rel).read_text(encoding="utf-8").replace("\r\n", "\n")
        parsed[rel] = (raw,) + split_document(raw, rel)
    snapshot = dict(parsed["README.md"][3]).get("Research snapshot")
    if not snapshot:
        sys.exit("research/README.md has no '**Research snapshot:**' line in its header")
    titles = {name: parsed[rel][1] for rel, name, _ in pages}

    OUT.mkdir(exist_ok=True)
    written = set()
    for i, (rel, name, eyebrow) in enumerate(pages):
        raw, title, kickers, meta, body = parsed[rel]
        stamps = timestamps(rel, raw, manifest)
        meta_rows = [(label, builder.render_inline(value, rel)) for label, value in meta]
        meta_rows.append(("Last revised",
                          f'<time datetime="{stamps["revised"]}">{human_time(stamps["revised"])}</time>'))
        if stamps.get("added"):
            meta_rows.append(("Added to this site",
                              f'<time datetime="{stamps["added"]}">{human_time(stamps["added"])}</time>'))
        body_html, contents, description = builder.render_body(body, rel, name)
        prev = (pages[i - 1][1], titles[pages[i - 1][1]]) if i > 0 else None
        nxt = (pages[i + 1][1], titles[pages[i + 1][1]]) if i + 1 < len(pages) else None
        document = page_html(title=title, eyebrow=eyebrow, kickers=kickers, meta_rows=meta_rows, contents=contents,
                             body=body_html, description=description or title, snapshot=snapshot,
                             name=name, prev=prev, nxt=nxt)
        (OUT / name).write_text(document, encoding="utf-8", newline="\n")
        written.add(name)

    for stale in OUT.glob("*.html"):
        if stale.name not in written:
            stale.unlink()
            print(f"removed stale {stale.name}")

    known = {rel for rel, _, _ in pages}
    manifest = {rel: manifest[rel] for rel in sorted(manifest) if rel in known}
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8", newline="\n")

    builder.check_anchors()
    print(f"Wrote {len(written)} pages to {OUT.relative_to(ROOT).as_posix()}/")
    for problem in builder.problems:
        print(f"problem: {problem}")
    return 1 if builder.problems else 0


if __name__ == "__main__":
    sys.exit(main())
