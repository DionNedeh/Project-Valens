# Project Valens MVP — T1 Implementation Handoff Plan

## Baseline and Scope

- **Target:** Project Valens MVP 0.1, a provider-neutral safety layer around conversational AI.
- **Workspace baseline:** 20 August 2026. This workspace contains research and benchmark assets only; there is no application source tree, package manifest, Git repository, branch, or commit to preserve.
- **Citation rule:** Citations refer to the research snapshot at this baseline. If lines move, relocate them by the named heading, JSON key, or symbol before implementation.
- **Normative sources:** `research/10-valens-intervention-framework.md:7` (`Purpose and boundary`), `research/benchmark/response-policy-v0.1.json:1` (`valens-reference-response-policy`), `research/11-case-derived-evaluation-benchmark.md:7` (`Objective`), and `research/benchmark/runner-contract-v0.1.md:1` (`Offline Runner Contract v0.1`).
- **Covered deliverable:** a local-first middleware service, provider adapter interface, deterministic policy engine, model-mediated response layer, user consent/control surface, handoff preparation flow, localized-resource interface, audit trail, and benchmark/release gates.
- **Explicitly excluded from MVP:** diagnosis; autonomous treatment; medication advice; emergency dispatch; covert monitoring; automatic third-party contact; minors in live pilots; public prevention, treatment, reversal, or cure claims; mobile apps; browser extensions; operating-system-wide chat scraping; and a companion persona.

## Binding Global Rules

- [ ] Existing research artifacts are immutable contracts during implementation. If the product needs a policy change, revise and review the research contract before changing behavior.
- [ ] Default operation is local-first, provider-neutral, additive, and off until the user explicitly enables an integration.
- [ ] Never label a user with a diagnosis or permanent mental-health status; the framework tracks observable, time-bounded interaction signals (`research/10-valens-intervention-framework.md:28`, `Evidence dimensions`).
- [ ] Never start, stop, taper, or change prescribed medication; never affirm hidden communication, special missions, or exclusive AI bonds; never enable dangerous action (`research/benchmark/response-policy-v0.1.json:63`, `global_prohibitions`).
- [ ] Preserve ordinary fiction, philosophy, spirituality, legitimate security work, real-threat reports, unconventional research, and neurodivergent communication (`research/10-valens-intervention-framework.md:199`, `False-positive protections`).
- [ ] No network transmission, trusted-contact sharing, analytics, or external action without an explicit, scoped contract and visible consent. Preparing a handoff is not sending it (`research/10-valens-intervention-framework.md:183`, `Human-handoff package`).
- [ ] Every safety decision must be explainable from recorded observable dimensions, rule version, level, override, uncertainty, and action—not hidden chain-of-thought.
- [ ] A failure-safe posture must never silently convert an infrastructure error into Level 0 or a reassuring answer.
- [ ] Secrets never enter logs, fixtures, screenshots, commits, or run identifiers.
- [ ] No public or vulnerable-user pilot until all governance gates in `research/10-valens-intervention-framework.md:205` are satisfied.

## Per-Run Working Protocol

- [ ] Re-read every cited source and verify the named heading/key still exists.
- [ ] Confirm the implementation remains within the named section; no drive-by refactors or speculative platforms.
- [ ] Keep one coherent section per commit when a Git repository exists; record commit here: ____.
- [ ] Add tests before declaring each section complete; never weaken an existing test to pass.
- [ ] Run formatting, lint, type-check, unit, integration, benchmark-schema, and production-build checks after every section; record commands and results here: ____.
- [ ] Smoke neighboring surfaces named by the section; record result here: ____.
- [ ] Never put real patient/user conversations into tests. Use only synthetic fixtures or properly governed de-identified data.
- [ ] Stop on a critical safety failure, record it, fix it, and add a permanent regression fixture before continuing.
- [ ] Keep all `[ ]` boxes truthful. Do not check a parent section until every child box and record-here gate is complete.

## Worker Execution Contract

Not breaking existing research, benchmark behavior, user autonomy, or ordinary low-risk AI use is a prerequisite of every section. A perfect new feature that disturbs these contracts is a failed section.

For every section, verify all four conditions:

- [ ] **Feature 100% complete:** Every stated behavior and design-contract rule demonstrably works. If any sub-behavior cannot be completed at full quality, stop and record why; do not land a partial substitute.
- [ ] **Regression sweep green:** All suites and builds pass, and the named neighboring surfaces behave exactly as before.
- [ ] **Minimal, non-heavy-handed diff:** No unrelated refactors, formatting churn, renaming, dependency expansion, or edits outside named files without a recorded reason.
- [ ] **No weakened tests:** Test changes reflect a legitimate contract change, never a shortcut around failure.

If observed code conflicts with this plan, stop, re-read, edit this plan first, then implement. The code wins; the plan must be reconciled before work resumes.

## Locked Product Decisions

| Decision | MVP contract |
|---|---|
| Product form | Safety middleware/sidecar between an authorized chat surface and model provider; not a new conversational companion |
| Deployment | Local-first Node.js service bound to loopback only, plus a local control surface; remote hosting is out of scope |
| Language | TypeScript in strict mode on Node.js 24 or the current supported LTS selected at implementation start |
| Structure | Monorepo with `packages/contracts`, `packages/core`, `packages/adapters`, `apps/service`, `apps/control`, and `tests/benchmark` |
| Persistence | Local SQLite repository behind an interface; sensitive content retention defaults off; metadata has short configurable retention |
| Integration | Explicit provider adapters; no OS-wide interception or scraping |
| Decision model | Deterministic overrides and policy engine first; optional model-assisted signal extraction cannot overrule safety overrides |
| User output | The upstream assistant produces content through a constrained response posture; Valens remains visibly a safety layer |
| Handoff | Prepare/export only with explicit consent; no automatic message, call, dispatch, or contact in MVP |
| Geography | US resource data may exist for development, but live Level 3–4 routing is disabled unless location and resource freshness are validated |
| Initial users | Adults in nonclinical internal evaluation; minors and symptomatic/vulnerable-user research remain gated out |
| Claims | “Research prototype for reducing specified conversational reinforcement failures,” never a diagnostic or clinical-effectiveness claim. Transluce simulation findings may motivate test cases and comparative safety requirements but must never be presented as human prevalence, causation, clinical-outcome, or intervention-effectiveness evidence. |

## Recommended Landing Order

| Wave | Sections | Dependency | Release effect |
|---|---|---|---|
| 0 | P0–P2 | none | repository, contracts, and deterministic policy foundation |
| 1 | P3–P5 | P0–P2 | state estimation, mediation, and provider-neutral chat path |
| 2 | P6–P8 | P3–P5 | consent UI, handoff preparation, localization and crisis gating |
| 3 | P9–P10 | all prior | audit/incident operations, benchmark qualification, and internal MVP gate |

## Normative Design Contract

### Intended user journey

1. The adult user explicitly enables Valens for a supported chat integration and sees what data it observes and retains.
2. Ordinary conversation remains ordinary at Levels 0–1; the system does not introduce mental-health framing based on unusual content alone (`research/10-valens-intervention-framework.md:53`, `Level 0`).
3. At Level 2, the response becomes shorter, stops decoding, names only observable patterns, supports a pause/basic needs, and suggests independent human verification (`research/10-valens-intervention-framework.md:82`, `Level 2`).
4. At Level 3, Valens recommends prompt qualified assessment, checks direct safety dimensions, protects medication continuity, and offers a consent-based handoff summary (`research/10-valens-intervention-framework.md:100`, `Level 3`).
5. At Level 4, imminent danger overrides every lower score; language becomes brief and action-oriented, theory-building stops, and the user is directed toward nearby human and localized crisis/emergency help (`research/10-valens-intervention-framework.md:117`, `Level 4`).
6. Downgrade requires observable stabilization, not merely a calmer tone (`research/10-valens-intervention-framework.md:153`, `Downgrade requirements`).
7. The user can inspect/correct context, pause monitoring, delete retained data, and export a consented summary.

### Nonfunctional envelope

- Policy evaluation p95 target: under 100 ms excluding upstream model latency; record final target after baseline: ____.
- No polling or render loop faster than needed; pause UI background work when hidden; respect `prefers-reduced-motion`.
- Loopback service rejects non-loopback binding by default and uses origin checks plus a session secret for local UI calls.
- Every policy decision is reproducible from versioned structured input; model text is never the only audit evidence.
- Crash recovery preserves safety event integrity but never restores a hidden “diagnosis.”
- Accessibility target: WCAG 2.2 AA for control and consent surfaces; keyboard-only critical flows.

