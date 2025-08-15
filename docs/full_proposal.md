# Full Protocol — Eval by SwiftScore: Pragmatic Hybrid Trial (Parallel CRT → Stepped Wedge)

**Sponsor:** SwiftScore  
**PI:** Matt Krasnow · **Version:** 1.0 · **Date:** 08/15/2025
**Scope:** 50–200 schools, multi‑district, 6–18 months

---

## 1. Background & Rationale
Teacher evaluation consumes substantial principal time and often yields inflated or low‑signal ratings. *Eval by SwiftScore* aims to (i) reduce documentation burden, (ii) scaffold evidence‑based, actionable feedback, and (iii) expand time for observation and coaching. We will evaluate effectiveness under real‑world conditions while the product iterates.

## 2. Objectives & Research Questions
- **Primary:** Does access to Eval improve **teacher instructional growth** relative to business‑as‑usual after 6 months (Phase A) and across 18 months (Phase B)?
- **Secondary:** Effects on **teacher satisfaction** (incl. Retention Risk Index), **principal time saved**, **principal–teacher connection**, and **principal satisfaction**.
- **Exploratory:** Which usage patterns/features predict impact? Does the Retention Risk Index predict subsequent retention (where available)?

## 3. Design Overview
Two‑phase **pragmatic** hybrid:
- **Phase A (0–6 mo):** Pair‑matched **parallel cluster RCT** at school level; clean confirmatory ITT.
- **Phase B (7–18 mo):** **Stepped‑wedge** crossover in 2–4 waves; all control schools adopt Eval in randomized order.
- **Preference‑aware blocking** pre‑randomization.
- **Noncompliance:** ITT primary; **CACE/TOT** secondary via IV (assignment → usage).
- **Contamination controls:** Track cross‑school exposure, shared artifacts, and multi‑school staff.

## 4. Setting, Eligibility, Recruitment
- **Setting:** Districts using formal teacher evaluation frameworks (Danielson, Marzano, state systems).
- **Eligibility:** Schools able to share artifacts (notes, write‑ups) & scores; survey participation; telemetry use for treated schools.
- **Exclusions:** Principals supervising schools in different arms; active Eval pilots at baseline.

## 5. Intervention & Control
- **Intervention (Eval):** Product as deployed; onboarding (live + docs); support. **Version log** with time‑stamped releases and feature flags.
- **Control:** Business‑as‑usual (no Eval access) during Phase A; adopts in its assigned Phase‑B wave.

## 6. Outcomes & Measures
### 6.1 Primary — Teacher Instructional Growth
1) **Framework score (linked latent measure):** Many‑Facet Rasch (facets: teacher, rater, component, framework, school, period). Report severity‑adjusted fair‑average measures.  
2) **Reliability:** G‑theory (G/D‑studies) for variance decomposition and recommended observation counts.  
3) **Feedback Actionability Index:** Human‑coded rubric (specificity, evidence linkage, actionable next steps, alignment); inter‑rater κ ≥ 0.75. NLP features support scaling and drift checks.

### 6.2 Secondary
- **Teacher Satisfaction:** Short‑form job satisfaction + admin support + psych safety + burnout + intent‑to‑stay → standardized composite.  
- **Principal Time Saved:** Telemetry + **ATUS/DRM** micro time‑use (hours/month).  
- **Principal–Teacher Connection:** **LMX‑7**, **Relational Trust**, **Psychological Safety** composites.  
- **Principal Satisfaction:** 5–7 item workflow/ease/strain scale.

### 6.3 Guardrails & Audits
- **Evidence→Rating Alignment Index:** Match between cited evidence and component‑level rating thresholds.  
- **Generosity Audit:** Detect rating uplift without commensurate evidence/actionability increases.

### 6.4 Accuracy Sub‑Study (confirmatory secondary)
- Compare **Eval vs. Principal vs. Expert Consensus** ratings on the **same de‑identified artifacts**; metrics: weighted κ, calibration bias, evidence sufficiency.

