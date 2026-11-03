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
          <figcaption><{sub} id="{chart["id"]}">{chart["title"]}</{sub}>
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
        </div>

        <nav class="benchmark-nav" aria-label="Benchmark sections">{nav_links}</nav>
        <div class="benchmark-charts">
{chr(10).join(figures)}

        </div>
        <div class="bench-chart">
          <{sub} id="{grid["id"]}">{grid["title"]}</{sub}>
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
        stylesheets=("styles.css", "benchmarks.css"),
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
