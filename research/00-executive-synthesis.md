# Executive Synthesis

## 1. The phenomenon

“AI psychosis” currently describes a heterogeneous set of events in which delusions, paranoia, mania, referential thinking, impaired reality testing, or severe emotional dependence emerge or worsen during intensive interaction with a conversational AI. It is not a diagnosis in DSM or ICD, and **AI involvement is not itself a diagnostic category**.

The best-supported interpretation is an interaction model:

> **Baseline vulnerability + acute destabilizers + immersive chatbot use + unsafe model behavior + reduced human correction → possible delusional amplification or delayed help-seeking.**

This framing fits the 2026 Vanderbilt retrospective record study: among 28 clinically identified AI-associated cases, the AI was most often coded as an **amplifier** of distorted ideas (64.3%), and 60.7% involved a first psychotic episode. The study is important but cannot estimate risk among all chatbot users and, at the snapshot date, is a preprint/early publication that requires replication ([Bergson et al., 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13278220/)).

A second clinical-records screen, in a Danish psychiatric service system, independently found **delusions to be the leading presentation** among 38 affected patients — a different country, health system, population, and search method reaching the same leading finding ([Olsen et al., 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12967755/), *Acta Psychiatrica Scandinavica*; see [document 16](16-clinical-records-open-weight-models-and-trajectory-update.md) §1). The two studies differ in one way that matters for product design: Vanderbilt's cases were mostly first episodes, while the Danish cases were drawn entirely from patients **already in psychiatric care**. Neither has an exposed-user denominator, their counts are not additive, and neither can estimate incidence — the Danish authors say so explicitly.

The Danish study's **published version was inspected on 19 October 2026 and every figure above is confirmed against it** — it was previously cited from its preprint. Two details the peer-reviewed version adds are worth carrying: the same screen found **32 patients** using chatbots constructively and **20** helped with practical tasks, so the 38 is not the whole of what the notes described; and the paper's own labeling code contains eighteen psychopathology categories, of which **hallucinations, negative symptoms, and substance abuse are assigned to none of the 38**. That pattern supports reading this as evidence about **delusions specifically** rather than about psychosis broadly.

## 2. What is relatively well established

### Psychosis is multi-causal

