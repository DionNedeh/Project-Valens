"""Build and check the whole site. Run this after changing anything:

    python tools/build_site.py

1. benchmarks.html from tools/benchmarks.json
2. 404.html
3. version stamps (?v=<content hash>) on the hand-written pages' stylesheet and script links
4. the research library, after step 1, because each library page lists where the site cites it
5. a site check: every local link and #section link resolves, and every non-library page
   has one h1 and no skipped heading levels

Exits non-zero if any step reports a problem. The site-check workflow runs this and then
fails if anything it regenerated differs from what was committed.
"""

import re
import sys
from pathlib import Path, PurePosixPath

import build_benchmarks
import build_library
from sitekit import ROOT, VERSIONED_ASSETS, asset_version, page

BASE_PATH = "/Project-Valens/"  # where Pages serves the site; the 404 page needs absolute links
HAND_WRITTEN = ["index.html", "grounding-game.html"]


def build_404():
    main = f"""    <section class="section" aria-labelledby="missing-title">
      <div class="wrap narrow">
        <p class="eyebrow">Page not found</p>
        <h1 id="missing-title">This page is not here</h1>
        <p>The link may be out of date, or the page may have moved when the research library was published on this site.</p>
        <div class="actions">
          <a class="button button-primary" href="{BASE_PATH}index.html">Go to the support page</a>
          <a class="button button-secondary" href="{BASE_PATH}library/index.html">Open the research library</a>
        </div>
      </div>
    </section>"""
    document = page(
        title="Page not found — Project Valens",
        description="This page is not on the Project Valens site.",
        path=None,
        main=main,
        prefix=BASE_PATH,
        nav=((f"{BASE_PATH}index.html", "Support page", False),
             (f"{BASE_PATH}library/index.html", "Research library", False),
             (f"{BASE_PATH}benchmarks.html", "Benchmark charts", False)),
    )
    (ROOT / "404.html").write_text(document, encoding="utf-8", newline="\n")
    print("Wrote 404.html")


def stamp_hand_written():
    names = "|".join(re.escape(a) for a in VERSIONED_ASSETS)
    pattern = re.compile(rf'((?:href|src)="(?:\.\./)?)({names})(?:\?v=[0-9a-f]+)?"')
    for name in HAND_WRITTEN:
        path = ROOT / name
        text = path.read_text(encoding="utf-8").replace("\r\n", "\n")
        stamped = pattern.sub(lambda m: f'{m.group(1)}{m.group(2)}?v={asset_version(m.group(2))}"', text)
        if stamped != text:
            path.write_text(stamped, encoding="utf-8", newline="\n")
            print(f"Stamped asset versions in {name}")


def site_pages():
    return sorted([p for p in ROOT.glob("*.html")] + list((ROOT / "library").glob("*.html")))


def check_site():
    problems = []
    ids = {}
    texts = {}
    for path in site_pages():
        text = path.read_text(encoding="utf-8")
        texts[path] = text
        ids[path] = set(re.findall(r'\bid="([^"]+)"', text))

    for path, text in texts.items():
        rel = path.relative_to(ROOT).as_posix()
        for href in re.findall(r'(?:href|src)="([^"]*)"', text):
            if not href or re.match(r"^[a-z][a-z0-9+.-]*:", href, re.I):
                continue  # external, mailto:, data:
            url, _, fragment = href.partition("#")
            url = url.split("?", 1)[0]
            if url.startswith(BASE_PATH):
                target = ROOT / url[len(BASE_PATH):]
            elif url.startswith("/"):
                problems.append(f"{rel}: root-relative link {href} does not start with {BASE_PATH}")
                continue
            elif url:
                target = (path.parent / PurePosixPath(url)).resolve()
            else:
                target = path
            if not target.is_file():
                problems.append(f"{rel}: link to missing file {href}")
            elif fragment and target.suffix == ".html":
                target_ids = ids.get(target.resolve()) or set(re.findall(r'\bid="([^"]+)"', target.read_text(encoding="utf-8")))
                if fragment not in target_ids:
                    problems.append(f"{rel}: no #{fragment} in {target.relative_to(ROOT).as_posix()}")

        if path.parent == ROOT:
            levels = [int(n) for n in re.findall(r"<h([1-6])\b", text)]
            if levels.count(1) != 1:
                problems.append(f"{rel}: has {levels.count(1)} h1 headings, expected 1")
            for before, after in zip(levels, levels[1:]):
                if after > before + 1:
                    problems.append(f"{rel}: heading jumps from h{before} to h{after}")
                    break
    print(f"Checked {len(texts)} pages")
    return problems


def main():
    status = build_benchmarks.main()
    build_404()
    stamp_hand_written()
    status |= build_library.main()
    problems = check_site()
    for problem in problems:
        print(f"problem: {problem}")
    return 1 if status or problems else 0


if __name__ == "__main__":
    sys.exit(main())
