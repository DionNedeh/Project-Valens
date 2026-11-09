"""Shared pieces for the generated pages: the page shell, asset versions, and dates.

The support page (index.html) and the grounding game are hand-written; the
benchmark page, the library pages, and the 404 page are generated with page().
"""

import hashlib
import html
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
SITE_URL = "https://dionnedeh.github.io/Project-Valens/"
EASTERN = ZoneInfo("America/New_York")
MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]

ICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E"
        "%3Ccircle cx='16' cy='16' r='12' fill='%23e7f2eb'/%3E%3Ccircle cx='16' cy='16' r='6' "
        "fill='%232f5644'/%3E%3C/svg%3E")

# The closing safety line, shared by every page so it cannot drift.
CRISIS_LINE = ("If you are in immediate danger, contact local emergency services. "
               "In the United States, call or text 988. Elsewhere, "
               '<a href="https://findahelpline.com/">Find A Helpline</a> '
               "lists free, confidential support lines by country.")

# Files whose content hash is appended as ?v= wherever a page references them,
# so a deploy never pairs new HTML with a cached old stylesheet or script.
VERSIONED_ASSETS = ["styles.css", "benchmarks.css", "site.js", "grounding-game.css",
                    "grounding-game.js", "story-game.css", "story-game.js", "interactive.css",
                    "interactive.js", "library/library.css"]


def esc(text):
    return html.escape(text, quote=True)


def human_time(iso, seconds=False):
    dt = datetime.fromisoformat(iso).astimezone(EASTERN)
    hour = dt.hour % 12 or 12
    half = "AM" if dt.hour < 12 else "PM"
    clock = f"{hour}:{dt.minute:02d}" + (f":{dt.second:02d}" if seconds else "")
    return f"{dt.day} {MONTHS[dt.month - 1]} {dt.year}, {clock} {half} ET"


def asset_version(name):
    data = (ROOT / name).read_bytes().replace(b"\r\n", b"\n")
    return hashlib.sha256(data).hexdigest()[:10]


def asset(name, prefix=""):
    """URL for a site asset from a page at `prefix` ("", "../", or an absolute base)."""
    return f"{prefix}{name}?v={asset_version(name)}"


def page(*, title, description, path, main, prefix="", stylesheets=("styles.css",),
         wordmark_note="A support resource", nav_label="Site", nav=(), og_type="website",
         footer_lead="This page is general information. It is not medical advice, a diagnosis, "
                     "or a treatment, and it does not replace a conversation with a qualified "
                     "professional.",
         scripts=()):
    """A full HTML page in the site's shell.

    path is the page's URL path under SITE_URL, used for the canonical link (None: no
    canonical or og:url, as for the 404 page, which is served at whatever path was missed).
    nav is a sequence of (href, label, is_current).
    """
    links = "\n".join(f'  <link rel="stylesheet" href="{asset(s, prefix)}">' for s in stylesheets)
    script_tags = "".join(f'\n  <script src="{asset(s, prefix)}" defer></script>' for s in scripts)
    current_attr = ' aria-current="page"'
    nav_html = "\n".join(
        f'        <a href="{href}"{current_attr if current else ""}>{esc(label)}</a>'
        for href, label, current in nav
    )
    if path is None:
        place = ""
    else:
        url = SITE_URL + path
        place = (f'\n  <link rel="canonical" href="{url}">'
                 f'\n  <meta property="og:url" content="{url}">')
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>{esc(title)}</title>
  <meta name="description" content="{esc(description)}">
  <meta name="theme-color" content="#f3eee6">{place}
  <meta property="og:title" content="{esc(title)}">
  <meta property="og:description" content="{esc(description)}">
  <meta property="og:type" content="{og_type}">
  <link rel="icon" href="{ICON}">
{links}
</head>
<body>
  <a class="skip" href="#content">Skip to content</a>

  <header class="site-header">
    <div class="wrap wide header-inner">
      <a class="wordmark" href="{prefix}index.html">
        <span class="wordmark-name">Project Valens</span>
        <span class="wordmark-note">{esc(wordmark_note)}</span>
      </a>
      <nav class="nav" aria-label="{esc(nav_label)}">
{nav_html}
      </nav>
    </div>
  </header>

  <main id="content">
{main}
  </main>

  <footer class="site-footer">
    <div class="wrap narrow">
      <p class="footer-name">Project Valens</p>
      <p>{esc(footer_lead)}</p>
      <p class="footer-quiet">{CRISIS_LINE}</p>
    </div>
  </footer>{script_tags}
</body>
</html>
"""
