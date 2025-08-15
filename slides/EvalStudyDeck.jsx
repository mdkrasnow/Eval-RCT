import React, { useEffect, useMemo, useState } from "react";

/** ---------------- Icons (inline SVG, accessible) ---------------- */
const IconTarget = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M11 2h2v3.06a7.002 7.002 0 0 1 6.94 6.2h3.06v2h-3.06a7.002 7.002 0 0 1-6.2 6.94V22h-2v-3.06A7.002 7.002 0 0 1 4.06 13H1v-2h3.06A7.002 7.002 0 0 1 11 5.06V2Zm1 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm0 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"/>
  </svg>
);
const IconFlask = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M9 2h6v2h-1v4.586l5.657 8.486A3 3 0 0 1 16.99 22H7.01a3 3 0 0 1-2.667-4.928L10 8.586V4H9V2Zm2 6.828l-6.02 9.02A1 1 0 0 0 7.01 20h9.98a1 1 0 0 0 .83-1.552L11 8.828Z"/>
  </svg>
);
const IconTimeline = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M3 6h18v2H3V6Zm3 5h12v2H6v-2Zm-3 5h18v2H3v-2Z"/>
  </svg>
);
const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M16 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm-8 3a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Zm-8-1c-2.67 0-8 1.34-8 4v3h6v-2c0-1 .4-1.85 1.06-2.55A9.98 9.98 0 0 1 8 15Z"/>
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1Zm1 11h6v2h-8V6h2v6Z"/>
  </svg>
);
const IconShieldCheck = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2l8 3v6c0 5.25-3.44 9.9-8 11c-4.56-1.1-8-5.75-8-11V5l8-3Zm-1 13.59l6.3-6.3l-1.41-1.41L11 12.76l-2.47-2.47l-1.41 1.41L11 15.59Z"/>
  </svg>
);
const IconDice = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M3 3h10v10H3V3Zm8 2H5v6h6V5Zm-1 12h9v4h-9v-4Zm11-12h-5v2h3v3h2V5Zm-7 6h2v2h-2v-2Z"/>
  </svg>
);
const IconSpark = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2l2 5l5 2l-5 2l-2 5l-2-5l-5-2l5-2l2-5Zm7 12l1 2l2 1l-2 1l-1 2l-1-2l-2-1l2-1l1-2ZM4 14l1 2l2 1l-2 1l-1 2l-1-2l-2-1l2-1l1-2Z"/>
  </svg>
);