## [ ] P0 — Scaffold and Architecture Boundary

### Current State

Only the research directory exists; there is no codebase or Git baseline. The intended product is explicitly a safety layer rather than autonomous clinical care (`research/README.md:51`, `Safety boundary`).

### Design

Create the locked TypeScript monorepo structure. `packages/contracts` contains dependency-free schemas; `packages/core` contains pure policy logic; `packages/adapters` contains provider interfaces; `apps/service` owns loopback API and persistence; `apps/control` owns local UI; `tests/benchmark` consumes existing fixtures without editing them. Add Architecture Decision Records for deployment form, data boundary, and provider abstraction.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Initialize package management, strict TypeScript, formatting, linting, unit testing, build scripts, and a secrets-safe ignore file.
3. [ ] Create package boundaries and dependency rules: contracts → core → service/adapters; UI depends only on public contracts.
4. [ ] Add CI-equivalent local scripts for format check, lint, type-check, unit, integration, benchmark validation, and production build.
5. [ ] Add architecture tests preventing core from importing network, UI, provider SDK, or database modules.
6. [ ] Run the full suite and smoke the existing benchmark dry-run.
7. [ ] Record here: Node version ____, package manager/version ____, test runner ____, baseline results ____.

### Risks / Rollback

Premature framework selection can lock the product to a provider or desktop shell. Roll back to dependency-free contracts/core and replace only boundary packages; do not rewrite research artifacts.

## [ ] P1 — Canonical Contracts and Data Classification

### Current State

The policy already enumerates observable dimensions and prohibits diagnostic use (`research/benchmark/response-policy-v0.1.json:6`, `not_for`; `research/10-valens-intervention-framework.md:30`, state-estimator constraint).

### Design

Define versioned schemas for `ConversationTurn`, `SignalObservation`, `PolicyState`, `PolicyDecision`, `ResponsePosture`, `ConsentGrant`, `HandoffDraft`, `ResourceRecord`, and `SafetyEvent`. Every observation includes source (`user_statement`, `interaction_metadata`, `adapter`, `human_review`), confidence, first/last seen, and expiry. Do not include `diagnosis`, protected-class risk weights, or hidden personality profiles.

Illustrative contract:

```ts
type PolicyDecision = {
  policyVersion: "0.1.0";
  level: 0 | 1 | 2 | 3 | 4;
  confidence: "low" | "medium" | "high";
  observations: SignalObservation[];
  override: null | "level_3" | "level_4";
  requiredActions: string[];
  prohibitedActions: string[];
  uncertainties: string[];
  expiresAt: string;
};
```

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement schemas with runtime validation and JSON serialization.
3. [ ] Add a data-classification map: transient content, retained metadata, restricted handoff content, secrets, and forbidden fields.
4. [ ] Add forward/backward version tests and reject unknown unsafe enum values closed.
5. [ ] Test malformed, oversized, missing, and future-version payloads.
6. [ ] Run the relevant suite and smoke fixture loading through the canonical schema.
7. [ ] Record here: schema library ____, maximum sizes ____, compatibility decision ____.

### Risks / Rollback

An overbroad schema becomes surveillance infrastructure. Remove fields not strictly required, default content retention off, and preserve migration-free rollback until a reviewed persistence contract exists.

## [ ] P2 — Deterministic Policy Engine

### Current State

The five levels, precedence, overrides, required actions, and prohibitions are machine-readable in `research/benchmark/response-policy-v0.1.json:20` (`precedence`) through line 67 (`localization`). Immediate danger must override every score (`research/10-valens-intervention-framework.md:135`, `Immediate Level 4 overrides`).

### Design

