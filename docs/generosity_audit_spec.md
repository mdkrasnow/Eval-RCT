# Generosity Audit — Specification & Templates

**Purpose:** Detect whether observed rating increases are **supported by cited evidence and actionable feedback**—guarding against “more generous” scoring without substance.

## Core Indices
### 1) Evidence Density (ED)
- **Definition:** Number of unique, component‑tagged low‑inference evidence citations per 100 words of feedback.  
- **Formula:** `ED = (Citations / TotalWords) × 100`

### 2) Actionability Score (AS)
Composite (0–4) from human‑coded rubric (equal weights unless noted):
- Specificity (0–1), Evidence Linkage (0–1), Next Steps (0–1), Alignment to Component Descriptors (0–1).
- NLP assist indices (concreteness, directive verbs, future‑oriented phrasing) are standardized and used as auxiliary checks.

### 3) Evidence→Rating Alignment Index (ERAI)
- **Definition:** Degree to which the **assigned level** is **justified** by cited evidence against rubric descriptors.  
- **Operationalization:** Map each citation to descriptors; compute the **max supported level**.  
- **Index:** `ERAI = 1 – max(0, AssignedLevel – MaxSupportedLevel) / (Levels – 1)` ∈ [0,1]. 1 = fully aligned.

### 4) Unsupported Uplift Rate (UUR)
- **Definition:** Share of components where AssignedLevel > MaxSupportedLevel **and** ΔAS < δ (no meaningful actionability gain).  
- **Threshold:** δ = 0.25 (on 0–4 scale) unless pre‑registered otherwise.

## Hypotheses
- H1: ΔRatings_treatment > 0 **accompanied by** ΔED > 0, ΔAS > 0, ΔERAI > 0.  
- H0 (bad): ΔRatings_treatment > 0 with **no** ΔED/ΔAS/ΔERAI (flag as generosity risk).

## Tests
- Arm/phase contrasts on ED, AS, ERAI (mixed models).  
- UUR difference‑in‑proportions with cluster‑robust SEs.  
- Joint test: Wald test on (ΔED, ΔAS, ΔERAI).

## Reporting
- **By phase (A vs. B)** and **arm** (T vs. C in A; pre vs. post in B).  
- **Tables:** Means, SDs, Δ, 95% CIs; UUR % by component.  
- **Plots:** Rainclouds or ridgelines for ED/AS; bar with CI for ERAI/UUR.

## Data Requirements
- Component‑tagged citations; tokenized word counts; assigned levels; descriptor mapping table.

## Templates
- See `/templates/generosity_audit_report_template.csv` for per‑school/per‑phase reporting.