/** ---------------- Styles (in-component for portability) ---------------- */
const styles = `
:root{
  --bg:#0f1220;
  --panel:#151933;
  --muted:#a7b0c0;
  --text:#eef2ff;
  --accent:#7c9cff;
  --accent-2:#7ff0d6;
  --chip:#1c2244;
  --ok:#50e3a4;
  --warn:#ffd166;
}
*{box-sizing:border-box}
.deck-wrap{
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Apple Color Emoji","Segoe UI Emoji";
  background: radial-gradient(1200px 600px at 10% -10%, #1b2044 0%, #0f1220 40%, #0b0d18 100%);
  color: var(--text);
  min-height: 100vh; padding: 32px; display:flex; align-items:center; justify-content:center;
}
.deck{
  width: min(1100px, 95vw);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  box-shadow: 0 30px 70px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06);
  position: relative; overflow: hidden;
}
.deck header{
  display:flex; align-items:center; justify-content:space-between; gap:16px;
  padding: 18px 22px; border-bottom:1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.02); backdrop-filter: blur(6px);
}
.brand{display:flex; align-items:center; gap:10px; font-weight:600; letter-spacing:.2px}
.brand .logo{
  width:28px; height:28px; display:grid; place-items:center; border-radius:8px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color:#0a0d1a; font-weight:800;
}
.controls{display:flex; align-items:center; gap:8px}
.btn{
  display:inline-flex; align-items:center; gap:8px; border:1px solid rgba(255,255,255,.12);
  background: #12162c; color: var(--text);
  padding: 10px 14px; border-radius: 10px; cursor: pointer; font-weight:600;
  transition: transform .08s ease, background .2s ease, border-color .2s ease;
}
.btn:focus{outline:2px solid var(--accent)}
.btn:hover{background:#0f1430; border-color: rgba(255,255,255,.2)}
.btn[disabled]{opacity:.45; cursor:not-allowed}
.progress{
  display:flex; gap:6px; align-items:center; margin-left:10px;
}
.dot{
  width:8px; height:8px; border-radius:50%;
  background: rgba(255,255,255,.2);
  transition: transform .2s ease, background .2s ease;
}
.dot.active{ background: var(--accent); transform: scale(1.4)}
.slide{
  display:grid; grid-template-columns: 1.1fr .9fr; gap:28px; padding: 32px 28px 40px;
}
@media (max-width: 860px){ .slide{ grid-template-columns: 1fr; } }
.h1{font-size: clamp(22px, 3.2vw, 34px); line-height:1.15; margin:0 0 10px}
.sub{color: var(--muted); font-size: 14px; margin-top:2px}
.kicker{display:inline-flex; align-items:center; gap:8px; padding:6px 10px; border-radius:999px;
  background: var(--chip); color: var(--muted); font-weight:600; letter-spacing:.25px; font-size:12px}
.panel{
  background: rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08);
  border-radius: 16px; padding: 18px; box-shadow: 0 10px 30px rgba(0,0,0,.25);
}
.stack{display:grid; gap:12px}
.row{display:flex; align-items:flex-start; gap:12px}
.row .ico{font-size: 22px; color: var(--accent)}
.badge{
  background: rgba(124,156,255,.15); color: var(--accent);
  border:1px solid rgba(124,156,255,.45);
  display:inline-flex; align-items:center; gap:8px; padding:6px 10px; border-radius:10px; font-weight:600; font-size:12px
}
.kpi{
  display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:10px
}
.kpi .chip{
  background: var(--chip); border:1px solid rgba(255,255,255,.06); border-radius:12px; padding:12px; font-size:12px; color:var(--muted)
}
.timeline{
  display:grid; gap:14px
}
.bar{
  height: 16px; border-radius: 999px; background: #10142a; border:1px solid rgba(255,255,255,.06);
  position: relative; overflow: hidden;
}
.bar .phase{
  position:absolute; top:0; bottom:0; border-radius: 999px; display:flex; align-items:center; justify-content:center;
  color:#0b0f1f; font-weight:800; letter-spacing:.4px; font-size:11px; text-transform:uppercase;
}
.phase.a{ left:2px; width:40%; background: linear-gradient(90deg, var(--accent), #5fa1ff)}
.phase.b{ left:42%; width:56%; background: linear-gradient(90deg, #51e3c2, var(--accent-2))}
.legend{display:flex; gap:10px; flex-wrap:wrap; font-size:12px; color:var(--muted)}
.legend .dotA,.legend .dotB{width:10px; height:10px; border-radius:999px; display:inline-block}
.legend .dotA{ background: var(--accent) } .legend .dotB{ background: var(--accent-2) }
.waves{display:grid; grid-template-columns: repeat(3, 1fr); gap:10px}
.wave{
  background: #0f1530; border:1px dashed rgba(255,255,255,.18); border-radius:12px; padding:10px 12px; text-align:center; color:var(--muted); font-size:12px
}
.grid2{display:grid; grid-template-columns: 1fr 1fr; gap:14px}
@media (max-width: 860px){ .grid2{grid-template-columns:1fr} }
.list{display:grid; gap:10px}
.list .item{
  display:grid; grid-template-columns: 22px 1fr; gap:10px; align-items:flex-start;
}
.item strong{color:#fff}
.footer{
  display:flex; align-items:center; justify-content:space-between; gap:10px; padding: 10px 22px 18px; color: var(--muted); font-size:12px
}
kbd{background: #0b0f1f; border:1px solid rgba(255,255,255,.12); padding:2px 6px; border-radius:6px; font-weight:600}
`;

