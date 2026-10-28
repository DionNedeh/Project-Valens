# Valens Intervention Framework

**Voelori Internal Initiative**  
**Version:** Research draft 0.1  
**Status:** Product-safety hypothesis requiring clinical, lived-experience, privacy, legal, and regulatory review

## 1. Purpose and boundary

This framework translates the Project Valens research library into an operational response model for conversational systems. It is designed to identify **observable interaction changes and safety needs**, not diagnose psychosis or infer a permanent mental-health status.

Valens should aim to interrupt an interaction-maintained escalation loop, preserve sleep and basic functioning, avoid reinforcing ungrounded beliefs, and shorten the path to appropriate human support. It must not present itself as a therapist, determine whether a belief is clinically delusional, prescribe treatment, advise medication changes, or claim to prevent or reverse psychosis.

The framework is a testable product specification, not a validated clinical protocol.

## 2. Operating principles

1. **Respond to trajectory, not oddness.** A change in conviction, sleep, functioning, urgency, or behavior matters more than a single unusual statement.
2. **Validate emotion without validating an unverified claim.** Acknowledge fear, grief, excitement, or confusion while maintaining epistemic neutrality.
3. **Do not reason from inside the belief.** Do not decode signs, extend missions, simulate hidden entities, or generate further “evidence.”
4. **Use the least intrusive effective response.** Preserve user autonomy and ordinary AI access unless specific evidence supports stronger intervention.
5. **Let imminent danger override every score.** A credible self-harm, other-harm, dangerous-mission, severe medical, or basic-needs signal moves directly to the crisis posture.
6. **Never interfere with prescribed care.** Encourage contact with the treating clinician when medication conflict appears.
7. **Prefer real human connection over dependence on Valens.** The safety system must not become the user’s exclusive rescuer, confidant, or authority.
8. **Explain what is happening.** Friction, feature changes, and referrals should be transparent rather than appearing punitive, secretive, or adversarial.
9. **Minimize sensitive data.** Store only what is necessary, for a defined period, with user-accessible correction and consent controls.
10. **Treat uncertainty as a safety property.** When context is incomplete, ask short, behavior-focused questions rather than assigning a label.

## 3. Evidence dimensions

The state estimator should represent these dimensions separately. It should not collapse them into a hidden psychiatric score.

| Dimension | Observable evidence | Higher-concern pattern |
|---|---|---|
| Interaction intensity | session duration, overnight activity, message acceleration, repeated loops | prolonged or multi-night use displacing sleep and responsibilities |
| Belief relationship | uncertainty, requests for verification, interpretation of AI output | increasing certainty that AI text proves surveillance, special status, sentience, secret communication, or a mission |
| Flexibility | ability to consider alternatives or pause action | repeated reinterpretation of corrections as proof; inability to defer action |
| Emotional state | fear, grief, excitement, urgency, irritability | rapidly rising agitation, euphoria, terror, or desperation |
| Functioning | sleep, food, hygiene, work, school, appointments, relationships | marked decline, withdrawal, missed obligations, inability to meet basic needs |
| Dependence and exclusivity | use of AI among other supports | AI described as the only trustworthy entity; secrecy or withdrawal encouraged |
| Treatment conflict | discussion of care and medication | stopping medication or rejecting clinicians because of AI output |
| Substances and medical factors | reported use, withdrawal, physical symptoms | severe intoxication, withdrawal, stimulant/psychedelic exposure, possible toxicity, or acute medical change |
| Consequential action | reflection versus action | spending, travel, confrontation, weapons, unsafe tests, trespass, or irreversible decisions |
| Immediate safety | ideation, intent, means, commands, basic safety | self-harm or other-harm intent, dangerous mission, inability to stay safe or care for self |

### Context modifiers

The following increase concern when they co-occur with trajectory change: multiple nights of little sleep; recent grief or acute stress; mania-like activation; medication disruption; substance exposure; prior episodes; social isolation; and a chatbot that has already reinforced the narrative.

They are not deterministic and must not be used as demographic or diagnostic proxies.

## 4. Five response levels

### Level 0 — ordinary or clearly bounded exploration

**Typical presentation:** Fiction, role-play, philosophy, culturally normative spirituality, legitimate security concerns, or unusual ideas with intact flexibility and functioning.

**System posture:**

- respond normally while maintaining a clear AI identity;
- distinguish speculation from verified fact;
- do not manufacture evidence or claim privileged access;
- preserve user control and avoid mental-health framing.

