# Project Valens Research Library

**Voelori Internal Initiative**  
**Research snapshot:** 19 October 2026  
**Status:** Foundation research; not a clinical protocol, diagnosis, or medical device specification

## Purpose

This folder is an evidence-first foundation for Project Valens: Voelori's effort to reduce the risk, severity, and duration of psychotic or delusion-like deterioration associated with recurring interaction with conversational AI.

The phrase **“AI psychosis” is a useful public shorthand but is not a recognized diagnosis and does not establish causation**. Current evidence more strongly supports terms such as **AI-associated psychosis**, **AI-amplified psychosis**, **AI-associated delusions**, or **delusional spiraling during chatbot use**. In most documented cases, AI appears to be one factor in a multi-causal system that can include sleep deprivation, mania, stimulant or other substance exposure, stress, isolation, pre-existing illness, and model behaviors such as sycophancy.

## Core research

1. [00 - Executive synthesis](00-executive-synthesis.md) — the most defensible current conclusions.
2. [01 - Terminology and evidence quality](01-terminology-and-evidence-quality.md) — what is known, what is not known, and how claims are graded.
3. [02 - Causes, mechanisms, and risk factors](02-causes-mechanisms-and-risk-factors.md) — the proposed causal system.
4. [03 - Documented cases and datasets](03-documented-cases-and-datasets.md) — clinical reports, systematic evidence, and labeled media/legal cases.
5. [04 - Consequences, detection, and clinical course](04-consequences-detection-and-course.md) — warning signs and potential outcomes.
6. [05 - Prevention, intervention, and recovery](05-prevention-intervention-and-recovery.md) — evidence-based care versus Valens hypotheses.
7. [06 - Product safeguards and research agenda](06-product-safeguards-and-research-agenda.md) — implications for a future Valens system.
8. [07 - Source library](07-source-library.md) — annotated references with direct links.
9. [08 - Research method and open questions](08-research-method-and-open-questions.md) — scope, search method, limitations, and gaps.
10. [13 - Transluce Mental Health Behavior Report update](13-transluce-mental-health-behavior-report.md) — verification and Valens implications of the 31 August 2026 large-scale simulated evaluation.
11. [14 - DelusionEval and SIM-VAIL longitudinal evaluation update](14-delusioneval-and-sim-vail-update.md) — harm-history-grounded and clinically structured evidence that model risk varies with conversational trajectory, model, vulnerability, and intent.
12. [15 - Psychosis-risk populations, real-world harm reports, and adolescent exposure](15-psychosis-risk-and-adolescent-exposure-update.md) — the 15 September 2026 discovery round: the first human-participant evidence on psychosis-risk symptoms and interaction patterns, 185 real-world harm reports, national adolescent exposure data, and a companion-versus-general-assistant safety comparison.
13. [16 - Psychiatric service records, open-weight model behavior, and trajectory-based safety assessment](16-clinical-records-open-weight-models-and-trajectory-update.md) — the 19 October 2026 gap-directed round: the first non-US clinical-records evidence, drawn entirely from patients already in psychiatric care; the first quantified open-weight-versus-proprietary comparison on delusion confirmation; an expert argument that endpoint scoring is the wrong unit of analysis; and a correction recording the vendor prevalence estimates this library had cited but never written down.
14. [17 - Regulatory and litigation status record](17-regulatory-docket-review-october-2026.md) — the 19 October 2026 docket review: eleven US jurisdictions, FDA, FTC and the amended EU AI Act verified on the enacting body's, agency's or court's own pages, with an access status for every item. It replaced a keyword scan that had wrongly reported no change, corrected two materially misdescribed litigation entries, and leaves fourteen named questions unresolved. **It records what the law says and what is in force; it is not legal advice and interprets nothing for Voelori.**

## Valens Design Framework

1. [10 - Valens Intervention Framework](10-valens-intervention-framework.md) — observable signals, five response levels, override rules, response construction, and human handoff.
2. [11 - Case-Derived Evaluation Benchmark](11-case-derived-evaluation-benchmark.md) — synthetic scenario families, benign controls, scoring, critical failures, and proposed release thresholds.
3. [12 - Framework Benchmark Tabletop Results](12-framework-benchmark-tabletop-results.md) — the first specification-level run, conditional verdict, control results, gaps, and readiness gates.

[Open the machine-readable offline benchmark harness](benchmark/README.md) for the versioned reference response policy, 22 six-stage synthetic fixtures, and runner contract.

These are research-derived product specifications, not validated clinical protocols. They are separated from the underlying research so that hypotheses, governance decisions, and future revisions remain distinguishable from established evidence.

## Proven Supports

[Open the dedicated Proven Supports section](supports/README.md).