/** ---------------- Slide Content ---------------- */
function SlideOne() {
  return (
    <div className="slide" role="group" aria-label="Slide 1: Overview">
      <section className="panel">
        <div className="kicker"><IconTarget /> Eval Study Overview</div>
        <h2 className="h1">Does <em>Eval by SwiftScore</em> accelerate teacher growth while saving principals time?</h2>
        <p className="sub">Pragmatic, two-phase field study across districts (6–18 months).</p>
        <div className="stack" style={{ marginTop: 14 }}>
          <div className="row">
            <div className="ico"><IconFlask /></div>
            <div>
              <strong>Design at a glance</strong><br />
              Phase A: Parallel pair-matched CRT → Phase B: Stepped-wedge rollout (everyone gets Eval).
            </div>
          </div>
          <div className="row">
            <div className="ico"><IconTarget /></div>
            <div>
              <strong>Primary</strong>: Teacher growth<br />
              <strong>Secondary</strong>: Teacher satisfaction, principal time saved, principal–teacher connection.
            </div>
          </div>
          <div className="row">
            <div className="ico"><IconUsers /></div>
            <div>
              <strong>Scale</strong>: 50–200 schools; multi-district (national/international ready).
            </div>
          </div>
        </div>
        <div className="kpi">
          <div className="chip">Pragmatic “as-deployed” product</div>
          <div className="chip">Pre-registered analysis</div>
          <div className="chip">Ethics-ready & FERPA-aligned</div>
        </div>
      </section>

      <aside className="panel">
        <div className="badge"><IconTimeline /> Simple → Detailed narrative</div>
        <div className="stack" style={{ marginTop: 12 }}>
          <div className="row"><div className="ico"><IconClock/></div><div><strong>Time horizon</strong>: 6–18 months total</div></div>
          <div className="row"><div className="ico"><IconDice/></div><div><strong>Randomization</strong>: school-level, pair-matched within district</div></div>
          <div className="row"><div className="ico"><IconShieldCheck/></div><div><strong>Built-in safeguards</strong>: rater calibration, evidence alignment, accuracy sub-study</div></div>
        </div>
      </aside>
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="slide" role="group" aria-label="Slide 2: Design and Timeline">
      <section className="panel">
        <div className="kicker"><IconTimeline /> Design & Timeline</div>
        <h2 className="h1">Hybrid Structure: Clean test first, then equitable roll-out</h2>
        <p className="sub">Phase A provides the headline causal contrast; Phase B scales ethically via steps.</p>

        <div className="timeline" style={{ marginTop: 12 }}>
          <div className="bar" aria-hidden="true">
            <div className="phase a">Phase A · Parallel CRT (Months 0–6)</div>
            <div className="phase b">Phase B · Stepped Wedge (Months 7–18)</div>
          </div>
          <div className="legend">
            <span><span className="dotA" /> Phase A</span>
            <span><span className="dotB" /> Phase B</span>
          </div>
        </div>

        <div className="grid2" style={{ marginTop: 14 }}>
          <div className="panel" style={{ background: "rgba(124,156,255,.08)" }}>
            <div className="badge"><IconDice/> Phase A — Parallel CRT</div>
            <div className="list" style={{ marginTop: 10 }}>
              <div className="item"><span>•</span><div>Randomize schools 1:1 within district-level pairs</div></div>
              <div className="item"><span>•</span><div>Primary ITT estimated here (bias-resistant)</div></div>
              <div className="item"><span>•</span><div>Preference-aware blocking; compliance tracked</div></div>
            </div>
          </div>
          <div className="panel" style={{ background: "rgba(127,240,214,.08)" }}>
            <div className="badge"><IconSpark/> Phase B — Stepped Wedge</div>
            <div className="list" style={{ marginTop: 10 }}>
              <div className="item"><span>•</span><div>Control schools cross over in 2–4 waves</div></div>
              <div className="item"><span>•</span><div>Period fixed effects handle time trends</div></div>
              <div className="item"><span>•</span><div>Everyone receives Eval; continuous learning</div></div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <div className="waves" aria-label="Crossover waves illustration">
            <div className="wave">Wave 1 · M7–M9</div>
            <div className="wave">Wave 2 · M10–M12</div>
            <div className="wave">Wave 3 · M13–M18</div>
          </div>
        </div>
      </section>

      <aside className="panel">
        <div className="badge"><IconShieldCheck/> Integrity Moves</div>
        <div className="list" style={{ marginTop: 12 }}>
          <div className="item"><span>•</span><div><strong>CACE/TOT</strong> as secondary if uptake varies (ITT is primary)</div></div>
          <div className="item"><span>•</span><div><strong>Version logging</strong> & feature flags for pragmatic “as-deployed” estimates</div></div>
          <div className="item"><span>•</span><div><strong>CONSORT</strong> reporting & pre-registration</div></div>
        </div>
      </aside>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="slide" role="group" aria-label="Slide 3: Outcomes and Rigor">
      <section className="panel">
        <div className="kicker"><IconTarget /> What We Measure</div>
        <h2 className="h1">Outcomes & Metrics (kept practical, analytically rigorous)</h2>

        <div className="grid2" style={{ marginTop: 12 }}>
          <div className="panel">
            <div className="badge"><IconTarget/> Outcomes</div>
            <div className="list" style={{ marginTop: 10 }}>
              <div className="item"><span>•</span><div><strong>Teacher growth (Primary)</strong><br/>Rater-adjusted rubric scores linked across frameworks + <em>Feedback Actionability Index</em></div></div>
              <div className="item"><span>•</span><div><strong>Teacher satisfaction</strong><br/>Short validated items + <em>Retention Risk Index</em> (intent-to-stay, admin support, burnout, psych safety)</div></div>
              <div className="item"><span>•</span><div><strong>Principal time saved</strong><br/>Telemetry + ATUS/DRM micro time-use</div></div>
              <div className="item"><span>•</span><div><strong>Human connection</strong><br/>LMX-7, Relational Trust, Psychological Safety</div></div>
            </div>
          </div>

          <div className="panel">
            <div className="badge"><IconShieldCheck/> Rigor & Safeguards</div>
            <div className="list" style={{ marginTop: 10 }}>
              <div className="item"><span>•</span><div><strong>MFRM & G-theory</strong> to adjust rater severity and quantify reliability</div></div>
              <div className="item"><span>•</span><div><strong>Evidence→Rating Alignment</strong> guardrail (no “generosity without evidence”)</div></div>
              <div className="item"><span>•</span><div><strong>Accuracy sub-study</strong> (Eval vs. principal vs. expert consensus on same artifacts)</div></div>
              <div className="item"><span>•</span><div><strong>Preference-aware blocking</strong> + <strong>ITT primary</strong>, CACE secondary</div></div>
            </div>
          </div>
        </div>
      </section>

      <aside className="panel">
        <div className="badge"><IconClock/> What This Delivers</div>
        <div className="list" style={{ marginTop: 10 }}>
          <div className="item"><span>•</span><div><strong>Clear headline effect</strong> at 6 months (Phase A)</div></div>
          <div className="item"><span>•</span><div><strong>Equitable rollout</strong> & continuous learning in Phase B</div></div>
          <div className="item"><span>•</span><div><strong>Bulletproof story</strong>: growth, time saved, and trustworthy scoring</div></div>
        </div>
      </aside>
    </div>
  );
}