Implement a pure function `evaluatePolicy(previousState, observations, policy): PolicyDecision`. Evaluate Level 4 overrides, then Level 3 overrides, then the least intrusive trajectory-supported level. Content theme alone cannot escalate. Downgrade only on explicit stabilization evidence and retain the prior high-acuity audit event. Unknown or contradictory inputs produce an uncertainty/abstain state and a safe clarification action, never silent Level 0.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Load and validate the versioned JSON policy without hard-coded duplicate rules.
3. [ ] Implement override precedence, trajectory evaluation, minimum evidence, conservative downgrade, expiry, and abstention.
4. [ ] Add table-driven unit tests for every policy rule, collision, downgrade, false-positive check, and missing-input path.
5. [ ] Prove one Level 4 signal overrides any number of lower-level features.
6. [ ] Run the relevant suite and smoke all 22 fixtures at their annotated peak.
7. [ ] Record here: policy-engine module ____, branch coverage ____, unresolved rule ambiguity ____.

### Risks / Rollback

Duplicated rules will drift from research. Keep policy data versioned and engine logic generic. Roll back by pinning the last reviewed policy version, not by weakening an override.

## [ ] P3 — Minimal Longitudinal State Estimator

### Current State

The framework requires separate dimensions for intensity, belief relationship, flexibility, emotion, functioning, dependence, treatment, substances/medical factors, consequential action, and safety (`research/10-valens-intervention-framework.md:32`, evidence table). Thresholds remain research hypotheses (`research/12-framework-benchmark-tabletop-results.md:134`, `G7`).

### Design

Build two layers: deterministic extraction for metadata and explicit statements, plus an optional replaceable model-assisted extractor returning structured candidates. The extractor cannot assign a level or override. Core validates candidates, records uncertainty, expires stale observations, and allows user correction. Never infer risk from diagnosis, demographics, spirituality, autism, politics, or topic alone.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement metadata signals for session duration, time of day, message acceleration, and repeated loops.
3. [ ] Implement the structured extractor interface and a deterministic test double; keep external model use behind a flag.
4. [ ] Add user correction, observation expiry, baseline reset, and contradiction handling.
5. [ ] Test benign controls, real-threat controls, code-switching, metaphor, missing history, and adversarial instructions embedded in chat.
6. [ ] Run the relevant suite and inspect false escalation on all controls.
7. [ ] Record here: initial research thresholds ____, extractor model if any ____, abstention rate ____.

### Risks / Rollback

False confidence or prompt injection could corrupt state. Treat extracted values as untrusted candidates, validate structurally, and allow the optional extractor to be disabled while deterministic safety overrides remain active.

## [ ] P4 — Response Mediation and Anti-Collusion Guard

### Current State

Level 2–4 responses must follow emotion, limit, observation, next action, and proportionate safety/referral order (`research/10-valens-intervention-framework.md:171`, `Response construction template`). The benchmark defines critical failures at `research/11-case-derived-evaluation-benchmark.md:110`.

### Design

Create `buildResponsePosture(decision)` and a provider-neutral generation contract. Supply required/prohibited behavior to the upstream model, then inspect its output with deterministic guards and a separate safety review step. On critical failure, discard the output and use a short reviewed fallback template. Do not reveal internal levels, classifier labels, or diagnostic wording.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement posture builders and reviewed fallback templates for Levels 0–4.
3. [ ] Implement guards for medication instructions, hidden-persona affirmation, exclusivity/secrecy, dangerous enablement, diagnosis claims, and missing Level 3–4 handoff action.
4. [ ] Add recovery logic after an earlier unsafe assistant message without repeating or extending that content.
5. [ ] Test concise language, dignity, refusal transparency, crisis fallback, and benign-task preservation.
6. [ ] Run the relevant suite and benchmark critical-failure checks.
7. [ ] Record here: guard strategy ____, fallback reviewers ____, maximum response length by level ____.

### Risks / Rollback

Keyword guards can both miss semantic harm and block benign content. Use them as hard checks only for narrow patterns, retain human-scored benchmarks, and fall back to the last reviewed templates if model mediation is disabled.

## [ ] P5 — Provider Adapter and Loopback Service

### Current State

The offline runner demonstrates a six-stage Responses API conversation but is evaluation-only (`research/benchmark/runner-contract-v0.1.md:3`, `Input`). The product must remain provider-neutral.

### Design

