"""Build the research library pages from research/*.md.

Run from anywhere:

    python tools/build_library.py

(tools/build_site.py runs this along with the rest of the site.)

Writes library/<page>.html for every Markdown document under research/,
styled like the support page, with each document's own dates, its last
revision time, the time it was added to this site, and the places on the
site that cite it. Links between documents point at the generated pages;
links to data files point at the raw files Pages already serves. Nothing
links back to the repository.

tools/library-manifest.json keeps the "Last revised" times stable on a
fresh clone: a time is taken from the file's mtime only when the file's
content changes.
"""

import hashlib
import json
import posixpath
import re
import subprocess
import sys
from datetime import datetime

from markdown_it import MarkdownIt

from sitekit import EASTERN, ROOT, esc, human_time, page

RESEARCH = ROOT / "research"
OUT = ROOT / "library"
MANIFEST = ROOT / "tools" / "library-manifest.json"

# Documents that are not numbered NN-name.md, in reading order after the numbered ones.
SPECIAL = {
    "README.md": ("index.html", "Research library"),
    "supports/README.md": ("supports.html", "Proven supports"),
    "benchmark/README.md": ("benchmark.html", "Benchmark harness"),
    "benchmark/runner-contract-v0.1.md": ("benchmark-runner-contract-v0.1.html", "Benchmark harness"),
}

# Header lines kept in the source documents but not shown on the public pages.
HIDDEN_KICKERS = {"Voelori Internal Initiative"}

# Pages whose links into the library are listed on each library page as "Cited on this site".
CITING_PAGES = {"index.html": "Support page", "benchmarks.html": "Benchmark charts"}

# Header fields that carry a document's own research date, in order of preference.
DATE_FIELDS = ("Project Valens research update", "Research snapshot")

META_LINE = re.compile(r"^\*\*([^*]+?):\*\*\s*(.*?)\s*$")
KICKER_LINE = re.compile(r"^\*\*([^*:]+)\*\*\s*$")
NUMBERED = re.compile(r"^(\d\d)-[\w.-]+\.md$")
SCHEME = re.compile(r"^[a-z][a-z0-9+.-]*:", re.I)


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
        # A document committed earlier keeps its commit time; a new one is dated by its
        # first build, so committing it does not change the page again.
        entry["added"] = (git_added(f"research/{rel}")
                          or datetime.now(tz=EASTERN).isoformat(timespec="seconds"))
    return entry


def citations():
    """Map each library page name to the site sections that link to it."""
    cites = {}
    for name, page_label in CITING_PAGES.items():
        path = ROOT / name
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        anchors = [(m.start(), m.group(1), m.group(2))
                   for m in re.finditer(r'<h[1-3][^>]*\bid="([^"]+)"[^>]*>(.*?)</h[1-3]>', text, re.S)]
        for link in re.finditer(r'href="library/([^"#]+)', text):
            before = [a for a in anchors if a[0] < link.start()]
            if not before:
                continue
            _, anchor_id, heading = before[-1]
            heading = " ".join(re.sub(r"<[^>]+>", "", heading).split())
            entry = (f"../{name}#{anchor_id}", f"{page_label}: {heading}")
            cites.setdefault(link.group(1), [])
            if entry not in cites[link.group(1)]:
                cites[link.group(1)].append(entry)
    return cites


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
        self.md.add_render_rule("heading_close", self._heading_close)

    @staticmethod
    def _table_open(renderer, tokens, idx, options, env):
        return ('<div class="table-wrap" role="region" tabindex="0" aria-label="Table">\n'
                + renderer.renderToken(tokens, idx, options, env))

    @staticmethod
    def _table_close(renderer, tokens, idx, options, env):
        return renderer.renderToken(tokens, idx, options, env) + "</div>\n"

    @staticmethod
    def _heading_close(renderer, tokens, idx, options, env):
        # heading_open, inline, heading_close: give h2 and h3 a permalink.
        opening = tokens[idx - 2]
        slug = opening.attrGet("id")
        link = ""
        if slug and opening.tag in ("h2", "h3"):
            link = (f'<a class="heading-link" href="#{esc(slug)}"><span aria-hidden="true">#</span>'
                    f'<span class="visually-hidden">Link to this section</span></a>')
        return link + renderer.renderToken(tokens, idx, options, env)

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
        for rel, page_name, fragment in self.anchor_links:
            if fragment not in self.ids.get(page_name, set()):
                self.problems.append(f"{rel}: no heading #{fragment} in {page_name}")


def shorten(text, limit=158):
    text = " ".join(text.split())
    if len(text) <= limit:
        return text
    return text[:limit].rsplit(" ", 1)[0].rstrip(",;:") + "…"


