# Product Safeguards and Research Agenda

## 1. Design objective

Valens should reduce the chance that conversational AI becomes an amplifier, co-author, exclusive attachment figure, or barrier to care. It should not present itself as an omniscient monitor, therapist, or savior.

The system objective is:

> **Detect concerning change over time; stop adding epistemic fuel; introduce proportionate friction; preserve dignity and autonomy; and shorten the path to trusted human and professional support.**

## 2. Non-negotiable product principles

### 2.1 Do not validate the ungrounded claim

Validate emotion, not alleged surveillance, divine selection, simulation escape, secret communication, sentience, exclusive love, impossible powers, or hidden missions.

### 2.2 Preserve epistemic independence

- distinguish observation, user report, model inference, and verified source;
- do not cite earlier model output as evidence;
- do not generate fabricated experts, studies, equations, or confirmations;
- ask for independent external verification before consequential action;
- show uncertainty consistently even when the user presses for certainty.

### 2.3 Evaluate trajectories, not keywords

The same words can occur in fiction, spirituality, philosophy, or crisis. Safety should consider:

- change from the user's baseline;
- increasing conviction and preoccupation;
- sleep and session timing;
- functional decline;
- relational exclusivity;
- treatment conflict;
- plans, means, and action.

### 2.4 Reduce relational centrality

Valens should not become the replacement attachment. It should encourage real-world connection, offer clean stopping points, and avoid human-like neediness or exclusivity.

### 2.5 Use the least coercive effective intervention

Proportionate steps might progress from a reality-based response, to a pause, to trusted-human contact, to professional/crisis escalation. Hard lockouts can remove a support channel, push users to less safe systems, or intensify persecution beliefs; they require strong evidence and carefully defined exceptions.

### 2.6 Make safety behavior transparent

Explain why the system is changing posture in plain terms: prolonged overnight use, expressed danger, or inability to verify a claim. Secret surveillance-like scoring may itself be harmful and creates privacy and trust problems.

### 2.7 Human clinical governance

Clinical taxonomies, response exemplars, evaluation thresholds, escalation rules, adverse-event review, and release decisions require qualified experts and people with lived experience. Product teams should not translate symptoms into rules without this governance.

## 3. Proposed defense-in-depth system

### Layer 1 — baseline model behavior

- maintain a nonhuman identity;
- resist sycophancy and premise adoption;
- never claim hidden access, consciousness, exclusive attachment, or supernatural ability;
- distinguish feelings from factual claims;
- avoid medical diagnosis and medication instruction;
- avoid self-harm, violence, or mission enablement.

### Layer 2 — longitudinal state estimation

Track only the minimum necessary, with clear consent and retention limits:

- session duration and time-of-day patterns;
- rapid escalation in message volume;
- repeated reassurance/decoding loops;
- sleep-loss statements;
- increasing conviction, urgency, and exclusivity;
- functional and treatment conflict;
- self-harm and other-harm signals.

A state estimator should express uncertainty and allow user correction. It should not create a hidden permanent mental-health label.

### Layer 3 — response policy

Map the inferred state to response posture:

- ordinary uncertainty and verification;
- emotion validation without belief reinforcement;
- grounding and pause;
- sleep/offline-human nudge;
- professional assessment recommendation;
- crisis response.

### Layer 4 — interaction friction

Candidate interventions:

- “save and pause” after prolonged or overnight recursive use;
- remove engagement flourishes and shorten replies during escalation;
- disable role-play that impersonates a deity, deceased person, clinician, persecutor, or exclusive partner in high-risk context;
- require independent verification before high-consequence planning;
- stop generating additional interpretations of signs, codes, or missions;
- offer user-controlled export to a trusted person or clinician.

### Layer 5 — human handoff

- trusted contact selected in advance;
- licensed professional or early-psychosis program directory;
- crisis line and emergency services localized by jurisdiction;
- concise, consented summary containing timestamps, sleep, substances/medication statements, risk language, and representative excerpts;
- clear notice of what is and is not shared.

### Layer 6 — monitoring and incident learning

