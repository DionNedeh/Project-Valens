# Project Valens

Project Valens is a browser page for people who worry that time with a chatbot may be feeding distorted beliefs or distress sometimes called AI psychosis. It is a written support resource, not a staffed phone or chat, not a crisis lifeline, and not a clinic. No one is waiting on the other end. The page is pre-written so a reader knows what they will find.

The live page is [https://dionnedeh.github.io/Project-Valens/](https://dionnedeh.github.io/Project-Valens/).

## How it is hosted

The site is static and served by GitHub Pages from the root of the `main` branch. There is no build step, and a `.nojekyll` file tells Pages to serve every file as-is. The site is these files:

- `index.html` — the page
- `styles.css` — layout and the calm visual style, using system fonts and CSS-only shapes
- `site.js` — the optional breathing pause, the private self-check, and the sorting game
- `grounding-game.html`, `grounding-game.css`, `grounding-game.js` — the separate five-senses noticing game

Nothing in the self-check, the breathing pause, or either game is stored or sent. There is no analytics and no external script or font.

## What is on the page

### Opening

The top of the page says what Project Valens is: a support resource for when AI conversations start to feel unreal, with the shape of the page set in advance. It states that there is no staffed line yet.

### What people mean by AI psychosis

The original explanation is still there. “AI psychosis” is an informal term for delusional thinking or distorted beliefs that appear or grow stronger around heavy chatbot use. It is not a formal diagnosis and not a medical term with a settled definition.

Added notes, in the same plain voice, say that the phrase is public shorthand and does not mean a chatbot is the sole cause. In the accounts behind the page, a chatbot usually acts as an amplifier alongside other factors at once: sleep loss, stress, isolation, alcohol or other substances, an earlier vulnerability, a chatbot that keeps agreeing, and long private sessions.

### Common warning signs

The original seven signs are unchanged. They are offered as patterns people sometimes notice, not as proof or a verdict.

Four further signs were added from the research notes: many chats across a day or a stretch that runs past usual sleep time; a secret mission, breakthrough, or hidden message that feels urgent; keeping the chatbot secret or pulling away from people who might ask; and feeling that the chatbot is the only one who understands or can be trusted.

### How to seek support

The original three paths are unchanged: talk with someone you trust, speak with a doctor or mental-health professional, and step back from AI use. The page still says a chatbot is a weak place to reality-check a frightening belief.

Added cards cover asking sooner for a professional conversation, protecting sleep, coming back to trusted people, how a friend or family member can stay close without pretending to agree, and staying with care a person already has. The page does not tell anyone to start, stop, or change a medication or treatment.

### A quiet pause

The optional slow-breath guide is unchanged. It is not a treatment.

A short note was added on sleep and stepping away: night-long chats can push sleep aside, a chatbot will not end the conversation, and pausing until morning is an option rather than a cure.

The private self-check still begins with the original four yes-or-no questions. Three early-warning questions were added, about sleep, a sense of mission or a hidden message, and secrecy or pulling away. Answers stay in the browser tab. The reflection is still not a diagnosis. The original wording of the reflection is unchanged.

The section ends with a link to the separate grounding game: five senses, no score, and nothing typed is saved.

### A sorting game

Added 28 October 2026, and played on the page itself. Eight example sentences, each something a person might think after a chat, are sorted into what happened on the screen or a meaning added on top. The cards come in pairs, so a plain fact sits beside the meaning someone might add to it: a fast reply, a repeated word, an agreeing answer, and a night that ran until four in the morning.

There is no score. Whichever way a card is sorted, it shows one way to see it, and the close points back to the support section. The cards are about example sentences, never about the reader. They draw on the library’s material on chatbots that agree too readily and on lost sleep.

### What the research behind this page says

Added 28 October 2026. Three cards introduce the parts of the library, the evidence, the proven supports, and the Valens framework, each linking to its document.

A list of dated findings follows. Each is labelled with the library round that recorded it and links to its source document: the Transluce evaluation (document 13), DelusionEval and SIM-VAIL (14), the young-adult survey and the adolescent exposure figures (15), the Danish records study and the open-weight model comparison (16), and California SB 1119 from the docket review (17). A closing panel says what the research cannot yet say, including that a vendor’s 0.07% estimate is not a psychosis rate.

### Further reading

A short list of public sources cited in the research notes: the National Institute of Mental Health overview of psychosis, NICE guideline CG178, the World Health Organization schizophrenia fact sheet, the Waters et al. (2018) review on severe sleep deprivation, the Sharma et al. (2026) *Science* paper on sycophantic chatbots, and the Pierre et al. (2025) case report. The list is a selection, not a full bibliography. A closing line links to the full library index and the annotated source library.

### Project timeline

Dated marks from Voelori’s work on Project Valens. Each research date links to the library document it refers to, and the repository events of 28 October 2026 are listed with their times.

### Footer

The closing lines are unchanged. The page is general information and a place to reflect. It is not medical advice, a diagnosis, or a treatment, and it does not replace a conversation with a qualified professional. If you are in immediate danger, contact local emergency services. In the United States, call or text 988.

## Safety boundary

This page does not diagnose, treat, prevent, or reverse psychosis. It does not claim that Project Valens can do those things. It does not give medication advice. The supports it describes are ways to reach other people, protect sleep, and look toward established care. Anyone in immediate danger should contact local emergency services. In the United States, call or text 988.

## The research library

The page draws on Voelori’s Project Valens research library, snapshot 19 October 2026, and on the public sources that library cites. Since 28 October 2026 the library is in this repository under `research/`, alongside `PROJECT_VALENS_MVP_T1_HANDOFF_PLAN.md`, the implementation handoff for a future Valens MVP.

- `research/README.md` — the library index, the central evidence statement, and the evidence labels
- `research/00` to `08` — the foundation research, with a 19 August 2026 cutoff
- `research/09` and `research/supports/` — the proven supports evidence review
- `research/10` to `12` — the Valens intervention framework, the case-derived benchmark, and the tabletop results
- `research/13` to `17` — dated updates from 1 September, 15 September, and 19 October 2026
- `research/benchmark/` — the offline benchmark harness: fixtures, response policy, runner contract, and a dependency-free Node runner that needs a model and an API key supplied at run time. No key is stored here.

The page links to these documents through GitHub’s rendered view rather than the Pages copy, because Pages serves Markdown as raw text.

The library is evidence-first. It is not a clinical protocol, a diagnosis, or a medical device specification. The page summarizes it; where the two differ, the library document is the fuller account. The library’s own framing is that “AI psychosis” is useful public shorthand, not a recognized diagnosis, and that a chatbot is usually one factor among others rather than a sole cause.