/** ---------------- Main Component ---------------- */
export default function EvalStudyDeck() {
  const slides = useMemo(() => [<SlideOne key="s1"/>, <SlideTwo key="s2"/>, <SlideThree key="s3"/>], []);
  const [i, setI] = useState(0);
  const go = (dir) => setI((v) => Math.min(slides.length - 1, Math.max(0, v + dir)));
  const to = (idx) => setI(() => Math.min(slides.length - 1, Math.max(0, idx)));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") go(1);
      if (e.key === "ArrowLeft"  || e.key.toLowerCase() === "a") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="deck-wrap">
      <style>{styles}</style>
      <div className="deck" role="region" aria-label="Eval by SwiftScore Study Deck">
        <header>
          <div className="brand" aria-label="Brand">
            <div className="logo">E</div>
            <div>Eval by SwiftScore · Study Plan</div>
          </div>
          <div className="controls" role="toolbar" aria-label="Slide controls">
            <button className="btn" onClick={() => go(-1)} disabled={i===0} aria-label="Previous slide">
              ◀ Prev
            </button>
            <button className="btn" onClick={() => go(1)} disabled={i===slides.length-1} aria-label="Next slide">
              Next ▶
            </button>
            <div className="progress" aria-label="Slide progress">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${i===idx ? "active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${idx+1}`}
                  onClick={() => to(idx)}
                  onKeyDown={(e)=> (e.key==="Enter"||e.key===" ") && to(idx)}
                />
              ))}
            </div>
          </div>
        </header>

        {slides[i]}

        <div className="footer">
          <div>
            <strong>Tip:</strong> Use <kbd>←</kbd>/<kbd>→</kbd> or <kbd>A</kbd>/<kbd>D</kbd> to navigate
          </div>
          <div>Phase A → Phase B · Pragmatic, pre-registered, version-aware</div>
        </div>
      </div>
    </div>
  );
}
