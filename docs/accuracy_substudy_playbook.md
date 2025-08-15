# Accuracy Sub‑Study Playbook
**Goal:** Test whether Eval’s ratings align with expert consensus at least as well as principal ratings on the **same artifacts**, and whether Eval’s feedback cites sufficient evidence.

## Design
- **Sample:** 10–15% of all evaluations, stratified by district, level, subject, framework, and arm/phase.
- **Artifacts:** Low‑inference notes + final write‑ups; where permitted, transcripts or video excerpts.
- **Arms compared:** (a) **Principal ratings**, (b) **Eval ratings** run on the same artifacts, (c) **Expert consensus**.

## Consent & De‑Identification
- Surveys: informed consent per district policy.
- Artifacts: remove names, IDs, school/district markers; shift dates by ± up to 7 days; mask unique incidents.
- Key file stored separately with restricted access; analysis receives de‑identified bundle.

## Expert Raters
- **Profile:** Certified/experienced evaluators across frameworks; no affiliation with participating schools.
- **Training:** 2‑hour calibration on anchor packages; target inter‑rater **κ ≥ 0.70** before live scoring.
- **Adjudication:** Disagreements → third rater; consensus recorded per component.

## Scoring Protocol
1. Package standardized artifact set per teacher event.
2. Experts score per component with the locale’s framework; record rationale snippets.
3. Run **Eval** on the same artifacts (no access to principal scores/text). Lock version in log.
4. Compare **Principal vs. Eval vs. Consensus**.

## Metrics
- **Agreement:** Quadratic‑weighted **κ** per component; polychoric correlations sensitivity.
- **Calibration:** Mean signed error vs. consensus (bias); RMS error.
- **Evidence sufficiency:** Evidence→Rating Alignment (ERAI) % meeting threshold per component.
- **Actionability:** Actionability subscore from Feedback Actionability Index (FAI).

## Analysis
- Report κ with 95% CI; test Δκ(Eval−Principal) via bootstrap.  
- Bland–Altman style calibration plots; error distributions.  
- Subgroup: framework, level, subject, phase.

## Timeline & Throughput
- Monthly sample draw; rater scoring SLA: 7–10 days; batch report at month‑end.

## Data Management
- Secure enclave for artifact storage; audit trail of access; retained de‑identified for 5 years unless policy dictates otherwise.
