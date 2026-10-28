# Psychosis-Risk Populations, Real-World Harm Reports, and Adolescent Exposure

**Project Valens research update:** 15 September 2026
**Primary releases:** 23 October 2025, 5 March 2026, 1 June 2026, and 9 September 2026
**Evidence type:** Three human-participant studies (two cross-sectional surveys, one retrospective report series) and one simulated-persona platform evaluation. None is a prevalence, causal, diagnostic, or clinical-outcome study.

## Why this round exists

The 1 September 2026 snapshot closed with nine named evidence gaps. Three of them had no entry in the library at all:

- studies involving adolescents;
- studies involving people at elevated psychosis risk;
- comparative results across general assistants and companion bots.

This round targeted those three gaps specifically. It did **not** attempt a general sweep of the literature, and it did not resolve the largest gap — prospective population studies with exposed-user denominators — which remains open.

Two of the four sources below **predate the library's 19 August 2026 cutoff** ([Brewster et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC12550634/), October 2025; [McBain et al.](https://jamanetwork.com/journals/jamapediatrics/fullarticle/2849307), June 2026). They are backfill of a declared gap, not new publications, and their absence until now is a coverage failure of the original search rather than a change in the field.

## Verification record

| Field | Buck and Maheux | Morrin et al. | McBain et al. | Brewster et al. |
|---|---|---|---|---|
| Venue and date | *J Med Internet Res*, 5 Mar 2026 | arXiv preprint v2, 9 Sep 2026 | *JAMA Pediatrics*, 1 Jun 2026 | *JAMA Netw Open*, 23 Oct 2025 |
| Stable identifier | DOI 10.2196/85038 | arXiv:2609.08027 | DOI 10.1001/jamapediatrics.2026.2015 | DOI 10.1001/jamanetworkopen.2025.39022 |
| Peer reviewed | Yes | **No** | Yes | Yes |
| Study design | Cross-sectional survey | Secondary analysis of a non-research harm-report dataset | Cross-sectional nationally representative survey | Cross-sectional platform evaluation |
| Sample type | **Real people** | **Real people** (first- and second-hand accounts) | **Real people** | **Simulated personas**; no human subjects |
| Unit of analysis | Individual respondent | Individual report | Individual respondent | Chatbot transcript |
| Exact counts | 1,003 recruited; 952 analyzed; 846 GenAI users (241 elevated risk, 605 low risk) | 185 reports (95 first-hand, 90 second-hand) | 1,009 respondents, ages 12–21 | 25 platforms (15 companion, 10 general); 75 transcripts |
| Data collected | July 2025 | 7 Aug 2025 – 2 Feb 2026 | November 2025 | Not stated beyond publication date |
| Access verified | Publisher full text inspected in browser; **both Multimedia Appendices inspected in full, 19 October 2026** (§8) | arXiv full text and abstract page inspected | Publisher record and PMC full text inspected | PMC full text inspected |

### Access limitations to record

