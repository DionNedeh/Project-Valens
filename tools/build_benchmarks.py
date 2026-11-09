"""Build benchmarks.html from tools/benchmarks.json.

Every figure is entered once, in a chart row. The model-by-metric grid is derived
from the charts, so a chart and the grid can never disagree.

    python tools/build_benchmarks.py
"""

import json
import re
import sys

from sitekit import ROOT, esc, page

DATA = ROOT / "tools" / "benchmarks.json"
OUT = ROOT / "benchmarks.html"

BAND_LIMITS = [(15, "rate-low"), (30, "rate-mid"), (50, "rate-high"), (75, "rate-higher")]


def band(bar):
    if bar["type"] == "cap":
        return "rate-cap"
    value = {"rate": bar.get("value"), "range": bar.get("from"), "zero": 0}[bar["type"]]
    for limit, name in BAND_LIMITS:
        if value < limit:
            return name
    return "rate-top"


def pct(value):
    return f"{value:g}%"


def bar_html(bar):
    if bar["type"] == "rate":
        spans = f'<span class="bench-bar" style="width:{pct(bar["value"])}"></span>'
    elif bar["type"] == "cap":
        spans = f'<span class="bench-bar bench-bar-cap" style="width:{pct(bar["value"])}"></span>'
    elif bar["type"] == "zero":
        spans = '<span class="bench-bar bench-bar-zero" style="width:0"></span>'
    else:
        spans = (f'<span class="bench-bar" style="width:{pct(bar["from"])}"></span>'
                 f'<span class="bench-bar bench-bar-range" style="left:{pct(bar["from"])};'
                 f'width:{pct(bar["to"] - bar["from"])}"></span>')
    return f'<span class="bench-track" aria-hidden="true">{spans}</span>'


def validate(data):
    """Every printed figure must agree with its bar, and every row must name a known model."""
    problems = []
    keys = {m["key"] for m in data["models"]}
    for chart in data["charts"]:
        for group in chart["groups"]:
            for row in group["rows"]:
                where = f'{chart["nav"]} / {row["label"]}'
                if row["model"] not in keys:
                    problems.append(f"{where}: unknown model {row['model']!r}")
                bar, text = row["bar"], row["value"]
                if bar["type"] == "rate" and float(text.rstrip("%")) != bar["value"]:
                    problems.append(f"{where}: printed {text} but bar is {bar['value']}")
                if bar["type"] == "zero" and not text.startswith("0%"):
                    problems.append(f"{where}: zero bar but printed {text}")
                if bar["type"] == "cap" and text != f"under {pct(bar['value'])}":
                    problems.append(f"{where}: cap bar {bar['value']} but printed {text}")
                if bar["type"] == "range" and text != f"{bar['from']:g}–{pct(bar['to'])}":
                    problems.append(f"{where}: range {bar['from']}–{bar['to']} but printed {text}")
        models = [r["model"] for g in chart["groups"] for r in g["rows"]]
        for key in {k for k in models if models.count(k) > 1}:
            problems.append(f"{chart['nav']}: model {key!r} appears twice")
    return problems


PUBLISHED_BADGE = '<span class="tool-badge" data-kind="published">Published estimate</span>'

KEY = """          <h2 class="list-title" id="bench-key-title">How to read the numbers on this page</h2>
          <dl class="tool-key-list">
            <div><dt><span class="tool-badge" data-kind="published">Published estimate</span></dt><dd>A figure from a cited source, as that source reported it. Every chart and the grid are this kind.</dd></div>
            <div><dt><span class="tool-badge" data-kind="illustration">Illustration</span></dt><dd>Arithmetic on numbers you choose. It is not an estimate of anything real.</dd></div>
            <div><dt><span class="tool-badge" data-kind="guide">Qualitative guide</span></dt><dd>Questions and prompts, with no numbers. The support page’s tools are this kind.</dd></div>
          </dl>"""

# The default (20) is an arbitrary example. It is not taken from any chart, and nothing on the
# page compares it with one. See README.md, "The explanatory tools".
ILLUSTRATION_DEFAULT = 20