## 7. Data Collection
- **Artifacts:** Low‑inference notes; final documents; component scores; timestamps; evidence citations by component.  
- **Telemetry:** Logins, drafts, edits, time‑to‑final, feature use.  
- **Surveys:** Baseline, midline (6 mo), endline (18 mo), plus pulses (≤5 min monthly/bimonthly).  
- **Coaching:** Counts & minutes via calendar scrape or short logs.

## 8. Randomization & Allocation
- **Blocking strata:** District × school level × size × principal **preference** (want/neutral/not).  
- **Phase A:** Randomize 1:1 within strata; allocation concealed until assignment email.  
- **Phase B:** Pre‑randomize wave order among remaining controls (balanced by strata).  
- **Documentation:** Immutable seed, allocation table, and audit trail; CONSORT flow diagrams.

## 9. Compliance & Fidelity
- **Compliance threshold (school level):** ≥ *X* Eval‑generated/edited evaluations per month **and** evidence citation rate ≥ *Y%*.  
- **Fidelity KPIs:** Training completion, feature adoption, time‑to‑final, note→eval conversion rate.

## 10. Statistical Analysis Plan
### 10.1 Primary Confirmatory
- **Phase A (6 months):** Mixed‑effects **ANCOVA** on teacher‑level standardized outcomes; random intercepts (school, teacher); fixed effects (district block, calendar month); cluster‑robust SEs.  
- **Phase B:** **SW‑CRT GLMM** with period fixed effects; random intercepts as above; treatment indicator is time‑varying.

### 10.2 Secondary & Exploratory
- **CACE/TOT:** Two‑stage least squares with assignment as instrument for usage; report alongside ITT.  
- **Mediation:** (Eval → time saved / connection → growth) exploratory multilevel mediation.  
- **Heterogeneity:** Novice vs. veteran, subject, grade band, framework, school level.  
- **Missing data:** Multiple imputation under MAR; attrition diagnostics; IPW sensitivity.

### 10.3 Measurement Modeling
- **MFRM** linking across frameworks; report separation reliability and rater severity.  
- **G‑theory** for reliability; **drift** checks via quarterly vignette calibration.

### 10.4 Multiplicity
- Families: Primary (α=0.05), Secondaries (BH q=0.10).

## 11. Product Iteration & Versioning
- **Primary estimand:** ITT for **as‑deployed** Eval.  
- **Change log:** CSV template; major releases flagged in analysis.  
- **Sensitivity:** Version‑frozen 60–90 day windows; dose (usage minutes/features) analyzed as associations.

## 12. Ethics, Privacy, and Governance
- FERPA‑aligned sharing; de‑identified analysis; survey consent; expert panel NDA for Accuracy Sub‑Study.  
- **IRB/exempt determination** as required; OSF/AEARCTR preregistration; CONSORT‑CRT/SW checklists.

## 13. Risk Management
- **Preference bias:** Preference‑aware blocking; ITT + CACE; Rosenbaum‑style sensitivity.  
- **Time trends (SW):** Period fixed effects; seasonality windows.  
- **Inflation skepticism:** Evidence Alignment + Accuracy Sub‑Study.  
- **Survey fatigue:** Tailored Design + very short pulses; rotating items.

## 14. Timeline
- −1–0 mo: Baseline, pairing, randomization, onboarding.  
- 0–6 mo: Phase A (primary endpoint).  
- 7–18 mo: Phase B (waves).  
- 19–20 mo: Clean/analyze/report.

## 15. Dissemination
- Executive brief; public white paper; academic submission; dataset & code (anonymized); slide deck.

## Appendix A — Outcome Codebook (excerpt)
- **TeacherGrowth_Z:** standardized latent score (MFRM‑linked).  
- **FAI_Score:** 0–4 human rubric × 4 dimensions; plus NLP support indices.  
- **ERAI:** Evidence→Rating Alignment Index (0–1).  
- **TRR_Index:** Teacher Retention Risk (latent factor score).  
- **TimeSaved_Hrs:** hours/leader/month (DRM‑aligned).  
- **LMX7_Z, Trust_Z, PsychSafety_Z, TJS_Z:** standardized composites.

## Appendix B — Pre‑registration Fields (skeleton)
- Estimands, outcomes, families & corrections, models, covariates, subgroup plan, missing data plan, stopping rules (none), deviations policy, blinded mock tables.