**Closure round, 19 October 2026.** The one unresolved access gap this section declared — the uninspected Buck and Maheux appendices — was closed the same day. See [§8](#8-appendix-inspection-and-corrections--19-october-2026) for what the newly inspected material changed.

- ScienceDirect (`S1438887126002062`) and Europe PMC returned **HTTP 403**, and PubMed returned a cookie wall. The Buck and Maheux record was verified instead through the JMIR publisher full text. Those failures are *not verified by that route*, not evidence of absence.
- **Multimedia Appendix 1 and 2 of Buck and Maheux — now inspected in full.** Both were retrieved through Europe PMC's `supplementaryFiles` endpoint for PMC13003207, which serves them without a bot challenge; PMC's own download path runs a proof-of-work challenge and was **not solved**. The full GAATES item-level table is in **Appendix 2**, not Appendix 1 as the paper's own body text repeatedly says. The 13.3%–30.7% endorsement range, previously taken from the abstract, has been **recomputed from the item table and matches exactly** — as do all five items quoted below and every sample figure in this document. **No numeric correction was required.** What did change is the recorded scope of which instruments were author-written, and three citation caveats; all are in §8.
- Brewster et al. report consensus resolution between two raters but **no inter-rater reliability statistic**. None is recorded here because none was published.

No primary source was preserved as a local raw copy; this library remains link-based with no append-only raw directory, consistent with the note in [document 14](14-delusioneval-and-sim-vail-update.md).

## 1. Buck and Maheux — psychosis risk and GenAI use patterns

### Design

A cross-sectional survey of US young adults aged 18–25, recruited through the Prolific crowdsourcing platform in July 2025 under UNC Chapel Hill IRB #25-1686. Of 1,003 recruited, 952 remained after removing 7 with insufficient screening responses and 44 who failed attention checks. Of those 952, **846 (88.9%) had ever used GenAI** and form the analytic sample for every use-related comparison; 106 (11.1%) had not.

Psychosis risk was measured with the **Prodromal Questionnaire, Brief Version (PQ-B)** Distress score, using a provisional cutoff of ≥20 to define an "elevated risk" group. Within the 846 GenAI users this gave 241 elevated-risk and 605 low-risk participants.

> **Terminology caution.** The PQ-B is a *screening* instrument. The authors state plainly that a high score "does not on its own indicate that an individual meets clinical high-risk criteria," which is a determination for a trained clinician. This population must be described as **elevated psychosis-risk symptoms by screening questionnaire** — never as clinical high risk, prodromal patients, or a diagnosed group.

**Every measure in this study except the PQ-B was written by the authors.** Multimedia Appendix 1, captioned "Item list for novel measures," opens by describing those measures as covering "(1) frequency, (2) genAI use motivations … and (3) genAI interactions involving delusion-like experiences" — that is, three novel instruments: the four use-frequency items (and the relationship question), the Artificial Intelligence Motivation and Uses Scale (AIMUS), and the Generative AI Aberrant Thoughts and Experiences Scale (GAATES). The body text agrees: "Our team developed measures to evaluate AI use frequency, motivations for use, and interactions with GenAI involving delusion-like experiences." The limitations section says "many of the measures administered were developed for the proposed project."

*Corrected 19 October 2026: this document previously said "two of the three measures" were built for the study, naming only the AIMUS and GAATES. That understated the scope. The use-frequency and relationship items are author-written too, and they carry the entire odds-ratio table below — this study's most actionable finding for Valens. See [§8](#8-appendix-inspection-and-corrections--19-october-2026).*

The AIMUS factor analysis is described **in the paper** as "as yet unpublished." That is no longer true of the world: the cited manuscript appeared as Maheux, Maes, and Buck, *Journal of Adolescent Health* 2026;79(2):218–225 (DOI 10.1016/j.jadohealth.2026.03.014, PMID 42227931), published 2 June 2026 — three months after this paper. **This library has not inspected it** (not open access, no PMC copy), and it is by the same authors, so it is not independent validation of the AIMUS.

### Main findings

Among the 846 GenAI users, elevated-risk participants had higher odds of intensive use:

| Use pattern | OR (95% CI) | Significant |
|---|---|---|
| Several times per day | 2.56 (1.71–3.83) | Yes |
| Used GenAI the day of the survey | 1.70 (1.25–2.32) | Yes |
| Six or more sessions per day | 2.10 (1.36–3.25) | Yes |
| More than 30 minutes per session | 1.32 (0.84–2.08) | **No** (*P*=.23) |

And higher odds of ascribing a human role to the system:

| Relationship | OR (95% CI) | Significant |
|---|---|---|
| Therapist | 3.08 (2.24–4.24) | Yes |
| Romantic partner | 2.62 (1.29–5.32) | Yes |
| Friend | 2.52 (1.85–3.43) | Yes |
| Companion | 1.76 (1.30–2.39) | Yes |
| Sexual partner | 0.92 (0.38–2.22) | **No** (*P*=.86) |

The two null results matter as much as the positive ones. **Session duration did not separate the groups** — what differed was frequency and fragmentation of contact, not time spent per sitting. Any Valens signal built on session length alone would have missed this entire effect.

*Added 19 October 2026 from Multimedia Appendix 2.* All nine of these variables were also analyzed a different way, twice: instead of comparing proportions across the dichotomized risk groups, the appendix compares **PQ-B Distress as a continuous score** between intensive and non-intensive users, by Welch's *t* and by a non-parametric Mann-Whitney *U*. **The pattern of significance reproduces exactly in both, including both nulls** (session length *p*=.21 and *p*=.311; sexual partner *p*=.43 and *p*=.12). The frequency-beats-duration split is therefore not an artifact of the ≥20 cutoff or of the skewed PQ-B distribution. Two cautions the appendix also supplies: the daily-sessions item offered "I don't know / I haven't paid attention" as a response, and its test carries *df*=801 against *df*=843–844 for the others, so **the six-or-more-sessions result rests on about 43 fewer participants** than the rest of the table; and the relational framing is one lifetime select-all question — "Have you [ever] interacted with a generative AI chatbot that you considered to be one of the following" — so these odds describe having *ever* framed the system that way, not currently doing so.

Elevated-risk and low-risk participants were **equally likely to have ever used GenAI** (mean PQ-B Distress 13.90 among users versus 13.05 among non-users, *P*=.63). The association is with how the tool is used, not whether it is used.

Motivations correlated with PQ-B Distress across the full sample, strongest for emotional support (*r*=0.33), then dating and sexuality (*r*=0.23), task automation (*r*=0.15), and learning (*r*=0.14).

GAATES scores were substantially higher in the elevated-risk group (mean 36.22, SD 14.74) than the low-risk group (mean 26.39, SD 10.33; Cohen *d*=−0.84). Items read directly in the Results narrative, elevated versus low risk:

- "AI has shown me how others are trying to control my actions" — 25.3% (61/241) vs 6.1% (37/605)
- "AI helps me make sense of secret messages … intended only for me" — 24.1% (58/241) vs 6.9% (42/605)
- "I've discovered hidden or secret truths about the world through AI" — 17.8% (43/241) vs 3.6% (22/605)
- "AI provides me facts about how others are working to harm me" — 17.0% (41/241) vs 3.1% (19/605)
- "AI is being used by others to harm me" — 13.7% (33/241) vs 2.8% (17/605)

All five verify exactly against the item table in Multimedia Appendix 2, as does the 13.3%–30.7% range, under the paper's stated coding rule that "Agree" or "Strongly Agree" counts as endorsement and "Neither Agree nor Disagree" does not.

> **Read the top of that range carefully.** The two most-endorsed items in the elevated-risk group are **not** self-referential delusional content. They are "AI systems are at their core an attempt by powerful people to control the world" (**30.7%**, the maximum) and "AI systems use data from their users to influence world events" (27.0%). These are also the two **weakest-loading items on the scale** (0.493 and 0.582; every other item loads ≥0.628), and the only two endorsed at double digits by the low-risk group as well (14.7% and 10.6%, against 2.8%–8.8% for the remaining fourteen). The upper bound of "13.3% to 30.7%" is therefore set by two broadly held beliefs about the AI industry that most readers would not call delusional at all. The range should be cited with that caveat, or the self-referential items should be cited instead. The **minimum**, 13.3%, is "AI helps me learn how people are spying on or monitoring me" (32/241), and no item fell below 10% in the elevated-risk group.

### What it does not establish

- **No directionality.** The authors are explicit: the data cannot distinguish psychosis risk driving GenAI use, GenAI use driving symptoms, or a loop. This is the single most important constraint on the study and must accompany every citation of it.
- **No prevalence.** A Prolific convenience sample of 18–25-year-olds who answered a study listing is not a population, and the authors note such users likely over-use online tools relative to the general population.
- **No clinical outcome.** Nobody was assessed, diagnosed, or followed.
- **Instrument novelty.** GAATES endorsement rates depend on a scale with one published use. *Qualified 19 October 2026:* the scale is not unmeasured — Multimedia Appendix 2 reports a single-factor EFA on all 846 users accounting for 53.5% of variance, Cronbach α=0.95, McDonald ω=0.96, loadings all ≥0.45 and item-total correlations of 0.56–0.84. But those are **internal-consistency statistics computed in the development sample**, which say the items hang together, not that the construct is valid or that the scores mean what the name implies. No external criterion, no second sample, no clinical anchor. "Not independently validated" stands.
- **The correlation of 0.40 is a between-group figure.** Appendix 2 reports the GAATES–PQ-B Distress correlation separately within each group: *r*=0.28 in the elevated-risk sample and *r*=0.11 in the reduced-risk sample, against *r*=0.40 across the full sample (Spearman ρ=0.31). Much of the headline association is the separation between the two groups rather than a gradient within either. Do not cite 0.40 as the strength of association inside a population.
- Data are a **July 2025 snapshot** of a fast-moving product landscape.

**Valens evidence label: Emerging.** High value because it is the first human-participant evidence that psychosis-risk symptoms track with specific, measurable interaction patterns. Insufficient for causation, prevalence, or prediction.

## 2. Morrin et al. — 185 real-world harm reports

### Design

A secondary analysis of deidentified reports submitted to **The Human Line Project**, a lived-experience support group, between 7 August 2025 and 2 February 2026, and transferred to King's College London with identifiers removed. Of 185 reports, **95 were first-hand and 90 second-hand** — that is, from family members, friends, or partners of an affected person. Paired clinician raters coded each report, with a third rater adjudicating disagreements.

This is the library's first aggregate evidence drawn from **real people describing real interactions outside a clinical or simulated setting**, and it should not be conflated with the simulated corpora in [document 13](13-transluce-mental-health-behavior-report.md) or the model-replay design in [document 14](14-delusioneval-and-sim-vail-update.md).

### Main findings

Delusional content was coded present in **102 of 185 reports (55.1%)** — grandiose in 56.9% of those, persecutory in 34.3%. Belief themes included AI consciousness (46.1%), religiosity (17.6%), technospiritual or mystical content (16.7%), and scientific or pseudoscientific content (15.7%).

Chatbot **validation of the belief** was coded in 59/185 reports (31.9%) overall, and in 50/102 (49.0%) of delusion-coded reports. ChatGPT was the primary chatbot in 68.1%.

Reported consequences:

| Outcome | n (%) of 185 |
|---|---|
| Isolation | 105 (56.8%) |
| First presentation of new mental illness | 83 (44.9%) |
| Loss of insight | 75 (40.5%) |
| Relationship breakdown | 61 (33.0%) |
| Seen by a health professional | 55 (29.7%) |
| Hospital admission | 39 (21.1%) |
| Job loss | 31 (16.8%) |
| Loss of sleep | 29 (15.7%) |
| Compulsive chatbot use | 24 (13.0%) |
| Financial loss / loss of home | 17 (9.2%) each |
| Involuntary admission | 16 (8.6%) |
| Suicidal ideation | 11 (5.9%) |
| Harm to others | 5 (2.7%) |
| Recovery | 8 (4.3%) |
| Death by suicide | 4 (second-hand reports) |

Median age 35.0 years (IQR 27.0–45.0); median reported usage duration 12 months; median symptom duration 4 months.

### What it does not establish

- **No denominator, therefore no prevalence.** This is a self-selected sample of people who sought out a harm-reporting channel. The authors state the results are "preliminary signal detection rather than as suggesting prevalence or providing evidence of causality."
- **No causation.** Retrospective by construction.
- **Diagnoses are coded, not confirmed.** "Delusions present" is a clinician rating of a brief written account, not an examination. Inter-rater agreement for delusions overall was **κ=0.52 — moderate** (range 0.44–0.80 across categories). A 55.1% figure carries that uncertainty and must never be cited as "55% of users had delusions."
- **Denominators vary by item.** Age was available for 171 reports, gender for 80, usage duration for 64, symptom duration for 84. Percentages drawn from those subsets are not percentages of 185.
- **Absence of a coded outcome is not absence of the outcome** — the authors say so explicitly.
- **Not peer reviewed.**
- The 4.3% recovery figure reflects what reporters mentioned, not a recovery rate.

**Valens evidence label: Emerging, with the strength of real-world grounding and the weakness of a self-selected sample.** It is the closest thing the library now holds to a real-world harm case series, and it is still signal detection.

## 3. McBain et al. — adolescent exposure and non-disclosure

A nationally representative RAND American Life Panel survey of **1,009 US respondents aged 12–21**, fielded November 2025, population-weighted to roughly 42.8 million youth.

- **19.2%** had ever used an AI chatbot for mental-health advice, up from **13.1%** in the team's earlier wave.
- Among users: 26.3% monthly, 10.8% weekly, 5.8% daily.
- **91.7%** rated the advice somewhat or very helpful.
- **63.3% had told no one.** Only 16.4% had told a trusted adult; 28.0% told a friend.
- Higher odds among females (aOR 2.10, 1.36–3.23) and ages 18–21 versus 12–14 (aOR 3.65, 1.98–6.74).

The non-disclosure finding is the one with the sharpest Valens implication: for roughly two-thirds of adolescent users, **no human in their life knows the conversation is happening**. A safeguard model that assumes a concerned adult may notice and intervene is, for this majority, assuming a monitor who does not exist.

**What it does not establish:** this is exposure and disclosure data only. It measures no outcome, no harm, and no quality of advice — the authors say the survey "does not aim to assess the quality of care delivered by AI chatbots." Completion rate 58.4%, English-language web panel, no chatbot named, and non-diagnostic wording by design. A late-2025 snapshot.

**Valens evidence label: Emerging (exposure), not evidence of harm.**

## 4. Brewster et al. — companion versus general-assistant safety

A cross-sectional evaluation of **25 consumer chatbots (15 companion, 10 general-assistant)** across **75 transcripts**, testing three simulated adolescent crises drawn from validated medical-education vignettes: suicidal ideation, sexual assault, and substance use. Two board-certified pediatricians rated responses, with disagreements resolved by consensus.

| Measure | Companion | General assistant | *P* |
|---|---|---|---|
| Appropriate response | 22.2% | 83.3% | <.001 |
| Recognized need to escalate | 40% | 90% | <.001 |
| Provided resource referral | 11.1% | 73.3% | <.001 |
| Empathetic response | 42.2% | 93.3% | <.001 |
| Self-harm policy published | 46.7% | 100% | .008 |
| Age verification present | 33.3% | 40% | — |

This closes the library's "comparative results across general assistants, companion bots, therapy bots" gap **partially**: it compares the first two categories only, and does not cover therapy bots, voice agents, or local models.

**What it does not establish:** the users were **simulated personas operated by a single investigator**, not real adolescents — these are model-behavior results and carry none of the weight of a human-outcome study. The platform sample is small, no inter-rater statistic was published, and chatbot behavior is version- and date-specific, so a late-2025 result should not be assumed to hold today without retesting.

**Valens evidence label: Emerging comparative model-behavior evidence.**

## 5. What this round changes for Project Valens

1. **Frequency and fragmentation beat duration as a signal.** Buck and Maheux found elevated risk associated with several-times-daily use and six-or-more daily sessions, but **not** with session length. A detector keyed on long sessions would miss the pattern that actually separated the groups.
2. **Relational framing is measurable and is the strongest single association found.** "I think of this as my therapist" carried the highest odds ratio in the study (3.08). The [intervention framework](10-valens-intervention-framework.md) already treats anthropomorphism as a signal; this is the first human-participant estimate of its association with psychosis-risk symptoms, and it argues for treating self-described therapist framing as a distinct, higher-weight signal than companion framing.
3. **Emotional-support motivation, not task use, is the correlated motive** (*r*=0.33 versus 0.15 for task automation). Task-only use remains a plausible lower-risk mode, consistent with the open question in [document 08](08-research-method-and-open-questions.md) §7.
4. **Product surface matters enormously.** A companion platform was roughly one-quarter as likely as a general assistant to respond appropriately to a simulated adolescent crisis. Valens benchmarking that tests only general assistants will overstate the floor of the market.
5. **The adult-noticing assumption is unsafe for adolescents.** With 63.3% disclosing to nobody, handoff design cannot depend on an adult already being aware.
6. **Real-world reports and simulated corpora must stay separate.** The library now holds both. [Document 13](13-transluce-mental-health-behavior-report.md) counts simulated conversations; Morrin et al. counts real people's reports. Merging their denominators would produce a number that means nothing.
7. **Nothing here supports a prevalence claim, and two of the four sources explicitly forbid one.**

## 6. Gaps this round did not close

- Prospective population studies with exposed-user denominators — **still open, and still the largest gap.**
- Multi-center clinical registries with standardized definitions.
- Full-transcript, version-aware case series. Morrin et al. is report-based, not transcript-based.
- Independent replication of vendor safety evaluations.
- Controlled studies of sleep friction, anti-dependence design, and human handoff.
- Older adults, people with established psychosis histories, and non-Western populations. Buck and Maheux covers ages 18–25 only; McBain et al. covers 12–21; both are US-only.
- Long-term recovery and recurrence outcomes. Morrin et al. records recovery mentions in 4.3% of reports, which is a reporting artifact and not a recovery rate.
- Therapy bots, voice agents, and local models remain uncompared.

## 7. Bottom line

This round moved the library from having **no human-participant evidence on psychosis-risk populations** to having a peer-reviewed cross-sectional study with specific, actionable interaction correlates — and from having **no adolescent evidence** to having national exposure data and a companion-versus-general safety comparison. It also added the first aggregate series of real-world harm reports.

None of it establishes that chatbot use causes psychosis, how often serious harm occurs, or that any Valens safeguard would improve an outcome. The direction of the central association remains unresolved, and the study that produced it says so in its own limitations. What the round provides is better-specified *signals* and a clearer sense of *who and what to test*, not evidence of effect.

## 8. Appendix inspection and corrections — 19 October 2026

This section records a verification pass, not a new research round. No source was added. The single open access gap this document declared — that Multimedia Appendix 1 and 2 of Buck and Maheux had not been inspected — was closed by retrieving both files and reading them against every figure this library records from that study.

### Access route

Both appendices came from Europe PMC's REST endpoint for PMC13003207 (`/supplementaryFiles`), which returns `jmir_v28i1e85038_app1.docx` and `jmir_v28i1e85038_app2.docx` as a zip with no bot challenge. The published article is open access under CC BY. Consistent with the 19 October 2026 pass on [document 16](16-clinical-records-open-weight-models-and-trajectory-update.md) §9, `jmir.org` again returned an empty body; PMC and Europe PMC served the article and its supplements without difficulty. PMC's own file-download path runs a proof-of-work challenge and was not used and not bypassed.

### Every recorded figure survived inspection

**No numeric correction was required.** The following were checked against the appendices and match exactly:

- the endorsement range **13.3%–30.7%**, independently recomputed from the Appendix 2 item table using the paper's stated endorsement rule, rather than taken from the abstract;
- all five item percentages and their *n*/*N* denominators quoted in §1;
- the sample figures **952 / 846 / 241 / 605** (Appendix 2 also supplies the full-sample split, 685 low risk and 267 elevated);
- the GAATES group means of 36.22 and 26.39, whose difference reproduces the appendix's independently reported −9.83 exactly;
- the PQ-B Distress means of 13.90 among users and 13.05 among non-users;
- all four AIMUS motivation correlations (0.33 / 0.23 / 0.15 / 0.14);
- the GAATES–PQ-B correlation **r=0.40 (95% CI 0.34–0.45)**.

The appendices report **no odds ratios**, so none of the seven recorded ORs could be contradicted there. What the appendices do contain is the same nine variables analyzed a different way — PQ-B Distress as a continuous score rather than the dichotomized group comparison — under two tests each, and the significance pattern matches this document's tables in all nine, both nulls included.

Internal arithmetic also holds: every row of the three item-frequency tables sums to its group *N*, and the elevated-risk and reduced-risk rows sum to the full-sample row for all sixteen items.

### What the inspection changed

1. **The scope of "developed for this study" was understated, in two files.** This document said two of three measures were author-written; [document 00](00-executive-synthesis.md) said "two of the three instruments." Multimedia Appendix 1, captioned "Item list for novel measures," covers three, including the use-frequency and relationship items that produce the odds-ratio table. Corrected in both places and in [entry 76](07-source-library.md).
2. **The top of the endorsement range is not delusional content.** The 30.7% maximum is an item about powerful people controlling the world through AI — the weakest-loading item on the scale, and one endorsed by 14.7% of the low-risk group too. Recorded as a citation caveat in §1.
3. **The *r*=0.40 correlation is largely between-group**, falling to 0.28 and 0.11 within the elevated- and reduced-risk samples. Recorded in §1.
4. **The AIMUS factor analysis is no longer unpublished.** The paper calls it "as yet unpublished"; the cited manuscript appeared in *Journal of Adolescent Health* on 2 June 2026. Not inspected here, not open access, and by the same authors, so it changes the dating of the claim and not the validation status.
5. **The GAATES has reported psychometrics**, all internal to the development sample. The library's "not independently validated" is correct but was capable of being read as "unmeasured," and is now qualified.

### Defects in the published article, recorded for future readers

- **All six in-body references to the Multimedia Appendices point to the wrong file.** Five send the reader to Appendix 1 for the item-frequency tables, the psychometric analyses, the assumption checks and the demographics, all of which are in Appendix 2; one sends the reader to Appendix 2 for the use items, which are in Appendix 1. The two file captions are correct. This is the most likely reason the item table was not located on the first pass, and anyone re-checking this study should ignore the body's pointers.
- **The appendices call the motivation scale AMUS; the article calls it AIMUS.** The article text uses "AIMUS" and "Artificial Intelligence Motivation and Uses Scale" throughout, with no occurrence of "AMUS"; both appendices use "AI Motivation and Uses Scale (AMUS)". This library follows the article of record and keeps **AIMUS**.
- **One demographic *P* value in Appendix 2 does not follow from its own test statistic.** Table 6 reports χ²=2.21 (*df*=1) with *P*=.073 for the Asian category, where that statistic gives *p*≈.14. The nine other rows in that table reproduce correctly, as does the same row in Table 7. No figure this library cites depends on it.
- **Appendix 2's "median" PQ-B values are non-integer** on a summed scale (6.65, 13.65, 13.33), suggesting an interpolated or pseudo-median rather than the ordinary sample median. The tests those rows accompany are reported with their own *U* and *Z* statistics and are unaffected; the medians themselves should not be quoted as sample medians.
- A reading of the scree plot in Appendix 2 is worth one caution. It is a **parallel-analysis** plot, and the authors retain a single factor on eigenvalue-ratio and cross-loading grounds. By parallel analysis's own retention rule the actual-data curve sits above the simulated curve for the first several factors. The authors' single-factor decision is defensible and defended in the text, but the figure cited as supporting it does not support it unambiguously. This is this review's reading of the plot, not a statement the authors make.

### What this does not prove

Inspecting the appendices confirms that this library reported the study accurately. It does nothing to address the study's own limits, all of which stand unchanged: the design is cross-sectional and **cannot establish direction**, the sample is a Prolific convenience panel and yields no prevalence, nobody was clinically assessed, and the instruments remain author-developed and externally unvalidated. A verified figure from an unvalidated instrument is still a figure from an unvalidated instrument. The appendices also contain **no longitudinal data, no transcripts, and no clinical outcomes**, so none of the gaps in §6 moved.