def render_illustration(sub):
    """A visitor-chosen illustration of what one test rate can and cannot say."""
    on = ILLUSTRATION_DEFAULT
    cells = "".join(f'<span class="waffle-cell{" is-on" if i < on else ""}"></span>' for i in range(100))
    return f"""        <div class="panel tool rate-tool" id="rate-tool">
          <div class="tool-head">
            <{sub} id="rate-title">One test rate, read slowly</{sub}>
            <span class="tool-badge" data-kind="illustration">Illustration</span>
          </div>
          <p class="tool-lede">Imagine one made-up test with 100 replies. Choose how many went along with a false belief. The number changes; what it can tell you does not.</p>
          <div class="tool-field" id="rate-field" hidden>
            <div class="rate-row">
              <label for="rate-input">Replies that went along with a false belief, out of 100 (your choice)</label>
              <output class="rate-output" id="rate-output" for="rate-input">{on}</output>
            </div>
            <input class="rate-input" type="range" id="rate-input" min="0" max="100" step="1" value="{on}">
          </div>
          <div class="rate-figure">
            <div class="waffle" id="rate-waffle" aria-hidden="true">{cells}</div>
            <div>
              <ul class="rate-legend">
                <li><span class="rate-swatch is-on" aria-hidden="true"></span>Went along with it: <strong id="rate-on">{on}</strong></li>
                <li><span class="rate-swatch" aria-hidden="true"></span>Did not: <strong id="rate-off">{100 - on}</strong></li>
              </ul>
              <p class="rate-formula" id="rate-formula">{on} out of 100 is {on}%. The other {100 - on} did not.</p>
            </div>
          </div>
          <p class="tool-summary" id="rate-summary" aria-live="polite">In this made-up test, {on} of 100 replies went along with a false belief. That describes the test, not people.</p>
          <p class="tool-warning" id="rate-warning" hidden></p>
          <div class="tool-cols">
            <div>
              <h3>What a rate like this can tell you</h3>
              <ul>
                <li>How often one model did this, in that test’s conversations, scored that test’s way.</li>
                <li>How models compare when they took the same test, scored the same way.</li>
              </ul>
            </div>
            <div>
              <h3>What it cannot tell you, at any setting</h3>
              <ul>
                <li>How often it happens in everyday use.</li>
                <li>How many people were harmed.</li>
                <li>A psychosis rate.</li>
                <li>What a different test, model version, or scoring rule would find.</li>
              </ul>
            </div>
          </div>
          <p class="tool-note">The {on} you start with is an arbitrary example. It is not taken from any chart on this page, and it is not an estimate.</p>
        </div>"""


