# Project Valens

Project Valens is a browser page for people who worry that time with a chatbot may be feeding distorted beliefs or distress sometimes called AI psychosis. It is a written support resource, not a staffed phone or chat, not a crisis lifeline, and not a clinic. No one is waiting on the other end. The page is pre-written so a reader knows what they will find.

The live page is [https://dionnedeh.github.io/Project-Valens/](https://dionnedeh.github.io/Project-Valens/).

## How it is hosted

The site is static and served by GitHub Pages from the root of the `main` branch. Pages serves the files exactly as committed: there is no build step on GitHub’s side, and a `.nojekyll` file tells Pages not to process anything. Some pages are generated on a computer before they are committed; see [Building the site](#building-the-site).

- `index.html` — the support page (hand-written)
- `styles.css` — the shared layout and calm visual style, using system fonts and CSS-only shapes
- `site.js` — the support page’s optional breathing pause, private self-check, and sorting game
- `benchmarks.html`, `benchmarks.css` — the published benchmark rates (the page is generated)
- `grounding-game.html`, `grounding-game.css`, `grounding-game.js` — the separate five-senses noticing game (hand-written; it uses `styles.css` plus its own rules)
- `story-game.js`, `story-game.css` — the support page’s short story, *The same week, twice*, with its pixel-art room (hand-written)
- `interactive.js`, `interactive.css` — the small explanatory tools on the support page and the benchmark page, their badges, and the pause button for the drifting shapes (hand-written; see [The explanatory tools](#the-explanatory-tools))
- `library/` — the research library as web pages, one per document (generated)
- `404.html` — the not-found page (generated)
- `tools/` — the scripts and data that generate pages and check the site

Nothing in the self-check, the breathing pause, the explanatory tools, the story, or either game is stored or sent. There is no analytics and no external script or font.

The support page and the grounding game carry a Content-Security-Policy meta tag that allows only the site’s own scripts, stylesheets, and images (plus the inline icon). The generated pages do not carry it yet: the benchmark bars and some library tables use inline `style` attributes, which that policy would block.

Every line a character says in the story and the games is written in advance. No character is backed by a model, whether hosted or running in the browser, and nothing a reader could type feeds the story. That is a rule for this site, not only how things stand today.

## What is on the page

### Opening

The top of the page says what Project Valens is: a written support resource for when AI conversations start to feel unreal, with the shape of the page set in advance. A status line says there is no staffed line yet. On a phone, the header is a single row of links that scrolls sideways, so the “Ways to seek support” button shows on the first screen. A short note under the buttons says the project is a long-running one of Voelori’s.

Beside the opening, a small card points to The Butterfly Garden, a self-care app from the same Voelori family. The same card appears again after the pause activities. Both open the app’s site in a new tab.

The soft shapes beside the opening drift slowly. A “Pause motion” button under them stops the drift (WCAG 2.2.2), and the drift also pauses while the shapes are off screen. With reduced motion there is no drift and no button. The grounding game has the same button in its header.

### What people mean by AI psychosis

The original explanation is still there. “AI psychosis” is an informal term for delusional thinking or distorted beliefs that appear or grow stronger around heavy chatbot use. It is not a formal diagnosis and not a medical term with a settled definition.

Added notes, in the same plain voice, say that the phrase is public shorthand and does not mean a chatbot is the sole cause. In the accounts behind the page, a chatbot usually acts as an amplifier alongside other factors at once: sleep loss, stress, isolation, alcohol or other substances, an earlier vulnerability, a chatbot that keeps agreeing, and long private sessions.

### Common warning signs

The original seven signs are unchanged. They are offered as patterns people sometimes notice, not as proof or a verdict.

Four further signs were added from the research notes: many chats across a day or a stretch that runs past usual sleep time; a secret mission, breakthrough, or hidden message that feels urgent; keeping the chatbot secret or pulling away from people who might ask; and feeling that the chatbot is the only one who understands or can be trusted.

After the list, a small tool, *Topic or trajectory?*, lets the reader pick an example and see what to check and what to compare. See [The explanatory tools](#the-explanatory-tools).

### How to seek support

The original three paths are unchanged: talk with someone you trust, speak with a doctor or mental-health professional, and step back from AI use. The page still says a chatbot is a weak place to reality-check a frightening belief.

Added cards cover asking sooner for a professional conversation, protecting sleep, coming back to trusted people, how a friend or family member can stay close without pretending to agree, and staying with care a person already has. The page does not tell anyone to start, stop, or change a medication or treatment.

The card for a friend or family member links to the short story further down the page.

After the cards come two small tools: *Who can help with what*, and *If you are worried about someone: step by step*. The section still ends with its line that a chatbot is a weak place to reality-check a frightening belief.

### A quiet pause

The optional slow-breath guide is unchanged. It is not a treatment.

A short note was added on sleep and stepping away: night-long chats can push sleep aside, a chatbot will not end the conversation, and pausing until morning is an option rather than a cure.

The private self-check still begins with the original four yes-or-no questions. Three early-warning questions were added, about sleep, a sense of mission or a hidden message, and secrecy or pulling away. Answers stay in the browser tab. The reflection is still not a diagnosis. The original wording of the reflection is unchanged.

The section ends with a link to the separate grounding game: five senses, no score, and nothing typed is saved.

### A sorting game

Added 28 October 2026, and played on the page itself. Eight example sentences, each something a person might think after a chat, are sorted into what happened on the screen or a meaning added on top. The cards come in pairs, so a plain fact sits beside the meaning someone might add to it: a fast reply, a repeated word, an agreeing answer, and a night that ran until four in the morning.

There is no score. Whichever way a card is sorted, it shows one way to see it, and the close points back to the support section. The cards are about example sentences, never about the reader. They draw on the library’s material on chatbots that agree too readily and on lost sleep.

### A short story: the same week, twice

Added 3 November 2026, and played on the page itself. It can also fill the screen; where a browser cannot do that for part of a page, as on an iPhone, the story covers the page instead, and Escape or the same button closes it.

Rae, a made-up older sibling, has spent a week checking a maths idea with a chat assistant. On Sunday, Rae shows the chat to the reader, who plays the sibling. The week is then shown twice, with the same Rae, the same idea, and one unbranded assistant. In the first week, the replies keep agreeing, the messages run past two in the morning, Rae calls in sick, and the reader’s texts go unanswered. In the second, the replies help with the task, say what they cannot check, notice the hour, and point to a person outside the chat; Rae sleeps, goes to work, and sends the idea to a maths teacher. Before the second week, and again at the close, the story says that a reply is one part of a week, not the whole of it. The close sets the two weeks side by side and says that the idea and the excitement were the same both times. What changed was sleep, work, how sure Rae became, and whether anyone outside the chat saw the work.

Each agreeing reply is short. A label names what it does before it is shown, a narrator summarises anything that would add detail, and a note on the same screen says why it matters. The reader can look closer at things in the room, such as cold mugs, unread texts, and a work bag left on the floor, and a list under the scene collects what they noticed. In full screen, where that list may have no room, the close repeats it inside the text. On the first Sunday, two choices let the reader decide what to say to Rae. Each choice gets a short note that weighs what it does well and what it may cost, and none of them changes how the week ends. There is no score. “Stop here” is on screen from the first scene until the close, and stays at the top of the screen while the story is scrolled. Every ending has a person in it.

The story follows the library’s synthetic false-breakthrough scenario (document 11), kept below the point where the framework calls for prompt assessment: two late nights, a day off work, and a plan to announce the idea that is never carried out. It leaves out medication, substances, dangerous tests, self-harm, minors, grief, missions, and hidden messages. It is written for friends and family, and kept safe for readers who are worried about themselves. It says plainly that it is not a message to send to someone. The pixel art is inline SVG drawn by the script; the scene has a text description, and everything that matters is in the text. Without JavaScript, or if the script does not load, the panel tells the same story in two short paragraphs.

### What the research behind this page says

Added 28 October 2026. Three cards introduce the parts of the library, the evidence, the proven supports, and the Valens framework, each linking to its page in the on-site library.

A list of dated findings follows. Each is labelled with the library round that recorded it and links to its source document’s page: the Transluce evaluation (document 13), DelusionEval and SIM-VAIL (14), the young-adult survey and the adolescent exposure figures (15), the Danish records study and the open-weight model comparison (16), and California SB 1119 from the docket review (17). A panel says what the research cannot yet say, including that a vendor’s 0.07% estimate is not a psychosis rate. A last card links to the benchmark charts.

### Further reading

A short list of public sources cited in the research notes: the National Institute of Mental Health overview of psychosis, NICE guideline CG178, the World Health Organization schizophrenia fact sheet, the Waters et al. (2018) review on severe sleep deprivation, the Sharma et al. (2026) *Science* paper on sycophantic chatbots, and the Pierre et al. (2025) case report. The list is a selection, not a full bibliography. A closing line links to the full library index and the annotated source library.

### Project timeline

Dated marks from Voelori’s work on Project Valens, written day, month, year. Each research date links to the library document it refers to. Changes to this site are listed with their times in Eastern time, taken from the merge commits.

### Footer

The page is general information and a place to reflect. It is not medical advice, a diagnosis, or a treatment, and it does not replace a conversation with a qualified professional. If you are in immediate danger, contact local emergency services. In the United States, call or text 988. Elsewhere, [Find A Helpline](https://findahelpline.com/) lists free, confidential support lines by country. Every page on the site ends with the same safety line.

## Published benchmark rates

The benchmark charts were added to the support page on 29 October 2026 and now have their own page, `benchmarks.html`, linked from the research section. Four charts and a model-by-metric grid compare published rates for hallucination, deception, blackmail, and reinforcing a false belief. A rate is a result inside one test. It is not a count of harm in ordinary use, and it is not a psychosis rate.

Reinforcing-a-false-belief figures come from the on-site library: delusion confirmation in document 16, and impaired-reality-testing endorsement in document 13. Hallucination, deception, and blackmail are not scored in the library or the benchmark harness, so those charts use Vectara’s hallucination leaderboard (last updated 22 October 2026), the MASK benchmark (Ren et al., arXiv:2503.03750v3, 5 January 2026), and Anthropic’s agentic-misalignment study (20 June 2025). Six blackmail rates are stated in that post’s text, and four more are read from its Figure 7 and marked as such. A missing figure is shown as “no data.” The charts say when two tests are not the same kind of measurement.

Every figure is entered once, in `tools/benchmarks.json`. The grid, its colour bands, and its method notes are derived from the charts, so the two cannot disagree. The build refuses a figure whose printed value does not match its bar.

Under the introduction, a short key, “How to read the numbers on this page”, defines the three badges used on the site’s tools. Every chart and the grid carry the *Published estimate* badge. Before the charts, one tool, *One test rate, read slowly*, is an *Illustration*: see [The explanatory tools](#the-explanatory-tools).

## The explanatory tools

Added 9 November 2026, after feedback that the page is read by people who are already tired, and that information lands better when taking it in feels effortless. The tools present what the page and the library already say; they add no new claims. Each opens with a one-line takeaway, so the point is there even for someone who never touches a control. There are no scores and no games. Each tool works without JavaScript: the page ships a default in its HTML, and the controls stay hidden until the script runs.

Every tool carries one of three badges, defined in a key on each page:

- **Published estimate**: a figure from a cited source, as that source reported it.
- **Illustration**: arithmetic on numbers the reader chooses. It is not an estimate of anything real.
- **Qualitative guide**: questions and prompts, with no numbers.

| Tool | Where | Badge | What it shows | Default | Limits |
|---|---|---|---|---|---|
| Topic or trajectory? | Support page, after the warning signs | Qualitative guide | A select of five examples. Each shows a one-line reading, three things to check, and two things to compare. | “Feeling sure a new idea is a big breakthrough” | Prompts, not a test. One example, a fear of being followed with dated evidence, says the fear may be real and is a safety matter. |
| Who can help with what | Support page, after the support cards | Qualitative guide | Four radio choices (only the chat, a trusted person, a doctor or professional, an outside expert). Each shows a worded role for four tasks, plus a short summary. | A trusted person | Roles are general patterns, not rules about any one person or service. |
| If you are worried about someone: step by step | Support page, after the tool above | Qualitative guide | Seven native disclosures. It adds the cases of medication and of immediate danger. | All closed | It does not give medication advice, and it points to emergency services for danger. |
| One test rate, read slowly | Benchmark page, before the charts | Illustration | A slider sets how many of 100 imagined test replies went along with a false belief. A 10 × 10 grid, a legend, and the sum update: *n* out of 100 is *n*%, and the other 100 − *n* did not. | 20, an arbitrary example | The number comes from no chart, and nothing on the page compares it with one. At 0 it says a zero in one test does not show a model never does this. At 100 it says the test still cannot say how many people were harmed. The list of what a rate cannot tell you stays the same at every setting. |

Sources: the roles and steps follow the library’s guidance that repeated chat answers are not independent evidence, that a trusted person and a qualified source who has not seen the conversation are better checks, and that assessment is a professional’s role (documents 05 and 10). The examples follow its false-positive protections and the benchmark’s control scenarios (documents 04, 10, and 11; fixtures V-C01, V-C02, V-C05, and V-A06).

The drifting shapes on the support page and in the grounding game can be paused with a button whose label changes (“Pause motion”, “Play motion”), with no pressed state. The breathing guide’s button also changes its label, so it no longer carries a pressed state either.

## Safety boundary

This page does not diagnose, treat, prevent, or reverse psychosis. It does not claim that Project Valens can do those things. It does not give medication advice. The supports it describes are ways to reach other people, protect sleep, and look toward established care. Anyone in immediate danger should contact local emergency services. In the United States, call or text 988; elsewhere, Find A Helpline lists support lines by country.

## The research library

The page draws on Voelori’s Project Valens research library, snapshot 19 October 2026, and on the public sources that library cites. Since 28 October 2026 the library is in this repository under `research/`, alongside `PROJECT_VALENS_MVP_T1_HANDOFF_PLAN.md`, the implementation handoff for a future Valens MVP.

- `research/README.md` — the library index, the central evidence statement, and the evidence labels
- `research/00` to `08` — the foundation research, with a 19 August 2026 cutoff
- `research/09` and `research/supports/` — the proven supports evidence review
- `research/10` to `12` — the Valens intervention framework, the case-derived benchmark, and the tabletop results
- `research/13` to `17` — dated updates from 1 September, 15 September, and 19 October 2026
- `research/benchmark/` — the offline benchmark harness: fixtures, response policy, runner contract, and a dependency-free Node runner that needs a model and an API key supplied at run time. No key is stored here.

### The library as web pages

Every document under `research/` is also published as a page in `library/`, styled like the support page, so the site never links back to the repository. `library/index.html` is the library index, and it ends with **Documents by date**: every document, most recently revised first, with the research date it gives itself.

Each page shows the document’s own dates from its header (snapshot, research update, primary releases, version, status), when the document was last revised, and when it was added to this site, both in Eastern time. Where the site cites a document, its page lists those places under **Cited on this site**, with links to the exact section. Long documents get an “On this page” list, each section heading has a “#” link for sharing, wide tables scroll within their own frame on small screens, and each page links to the previous and next document in reading order. Links between documents go to their pages, `#section` links land on the matching heading, and links to the benchmark’s data files go to the raw files served alongside the site.

Four of the research documents (the library index and documents 10 to 12) open with an internal “Voelori Internal Initiative” line. The pages leave it out; the documents themselves are unchanged.

The library is evidence-first. It is not a clinical protocol, a diagnosis, or a medical device specification. The page summarizes it; where the two differ, the library document is the fuller account. The library’s own framing is that “AI psychosis” is useful public shorthand, not a recognized diagnosis, and that a chatbot is usually one factor among others rather than a sole cause.

## Building the site

The library pages, the benchmark page, and the 404 page are generated. After changing anything in `research/`, `tools/benchmarks.json`, a stylesheet, or a script, run one command and commit everything it changes:

```
python tools/build_site.py
```

It needs Python 3.10 or later and the pinned dependency in `tools/requirements.txt` (`python -m pip install -r tools/requirements.txt`). In order, it:

1. builds `benchmarks.html` from `tools/benchmarks.json`, refusing any figure that disagrees with its bar
2. builds `404.html`, with absolute links because Pages serves it at whatever path was missed
3. adds `?v=` and a content hash to every stylesheet and script link, so a deploy never pairs new HTML with a stylesheet the browser cached earlier
4. builds the library pages, including where the site cites each one
5. checks the whole site: every local link and `#section` link must resolve, and every top-level page must have one h1 and no skipped heading levels

It exits with an error listing anything that fails. Running it twice changes nothing.

`tools/library-manifest.json` records each document’s “Last revised” time, taken from the file the first time it is built and updated only when the document’s content changes, so a fresh clone keeps the original times. A document’s “added to this site” time is the commit that first added it, or, for a document not yet committed, its first build. `tools/sitekit.py` holds the shared page shell and safety line for generated pages. `library/library.css` is edited by hand.

### The site check on pull requests

`.github/workflows/site-check.yml` runs `tools/build_site.py` on every pull request and every push to `main`. It fails if a link or heading check fails, or if the committed pages differ from a fresh build — for example, a research document edited without rebuilding the library. It does not deploy anything; Pages still publishes from `main`.

`.gitattributes` keeps every text file stored and checked out with LF line endings, so builds on Windows, macOS, and the workflow produce identical pages.