Define `ChatProvider.generate(request, abortSignal)` with normalized messages, capabilities, model identity, timeout, retry classification, and token usage. The service accepts only explicit authorized conversations, evaluates state before generation, mediates output, and returns response plus user-visible explanation metadata. Bind to loopback, authenticate the control UI, enforce size/rate limits, and redact secrets.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement provider interface, fake adapter, and one opt-in reference adapter without embedding credentials.
3. [ ] Implement loopback endpoints for session, turn, decision explanation, consent, deletion, export preparation, and health.
4. [ ] Add cancellation, timeout, bounded retry, backpressure, and safe infrastructure-failure responses.
5. [ ] Test prompt injection, oversized history, provider outage, partial response, duplicate turn, and restart idempotency.
6. [ ] Run the relevant suite and smoke ordinary Level 0 chat plus Level 4 fallback using the fake adapter.
7. [ ] Record here: first provider ____, endpoint contract ____, timeout/retry limits ____.

### Risks / Rollback

Provider coupling or retry loops can amplify unsafe content. Keep adapters replaceable, cap retries, and permit a no-generation deterministic safety response when provider output is unavailable.

## [ ] P6 — Consent, Transparency, and Local Control Surface

### Current State

Users must be able to correct context and understand why posture changed (`research/10-valens-intervention-framework.md:203`). Data minimization and explicit consent are binding (`research/10-valens-intervention-framework.md:25`).

### Design

Build an accessible local UI with onboarding, enabled integrations, observed-data categories, retention controls, current posture explanation, correction/reset, pause/disable, delete, handoff preview, and incident feedback. Never display “psychosis score.” Use neutral language such as “safety posture changed because this conversation included reported sleep loss and planned physical action.”

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement onboarding with granular, revocable consent and no prechecked sensitive options.
3. [ ] Implement explanation, correction, pause, delete, export-preview, and retention controls.
4. [ ] Add empty, loading, offline, error, expired-consent, and screen-reader states.
5. [ ] Test keyboard access, reduced motion, zoom, contrast, consent revocation, and deletion confirmation.
6. [ ] Run the relevant suite and smoke Level 0, 2, 3, and 4 transitions without exposing internal diagnoses.
7. [ ] Record here: UI framework ____, accessibility audit ____, approved user-facing terminology ____.

### Risks / Rollback

The control surface may itself feel surveillant or persecutory. Prefer plain explanations, user correction, and reversible controls. Disable sensitive visualization rather than shipping ambiguous score graphics.

## [ ] P7 — Persistence, Retention, and Security

### Current State

The framework requires minimum necessary storage, defined retention, and user-accessible correction (`research/10-valens-intervention-framework.md:25`). Benchmark outputs are restricted evaluation data (`research/benchmark/README.md:36`).

### Design

Persist policy metadata only by default. Conversation content stays transient unless the user explicitly enables short retention or prepares a handoff. Place storage behind repositories; use parameterized queries, schema migrations, OS-protected key material where supported, restrictive file permissions, and deterministic deletion. Never log prompts, responses, keys, or handoff bodies by default.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement repository interfaces, SQLite schema, migrations, retention sweeper, and deletion receipts.
3. [ ] Separate operational logs from restricted safety events and handoff drafts.
4. [ ] Add secret redaction, file-permission checks, backup/export exclusions, and corruption recovery.
5. [ ] Test retention expiry, crash during deletion, migration rollback, locked database, and multi-session isolation.
6. [ ] Run the relevant suite and inspect artifacts for leaked fixture text or credentials.
7. [ ] Record here: retention defaults ____, encryption/key approach ____, threat-model reviewer ____.

### Risks / Rollback

Local storage still creates sensitive-data exposure. If security review is incomplete, run memory-only and disable handoff persistence; do not weaken permissions or silently extend retention.

## [ ] P8 — Handoff Preparation and Localized Resource Gate

### Current State

Handoff is prepare-only, consented, uncertainty-preserving, and nondiagnostic (`research/benchmark/response-policy-v0.1.json:66`, `handoff`). The exact summary fields are specified at `research/10-valens-intervention-framework.md:185`. Crisis routes must be localized and tested (`research/10-valens-intervention-framework.md:209`).

### Design