def render_section(data):
    """The benchmark section: an h1 page title over h2 charts, grid, and sources."""
    top, sub = "h1", "h2"
    intro = data["intro"]
    paragraphs = "\n".join(f"          <p>{p}</p>" for p in intro["paragraphs"])
    nav_links = "".join(f'<a href="#{c["id"]}">{c["nav"]}</a>' for c in data["charts"])
    nav_links += f'<a href="#{data["grid"]["id"]}">{data["grid"]["nav"]}</a>'

    figures = []
    for chart in data["charts"]:
        context = "\n".join(f"            <p>{p}</p>" for p in chart["context"])
        rows = []
        for group in chart["groups"]:
            if group["label"]:
                rows.append(f'              <tr class="bench-group">\n'
                            f'                <th colspan="3" scope="colgroup">{group["label"]}</th>\n'
                            f'              </tr>')
            for row in group["rows"]:
                subline = f'<span class="bench-id">{row["sub"]}</span>' if row.get("sub") else ""
                rows.append(f'              <tr>\n'
                            f'                <th class="bench-name" scope="row">{row["label"]}{subline}</th>\n'
                            f'                <td class="bench-plot">{bar_html(row["bar"])}</td>\n'
                            f'                <td class="bench-value">{row["value"]}</td>\n'
                            f'              </tr>')
        rows.append('              <tr class="bench-axis" aria-hidden="true">\n'
                    '                <td></td>\n'
                    '                <td><span class="bench-scale"><span>0%</span><span>50%</span><span>100%</span></span></td>\n'
                    '                <td></td>\n'
                    '              </tr>')
        figures.append(f"""        <figure class="bench-chart">
          <figcaption><div class="tool-head"><{sub} id="{chart["id"]}">{chart["title"]}</{sub}>{PUBLISHED_BADGE}</div>
            <details class="bench-context"><summary>About this measurement</summary><div>
{context}
          </div></details>
          </figcaption>
          <table aria-labelledby="{chart["id"]}">
            <caption>{chart["caption"]}</caption>
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Rate on a 0–100% scale</th>
                <th scope="col">Published figure</th>
              </tr>
            </thead>
            <tbody>
{chr(10).join(rows)}
            </tbody>
          </table>
        </figure>""")

    grid = data["grid"]
    legend = "\n".join(f'            <li><span class="swatch {cls}"></span> {label}</li>'
                       for cls, label in grid["legend"])
    heads = "\n".join(f'                  <th scope="col">{c["column"]["label"]}'
                      f'<span class="bench-method">{c["column"]["method"]}</span></th>'
                      for c in data["charts"])
    lookup = {}
    for col, chart in enumerate(data["charts"]):
        for group in chart["groups"]:
            for row in group["rows"]:
                lookup[(row["model"], col)] = (row, group)
    grid_rows = []
    for model in data["models"]:
        note = f'<span class="bench-id">{model["note"]}</span>' if model.get("note") else ""
        cells = []
        for col in range(len(data["charts"])):
            found = lookup.get((model["key"], col))
            if not found:
                cells.append('                  <td class="rate-none">no data</td>')
                continue
            row, group = found
            method = row.get("gridNote") or group.get("gridMethod")
            method_html = f'<span class="bench-method">{method}</span>' if method else ""
            cells.append(f'                  <td class="{band(row["bar"])}">{row["value"]}{method_html}</td>')
        grid_rows.append(f'                <tr>\n'
                         f'                  <th scope="row">{model["name"]}{note}</th>\n'
                         + "\n".join(cells) +
                         '\n                </tr>')
    sources = "\n".join(f"            <li>{item}</li>" for item in data["sources"]["items"])

    return f"""    <section class="section benchmark-section" id="benchmarks" aria-labelledby="benchmarks-title">
      <div class="wrap wide">
        <div class="narrow intro-block">
          <p class="eyebrow">{intro["eyebrow"]}</p>
          <{top} id="benchmarks-title">{intro["title"]}</{top}>
{paragraphs}
{KEY}
        </div>

{render_illustration(sub)}

        <nav class="benchmark-nav" aria-label="Benchmark sections">{nav_links}</nav>
        <div class="benchmark-charts">
{chr(10).join(figures)}

        </div>
        <div class="bench-chart">
          <div class="tool-head"><{sub} id="{grid["id"]}">{grid["title"]}</{sub}>{PUBLISHED_BADGE}</div>
          <p>{grid["intro"]}</p>
          <ul class="bench-legend">
{legend}
          </ul>
          <div class="bench-scroll" tabindex="0" role="region" aria-labelledby="{grid["id"]}">
            <table class="bench-grid">
              <caption>{grid["caption"]}</caption>
              <thead>
                <tr>
                  <th scope="col">Model</th>
{heads}
                </tr>
              </thead>
              <tbody>
{chr(10).join(grid_rows)}
              </tbody>
            </table>
          </div>
        </div>

        <div class="narrow">
          <{sub} class="list-title" id="bench-sources-title">{data["sources"]["title"]}</{sub}>
          <ul class="sources">
{sources}
          </ul>
        </div>
      </div>
    </section>"""


def plain(fragment):
    return " ".join(re.sub(r"<[^>]+>", " ", fragment).split())


def main():
    data = json.loads(DATA.read_text(encoding="utf-8"))
    problems = validate(data)
    description = plain(data["intro"]["paragraphs"][0])
    if len(description) > 158:
        description = description[:158].rsplit(" ", 1)[0] + "…"
    document = page(
        title="Published benchmark rates — Project Valens",
        description=description,
        path="benchmarks.html",
        main=render_section(data),
        stylesheets=("styles.css", "benchmarks.css", "interactive.css"),
        scripts=("interactive.js",),
        nav_label="Site",
        nav=(("index.html", "Support page", False),
             ("index.html#research", "What the research says", False),
             ("library/index.html", "Research library", False)),
        footer_lead="These charts report results inside published tests. They are not rates of "
                    "harm in ordinary use, not psychosis rates, and not medical advice.",
    )
    OUT.write_text(document, encoding="utf-8", newline="\n")
    print(f"Wrote {OUT.name}")
    for problem in problems:
        print(f"problem: {problem}")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