def research_date(meta):
    fields = dict(meta)
    for label in DATE_FIELDS:
        if fields.get(label):
            return fields[label]
    return None


def documents_by_date(entries):
    """The library index's table of every document, most recently revised first."""
    rows = []
    for name, title, stated, revised in sorted(entries, key=lambda e: e[3], reverse=True):
        rows.append(f'<tr><td><a href="{name}">{esc(title)}</a></td>'
                    f'<td>{esc(stated) if stated else "—"}</td>'
                    f'<td><time datetime="{revised}">{human_time(revised)}</time></td></tr>')
    return ('<h2 id="documents-by-date">Documents by date'
            '<a class="heading-link" href="#documents-by-date"><span aria-hidden="true">#</span>'
            '<span class="visually-hidden">Link to this section</span></a></h2>\n'
            '<p>Every document in the library, most recently revised first. The research date is the one '
            'the document gives itself, where it gives one.</p>\n'
            '<div class="table-wrap" role="region" tabindex="0" aria-label="Documents by date">\n'
            '<table>\n<thead><tr><th>Document</th><th>Research date</th><th>Last revised</th></tr></thead>\n'
            '<tbody>\n' + "\n".join(rows) + '\n</tbody>\n</table>\n</div>\n')


def doc_main(*, title, eyebrow, kickers, meta_rows, contents, body, snapshot, prev, nxt):
    kicker_html = "".join(f'\n        <p class="doc-kicker">{esc(text)}</p>' for text in kickers)
    rows = "\n".join(f'          <div><dt>{esc(label)}</dt><dd>{value}</dd></div>' for label, value in meta_rows)
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
        pager.append(f'      <a class="card pager-link" href="{prev[0]}" rel="prev"><span class="eyebrow">Previous</span>'
                     f'<span class="pager-title">{esc(prev[1])}</span></a>')
    if nxt:
        pager.append(f'      <a class="card pager-link pager-next" href="{nxt[0]}" rel="next"><span class="eyebrow">Next</span>'
                     f'<span class="pager-title">{esc(nxt[1])}</span></a>')
    pager_html = "\n".join(pager)
    return f"""    <section class="doc-head" aria-labelledby="doc-title">
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
    </nav>"""


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
    stamps = {rel: timestamps(rel, parsed[rel][0], manifest) for rel, _, _ in pages}
    cited = citations()

    OUT.mkdir(exist_ok=True)
    written = set()
    for i, (rel, name, eyebrow) in enumerate(pages):
        raw, title, kickers, meta, body = parsed[rel]
        entry = stamps[rel]
        meta_rows = [(label, builder.render_inline(value, rel)) for label, value in meta]
        meta_rows.append(("Last revised",
                          f'<time datetime="{entry["revised"]}">{human_time(entry["revised"])}</time>'))
        meta_rows.append(("Added to this site",
                          f'<time datetime="{entry["added"]}">{human_time(entry["added"])}</time>'))
        if cited.get(name):
            items = "".join(f'<li><a href="{href}">{esc(label)}</a></li>' for href, label in cited[name])
            meta_rows.append(("Cited on this site", f'<ul class="cite-list">{items}</ul>'))
        body_html, contents, description = builder.render_body(body, rel, name)
        if name == "index.html":
            body_html += documents_by_date(
                (n, titles[n], research_date(parsed[r][3]), stamps[r]["revised"])
                for r, n, _ in pages if n != "index.html")
            contents.append(("Documents by date", "documents-by-date"))
            builder.ids[name].add("documents-by-date")
        prev = (pages[i - 1][1], titles[pages[i - 1][1]]) if i > 0 else None
        nxt = (pages[i + 1][1], titles[pages[i + 1][1]]) if i + 1 < len(pages) else None
        main_html = doc_main(title=title, eyebrow=eyebrow,
                             kickers=[k for k in kickers if k not in HIDDEN_KICKERS],
                             meta_rows=meta_rows, contents=contents, body=body_html,
                             snapshot=snapshot, prev=prev, nxt=nxt)
        document = page(
            title=f"{title} — Project Valens research library",
            description=shorten(description or title),
            path=f"library/{name}",
            main=main_html,
            prefix="../",
            stylesheets=("styles.css", "library/library.css"),
            wordmark_note="Research library",
            nav_label="Library",
            nav=(("../index.html", "Support page", False),
                 ("index.html", "Library index", name == "index.html"),
                 ("../index.html#research", "What the research says", False),
                 ("../benchmarks.html", "Benchmark charts", False)),
            og_type="article",
            footer_lead="The research library is general information. It is not medical advice, "
                        "a diagnosis, or a treatment, and it does not replace a conversation with a "
                        "qualified professional.",
        )
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