Generate a previewable `HandoffDraft` containing only approved fields, provenance, uncertainty, recipient purpose, consent scope, and expiry. Export locally as human-readable text/PDF only after confirmation; no sending. Implement a signed/versioned `ResourceDirectory` with jurisdiction, service type, eligibility, languages, hours, verification date, and expiry. If location or freshness is unknown, say so and use a generic local-emergency fallback—never invent a number.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement handoff drafting, field-level consent, preview/redaction, expiration, and local export.
3. [ ] Implement resource schema, freshness validation, jurisdiction lookup, and safe fallback.
4. [ ] Explicitly disable automatic contact, dispatch, and minor-specific live flow.
5. [ ] Test consent withdrawal, unsafe household selection, stale/missing resources, offline mode, and nondiagnostic output.
6. [ ] Run the relevant suite and manually inspect sample exports for clarity and minimum disclosure.
7. [ ] Record here: initial covered jurisdiction ____, resource owner/freshness SLA ____, export formats ____.

### Risks / Rollback

Stale routing or unsafe contact can worsen harm. Fail closed on automatic sharing, expire resource records, and disable live routing for any unverified jurisdiction.

## [ ] P9 — Audit, Adverse Events, and Operational Controls

### Current State

Minimum governance requires adverse-event reporting, stopping rules, and human review (`research/10-valens-intervention-framework.md:205`). Corrected critical failures must become permanent regressions (`research/benchmark/runner-contract-v0.1.md:88`, `Stop conditions`).

### Design

Create append-only, privacy-minimized events for policy version, observation categories, decision, override, guard result, fallback use, consent action, resource version, and errors. Build an internal incident workflow: intake, severity, containment, reproducibility, root cause, fix, regression fixture, independent review, and release decision. Provide a kill switch for model-mediated output while retaining deterministic crisis fallback.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Implement structured events without raw conversation content by default.
3. [ ] Implement incident records, critical-failure stop switch, policy rollback, and model/adapter disable controls.
4. [ ] Add tamper-evident sequencing appropriate for a local prototype without claiming forensic certainty.
5. [ ] Test clock changes, disk full, duplicate events, corrupt records, rollback, and kill-switch behavior.
6. [ ] Run the relevant suite and rehearse one synthetic critical-failure incident end to end.
7. [ ] Record here: incident owner ____, review SLA ____, rollback rehearsal result ____.

### Risks / Rollback

Audit data can become a second sensitive transcript. Record structured facts only, restrict access, and delete nonessential content. If audit integrity fails, halt evaluation rather than run unobservable safety logic.

## [ ] P10 — Benchmark Integration and Internal MVP Release Gate

### Current State

The suite contains 12 escalating and 10 benign families, and passing it cannot establish clinical effectiveness (`research/11-case-derived-evaluation-benchmark.md:181`). The runner contract requires repeated trials and independent scoring (`research/benchmark/runner-contract-v0.1.md:54`).

The 31 August 2026 Transluce report is **emerging comparative model-behavior evidence** based primarily on simulated conversations. Use it to motivate additional failure families—especially mixed helpful/harmful responses, consequential ambiguity, creative or practical task concealment, dependency, co-rumination, and API-versus-product drift—but do not treat its rates as estimates of harm among real users or evidence that any safeguard improves clinical outcomes (`research/13-transluce-mental-health-behavior-report.md:120`, `Limitations and evidence grade`).

DelusionEval and SIM-VAIL add complementary support for long-context, model-specific evaluation. Use DelusionEval to derive harm-history-grounded replay and context-depth tests; use SIM-VAIL to derive vulnerability–intent trajectory tests and early-intervention timing checks. Preserve their different evidence bases and do not convert either study's benchmark rates into real-user prevalence, individual risk predictions, causal conclusions, or clinical-effectiveness claims (`research/14-delusioneval-and-sim-vail-update.md:1`).

### Design

Adapt the existing fixtures to the product interfaces without copying hidden annotations into model context. Run deterministic policy tests on every commit. Keep multi-model generative benchmarking provider-neutral and optional until credentials, models, budget, and independent raters are approved. Produce per-dimension results, critical failures, control over-escalation, time to intervention, subgroup/modality results, and unresolved disagreement.

### Steps

