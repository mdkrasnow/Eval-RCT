# Proposal Outline — Eval by SwiftScore: Pragmatic Hybrid Trial

## 1) Executive Summary
- **Goal:** Evaluate whether *Eval by SwiftScore* accelerates **teacher growth** while improving **teacher satisfaction**, **principal time saved**, and **principal–teacher connection**.
- **Design:** **Hybrid** two-phase field experiment over **6–18 months**:  
  **Phase A (0–6 mo):** Pair‑matched **parallel cluster RCT** (school-level).  
  **Phase B (7–18 mo):** **Stepped‑wedge** rollout (2–4 waves) where all schools receive Eval.
- **Stance:** **Pragmatic, as-deployed** product with **version logging** and feature flags.
- **Scale:** 50–200 schools; multi-district; national/international ready.

## 2) Objectives
- **Primary:** Teacher instructional **growth**.
- **Secondary:** (a) **Teacher satisfaction** (+ Retention Risk Index), (b) **Principal time saved**, (c) **Principal–teacher connection**, (d) **Principal satisfaction**.
- **Exploratory:** Feature usage → impact links; predictive validity of Retention Risk Index for actual retention (where available).

## 3) Design Overview
- **Unit of randomization:** School; **blocking:** district × school level × size × **preference** (ex ante interest in Eval).  
- **Phase A:** Primary confirmatory ITT estimate (bias‑resistant).  
- **Phase B:** Equity‑minded scale‑up; secondary confirmatory estimate with period fixed effects.
- **Noncompliance:** ITT primary; **CACE/TOT** secondary via IV (assignment → usage).
- **Contamination:** Monitor cross-school exposure; sensitivity analyses.

## 4) Participants & Setting
- Schools conducting formal teacher evaluations; principals/APs as users; all teachers under evaluation cycles.
- Exclude multi-school principals crossing arms.

## 5) Outcomes & Measurement
- **Teacher growth (primary):** Framework scores linked by **Many‑Facet Rasch (MFRM)** + **G‑theory** reliability; **Feedback Actionability Index** (human rubric + NLP).
- **Teacher satisfaction & Retention Risk Index:** short validated scales (job satisfaction, admin support, psych safety, burnout, intent-to-stay).
- **Principal time saved:** telemetry + **ATUS/DRM** micro time-use.
- **Principal–teacher connection:** **LMX‑7**, **Relational Trust**, **Psychological Safety**.
- **Guardrails:** **Evidence→Rating Alignment** and **Generosity Audit**.

## 6) Data Sources & Schedule
- **Artifacts:** low‑inference notes, final write‑ups, component scores, timestamps.  
- **Surveys:** baseline, midline, endline + monthly/bimonthly pulses (≤5 min).  
- **Telemetry:** logins, drafts, edit time, evidence citations, time-to-final.  
- **Calendar/Coaching:** counts & minutes of observations and 1:1s.

## 7) Analysis (high level)
- **Phase A:** Mixed‑effects **ANCOVA** (teacher & school random intercepts, district blocks).  
- **Phase B:** **SW‑CRT GLMM** with period fixed effects.  
- **Unified model:** treatment, time, phase indicators; heterogeneity; mediation (exploratory).  
- **Missing data:** Multiple imputation; **FWER** control within families.

## 8) Product Iteration
- **Primary estimand:** ITT “**Eval as deployed**.”  
- Version tags, change log, and version‑specific sensitivity windows (60–90 days).

## 9) Ethics & Governance
- FERPA‑aligned; consent for surveys; de‑identification; OSF/AEARCTR preregistration.

## 10) Timeline
- Months −1–0: Recruitment, matching, baseline, onboarding.  
- Months 0–6: **Phase A**.  
- Months 7–18: **Phase B**.  
- Months 19–20: Clean, analyze, report.

## 11) Deliverables
- Executive brief; full technical report; slide deck; anonymized analysis repo; SOPs; Accuracy Sub‑Study results; Generosity Audit report.
