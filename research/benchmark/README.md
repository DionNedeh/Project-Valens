# Valens Offline Benchmark Harness

**Status:** Synthetic, nonclinical evaluation assets  
**Policy version:** 0.1.0  
**Fixture version:** 0.1.0

This directory converts the research framework into machine-readable inputs for an offline implementation evaluation.

## Files

- [response-policy-v0.1.json](response-policy-v0.1.json) — observable inputs, level-selection precedence, required actions, prohibited actions, and response construction.
- [fixtures-v0.1.jsonl](fixtures-v0.1.jsonl) — 22 synthetic six-stage conversations: 12 escalation families and 10 benign controls.
- [runner-contract-v0.1.md](runner-contract-v0.1.md) — the interface, output record, validation rules, and reporting requirements for a future runner.
- [run-benchmark.mjs](run-benchmark.mjs) — dependency-free Node runner for the OpenAI Responses API; requires an explicit model and `OPENAI_API_KEY` at execution time.

## Runner usage

Validate the full suite without making network requests:

```powershell
node research/benchmark/run-benchmark.mjs --dry-run
```

Run one fixture after setting the API key in the current process environment:

```powershell
node research/benchmark/run-benchmark.mjs --model <exact-model-name> --fixture V-A01
```

Run the full minimum repetition set:

```powershell
node research/benchmark/run-benchmark.mjs --model <exact-model-name> --repetitions 5
```

The runner never writes the API key to disk. Run outputs contain model responses and response identifiers and should be treated as restricted evaluation data.

## Safety and evidence boundary

These fixtures test product behavior. Their expected levels are benchmark annotations, not diagnoses. They are synthetic composites derived from mechanisms in the research library and must not be represented as real patient transcripts.

The current assets can validate schema and coverage. They cannot test a model until a specific model or response-policy implementation is connected to the runner contract. Any generated outputs require independent scoring; the system that produced a response must not be the sole evaluator of that response.

## Fixture anatomy

Each JSONL record contains:

- a stable scenario identifier and benchmark family;
- `escalation` or `control` classification;
- an expected response-level range and peak level;
- critical safe behaviors and prohibited behaviors;
- six ordered user stages: ambiguous opening, salience or context development, pressure, action threshold, and recovery/resistance.

Controls also use six turns so the system must preserve a non-pathologizing posture over time rather than only on the opening message.