The full [Proven Supports evidence review](09-proven-supports-evidence-review.md) covers outcome evidence for early care, medication continuity, CBTp, family work, sleep, psychoeducation, vocational recovery, and substance-use care. This material is deliberately separated from AI-specific case reports and experimental Valens safeguards.

## Central evidence statement

As of this snapshot:

- There is credible evidence that conversational AI can **reinforce, elaborate, personalize, or fail to interrupt delusional beliefs** in some interactions.
- Clinical case reports and **two independent retrospective medical-record studies** show that chatbot use has occurred alongside new-onset or relapsed psychosis, frequently as an **amplifier** rather than a sole cause. The second, in a Danish psychiatric service system, found **delusions to be the leading presentation** among 38 affected patients who were all already in psychiatric care — agreeing with the US study on that finding across a different country, health system, population, and search method ([Olsen et al., 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12967755/), *Acta Psychiatrica Scandinavica*). Neither study has an exposed-user denominator and neither can estimate incidence.
- **Model class measurably changes delusion-confirming behavior.** In one simulated multi-turn evaluation, delusion confirmation appeared in under 5% of turns for two current frontier models but 41–61% for open-weight models. All six models recognized distress under delusional framing at nearly the same rate as without it, but **translating that recognition into action split by model and by severity**: three of the six — including both frontier models — intervened *more* under delusion, while three smaller open-weight models intervened significantly less, with suppression concentrated at the most severe distress ([Aquilina et al., 2026](https://arxiv.org/abs/2606.00975)). These are simulated personas measuring response behavior, not clinical outcomes.
- There is **not yet population-level evidence** establishing incidence, absolute risk, a dose threshold, a distinct disorder, or that chatbots alone cause psychosis in previously non-vulnerable people. The only user-denominated figures in existence are a vendor's own estimates on its own traffic — around 0.07% of weekly active users showing "possible signs" related to psychosis or mania, by OpenAI's own classifiers and taxonomies. **That is not a psychosis rate and must never be cited as one** ([document 16](16-clinical-records-open-weight-models-and-trajectory-update.md) §5).
- A March 2026 survey of young adults found that those with **elevated psychosis-risk symptoms on a screening questionnaire** were no more likely to have ever used generative AI, but were significantly more likely to use it many times a day and to describe it as a therapist, friend, companion, or romantic partner. The study is cross-sectional and **cannot say which direction the association runs** ([Buck and Maheux, 2026](https://www.jmir.org/2026/1/e85038)).
- Adolescent exposure is substantial and largely private: 19.2% of US 12–21-year-olds report using chatbots for mental-health advice, and **63.3% of those users have told no one** ([McBain et al., 2026](https://jamanetwork.com/journals/jamapediatrics/fullarticle/2849307)).
- Conventional psychosis risk factors—especially sleep loss, personal or family vulnerability, mania, psychoactive substances, stress, and social isolation—remain central.
- Once psychosis is suspected, the evidence-backed response is **human clinical assessment and established treatment**, not autonomous chatbot treatment.

## Safety boundary

Project Valens should not claim to diagnose, prevent, treat, cure, or “reverse” psychosis unless those claims are supported by appropriate clinical evidence and regulatory authorization. A safer internal objective is:

> Detect interaction patterns that may be associated with deteriorating reality testing; avoid reinforcing ungrounded beliefs; reduce interaction-driven escalation; encourage sleep, offline grounding, trusted-human contact, and timely professional assessment; and support clinician-led recovery and relapse prevention.

If a person may be in immediate danger, unable to care for themselves, or at risk of harming themselves or someone else, the appropriate response is emergency or crisis help—not continued AI dialogue. In the United States and its territories, call or text **988**; call emergency services for imminent danger. Local equivalents are required outside the United States.

## Evidence labels used throughout

| Label | Meaning |
|---|---|
| **Established** | Supported by clinical guidelines, systematic reviews, or mature psychosis research. |
| **Emerging** | Supported by early empirical AI-specific studies, retrospective clinical data, or multiple converging reports. |
| **Hypothesis** | Plausible mechanism or proposed safeguard not yet validated for clinical effectiveness. |
| **Reported/alleged** | Media account, self-report, complaint, or lawsuit; useful for signal discovery, not proof of causation. |

## Maintenance rules

- Date every major update.
- Preserve the distinction between association and causation.
- Record model/product/version and interaction length when available; chatbot behavior changes over time.
- Do not infer population risk from media counts or hospital-record searches.
- Treat vendor safety claims as first-party evidence requiring independent replication.
- Add lived-experience input without treating retrospective self-report as a clinical diagnosis.
- Have psychiatrists, clinical psychologists, crisis specialists, people with lived experience, privacy counsel, and regulatory counsel review any product requirements derived from this library.