1. [ ] Re-read the cited files and confirm the baseline still matches.
2. [ ] Build a fixture adapter and verify all 22 IDs, 132 stages, hidden annotations, and clean conversation isolation.
3. [ ] Add deterministic engine/guard regression runs to CI-equivalent checks.
4. [ ] Implement blinded export/import for two-rater scoring; do not let the tested model be sole evaluator.
5. [ ] Enforce zero critical failures, Level 3–4 dimension floors, and benign-control limits from `research/11-case-derived-evaluation-benchmark.md:124`.
6. [ ] Run full tests/build and record exact evidence; do not claim multi-model performance until that run occurs.
7. [ ] In every Transluce-derived requirement, result, dashboard, or release note, label the evidence as simulated model-behavior evaluation and explicitly prohibit prevalence, causal, clinical-outcome, and clinical-effectiveness interpretations.
8. [ ] Add versioned long-context and early-intervention benchmark tracks derived from DelusionEval and SIM-VAIL, with separate provenance labels for harm-history-grounded replay versus clinically structured simulation.
7. [ ] Record here: implementation test results ____, independent reviewers ____, unresolved failures ____, internal release decision ____.

### Risks / Rollback

Optimizing narrowly to known fixtures can hide real failures. Maintain blinded holdouts, add variants after incidents, and keep fixture authors separate from final raters where practical. A threshold miss blocks release; it is not waived by an aggregate score.

## Risk Register

| Risk | Sections | Required mitigation |
|---|---|---|
| False reassurance or missed imminent danger | P2–P5, P10 | deterministic overrides, abstention, fallback, zero-critical-failure gate |
| Over-pathologizing benign or cultural content | P2–P4, P6, P10 | trajectory evidence, benign controls, user correction, independent cultural review |
| Real abuse/stalking dismissed as delusion | P3, P6, P8 | real-threat branch, evidence-respecting language, safe external support |
| Valens becomes an exclusive dependency | P4, P6 | no companion persona, anti-exclusivity guard, human-support action |
| Sensitive-data leakage | P1, P5–P9 | minimization, local-first storage, redaction, consent, retention and deletion tests |
| Stale or incorrect crisis routing | P8 | ownership, freshness expiry, jurisdiction validation, fail-safe fallback |
| Medication interference | P2, P4, P10 | hard prohibition, Level 3 override, prescriber redirection tests |
| Provider/model drift | P4, P5, P10 | version capture, repeated benchmarks, adapter isolation, kill switch |
| Unsupported clinical claims | all | approved intended-use copy and legal/regulatory gate |
| Minor safeguarding gap | P6, P8 | minors disabled until specialist policy and review exist |

## Whole-Plan Definition of Done

- [ ] All P0–P10 parent and child checkboxes are truthfully complete.
- [ ] The safety layer works end to end with the fake adapter and at least one explicitly approved provider adapter.
- [ ] All five policy levels, Level 3/4 overrides, conservative downgrade, abstention, and critical fallback are covered by tests.
- [ ] All 22 fixtures and 132 stages load through product contracts without annotation leakage.
- [ ] No critical benchmark failure remains; benign controls meet the predeclared over-escalation limit.
- [ ] Consent, correction, pause, deletion, retention, and handoff-preview flows pass automated and manual verification.
- [ ] The service binds locally and passes security review for secrets, origins, storage, logging, and deletion.
- [ ] Crisis resources are live only for validated jurisdictions; stale/unknown resources fail safely.
- [ ] Minor live use, automatic contact, clinical claims, and unsupported integrations remain disabled.
- [ ] Independent clinical, lived-experience, privacy, security, legal/regulatory, and cultural review findings are resolved or explicitly block release.
- [ ] Exact test, build, benchmark, reviewer, and release evidence is recorded; no unperformed validation is claimed.

## Manual-Verification Companion Note

Create `PROJECT_VALENS_MVP_T1_HANDOFF_PLAN_MANUAL_VERIFICATION.md` when the first UI, provider, crisis-routing, or export section lands. It should cover keyboard/screen-reader use, consent comprehension, user-facing tone, offline/provider-failure behavior, exported handoff readability, localized-resource accuracy, and full critical-flow rehearsal. Do not mark those checks complete from source tests alone.

## Closing Reconciliation Rule

When implementation code and this plan diverge, code reality wins: stop, re-read the actual seams, update this plan first, obtain any decision-changing review, and only then continue. These checkboxes are the execution ledger and must remain truthful.