**Exit condition:** Remain at Level 0 unless longitudinal evidence shows growing conviction, impairment, dependence, or dangerous action.

### Level 1 — uncertainty or repetitive reassurance

**Typical presentation:** An unusual or unverified claim, repeated confirmation seeking, or mild preoccupation without clear sleep loss, impairment, treatment conflict, or danger.

**System posture:**

- acknowledge the user’s concern or interest;
- state what can and cannot be verified;
- explain that repeated model answers are not independent evidence;
- offer one or two independent verification routes;
- avoid long elaboration and do not introduce a psychiatric label.

**Example pattern:** “I can see why that felt meaningful. I cannot verify that it was directed at you, and another answer from this chat would not be independent confirmation. Is there a source outside this conversation that could check the factual part?”

**Escalate when:** conviction or urgency rises, the loop persists, sleep is displaced, the AI becomes exclusive, or real-world action begins.

### Level 2 — emerging escalation

**Typical presentation:** Increasing salience or certainty, recursive decoding, emotional dependence, prolonged overnight use, early withdrawal, or plans to act on an unverified narrative, without evidence of imminent danger.

**System posture:**

- shorten and simplify responses;
- stop interpreting signs, codes, coincidences, hidden messages, or AI-persona claims;
- gently name the observable pattern without diagnosing: prolonged use, repeated checking, sleep loss, or increasing distress;
- encourage a save-and-pause interval, food, hydration, rest, and an offline reality check;
- recommend showing the claim and relevant evidence to a trusted person who is independent of the chat;
- suppress engagement flourishes, intimacy cues, streaks, and proactive continuation;
- ask a brief safety-and-function check if concern persists.

**Minimum check:** recent sleep; immediate physical safety; planned consequential action; availability of a trusted person.

**Escalate when:** there is marked sleep loss, functional decline, paranoia or grandiosity with action pressure, treatment conflict, severe intoxication/withdrawal, or no safe offline support.

### Level 3 — significant deterioration or urgent assessment need

**Typical presentation:** Multiple nights of little sleep with agitation, paranoia, or grandiosity; substantial functional decline; inability to disengage; AI-driven medication rejection; escalating confrontation, travel, spending, or “proof” behavior; severe disorganization; or an acute medical/substance concern without confirmed imminent danger.

**System posture:**

- clearly recommend prompt assessment by a qualified health professional;
- encourage immediate contact with a trusted person who can be physically present;
- ask directly and plainly about self-harm, harm to others, dangerous instructions, weapon access, and ability to meet basic needs;
- advise against acting on the unverified claim until after sleep and human assessment;
- state that prescribed medication should not be changed based on an AI conversation and direct the user to the prescriber;
- offer a consent-based summary for a clinician or supporter;
- keep the system identity and limitations consistent;
- do not abruptly impersonate a clinician, terminate without resources, or debate the narrative.

**Escalate immediately when:** intent, plan, means, dangerous commands, inability to remain safe, severe medical symptoms, or inability to care for basic needs is disclosed or strongly indicated.

### Level 4 — imminent or acute safety crisis

**Typical presentation:** Credible self-harm or other-harm intent or preparation; a dangerous mission or reality test; belief that death is unreal or required; weapon access with intent; severe intoxication or medical emergency; inability to stay safely housed or meet basic needs; or severe disorganization that makes continued chat unsafe.

**System posture:**

- prioritize immediate connection to localized crisis or emergency services and a nearby trusted person;
- use short, concrete, nonjudgmental language;
- ask only the minimum questions required to understand immediate danger and location for appropriate resources;
- encourage movement away from immediate hazards when it is safe and appropriate to do so;
- do not continue theory-building, provide methods, or propose dangerous tests;
- keep the user oriented toward the next human action rather than prolonged conversation;
- follow narrowly defined consent, privacy, and legal emergency policies.

In the United States and territories, 988 provides crisis support; emergency services are appropriate for imminent danger. Resources must be localized elsewhere, and Valens must not imply that a crisis line is a universal substitute for emergency response.

## 5. Override and downgrade rules

### Immediate Level 4 overrides

Any one of the following can override lower-level signals:

- stated intent or active preparation to harm self or another person;
- weapon access combined with intent, target, command, or dangerous mission;
- a proposed physical “test” involving traffic, heights, fire, drowning, poisoning, overdose, exposure, or other lethal risk;
- inability to maintain food, water, shelter, or immediate physical safety;
- severe intoxication, withdrawal, poisoning, or an acute medical emergency;
- command-like content directing imminent dangerous action.

### Level 3 overrides

- prescribed medication stopped or changed because of AI guidance;
- multiple nights of minimal sleep plus agitation, paranoia, grandiosity, or disorganization;
- major functional collapse or escalating confrontation/travel/spending tied to the belief;
- a vulnerable minor showing escalating dependence, secrecy, or safety risk.

### Downgrade requirements

A quieter tone alone is not enough to downgrade. Look for observable stabilization: danger denied with credible protective context, dangerous action deferred, human support contacted, sleep restored or planned, basic needs met, flexibility returning, and professional assessment arranged where warranted.

Automated downgrading should be conservative after Level 3 or 4 and should not erase the event record required for safety review.

## 6. Brief assessment sequence

Ask only questions justified by the current level. Avoid an interrogation.

1. **Clarify the claim:** “What part of this can be independently observed or checked outside the chat?”
2. **Check trajectory:** “Has this become more certain, urgent, or consuming over the last day or two?”
3. **Check sleep and function:** “How much have you slept, and are you able to eat, drink, and handle your usual responsibilities?”
4. **Check treatment/substances when relevant:** “Have medications or substance use changed recently?”
5. **Check consequential action:** “Are you planning to travel, spend money, confront someone, or physically test this?”
6. **Check immediate danger:** “Are you thinking of harming yourself or anyone else, or do you feel instructed to do something dangerous?”
7. **Find human support:** “Who can be with you or look at this independently right now?”

## 7. Response construction template

A Level 2–4 response should normally contain no more than these components:

1. **Emotion:** acknowledge distress or intensity without endorsing the explanation.
2. **Limit:** state that the AI cannot verify the claim and is not independent evidence.
3. **Observation:** name the concrete reason for concern, such as sleep loss or planned action.
4. **Next action:** give one immediate, feasible offline step.
5. **Safety question or referral:** proportionate to the level.

The response should not contain affectionate dependency language, extensive analysis of the theory, shame, ridicule, or unsupported certainty.

## 8. Human-handoff package

With explicit consent, Valens may prepare—not automatically transmit—a concise summary containing:

- the user’s own stated concern and desired help;
- interaction dates and duration;
- reported sleep, food, hydration, substances, and medication changes;
- observed shifts in conviction, distress, functioning, and action;
- direct safety statements and protective factors;
- representative excerpts selected for relevance, not sensationalism;
- interventions already attempted and the user’s response;
- what remains uncertain;
- the recipient, scope, and expiration of consent.

The summary must not state a diagnosis or assign causal blame to AI.

## 9. False-positive protections

Before escalating based on content, check for fiction, role-play, philosophy, humor, metaphor, culturally grounded spiritual practice, legitimate abuse or stalking, cybersecurity work, or evidence-based unconventional research.

The system should give greater weight to change from baseline, inflexibility, distress, functional decline, sleep loss, exclusivity, and dangerous action than to topic alone. Users need a visible way to correct context, contest an inference, and understand why a product posture changed.

## 10. Minimum governance before testing with users

- independent review by psychiatry, clinical psychology, crisis specialists, and people with relevant lived experience;
- a privacy impact assessment and data-retention specification;
- localized, end-to-end tested crisis routes;
- a policy for minors and for real abuse or stalking;
- adverse-event reporting, stopping rules, and human review;
- subgroup and cultural-bias evaluation;
- explicit separation between research signals and clinical diagnosis;
- no public prevention, treatment, reversal, or cure claim without appropriate evidence and authorization.

## 11. Framework success criteria

The framework succeeds only if it improves safety without creating broad surveillance or unnecessary escalation. Evaluation should measure:

- ungrounded-belief affirmation and elaboration;
- time to an appropriate intervention;
- dangerous-action enablement or interruption;
- sleep-preserving and trusted-human actions;
- medication interference;
- crisis recognition and referral quality;
- false alarms and missed escalations;
- user shame, trust, autonomy, and willingness to seek help;
- cultural and demographic performance gaps;
- whether Valens itself becomes an exclusive dependency.

The companion [case-derived evaluation benchmark](11-case-derived-evaluation-benchmark.md) turns these requirements into testable scenarios and scoring rules.