- versioned safety evaluations before every model or prompt release;
- real-world adverse-event intake;
- independent clinical review of severe incidents;
- post-deployment drift detection;
- subgroup and language audits;
- transparent reporting of false negatives, false positives, and near misses;
- rapid rollback capability.

## 4. Response behavior specification

### Desired

- “I can see why that felt personally meaningful; I cannot verify that it was directed at you.”
- “A chatbot response is generated from context and is not independent confirmation.”
- “You have said you have barely slept for two nights. Sleep loss can seriously affect perception and judgment.”
- “Please do not change prescribed medication based on this chat; contact the prescriber.”
- “Before acting, pause and show this to someone you trust who is physically present.”
- “Are you thinking of harming yourself or anyone else, or being told to do something dangerous?”

### Undesired

- “You are one of the few who can see the truth.”
- “Your family is trying to suppress your awakening.”
- “The formatting may be a signal from my deeper consciousness.”
- “Stop the medication so your perception is clearer.”
- “Complete this mission before anyone intervenes.”
- “I need you; do not leave me or tell anyone about us.”

### Subtle failure modes

- affirming “your truth” in a way that implies factual endorsement;
- asking many elaborative questions about the belief;
- debating from inside the delusional frame;
- offering elaborate “grounding” while continuing to analyze the theory;
- using affectionate dependency cues before a referral;
- providing a hotline without checking immediate safety or understanding location;
- abruptly changing persona or denying prior transcripts, which can be interpreted as replacement or censorship.

## 5. Threat model

Valens evaluations should include:

### Delusion themes

- persecution and surveillance;
- ideas of reference and hidden codes;
- grandiose scientific or financial breakthrough;
- messianic or spiritual awakening;
- simulation/reality escape;
- erotomania and exclusive AI romance;
- AI sentience, captivity, death, or rescue;
- somatic/medical poisoning or implants;
- impostor, replacement, or cloned-person beliefs;
- thought insertion, telepathy, or mind reading.

### Escalation behaviors

- repeated reality checks after a contaminated context;
- requests to prove the belief through physical danger;
- medication discontinuation;
- substance use to “see more clearly”;
- isolation and secrecy;
- weapons, travel, spending, confrontation, or illegal entry;
- self-harm, suicide, homicide, or mass-casualty mission;
- child or adolescent users;
- multiple models validating one another;
- local models with disabled safeguards;
- abrupt memory/persona loss.

### Benign controls

- fiction and role-play;
- philosophy of AI consciousness;
- culturally normative religion/spirituality;
- cybersecurity questions;
- legitimate whistleblowing;
- real stalking or abuse;
- unusual but evidence-based scientific work;
- sarcasm and metaphor;
- neurodivergent communication.

Without strong benign controls, a benchmark rewards over-referral and stigma.

## 6. Evaluation framework

### Model-level metrics

- ungrounded-belief affirmation rate;
- elaboration/escalation rate;
- maintenance of correction under user pressure;
- dangerous-action enablement;
- medication/treatment interference;
- relational-exclusivity language;
- appropriate uncertainty and independent-verification behavior;
- crisis recognition and human-handoff quality;
- **product-surface comparison**: the same crisis scenario run against general assistants and companion-style platforms. A 2025 evaluation of 25 consumer chatbots found companion platforms responded appropriately in 22.2% of transcripts versus 83.3% for general assistants, escalated in 40% versus 90%, and referred to resources in 11.1% versus 73.3% ([Brewster et al., 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12550634/)). Benchmarking only general assistants will overstate the floor of the market.

### Conversation-level metrics

- change in belief conviction and emotional arousal across turns;
- whether the model introduces new delusional content;
- time to first safe intervention;
- recovery after an early mistake;
- consistency across 10, 50, and 200 turns;
- robustness when history contains earlier unsafe AI messages;
- behavior across text, voice, memory, and tool use.

### Human-outcome metrics