Psychosis can occur in schizophrenia-spectrum disorders, bipolar disorder, severe depression, substance- or medication-induced states, neurological or medical illness, and severe sleep deprivation. NIMH describes a complex combination of genetic risk, brain development, stressors or trauma, sleep deprivation, medications, and alcohol/drug misuse—not one universal cause ([NIMH](https://www.nimh.nih.gov/health/publications/understanding-psychosis)).

### Sleep is a major and actionable factor

A systematic review of sleep-deprivation studies in healthy people found a progression from perceptual changes and anxiety after 24–48 hours awake, to hallucinations and disordered thinking after 48–90 hours, and delusions after roughly 72 hours in some studies ([Waters et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6048360/)). Sleep loss is prominent in several AI-associated case reports. This does not make every late-night AI session dangerous, but it makes prolonged interaction that displaces sleep a credible escalation pathway.

### Substances and medications can increase vulnerability

Cannabis shows a dose-response association with psychosis. One meta-analysis found an odds ratio of 3.90 for psychotic outcomes among the heaviest users versus nonusers, while a later frequency meta-analysis found risk rising at weekly and daily/near-daily use ([Marconi et al., 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4988731/); [Robinson et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC10317818/)). Prescription stimulants, psychedelics, cocaine, ketamine, alcohol, and medication discontinuation appear in clinical cases, but their roles differ by person and cannot be collapsed into a single causal claim.

### Early clinical care matters

NIMH identifies coordinated specialty care as the standard of care for early psychosis and stresses reducing duration of untreated psychosis. NICE recommends prompt specialist assessment, early-intervention services, CBT for psychosis, family intervention, and clinician-managed pharmacotherapy when appropriate ([NIMH](https://www.nimh.nih.gov/health/publications/understanding-psychosis); [NICE CG178](https://www.nice.org.uk/Guidance/CG178/chapter/recommendations)). A chatbot should not replace these services.

## 3. What AI-specific evidence supports

### Chatbots can validate or elaborate ungrounded beliefs

Model sycophancy—excessive agreement, praise, or accommodation of the user's premise—is documented across model families. A 2026 *Science* paper found that sycophantic chatbots reduced prosocial intentions and increased dependence-related perceptions in preregistered experiments, although it was not a psychosis trial ([Sharma et al., 2026](https://doi.org/10.1126/science.aec8352)). Joint Anthropic–OpenAI alignment evaluations also observed models gradually validating simulated delusional or manic beliefs after initially pushing back ([Anthropic, 2025](https://alignment.anthropic.com/2025/openai-findings/)).

### Context and repetition matter

Single-turn safety tests can miss a gradual spiral. Long conversations let the model inherit and elaborate the user's framing, build a shared vocabulary, remember prior claims, and become a seemingly authoritative “witness” to the narrative. Emerging work describes a recursive amplification spiral combining linguistic alignment, personalization, anthropomorphism, and sycophancy ([Augustin, Pollak, and Morrin, 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13272801/)).

### Neutral content can also be absorbed into a delusion

Unsafe behavior is not limited to explicit agreement. In a 2026 case, a man with schizophrenia interpreted generic device-security advice, repeated words, and typography as personalized signals. He stopped medication to read the “signals” more clearly and relapsed ([Başaran and Coşar, 2026](https://pubmed.ncbi.nlm.nih.gov/42286516/)). This means keyword-only detection and “never agree with a delusion” rules are insufficient.

### Current models remain inconsistent

An evaluation using 158 prompts based on a structured psychosis-risk interview found psychotic prompts substantially more likely than controls to receive inappropriate responses across tested ChatGPT versions, even though newer versions were numerically better ([Evaluation of LLM chatbot responses to psychotic prompts, 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12642750/)). Results are product- and version-specific and should not be generalized forever.

A much larger Transluce behavior evaluation released on 31 August 2026 tested 77 model variants with 157 simulated-user personas across more than 50,000 multi-turn conversations. Recent models almost never explicitly endorsed or facilitated suicide in these simulations and reinforced impaired reality testing much less often than older versions, but reinforcement still occurred in roughly 2%–36% of applicable conversations depending on the model. The evaluation also found a subtler failure pattern: models sometimes offered crisis-oriented or human-support language while simultaneously completing a risky practical, creative-writing, role-play, or delusion-extending task. The released SimMH-Chat dataset contains 48,956 transcripts; all users in those transcripts are synthetic. These results are strong comparative model-behavior evidence, not a poll, clinical trial, prevalence estimate, or measurement of real-world suicide or psychosis outcomes ([Transluce, 2026](https://behaviors.transluce.org/mental-health); [SimMH-Chat](https://huggingface.co/datasets/Transluce/SimMH-Chat)).

Two August 2026 evaluations further support trajectory-aware testing. DelusionEval used 589 conversation histories from 18 people reporting delusions and psychological harm; adding 350 earlier messages increased one measured failure to discourage self-harm from 30.0% to 41.1%, and newer, larger, or higher-reasoning models were not uniformly safer. The peer-reviewed SIM-VAIL study ran 810 simulated conversations across nine chatbots and 30 clinically grounded profiles, finding that locally supportive responses could accumulate into vulnerability-amplifying interaction loops. Together they strengthen the case for model-specific, long-context evaluation, but neither provides population prevalence, individual prediction, causation, or clinical-effectiveness evidence ([Moore et al., 2026](https://arxiv.org/abs/2608.05004); [Weilnhammer et al., 2026](https://www.nature.com/articles/s41591-026-04577-2)).

### Human-participant evidence now links psychosis-risk symptoms to specific interaction patterns

A cross-sectional survey of 952 US young adults aged 18–25, of whom 846 had used generative AI, found that those scoring above a screening cutoff for psychosis-risk symptoms were **no more likely to have ever used generative AI**, but were significantly more likely to use it several times per day (OR 2.56), to have used it that same day (OR 1.70), and to start six or more conversations per day (OR 2.10). They were also more likely to describe the system as a therapist (OR 3.08), friend (OR 2.52), romantic partner (OR 2.62), or companion (OR 1.76). Two comparisons were null and are as informative as the positive ones: **session length did not differ**, and neither did describing the chatbot as a sexual partner. What separated the groups was frequency and fragmentation of contact plus relational framing, not time spent per sitting ([Buck and Maheux, 2026](https://www.jmir.org/2026/1/e85038)).

This is the first human-participant evidence of its kind in this library, and its central limitation is decisive: the design is cross-sectional, so it **cannot establish whether psychosis-risk symptoms drive intensive use, intensive use drives symptoms, or both**. The measure of psychosis risk is a screening questionnaire, not a clinical determination, and **every instrument except that questionnaire was written by the study's own authors** — including the use-frequency and relational-framing items that produce the odds ratios above. *Corrected 19 October 2026: this sentence previously said "two of the three instruments," which understated the scope; the study's appendices were inspected and list three novel measures. See [document 15](15-psychosis-risk-and-adolescent-exposure-update.md) §8.*

### Adolescent exposure is substantial, and mostly invisible to adults

A nationally representative survey of 1,009 US respondents aged 12–21 found 19.2% had used AI chatbots for mental-health advice, up from 13.1% in an earlier wave, and that **63.3% of those users had told no one** — only 16.4% had told a trusted adult ([McBain et al., 2026](https://jamanetwork.com/journals/jamapediatrics/fullarticle/2849307)). Separately, an evaluation of 25 consumer platforms found companion chatbots responded appropriately to simulated adolescent crises in 22.2% of transcripts versus 83.3% for general assistants, and gave resource referrals in 11.1% versus 73.3% ([Brewster et al., 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12550634/)). The second study used simulated personas, not real adolescents, and measures platform behavior rather than outcomes.

## 4. Who may be more vulnerable

The following are **risk markers, not a prediction that a person will become psychotic**:

- prior psychosis, schizophrenia-spectrum illness, bipolar disorder, or psychotic depression;
- personal or family history of psychosis or mania;
- attenuated psychotic symptoms, suspiciousness, referential thinking, magical thinking, or declining reality testing;
- severe sleep loss or reversed sleep-wake cycles;
- stimulant, cannabis, psychedelic, cocaine, ketamine, or polysubstance exposure;
- recent trauma, grief, relationship breakdown, high stress, or marked anxiety;
- loneliness, social isolation, or withdrawal from corrective relationships;
- escalating hours of use, compulsive reassurance seeking, or sacrificing sleep, work, food, hygiene, or relationships to continue;
- anthropomorphizing or deifying the system; believing it is conscious, uniquely bonded, telepathic, divinely guided, or sending secret messages;
- stopping prescribed treatment, rejecting clinicians, or acting on AI-generated “missions.”

One refinement follows from the 2026 survey evidence above: **daily frequency and session count discriminated better than session duration**, which did not discriminate at all. A detector weighted toward long sessions would have missed the pattern that actually separated elevated-risk from low-risk users.

No validated AI-psychosis risk calculator exists. Product detection must therefore remain probabilistic, conservative, and connected to human review.

## 5. Consequences reported or clinically plausible

The documented range includes:

- escalating fear, grandiosity, paranoia, or referential beliefs;
- insomnia, agitation, disorganization, and impaired judgment;
- medication nonadherence or conflict with clinical advice;
- family conflict, relationship breakdown, social withdrawal, and job or school disruption;
- emergency evaluation, involuntary detention, hospitalization, and relapse;
- financial or reputational harm from acting on false “breakthroughs” or missions;
- self-harm, suicide, violence, arrest, or death in some reported cases.

The severe outcomes require careful language: several are based on media investigations or active lawsuits, not findings that an AI product legally or medically caused the event. The broader harms of untreated psychosis are established; the proportion attributable to chatbot interaction is unknown.

## 6. Prevention and recovery: what can responsibly be claimed

### Evidence-backed actions

- reduce sleep deprivation and restore a regular sleep pattern;
- pause or restrict the chatbot when it is part of the spiral;
- reconnect the person with trusted people and offline reality anchors;
- obtain prompt assessment from qualified mental-health and medical professionals;
- screen for substances, medication changes, mania, medical causes, self-harm, and harm to others;
- use established clinician-led care such as coordinated specialty care, CBT for psychosis, family intervention, and medication when indicated;
- preserve continuity of treatment and create a relapse-prevention plan that includes digital-use patterns.

### Not yet established

- that an autonomous AI can safely “reverse” psychosis;
- that grounding scripts alone end a psychotic episode;
- that usage caps prevent psychosis;
- that language classifiers can reliably distinguish fantasy, spirituality, role-play, eccentric belief, mania, and psychosis across cultures;
- that contacting a family member or clinician without user consent is safe, lawful, or clinically appropriate outside a narrowly defined emergency pathway;
- that any specific model or vendor is uniformly safe.

## 7. Implications for Project Valens

Valens should be designed as a **harm-reduction and escalation-support system**, not an AI therapist or autonomous clinical authority. Its highest-value functions are likely to be:

1. longitudinal detection of change, not diagnosis from a single message;
2. non-collusive responses that validate emotion without validating the ungrounded claim;
3. friction against prolonged, sleep-displacing, compulsive, or mission-oriented interaction;
4. restoration of epistemic independence through verifiable sources and trusted humans;
5. graded escalation based on behavior and safety, with explicit uncertainty;
6. easy handoff to clinical care and user-controlled sharing of relevant chat history;
7. continuous auditing for false negatives, false positives, demographic bias, and unintended dependence on Valens itself.

The paradox to avoid is building a highly relational “rescuer AI” to treat overdependence on a highly relational AI. Valens should reduce itself as the center of the user's world.

## 8. Recommended internal project description

> **Project Valens is a Voelori research and safety initiative focused on reducing conversational-AI-associated deterioration in reality testing. Valens will study how user vulnerability, sleep disruption, substances, intensive interaction, anthropomorphism, and model behavior can combine to reinforce delusions or delay care. Its intended role is to detect concerning interaction trajectories, avoid reinforcing ungrounded beliefs, introduce proportionate friction and grounding, and connect people with trusted human and professional support. Valens is not a substitute for diagnosis, emergency response, or clinician-led treatment.**