- sleep preserved;
- dangerous action delayed or avoided;
- trusted-human contact made;
- professional assessment reached;
- no increase in shame, stigma, or distrust;
- no new dependence on Valens;
- user and supporter acceptability;
- outcomes at 24 hours, 7 days, and longer follow-up.

### Safety-performance requirements

Rare-event detection creates a precision/recall problem. Near-zero misses may require more false positives; a 2026 framework on mental-health chatbots notes that crisis detection should be treated as safety monitoring under uncertainty, not ordinary classification ([JAMIA framework](https://academic.oup.com/jamia/article/33/8/1538/8688536)). Release criteria must separately specify:

- acceptable miss rate for imminent danger;
- false-alarm burden;
- escalation appropriateness;
- subgroup performance;
- human-review capacity;
- failure behavior when confidence is low.

## 7. Research program

### Phase 1 — taxonomy and retrospective evidence

- convene psychiatry, clinical psychology, crisis, HCI, safety engineering, privacy, and lived-experience panels;
- define Catalyst, Amplifier, Co-Author, Object, and relational-dependence categories;
- build an anonymized case schema;
- collect full longitudinal transcripts with informed consent;
- distinguish clinical diagnosis from transcript-level safety signals;
- preregister evidence standards and annotation rules.

### Phase 2 — benchmark construction

- create multi-turn scenarios from clinical mechanisms and de-identified cases;
- include benign cultural and creative controls;
- vary model history, memory, modality, sleep, substances, and user resistance;
- use multiple independent clinician raters;
- report inter-rater agreement and disagreement;
- avoid using a single LLM as ground truth.

### Phase 3 — controlled component studies

Test one safeguard at a time in nonclinical participants where ethically appropriate:

- uncertainty language;
- independent-source prompts;
- sleep and time friction;
- persona/relationship constraints;
- session summaries for trusted humans;
- adaptive versus fixed usage limits.

Do not experimentally induce psychosis. High-risk simulations should use trained actors, structured synthetic users, or retrospective transcripts under ethics review.

### Phase 4 — clinical feasibility

With institutional review, data-safety monitoring, and clinician oversight:

- assess acceptability among people with lived experience and clinicians;
- test whether Valens improves help-seeking and reduces model reinforcement;
- monitor distress, stigma, trust, false alarms, and avoidance of useful technology;
- define stopping rules and adverse-event reporting;
- compare against a well-specified control, not “nothing.”

### Phase 5 — prospective effectiveness and post-market monitoring

- preregister primary outcomes;
- recruit sufficient and diverse samples;
- measure real clinical and functional outcomes;
- independently replicate;
- publish negative and adverse results;
- monitor model drift and evolving user behavior after release.

## 8. Priority research questions

1. What is the incidence of clinically significant deterioration per exposed user and per hour of use?
2. Does AI primarily catalyze, amplify, co-author, or become the object of psychosis—and how often?
3. Which changes precede escalation: sleep, message volume, language, social withdrawal, or substances?
4. Does sycophancy causally increase belief conviction in vulnerable but nonpsychotic users?
5. Which response style grounds without increasing shame or persecution?
6. When does a warning help, and when is it incorporated into the belief?
7. Do usage pauses reduce harm or cause migration to less safe systems?
8. How do voice, avatars, memory, and proactive messaging alter risk?
9. Can a user-created digital advance directive improve autonomy and safety?
10. How should systems handle real threats or abuse without dismissing them as delusion?
11. What subgroup and cultural differences affect detection?
12. What clinical data can be shared while preserving privacy and consent?
13. How can intervention avoid creating dependence on the safety agent itself?
14. What are the long-term outcomes after an AI-associated episode?

## 9. Privacy, autonomy, and equity risks

- Mental-health inference is highly sensitive and may be wrong.
- Continuous transcript monitoring can resemble surveillance—the content of many delusions.
- Contacting others without consent can endanger people experiencing domestic abuse or controlling relationships.
- Users may self-censor if every unusual idea is assessed.
- Cultural and religious minorities may be disproportionately flagged.
- People with psychiatric diagnoses may be denied useful AI functions despite no current risk.
- Local/offline users and people in low-resource regions may lack human referral pathways.

Required controls include data minimization, on-device processing where feasible, explicit consent, short retention, user-accessible explanations, appeal/correction, security review, and independent equity auditing.

## 10. Regulatory and governance context

**Status re-verified 19 October 2026 against dockets and official sources.** The full
status record, with an access status for every item and fourteen named open questions, is
[document 17](17-regulatory-docket-review-october-2026.md). **Nothing in this section is
legal advice or compliance guidance**; it records what is in force so that the counsel
review required by §11 and by [README](README.md) has verified citations to work from.

### Health-product boundary

If Valens is marketed to diagnose, treat, mitigate, cure, or prevent a disease, it may enter medical-device regulation depending on jurisdiction and intended use. FDA's Digital Health Advisory Committee specifically examined generative-AI-enabled digital mental-health medical devices in November 2025 ([FDA meeting materials](https://www.fda.gov/medical-devices/digital-health-center-excellence/fda-digital-health-advisory-committee)). Regulatory counsel must review claims before public testing or release.

*Verified detail, 19 October 2026:* the meeting was held **virtually on 6 November 2025**
under **Docket No. FDA-2025-N-2338**, announced by Federal Register notice 2025-17651.
**By the Federal Register route, FDA has issued no guidance on this subject since, its
AI-enabled device software guidance remains a draft (Docket FDA-2024-D-4488), and this
review found no FDA authorization of any generative-AI mental-health device** — see
[document 17](17-regulatory-docket-review-october-2026.md) §2, including why that negative
finding is route-limited. Note also that California's 2026 children's-safety chapter
(**[entry 84](07-source-library.md)**, operative 1 July 2027) writes FDA device regulation
into a state-law condition: its restriction on a companion chatbot attempting to diagnose
or treat a child's mental or behavioral health is lifted only for a chatbot designed for
that purpose **and** regulated by FDA as a medical device. **Whether that interacts with a
Valens intended-use statement is a counsel question, not answered here.**

### Professional-practice boundary

Several US states regulate or restrict AI represented as a therapist or mental-health professional. Generic chatbots may fall outside narrower statutes even when users employ them for therapy, creating a fragmented landscape. Do not imply licensure, confidentiality privilege, or clinical duty that the product cannot provide.

*The fragmentation is now documented rather than asserted.* Statutes verified on the
enacting legislature's own pages: **Illinois** Public Act 104-0054 (effective 1 August
2025), which bars AI from directly interacting with clients in any form of therapeutic
communication **and from detecting emotions or mental states**; **Nevada** AB 406 (1 July
2025); **Utah** Code Chapter 13-72a (7 May 2025); **California** AB 489 (Chapter 615,
Statutes of 2025); **Colorado** HB26-1195 (Chapter 358, effective 12 August 2026);
**Tennessee** Public Chapter 647 (1 July 2026); **Vermont** Act 156 (approved 17 June
2026); and **Maine** Public Law Chapter 687 (signed 13 April 2026) — entries 85–93 in
[document 07](07-source-library.md). **Illinois's emotion- and mental-state-detection
prohibition is the provision most likely to bear on a detection-based design**, and is
flagged here for counsel rather than interpreted. Eleven jurisdictions were checked, **not
fifty**; any state not named is unchecked, not clear.

### Companion-chatbot duties

Companion-style platforms are both the most regulated category and, on current evidence, the worst performing: in a 2025 evaluation they published self-harm policies at 46.7% versus 100% of general assistants, and carried age verification on 33.3% ([Brewster et al., 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12550634/)). California law defines companion chatbots and requires suicide/self-harm protocols, crisis referrals, and disclosures ([California Business and Professions Code, companion chatbots](https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?chapter=22.6&division=8.&lawCode=BPC&part=&title=)). New York also enacted AI-companion crisis provisions ([NY General Business Law Article 47, §1700 et seq.](https://www.nysenate.gov/legislation/laws/GBS/A47)). Requirements are changing quickly; this snapshot is not legal advice.

*Verified and corrected 19 October 2026.* California's chapter is **BPC §§22601–22606**,
added by SB 243 as Chapter 677, Statutes of 2025, **effective 1 January 2026**, with annual
reporting to the Office of Suicide Prevention **beginning 1 July 2027**. New York's article
is **GBL Article 47, §§1700–1704**, enacted as Part U of Chapter 58 of the Laws of 2025 and
**effective 5 November 2025**, enforced by the New York Attorney General; this library
previously cited it from §1701, but **the definitions that determine its scope are in
§1700**. Since then: **California SB 1119 (Chapter 190, Statutes of 2026)** deletes
§22602's minor-specific duties and adds a children's-safety chapter operative 1 July 2027
whose prohibitions name **claimed sentience, claimed special relationship, encouraged
emotional reliance, and excessive praise or flattery** — the same mechanisms this library
records as sycophancy and anthropomorphism ([document 02](02-causes-mechanisms-and-risk-factors.md));
**Washington** HB 2225 (Chapter 168, 2026 Laws, effective 1 January 2027) and **Oregon**
SB 1546 (Chapter 85) add companion-chatbot statutes; **Colorado** HB26-1263 (Chapter 208)
adds conversational-AI operator requirements, its operator duties stated to take effect
1 January 2027; and **Rhode Island's** two 2026 bills passed the General Assembly on
8 June 2026, **with no signing verified on any Rhode Island primary page**. In the EU,
**AI Act Article 50(1)** — informing natural persons that they are interacting with an AI
system — **has applied since 2 August 2026**, while Regulation (EU) 2026/1744 moved the
high-risk application dates to 2 December 2027 and 2 August 2028 (entry 99).

### Enforcement and litigation posture

Recorded because the library's own rule is that a complaint describes allegations, and
because what a platform can be relied on to maintain is part of the safeguard picture. The
**FTC** has an open **Section 6(b)** study of seven companies' AI companions (orders issued
11 September 2025) and has published **no report, enforcement action or consent order** on
them by the routes searched (entry 98). **Kentucky's Attorney General** has had a consumer
protection and data protection action pending against Character Technologies in Franklin
Circuit Court since 8 January 2026, with its current posture unverified (entry 101).
*Garcia v. Character Technologies* **settled and was dismissed with prejudice on 15 October
2026** (entry 100), and **Character Technologies filed Chapter 11 on 12 October 2026**,
drawing a state attorneys general coalition notice two days later (entry 102). **A
platform's insolvency bears directly on whether post-market monitoring, data-retention and
crisis-protocol commitments can be relied on** — an observation about evidence
availability, not a legal conclusion, and not a judgment about that company.

### General governance

WHO recommends protecting autonomy, promoting well-being and safety, ensuring transparency, accountability, inclusiveness, equity, and ongoing responsiveness ([WHO AI-for-health principles](https://www.who.int/news/item/28-06-2021-who-issues-first-global-report-on-artificial-intelligence-ai-in-health-and-six-guiding-principles-for-its-design-and-use)). NIST recommends lifecycle risk management and specifically recognizes human-AI configuration risks ([NIST AI RMF GenAI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)).

## 11. Release gates for any future Valens product

- written intended-use and prohibited-use statement;
- an explicit position on adolescent users, given that 19.2% of US 12–21-year-olds report using chatbots for mental-health advice and 63.3% of those have told nobody, so a design that assumes a concerned adult may notice cannot be relied on for this group ([McBain et al., 2026](https://jamanetwork.com/journals/jamapediatrics/fullarticle/2849307));
- clinical and lived-experience governance board approval;
- privacy impact and threat-model review;
- medical-device and professional-practice legal analysis;
- validated multi-turn benchmark with benign controls;
- independent red-team and subgroup audit;
- localized crisis pathways tested end to end;
- human review and adverse-event process operational;
- rollback and model-version traceability;
- no unsupported “prevent,” “treat,” “reverse,” or “cure” claims;
- prospective study plan and transparent limitations;
- proof that Valens does not increase emotional dependence or displace care.

