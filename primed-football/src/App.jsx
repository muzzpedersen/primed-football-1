
// ── PRIMED — Individual Football S&C App ────────────────────────────────────────
// Readiness-driven training system for individual players
// Powered by the In-Season Football S&C Program (12 weeks)

// ── Supported languages ───────────────────────────────────────────────────────
const C = {
  bg:        "#FFFFFF",
  surface:   "#F8FAFC",
  card:      "#FFFFFF",
  border:    "#E2E8F0",
  navy:      "#F1F5F9",
  green:     "#6B7C2D",
  greenLt:   "#EEF1D6",
  greenDk:   "#3B4419",
  interactive: "#EEF1D6",
  amber:     "#D97706",
  amberLt:   "#FEF3C7",
  amberDk:   "#78350F",
  red:       "#DC2626",
  redLt:     "#FEE2E2",
  redDk:     "#7F1D1D",
  gold:      "#B45309",
  goldLt:    "#FEF9E7",
  text:      "#0F172A",
  muted:     "#64748B",
  faint:     "#F1F5F9",
};


const LANGUAGES = [
  { code: "en", flag: "🇬🇧", name: "English"    },
  { code: "ja", flag: "🇯🇵", name: "日本語"      },
  { code: "fr", flag: "🇫🇷", name: "Français"   },
  { code: "it", flag: "🇮🇹", name: "Italiano"   },
  { code: "es", flag: "🇪🇸", name: "Español"    },
  { code: "pt", flag: "🇵🇹", name: "Português"  },
  { code: "de", flag: "🇩🇪", name: "Deutsch"    },
  { code: "af", flag: "🇿🇦", name: "Afrikaans"  },
  { code: "fj", flag: "🇫🇯", name: "Fijian"     },
  { code: "mi", flag: "🇳🇿", name: "Māori"      },
];

// ── Master English strings ────────────────────────────────────────────────────
const EN = {
  appName:"PRIMED",appTagline:"Readiness-driven training for football players.",
  greetingMorning:"Good morning",greetingAfternoon:"Good afternoon",greetingEvening:"Good evening",
  bodyWeight:"Body Weight",sleep:"Sleep Quality",fatigue:"Energy / Fatigue",
  soreness:"Muscle Soreness",motivation:"Motivation",mood:"Mood",hydration:"Hydration",
  next:"Next",submit:"Submit",logged:"Logged ✓",loadingSession:"Loading your session…",
  readiness:"readiness",tapToRate:"Tap to rate",
  sleepLabels:["Terrible","Poor","Okay","Good","Excellent"],
  fatigueLabels:["Exhausted","Very tired","Getting tired","Good energy","Fully charged"],
  sorenessNone:"None",sorenessMild:"Mild",sorenessModerate:"Moderate",sorenessSore:"Sore",sorenessSevere:"Severe",
  sorenessFresh:"Feeling fresh",sorenessTight:"Slight tightness",sorenessDiscomfort:"Some discomfort",
  sorenessAffects:"Affects movement",sorenessLimiting:"Limiting movement",
  motivationLabels:["No drive","Low","Average","Motivated","Fired up 🔥"],
  moodVeryLow:"Very low",moodStressed:"Stressed",moodOkay:"Okay",moodContent:"Content",moodGreat:"Great",
  hydrationHint:"Hydration — match urine colour",
  hydrationLabels:["Brown","Amber","Dark yellow","Yellow","Pale yellow","Clear"],
  hydrationAdvice:["Seek medical advice","Very dehydrated","Very dehydrated","Drink more water","Good","Well hydrated"],
  goodToGo:"GOOD TO GO",takeCare:"TAKE CARE",restDay:"REST DAY",
  tabSession:"Session",tabAnalytics:"Analytics",tabProgram:"Program",
  recheck:"Re-check",programWeek:"PROGRAM WEEK",phase:"Phase",
  phaseFoundation:"Foundation",phaseIntensification:"Intensification",phaseCompetition:"Competition",
  keySession:"Key session of the week",noRestGoNext:"No rest — go straight to next",
  restBetweenSets:"rest between sets",tapToExpand:"Tap to expand",exercises:"exercises",
  demo:"📹 Demo",setHeader:"SET",weightHeader:"WEIGHT (kg)",repsHeader:"REPS",volumeLabel:"kg vol",
  sessionMonday:"💪 Monday",sessionWednesday:"⚡ Wednesday",sessionFriday:"🔋 Friday",
  sessionGame:"🏉 Game Day",sessionRecovery:"😴 Recovery",sessionField:"🏃 Field Day",
  triSetTitle:"Tri-Set Session",triSetSubtitle:"Push + Pull + Lower",
  triSetSubtitleAmber:"Push + Pull — lower body removed",
  strengthTitle:"Strength & Power",activationTitle:"Activation & Mobility",
  activationSubtitle:"Prime — don't fatigue",
  gameDayTitle:"Game Day",gameDayDesc:"Focus on your warm-up. Stay hydrated. Compete.",
  activeRecovery:"Active Recovery",fullRest:"Full Rest",
  activeRecoveryDesc:"Light walk, swim or mobility work. Nothing that raises your heart rate significantly.",
  amberRecoveryDesc:"Gentle movement only — foam rolling, light walking, stretching.",
  redRecoveryDesc:"Full rest today. Sleep, eat well, rehydrate. You need it.",
  recoveryTip:"Check-in again tomorrow morning. Your readiness score will guide your next session.",
  fieldTitle:"Team Field Training",fieldDesc:"Coach-led session today. Your S&C gym session is not scheduled.",
  fieldTip:"Communicate your readiness score to your coach if it's Amber or Red.",
  amberNote:"Amber day — Bi-Set format. Lower body removed to protect game-fatigued legs. Push + Pull only.",
  redNote:"Red day — Bi-Set format. Lower body removed. Push + Pull only.",
  greenOnlySkip:"🟢 Green only — skip today",
  triSet1Label:"TRI-SET 1",triSet1Sub:"Push · Pull · Lower",
  triSet2Label:"TRI-SET 2",triSet2Sub:"Push · Pull · Lower",
  triSet3Label:"TRI-SET 3",triSet3Sub:"Push · Pull · Lower",
  coreCarryLabel:"CORE & CARRY",coreCarrySub:"All zones",
  powerBlockLabel:"POWER BLOCK",powerBlockSub:"Complete first — nervous system fresh",
  lowerStrengthLabel:"LOWER BODY STRENGTH",upperStrengthLabel:"UPPER BODY STRENGTH",
  condFinisherLabel:"CONDITIONING FINISHER",condFinisherSub:"Green only / Skip on Red",
  cnsLabel:"CNS ACTIVATION",cnsSub:"Power primer — low volume, max intent",
  potentLabel:"POTENTIATION COMPLEX",potentSub:"Green full · Amber optional",
  mobilityLabel:"MOBILITY & RECOVERY",mobilitySub:"All zones — finish feeling loose",
  hipThrust:"Barbell Hip Thrust",copenhagenPlank:"Copenhagen Plank",gobletSquat:"Goblet Squat",
  lateralBandWalk:"Lateral Band Walk + Squat",pullUps:"Pull Ups / Chins",romanianDeadlift:"Romanian Deadlift",
  overheadPress:"Single Arm DB Shoulder Press",singleArmRow:"Single Arm DB Row",bulgarianSplit:"Bulgarian Split Squat",
  lateralHurdleHop:"Lateral Hurdle Hop + Stick",pallofPress:"Band Pallof Press",deadBug:"Dead Bug",
  powerClean:"Power Clean / Hang Clean",boxJump:"Box Jump",medBallSlam:"Med Ball Rotational Slam",
  backSquat:"Back Squat",nordicCurl:"Nordic Hamstring Curl",copenhagenHold:"Copenhagen Adductor Hold",
  broadJumpDecel:"Broad Jump to Deceleration",ankleStability:"Single-leg Ankle Stability Circuit",sledPush:"Sled Push",
  assaultBike:"Assault Bike",abWheel:"Ab Wheel Rollout",verticalJump:"Vertical Jump",
  broadJump:"Broad Jump",sprint:"Short Sprint 10–20m",trapBarDeadlift:"Trap Bar Deadlift",
  kneesToFeet:"Knees to Feet Jump",frontSquat:"Front Squat",archerPressUp:"Archer Press Up",
  declinePressUp:"Decline Press Up",lateralConeAgility:"Lateral Cone Agility",
  broadJump:"Broad Jump",sprint:"Short Sprint 10–20m",trapBarDeadlift:"Trap Bar Deadlift",
  boxJumpPost:"Box Jump (post-lift)",hip90:"Hip 90/90 Stretch",
  thoracicRotation:"Thoracic Rotation",foamRoll:"Foam Roll — Legs & Back",
  tagPush:"PUSH",tagPull:"PULL",tagLower:"LOWER 🟢 only",tagCarry:"CARRY",tagCore:"CORE",
  tagPower:"POWER",tagInjuryPrev:"INJURY PREVENTION",tagShoulderHealth:"SHOULDER HEALTH",
  tagConditioning:"CONDITIONING",tagCNS:"CNS",tagPotentiation:"POTENTIATION",
  tagMobility:"MOBILITY",tagRecovery:"RECOVERY",
  analyticsTitle:"Analytics",avgScore:"Avg Score",greenDays:"Green Days",redDays:"Red Days",
  wellnessAdvice:"🌿 WELLNESS ADVICE",readiness14:"📊 Readiness — 14 days",
  bodyWeightLabel:"⚖️ Body Weight",past7Days:"Past 7 days · kg",
  target:"Target",inZone:"✓ IN ZONE",hydrationTrend:"💧 Hydration Trend",
  adviceHydSevere:"Significant dehydration — drink 2–3L today and consider electrolytes.",
  adviceHydHigh:"Very dehydrated. Drink at least 2L today — start with a large glass right now.",
  adviceHydMod:"Moderate dehydration. Keep a water bottle with you, aim for 1.5–2L today.",
  adviceSleepBad:"Very poor sleep. No screens 30 min before bed, cool dark room, aim for 10pm bedtime.",
  adviceSleepPoor:"Poor sleep last night. No screens 30 min before bed, limit caffeine after 2pm, aim for 8 hours.",
  adviceSleepAvg:"Average sleep. A consistent bedtime routine and less caffeine after midday will help.",
  adviceFatigueLow:"Running on empty. Low intensity or full rest today — pushing hard now risks injury.",
  adviceFatigueHigh:"High fatigue. Prioritise a nutritious meal, reduce session intensity. A 20-min nap before 3pm can help.",
  adviceFatigueMod:"Moderate fatigue. Fuel well before training — carbohydrates 2–3 hours before your session.",
  adviceSorenessBad:"Significant soreness. Apply heat or ice to affected areas, prioritise mobility today.",
  adviceSorenessNoticeable:"Noticeable soreness. 10 minutes of light mobility and a warm-up are essential today.",
  adviceSorenessMild:"Mild soreness. A thorough warm-up before training will help performance and prevent injury.",
  adviceMotivationLow:"Motivation is very low. Focus on just showing up — even a short session builds the habit.",
  adviceMotivationSlight:"Low motivation. Set one small goal for today's session — achieving it will reset your drive.",
  adviceMoodLow:"Your mood is very low. Exercise can genuinely help — be kind to yourself today.",
  adviceMoodSlight:"Low mood. A short walk outdoors before training can lift your mood and help your body prepare.",
  adviceWeightOver:"above your target weight. Monitor your energy levels — excess weight can increase fatigue and reduce your power-to-weight ratio.",
  adviceWeightUnder:"below your target weight. This may affect your strength output and injury resilience. Speak to your coach or a sports dietitian.",
  adviceAllGood:"Great numbers across the board. Stay hydrated, fuel well before training, and keep the consistency.",
  programTitle:"12-Week In-Season Program",programSubtitle:"Club & amateur football · Readiness-driven",
  gameWeekStructure:"Game Week Structure",readinessGuide:"Readiness Guide",
  weekProgress:"12-Week Progress",currentWeek:"Current",
  fullSession:"Full Session",modifiedSession:"Modified Session",recoveryOnly:"Recovery Only",
  fullSessionDesc:"Train as programmed. Hit all sets, reps and loads.",
  modifiedSessionDesc:"Monday: Push + Pull bi-set only — lower body removed. Wednesday/Friday: reduce volume 20–25%.",
  recoveryOnlyDesc:"Mobility, foam rolling and light activation. No gym loading today.",
  saturday:"Saturday",sunday:"Sunday",monday:"Monday",tuesday:"Tuesday",
  wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",
  setupWelcome:"PRIMED",setupWelcomeDesc:"Readiness-driven training for football players. Check in daily. Train smarter.",
  setupHow1:"Daily wellness check-in — takes 60 seconds",
  setupHow2:"Readiness Score tells you how hard to train",
  setupHow3:"Your session adapts automatically — Green, Amber or Red",
  setupHow4:"12-week in-season S&C program built in",
  setupName:"What's your name?",setupNameSub:"First name or nickname is fine.",
  setupNamePlaceholder:"e.g. Jamie",setupPosition:"Your position?",
  setupPositionSub:"Helps tailor the program context.",
  setupWeight:"Target body weight?",
  setupWeightSub:"Your coach-set performance weight goal in kg. You can update this anytime.",
  setupWeightTip:"This is the weight at which you move best and perform at your peak. The app tracks daily and flags when you are more than 1% outside this range.",
  setupWeightPlaceholder:"e.g. 90.0",setupPin:"Set your PIN",
  setupPinChoose:"Choose a 4-digit PIN",setupPinConfirm:"Confirm your PIN",
  setupPinConfirmed:"✓ PIN confirmed",setupPinMismatch:"PINs don't match",
  setupComplete:"Complete setup →",setupDoneTitle:"You're set up.",
  setupDoneDesc:"Check in every morning before you train. Your Readiness Score will tell you exactly what to do.",
  setupStart:"Start →",nextBtn:"Next →",
  positions:["Goalkeeper","Right Back","Centre Back","Left Back","Defensive Mid","Central Mid","Attacking Mid","Right Wing","Left Wing","Striker"],
  loginEnterPin:"Enter your PIN to continue",loginWrong:"Incorrect PIN — try again",
  loginNotMe:"Not {{name}}? Reset app",
  weightToday:"Today's body weight",weightKg:"kg",weightTarget:"Target",weightZone:"±1% zone",
  settingsLanguage:"Language",settingsSelectLang:"Select your language",
  settingsTranslating:"Translating PRIMED to {{lang}}…",settingsTranslated:"✓ App translated to {{lang}}",
  settingsReset:"Reset app",settingsResetConfirm:"Reset PRIMED? This will clear all your data.",
};

// ── Translation engine ────────────────────────────────────────────────────────
async function translateStrings(targetLang, langName) {
  const cacheKey = `primed_lang_${targetLang}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) { try { return JSON.parse(cached); } catch {} }

  // Flatten arrays with pipe separator for efficient API call
  const payload = {};
  for (const [key, val] of Object.entries(EN)) {
    payload[key] = Array.isArray(val) ? val.join(" | ") : val;
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 8000,
      system: `You are a professional sports app translator specialising in football and fitness.
Translate the following JSON from English to ${langName}.
STRICT RULES — follow exactly:
- Return ONLY valid JSON. No markdown, no backticks, no explanation, no preamble.
- Keep ALL JSON keys exactly unchanged.
- Translate ALL string values naturally for an athlete audience.
- For values with " | " separators: translate each segment, keep the " | " separator.
- Keep emoji exactly as-is.
- Keep {{name}} and {{lang}} placeholders exactly as-is.
- Keep units: kg, RPE, BW+, 1RM, %, m, s, min exactly as-is.
- Keep set/rep notation like "4 × 6", "3 min", "90s" exactly as-is.
- Tone: energetic, direct, like a coach talking to an athlete.`,
      messages: [{ role: "user", content: JSON.stringify(payload) }],
    }),
  });

  const data   = await response.json();
  const text   = (data.content || []).map(b => b.text || "").join("");
  const clean  = text.replace(/^```json\s*/,"").replace(/```\s*$/,"").trim();
  const parsed = JSON.parse(clean);

  // Re-expand pipe-joined arrays
  const result = {};
  for (const [key, val] of Object.entries(parsed)) {
    result[key] = Array.isArray(EN[key]) ? String(val).split(" | ") : val;
  }

  localStorage.setItem(cacheKey, JSON.stringify(result));
  return result;
}

// ── useTranslation hook ───────────────────────────────────────────────────────
// ── Bodyweight Load Multipliers by Experience Level ──────────────────────────
const BW_MULTIPLIERS_BY_LEVEL = {
  novice: {
    "Romanian Deadlift": [0.85,0.70,0.55], "Single Arm DB Shoulder Press": [0.45,0.38,0.30],
    "Power Clean / Hang Clean": [0.60,0.50,0.40],
    "Front Squat": [0.85,0.70,0.55], "Back Squat": [1.00,0.85,0.70],
    "Trap Bar Deadlift": [1.25,1.00,0.85],
    "Barbell Hip Thrust": [1.00,0.85,0.70],
    "Bulgarian Split Squat": [0.30,0.25,0.20],
    "Goblet Squat": [0.25,0.20,0.15],
    "Pull Ups / Chins": [0.0,0.0,0.0],
  },
  intermediate: {
    "Romanian Deadlift": [1.50,1.25,1.00], "Single Arm DB Shoulder Press": [0.70,0.60,0.50],
    "Power Clean / Hang Clean": [1.00,0.85,0.70],
    "Front Squat": [1.50,1.25,1.00], "Back Squat": [1.75,1.50,1.25],
    "Trap Bar Deadlift": [2.00,1.75,1.50],
    "Barbell Hip Thrust": [1.75,1.50,1.25],
    "Bulgarian Split Squat": [0.55,0.45,0.35],
    "Goblet Squat": [0.40,0.33,0.25],
    "Pull Ups / Chins": [0.25,0.15,0.0],
  },
  advanced: {
    "Romanian Deadlift": [1.75,1.50,1.25], "Single Arm DB Shoulder Press": [0.90,0.75,0.60],
    "Power Clean / Hang Clean": [1.25,1.05,0.85],
    "Front Squat": [1.75,1.50,1.25], "Back Squat": [2.00,1.75,1.50],
    "Trap Bar Deadlift": [2.50,2.25,2.00],
    "Barbell Hip Thrust": [2.25,2.00,1.75],
    "Bulgarian Split Squat": [0.75,0.60,0.50],
    "Goblet Squat": [0.55,0.45,0.35],
    "Pull Ups / Chins": [0.40,0.30,0.20],
  },
};

function getBWMultipliers(user) {
  const level = (user && user.strengthLevel) || "intermediate";
  return BW_MULTIPLIERS_BY_LEVEL[level] || BW_MULTIPLIERS_BY_LEVEL.intermediate;
}

const HEAVY_LIFTS = new Set([
  "Front Squat","Back Squat","Trap Bar Deadlift",
  "Romanian Deadlift","Power Clean / Hang Clean",
  "Barbell Hip Thrust","Bulgarian Split Squat","Single Arm DB Shoulder Press",
  "Pull Ups / Chins","Single Arm DB Row",
]);


function useTranslation(langCode) {
  const [t, setT]             = useState(EN);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (langCode === "en") { setT(EN); return; }
    const lang = LANGUAGES.find(l => l.code === langCode);
    if (!lang) { setT(EN); return; }

    // Check localStorage cache synchronously first
    const cached = localStorage.getItem(`primed_lang_${langCode}`);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const result = {};
        for (const [key, val] of Object.entries(parsed)) {
          result[key] = Array.isArray(EN[key]) ? String(val).split(" | ") : val;
        }
        setT(result); return;
      } catch {}
    }

    // Not cached — call API
    setLoading(true);
    translateStrings(langCode, lang.name)
      .then(result => { setT(result); setLoading(false); })
      .catch(() => { setT(EN); setLoading(false); });
  }, [langCode]);

  return { t, loading };
}

// ── Language Selector ─────────────────────────────────────────────────────────
function LanguageSelector({ currentLang, onSelect }) {
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        display: "flex", alignItems: "center", gap: 6,
        background: C.card, border: `1px solid ${C.border}`,
        borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: C.text,
      }}>
        <span style={{ fontSize: 18 }}>{current.flag}</span>
        <span style={{ fontSize: 11, fontWeight: 600 }}>{current.name}</span>
        <span style={{ fontSize: 9, color: C.muted }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 49 }} />
          <div style={{
            position: "absolute", top: "calc(100% + 6px)", right: 0, zIndex: 50,
            background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12,
            overflow: "hidden", minWidth: 170, boxShadow: "0 8px 32px rgba(0,0,0,.5)",
          }}>
            {LANGUAGES.map(lang => (
              <button key={lang.code} onClick={() => { onSelect(lang.code); setOpen(false); }} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", background: lang.code === currentLang ? C.green : "transparent",
                border: "none", borderBottom: `1px solid ${C.border}`, cursor: "pointer",
                color: lang.code === currentLang ? "#fff" : C.text,
                fontSize: 13, fontWeight: lang.code === currentLang ? 700 : 400,
              }}>
                <span style={{ fontSize: 20 }}>{lang.flag}</span>
                <span style={{ flex: 1, textAlign: "left" }}>{lang.name}</span>
                {lang.code === currentLang && <span style={{ fontSize: 11 }}>✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Translating overlay ───────────────────────────────────────────────────────
function TranslatingOverlay({ langName }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: C.bg + "F0", backdropFilter: "blur(6px)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 20, fontFamily: font,
    }}>
      <PrimedLogo size={90} />
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700, color: C.text }}>
          Translating PRIMED
        </p>
        <p style={{ margin: 0, fontSize: 13, color: C.muted }}>
          to {langName} — cached forever after this
        </p>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 10, height: 10, borderRadius: "50%", background: C.green,
            animation: `dot ${1.2}s ${i * 0.2}s ease-in-out infinite`,
          }} />
        ))}
      </div>
      <style>{`@keyframes dot{0%,100%{opacity:.2;transform:scale(.7)}50%{opacity:1;transform:scale(1)}}`}</style>
    </div>
  );
}

// ── Colour system ─────────────────────────────────────────────────────────────
// ── PRIMED Logo images ────────────────────────────────────────────────────────
const LOGO_SMALL= "data:image/png;base64,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";
const LOGO_MED  = "data:image/png;base64,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";
const LOGO_LARGE= "data:image/png;base64,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";


// ── Score calculation ─────────────────────────────────────────────────────────
// 6 metrics, each worth 16.67 points (100 / 6)
// sleep, fatigue, soreness, motivation, mood: scale 1–5 (5 = best)
// hydration: scale 0–5 (5 = clear / well hydrated = best)
function calcScore(v) {
  const weight = 100 / 6;
  return Math.min(100, Math.round(
    (v.sleep      / 5) * weight +
    (v.fatigue    / 5) * weight +
    (v.soreness   / 5) * weight +
    (v.motivation / 5) * weight +
    (v.mood       / 5) * weight +
    (v.hydration  / 5) * weight
  ));
}

function getZone(score) {
  if (score >= 80) return "green";
  if (score >= 60) return "amber";
  return "red";
}

function zoneColor(zone) {
  return zone === "green" ? C.green : zone === "amber" ? C.amber : C.red;
}

function zoneBg(zone) {
  return zone === "green" ? C.greenDk : zone === "amber" ? C.amberDk : C.redDk;
}

function zoneLabel(zone, t) {
  if (!t) return zone === "green" ? "GOOD TO GO" : zone === "amber" ? "TAKE CARE" : "REST DAY";
  return zone === "green" ? (t.goodToGo || "GOOD TO GO") : zone === "amber" ? (t.takeCare || "TAKE CARE") : (t.restDay || "REST DAY");
}

// ── Hydration colours ─────────────────────────────────────────────────────────
const HYDRATION_COLORS = ["#3b1f0a","#92400e","#ca8a04","#fde047","#fef9c3","#e0f2fe"];
const HYDRATION_LABELS = ["Brown","Amber","Dark yellow","Yellow","Pale yellow","Clear"];

// ── Day cycle ─────────────────────────────────────────────────────────────────
// Training days 1–5, plus Game Day and Recovery outside the numbered cycle.
// Athlete selects manually each session.
//
//  Game Day  → Game day screen
//  Recovery  → Recovery guidance
//  Day 1     → Gym — Tri-Set (Push/Pull/Lower)
//  Day 2     → Field Training
//  Day 3     → Gym — Strength & Power (key session)
//  Day 4     → Field Training
//  Day 5     → Activation & Rest (pre-game prime)
//
const DAY_CYCLE = {
  "game":     { session: "game",      label: "Game Day",  icon: "🏉", desc: "Game Day",               numbered: false },
  "recovery": { session: "recovery",  label: "Active Recovery Day",  icon: "😴", desc: "Active Recovery Day",               numbered: false },
  1:          { session: "monday",    label: "Day 1",     icon: "💪", desc: "Gym — Strength/Power",           numbered: true  },
  2:          { session: "field",     label: "Day 2",     icon: "🏃", desc: "Field Training",          numbered: true  },
  3:          { session: "wednesday", label: "Day 3",     icon: "💪", desc: "Gym — Strength/Power",  numbered: true  },
  4:          { session: "field",     label: "Day 4",     icon: "🏃", desc: "Field Training",          numbered: true  },
  5:          { session: "friday",    label: "Day 5",     icon: "🔋", desc: "Activation & Rest",       numbered: true  },
};

// Ordered keys for rendering the day picker
const DAY_CYCLE_ORDER = [1, 2, 3, 4, 5, "game", "recovery"];

// Ideal RPE targets per day key
const IDEAL_RPE = {
  "game": 9, "recovery": 2,
  1: 7,  // Tri-Set — moderate-high
  2: 7,  // Field
  3: 9,  // Strength & Power — peak
  4: 6,  // Field — taper begins
  5: 4,  // Activation — low and sharp
};

// ── 12-WEEK PROGRAM DATA ──────────────────────────────────────────────────────
// Phase 1: Weeks 1–4 (Foundation), Phase 2: Weeks 5–9 (Intensification), Phase 3: Weeks 10–12 (Competition)

function getPhase(week) {
  if (week <= 4)  return { name: "Foundation",      num: 1, load: "65–70% 1RM", color: "#3B82F6" };
  if (week <= 9)  return { name: "Intensification", num: 2, load: "75–85% 1RM", color: C.green };
  return              { name: "Competition",        num: 3, load: "80–90% 1RM", color: C.gold };
}

const EXERCISE_IMAGES = {
  "Ab Wheel Rollout": "https://i.ibb.co/RGmT8NPM/Ab-Rollout.png",
  "Aerobic Run Intervals": "https://i.ibb.co/1thCfMYd/Aerobic-Run-Intervals.png",
  "Archer Press Up": "https://i.ibb.co/8DTGBxW8/Archer-Press-Up.png",
  "Assault Bike — 10s All Out + 30s Active Recovery": "https://i.ibb.co/S4rZGzpQ/Assault-Bike.png",
  "Back Squat": "https://i.ibb.co/Gv5nCSBy/Back-Squat.png",
  "Battle Ropes": "https://i.ibb.co/BVhwgGfy/Battle-Ropes.png",
  "Box Jump": "https://i.ibb.co/M5Pr2Y02/Box-Jump.png",
  "Broad Jump": "https://i.ibb.co/hxwzrBv7/Broad-Jump.png",
  "Broad Jump to Deceleration": "https://i.ibb.co/hxwzrBv7/Broad-Jump.png",
  "Bulgarian Split Squat": "https://i.ibb.co/nMKmFyXb/Bulgarian-Split-Squat-DB.png",
  "Copenhagen Plank": "https://i.ibb.co/b5HXQQpB/Copenhagen-Plank.png",
  "Single Arm DB Row": "https://i.ibb.co/nMGYvWm3/DB-Row.png",
  "Dead Bug": "https://i.ibb.co/0p3SbHR5/Dead-Bug.png",
  "Foam Roll — Legs & Back": "https://i.ibb.co/p6RgShc3/Foam-Roller.png",
  "Front Squat": "https://i.ibb.co/qMLXwVp6/Front-Squat.png",
  "Goblet Squat": "https://i.ibb.co/k2qKQVM8/Goblet-Squat.png",
  "Hip 90/90 Stretch": "https://i.ibb.co/XxJKnd6J/Hip-90-90-Stretch.png",
  "Barbell Hip Thrust": "https://i.ibb.co/whXGbnR8/Hip-Thrust.png",
  "Lateral Hop and Stick": "https://i.ibb.co/VYChJ74m/Hop-and-Stick.png",
  "Knees to Feet Jump": "https://i.ibb.co/XxxsB1xZ/Knees-to-Feet.png",
  "Lateral Cone Agility": "https://i.ibb.co/0VQYY4w1/Lateral-Agility.png",
  "Lateral Band Walk": "https://i.ibb.co/4ZxngmXm/Lateral-Band-Walk.png",
  "Med Ball Rotational Slam": "https://i.ibb.co/G4rX6zfF/Med-Slam.png",
  "Nordic Hamstring Curl": "https://i.ibb.co/qY1Pjp0x/Nordic-Hamstring-Curls.png",
  "Band Pallof Press": "https://i.ibb.co/TqHYC9Cq/Pallof-Press.png",
  "Power Clean / Hang Clean": "https://i.ibb.co/dZ5LB5t/Power-Hang-Clean.png",
  "Pull Ups / Chins": "https://i.ibb.co/RJ3g9nW/Pull-Ups.png",
  "Romanian Deadlift": "https://i.ibb.co/99Yk5knj/Romainian-Deadlift.png",
  "Rower Sprint": "https://i.ibb.co/dZ3b90x/Rower-Sprint.png",
  "Single Arm DB Shoulder Press": "https://i.ibb.co/DPLwR407/SA-DB-Press.png",
  "Short Sprint 10–20m": "https://i.ibb.co/LD4pWFLJ/Short-Sprint-10-20m.png",
  "Single-leg Ankle Stability Circuit": "https://i.ibb.co/sdhsPfSB/Single-leg-Ankle-Stability-Circuit.png",
  "Sled Push — 30m + 60m Jog Recovery": "https://i.ibb.co/bg6SBLcm/Sled-Push.png",
  "Thoracic Rotation": "https://i.ibb.co/Dgjk0z35/Thoracic-Rotation.png",
  "Trap Bar Deadlift": "https://i.ibb.co/3yv1Fty6/Trap-Bar-Deadlift.png",
  "Vertical Jump": "https://i.ibb.co/vFVN1xx/Vertical-Jump.png",
};


// ── Gym Workout Rotation ──────────────────────────────────────────────────────
// 3 rotating Strength/Power workouts A, B, C
// Mon rotation: W1=A, W2=C, W3=B, W4=A ... (pattern: A,C,B repeat)
// Wed rotation: W1=B, W2=A, W3=C, W4=B ... (pattern: B,A,C repeat)
// Monday adds a finisher (A=Sled, B=Lateral Cone, C=Battle Ropes)
// Wednesday adds an injury prevention block (Nordic + Copenhagen every week)
// Each workout = 3 trisets (Compound → Potentiation → Upper/Core) + Stability block

const MON_ROTATION  = ["A","C","B","A","C","B","A","C","B","A","C","B"]; // weeks 1–12
const WED_ROTATION  = ["B","A","C","B","A","C","B","A","C","B","A","C"]; // weeks 1–12

// ── Shared Stability Block (both days) ───────────────────────────────────────
const STABILITY_BLOCK = {
  label: "STABILITY",
  subtitle: "All zones — finish feeling controlled",
  exercises: [
    {
      name: "Single-leg Ankle Stability Circuit",
      tag: "ANKLE STABILITY",
      green:  { sets: 3, reps: "10ea", load: "BW",   rest: "60s" },
      amber:  { sets: 2, reps: "8ea",  load: "BW",   rest: "60s" },
      red:    { sets: 1, reps: "6ea",  load: "BW",   rest: "—"   },
      youtube: "https://www.youtube.com/watch?v=uFIc9fE3OI8",
    },
    {
      name: "Lateral Band Walk",
      tag: "GLUTE/STABILITY",
      green:  { sets: 3, reps: "12ea", load: "Band", rest: "45s" },
      amber:  { sets: 2, reps: "10ea", load: "Band", rest: "45s" },
      red:    { sets: 1, reps: "8ea",  load: "Band", rest: "—"   },
      youtube: "https://www.youtube.com/watch?v=YPKaKbKFwM4",
    },
  ],
};

// ── Wednesday Injury Prevention Block ────────────────────────────────────────
const INJURY_PREV_BLOCK = {
  label: "INJURY PREVENTION",
  subtitle: "Every Wednesday — non-negotiable",
  exercises: [
    {
      name: "Nordic Hamstring Curl",
      tag: "INJURY PREVENTION",
      green:  { sets: 3, reps: "6",    load: "BW",   rest: "2 min" },
      amber:  { sets: 2, reps: "5",    load: "BW",   rest: "2 min" },
      red:    { sets: 1, reps: "4",    load: "BW",   rest: "—"     },
      youtube: "https://www.youtube.com/watch?v=d8AAPMa8Pf0",
    },
    {
      name: "Copenhagen Plank",
      tag: "ADDUCTOR",
      green:  { sets: 3, reps: "20s",  load: "BW",   rest: "60s" },
      amber:  { sets: 2, reps: "15s",  load: "BW",   rest: "60s" },
      red:    { sets: 1, reps: "10s",  load: "BW",   rest: "—"   },
      youtube: "https://www.youtube.com/watch?v=oBSuq9vbzh0",
    },
  ],
};

// ── Monday Finishers (one per workout letter) ─────────────────────────────────
const MON_FINISHERS = {
  A: {
    label: "FINISHER",
    subtitle: "Green full · Amber reduced · Skip on Red",
    exercises: [{
      name: "Sled Push — 30m + 60m Jog Recovery",
      tag: "CONDITIONING",
      green:  { sets: 4, reps: "30m push, 60m jog back", load: "Heavy", rest: "—" },
      amber:  { sets: 2, reps: "30m push, 60m jog back", load: "Mod",   rest: "—" },
      red:    null,
      youtube: "https://www.youtube.com/watch?v=5XvRNBqzZwY",
    }],
  },
  B: {
    label: "FINISHER",
    subtitle: "Green full · Amber reduced · Skip on Red",
    exercises: [{
      name: "Lateral Cone Agility — Work + Walk Recovery",
      tag: "AGILITY",
      green:  { sets: 4, reps: "30s max effort, slow walk round cones", load: "Max", rest: "—" },
      amber:  { sets: 2, reps: "20s effort, slow walk round cones",     load: "Mod", rest: "—" },
      red:    null,
      youtube: "https://www.youtube.com/watch?v=RKW4GtVZNrE",
    }],
  },
  C: {
    label: "FINISHER",
    subtitle: "Green full · Amber reduced · Skip on Red",
    exercises: [{
      name: "Assault Bike — 10s All Out + 30s Active Recovery",
      tag: "CONDITIONING",
      green:  { sets: 6, reps: "10s all out, 30s easy spin", load: "Max", rest: "—" },
      amber:  { sets: 4, reps: "10s all out, 30s easy spin", load: "Max", rest: "—" },
      red:    null,
      youtube: "https://www.youtube.com/watch?v=roWRHJvKMCc",
    }],
  },
};

// ── Workout A ─────────────────────────────────────────────────────────────────
const GYM_WORKOUT_A = [
  {
    label: "TRISET 1",
    subtitle: "Full Body Power → Deceleration → Pull",
    exercises: [
      {
        name: "Power Clean / Hang Clean",
        tag: "POWER",
        green:  { sets: 4, reps: "4",    load: "75%",     rest: "No rest → B" },
        amber:  { sets: 3, reps: "3",    load: "65%",     rest: "No rest → B" },
        red:    { sets: 2, reps: "3",    load: "50%",     rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=yOiFeHhTf1A",
      },
      {
        name: "Broad Jump to Deceleration",
        tag: "DECELERATION",
        green:  { sets: 4, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 3, reps: "3",    load: "Sub-max", rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      },
      {
        name: "Single Arm DB Row",
        tag: "PULL",
        green:  { sets: 4, reps: "10ea", load: "Heavy",   rest: "2 min" },
        amber:  { sets: 3, reps: "10ea", load: "Mod",     rest: "2 min" },
        red:    { sets: 2, reps: "10ea", load: "Light",   rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=pYcpY20QaE8",
      },
    ],
  },
  {
    label: "TRISET 2",
    subtitle: "Lower Strength → Power → Core",
    exercises: [
      {
        name: "Back Squat",
        tag: "LOWER",
        green:  { sets: 4, reps: "5",    load: "80%",     rest: "No rest → B" },
        amber:  { sets: 3, reps: "6",    load: "70%",     rest: "No rest → B" },
        red:    { sets: 2, reps: "8",    load: "60%",     rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=bEv6CCg2BC8",
      },
      {
        name: "Knees to Feet Jump",
        tag: "POWER",
        green:  { sets: 4, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 3, reps: "3",    load: "Sub-max", rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=7DEgkFGBEJA",
      },
      {
        name: "Dead Bug",
        tag: "CORE",
        green:  { sets: 4, reps: "8ea",  load: "BW",      rest: "2 min" },
        amber:  { sets: 3, reps: "8ea",  load: "BW",      rest: "2 min" },
        red:    { sets: 2, reps: "6ea",  load: "BW",      rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=4XLEnwUr1d8",
      },
    ],
  },
  {
    label: "TRISET 3",
    subtitle: "Posterior Chain → Plyometric → Upper",
    exercises: [
      {
        name: "Barbell Hip Thrust",
        tag: "POSTERIOR CHAIN",
        green:  { sets: 2, reps: "8",    load: "75%",     rest: "No rest → B" },
        amber:  { sets: 2, reps: "8",    load: "65%",     rest: "No rest → B" },
        red:    { sets: 1, reps: "10",   load: "50%",     rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE",
      },
      {
        name: "Box Jump",
        tag: "POWER",
        green:  { sets: 2, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 1, reps: "3",    load: "Mod",     rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=52lE3LIsOKo",
      },
      {
        name: "Pull Ups / Chins",
        tag: "POSTURAL PULL",
        green:  { sets: 2, reps: "8",    load: "BW+",     rest: "2 min" },
        amber:  { sets: 1, reps: "8",    load: "BW",      rest: "2 min" },
        red:    { sets: 1, reps: "8",    load: "Assist",  rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
      },
    ],
  },
  STABILITY_BLOCK,
];

// ── Workout B ─────────────────────────────────────────────────────────────────
const GYM_WORKOUT_B = [
  {
    label: "TRISET 1",
    subtitle: "Single-leg Strength → Power → Push",
    exercises: [
      {
        name: "Bulgarian Split Squat",
        tag: "LOWER",
        green:  { sets: 4, reps: "8ea",  load: "DB 75%",  rest: "No rest → B" },
        amber:  { sets: 3, reps: "8ea",  load: "DB 65%",  rest: "No rest → B" },
        red:    { sets: 2, reps: "8ea",  load: "BW",      rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=2C-uNgKwPLE",
      },
      {
        name: "Vertical Jump",
        tag: "POWER",
        green:  { sets: 4, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 3, reps: "3",    load: "Sub-max", rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      },
      {
        name: "Single Arm DB Shoulder Press",
        tag: "PUSH",
        green:  { sets: 4, reps: "8ea",  load: "70%",     rest: "2 min" },
        amber:  { sets: 3, reps: "8ea",  load: "60%",     rest: "2 min" },
        red:    { sets: 2, reps: "10ea", load: "50%",     rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=2yjwXTZQDDI",
      },
    ],
  },
  {
    label: "TRISET 2",
    subtitle: "Hinge → Deceleration → Core",
    exercises: [
      {
        name: "Romanian Deadlift",
        tag: "LOWER / HINGE",
        green:  { sets: 4, reps: "8",    load: "70%",     rest: "No rest → B" },
        amber:  { sets: 3, reps: "8",    load: "60%",     rest: "No rest → B" },
        red:    { sets: 2, reps: "8",    load: "50%",     rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=JCXUYuzwNrM",
      },
      {
        name: "Lateral Hurdle Hop + Stick",
        tag: "DECELERATION",
        green:  { sets: 4, reps: "5ea",  load: "BW",      rest: "No rest → C" },
        amber:  { sets: 3, reps: "4ea",  load: "BW",      rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=TDm0_UmG3Lk",
      },
      {
        name: "Band Pallof Press",
        tag: "CORE",
        green:  { sets: 4, reps: "12ea", load: "Band",    rest: "2 min" },
        amber:  { sets: 3, reps: "10ea", load: "Light",   rest: "2 min" },
        red:    { sets: 2, reps: "8ea",  load: "Light",   rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=AH_QZLm_0-s",
      },
    ],
  },
  {
    label: "TRISET 3",
    subtitle: "Full Body Power → Deceleration → Push",
    exercises: [
      {
        name: "Med Ball Rotational Slam",
        tag: "POWER",
        green:  { sets: 2, reps: "5ea",  load: "Heavy",   rest: "No rest → B" },
        amber:  { sets: 1, reps: "5ea",  load: "Mod",     rest: "No rest → B" },
        red:    { sets: 1, reps: "5ea",  load: "Light",   rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=9YO3ipPoDoA",
      },
      {
        name: "Broad Jump to Deceleration",
        tag: "DECELERATION",
        green:  { sets: 2, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 1, reps: "3",    load: "Sub-max", rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      },
      {
        name: "Archer Press Up",
        tag: "PUSH",
        green:  { sets: 2, reps: "8ea",  load: "BW",      rest: "2 min" },
        amber:  { sets: 1, reps: "6ea",  load: "BW",      rest: "2 min" },
        red:    { sets: 1, reps: "5ea",  load: "BW",      rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=dY3_cBPZeAg",
      },
    ],
  },
  STABILITY_BLOCK,
];

// ── Workout C ─────────────────────────────────────────────────────────────────
const GYM_WORKOUT_C = [
  {
    label: "TRISET 1",
    subtitle: "Lower Strength → Deceleration → Push",
    exercises: [
      {
        name: "Front Squat",
        tag: "LOWER",
        altName: "Leg Press",
        green:  { sets: 4, reps: "5",    load: "75%",     rest: "No rest → B" },
        amber:  { sets: 3, reps: "6",    load: "65%",     rest: "No rest → B" },
        red:    { sets: 2, reps: "8",    load: "55%",     rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=m4ytaCJZpl0",
      },
      {
        name: "Broad Jump to Deceleration",
        tag: "DECELERATION",
        green:  { sets: 4, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 3, reps: "3",    load: "Sub-max", rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      },
      {
        name: "Decline Press Up",
        tag: "PUSH",
        green:  { sets: 4, reps: "10",   load: "BW",      rest: "2 min" },
        amber:  { sets: 3, reps: "8",    load: "BW",      rest: "2 min" },
        red:    { sets: 2, reps: "8",    load: "BW",      rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=SKPab2YC8BE",
      },
    ],
  },
  {
    label: "TRISET 2",
    subtitle: "Posterior Chain → Deceleration → Core",
    exercises: [
      {
        name: "Barbell Hip Thrust",
        tag: "POSTERIOR CHAIN",
        green:  { sets: 4, reps: "8",    load: "75%",     rest: "No rest → B" },
        amber:  { sets: 3, reps: "8",    load: "65%",     rest: "No rest → B" },
        red:    { sets: 2, reps: "10",   load: "50%",     rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE",
      },
      {
        name: "Lateral Hurdle Hop + Stick",
        tag: "DECELERATION",
        green:  { sets: 4, reps: "5ea",  load: "BW",      rest: "No rest → C" },
        amber:  { sets: 3, reps: "4ea",  load: "BW",      rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=TDm0_UmG3Lk",
      },
      {
        name: "Ab Wheel Rollout",
        tag: "CORE",
        green:  { sets: 4, reps: "10",   load: "BW",      rest: "2 min" },
        amber:  { sets: 3, reps: "8",    load: "BW",      rest: "2 min" },
        red:    { sets: 2, reps: "6",    load: "BW",      rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=j4JWrz6gGm0",
      },
    ],
  },
  {
    label: "TRISET 3",
    subtitle: "Lower → Plyometric → Upper",
    exercises: [
      {
        name: "Goblet Squat",
        tag: "LOWER",
        green:  { sets: 2, reps: "10",   load: "DB",      rest: "No rest → B" },
        amber:  { sets: 2, reps: "10",   load: "DB",      rest: "No rest → B" },
        red:    { sets: 1, reps: "10",   load: "Light",   rest: "No rest → B" },
        youtube: "https://www.youtube.com/watch?v=MxsFDhcyFyE",
      },
      {
        name: "Box Jump",
        tag: "POWER",
        green:  { sets: 2, reps: "4",    load: "Max",     rest: "No rest → C" },
        amber:  { sets: 1, reps: "3",    load: "Mod",     rest: "No rest → C" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=52lE3LIsOKo",
      },
      {
        name: "Single Arm DB Shoulder Press",
        tag: "PUSH",
        green:  { sets: 2, reps: "8ea",  load: "70%",     rest: "2 min" },
        amber:  { sets: 1, reps: "8ea",  load: "60%",     rest: "2 min" },
        red:    { sets: 1, reps: "10ea", load: "50%",     rest: "90s"   },
        youtube: "https://www.youtube.com/watch?v=2yjwXTZQDDI",
      },
    ],
  },
  STABILITY_BLOCK,
];

// ── Helper: get workout for a given session day and week ──────────────────────
function getGymWorkout(session, week) {
  const idx  = Math.max(0, Math.min(11, (week || 1) - 1));
  const letter = session === "monday" ? MON_ROTATION[idx] : WED_ROTATION[idx];
  const base = letter === "A" ? GYM_WORKOUT_A : letter === "B" ? GYM_WORKOUT_B : GYM_WORKOUT_C;
  // Wednesday: append injury prevention block
  const blocks = session === "wednesday" ? [...base, INJURY_PREV_BLOCK] : [...base];
  // Monday: append finisher
  if (session === "monday") blocks.push(MON_FINISHERS[letter]);
  return { blocks, letter };
}

// Legacy aliases so existing rendering code still works
const MONDAY_TRISETS   = GYM_WORKOUT_A; // fallback — overridden by getGymWorkout
const WEDNESDAY_BLOCKS = GYM_WORKOUT_B; // fallback — overridden by getGymWorkout

const FRIDAY_BLOCKS = [
  {
    label: "CNS ACTIVATION",
    subtitle: "Power primer — low volume, max intent",
    exercises: [
      {
        name: "Vertical Jump",
        tag: "CNS",
        green:  { sets: 4, reps: "3",   load: "Max",      rest: "2 min" },
        amber:  { sets: 2, reps: "3",   load: "Sub-max",  rest: "2 min" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      },
      {
        name: "Broad Jump",
        tag: "CNS",
        green:  { sets: 3, reps: "3",   load: "Max",      rest: "90s" },
        amber:  { sets: 2, reps: "3",   load: "Sub-max",  rest: "90s" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      },
      {
        name: "Short Sprint 10–20m",
        tag: "CNS",
        green:  { sets: 4, reps: "2",   load: "95%",      rest: "2 min" },
        amber:  { sets: 2, reps: "2",   load: "80%",      rest: "2 min" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=5KZxVa2AFVQ",
      },
    ],
  },
  {
    label: "POTENTIATION COMPLEX",
    subtitle: "Green full · Amber optional",
    exercises: [
      {
        name: "Trap Bar Deadlift",
        tag: "POTENTIATION",
        green:  { sets: 2, reps: "3",   load: "85%",      rest: "→ Jump" },
        amber:  { sets: 1, reps: "4",   load: "75%",      rest: "→ Jump" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=SuB16OBI9WE",
      },
      {
        name: "Box Jump (post-lift)",
        tag: "POTENTIATION",
        green:  { sets: 2, reps: "3",   load: "Max",      rest: "3 min" },
        amber:  { sets: 1, reps: "3",   load: "Mod",      rest: "3 min" },
        red:    null,
        youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      },
    ],
  },
  {
    label: "MOBILITY & RECOVERY",
    subtitle: "All zones — finish feeling loose",
    exercises: [
      {
        name: "Hip 90/90 Stretch",
        tag: "MOBILITY",
        green:  { sets: 2, reps: "60s ea", load: "—",   rest: "—" },
        amber:  { sets: 2, reps: "60s ea", load: "—",   rest: "—" },
        red:    { sets: 3, reps: "60s ea", load: "—",   rest: "—" },
        youtube: "https://www.youtube.com/watch?v=qsHcqQntxOY",
      },
      {
        name: "Thoracic Rotation",
        tag: "MOBILITY",
        green:  { sets: 2, reps: "10ea",   load: "—",   rest: "—" },
        amber:  { sets: 2, reps: "10ea",   load: "—",   rest: "—" },
        red:    { sets: 2, reps: "10ea",   load: "—",   rest: "—" },
        youtube: "https://www.youtube.com/watch?v=xH-NN4EE9j0",
      },
      {
        name: "Foam Roll — Legs & Back",
        tag: "RECOVERY",
        green:  { sets: 1, reps: "5 min",  load: "—",   rest: "—" },
        amber:  { sets: 1, reps: "8 min",  load: "—",   rest: "—" },
        red:    { sets: 1, reps: "10 min", load: "—",   rest: "—" },
        youtube: "https://www.youtube.com/watch?v=eFEHbgZKR1E",
      },
    ],
  },
];

// ── Storage helpers ───────────────────────────────────────────────────────────
function loadState(key, fallback) {
  try {
    const v = localStorage.getItem("primed_" + key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}
function saveState(key, value) {
  try { localStorage.setItem("primed_" + key, JSON.stringify(value)); } catch {}
}

// ── UI Primitives ─────────────────────────────────────────────────────────────
const font = "'DM Sans', 'Segoe UI', sans-serif";
const mono = "'DM Mono', 'Courier New', monospace";

// ── PRIMED Brand Components ───────────────────────────────────────────────────
// P Gauge mark — the bowl of the P integrates a readiness arc,
// with a needle extending from the base of the bowl into the green zone.
// The P immediately reads as PRIMED. The gauge communicates readiness.
// accentColor drives the needle, green arc segment, and pivot dot.
// Font: Outfit — geometric, modern, clean. Works at all sizes.

function PGaugeMark({ size = 40, accentColor = "C.green", dark = true }) {
  const w = size * 0.82;
  const h = size;
  const textCol  = dark ? "#F1F5F9" : "#0A0F1E";
  const divCol   = dark ? "#080D1A" : "#F8FAFC";
  const needleCol = dark ? "#F1F5F9" : "#0A0F1E";
  // P drawn as a SINGLE continuous filled path — stem and bowl are one shape.
  // No join, no seam, no gap at the top-left corner.
  //
  // Path logic (viewBox 0 0 64 82):
  //   Start bottom-left of stem → up left edge → round top-left corner →
  //   across top → into bowl outer curve (CW semicircle) → back down
  //   inner bowl edge → across bottom of bowl back to stem → down stem
  //   right edge → round bottom-right corner → close.
  //
  // Bowl outer radius ~16.5, centre (17, 22).
  // Bowl inner radius ~10, same centre — creates the hollow.
  // Colour segments fill the hollow from centre (28,22).
  return (
    <svg width={w} height={h} viewBox="0 0 64 82" fill="none"
      xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0 }}>

      {/* ── Single unified P shape — no joins, no seams ───────────────────── */}
      <path d={`
        M 9 77
        Q 7 77 7 75
        L 7 7
        Q 7 5 9 5
        L 26 5
        Q 51 5 51 22
        Q 51 39 26 39
        L 17 39
        L 17 75
        Q 17 77 15 77
        Z
      `} fill={textCol} />

      {/* ── Bowl hollow — punched out of the P shape using same background ── */}
      {/* Inner bowl: centre ~(28,22), spans x:18–40, y:10–34             */}
      <path d={`
        M 18 10
        L 26 10
        Q 40 10 40 22
        Q 40 34 26 34
        L 18 34
        Z
      `} fill={dark ? "#080D1A" : "#F8FAFC"} />

      {/* ── Three colour segments — fill the hollow ──────────────────────── */}
      {/* Centre of hollow: (29, 22)                                        */}
      {/* GREEN — top (high score) */}
      <path d="M 29 22 L 19 11 Q 22 10 26 10 L 29 10 Q 36 10 39 15 Z"
        fill="C.green" />
      {/* AMBER — right/middle */}
      <path d="M 29 22 L 39 15 Q 40 18 40 22 Q 40 27 39 29 Z"
        fill="#F59E0B" opacity={0.95} />
      {/* RED — bottom (low score) */}
      <path d="M 29 22 L 39 29 Q 36 34 29 34 L 21 34 Q 18 34 18 32 L 18 11 Z"
        fill="#EF4444" opacity={0.9} />

      {/* ── Dividers ─────────────────────────────────────────────────────── */}
      <line x1="29" y1="22" x2="19" y2="11" stroke={divCol} strokeWidth={1.2} opacity={0.65}/>
      <line x1="29" y1="22" x2="39" y2="15" stroke={divCol} strokeWidth={1.2} opacity={0.65}/>
      <line x1="29" y1="22" x2="39" y2="29" stroke={divCol} strokeWidth={1.2} opacity={0.65}/>

      {/* ── Needle — from hollow centre pointing up into green ───────────── */}
      <line x1="29" y1="22" x2="33" y2="12"
        stroke={needleCol} strokeWidth={2.2} strokeLinecap="round" />
      <polygon points="33,12 28,16 37,16" fill={needleCol} />
      <circle cx="29" cy="22" r="2.8" fill={needleCol} />

    </svg>
  );
}

// Horizontal lockup — P gauge mark + PRIMED in Outfit + optional tagline
function PrimedLogo({ size = 60, showTagline = true, accentColor, sport = "FOOTBALL" }) {
  const ratio = 839 / 409;
  const h = size;
  const w = Math.round(h * ratio);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
      <img src={LOGO_MED} alt="PRIMED Training System"
        style={{ height:h, width:w, objectFit:"contain" }}/>
      {sport && (
        <div style={{
          fontSize: Math.max(10, Math.round(h * 0.14)),
          fontWeight: 900,
          color: "C.green",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: 6,
          textTransform: "uppercase",
          textAlign: "center",
        }}>
          {sport}
        </div>
      )}
    </div>
  );
}


function PrimedMark({ size = 24, accentColor }) {
  const ratio = 1404 / 741;
  const h = size;
  const w = Math.round(h * ratio);
  return (
    <img src={LOGO_SMALL} alt="PRIMED" style={{ height:h, width:w, objectFit:"contain" }}/>
  );
}


function Tag({ label, color = C.gold }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, letterSpacing: 1.2,
      color, background: color + "18",
      border: `1px solid ${color}33`,
      borderRadius: 4, padding: "2px 7px",
      fontFamily: mono,
    }}>{label}</span>
  );
}

function ScoreRing({ score, size = 120 }) {
  const zone  = getZone(score);
  const col   = zoneColor(zone);
  const r     = size * 0.38;
  const circ  = 2 * Math.PI * r;
  const dash  = (score / 100) * circ;
  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#CBD5E1" strokeWidth={size * 0.07} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={col} strokeWidth={size * 0.07}
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: "stroke-dasharray 0.8s ease, stroke 0.4s" }} />
      <text x={size/2} y={size/2 - 4} textAnchor="middle"
        fontSize={size * 0.28} fontWeight={900} fill={col} fontFamily={mono}>{score}</text>
      <text x={size/2} y={size/2 + size * 0.14} textAnchor="middle"
        fontSize={size * 0.08} fill={C.text} fontFamily={mono}>/100</text>
    </svg>
  );
}

// ── Metric Cards ──────────────────────────────────────────────────────────────
function ZzzCard({ value, onChange, labels }) {
  const sizes = [14, 19, 26, 34, 44];
  if (!labels) labels = ["Terrible", "Poor", "Okay", "Good", "Excellent"];
  return (
    <div style={{ background: C.card, borderRadius: 16, padding: "18px 16px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center", marginBottom: 12 }}>Sleep Quality</p>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: 64, gap: 4 }}>
        {sizes.map((sz, i) => {
          const step = i + 1;
          const sel  = value === step;
          const col  = "#6366F1";
          return (
            <button key={i} onClick={() => onChange(step)} style={{
              flex: 1, border: "none", background: "transparent",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end",
              cursor: "pointer", padding: "2px 0", borderRadius: 8,
              outline: sel ? `2px solid ${col}` : "2px solid transparent",
            }}>
              <div style={{
                width: sel ? sz + 10 : sz, height: sel ? sz + 10 : sz, borderRadius: "50%",
                background: value >= step ? col + "22" : col + "12",
                border: `2px solid ${value >= step ? col : col + "55"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all .2s",
                boxShadow: sel ? `0 0 12px ${col}55` : "none",
              }}>
                <span style={{
                  fontSize: Math.round((sel ? sz + 10 : sz) * 0.5),
                  color: value >= step ? col : "#A5B4FC",
                  fontWeight: 900, lineHeight: 1,
                  opacity: value >= step ? 1 : 0.65,
                }}>Z</span>
              </div>
            </button>
          );
        })}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 11, color: C.muted, textAlign: "center", fontFamily: mono }}>
        {value ? labels[value - 1] : "Tap to rate"}
      </p>
    </div>
  );
}

function BatteryCard({ value, onChange, label, labels }) {
  const col = value >= 4 ? C.green : value === 3 ? "#84CC16" : value === 2 ? C.amber : C.red;
  if (!labels) labels = ["Exhausted", "Very tired", "Getting tired", "Good energy", "Fully charged"];
  return (
    <div style={{ background: C.card, borderRadius: 16, padding: "18px 16px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center", marginBottom: 14 }}>{label}</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 12 }}>
        <div style={{ width: 96, height: 44, border: `2.5px solid ${C.border}`, borderRadius: 8, padding: "5px 6px", display: "flex", gap: 4, background: C.surface }}>
          {[1,2,3,4,5].map(bar => (
            <div key={bar} onClick={() => onChange(bar)} style={{
              flex: 1, height: "100%", borderRadius: 3, cursor: "pointer",
              background: bar <= value ? col : C.faint, transition: "background .2s",
            }} />
          ))}
        </div>
        <div style={{ width: 5, height: 18, background: C.muted, borderRadius: "0 3px 3px 0" }} />
      </div>
      <div style={{ display: "flex", gap: 3 }}>
        {[1,2,3,4,5].map(bar => (
          <button key={bar} onClick={() => onChange(bar)} style={{
            flex: 1, padding: "6px 0", border: "none", borderRadius: 8, cursor: "pointer",
            background: value === bar ? col + "22" : "transparent",
            outline: value === bar ? `2px solid ${col}` : "2px solid transparent",
            fontSize: 9, color: C.text, transition: "all .15s",
          }}>{bar}</button>
        ))}
      </div>
      <p style={{ margin: "8px 0 0", fontSize: 11, color: C.muted, textAlign: "center", fontFamily: mono }}>
        {value ? labels[value - 1] : "Tap to rate"}
      </p>
    </div>
  );
}

function getSoreSteps(t) {
  return [
    { value: 5, color: C.green,   face: "💪", label: t.sorenessNone     || "None",     desc: t.sorenessFresh      || "Feeling fresh" },
    { value: 4, color: "#84CC16", face: "🙂", label: t.sorenessMild     || "Mild",     desc: t.sorenessTight      || "Slight tightness" },
    { value: 3, color: C.amber,   face: "😐", label: t.sorenessModerate || "Moderate", desc: t.sorenessDiscomfort || "Some discomfort" },
    { value: 2, color: "#F97316", face: "😣", label: t.sorenessSore     || "Sore",     desc: t.sorenessAffects    || "Affects movement" },
    { value: 1, color: C.red,     face: "😖", label: t.sorenessSevere   || "Severe",   desc: t.sorenessLimiting   || "Limiting movement" },
  ];
}
const SORE_STEPS = getSoreSteps(EN);

function SorenessCard({ value, onChange, t: tp }) {
  const t = tp || EN;
  const steps = getSoreSteps(t);
  const sel = steps.find(s => s.value === value);
  return (
    <div style={{ background: C.card, borderRadius: 16, padding: "18px 16px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center", marginBottom: 12 }}>{t.soreness || "Muscle Soreness"}</p>
      <div style={{ display: "flex", gap: 6 }}>
        {[...steps].reverse().map(s => (
          <button key={s.value} onClick={() => onChange(s.value)} style={{
            flex: 1, border: `2px solid ${value === s.value ? s.color : C.border}`,
            borderRadius: 12, padding: "10px 3px", cursor: "pointer",
            background: value === s.value ? s.color + "22" : C.surface,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            boxShadow: value === s.value ? `0 0 12px ${s.color}33` : "none",
          }}>
            <span style={{ fontSize: 22 }}>{s.face}</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: value === s.value ? s.color : C.muted }}>{s.label}</span>
          </button>
        ))}
      </div>
      {sel && (
        <div style={{ marginTop: 10, background: sel.color + "15", border: `1px solid ${sel.color}33`, borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
          <span style={{ fontSize: 11, color: sel.color, fontWeight: 600 }}>{sel.desc}</span>
        </div>
      )}
    </div>
  );
}

const FIRE_SIZES = [18, 24, 32, 42, 54];
function FireCard({ value, onChange, label, labels }) {
  if (!labels) labels = ["No drive", "Low", "Average", "Motivated", "Fired up 🔥"];
  return (
    <div style={{ background: C.card, borderRadius: 16, padding: "18px 16px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center", marginBottom: 12 }}>{label}</p>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: 70, gap: 4 }}>
        {FIRE_SIZES.map((sz, i) => {
          const step = i + 1;
          return (
            <button key={i} onClick={() => onChange(step)} style={{
              flex: 1, border: "none", background: "transparent",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end",
              cursor: "pointer", padding: "4px 0", borderRadius: 8,
              outline: value === step ? `2px solid ${C.amber}` : "2px solid transparent",
            }}>
              <span style={{ fontSize: sz, opacity: value >= step ? 1 : 0.25, lineHeight: 1 }}>🔥</span>
            </button>
          );
        })}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 11, color: C.muted, textAlign: "center", fontFamily: mono }}>
        {value ? labels[value - 1] : "Tap to rate"}
      </p>
    </div>
  );
}

function getMoodSteps(t) {
  return [
    { emoji: "😞", bg: "#1E40AF", label: t.moodVeryLow  || "Very low" },
    { emoji: "😤", bg: "#DC2626", label: t.moodStressed || "Stressed" },
    { emoji: "😐", bg: C.muted,   label: t.moodOkay     || "Okay" },
    { emoji: "🙂", bg: "#15803D", label: t.moodContent  || "Content" },
    { emoji: "😁", bg: "#CA8A04", label: t.moodGreat    || "Great" },
  ];
}
const MOOD_STEPS = getMoodSteps(EN);
function MoodCard({ value, onChange, t: tp }) {
  const t = tp || EN;
  const moodSteps = getMoodSteps(t);
  return (
    <div style={{ background: C.card, borderRadius: 16, padding: "18px 16px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center", marginBottom: 14 }}>{t.mood || "Mood"}</p>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
        {moodSteps.map((m, i) => {
          const step = i + 1;
          const sel  = value === step;
          return (
            <button key={i} onClick={() => onChange(step)} style={{
              flex: 1, border: "none", borderRadius: 12, padding: "8px 2px",
              background: sel ? m.bg + "22" : "transparent",
              outline: sel ? `2px solid ${m.bg}` : "2px solid transparent",
              cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            }}>
              <div style={{
                width: sel ? 40 : 32, height: sel ? 40 : 32, borderRadius: "50%",
                background: sel ? m.bg : m.bg + "44",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: sel ? 24 : 18, transition: "all .15s",
              }}>{m.emoji}</div>
              <span style={{ fontSize: 8, color: sel ? C.text : C.muted, fontWeight: sel ? 700 : 400 }}>{m.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function HydrationCard({ value, onChange, t: tp }) {
  const t = tp || EN;
  return (
    <div style={{ background: C.card, borderRadius: 16, padding: "18px 16px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center", marginBottom: 12 }}>
        💧 {t.hydrationHint || "Hydration — match urine colour"}
      </p>
      <div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
        {HYDRATION_COLORS.map((col, i) => (
          <div key={i} onClick={() => onChange(i)} style={{
            flex: 1, height: 28, borderRadius: 6, background: col, cursor: "pointer",
            border: value === i ? `3px solid ${C.text}` : `2px solid transparent`,
            boxShadow: value === i ? `0 0 10px ${col}88` : "none",
            transition: "all .15s",
          }} />
        ))}
      </div>
      {value !== null && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: C.surface, borderRadius: 10, padding: "10px 14px" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: HYDRATION_COLORS[value], border: `2px solid ${C.border}` }} />
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: C.text }}>{HYDRATION_LABELS[value]}</p>
            <p style={{ margin: 0, fontSize: 11, color: C.muted }}>{HYDRATION_LABELS[value] || ""}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Wellness Check-in Screen ──────────────────────────────────────────────────

// ── Wellness Advice Screen ────────────────────────────────────────────────────
// Shown after 2s score display. Only surfaces advice for metrics that need it.
// Science-based, plain language. Green metrics get a brief positive note.

const WELLNESS_ADVICE = {

  sleep: {
    icon: "😴",
    label: "Sleep",
    good: {
      heading: "Sleep is strong",
      body: "Quality sleep drives recovery, hormone regulation and cognitive performance. You're doing the most important thing right.",
    },
    advice: [
      {
        threshold: 2, // score ≤ 2 = poor
        heading: "Poor sleep detected",
        points: [
          { icon: "📱", text: "Avoid screens for at least 30 minutes before bed. Blue light suppresses melatonin by up to 50%, delaying sleep onset by 1–2 hours." },
          { icon: "🌡️", text: "Keep your room cool — 16–19°C is the optimal sleep temperature. Core body temperature needs to drop to initiate deep sleep." },
          { icon: "⏰", text: "Set a consistent sleep and wake time, even on weekends. The circadian rhythm operates on a 24-hour clock and thrives on regularity." },
          { icon: "☕", text: "Avoid caffeine after 2pm. Caffeine has a half-life of 5–7 hours — a 3pm coffee means half the caffeine is still in your system at 9pm." },
          { icon: "🏋️", text: "Avoid intense training within 2–3 hours of bed. Core temperature and cortisol elevation from exercise can delay sleep onset significantly." },
        ],
      },
      {
        threshold: 3,
        heading: "Sleep could be better",
        points: [
          { icon: "📱", text: "Cut screens 20–30 minutes before bed. Even dim screen light delays melatonin release and reduces REM sleep quality." },
          { icon: "🌙", text: "Wind-down routine matters. 10 minutes of reading, light stretching or breathing signals the nervous system to shift from sympathetic to parasympathetic." },
          { icon: "☕", text: "Check your caffeine timing. Anything after midday may be disrupting your sleep architecture even if you feel like it doesn't affect you." },
        ],
      },
    ],
  },

  fatigue: {
    icon: "🔋",
    label: "Energy",
    good: {
      heading: "Energy levels good",
      body: "Low fatigue is a sign your recovery is working. Your sleep, nutrition and training load are in balance.",
    },
    advice: [
      {
        threshold: 2,
        heading: "High fatigue",
        points: [
          { icon: "🍽️", text: "Prioritise carbohydrates before training. Muscle glycogen is the primary fuel for high-intensity work. 1–4g of carbohydrate per kg of body weight 1–4 hours before training." },
          { icon: "😴", text: "A 20-minute nap before 3pm can restore alertness and reduce perceived exertion during training. Beyond 30 minutes risks sleep inertia." },
          { icon: "💧", text: "Even mild dehydration (1–2% body weight) causes a measurable increase in perceived fatigue and reduces endurance performance." },
          { icon: "📉", text: "Reduce session intensity today. Pushing through high fatigue elevates cortisol and suppresses testosterone — the opposite of what training should achieve." },
          { icon: "🔁", text: "Chronic fatigue over multiple days is a signal of accumulated training load. Consider whether your weekly volume needs adjusting." },
        ],
      },
      {
        threshold: 3,
        heading: "Moderate fatigue",
        points: [
          { icon: "🍌", text: "Eat within 30–60 minutes of waking — a carbohydrate and protein meal fuels your first training session and blunts cortisol spikes." },
          { icon: "💧", text: "Check your hydration. Fatigue is one of the first signs of dehydration. Start with 500ml of water on waking." },
          { icon: "🏋️", text: "Warm up thoroughly — 8–10 minutes of progressive movement raises core temperature and significantly reduces perceived exertion during the session." },
        ],
      },
    ],
  },

  soreness: {
    icon: "💪",
    label: "Soreness",
    good: {
      heading: "Muscles feeling good",
      body: "Low soreness means your body is adapting well. Tissue repair from previous sessions is complete — you're ready to load.",
    },
    advice: [
      {
        threshold: 2,
        heading: "Significant soreness",
        points: [
          { icon: "🌡️", text: "Apply heat to sore muscles before training to increase blood flow and tissue extensibility. Apply cold (ice) after training to manage inflammation." },
          { icon: "🧘", text: "10 minutes of light mobility work before training reduces injury risk significantly when soreness is high. Don't skip the warm-up." },
          { icon: "🚶", text: "Light movement (walking, easy cycling) accelerates recovery by promoting blood flow without adding mechanical stress to already damaged tissue." },
          { icon: "🥩", text: "20–40g of protein every 3–4 hours maximises muscle protein synthesis. Leucine-rich sources — meat, eggs, dairy — drive the process most effectively." },
          { icon: "⚠️", text: "Sharp, localised or joint pain is not normal soreness. If pain is one-sided, worsening or affecting your movement pattern, speak to a physiotherapist." },
        ],
      },
      {
        threshold: 3,
        heading: "Mild soreness",
        points: [
          { icon: "🔥", text: "Warm up progressively for at least 8–10 minutes. Soreness reduces significantly once tissue temperature increases and blood flow improves." },
          { icon: "🧘", text: "Include 2–3 minutes of dynamic mobility specific to the muscles affected before loading them." },
          { icon: "🥩", text: "Ensure adequate protein intake — aim for at least 1.6–2.2g per kg of body weight per day to support muscle repair." },
        ],
      },
    ],
  },

  motivation: {
    icon: "🔥",
    label: "Motivation",
    good: {
      heading: "Drive is high",
      body: "High motivation correlates with better training adherence, higher RPE tolerance and improved performance outcomes. Channel it.",
    },
    advice: [
      {
        threshold: 2,
        heading: "Low motivation",
        points: [
          { icon: "🎯", text: "Set a single, specific goal for today's session — not the whole programme. Research shows process goals (e.g. 'hit all 4 sets') outperform outcome goals when motivation is low." },
          { icon: "⏱️", text: "Commit to just 10 minutes. Starting is the hardest part — once the body is warm, motivation typically increases through dopamine and endorphin release." },
          { icon: "🎵", text: "Music with a tempo of 120–140 BPM has been shown to increase work output and reduce perceived exertion by 10–15% during moderate-intensity exercise." },
          { icon: "🧠", text: "Low motivation is often a symptom of inadequate recovery, not a mental failing. Check your sleep and fatigue scores — the cause is usually physical." },
          { icon: "📅", text: "Consistency beats intensity. A reduced session today maintains the habit and keeps training momentum — missing altogether breaks the chain." },
        ],
      },
      {
        threshold: 3,
        heading: "Motivation a little low",
        points: [
          { icon: "🎯", text: "Pick one thing to focus on today. A focused session with a clear purpose almost always outperforms a scattered one." },
          { icon: "⏱️", text: "Get started — motivation follows action, not the other way around. The first 5 minutes are the hardest." },
        ],
      },
    ],
  },

  mood: {
    icon: "🧠",
    label: "Mood",
    good: {
      heading: "Mood is good",
      body: "Positive mood is associated with better decision-making, faster reaction time and greater pain tolerance during training. Good sign.",
    },
    advice: [
      {
        threshold: 2,
        heading: "Low mood today",
        points: [
          { icon: "🌤️", text: "Even 10–20 minutes of outdoor exercise significantly elevates mood through increased serotonin and reduced cortisol. Natural light exposure compounds the effect." },
          { icon: "🏋️", text: "Physical exercise is one of the most evidence-based interventions for mood regulation. A session today — even a short one — is likely to help." },
          { icon: "😴", text: "Poor mood is strongly linked to sleep quality. If you slept badly, prioritise sleep tonight — one good night makes a measurable difference." },
          { icon: "🤝", text: "Social connection during training improves mood outcomes. If possible, train with a teammate or join a group session rather than training alone." },
          { icon: "🧘", text: "5 minutes of slow, diaphragmatic breathing (4s in, hold 4s, 6s out) activates the parasympathetic nervous system and measurably reduces stress hormones." },
        ],
      },
      {
        threshold: 3,
        heading: "Mood slightly low",
        points: [
          { icon: "🌤️", text: "Get outside if you can — even 5 minutes of natural light improves serotonin and helps reset your mood." },
          { icon: "🏋️", text: "Training is likely to help. Endorphin and endocannabinoid release during exercise reliably improves mood within 20–30 minutes of starting." },
        ],
      },
    ],
  },

  hydration: {
    icon: "💧",
    label: "Hydration",
    good: {
      heading: "Well hydrated",
      body: "Good hydration status means your plasma volume, thermoregulation and cognitive function are all optimised. Keep it up throughout the day.",
    },
    advice: [
      {
        threshold: 2, // 0–2 = dehydrated
        heading: "Significant dehydration",
        points: [
          { icon: "🥤", text: "Drink 500ml of water immediately. Then aim for 1.5–2L over the next 3–4 hours before adding electrolytes." },
          { icon: "⚡", text: "Add electrolytes — specifically sodium. Drinking plain water when severely dehydrated without sodium can dilute plasma concentration and impair rehydration." },
          { icon: "📉", text: "A 2% loss in body weight from dehydration reduces endurance performance by up to 20% and significantly increases perceived exertion." },
          { icon: "🏋️", text: "Avoid high-intensity training until you have rehydrated meaningfully. Dehydration elevates heart rate at any given workload and increases injury risk." },
          { icon: "🌡️", text: "In hot conditions, sweat rate can exceed 1–2L per hour. Weigh yourself before and after training — 1kg of weight lost ≈ 1L of fluid to replace." },
        ],
      },
      {
        threshold: 4, // 3–4 = could be better
        heading: "Could drink more",
        points: [
          { icon: "🥤", text: "Aim for 2–3L of fluid across the day. Start with a large glass of water now — even mild dehydration (1%) reduces focus and increases fatigue perception." },
          { icon: "⏰", text: "Drink consistently throughout the day rather than in large amounts infrequently. The kidneys can only absorb around 800ml–1L per hour." },
          { icon: "🍎", text: "Fruit and vegetables contribute significantly to hydration — foods like cucumber, watermelon and oranges are up to 90% water." },
        ],
      },
    ],
  },
};

// Build advice items from today's log
function buildAdviceItems(log) {
  const { vals, hydration, score } = log;
  const items = [];

  // Map each metric to its score (all on 1–5 scale)
  const metrics = [
    { key: "sleep",      val: vals.sleep,      max: 5 },
    { key: "fatigue",    val: vals.fatigue,    max: 5 },
    { key: "soreness",   val: vals.soreness,   max: 5 },
    { key: "motivation", val: vals.motivation, max: 5 },
    { key: "mood",       val: vals.mood,       max: 5 },
    { key: "hydration",  val: hydration,       max: 5 },
  ];

  for (const { key, val } of metrics) {
    const def = WELLNESS_ADVICE[key];
    if (!def) continue;

    // Find matching advice tier (worst threshold first)
    const tier = def.advice
      .slice()
      .sort((a, b) => a.threshold - b.threshold)
      .find(t => val !== null && val <= (t&&(t&&t.threshold)||"")||"threshold");

    if (tier) {
      items.push({ key, icon: def.icon, label: def.label, tier, val, needsWork: true });
    } else {
      // Score is good — include a brief positive note
      items.push({ key, icon: def.icon, label: def.label, good: def.good, val, needsWork: false });
    }
  }

  return items;
}

// ── WellnessAdviceScreen component ───────────────────────────────────────────
function WellnessAdviceScreen({ log, onContinue }) {
  const [activeIdx, setActiveIdx] = useState(
    // Default to first metric that needs work
    () => {
      const items = buildAdviceItems(log);
      const firstBad = items.findIndex(i => i.needsWork);
      return firstBad >= 0 ? firstBad : 0;
    }
  );

  const items      = buildAdviceItems(log);
  const { score, zone } = log;
  const col        = zoneColor(zone);
  const active     = items[activeIdx];
  const badCount   = items.filter(i => i.needsWork).length;

  // Colour per metric value (1–5)
  function metricColor(val, max) {
    const pct = val / max;
    if (pct >= 0.8) return C.green;
    if (pct >= 0.6) return C.amber;
    return C.red;
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font, display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: "12px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <PrimedMark size={26} accentColor={col} />
          <ScoreRing score={score} size={44} />
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: col, fontFamily: mono, letterSpacing: 2 }}>
              {zoneLabel(zone)}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
              {badCount === 0 ? "All metrics looking good" : `${badCount} area${badCount > 1 ? "s" : ""} to focus on`}
            </div>
          </div>
        </div>
        <button onClick={onContinue} style={{
          background: col, border: "none", borderRadius: 10,
          padding: "8px 16px", color: "#fff", fontSize: 12,
          fontWeight: 700, cursor: "pointer",
        }}>
          Let's go →
        </button>
      </div>

      {/* Metric tab strip */}
      <div style={{
        display: "flex", overflowX: "auto", gap: 0,
        borderBottom: `1px solid ${C.border}`,
        background: C.surface,
      }}>
        {items.map((item, i) => {
          const mc  = metricColor(item.val, 5);
          const sel = activeIdx === i;
          return (
            <button key={item.key} onClick={() => setActiveIdx(i)} style={{
              flexShrink: 0, padding: "10px 12px", border: "none",
              borderBottom: `2.5px solid ${sel ? mc : "transparent"}`,
              background: "transparent", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              opacity: sel ? 1 : 0.6, transition: "all .15s",
            }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span style={{ fontSize: 8, fontWeight: 700, fontFamily: mono, color: sel ? mc : C.muted }}>
                {item.label.toUpperCase()}
              </span>
              {/* Score pip */}
              <div style={{
                width: 24, height: 4, borderRadius: 2,
                background: mc + "33",
                overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", width: `${(item.val / 5) * 100}%`,
                  background: mc, borderRadius: 2,
                }} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active metric advice */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px 100px" }}>

        {active.needsWork ? (
          <>
            {/* Heading */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                background: C.red + "18", border: `2px solid ${C.red}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>{active.icon}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{active.tier.heading}</div>
                <div style={{ fontSize: 11, color: C.muted }}>
                  Score {active.val}/5 · Tap each point to read
                </div>
              </div>
            </div>

            {/* Advice points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {active.tier.points.map((pt, pi) => (
                <div key={pi} style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12, padding: "14px 16px",
                  display: "flex", gap: 12, alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>{pt.icon}</span>
                  <p style={{ margin: 0, fontSize: 13, color: C.text, lineHeight: 1.7 }}>
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Science note */}
            <div style={{
              marginTop: 14, background: "#1E3A5F",
              border: "1px solid #3B82F633", borderRadius: 10,
              padding: "10px 14px",
            }}>
              <p style={{ margin: 0, fontSize: 11, color: "#93C5FD", lineHeight: 1.6 }}>
                🔬 All advice is based on peer-reviewed sports science research. If issues persist across multiple days, consult a sports medicine professional.
              </p>
            </div>
          </>
        ) : (
          /* Good metric — brief positive */
          <div style={{
            background: C.card, border: `1.5px solid ${C.green}44`,
            borderRadius: 14, padding: "24px 20px", textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{active.icon}</div>
            <h3 style={{ margin: "0 0 8px", color: C.green, fontSize: 18 }}>
              {active.good.heading}
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
              {active.good.body}
            </p>
          </div>
        )}

        {/* Navigation between metrics */}
        <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
          {activeIdx > 0 && (
            <button onClick={() => setActiveIdx(i => i - 1)} style={{
              padding: "12px 18px", background: C.card,
              border: `1px solid ${C.border}`, borderRadius: 12,
              color: C.muted, fontSize: 13, cursor: "pointer",
            }}>← Back</button>
          )}
          {activeIdx < items.length - 1 ? (
            <button onClick={() => setActiveIdx(i => i + 1)} style={{
              flex: 1, padding: "13px 0",
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 12, color: C.text, fontSize: 13,
              fontWeight: 600, cursor: "pointer",
            }}>
              Next: {items[activeIdx + 1].icon} {items[activeIdx + 1].label} →
            </button>
          ) : (
            <button onClick={onContinue} style={{
              flex: 1, padding: "13px 0",
              background: col, border: "none",
              borderRadius: 12, color: "#fff",
              fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>
              Let's go → {zoneLabel(zone)}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function WellnessScreen({ user, onSubmit, langCode, onLangChange, t: tProp }) {
  const { t: tLang } = useTranslation(langCode) || {};
  const t = tProp || tLang || {};
  // Always start fresh — re-check resets everything
  const [step, setStep]       = useState(0);
  const [vals, setVals]       = useState({ sleep: 0, fatigue: 0, soreness: 0, motivation: 0, mood: 0 });
  const [hydration, setHydration] = useState(null);
  const [bodyWeight, setBodyWeight] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAdvice, setShowAdvice] = useState(false);
  const [savedLog,  setSavedLog]   = useState(null);

  // Live score — includes hydration as soon as it's selected (null treated as 0)
  const allFiveSet = vals.sleep && vals.fatigue && vals.soreness && vals.motivation && vals.mood;
  const score = allFiveSet
    ? calcScore({ ...vals, hydration: hydration !== null ? hydration : 0 })
    : 0;
  const zone  = getZone(score);
  const col   = zoneColor(zone);

  const STEPS = ["weight", "sleep", "fatigue", "soreness", "motivation", "mood", "hydration"];
  const totalSteps = STEPS.length;
  const pct = ((step) / (totalSteps - 1)) * 100;

  function setVal(key, v) { setVals(p => ({ ...p, [key]: v })); }

  function canAdvance() {
    const s = STEPS[step];
    if (s === "weight")    return bodyWeight !== "";
    if (s === "sleep")     return vals.sleep > 0;
    if (s === "fatigue")   return vals.fatigue > 0;
    if (s === "soreness")  return vals.soreness > 0;
    if (s === "motivation")return vals.motivation > 0;
    if (s === "mood")      return vals.mood > 0;
    if (s === "hydration") return hydration !== null;
    return true;
  }


  function submit(updatedVals, updatedHydration) {
    const currentVals = updatedVals || vals;
    const currentHydration = updatedHydration !== undefined ? updatedHydration : hydration;
    setSubmitted(true);
    const today      = new Date().toISOString().split("T")[0];
    const finalScore = calcScore({ ...currentVals, hydration: currentHydration !== null ? currentHydration : 0 });
    const finalZone  = getZone(finalScore);
    const log        = { date: today, score: finalScore, zone: finalZone, vals: currentVals, hydration: currentHydration, bodyWeight };
    const history    = loadState("history", []);
    saveState("history", [log, ...history.filter(h => h.date !== today)].slice(0, 90));
    setSavedLog(log);
    if (finalScore < 80) {
      // Show advice screen after 2s
      setTimeout(() => setShowAdvice(true), 2000);
    } else {
      // Green score — auto-continue to app after 2.5s
      setTimeout(() => onSubmit(log), 2500);
    }
  }

  const hour = new Date().getHours();
  const greeting = hour < 12 ? (t.greetingMorning || "Good morning") : hour < 17 ? (t.greetingAfternoon || "Good afternoon") : (t.greetingEvening || "Good evening");

  if (submitted && savedLog) {
    const { score: finalScore, zone: finalZone } = savedLog;
    const finalCol = zoneColor(finalZone);

    // ── Advice screen ─────────────────────────────────────────────────────────
    if (showAdvice) {
      return <WellnessAdviceScreen log={savedLog} onContinue={() => onSubmit(savedLog)} />;
    }

    // ── 2-second score display ────────────────────────────────────────────────
    return (
      <div style={{
        minHeight: "100vh", background: C.bg, fontFamily: font,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 32,
      }}>
        <div style={{ marginBottom: 20 }}>
          <PrimedLogo size={60} accentColor={finalCol} />
        </div>
        <div style={{ animation: "scoreIn .5s ease-out" }}>
          <ScoreRing score={finalScore} size={180} />
        </div>
        <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: finalCol, letterSpacing: 3, fontFamily: mono }}>
          {zoneLabel(finalZone)}
        </div>
        <h2 style={{ color: C.text, marginTop: 12, marginBottom: 6, fontSize: 22 }}>Logged ✓</h2>
        <p style={{ color: C.muted, fontSize: 13 }}>{savedLog?.score >= 80 ? "Let's go…" : "Preparing your advice…"}</p>
        <style>{`@keyframes scoreIn { from { opacity:0; transform:scale(.7) } to { opacity:1; transform:scale(1) } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font, display: "flex", flexDirection: "column" }}>
      {/* Progress */}
      <div style={{ height: 3, background: C.border }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, #6366F1, ${C.green})`, transition: "width .35s ease" }} />
      </div>

      {/* Header */}
      <div style={{ padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ position: "absolute", top: 12, right: 20 }}><LanguageSelector currentLang={langCode} onSelect={onLangChange} /></div>
        <div>
          {step === 0
            ? <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <PrimedMark size={28} />
                <h2 style={{ margin: 0, color: C.text, fontSize: 20 }}>{greeting}, {user.name} 👋</h2>
              </div>
            : <h2 style={{ margin: 0, color: C.text, fontSize: 18 }}>{{ weight: t.bodyWeight, sleep: t.sleep, fatigue: t.fatigue, soreness: t.soreness, motivation: t.motivation, mood: t.mood, hydration: t.hydration }[STEPS[step]] || STEPS[step]}</h2>
          }
          <p style={{ margin: "4px 0 0", fontSize: 10, color: C.muted, fontFamily: mono }}>{step + 1} / {totalSteps}</p>
        </div>
        {score > 0 && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: col, fontFamily: mono, lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: 9, color: C.muted, fontFamily: mono }}>{t.readiness || "readiness"}</div>
          </div>
        )}
      </div>

      {/* Cards */}
      <div style={{ flex: 1, padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
        {STEPS[step] === "weight" && (
          <div style={{ background: C.card, borderRadius: 16, padding: 20 }}>
            <p style={{ margin: "0 0 16px", fontWeight: 700, fontSize: 13, color: C.text, textAlign: "center" }}>Today's body weight</p>
            <input type="number" step="0.1" placeholder="e.g. 90.0"
              value={bodyWeight} onChange={e => setBodyWeight(e.target.value)}
              style={{
                width: "100%", background: C.surface, border: `1.5px solid ${bodyWeight ? col : C.border}`,
                borderRadius: 12, padding: "16px", color: C.text, fontSize: 32,
                fontFamily: mono, fontWeight: 700, textAlign: "center", boxSizing: "border-box",
                outline: "none", transition: "border .2s",
              }} />
            <p style={{ margin: "8px 0 0", fontSize: 11, color: C.muted, textAlign: "center" }}>kg</p>
            {bodyWeight && user.targetWeight && (() => {
              const diff = parseFloat(bodyWeight) - user.targetWeight;
              const pctDiff = (diff / user.targetWeight) * 100;
              const inZone = Math.abs(pctDiff) <= 1;
              return (
                <div style={{ marginTop: 12, background: (inZone ? C.green : C.red) + "15", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: inZone ? C.green : C.red, fontFamily: mono }}>
                    {diff >= 0 ? "+" : ""}{diff.toFixed(1)} kg vs target ({diff >= 0 ? "+" : ""}{pctDiff.toFixed(1)}%)
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: C.muted }}>Target: {user.targetWeight} kg · ±1% zone: {(user.targetWeight * 0.99).toFixed(1)}–{(user.targetWeight * 1.01).toFixed(1)} kg</p>
                </div>
              );
            })()}
          </div>
        )}
        {STEPS[step] === "sleep"      && <ZzzCard    value={vals.sleep}      onChange={v => { setVal("sleep", v); setTimeout(() => setStep(s => s+1), 400); }}      labels={t.sleepLabels || EN.sleepLabels} />}
        {STEPS[step] === "fatigue"    && <BatteryCard value={vals.fatigue}    onChange={v => { setVal("fatigue", v); setTimeout(() => setStep(s => s+1), 400); }}    label={t.fatigue || "Energy / Fatigue"} labels={t.fatigueLabels || EN.fatigueLabels} />}
        {STEPS[step] === "soreness"   && <SorenessCard value={vals.soreness}  onChange={v => { setVal("soreness", v); setTimeout(() => setStep(s => s+1), 400); }} t={t} />}
        {STEPS[step] === "motivation" && <FireCard   value={vals.motivation}  onChange={v => { setVal("motivation", v); setTimeout(() => setStep(s => s+1), 400); }} label={t.motivation || "Motivation"} labels={t.motivationLabels || EN.motivationLabels} />}
        {STEPS[step] === "mood"       && <MoodCard   value={vals.mood}        onChange={v => { setVal("mood", v); setTimeout(() => setStep(s => s+1), 400); }} t={t} />}
        {STEPS[step] === "hydration"  && <HydrationCard value={hydration}     onChange={v=>{setHydration(v);setTimeout(()=>submit(null,v),500);}} t={t} />}

        {/* Nav - Back always, Next only for weight step, Submit for hydration */}
        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} style={{
              padding: "14px 20px", background: C.card, border: `1.5px solid ${C.border}`,
              borderRadius: 12, color: C.muted, fontSize: 16, cursor: "pointer",
            }}>← Back</button>
          )}
          {STEPS[step] === "weight" && (
            <button onClick={() => { if(canAdvance()) setStep(s => s+1); }} disabled={!canAdvance()} style={{
              flex: 1, padding: "15px 0",
              background: canAdvance() ? C.green : C.card,
              border: `1.5px solid ${canAdvance() ? C.green : C.border}`,
              borderRadius: 12, color: canAdvance() ? "#fff" : C.muted,
              fontSize: 15, fontWeight: 700, cursor: canAdvance() ? "pointer" : "default",
            }}>Next →</button>
          )}
          {STEPS[step] === "hydration" && hydration !== null && (
            <button onClick={() => submit()} style={{
              flex: 1, padding: "15px 0", background: C.green,
              border: `1.5px solid ${C.green}`, borderRadius: 12,
              color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>Submit ✓</button>
          )}
        </div>
      </div>
    </div>
  );
}


// ── Warm-Up Library ───────────────────────────────────────────────────────────
// Each session type has a pool of warm-up protocols.
// Week number selects the warm-up: index = (week - 1) % pool.length
// Each warm-up has steps with: name, duration, type, instruction, equipment

// Types: "cardio" | "mobility" | "activation" | "circuit" | "dynamic"
// Equipment: "none" | "bike" | "rower" | "bands" | "db" | "barbell" | "foam_roller" | "bar"

// ── COLOUR PER STEP TYPE ──────────────────────────────────────────────────────
const WARMUP_TYPE_COLOR = {
  cardio:     "#3B82F6",
  mobility:   "#A78BFA",
  activation: "C.green",
  circuit:    "#F59E0B",
  dynamic:    "#EC4899",
};

const WARMUP_TYPE_ICON = {
  cardio:     "🏃",
  mobility:   "🧘",
  activation: "💥",
  circuit:    "🔄",
  dynamic:    "⚡",
};

// ── DAY 1 WARM-UPS (Tri-Set — upper/lower focus) ──────────────────────────────
const WARMUP_DAY1 = [
  {
    id: "d1_w1",
    title: "Jog + Activation Circuit",
    totalMins: 10,
    equipment: ["none"],
    steps: [
      { name: "Easy jog",               duration: "4 min",  type: "cardio",     instruction: "Relaxed pace, arms loose. Focus on breathing." },
      { name: "Hip circles",            duration: "30s ea", type: "mobility",   instruction: "Stand on one leg, large slow circles. 10 each direction, each side." },
      { name: "Glute bridge holds",     duration: "30s x3", type: "activation", instruction: "Feet flat, drive hips up, squeeze glutes. 30s hold each." },
      { name: "Band pull-aparts",       duration: "3×15",   type: "activation", instruction: "Arms straight out, pull band apart to chest. Retract shoulder blades." },
      { name: "Bodyweight squats",      duration: "2×10",   type: "dynamic",    instruction: "Slow descent 3s, pause at bottom, drive up. Focus on depth." },
      { name: "Arm circles + shrugs",   duration: "60s",    type: "dynamic",    instruction: "Forward 10, backward 10, then 10 shrugs. Loosen the shoulders." },
    ],
  },
  {
    id: "d1_w2",
    title: "Bike Erg + Rotator Cuff Circuit",
    totalMins: 12,
    equipment: ["bike"],
    steps: [
      { name: "Bike erg — easy",        duration: "5 min",  type: "cardio",     instruction: "RPE 3–4. Spin legs out, no resistance. Raise HR gradually." },
      { name: "DB external rotation",   duration: "3×12 ea",type: "activation", instruction: "Elbow at side, rotate forearm out. Light DB (2–4kg). Slow and controlled." },
      { name: "DB Y-raise",             duration: "3×10",   type: "activation", instruction: "Hinge forward, raise DBs in Y shape. Thumbs up. Squeezes rear delt." },
      { name: "Band face pulls",        duration: "3×15",   type: "activation", instruction: "Pull to nose height, elbows high. Pause at the end of each rep." },
      { name: "Thoracic rotations",     duration: "90s",    type: "mobility",   instruction: "Seated or on all-fours. Thread needle each side — 10 reps each." },
    ],
  },
  {
    id: "d1_w3",
    title: "Rower + Hip & Shoulder Prep",
    totalMins: 11,
    equipment: ["rower"],
    steps: [
      { name: "Row — easy",             duration: "4 min",  type: "cardio",     instruction: "Damper 4–5. Easy pace, focus on leg drive and body position." },
      { name: "World's greatest stretch","duration": "90s", type: "mobility",   instruction: "Lunge position, rotate elbow to ground, then to ceiling. 5 reps each side." },
      { name: "Cat-cow",                duration: "60s",    type: "mobility",   instruction: "On all fours. Slow exhale arch, inhale round. 10 reps." },
      { name: "Lateral band walks",     duration: "2×15 ea",type: "activation", instruction: "Band above knees, small steps left and right. Keep hips level." },
      { name: "Shoulder CARs",          duration: "60s",    type: "mobility",   instruction: "Slow full-range shoulder rotations — forward 5, back 5, each arm." },
      { name: "Jumping jacks",          duration: "30s",    type: "dynamic",    instruction: "Full range. Get the body temperature up before lifting." },
    ],
  },
  {
    id: "d1_w4",
    title: "Skipping + Dynamic Mobility",
    totalMins: 10,
    equipment: ["none"],
    steps: [
      { name: "Skipping — easy",        duration: "3 min",  type: "cardio",     instruction: "Relaxed pace. Single bounce. Rhythm over speed." },
      { name: "Leg swings",             duration: "30s ea", type: "dynamic",    instruction: "Hold wall, swing leg front-back then side-side. 15 each direction." },
      { name: "Inchworm",               duration: "2×6",    type: "dynamic",    instruction: "Walk hands out to plank, hold 2s, walk feet in. Controlled." },
      { name: "Banded hip flexor stretch","duration":"60s ea",type:"mobility",  instruction: "Half-kneeling, band around hip. Drive hip forward and hold." },
      { name: "Push-up plus",           duration: "2×10",   type: "activation", instruction: "At top of push-up, push through extra — protract shoulder blades." },
    ],
  },
  {
    id: "d1_w5",
    title: "Bike Tabata + Core Activation",
    totalMins: 13,
    equipment: ["bike"],
    steps: [
      { name: "Bike — easy build",      duration: "3 min",  type: "cardio",     instruction: "Build from RPE 3 to 5. Light resistance." },
      { name: "Bike Tabata",            duration: "4 min",  type: "cardio",     instruction: "8 rounds: 20s max effort, 10s easy. High cadence. This is a primer not a session." },
      { name: "Plank hold",             duration: "3×30s",  type: "activation", instruction: "Elbows under shoulders. Squeeze glutes. Don't let hips drop." },
      { name: "Dead bug",               duration: "2×8 ea", type: "activation", instruction: "Lower arm and opposite leg slowly. Keep lower back flat throughout." },
      { name: "Hip 90/90 stretch",      duration: "60s ea", type: "mobility",   instruction: "Both hips at 90 degrees. Sit tall, lean forward into front hip." },
    ],
  },
  {
    id: "d1_w6",
    title: "Treadmill + Shoulder Circuit",
    totalMins: 11,
    equipment: ["none"],
    steps: [
      { name: "Brisk walk or light jog","duration":"4 min", type: "cardio",     instruction: "HR to ~60% max. Breathe through the nose." },
      { name: "Foam roll — thoracic",   duration: "90s",    type: "mobility",   instruction: "Upper back on roller, arms crossed. Extend over 5 segments." },
      { name: "Band pull-aparts",       duration: "3×20",   type: "activation", instruction: "Arms straight, pull band to chest. Full range, slow and controlled." },
      { name: "Wall slides",            duration: "2×12",   type: "activation", instruction: "Back flat on wall, slide arms up in Y position. Keep contact." },
      { name: "Reverse lunges",         duration: "2×8 ea", type: "dynamic",    instruction: "Step back, knee near floor. Drive through front heel to stand." },
    ],
  },
];

// ── DAY 3 WARM-UPS (Strength & Power — CNS activation focus) ─────────────────
const WARMUP_DAY3 = [
  {
    id: "d3_w1",
    title: "Rower + CNS Primer",
    totalMins: 12,
    equipment: ["rower"],
    steps: [
      { name: "Row — build to moderate", duration: "4 min", type: "cardio",     instruction: "Last minute at RPE 6. Get the nervous system firing." },
      { name: "Hip hinge drill",         duration: "2×10",  type: "dynamic",    instruction: "Dowel on back, hinge at hip. Groove the pattern before adding load." },
      { name: "Goblet squat + pause",    duration: "2×8",   type: "dynamic",    instruction: "3s descent, 2s pause at bottom. Own the position." },
      { name: "Hang clean drill",        duration: "3×5",   type: "activation", instruction: "Bar or PVC. Focus on hip extension and elbow speed. No load." },
      { name: "Broad jump",              duration: "3×3",   type: "activation", instruction: "Max effort. Stick the landing each time. Wake the CNS up." },
    ],
  },
  {
    id: "d3_w2",
    title: "Bike Erg + Power Prep",
    totalMins: 13,
    equipment: ["bike"],
    steps: [
      { name: "Bike — easy",             duration: "3 min", type: "cardio",     instruction: "Spin legs out. Breathe and relax." },
      { name: "Bike — 6×10s sprints",    duration: "3 min", type: "cardio",     instruction: "10s max sprint, 20s easy. Fire up the fast-twitch fibres." },
      { name: "Romanian DL — empty bar", duration: "2×10",  type: "dynamic",    instruction: "Focus on hinge pattern. Bar stays close, hamstrings load fully." },
      { name: "Box step-up",             duration: "2×8 ea",type: "dynamic",    instruction: "Drive through heel of front foot. No push from back leg." },
      { name: "Med ball slam",           duration: "3×5",   type: "activation", instruction: "Full overhead reach, slam hard. Absorb with hips not back." },
    ],
  },
  {
    id: "d3_w3",
    title: "Jog + Barbell Prep Complex",
    totalMins: 14,
    equipment: ["barbell"],
    steps: [
      { name: "Jog",                     duration: "4 min", type: "cardio",     instruction: "Easy pace. Transition from rest to training." },
      { name: "Barbell complex — empty bar", duration: "3×5 each", type: "circuit", instruction: "Romanian DL → Hang clean → Front squat → Push press. No rest between exercises." },
      { name: "Ankle circles",           duration: "30s ea",type: "mobility",   instruction: "Slow full circles. 10 each direction each ankle." },
      { name: "Calf raises — slow",      duration: "2×15",  type: "activation", instruction: "3s up, 3s down. Full range — heel drop below step." },
      { name: "Jump squat",              duration: "3×5",   type: "activation", instruction: "Bodyweight. Squat to parallel, explode up. Absorb landing softly." },
    ],
  },
  {
    id: "d3_w4",
    title: "Assault Bike + Hip & Ankle Prep",
    totalMins: 12,
    equipment: ["bike"],
    steps: [
      { name: "Assault bike — easy",     duration: "2 min", type: "cardio",     instruction: "Arms and legs working. Get blood moving everywhere." },
      { name: "Assault bike — 4×15s",    duration: "3 min", type: "cardio",     instruction: "15s max effort, 30s easy. Full power each sprint." },
      { name: "Hip 90/90 + transition",  duration: "90s",   type: "mobility",   instruction: "Both hips at 90°. Rotate between internal and external rotation." },
      { name: "Ankle mobility drill",    duration: "2×10 ea",type: "mobility",  instruction: "Half-kneeling, drive knee over toes. Keep heel down." },
      { name: "Vertical jump",           duration: "4×3",   type: "activation", instruction: "Max height. Full arm swing. Full recovery between reps." },
    ],
  },
  {
    id: "d3_w5",
    title: "Rower + Posterior Chain Circuit",
    totalMins: 13,
    equipment: ["rower", "db"],
    steps: [
      { name: "Row — build",             duration: "5 min", type: "cardio",     instruction: "Build last 90s to RPE 6. Focus on drive." },
      { name: "Glute bridge — loaded",   duration: "3×10",  type: "activation", instruction: "Plate or DB on hips. Full hip extension, 2s squeeze at top." },
      { name: "Nordic hamstring — eccentric","duration":"3×4",type:"activation",instruction: "Partner holds ankles. Lower as slow as possible. Safety first." },
      { name: "DB Romanian DL",          duration: "2×10",  type: "dynamic",    instruction: "Light DBs. Perfect hinge pattern. Load the hamstrings fully." },
      { name: "Box jump — low",          duration: "3×3",   type: "activation", instruction: "Low box. Focus on take-off explosion and quiet landing." },
    ],
  },
  {
    id: "d3_w6",
    title: "Skipping + Full Body Mobility",
    totalMins: 12,
    equipment: ["none"],
    steps: [
      { name: "Skipping — build",        duration: "3 min", type: "cardio",     instruction: "Start easy, build pace last minute. Stay light on feet." },
      { name: "World's greatest stretch","duration":"90s",   type: "mobility",   instruction: "Lunge, elbow to floor, rotate up to ceiling. 5 reps each side." },
      { name: "Thoracic rotation",       duration: "2×10 ea",type: "mobility",  instruction: "Seated or quadruped. Thread needle each side slowly." },
      { name: "Bodyweight walking lunge","duration":"2×10",  type: "dynamic",   instruction: "Arms overhead. Maintain torso upright. Feel the hip flexor load." },
      { name: "Push-up variation",       duration: "2×10",  type: "activation", instruction: "Wide grip, close grip or archer push-up. Choose your challenge." },
      { name: "Med ball chest throw",    duration: "3×5",   type: "activation", instruction: "Partner or wall. Explosive push. Reset fully between reps." },
    ],
  },
];

// ── DAY 5 WARM-UPS (Activation — mobility and CNS prime, pre-game) ────────────
const WARMUP_DAY5 = [
  {
    id: "d5_w1",
    title: "Easy Jog + Pre-Game Mobility",
    totalMins: 10,
    equipment: ["none"],
    steps: [
      { name: "Easy jog",               duration: "3 min",  type: "cardio",     instruction: "Very relaxed. RPE 3 max. This is not a workout." },
      { name: "Hip flexor stretch",      duration: "90s ea", type: "mobility",   instruction: "Half-kneeling. Drive hip forward and hold. Release game-day tension." },
      { name: "Leg swings",             duration: "30s ea", type: "dynamic",    instruction: "Front-back and side-side. 15 each direction each leg." },
      { name: "Calf + Achilles stretch","duration":"60s ea", type: "mobility",   instruction: "Straight leg then bent knee. Hold each 30s." },
      { name: "Arm circles",            duration: "60s",    type: "dynamic",    instruction: "Large slow circles forward then back. Roll the shoulder joint." },
    ],
  },
  {
    id: "d5_w2",
    title: "Bike + Rotator Cuff Prep",
    totalMins: 11,
    equipment: ["bike", "db"],
    steps: [
      { name: "Bike — very easy",        duration: "4 min", type: "cardio",     instruction: "No resistance. Spin and wake up. RPE 2–3 only." },
      { name: "DB external rotation",    duration: "2×12 ea",type:"activation", instruction: "Light DB. Slow controlled rotation. Protect the shoulder pre-game." },
      { name: "Band pull-aparts",        duration: "2×20",  type: "activation", instruction: "Activate rear delts and set the shoulder. Arms straight." },
      { name: "Hip 90/90",              duration: "90s ea", type: "mobility",   instruction: "Both hips at 90°. Sit tall. Game-day hip prep." },
      { name: "Glute activation walks",  duration: "2×15 ea",type:"activation", instruction: "Band above knees. Side steps — keep hips level." },
    ],
  },
  {
    id: "d5_w3",
    title: "Foam Roll + Dynamic Prep",
    totalMins: 10,
    equipment: ["foam_roller"],
    steps: [
      { name: "Foam roll — quads",       duration: "90s ea", type: "mobility",  instruction: "Slow rolling. Pause on tender spots 10s. Release pre-game tightness." },
      { name: "Foam roll — IT band",     duration: "60s ea", type: "mobility",  instruction: "Side-lying. Roll from hip to knee. Work the full length." },
      { name: "Foam roll — thoracic",    duration: "90s",    type: "mobility",  instruction: "Upper and mid back. Extend over the roller. Breathe out at each segment." },
      { name: "Walking lunge + twist",   duration: "2×8 ea", type: "dynamic",  instruction: "Step into lunge, rotate torso to front leg. Arms reach across." },
      { name: "High knees",              duration: "30s",    type: "dynamic",   instruction: "Drive knees up. Short quick steps. Light and sharp." },
      { name: "Skips for height",        duration: "30s",    type: "dynamic",   instruction: "Drive knee and opposite arm up. Get light on your feet." },
    ],
  },
  {
    id: "d5_w4",
    title: "Rower + Pre-Game Neural Prep",
    totalMins: 12,
    equipment: ["rower"],
    steps: [
      { name: "Row — easy",              duration: "4 min", type: "cardio",     instruction: "Relaxed. This is body temperature only — not conditioning." },
      { name: "Ankle mobilisation",      duration: "2×10 ea",type:"mobility",  instruction: "Half-kneeling drive. Keep heel flat. Load the ankle range." },
      { name: "Glute bridge + march",    duration: "2×10 ea",type:"activation",instruction: "Bridge up, alternate knee drives. Keep hips level throughout." },
      { name: "Squat to stand",          duration: "2×8",   type: "dynamic",   instruction: "Toes under, hinge to heels, squat down, stand. Thoracic and hip opener." },
      { name: "Sprint build-up 20m",     duration: "3×1",   type: "dynamic",   instruction: "50% → 70% → 85%. Not flat out. Prime the sprint pattern." },
    ],
  },
  {
    id: "d5_w5",
    title: "Skipping + Shoulder & Hip Circuit",
    totalMins: 11,
    equipment: ["bands"],
    steps: [
      { name: "Skipping",               duration: "2 min",  type: "cardio",     instruction: "Easy rhythm. Single bounce. Body temperature only." },
      { name: "Band shoulder circuit",  duration: "3 min",  type: "activation", instruction: "Pull-aparts × 15, face pulls × 15, external rotation × 12 each. No rest." },
      { name: "Hip flexor stretch",     duration: "90s ea", type: "mobility",   instruction: "Half-kneeling. Contract glute of rear leg. Hold and breathe." },
      { name: "Lateral shuffle",        duration: "2×20m",  type: "dynamic",   instruction: "Low hips, quick feet. Touch the ground at each end." },
      { name: "Back-pedal + sprint",    duration: "3×20m",  type: "dynamic",   instruction: "10m back-pedal, drop hips and sprint forward 20m. Game-day movement." },
    ],
  },
  {
    id: "d5_w6",
    title: "Walk + Full Body Pre-Game Flow",
    totalMins: 10,
    equipment: ["none"],
    steps: [
      { name: "Brisk walk",             duration: "3 min",  type: "cardio",     instruction: "Purposeful. Breathing deeply. Mental prep begins here." },
      { name: "World's greatest stretch","duration":"90s",  type: "mobility",   instruction: "5 reps each side. Own each position. Don't rush it." },
      { name: "Inchworm",               duration: "2×6",    type: "dynamic",    instruction: "Walk out to push-up, hold 2s, walk feet in. Full body wake-up." },
      { name: "Carioca",                duration: "2×20m",  type: "dynamic",    instruction: "Hip rotation running — eyes forward, quick feet. Feel athletic." },
      { name: "Jump + stick landing",   duration: "3×5",    type: "activation", instruction: "Jump up, land softly on both feet. Hold 2s. Reinforce joint control." },
    ],
  },
];

// ── Warm-up selector ─────────────────────────────────────────────────────────
// Returns the warm-up for a given session day and week number
function getWarmup(sessionDay, week) {
  const pools = { monday: WARMUP_DAY1, wednesday: WARMUP_DAY3, friday: WARMUP_DAY5 };
  const pool  = pools[sessionDay];
  if (!pool) return null;
  return pool[(week - 1) % pool.length];
}

// ── WarmupCard component ─────────────────────────────────────────────────────
function WarmupCard({ warmup }) {
  const [expanded, setExpanded] = useState(false);
  const [doneSteps, setDoneSteps] = useState({});

  if (!warmup) return null;

  const allDone    = warmup.steps.every((_, i) => doneSteps[i]);
  const doneSoFar  = Object.values(doneSteps).filter(Boolean).length;
  const pct        = doneSoFar / warmup.steps.length;

  function toggleStep(i) {
    setDoneSteps(p => ({ ...p, [i]: !p[i] }));
  }

  return (
    <div style={{
      background: C.card,
      border: `2px solid ${allDone ? C.green : "#F59E0B"}`,
      borderRadius: 14, overflow: "hidden",
      transition: "border .3s",
      marginBottom: 16,
    }}>
      {/* Warm-up banner — prominent, unmissable */}
      <div style={{
        background: allDone ? C.green : "#F59E0B",
        padding: "8px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:18 }}>🔥</span>
          <div>
            <div style={{ fontSize:11, fontWeight:900, color:"#0A0F1E", letterSpacing:2, fontFamily:mono }}>
              WARM UP FIRST
            </div>
            <div style={{ fontSize:9, color:"#0A0F1E", opacity:0.7, fontWeight:600 }}>
              Complete before lifting — every session
            </div>
          </div>
        </div>
        <div style={{
          background:"rgba(0,0,0,0.2)", borderRadius:20, padding:"3px 10px",
          fontSize:11, fontWeight:800, color:"#fff", fontFamily:mono,
        }}>
          {allDone ? "✓ DONE" : `${doneSoFar}/${warmup.steps.length}`}
        </div>
      </div>

      {/* Header */}
      <div onClick={() => setExpanded(e => !e)} style={{
        padding: "12px 16px", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        {/* Progress ring */}
        <div style={{ flexShrink: 0 }}>
          <svg width={44} height={44}>
            <circle cx={22} cy={22} r={17} fill="none" stroke="#CBD5E1" strokeWidth={3.5} />
            <circle cx={22} cy={22} r={17} fill="none"
              stroke={allDone ? C.green : "#F59E0B"} strokeWidth={3.5}
              strokeDasharray={`${pct * 106.8} 106.8`}
              strokeLinecap="round" transform="rotate(-90 22 22)"
              style={{ transition: "stroke-dasharray .4s ease" }} />
            <text x={22} y={26} textAnchor="middle"
              fontSize={11} fontWeight={700} fontFamily={mono}
              fill={allDone ? C.green : "#F59E0B"}>
              {allDone ? "✓" : `${doneSoFar}/${warmup.steps.length}`}
            </text>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#F59E0B", fontFamily: mono, letterSpacing: 1.5 }}>
              🔥 WARM-UP
            </span>
            {warmup.equipment.filter(e => e !== "none").length > 0 && (
              <span style={{ fontSize: 9, color: C.muted }}>
                · {warmup.equipment.map(e => ({
                  bike: "🚴 Bike", rower: "🚣 Rower", db: "🏋️ DBs",
                  bands: "🟡 Bands", barbell: "🏋️ Barbell",
                  foam_roller: "🔵 Foam roller", bar: "🔘 Bar",
                }[e] || e)).join(", ")}
              </span>
            )}
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{warmup.title}</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>
            ≈ {warmup.totalMins} min · {warmup.steps.length} movements
          </div>
        </div>
        <span style={{ fontSize: 11, color: C.muted }}>{expanded ? "▲" : "▼"}</span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: C.border }}>
        <div style={{
          height: "100%", width: `${pct * 100}%`,
          background: allDone ? C.green : "#F59E0B",
          transition: "width .4s ease",
        }} />
      </div>

      {/* Step list */}
      {expanded && (
        <div style={{ padding: "10px 16px 14px" }}>
          {warmup.steps.map((step, i) => {
            const done  = !!doneSteps[i];
            const col   = WARMUP_TYPE_COLOR[step.type] || C.muted;
            const icon  = WARMUP_TYPE_ICON[step.type]  || "•";
            return (
              <div key={i} onClick={() => toggleStep(i)} style={{
                display: "flex", gap: 12, padding: "10px 0",
                borderBottom: i < warmup.steps.length - 1 ? `1px solid ${C.border}` : "none",
                cursor: "pointer", opacity: done ? 0.5 : 1,
                transition: "opacity .2s",
              }}>
                {/* Type icon + done check */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: done ? C.green + "22" : col + "18",
                    border: `1.5px solid ${done ? C.green : col}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, transition: "all .2s",
                  }}>{done ? "✓" : icon}</div>
                </div>
                {/* Step details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: done ? C.muted : C.text,
                      textDecoration: done ? "line-through" : "none" }}>
                      {step.name}
                    </span>
                    <span style={{
                      fontSize: 9, fontWeight: 700, color: col,
                      background: col + "18", border: `1px solid ${col}33`,
                      borderRadius: 4, padding: "1px 5px", fontFamily: mono,
                      flexShrink: 0,
                    }}>{step.duration}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 11, color: C.muted, lineHeight: 1.5 }}>
                    {step.instruction}
                  </p>
                </div>
              </div>
            );
          })}
          {/* All done message */}
          {allDone && (
            <div style={{
              marginTop: 10, background: C.green + "18",
              border: `1px solid ${C.green}44`, borderRadius: 8,
              padding: "8px 14px", textAlign: "center",
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.green }}>
                ✓ Warm-up complete — ready to train
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


// ── Exercise Alternatives Library ────────────────────────────────────────────
// Each key matches the exercise name exactly.
// Each alternative has its own zone prescriptions so the load adapts correctly.
// Reason shown to athlete so they understand the swap is legitimate.

const EXERCISE_ALTERNATIVES = {

  // ── WORKOUT A ────────────────────────────────────────────────────────────────

  "Power Clean / Hang Clean": [
    {
      name: "DB Power Clean",
      reason: "No barbell / learning the movement",
      youtube: "https://www.youtube.com/watch?v=yOiFeHhTf1A",
      green:  { sets: 4, reps: "4",   load: "RPE 7", rest: "No rest → B" },
      amber:  { sets: 3, reps: "4",   load: "RPE 6", rest: "No rest → B" },
      red:    null,
    },
    {
      name: "Rower Sprint",
      reason: "No barbell / gym setting",
      youtube: "https://www.youtube.com/watch?v=GbSCEJaJ3Ok",
      green:  { sets: 4, reps: "10s", load: "Max",   rest: "No rest → B" },
      amber:  { sets: 3, reps: "10s", load: "Max",   rest: "No rest → B" },
      red:    null,
    },
  ],

  "Broad Jump to Deceleration": [
    {
      name: "Broad Jump",
      reason: "Focus on distance / beginner",
      youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      green:  { sets: 4, reps: "4",   load: "Max",     rest: "No rest → C" },
      amber:  { sets: 3, reps: "3",   load: "Sub-max", rest: "No rest → C" },
      red:    null,
    },
    {
      name: "Squat Jump + Stick",
      reason: "No space to jump forward",
      youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      green:  { sets: 4, reps: "4",   load: "Max",     rest: "No rest → C" },
      amber:  { sets: 3, reps: "3",   load: "Max",     rest: "No rest → C" },
      red:    null,
    },
  ],

  "Single Arm DB Row": [
    {
      name: "Cable Single Arm Row",
      reason: "Prefer cable for stability",
      youtube: "https://www.youtube.com/watch?v=UCXxvVItLoM",
      green:  { sets: 4, reps: "10ea", load: "Heavy", rest: "2 min" },
      amber:  { sets: 3, reps: "10ea", load: "Mod",   rest: "2 min" },
      red:    { sets: 2, reps: "10ea", load: "Light",  rest: "90s"  },
    },
    {
      name: "Chest Supported Row",
      reason: "Lower back soreness",
      youtube: "https://www.youtube.com/watch?v=pYcpY20QaE8",
      green:  { sets: 4, reps: "10ea", load: "Heavy", rest: "2 min" },
      amber:  { sets: 3, reps: "10ea", load: "Mod",   rest: "2 min" },
      red:    { sets: 2, reps: "10ea", load: "Light",  rest: "90s"  },
    },
  ],

  "Back Squat": [
    {
      name: "Front Squat",
      reason: "Back discomfort / technique variation",
      youtube: "https://www.youtube.com/watch?v=m4ytaCJZpl0",
      green:  { sets: 4, reps: "5",   load: "75%",   rest: "No rest → B" },
      amber:  { sets: 3, reps: "6",   load: "65%",   rest: "No rest → B" },
      red:    { sets: 2, reps: "8",   load: "55%",   rest: "No rest → B" },
    },
    {
      name: "Goblet Squat",
      reason: "No barbell / technique development",
      youtube: "https://www.youtube.com/watch?v=MxsFDhcyFyE",
      green:  { sets: 4, reps: "8",   load: "DB",    rest: "No rest → B" },
      amber:  { sets: 3, reps: "8",   load: "DB",    rest: "No rest → B" },
      red:    { sets: 2, reps: "10",  load: "Light",  rest: "No rest → B" },
    },
  ],

  "Knees to Feet Jump": [
    {
      name: "Vertical Jump",
      reason: "Knee discomfort / beginner",
      youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      green:  { sets: 4, reps: "4",   load: "Max",     rest: "No rest → C" },
      amber:  { sets: 3, reps: "3",   load: "Sub-max", rest: "No rest → C" },
      red:    null,
    },
    {
      name: "Box Jump",
      reason: "No mat / knee sensitivity",
      youtube: "https://www.youtube.com/watch?v=52lE3LIsOKo",
      green:  { sets: 4, reps: "4",   load: "Max",     rest: "No rest → C" },
      amber:  { sets: 3, reps: "3",   load: "Mod",     rest: "No rest → C" },
      red:    null,
    },
  ],

  "Dead Bug": [
    {
      name: "Plank Hold",
      reason: "Prefer isometric / lower back rehab",
      youtube: "https://www.youtube.com/watch?v=XxWcirHIwVo",
      green:  { sets: 4, reps: "30s",  load: "BW",   rest: "2 min" },
      amber:  { sets: 3, reps: "20s",  load: "BW",   rest: "2 min" },
      red:    { sets: 2, reps: "15s",  load: "BW",   rest: "90s"  },
    },
    {
      name: "Bird Dog",
      reason: "Hip stability / lower back protection",
      youtube: "https://www.youtube.com/watch?v=4XLEnwUr1d8",
      green:  { sets: 4, reps: "10ea", load: "BW",   rest: "2 min" },
      amber:  { sets: 3, reps: "8ea",  load: "BW",   rest: "2 min" },
      red:    { sets: 2, reps: "6ea",  load: "BW",   rest: "90s"  },
    },
  ],

  "Barbell Hip Thrust": [
    {
      name: "DB Hip Thrust",
      reason: "No barbell / lighter load",
      youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE",
      green:  { sets: 3, reps: "8",   load: "Heavy", rest: "No rest → B" },
      amber:  { sets: 3, reps: "10",  load: "Mod",   rest: "No rest → B" },
      red:    { sets: 2, reps: "12",  load: "Light",  rest: "No rest → B" },
    },
    {
      name: "Glute Bridge",
      reason: "No equipment / recovery day",
      youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE",
      green:  { sets: 3, reps: "12",  load: "BW",    rest: "No rest → B" },
      amber:  { sets: 3, reps: "12",  load: "BW",    rest: "No rest → B" },
      red:    { sets: 2, reps: "15",  load: "BW",    rest: "No rest → B" },
    },
  ],

  "Box Jump": [
    {
      name: "Broad Jump",
      reason: "No box available",
      youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      green:  { sets: 3, reps: "4",   load: "Max",   rest: "No rest → C" },
      amber:  { sets: 2, reps: "3",   load: "Mod",   rest: "No rest → C" },
      red:    null,
    },
    {
      name: "Squat Jump",
      reason: "No box / ceiling too low",
      youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      green:  { sets: 3, reps: "5",   load: "Max",   rest: "No rest → C" },
      amber:  { sets: 2, reps: "4",   load: "Max",   rest: "No rest → C" },
      red:    null,
    },
  ],

  "Pull Ups / Chins": [
    {
      name: "Lat Pulldown",
      reason: "Building to bodyweight pull-up",
      youtube: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
      green:  { sets: 3, reps: "8",   load: "Heavy", rest: "2 min" },
      amber:  { sets: 2, reps: "10",  load: "Mod",   rest: "2 min" },
      red:    { sets: 2, reps: "10",  load: "Light",  rest: "90s"  },
    },
    {
      name: "Assisted Pull-Up",
      reason: "Strength development / technique",
      youtube: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
      green:  { sets: 3, reps: "8",   load: "Assist", rest: "2 min" },
      amber:  { sets: 2, reps: "8",   load: "Assist", rest: "2 min" },
      red:    { sets: 2, reps: "8",   load: "Assist", rest: "90s"   },
    },
  ],

  // ── WORKOUT B ────────────────────────────────────────────────────────────────

  "Bulgarian Split Squat": [
    {
      name: "Reverse Lunge",
      reason: "Balance / knee discomfort",
      youtube: "https://www.youtube.com/watch?v=xrPteyQLGAo",
      green:  { sets: 4, reps: "8ea", load: "DB",    rest: "No rest → B" },
      amber:  { sets: 3, reps: "8ea", load: "BW",    rest: "No rest → B" },
      red:    { sets: 2, reps: "8ea", load: "BW",    rest: "No rest → B" },
    },
    {
      name: "Step-Up",
      reason: "Knee rehab / no elevated surface",
      youtube: "https://www.youtube.com/watch?v=3P09TCfMgxI",
      green:  { sets: 4, reps: "10ea", load: "DB",   rest: "No rest → B" },
      amber:  { sets: 3, reps: "10ea", load: "BW",   rest: "No rest → B" },
      red:    { sets: 2, reps: "10ea", load: "BW",   rest: "No rest → B" },
    },
  ],

  "Vertical Jump": [
    {
      name: "Box Jump",
      reason: "Ceiling restriction / preference",
      youtube: "https://www.youtube.com/watch?v=52lE3LIsOKo",
      green:  { sets: 4, reps: "4",   load: "Max",     rest: "No rest → C" },
      amber:  { sets: 3, reps: "3",   load: "Mod",     rest: "No rest → C" },
      red:    null,
    },
    {
      name: "Broad Jump",
      reason: "Ceiling too low",
      youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      green:  { sets: 4, reps: "4",   load: "Max",     rest: "No rest → C" },
      amber:  { sets: 3, reps: "3",   load: "Sub-max", rest: "No rest → C" },
      red:    null,
    },
  ],

  "Single Arm DB Shoulder Press": [
    {
      name: "DB Shoulder Press (both)",
      reason: "Stability / beginner",
      youtube: "https://www.youtube.com/watch?v=qEwKCR5JCog",
      green:  { sets: 4, reps: "8",   load: "70%",   rest: "2 min" },
      amber:  { sets: 3, reps: "8",   load: "60%",   rest: "2 min" },
      red:    { sets: 2, reps: "10",  load: "50%",   rest: "90s"   },
    },
    {
      name: "Seated DB Press",
      reason: "Lower back pain / support needed",
      youtube: "https://www.youtube.com/watch?v=qEwKCR5JCog",
      green:  { sets: 4, reps: "8",   load: "70%",   rest: "2 min" },
      amber:  { sets: 3, reps: "8",   load: "60%",   rest: "2 min" },
      red:    { sets: 2, reps: "10",  load: "50%",   rest: "90s"   },
    },
  ],

  "Romanian Deadlift": [
    {
      name: "DB Romanian Deadlift",
      reason: "No barbell / lower back soreness",
      youtube: "https://www.youtube.com/watch?v=hCDzSR6bW10",
      green:  { sets: 4, reps: "8",   load: "Heavy", rest: "No rest → B" },
      amber:  { sets: 3, reps: "8",   load: "Mod",   rest: "No rest → B" },
      red:    { sets: 2, reps: "8",   load: "Light",  rest: "No rest → B" },
    },
    {
      name: "Good Morning",
      reason: "Hamstring focus / variation",
      youtube: "https://www.youtube.com/watch?v=YA-h3n9L4YU",
      green:  { sets: 4, reps: "10",  load: "Light",  rest: "No rest → B" },
      amber:  { sets: 3, reps: "10",  load: "Light",  rest: "No rest → B" },
      red:    { sets: 2, reps: "10",  load: "Light",  rest: "No rest → B" },
    },
  ],

  "Lateral Hurdle Hop + Stick": [
    {
      name: "Lateral Bound + Stick",
      reason: "No hurdles available",
      youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      green:  { sets: 4, reps: "5ea", load: "BW",    rest: "No rest → C" },
      amber:  { sets: 3, reps: "4ea", load: "BW",    rest: "No rest → C" },
      red:    null,
    },
    {
      name: "Lateral Step + Stick",
      reason: "Ankle / knee sensitivity",
      youtube: "https://www.youtube.com/watch?v=YPKaKbKFwM4",
      green:  { sets: 4, reps: "6ea", load: "BW",    rest: "No rest → C" },
      amber:  { sets: 3, reps: "5ea", load: "BW",    rest: "No rest → C" },
      red:    { sets: 2, reps: "4ea", load: "BW",    rest: "No rest → C" },
    },
  ],

  "Band Pallof Press": [
    {
      name: "Cable Pallof Press",
      reason: "No band / prefer cable",
      youtube: "https://www.youtube.com/watch?v=AH_QZLm_0-s",
      green:  { sets: 4, reps: "12ea", load: "Light",  rest: "2 min" },
      amber:  { sets: 3, reps: "10ea", load: "Light",  rest: "2 min" },
      red:    { sets: 2, reps: "8ea",  load: "Light",  rest: "90s"  },
    },
    {
      name: "Dead Bug",
      reason: "No band or cable available",
      youtube: "https://www.youtube.com/watch?v=4XLEnwUr1d8",
      green:  { sets: 4, reps: "8ea",  load: "BW",    rest: "2 min" },
      amber:  { sets: 3, reps: "8ea",  load: "BW",    rest: "2 min" },
      red:    { sets: 2, reps: "6ea",  load: "BW",    rest: "90s"  },
    },
  ],

  "Med Ball Rotational Slam": [
    {
      name: "Explosive Push-Up",
      reason: "No med ball available",
      youtube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      green:  { sets: 3, reps: "5",   load: "Max",   rest: "No rest → B" },
      amber:  { sets: 2, reps: "5",   load: "Max",   rest: "No rest → B" },
      red:    { sets: 1, reps: "5",   load: "BW",    rest: "No rest → B" },
    },
    {
      name: "Rower Sprint",
      reason: "No med ball / gym setting",
      youtube: "https://www.youtube.com/watch?v=GbSCEJaJ3Ok",
      green:  { sets: 3, reps: "10s", load: "Max",   rest: "No rest → B" },
      amber:  { sets: 2, reps: "10s", load: "Max",   rest: "No rest → B" },
      red:    null,
    },
  ],

  "Archer Press Up": [
    {
      name: "Standard Press Up",
      reason: "Technique development / beginner",
      youtube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      green:  { sets: 3, reps: "10",  load: "BW",    rest: "2 min" },
      amber:  { sets: 2, reps: "8",   load: "BW",    rest: "2 min" },
      red:    { sets: 2, reps: "6",   load: "BW",    rest: "90s"   },
    },
    {
      name: "Close Grip Press Up",
      reason: "Wrist comfort / variation",
      youtube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      green:  { sets: 3, reps: "10",  load: "BW",    rest: "2 min" },
      amber:  { sets: 2, reps: "8",   load: "BW",    rest: "2 min" },
      red:    { sets: 2, reps: "6",   load: "BW",    rest: "90s"   },
    },
  ],

  // ── WORKOUT C ────────────────────────────────────────────────────────────────

  "Front Squat": [
    {
      name: "Leg Press",
      reason: "No front rack / wrist mobility",
      youtube: "https://www.youtube.com/watch?v=bEv6CCg2BC8",
      green:  { sets: 4, reps: "8",   load: "Heavy", rest: "No rest → B" },
      amber:  { sets: 3, reps: "10",  load: "Mod",   rest: "No rest → B" },
      red:    { sets: 2, reps: "12",  load: "Light",  rest: "No rest → B" },
    },
    {
      name: "Goblet Squat",
      reason: "No barbell / technique development",
      youtube: "https://www.youtube.com/watch?v=MxsFDhcyFyE",
      green:  { sets: 4, reps: "8",   load: "DB",    rest: "No rest → B" },
      amber:  { sets: 3, reps: "8",   load: "DB",    rest: "No rest → B" },
      red:    { sets: 2, reps: "10",  load: "Light",  rest: "No rest → B" },
    },
  ],

  "Decline Press Up": [
    {
      name: "Standard Press Up",
      reason: "Shoulder discomfort / beginner",
      youtube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      green:  { sets: 4, reps: "12",  load: "BW",    rest: "2 min" },
      amber:  { sets: 3, reps: "10",  load: "BW",    rest: "2 min" },
      red:    { sets: 2, reps: "8",   load: "BW",    rest: "90s"   },
    },
    {
      name: "Pike Press Up",
      reason: "Overhead strength focus",
      youtube: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      green:  { sets: 4, reps: "10",  load: "BW",    rest: "2 min" },
      amber:  { sets: 3, reps: "8",   load: "BW",    rest: "2 min" },
      red:    { sets: 2, reps: "6",   load: "BW",    rest: "90s"   },
    },
  ],

  "Ab Wheel Rollout": [
    {
      name: "Dead Bug",
      reason: "Lower back sensitivity / beginner",
      youtube: "https://www.youtube.com/watch?v=4XLEnwUr1d8",
      green:  { sets: 4, reps: "8ea",  load: "BW",   rest: "2 min" },
      amber:  { sets: 3, reps: "8ea",  load: "BW",   rest: "2 min" },
      red:    { sets: 2, reps: "6ea",  load: "BW",   rest: "90s"   },
    },
    {
      name: "Plank + Shoulder Tap",
      reason: "No ab wheel available",
      youtube: "https://www.youtube.com/watch?v=4XLEnwUr1d8",
      green:  { sets: 4, reps: "10ea", load: "BW",   rest: "2 min" },
      amber:  { sets: 3, reps: "8ea",  load: "BW",   rest: "2 min" },
      red:    { sets: 2, reps: "6ea",  load: "BW",   rest: "90s"   },
    },
  ],

  "Goblet Squat": [
    {
      name: "DB Squat",
      reason: "No kettlebell available",
      youtube: "https://www.youtube.com/watch?v=U4s4mEQ5VOU",
      green:  { sets: 3, reps: "10",  load: "DB",    rest: "No rest → B" },
      amber:  { sets: 3, reps: "10",  load: "DB",    rest: "No rest → B" },
      red:    { sets: 2, reps: "12",  load: "Light",  rest: "No rest → B" },
    },
    {
      name: "Bodyweight Squat",
      reason: "No equipment / warm-up",
      youtube: "https://www.youtube.com/watch?v=aclHkVaku9U",
      green:  { sets: 3, reps: "15",  load: "BW",    rest: "No rest → B" },
      amber:  { sets: 3, reps: "15",  load: "BW",    rest: "No rest → B" },
      red:    { sets: 2, reps: "15",  load: "BW",    rest: "No rest → B" },
    },
  ],

  // ── SHARED / STABILITY ───────────────────────────────────────────────────────

  "Single-leg Ankle Stability Circuit": [
    {
      name: "Single Leg Balance Hold",
      reason: "Beginner / post-injury",
      youtube: "https://www.youtube.com/watch?v=uFIc9fE3OI8",
      green:  { sets: 3, reps: "30s ea", load: "BW",  rest: "60s" },
      amber:  { sets: 2, reps: "20s ea", load: "BW",  rest: "60s" },
      red:    { sets: 1, reps: "20s ea", load: "BW",  rest: "—"   },
    },
  ],

  "Lateral Band Walk": [
    {
      name: "Lateral Bodyweight Walk",
      reason: "No band available",
      youtube: "https://www.youtube.com/watch?v=YPKaKbKFwM4",
      green:  { sets: 3, reps: "15ea", load: "BW",    rest: "45s" },
      amber:  { sets: 2, reps: "12ea", load: "BW",    rest: "45s" },
      red:    { sets: 1, reps: "10ea", load: "BW",    rest: "—"   },
    },
  ],

  // ── INJURY PREVENTION ────────────────────────────────────────────────────────

  "Nordic Hamstring Curl": [
    {
      name: "Slider Hamstring Curl",
      reason: "No partner / beginner progression",
      youtube: "https://www.youtube.com/watch?v=d8AAPMa8Pf0",
      green:  { sets: 3, reps: "8",    load: "BW",    rest: "2 min" },
      amber:  { sets: 2, reps: "6",    load: "BW",    rest: "2 min" },
      red:    { sets: 1, reps: "6",    load: "BW",    rest: "—"     },
    },
    {
      name: "Glute-Ham Raise",
      reason: "Machine available / variation",
      youtube: "https://www.youtube.com/watch?v=d8AAPMa8Pf0",
      green:  { sets: 3, reps: "6",    load: "BW",    rest: "2 min" },
      amber:  { sets: 2, reps: "5",    load: "BW",    rest: "2 min" },
      red:    { sets: 1, reps: "4",    load: "BW",    rest: "—"     },
    },
  ],

  "Copenhagen Plank": [
    {
      name: "Side Plank",
      reason: "Adductor sensitivity / beginner",
      youtube: "https://www.youtube.com/watch?v=oBSuq9vbzh0",
      green:  { sets: 3, reps: "30s ea", load: "BW",  rest: "60s" },
      amber:  { sets: 2, reps: "20s ea", load: "BW",  rest: "60s" },
      red:    { sets: 1, reps: "15s ea", load: "BW",  rest: "—"   },
    },
  ],

  // ── FINISHERS ────────────────────────────────────────────────────────────────

  "Sled Push — 30m + 60m Jog Recovery": [
    {
      name: "Assault Bike — 15s All Out + 45s Easy",
      reason: "No sled available",
      youtube: "https://www.youtube.com/watch?v=roWRHJvKMCc",
      green:  { sets: 4, reps: "15s all out, 45s easy spin", load: "Max", rest: "—" },
      amber:  { sets: 2, reps: "15s all out, 45s easy spin", load: "Max", rest: "—" },
      red:    null,
    },
    {
      name: "Rower Sprint — 15s All Out + 45s Easy",
      reason: "No sled / prefer rowing",
      youtube: "https://www.youtube.com/watch?v=GbSCEJaJ3Ok",
      green:  { sets: 4, reps: "15s all out, 45s easy row",  load: "Max", rest: "—" },
      amber:  { sets: 2, reps: "15s all out, 45s easy row",  load: "Max", rest: "—" },
      red:    null,
    },
  ],

  "Lateral Cone Agility — Work + Walk Recovery": [
    {
      name: "Shuttle Run — Work + Walk Recovery",
      reason: "No cones / open space available",
      youtube: "https://www.youtube.com/watch?v=RKW4GtVZNrE",
      green:  { sets: 4, reps: "30s max effort, walk back",  load: "Max", rest: "—" },
      amber:  { sets: 2, reps: "20s effort, walk back",      load: "Mod", rest: "—" },
      red:    null,
    },
  ],

  "Assault Bike — 10s All Out + 30s Active Recovery": [
    {
      name: "Rower — 10s All Out + 30s Easy",
      reason: "No assault bike available",
      youtube: "https://www.youtube.com/watch?v=GbSCEJaJ3Ok",
      green:  { sets: 6, reps: "10s all out, 30s easy row",  load: "Max", rest: "—" },
      amber:  { sets: 4, reps: "10s all out, 30s easy row",  load: "Max", rest: "—" },
      red:    null,
    },
    {
      name: "Ski Erg — 10s All Out + 30s Easy",
      reason: "Prefer ski erg / variation",
      youtube: "https://www.youtube.com/watch?v=7fUiXf9kOGk",
      green:  { sets: 6, reps: "10s all out, 30s easy ski",  load: "Max", rest: "—" },
      amber:  { sets: 4, reps: "10s all out, 30s easy ski",  load: "Max", rest: "—" },
      red:    null,
    },
  ],

  // ── FRIDAY ───────────────────────────────────────────────────────────────────

  "Vertical Jump": [
    {
      name: "Broad Jump",
      reason: "Ceiling height / preference",
      youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      green:  { sets: 4, reps: "3",   load: "Max",     rest: "2 min" },
      amber:  { sets: 2, reps: "3",   load: "Sub-max", rest: "2 min" },
      red:    null,
    },
    {
      name: "Depth Drop",
      reason: "Reactive strength focus",
      youtube: "https://www.youtube.com/watch?v=52lE3LIsOKo",
      green:  { sets: 3, reps: "4",   load: "BW",      rest: "2 min" },
      amber:  { sets: 2, reps: "3",   load: "BW",      rest: "2 min" },
      red:    null,
    },
  ],

  "Broad Jump": [
    {
      name: "Vertical Jump",
      reason: "Space limited",
      youtube: "https://www.youtube.com/watch?v=hxldG9FX4j4",
      green:  { sets: 3, reps: "3",   load: "Max",     rest: "90s" },
      amber:  { sets: 2, reps: "3",   load: "Sub-max", rest: "90s" },
      red:    null,
    },
    {
      name: "Single Leg Hop",
      reason: "Unilateral power development",
      youtube: "https://www.youtube.com/watch?v=bBRNBSRXGDk",
      green:  { sets: 3, reps: "4ea", load: "Max",     rest: "90s" },
      amber:  { sets: 2, reps: "3ea", load: "Sub-max", rest: "90s" },
      red:    null,
    },
  ],

  "Trap Bar Deadlift": [
    {
      name: "Romanian Deadlift",
      reason: "No trap bar available",
      youtube: "https://www.youtube.com/watch?v=JCXUYuzwNrM",
      green:  { sets: 2, reps: "3",   load: "80%",   rest: "→ Jump" },
      amber:  { sets: 1, reps: "4",   load: "70%",   rest: "→ Jump" },
      red:    null,
    },
    {
      name: "Conventional Deadlift",
      reason: "No trap bar available",
      youtube: "https://www.youtube.com/watch?v=XxWcirHIwVo",
      green:  { sets: 2, reps: "3",   load: "82%",   rest: "→ Jump" },
      amber:  { sets: 1, reps: "4",   load: "72%",   rest: "→ Jump" },
      red:    null,
    },
  ],

};


// ── Top-Up Fitness Sessions ───────────────────────────────────────────────────
// Standalone 25-min sessions for fitness maintenance.
// Zone-gated: Green = all available, Amber = aerobic only, Red = none.
// Football-specific energy system training — ratios reflect match demands.

const TOPUP_SESSIONS = [

  // ── RUNNING SESSIONS ────────────────────────────────────────────────────────
  {
    id:       "run_aerobic",
    category: "running",
    title:    "Aerobic Base Intervals",
    subtitle: "1:2 Work:Rest · 25 min",
    icon:     "🏃",
    energy:   "Aerobic",
    color:    "C.green",
    zones:    ["green", "amber"],
    equipment: ["400m track or open space", "GPS watch or phone timer"],
    overview:  "Football is built on aerobic capacity. Players cover 10–13km per match with repeated high-intensity bursts — your aerobic base determines how quickly you recover between them. These intervals develop that base without accumulating excessive fatigue.",
    protocol: [
      { phase: "Warm-Up",    duration: "4 min",  detail: "Easy jog building to 60% effort. Dynamic leg swings, high knees and hip circles on the move." },
      { phase: "Work Block", duration: "18 min", detail: "6 × 2 minutes at 75–80% max HR. Recovery: 4 minutes easy walk/jog between each (1:2 ratio). Focus on nasal breathing during recovery — if you cannot breathe through your nose you went too hard." },
      { phase: "Cool-Down",  duration: "3 min",  detail: "Easy walk. Static quad, hamstring and calf stretches held 30 seconds each side." },
    ],
    coaching: "The 1:2 work:rest ratio is intentional — football aerobic work should be fully recovered before the next rep. Incomplete recovery turns this into lactate work, which is a different adaptation entirely.",
    rpe_target: { green: "6–7", amber: "5–6" },
  },

  {
    id:       "run_anaerobic",
    category: "running",
    title:    "High-Intensity Intervals",
    subtitle: "1:3 Work:Rest · 25 min",
    icon:     "⚡",
    energy:   "Anaerobic",
    color:    "#F59E0B",
    zones:    ["green"],
    equipment: ["200m straight or track", "GPS watch or phone timer"],
    overview:  "Football's decisive moments — pressing, counter-attacks, defensive recoveries — are fuelled by the anaerobic system. This session targets your lactate tolerance: your ability to sustain high outputs repeatedly across 90 minutes.",
    protocol: [
      { phase: "Warm-Up",    duration: "5 min",  detail: "Easy jog × 2 min, then 3 × 60m progressive strides building from 70% to 90%. 45 seconds walk between strides." },
      { phase: "Work Block", duration: "16 min", detail: "6 × 150m at 90–95% effort. Recovery: walk back fully — approximately 90 seconds (1:3 ratio). Effort should feel very hard but mechanically controlled. Each rep within 2 seconds of your first." },
      { phase: "Cool-Down",  duration: "4 min",  detail: "Easy jog or walk 200m. Shake out legs. Hip flexor and quad stretch held 30 seconds each side." },
    ],
    coaching: "Green zone only. The 1:3 ratio gives enough recovery to maintain quality output — cutting it short turns speed work into conditioning work. Both are valuable, but this session is about quality reps, not fatigue.",
    rpe_target: { green: "8–9", amber: null },
  },

  {
    id:       "run_speed",
    category: "running",
    title:    "Speed & Acceleration",
    subtitle: "1:6 Work:Rest · 20 min",
    icon:     "💨",
    energy:   "Speed",
    color:    "#EF4444",
    zones:    ["green"],
    equipment: ["30–40m flat surface", "Cones (optional)"],
    overview:  "Elite football is decided by explosive 5–30m efforts — pressing triggers, goal-side recoveries, final-third runs. This is pure neuromuscular speed development. Full recovery between reps is non-negotiable. Quality of movement beats volume every time.",
    protocol: [
      { phase: "Warm-Up",    duration: "6 min",  detail: "Easy jog 2 min. A-skips, B-skips, high knees, butt kicks × 20m each. 3 × 20m build-up runs at 70%, 80%, 90%." },
      { phase: "Work Block", duration: "10 min", detail: "8 × 30m maximum acceleration sprints. Start from a split-stance athletic position. Recovery: walk fully back to start — minimum 3 minutes (1:6 ratio). Every rep must be 100% intent. Stop if mechanical quality drops." },
      { phase: "Cool-Down",  duration: "4 min",  detail: "Easy walk 2 min. Hip flexor lunge stretch, hamstring stretch, calf raise × 10 each side." },
    ],
    coaching: "The 1:6 ratio is the standard for pure speed development. Football speed is not about being fit enough to sprint — it is about the CNS being fresh enough to express maximum velocity. Fatigue kills speed adaptation.",
    rpe_target: { green: "9–10", amber: null },
  },

  // ── GYM CARDIO SESSIONS ─────────────────────────────────────────────────────
  {
    id:       "gym_aerobic",
    category: "gym",
    title:    "Aerobic Machine Intervals",
    subtitle: "1:2 Work:Rest · 25 min",
    icon:     "🚴",
    energy:   "Aerobic",
    color:    "C.green",
    zones:    ["green", "amber"],
    equipment: ["Bike / Rower / Ski Erg (any one)"],
    overview:  "Machine-based aerobic intervals that build your recovery system without the impact of running. Ideal when weather, pitch access or fatigue demand a lower-impact option. Directly targets the cardiac output adaptations that help you sustain high intensity across 90 minutes.",
    protocol: [
      { phase: "Warm-Up",    duration: "4 min",  detail: "Easy pace on chosen machine. Build to 60% output. Focus on breathing rhythm and posture." },
      { phase: "Work Block", duration: "18 min", detail: "6 × 90 seconds moderate-hard effort at 75–80% max HR or RPE 6–7. Recovery: 3 minutes easy spin/row/ski (1:2 ratio). Maintain consistent output across all 6 reps." },
      { phase: "Cool-Down",  duration: "3 min",  detail: "Very easy pace on machine. Get heart rate below 120 BPM before stopping." },
    ],
    coaching: "Bike is the lowest-impact option and best on Amber days. Rower adds full-body demand and translates well to athletic movement. Ski erg taxes the upper body more — useful but harder to pace for beginners.",
    rpe_target: { green: "6–7", amber: "5–6" },
  },

  {
    id:       "gym_anaerobic",
    category: "gym",
    title:    "Assault Bike Intervals",
    subtitle: "1:3 Work:Rest · 20 min",
    icon:     "🔥",
    energy:   "Anaerobic",
    color:    "#F59E0B",
    zones:    ["green"],
    equipment: ["Assault bike / Air bike"],
    overview:  "The assault bike is one of the most brutally effective tools for football conditioning. The combination of arms and legs under full-body fatigue replicates the systemic demand of repeated high-intensity efforts in the second half of a match — when quality must be maintained despite accumulating fatigue.",
    protocol: [
      { phase: "Warm-Up",    duration: "4 min",  detail: "Easy spin at comfortable pace. Gradually build cadence. Get a light sweat before the work starts." },
      { phase: "Work Block", duration: "12 min", detail: "6 × 30 seconds at absolute maximum effort. Recovery: 90 seconds complete rest — hands and feet off (1:3 ratio). Every interval must be maximal. Aim to hit the same wattage or calorie output each round." },
      { phase: "Cool-Down",  duration: "4 min",  detail: "Easy spin to bring heart rate down. Do not stop abruptly — keep moving." },
    ],
    coaching: "The 1:3 ratio allows near-complete phosphocreatine resynthesis between efforts — this is what keeps power output high across all 6 reps. Shortening rest turns this into lactate work. Both have value, but respect the protocol.",
    rpe_target: { green: "9–10", amber: null },
  },

  {
    id:       "gym_mixed",
    category: "gym",
    title:    "Mixed Energy Circuit",
    subtitle: "Multi-ratio · 25 min",
    icon:     "💥",
    energy:   "Mixed",
    color:    "#8B5CF6",
    zones:    ["green"],
    equipment: ["Assault bike or rower", "Kettlebell (16–24kg)", "Box (40–50cm)"],
    overview:  "Football demands all three energy systems within the same 90 minutes — sustained aerobic running, repeated lactate-fuelled sprints and explosive speed-power actions. This session hits each in sequence, mimicking the physiological arc of a full match in 25 minutes.",
    protocol: [
      { phase: "Warm-Up",             duration: "4 min",  detail: "Easy row or bike 2 min. 10 × KB deadlift at light weight. 5 × box step-up each leg." },
      { phase: "Round A — Aerobic",   duration: "6 min",  detail: "3 rounds: 60 sec moderate bike or row at 70% effort / 120 sec rest (1:2 ratio). Controlled breathing, sustainable pace — this is your base." },
      { phase: "Round B — Lactate",   duration: "8 min",  detail: "4 rounds: 30 sec KB swings (heavy, explosive) / 90 sec rest (1:3 ratio). Drive the hips explosively. Every rep powerful — not just fast." },
      { phase: "Round C — Power",     duration: "4 min",  detail: "4 rounds: 10 sec maximum box jumps / 60 sec rest (1:6 ratio). Land softly, reset fully, go again. Quality over quantity." },
      { phase: "Cool-Down",           duration: "3 min",  detail: "Walk it out. Controlled breathing. Hip flexor and quad stretch." },
    ],
    coaching: "Each round has a distinct work:rest ratio — aerobic 1:2, lactate 1:3, power 1:6. Respect each ratio and you train all three systems effectively. Compress the rest and you just accumulate fatigue.",
    rpe_target: { green: "8–9", amber: null },
  },
];

const TOPUP_ENERGY_COLORS = {
  "Aerobic":    "C.green",
  "Anaerobic":  "#F59E0B",
  "Speed":      "#EF4444",
  "Mixed":      "#8B5CF6",
};

// ── QuickTimer — inline countdown used inside exercise cards ─────────────────
function QuickTimer({ secs }) {
  const [remaining, setRemaining] = useState(null); // null = not started
  const [running, setRunning]     = useState(false);
  const intervalRef               = useRef(null);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  useEffect(() => {
    if (running && remaining !== null) {
      intervalRef.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) {
            // Final buzz — rest complete
            clearInterval(intervalRef.current);
            setRunning(false);
            if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 400]);
            return 0;
          }
          // Countdown buzzes at 3, 2, 1
          if (r === 4) {
            if (navigator.vibrate) navigator.vibrate(80);
          } else if (r === 3) {
            if (navigator.vibrate) navigator.vibrate(80);
          } else if (r === 2) {
            if (navigator.vibrate) navigator.vibrate(80);
          }
          return r - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function start() {
    setRemaining(secs);
    setRunning(true);
  }

  function reset() {
    clearInterval(intervalRef.current);
    setRunning(false);
    setRemaining(null);
  }

  const done      = remaining === 0;
  const active    = remaining !== null;
  const pct       = active ? (remaining / secs) : 1;
  const countdown = running && remaining !== null && remaining <= 3 && remaining > 0;
  const col       = done ? C.green : countdown ? C.red : running ? C.amber : C.muted;
  const mins      = Math.floor((remaining || secs) / 60);
  const sec       = (remaining !== null ? remaining : secs) % 60;
  const timeStr   = `${mins}:${String(sec).padStart(2, "0")}`;

  return (
    <button onClick={active ? reset : start} style={{
      display: "flex", alignItems: "center", gap: 6,
      background: col + "18", border: `1px solid ${col}44`,
      borderRadius: 8, padding: "5px 10px", cursor: "pointer",
      flexShrink: 0, transition: "all .2s",
    }}>
      {/* Mini ring */}
      <svg width={22} height={22} style={{ flexShrink: 0 }}>
        <circle cx={11} cy={11} r={8} fill="none" stroke="#CBD5E1" strokeWidth={2.5} />
        <circle cx={11} cy={11} r={8} fill="none" stroke={col} strokeWidth={2.5}
          strokeDasharray={`${pct * 50.3} 50.3`} strokeLinecap="round"
          transform="rotate(-90 11 11)"
          style={{ transition: running ? "stroke-dasharray 1s linear" : "none" }} />
      </svg>
      <span style={{ fontSize: 11, fontWeight: 700, color: col, fontFamily: mono, minWidth: 32 }}>
        {done ? "✓" : timeStr}
      </span>
      <span style={{ fontSize: 9, color: col }}>
        {done ? "tap to reset" : active ? "tap to reset" : "start rest"}
      </span>
    </button>
  );
}

// ── Session Exercise Card ─────────────────────────────────────────────────────







function loadRPELogs() { return loadState('rpeLogs', {}); }
// ── RPE Logger ────────────────────────────────────────────────────────────────
function RPELogger({ dayKey, week, dayDesc, session }) {
  const [showSheet, setShowSheet] = useState(false);
  const key = `${new Date().toISOString().split("T")[0]}_${dayKey}`;
  const existing = loadRPELogs ? loadRPELogs()[key] : null;

  if (existing) return (
    <div style={{background:C.card,border:`1px solid ${C.green}33`,borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div>
        <div style={{fontSize:12,fontWeight:700,color:C.green}}>✓ RPE logged</div>
        <div style={{fontSize:10,color:C.text,fontFamily:mono}}>{existing.rpe}/10 · {dayDesc}</div>
      </div>
      <div style={{fontSize:24,fontWeight:900,color:C.green,fontFamily:mono}}>{existing.rpe}</div>
    </div>
  );

  return (
    <>
      <button onClick={()=>setShowSheet(true)} style={{width:"100%",padding:"13px 0",background:C.card,border:`1.5px solid ${C.border}`,borderRadius:12,color:C.muted,fontSize:13,fontWeight:700,cursor:"pointer"}}>
        Log RPE →
      </button>
      {showSheet&&(
        <>
          <div onClick={()=>setShowSheet(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:100}}/>
          <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:101,background:C.surface,borderRadius:"20px 20px 0 0",padding:"20px 20px 40px"}}>
            <div style={{width:40,height:4,background:C.border,borderRadius:2,margin:"0 auto 16px"}}/>
            <div style={{fontSize:15,fontWeight:700,color:C.text,marginBottom:4}}>How hard was that session?</div>
            <div style={{fontSize:11,color:C.text,marginBottom:16,fontFamily:mono}}>{dayDesc} · Week {week} · Rate 1–10</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8}}>
              {[1,2,3,4,5,6,7,8,9,10].map(v=>(
                <button key={v} onClick={()=>{
                  const logs = loadRPELogs ? loadRPELogs() : {};
                  logs[key]={rpe:v,dayNum:String(dayKey),week,dayDesc,session,date:new Date().toISOString()};
                  saveState("rpeLogs",logs);
                  setShowSheet(false);
                }} style={{padding:"14px 0",borderRadius:10,background:v<=3?"C.green22":v<=6?"#F59E0B22":"#EF444422",border:`1.5px solid ${v<=3?C.green:v<=6?C.amber:C.red}`,color:v<=3?C.green:v<=6?C.amber:C.red,fontSize:18,fontWeight:900,cursor:"pointer",fontFamily:mono}}>
                  {v}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

// ── Schedule Builder ──────────────────────────────────────────────────────────
function ScheduleBuilder({ days, schedule, setSchedule }) {
  const [editDay, setEditDay] = useState(null);
  const SESSION_TYPES = [
    {id:"gym1",label:"Gym",icon:"💪",desc:"Strength session",color:C.green},
    {id:"team",label:"Team",icon:"🏃",desc:"Team training",color:"#3B82F6"},
    {id:"game",label:"Game",icon:"🏉",desc:"Match day",color:C.gold},
    {id:"activation",label:"Activation",icon:"🔋",desc:"Light gym/mobility",color:"#A78BFA"},
    {id:"rest",label:"Active Recovery",icon:"😴",desc:"Full rest day",color:C.muted},
  ];
  const DAY_LABELS = {
    gym1:{label:"💪 Gym",color:C.green},gym3:{label:"💪 Gym",color:C.amber},
    team:{label:"🏃 Team",color:"#3B82F6"},game:{label:"🏉 Game",color:C.gold},
    activation:{label:"🔋 Activation",color:"#A78BFA"},rest:{label:"😴 Rest",color:C.muted},
  };
  return (
    <div>
      <h2 style={{color:C.text,margin:"0 0 6px",fontSize:20,fontWeight:700}}>Tell us your training week</h2>
      <p style={{color:C.muted,margin:"0 0 20px",fontSize:13,lineHeight:1.7}}>Set up your typical week. You can always choose differently on any given day.</p>
      <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:16}}>
        {days.map(day=>{
          const type=schedule[day]||"rest"; const info=DAY_LABELS[type]||DAY_LABELS.rest; const isEditing=editDay===day;
          return (
            <div key={day}>
              <button onClick={()=>setEditDay(isEditing?null:day)} style={{width:"100%",padding:"12px 14px",background:isEditing?C.surface:C.card,border:`1.5px solid ${isEditing?info.color:C.border}`,borderRadius:isEditing?"10px 10px 0 0":10,display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}}>
                <span style={{fontSize:13,fontWeight:700,color:C.text,fontFamily:mono,width:32}}>{day}</span>
                <span style={{flex:1,textAlign:"left",fontSize:13,fontWeight:600,color:info.color,paddingLeft:8}}>{info.label}</span>
                <span style={{fontSize:11,color:C.muted}}>{isEditing?"▲":"▼"}</span>
              </button>
              {isEditing&&(
                <div style={{background:C.interactive,border:`1.5px solid ${info.color}`,borderTop:"none",borderRadius:"0 0 10px 10px",padding:"8px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                  {SESSION_TYPES.map(st=>(
                    <button key={st.id} onClick={()=>{setSchedule(p=>({...p,[day]:st.id}));setEditDay(null);}}
                      style={{padding:"10px 8px",background:schedule[day]===st.id?st.color+"22":C.card,border:`1.5px solid ${schedule[day]===st.id?st.color:C.border}`,borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:16}}>{st.icon}</span>
                      <div style={{textAlign:"left"}}>
                        <div style={{fontSize:11,fontWeight:700,color:schedule[day]===st.id?st.color:C.text}}>{st.label}</div>
                        <div style={{fontSize:9,color:C.muted}}>{st.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:"12px 14px"}}>
        <p style={{margin:0,fontSize:11,color:C.muted,lineHeight:1.6}}>This is your guide — not a lock. You choose your session every day based on how you feel.</p>
      </div>
    </div>
  );
}

// ── ExerciseCard ──────────────────────────────────────────────────────────────
function ExerciseCard({ ex, zone, weekNum, isGrouped, isLastInBlock, bodyWeight }) {
  const [open, setOpen] = useState(false);
  const [sets, setSets] = useState([]);
  const [showSwap, setShowSwap] = useState(false);
  const [swappedTo, setSwappedTo] = useState(null);
  const [showDemoImg, setShowDemoImg] = useState(null);
  const activeEx = swappedTo || ex;
  const alternatives = EXERCISE_ALTERNATIVES[ex.name] || [];
  const isSwapped = !!swappedTo;
  const prescription = activeEx[zone];

  const isBWLoad = prescription && (
    prescription.load==="BW"||prescription.load==="BW+"||
    prescription.load==="Max"||prescription.load==="Sub-max"||prescription.load==="—"
  );
  const isSpeedLoad = prescription && (
    String(prescription.reps||"").includes("m") &&
    !String(prescription.reps||"").includes("min") &&
    parseInt(prescription.sets) >= 4
  );
  const autoWeight = isBWLoad && bodyWeight ? String(bodyWeight) : "";

  useEffect(() => {
    if (prescription) {
      setSets(Array.from({length:prescription.sets},()=>({reps:"",weight:autoWeight,done:false})));
    } else setSets([]);
  }, [zone, activeEx.name]);

  const allLogged = sets.length>0 && sets.every(s=>isSpeedLoad?s.done:isBWLoad?s.reps:s.reps&&s.weight);
  const volume = sets.reduce((sum,s)=>{
    const w=parseFloat(s.weight)||0; const r=parseFloat(s.reps)||0; return sum+(w*r);
  },0);
  const noRest = isGrouped && !isLastInBlock;
  const showTimer = !noRest && (!isGrouped||isLastInBlock);

  if (!prescription) return null;

  function handleSwap(alt){setSwappedTo(alt);setShowSwap(false);setSets([]);}
  function handleRestore(){setSwappedTo(null);setShowSwap(false);setSets([]);}

  return (
    <div style={{background:C.card,border:`1.5px solid ${allLogged?C.green+"55":C.border}`,borderRadius:14,overflow:"hidden",transition:"border-color .3s"}}>
      <button onClick={()=>setOpen(o=>!o)} style={{width:"100%",padding:"14px 16px",background:"transparent",border:"none",display:"flex",alignItems:"flex-start",gap:12,cursor:"pointer",textAlign:"left"}}>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
            <p style={{margin:0,fontSize:15,fontWeight:700,color:C.text}}>{activeEx.name}</p>
            {allLogged&&<span style={{fontSize:12,color:C.green}}>✓</span>}
            {isSwapped&&<span style={{fontSize:9,fontWeight:700,color:C.amber,background:C.amber+"18",border:`1px solid ${C.amber}44`,borderRadius:4,padding:"1px 5px",fontFamily:mono}}>SWAP</span>}
          </div>
          <div style={{fontSize:11,color:C.text,fontFamily:mono}}>
            {prescription.sets} × {prescription.reps} · {prescription.load}{prescription.rest?` · ${prescription.rest}`:""}
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
          {allLogged&&volume>0&&<span style={{fontSize:11,fontWeight:700,color:C.green,fontFamily:mono}}>{Math.round(volume).toLocaleString()} kg</span>}
          <button onClick={e=>{e.stopPropagation();setShowDemoImg(EXERCISE_IMAGES[(activeEx.name||ex.name)]||null);}}
            style={{fontSize:12,color:C.green,textDecoration:"none",background:C.greenLt,border:`1px solid ${C.green}44`,borderRadius:8,padding:"5px 10px",fontWeight:600,cursor:"pointer"}}>
            🖼 Demo
          </button>
          <span style={{fontSize:11,color:C.muted}}>{open?"▲":"▼"}</span>
        </div>
      </button>

      {alternatives.length>0&&(
        <div style={{borderTop:`1px solid ${C.border}`}}>
          <button onClick={e=>{e.stopPropagation();setShowSwap(true);}} style={{width:"100%",padding:"11px 16px",background:isSwapped?C.amber+"11":"transparent",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:15}}>⇄</span>
            <span style={{fontSize:12,fontWeight:600,color:isSwapped?C.amber:C.muted}}>
              {isSwapped?`Using: ${activeEx.name}`:"Can't do this exercise? Swap it"}
            </span>
          </button>
        </div>
      )}

      {open&&(
        <div style={{borderTop:`1px solid ${C.border}`,padding:"14px 16px"}}>
          {!isSpeedLoad&&(
            <div style={{display:"grid",gridTemplateColumns:isBWLoad?"36px 1fr 36px":"36px 1fr 1fr 36px",gap:"6px 10px",marginBottom:8}}>
              {(isBWLoad?["SET","REPS","✓"]:["SET","WEIGHT","REPS","✓"]).map(h=>(
                <div key={h} style={{fontSize:9,color:C.text,fontFamily:mono,textAlign:"center"}}>{h}</div>
              ))}
            </div>
          )}
          {sets.map((s,si)=>{
            const done=isSpeedLoad?s.done:isBWLoad?!!s.reps:!!(s.reps&&s.weight);
            if(isSpeedLoad) return (
              <button key={si} onClick={()=>setSets(p=>p.map((x,i)=>i===si?{...x,done:!x.done}:x))}
                style={{width:"100%",marginBottom:6,padding:"12px 16px",background:done?C.green+"18":C.surface,border:`1.5px solid ${done?C.green:C.border}`,borderRadius:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontSize:13,fontWeight:700,fontFamily:mono,color:done?C.green:C.muted}}>Rep {si+1} · {prescription.reps}</span>
                <span style={{fontSize:22,color:done?C.green:C.border}}>{done?"✓":"○"}</span>
              </button>
            );
            if(isBWLoad) return (
              <div key={si} style={{display:"grid",gridTemplateColumns:"36px 1fr 36px",gap:"6px 10px",marginBottom:6}}>
                <div style={{textAlign:"center",fontSize:14,fontWeight:700,fontFamily:mono,color:done?C.green:C.muted}}>{si+1}</div>
                <input type="number" placeholder={`${prescription.reps} reps`} value={s.reps}
                  onChange={e=>setSets(p=>p.map((x,i)=>i===si?{...x,reps:e.target.value}:x))}
                  style={{background:C.interactive,border:`1.5px solid ${done?C.green:C.border}`,borderRadius:8,padding:"9px",fontSize:15,fontFamily:mono,fontWeight:700,color:C.text,textAlign:"center",outline:"none",width:"100%",boxSizing:"border-box"}}/>
                <div style={{textAlign:"center",fontSize:16,color:done?C.green:C.border}}>{done?"✓":"○"}</div>
              </div>
            );
            return (
              <div key={si} style={{display:"grid",gridTemplateColumns:"36px 1fr 1fr 36px",gap:"6px 10px",marginBottom:6}}>
                <div style={{textAlign:"center",fontSize:14,fontWeight:700,fontFamily:mono,color:done?C.green:C.muted}}>{si+1}</div>
                <input type="number" placeholder="kg" value={s.weight}
                  onChange={e=>setSets(p=>p.map((x,i)=>i===si?{...x,weight:e.target.value}:x))}
                  style={{background:C.interactive,border:`1.5px solid ${done?C.green:C.border}`,borderRadius:8,padding:"9px",fontSize:15,fontFamily:mono,fontWeight:700,color:C.text,textAlign:"center",outline:"none",width:"100%",boxSizing:"border-box"}}/>
                <input type="number" placeholder={`${prescription.reps}`} value={s.reps}
                  onChange={e=>setSets(p=>p.map((x,i)=>i===si?{...x,reps:e.target.value}:x))}
                  style={{background:C.interactive,border:`1.5px solid ${done?C.green:C.border}`,borderRadius:8,padding:"9px",fontSize:15,fontFamily:mono,fontWeight:700,color:C.text,textAlign:"center",outline:"none",width:"100%",boxSizing:"border-box"}}/>
                <div style={{textAlign:"center",fontSize:16,color:done?C.green:C.border}}>{done?"✓":"○"}</div>
              </div>
            );
          })}
          {showTimer&&prescription.rest&&prescription.rest!=="—"&&/\d+\s*(min|s)\b/.test(prescription.rest)&&(
            <div style={{marginTop:8}}><QuickTimer restLabel={prescription.rest} zone={zone}/></div>
          )}
        </div>
      )}

      {showDemoImg&&(
        <>
          <div onClick={()=>setShowDemoImg(null)}
            style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20}}
            >
            <div style={{width:"100%",maxWidth:480,background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 8px 40px rgba(0,0,0,0.4)"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:`1px solid ${C.border}`}}>
                <span style={{fontSize:13,fontWeight:700,color:C.text}}>{(swappedTo||ex).name}</span>
                <button onClick={()=>setShowDemoImg(null)}
                  style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:C.muted,lineHeight:1}}>✕</button>
              </div>
              <img src={showDemoImg} alt={(swappedTo||ex).name}
                style={{width:"100%",display:"block"}}/>
            </div>
          </div>
        </>
      )}
        <>
          <div onClick={()=>setShowSwap(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:100}}/>
          <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:101,background:C.surface,borderRadius:"20px 20px 0 0",padding:"0 20px 40px",maxHeight:"85vh",overflowY:"auto"}}>
            <div style={{width:40,height:4,background:C.border,borderRadius:2,margin:"14px auto 20px"}}/>
            <div style={{fontSize:15,fontWeight:700,color:C.text,marginBottom:4}}>Swap exercise</div>
            {isSwapped&&(
              <button onClick={handleRestore} style={{width:"100%",padding:"14px 16px",marginBottom:10,background:C.green+"18",border:`1.5px solid ${C.green}44`,borderRadius:12,cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"left"}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:C.green+"22",border:`1.5px solid ${C.green}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:16}}>↩</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:C.green}}>Restore original</div>
                  <div style={{fontSize:11,color:C.muted}}>{ex.name}</div>
                </div>
              </button>
            )}
            {alternatives.map((alt,i)=>{
              const altPx=alt[zone]; const isSel=swappedTo?.name===alt.name;
              return (
                <button key={i} onClick={()=>altPx&&handleSwap(alt)} style={{width:"100%",padding:"14px 16px",marginBottom:8,background:isSel?C.green+"18":C.card,border:`1.5px solid ${isSel?C.green:C.border}`,borderRadius:12,cursor:altPx?"pointer":"default",display:"flex",alignItems:"center",gap:12,textAlign:"left",opacity:altPx?1:0.45}}>
                  <div style={{width:36,height:36,borderRadius:"50%",flexShrink:0,background:isSel?C.green+"22":C.surface,border:`1.5px solid ${isSel?C.green:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{isSel?"✓":"↔"}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:700,color:isSel?C.green:C.text}}>{alt.name}</div>
                    <div style={{fontSize:11,color:C.muted,marginTop:2}}>{alt.reason}</div>
                    {altPx?<div style={{fontSize:10,color:C.text,fontFamily:mono,marginTop:3}}>{altPx.sets} × {altPx.reps} · {altPx.load}</div>
                     :<div style={{fontSize:10,color:C.muted,fontStyle:"italic",marginTop:2}}>Not available on {zone} day</div>}
                  </div>
                  {alt.youtube&&altPx&&<a href={alt.youtube} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} style={{fontSize:14,color:"#3B82F6",textDecoration:"none",flexShrink:0}}>📹</a>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ── Session Content ───────────────────────────────────────────────────────────
// Exercises that are always machine/cable weighted — override BW prescription
const MACHINE_EXERCISES = new Set([
  "Lat Pull Down", "Lat Pulldown", "Cable Row", "Seated Cable Row",
  "Cable Pull Down", "Assisted Pull Up", "Assisted Chin Up",
]);

const NO_WEIGHT_EXERCISES = new Set([
  // Sprints & running
  "Hill Sprint", "Loaded Sprint", "Short Sprint 10–20m", "Sprint build-up 20m",
  "Prowler Sprint", "Rower Sprint", "Ski Erg Sprint", "Assault Bike Sprint",
  "Assault Bike — All Out", "Assault bike — 4×15s", "Back-pedal + sprint",
  "Bike — 6×10s sprints",
  // Jumps & plyos
  "Box Jump", "Box Jump (post-lift)", "Box jump — low", "Broad Jump", "Broad jump",
  "Depth Drop", "Jump Squat", "Jump squat", "Squat Jump", "Single Leg Hop",
  "Vertical Jump", "Vertical jump", "Jump + stick landing",
  // Med ball (no external load)
  "Med Ball Rotational Slam", "Med ball slam",
  // BW cardio
  "Assault Bike — 10s All Out + 30s Active Recovery", "Bike Tabata",
  "Sled Push — 30m + 60m Jog Recovery", "Lateral Cone Agility — Work + Walk Recovery",
]);

// ── Exercise Substitutions by Experience Level ────────────────────────────────
// Novice gets simpler movement patterns, advanced gets full competition lifts
const EXERCISE_SUBS = {
  "Power Clean / Hang Clean": {
    novice:       { name: "BB 1/4 Deadlift with Shrug", youtube: "https://www.youtube.com/results?search_query=bb+quarter+deadlift+shrug+olympic+clean+progression" },
    intermediate: { name: "Hang Clean",              youtube: "https://www.youtube.com/results?search_query=hang+clean+technique" },
    advanced:     { name: "Power Clean",             youtube: "https://www.youtube.com/results?search_query=power+clean+technique" },
  },
const EXERCISE_SUBS = {
  "Power Clean / Hang Clean": {
    novice:       { name: "DB Power Clean",            youtube: "https://www.youtube.com/watch?v=yOiFeHhTf1A" },
    intermediate: { name: "Hang Clean",                youtube: "https://www.youtube.com/watch?v=yOiFeHhTf1A" },
    advanced:     { name: "Power Clean",               youtube: "https://www.youtube.com/watch?v=yOiFeHhTf1A" },
  },
  "Front Squat": {
    novice:       { name: "Goblet Squat",              youtube: "https://www.youtube.com/watch?v=MxsFDhcyFyE" },
    intermediate: { name: "Front Squat",               youtube: "https://www.youtube.com/watch?v=m4ytaCJZpl0" },
    advanced:     { name: "Front Squat",               youtube: "https://www.youtube.com/watch?v=m4ytaCJZpl0" },
  },
  "Romanian Deadlift": {
    novice:       { name: "DB Romanian Deadlift",      youtube: "https://www.youtube.com/watch?v=hCDzSR6bW10" },
    intermediate: { name: "Romanian Deadlift",         youtube: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
    advanced:     { name: "Romanian Deadlift",         youtube: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
  },
  "Back Squat": {
    novice:       { name: "Goblet Squat",              youtube: "https://www.youtube.com/watch?v=MxsFDhcyFyE" },
    intermediate: { name: "Back Squat",                youtube: "https://www.youtube.com/watch?v=bEv6CCg2BC8" },
    advanced:     { name: "Back Squat",                youtube: "https://www.youtube.com/watch?v=bEv6CCg2BC8" },
  },
  "Trap Bar Deadlift": {
    novice:       { name: "DB Deadlift",               youtube: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
    intermediate: { name: "Trap Bar Deadlift",         youtube: "https://www.youtube.com/watch?v=SuB16OBI9WE" },
    advanced:     { name: "Trap Bar Deadlift",         youtube: "https://www.youtube.com/watch?v=SuB16OBI9WE" },
  },
  "Pull Ups / Chins": {
    novice:       { name: "Lat Pulldown",              youtube: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
    intermediate: { name: "Pull Ups / Chins",          youtube: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
    advanced:     { name: "Weighted Pull Ups",         youtube: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
  },
  "Barbell Hip Thrust": {
    novice:       { name: "Glute Bridge",              youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE" },
    intermediate: { name: "DB Hip Thrust",             youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE" },
    advanced:     { name: "Barbell Hip Thrust",        youtube: "https://www.youtube.com/watch?v=Zp26q4BY5HE" },
  },
  "Bulgarian Split Squat": {
    novice:       { name: "Reverse Lunge",             youtube: "https://www.youtube.com/watch?v=xrPteyQLGAo" },
    intermediate: { name: "Bulgarian Split Squat",     youtube: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
    advanced:     { name: "Bulgarian Split Squat",     youtube: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
  },
  "Nordic Hamstring Curl": {
    novice:       { name: "Slider Hamstring Curl",     youtube: "https://www.youtube.com/watch?v=d8AAPMa8Pf0" },
    intermediate: { name: "Nordic Hamstring Curl",     youtube: "https://www.youtube.com/watch?v=d8AAPMa8Pf0" },
    advanced:     { name: "Nordic Hamstring Curl",     youtube: "https://www.youtube.com/watch?v=d8AAPMa8Pf0" },
  },
  "Single Arm DB Shoulder Press": {
    novice:       { name: "DB Shoulder Press",       youtube: "https://www.youtube.com/results?search_query=dumbbell+shoulder+press+technique" },
    intermediate: { name: "Single Arm DB Shoulder Press",          youtube: "https://www.youtube.com/results?search_query=overhead+press+technique" },
    advanced:     { name: "Single Arm DB Shoulder Press",          youtube: "https://www.youtube.com/results?search_query=overhead+press+technique" },
  },
  "Back Squat": {
    novice:       { name: "Box Squat",               youtube: "https://www.youtube.com/results?search_query=box+squat+technique+beginner" },
    intermediate: { name: "Back Squat",              youtube: "https://www.youtube.com/results?search_query=back+squat+technique" },
    advanced:     { name: "Back Squat",              youtube: "https://www.youtube.com/results?search_query=back+squat+technique" },
  },
  "Barbell Hip Thrust": {
    novice:       { name: "Bodyweight Hip Thrust",   youtube: "https://www.youtube.com/results?search_query=hip+thrust+bodyweight+beginner" },
    intermediate: { name: "Barbell Hip Thrust",      youtube: "https://www.youtube.com/results?search_query=barbell+hip+thrust+technique" },
    advanced:     { name: "Barbell Hip Thrust",      youtube: "https://www.youtube.com/results?search_query=barbell+hip+thrust+technique" },
  },
};

// Apply substitution based on user level — returns {name, youtube}
function getExerciseSub(originalName, user) {
  const level = user?.strengthLevel || "intermediate";
  const sub = EXERCISE_SUBS[originalName];
  if (!sub) return null; // no substitution defined
  return sub[level] || sub["intermediate"] || null;
}


// ── ExerciseRowInSet ─────────────────────────────────────────────────────────
function ExerciseRowInSet({ ex, ei, zone, log, user, isLast, currentSet, getSetData, markDone, undoDone }) {
  // ALL hooks must come first - no conditionals before hooks
  const [localWeight, setLocalWeight] = useState("");
  const [localReps, setLocalReps] = useState("");
  const [editReps, setEditReps] = useState(false);

  // Now safe to derive values and guard
  const p = ex[zone];
  if (!p) return null;

  // Apply exercise substitution based on experience level
  const _sub = getExerciseSub(ex.name, user);
  const displayName = (_sub && _sub.name !== ex.name) ? _sub.name : ex.name;
  const displayYoutube = _sub ? _sub.youtube : (ex.youtube || "#");
  const isSubstituted = _sub && _sub.name !== ex.name;

  // Machine/cable exercises always show kg input regardless of BW prescription
  const isMachine = MACHINE_EXERCISES.has(displayName);
  const isBW = !isMachine && (
    NO_WEIGHT_EXERCISES.has(ex.name) || NO_WEIGHT_EXERCISES.has(displayName) ||
    p.load==="BW"||p.load==="BW+"||p.load==="—"||
    p.load==="Max"||p.load==="Sub-max"||p.load==="Assist"||p.load==="Band"||
    p.load==="Sprint"||p.load==="Effort"||p.load==="Distance"
  );
  const isEa = String(p.reps||"").includes("ea");
  const sd = getSetData(ex.name, currentSet);
  const done = sd.done;

  const bwMults = getBWMultipliers(user);
  const bwMult = bwMults[ex.name];
  const zoneIdx = zone==="green"?0:zone==="amber"?1:2;
  const bw = log?.bodyWeight ? parseFloat(log.bodyWeight) : null;
  const targetKg = bwMult&&bw ? Math.round(bw*bwMult[zoneIdx]/2.5)*2.5 : null;
  const isHeavy = HEAVY_LIFTS.has(ex.name);

  // Exercises where set 1 = empty bar (20kg) not BW
  const BARBELL_EXERCISES = new Set([
    "Power Clean / Hang Clean","Hang Clean","Power Clean",
    "Front Squat","Back Squat","Deadlift","Trap Bar Deadlift",
    "Romanian Deadlift","Single Arm DB Shoulder Press",
    "Barbell Hip Thrust","Barbell Row",
  ]);
  const isBarbellLift = BARBELL_EXERCISES.has(ex.name);
  // Med Ball exercises - set 1 = 3-4kg technique
  const isMedBall = ex.name.includes("Med Ball");

  let suggestedW = targetKg ? String(targetKg) : "";
  if (isHeavy && targetKg) {
    if (currentSet===0) suggestedW = isMedBall ? "3" : isBarbellLift ? "20" : String(Math.round(targetKg*0.40/2.5)*2.5);
    else if (currentSet===1) suggestedW = String(Math.round(targetKg*0.60/2.5)*2.5);
    else if (currentSet===2) suggestedW = String(Math.round(targetKg*0.80/2.5)*2.5);
    else suggestedW = String(targetKg);
  }

  // Pre-fill weight input with suggested value
  useEffect(() => {
    if (!isBW && suggestedW && !localWeight) {
      setLocalWeight(suggestedW);
    }
  }, [suggestedW]);

  return (
    <div style={{marginBottom:isLast?0:14}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
        <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                <div style={{fontSize:13,fontWeight:700,color:done?C.green:C.text}}>{displayName}</div>
                {isSubstituted && <div style={{fontSize:8,color:C.amber,fontFamily:mono,background:C.amber+"22",border:`1px solid ${C.amber}44`,borderRadius:4,padding:"1px 5px"}}>SUB</div>}
              </div>
        <button onClick={e=>{e.stopPropagation();setShowDemoImg(EXERCISE_IMAGES[displayName]||null);}}
          style={{fontSize:10,color:C.green,background:C.greenLt,border:`1px solid ${C.green}44`,borderRadius:6,padding:"3px 8px",cursor:"pointer",fontWeight:600}}>
          Demo
        </button>
      </div>
      <div style={{fontSize:11,color:C.muted,marginBottom:6}}>
        {p.sets}×{p.reps}{isEa?" each side":""}{p.load&&p.load!=="—"?` · ${p.load}`:""}{p.rest?` · ${p.rest}`:""}
      </div>
      {!isBW && targetKg && (
        <div style={{background:C.interactive,borderRadius:8,padding:"6px 10px",marginBottom:8,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{fontSize:9,color:C.text,fontFamily:"monospace"}}>
            {isHeavy&&currentSet===0?(isMedBall?"TECHNIQUE · 3kg":isBarbellLift?"TECHNIQUE · 20kg bar":"WARM-UP · 40%"):
             isHeavy&&currentSet===1?`BUILD-UP · 60% = ${Math.round(targetKg*0.60/2.5)*2.5}kg`:
             isHeavy&&currentSet===2?`BUILD-UP · 80% = ${Math.round(targetKg*0.80/2.5)*2.5}kg`:
             `TARGET · ${bwMult[zoneIdx]}×BW = ${targetKg}kg`}
          </div>
          <div style={{fontSize:13,fontWeight:900,color:C.green,fontFamily:"monospace"}}>
            {isHeavy&&currentSet===0?"BW":suggestedW+"kg"}
          </div>
        </div>
      )}
      <div style={{display:"grid",gridTemplateColumns:isBW?"1fr 36px":"1fr 1fr 36px",gap:"6px 8px"}}>
        {!isBW && (
          <input type="number" placeholder="kg" value={localWeight}
            onChange={e=>setLocalWeight(e.target.value)}
            style={{background:C.interactive,border:`1.5px solid ${done?C.green:C.border}`,borderRadius:8,padding:"9px",fontSize:15,fontFamily:"monospace",fontWeight:700,color:C.text,textAlign:"center",outline:"none",width:"100%",boxSizing:"border-box"}}/>
        )}
        <div style={{position:"relative"}}>
          {editReps ? (
            <input type="number" placeholder={String(p.reps)} value={localReps} autoFocus
              onBlur={e=>{if(!e.target.value)setEditReps(false);}}
              onChange={e=>setLocalReps(e.target.value)}
              style={{background:C.interactive,border:`1.5px solid ${C.amber}`,borderRadius:8,padding:"9px",fontSize:15,fontFamily:"monospace",fontWeight:700,color:C.text,textAlign:"center",outline:"none",width:"100%",boxSizing:"border-box"}}/>
          ) : (
            <button
              onClick={()=>{
                if(!done) markDone(ex.name,currentSet,localReps||String(p.reps),isBW?"BW":localWeight||suggestedW);
                else undoDone(ex.name,currentSet);
              }}
              onDoubleClick={()=>setEditReps(true)}
              style={{width:"100%",padding:"9px 4px",background:done?(C.green+"22"):C.surface,border:`1.5px solid ${done?C.green:C.border}`,borderRadius:8,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:40}}>
              {done ? <>
                <div style={{fontSize:13,fontWeight:800,color:C.green,fontFamily:"monospace"}}>{localReps||p.reps}</div>
                <div style={{fontSize:8,color:C.green,fontFamily:"monospace"}}>{isEa?"ea side ✓":"reps ✓"}</div>
              </> : <>
                <div style={{fontSize:13,fontWeight:700,color:C.text,fontFamily:"monospace"}}>{p.reps}</div>
                <div style={{fontSize:8,color:C.text,fontFamily:"monospace"}}>{isEa?"each side":"tap to log"}</div>
              </>}
            </button>
          )}
        </div>
        <div style={{textAlign:"center",fontSize:16,color:done?C.green:C.border,paddingTop:10}}>{done?"✓":"○"}</div>
      </div>
    </div>
  );
}

// ── TriSetView ────────────────────────────────────────────────────────────────
function TriSetView({ block, activeExs, zone, week, log, user, isActive, isComplete, onComplete, onExpand }) {
  const col = zoneColor(zone);
  const totalSets = activeExs[0]?.[zone] ? parseInt(activeExs[0][zone].sets)||3 : 3;
  const [currentSet, setCurrentSet] = useState(0);
  const [completedSets, setCompletedSets] = useState({});
  const [timerSecs, setTimerSecs] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);

  function getSetData(exName, setIdx) {
    return completedSets[exName+"-"+setIdx] || {reps:"",weight:"",done:false};
  }
  function markDone(exName, setIdx, reps, weight) {
    setCompletedSets(prev=>({...prev,[exName+"-"+setIdx]:{reps,weight,done:true}}));
    const kg = parseFloat(weight);
    if (kg>0 && weight!=="BW") {
      const today = new Date().toISOString().split("T")[0];
      const prs = JSON.parse(localStorage.getItem("liftPRs")||"{}");
      if (!prs[exName]||kg>parseFloat(prs[exName].weight||0)) {
        prs[exName]={weight:kg,date:today};
        localStorage.setItem("liftPRs",JSON.stringify(prs));
      }
    }
  }
  function undoDone(exName, setIdx) {
    setCompletedSets(prev=>({...prev,[exName+"-"+setIdx]:{reps:"",weight:"",done:false}}));
  }

  const allDoneThisSet = activeExs.every(ex=>getSetData(ex.name,currentSet).done);
  const allDoneAllSets = activeExs.every(ex=>
    Array.from({length:totalSets},(_,i)=>i).every(si=>getSetData(ex.name,si).done)
  );

  function getRestSecs() {
    const rest = String(activeExs[0]?.[zone]?.rest||"2 min");
    if(rest==="—") return 0;
    const m=rest.match(/(\d+)\s*min/); if(m) return parseInt(m[1])*60;
    const s=rest.match(/^(\d+)s$/); if(s) return parseInt(s[1]);
    // Non-time descriptive rest (e.g. "30m easy jog + back") — no timer
    if(!/^\d+\s*(min|s)\b/.test(rest)) return 0;
    return 120;
  }

  useEffect(()=>{
    if(allDoneThisSet&&!allDoneAllSets){
      const secs=getRestSecs();
      if(secs>0){setTimerSecs(secs);setTimerRunning(true);}
    } else {
      clearInterval(timerRef.current); setTimerRunning(false); setTimerSecs(null);
    }
  },[allDoneThisSet,currentSet]);

  useEffect(()=>{
    if(timerRunning&&timerSecs!==null){
      timerRef.current=setInterval(()=>{
        setTimerSecs(s=>{
          if(s<=1){clearInterval(timerRef.current);setTimerRunning(false);return 0;}
          return s-1;
        });
      },1000);
    }
    return ()=>clearInterval(timerRef.current);
  },[timerRunning]);

  if(isComplete) return (
    <div style={{marginBottom:12,background:C.green+"11",border:`1.5px solid ${C.green}`,borderRadius:14,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div>
        <div style={{fontSize:10,fontWeight:700,color:C.green,fontFamily:"monospace",letterSpacing:2}}>{block.label}</div>
        <div style={{fontSize:11,color:C.text,marginTop:2}}>{totalSets} sets complete</div>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <button onClick={onExpand} style={{fontSize:11,color:C.muted,background:"transparent",border:`1px solid ${C.border}`,borderRadius:8,padding:"4px 10px",cursor:"pointer"}}>Edit</button>
        <div style={{fontSize:18,color:C.green}}>✓</div>
      </div>
    </div>
  );

  if(!isActive) return (
    <div onClick={onExpand} style={{marginBottom:12,background:C.card,border:`1.5px solid ${C.border}`,borderRadius:14,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",opacity:0.6,cursor:"pointer"}}>
      <div>
        <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:"monospace",letterSpacing:2}}>{block.label}</div>
        <div style={{fontSize:11,color:C.text,marginTop:2}}>{block.subtitle||""}</div>
      </div>
      <div style={{fontSize:11,color:C.text}}>Tap to open</div>
    </div>
  );

  const setTabs = Array.from({length:totalSets},(_,i)=>i);

  return (
    <div style={{marginBottom:20}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <div>
          <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:"monospace",letterSpacing:2}}>{block.label}</div>
          {block.subtitle && <div style={{fontSize:11,color:C.text,marginTop:2}}>{block.subtitle}</div>}
          {block.note && (
            <div style={{display:"flex",alignItems:"flex-start",gap:6,marginTop:6,background:C.amberLt,borderRadius:8,padding:"6px 10px"}}>
              <span style={{fontSize:13}}>🚶</span>
              <div style={{fontSize:11,color:C.amberDk,lineHeight:1.5,fontWeight:500}}>{block.note}</div>
            </div>
          )}
        </div>
        {allDoneAllSets && <div style={{fontSize:11,fontWeight:700,color:C.green}}>Complete ✓</div>}
      </div>

      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {setTabs.map(si=>{
          const setDone=activeExs.every(ex=>getSetData(ex.name,si).done);
          const isCur=si===currentSet;
          return (
            <button key={si} onClick={()=>setCurrentSet(si)}
              style={{flex:1,padding:"6px 4px",borderRadius:8,cursor:"pointer",textAlign:"center",
                background:setDone?(C.green+"22"):isCur?C.surface:C.card,
                border:`1.5px solid ${setDone?C.green:isCur?C.text:C.border}`,
                fontSize:11,fontWeight:700,color:setDone?C.green:isCur?C.text:C.muted,fontFamily:"monospace"}}>
              {setDone?`Set ${si+1} ✓`:`Set ${si+1}`}
            </button>
          );
        })}
      </div>

      <div style={{background:C.card,borderRadius:14,padding:"14px 16px",marginBottom:10}}>
        <div style={{fontSize:9,color:C.text,fontFamily:"monospace",letterSpacing:2,marginBottom:10}}>
          SET {currentSet+1} OF {totalSets}
        </div>
        {activeExs.map((ex,ei)=>(
          <ExerciseRowInSet key={ex.name+"-set-"+currentSet}
            ex={ex} ei={ei} zone={zone} log={log} user={user}
            isLast={ei===activeExs.length-1}
            currentSet={currentSet} getSetData={getSetData}
            markDone={markDone} undoDone={undoDone}/>
        ))}
      </div>

      {allDoneThisSet && !allDoneAllSets && timerSecs!==null && (
        <div style={{marginBottom:10,background:timerSecs===0?(C.green+"22"):C.card,
          border:`1.5px solid ${timerSecs===0?C.green:timerSecs<10?C.red:C.amber}`,
          borderRadius:14,padding:"16px",textAlign:"center"}}>
          <div style={{fontSize:9,color:C.text,fontFamily:"monospace",letterSpacing:2,marginBottom:4}}>
            {timerSecs===0?"REST COMPLETE":"REST TIMER"}
          </div>
          <div style={{fontSize:48,fontWeight:900,fontFamily:"monospace",lineHeight:1,marginBottom:8,
            color:timerSecs===0?C.green:timerSecs<10?C.red:timerSecs<30?C.amber:C.text}}>
            {Math.floor(timerSecs/60)}:{String(timerSecs%60).padStart(2,"0")}
          </div>
          {timerSecs>0
            ? <button onClick={()=>{clearInterval(timerRef.current);setTimerRunning(false);setTimerSecs(0);}}
                style={{padding:"6px 16px",background:"transparent",border:`1px solid ${C.border}`,borderRadius:8,color:C.muted,fontSize:11,cursor:"pointer"}}>
                Skip rest
              </button>
            : <button onClick={()=>setCurrentSet(s=>s+1)}
                style={{padding:"10px 24px",background:C.green,border:"none",borderRadius:10,color:"#fff",fontSize:14,fontWeight:800,cursor:"pointer"}}>
                Next Set →
              </button>
          }
        </div>
      )}

      <div style={{display:"flex",gap:10,alignItems:"center"}}>
        {currentSet>0 && (
          <button onClick={()=>setCurrentSet(s=>s-1)}
            style={{padding:"12px 16px",background:C.interactive,border:`1.5px solid ${C.green}55`,borderRadius:12,color:C.text,fontSize:14,cursor:"pointer"}}>
            ← Back
          </button>
        )}
        <div style={{flex:1}}/>
        {allDoneThisSet && currentSet<totalSets-1 && timerSecs===null && (
          <button onClick={()=>setCurrentSet(s=>s+1)}
            style={{padding:"12px 20px",background:C.green,border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:800,cursor:"pointer"}}>
            Next Set →
          </button>
        )}
        {allDoneAllSets && (
          <button onClick={()=>{
            const today=new Date().toISOString().split("T")[0];
            const existing=JSON.parse(localStorage.getItem("volume_"+today)||"{}");
            activeExs.forEach(ex=>{
              const p=ex[zone]; if(!p) return;
              let kg=0;
              Array.from({length:totalSets},(_,i)=>{
                const d=getSetData(ex.name,i);
                const w=parseFloat(d.weight)||0;
                const r=parseInt(d.reps)||parseInt(p.reps)||0;
                if(w>0) kg+=w*r;
              });
              if(kg>0) existing[ex.name]=(existing[ex.name]||0)+kg;
            });
            localStorage.setItem("volume_"+today,JSON.stringify(existing));
            const sessions=JSON.parse(localStorage.getItem("sessionVolume")||"[]");
            const total=Object.values(existing).reduce((a,b)=>a+b,0);
            const entry=sessions.find(s=>s.date===today)||{date:today,totalKg:0};
            entry.totalKg=total; entry.exercises=existing;
            const updated=[...sessions.filter(s=>s.date!==today),entry].sort((a,b)=>a.date.localeCompare(b.date)).slice(-30);
            localStorage.setItem("sessionVolume",JSON.stringify(updated));
            onComplete();
          }} style={{padding:"12px 20px",background:C.green,border:"none",borderRadius:12,color:"#fff",fontSize:13,fontWeight:800,cursor:"pointer"}}>
            Block Complete ✓ →
          </button>
        )}
      </div>
    </div>
  );
}


function SessionContent({ dayKey, zone, log, week, user }) {
  const col = zoneColor(zone);
  const [activeBlock, setActiveBlock] = useState(0);
  const [completedBlocks, setCompletedBlocks] = useState(()=>new Set());

  function onBlockComplete(bi, total) {
    setCompletedBlocks(prev=>new Set([...(prev instanceof Set?prev:[]),bi]));
    if(bi+1<total) setActiveBlock(bi+1);
  }
  // dayKey is now a day name ("Mon","Tue" etc) - map to DAY_CYCLE key via schedule
  const SCHED_TO_DCKEY = {"gym1":1,"gym3":3,"team":2,"activation":5,
    "game":"game","rest":"recovery","recovery":"recovery","topup":"topup"};
  const wPlanSC = JSON.parse(localStorage.getItem("weekPlan") || "null");
  const schedSC = (user && user.schedule) || {};
  const activePlanSC = (wPlanSC && Object.keys(wPlanSC).length > 0) ? wPlanSC : schedSC;
  const stype = activePlanSC[dayKey] || "rest";
  const resolvedKey = SCHED_TO_DCKEY[stype] !== undefined ? SCHED_TO_DCKEY[stype] : 2;
  const dayInfo = DAY_CYCLE[resolvedKey] || DAY_CYCLE[1];
  const session = dayInfo.session;
  const warmup = getWarmup(session, week);

  if (session==="field") return (
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      <div style={{background:C.card,border:"1.5px solid #3B82F6",borderRadius:16,padding:24,textAlign:"center"}}>
        <div style={{fontSize:48,marginBottom:10}}>🏃</div>
        <h2 style={{margin:"0 0 6px",color:"#3B82F6",fontSize:20}}>Field Training</h2>
        <p style={{margin:"0 0 16px",color:C.muted,fontSize:13,lineHeight:1.6}}>Coach-led session. Your S&amp;C gym work is not scheduled today.</p>
        <div style={{background:C.surface,border:"1px solid #3B82F633",borderRadius:10,padding:"12px 14px"}}>
          <p style={{margin:0,fontSize:12,color:"#93C5FD",lineHeight:1.6}}>
            {zone==="amber"?"⚠️ Amber day — communicate your readiness score to your coach."
             :zone==="red"?"🔴 Red day — speak to your coach before training."
             :"✓ You're ready. Give it everything today."}
          </p>
        </div>
      </div>
    </div>
  );

  if (session==="game") return (
    <div style={{background:C.card,border:`1.5px solid ${C.gold}`,borderRadius:16,padding:24,textAlign:"center"}}>
      <div style={{fontSize:48,marginBottom:10}}>🏉</div>
      <h2 style={{margin:"0 0 6px",color:C.gold,fontSize:20}}>Game Day</h2>
      <p style={{margin:0,color:C.muted,fontSize:13,lineHeight:1.6}}>
        {zone==="red"?"🔴 Red day — speak to your coach."
         :zone==="amber"?"⚠️ Communicate your score. Give what you can."
         :"✓ Readiness is good. Warm up well. Execute your role."}
      </p>
    </div>
  );

  if (session==="recovery") return (
    <div style={{background:C.card,border:`1.5px solid ${C.muted}`,borderRadius:16,padding:24,textAlign:"center"}}>
      <div style={{fontSize:48,marginBottom:10}}>😴</div>
      <h2 style={{margin:"0 0 6px",color:C.muted,fontSize:20}}>Recovery</h2>
      <p style={{margin:0,color:C.muted,fontSize:13,lineHeight:1.6}}>Foam roll, stretch, hydrate and sleep well. No gym loading today.</p>
    </div>
  );

  const gymResult   = (session==="monday"||session==="wednesday") ? getGymWorkout(session, week) : null;
  const programDay  = gymResult ? gymResult.blocks :
                     session==="friday" ? FRIDAY_BLOCKS : null;
  const gymLetter   = gymResult ? gymResult.letter : null;

  // Red zone = Active Recovery Day — no gym work
  if (zone === "red") return (
    <div style={{background:C.card,borderRadius:16,padding:"24px 20px",textAlign:"center",marginTop:8}}>
      <div style={{fontSize:48,marginBottom:16}}>🔴</div>
      <div style={{fontSize:18,fontWeight:800,color:C.red,marginBottom:8}}>Active Recovery Day</div>
      <div style={{fontSize:13,color:C.muted,lineHeight:1.7,marginBottom:20}}>
        Your readiness score indicates your body needs recovery today. No gym work today.
      </div>
      <div style={{background:C.surface,borderRadius:12,padding:"16px",marginBottom:12,textAlign:"left"}}>
        <div style={{fontSize:11,fontWeight:700,color:C.text,fontFamily:"monospace",letterSpacing:2,marginBottom:12}}>ACTIVE RECOVERY OPTIONS</div>
        {[
          {icon:"🚶",text:"Light walk 20–30 min — easy pace, fresh air"},
          {icon:"🧘",text:"Mobility + stretching — hips, thoracic, hamstrings"},
          {icon:"🌊","text":"Contrast bath or ice bath if available"},
          {icon:"😴",text:"Prioritise sleep tonight — aim for 8–9 hours"},
          {icon:"🥗",text:"Fuel recovery — protein + anti-inflammatory foods"},
        ].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:10,alignItems:"flex-start"}}>
            <span style={{fontSize:18,minWidth:26}}>{item.icon}</span>
            <span style={{fontSize:13,color:C.text,lineHeight:1.5}}>{item.text}</span>
          </div>
        ))}
      </div>
      <div style={{fontSize:12,color:C.muted,fontStyle:"italic"}}>
        Speak to your coach about your readiness before any session today.
      </div>
    </div>
  );

  return (
    <div>
      {warmup && <WarmupCard warmup={warmup}/>}
      {gymLetter && (
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <div style={{background:C.greenDk,borderRadius:10,padding:"6px 14px",display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:11,fontWeight:700,color:"#fff",fontFamily:"monospace",letterSpacing:2}}>STRENGTH / POWER</span>
            <span style={{fontSize:13,fontWeight:900,color:C.green,fontFamily:"monospace"}}>— WORKOUT {gymLetter}</span>
          </div>
          {session==="monday" && <span style={{fontSize:10,color:C.muted,fontFamily:"monospace"}}>+ FINISHER</span>}
          {session==="wednesday" && <span style={{fontSize:10,color:C.muted,fontFamily:"monospace"}}>+ INJURY PREV</span>}
        </div>
      )}
      {programDay ? programDay.map((block,bi) => {
        const activeExs = block.exercises.filter(e=>e[zone]!==null&&e[zone]!==undefined);
        const isGrouped = activeExs.length > 1; // All multi-exercise blocks use TriSetView
        if (activeExs.length===0) return null;
        const totalBlocks = programDay.filter(b=>b.exercises.filter(e=>e[zone]!=null).length>0).length;
        const isActive = bi===activeBlock;
        const isComplete = (completedBlocks instanceof Set ? completedBlocks : new Set()).has(bi);
        return (
          isGrouped
            ? <TriSetView key={bi} block={block} activeExs={activeExs} zone={zone} week={week} log={log} user={user}
                isActive={isActive} isComplete={isComplete}
                onComplete={()=>onBlockComplete(bi,totalBlocks)}
                onExpand={()=>setActiveBlock(bi)}/>
            : <div key={bi} style={{marginBottom:16}}>
            <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:8}}>{block.label}</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {activeExs.map((ex,ai)=>(
                <ExerciseCard key={ex.name} ex={ex} zone={zone} weekNum={week}
                  isGrouped={isGrouped} isLastInBlock={ai===activeExs.length-1}
                  bodyWeight={log?.bodyWeight?parseFloat(log.bodyWeight):null} user={user}/>
              ))}
            </div>
          </div>
        );
      }) : null}
    </div>
  );
}

// ── Session Screen ────────────────────────────────────────────────────────────
// ── Cycle / Renewal helpers ──────────────────────────────────────────────────
function loadCurrentCycle() {
  return parseInt(loadState("currentCycle", "1")) || 1;
}

function isCycleUnlocked(cycleNum) {
  if (cycleNum === 1) return true;
  return !!loadState("cycle" + cycleNum + "Unlocked", "");
}

function getGraceState(cycleNum) {
  const now        = Date.now();
  const graceStart = parseInt(loadState("graceStart", "0")) || 0;
  const graceMs    = 7 * 24 * 60 * 60 * 1000; // 7 days
  if (!graceStart) return { started: false, expired: false, daysLeft: 0 };
  const elapsed    = now - graceStart;
  const started    = elapsed > 0;
  const expired    = elapsed > graceMs;
  const daysLeft   = Math.max(0, Math.ceil((graceMs - elapsed) / (24*60*60*1000)));
  return { started, expired, daysLeft };
}

function buildCycleSummary(user) {
  const history = loadState("history", []);
  const sessions = JSON.parse(localStorage.getItem("sessionVolume") || "[]")
    .sort((a,b) => a.date < b.date ? -1 : 1); // oldest→newest, left→right
  return {
    weeks: user?.currentWeek || 1,
    totalSessions: sessions.length,
    avgReadiness: history.length
      ? Math.round(history.reduce((s,d) => s+(d.score||0), 0) / history.length)
      : 0,
  };
}


function SessionScreen({ log, user }) {
  const zone = log?.zone || "green";
  const col  = zoneColor(zone);
  const [week, setWeek] = useState(user?.currentWeek || 1);
  const [weekConfirm, setWeekConfirm] = useState(null);
  const [selectedDay, setSelectedDay] = useState(() => {
    // Use day NAME (Mon/Tue/Wed) as selectedDay so each day is unique
    const WD2 = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const todayName = WD2[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];
    const saved = loadState("lastDay", todayName);
    return saved;
  });
  const grace = getGraceState(loadCurrentCycle());
  const phase = getPhase(week);

  function applyWeekChange(w) { setWeek(w); saveState("user",{...user,currentWeek:w}); setWeekConfirm(null); }
  function handleWeekChange(w) { if(w<week){setWeekConfirm(w);}else{applyWeekChange(w);} }
  function handleDaySelect(d) { setSelectedDay(d); saveState("lastDay",String(d)); }
  // Resolve day name ("Mon","Tue" etc) → DAY_CYCLE entry via schedule
  const _SCHED_TO_DC = {"gym1":1,"gym3":3,"team":2,"activation":5,
    "game":"game","rest":"recovery","recovery":"recovery","topup":"topup"};
  const _wPlan = JSON.parse(localStorage.getItem("weekPlan")||"null");
  const _sched = (user&&user.schedule)||{};
  const _plan = (_wPlan&&Object.keys(_wPlan).length>0)?_wPlan:_sched;
  const _stype = _plan[selectedDay]||"rest";
  const _dcKey = _SCHED_TO_DC[_stype]!==undefined ? _SCHED_TO_DC[_stype] : 2;
  const dayInfo = DAY_CYCLE[_dcKey] || DAY_CYCLE[1];

  return (
    <div style={{padding:"16px 20px",paddingBottom:100}}>
      {weekConfirm!==null&&(
        <>
          <div onClick={()=>setWeekConfirm(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:200}}/>
          <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:201,background:C.surface,borderRadius:"20px 20px 0 0",padding:"28px 24px 40px"}}>
            <div style={{width:40,height:4,background:C.border,borderRadius:2,margin:"0 auto 24px"}}/>
            <h3 style={{margin:"0 0 8px",color:C.text,textAlign:"center",fontSize:17}}>Go back to Week {weekConfirm}?</h3>
            <p style={{margin:"0 0 24px",color:C.muted,fontSize:13,textAlign:"center",lineHeight:1.6}}>Your logged data won't be deleted.</p>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setWeekConfirm(null)} style={{flex:1,padding:"14px 0",background:C.interactive,border:`1.5px solid ${C.green}55`,borderRadius:12,color:C.text,fontSize:14,cursor:"pointer"}}>Cancel</button>
              <button onClick={()=>applyWeekChange(weekConfirm)} style={{flex:1,padding:"14px 0",background:C.amber,border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer"}}>Go to Week {weekConfirm}</button>
            </div>
          </div>
        </>
      )}

      <div style={{background:C.card,border:`1.5px solid ${col}33`,borderRadius:16,padding:"16px 18px",marginBottom:12}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
          <div>
            <div style={{fontSize:10,fontWeight:700,color:col,fontFamily:mono,letterSpacing:2,marginBottom:2}}>READINESS</div>
            <div style={{fontSize:32,fontWeight:900,color:col,fontFamily:mono,lineHeight:1}}>{log?.score??"—"}</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:10,color:C.text,fontFamily:mono,marginBottom:2}}>PHASE</div>
            <div style={{fontSize:13,fontWeight:700,color:C.text}}>{phase.name}</div>
            <div style={{fontSize:10,color:C.text,fontFamily:mono}}>{phase.load}</div>
          </div>
        </div>

        <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:8}}>SELECT TODAY'S SESSION</div>
        <div style={{display:"flex",gap:4,paddingBottom:4,marginBottom:10,overflowX:"auto"}}>
          {(()=>{
            const SCHED_META = {
              gym1:{icon:"💪",label:"Gym S/M",color:"C.green",dayKey:1},
              gym3:{icon:"💪",label:"Gym S/P",color:"#F59E0B",dayKey:3},
              team:{icon:"🏃",label:"Field",color:"#3B82F6",dayKey:2},
              activation:{icon:"🔋",label:"Activate",color:"#8B5CF6",dayKey:5},
              game:{icon:"🏉",label:"Game",color:"#EF4444",dayKey:"game"},
              rest:{icon:"😴",label:"Rest",color:"#64748B",dayKey:"recovery"},
              recovery:{icon:"😴",label:"Active Recovery Day",color:"#64748B",dayKey:"recovery"},
              topup:{icon:"⚡",label:"Top-Up",color:"#F59E0B",dayKey:"topup"},
            };
            const WD=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
            const wPlan=JSON.parse(localStorage.getItem("weekPlan")||"null");
            const nWk=(user&&user.schedule)||{Mon:"gym1",Tue:"team",Wed:"gym3",Thu:"team",Fri:"activation",Sat:"game",Sun:"rest"};
            const plan=(wPlan&&Object.keys(wPlan).length>0)?wPlan:nWk;
            const todayN=WD[new Date().getDay()===0?6:new Date().getDay()-1];
            return WD.map(dayName=>{
              const stype=plan[dayName]||"rest";
              const meta=SCHED_META[stype]||SCHED_META.rest;
              const isSel=selectedDay===dayName;
              const isToday=dayName===todayN;
              return (
                <button key={dayName} onClick={()=>handleDaySelect(dayName)}
                  style={{flexShrink:0,padding:"8px 6px",borderRadius:10,cursor:"pointer",
                    textAlign:"center",minWidth:46,
                    background:isSel?(meta.color+"22"):isToday?(meta.color+"11"):C.greenLt,
                    border:`1.5px solid ${isSel?meta.color:isToday?(meta.color+"66"):C.green+"66"}`}}>
                  <div style={{fontSize:7,color:isSel?meta.color:C.text,fontFamily:mono,fontWeight:700,marginBottom:1}}>{dayName}</div>
                  <div style={{fontSize:16}}>{meta.icon}</div>
                  <div style={{fontSize:7,color:isSel?meta.color:C.text,fontFamily:mono,fontWeight:600,marginTop:1}}>{meta.label}</div>
                </button>
              );
            });
          })()}
        </div>

        <div style={{display:"flex",alignItems:"center",gap:8,paddingTop:10,borderTop:`1px solid ${C.border}`}}>
          <span style={{fontSize:10,color:C.text,fontFamily:mono,flexShrink:0}}>WEEK</span>
          <div style={{display:"flex",gap:4,flex:1,overflowX:"auto"}}>
            {Array.from({length:12},(_,i)=>i+1).map(w=>(
              <button key={w} onClick={()=>handleWeekChange(w)} style={{flexShrink:0,width:26,height:26,borderRadius:6,border:`1.5px solid ${week===w?col:w===12?C.gold+"66":w<week?col+"66":C.green+"55"}`,background:week===w?col+"22":w<week?col+"15":C.greenLt,color:week===w?col:w===12?C.gold:w<week?col:C.text,fontSize:11,fontWeight:week===w||w===12?700:600,cursor:"pointer",fontFamily:mono}}>
                {w}
              </button>
            ))}
          </div>
        </div>

        {week===12&&(
          <div style={{marginTop:10,background:grace.expired?C.red+"18":C.gold+"18",border:`1px solid ${grace.expired?C.red+"44":C.gold+"44"}`,borderRadius:10,padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:12,fontWeight:700,color:grace.expired?C.red:C.gold}}>
                {grace.expired?"🔒 Programme locked":grace.started?`⏳ ${grace.daysLeft} day${grace.daysLeft!==1?"s":""} remaining`:"🏆 Final week"}
              </div>
              <div style={{fontSize:10,color:C.text}}>
                {grace.expired?"Purchase Cycle 2 to continue":grace.started?"Grace period · Renew to continue":"Complete your final week"}
              </div>
            </div>
          </div>
        )}
      </div>

      <SessionContent dayKey={selectedDay} zone={zone} log={log} week={week} user={user}/>

      <div style={{marginTop:16}}>
        <RPELogger dayKey={selectedDay} week={week} dayDesc={dayInfo.desc||dayInfo.label} session={dayInfo.session}/>
      </div>
    </div>
  );
}

// ── Analytics Screen ──────────────────────────────────────────────────────────
// ── Body Weight Chart — Road Zone ────────────────────────────────────────────
function BodyWeightChart({ history, user }) {
  const targetWeight = user?.targetWeight || 0;
  const dataPoints = (history||[])
    .filter(d => d.bodyWeight && parseFloat(d.bodyWeight) > 0)
    .map(d => ({ date: d.date, weight: parseFloat(d.bodyWeight) }))
    .sort((a, b) => a.date < b.date ? -1 : 1); // oldest left → newest right

  if (!targetWeight || dataPoints.length === 0) return (
    <div style={{background:C.card,borderRadius:14,padding:"20px",textAlign:"center",marginBottom:12}}>
      <div style={{fontSize:24,marginBottom:8}}>⚖️</div>
      <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4}}>Body Weight</div>
      <div style={{fontSize:11,color:C.text}}>Logged during daily check-in · Target: {targetWeight||"not set"}kg</div>
    </div>
  );

  const target   = targetWeight;
  const zonePct  = 0.02; // ±2%
  const zoneHi   = target * (1 + zonePct);
  const zoneLo   = target * (1 - zonePct);

  // Y-axis: target ±5% with padding
  const yPad = target * 0.05;
  const yMin = Math.min(zoneLo - yPad, ...dataPoints.map(d => d.weight));
  const yMax = Math.max(zoneHi + yPad, ...dataPoints.map(d => d.weight));
  const yRange = yMax - yMin || 1;

  const toY = (w) => 120 - ((w - yMin) / yRange) * 110 - 5;
  const latest = dataPoints[dataPoints.length - 1];
  const isOnRoad = latest.weight >= zoneLo && latest.weight <= zoneHi;
  const diff = latest.weight - target;

  return (
    <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginBottom:12}}>
      {/* Header */}
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
        <div>
          <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2}}>⚖️ BODY WEIGHT</div>
          <div style={{fontSize:9,color:C.text,marginTop:2}}>Target ±2% zone · {target}kg target</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:22,fontWeight:900,fontFamily:mono,
            color: isOnRoad ? C.green : Math.abs(diff/target) < 0.04 ? C.amber : C.red}}>
            {latest.weight.toFixed(1)}<span style={{fontSize:11,color:C.text}}> kg</span>
          </div>
          <div style={{fontSize:10,fontFamily:mono,
            color: isOnRoad ? C.green : diff > 0 ? C.amber : C.red}}>
            {diff === 0 ? "On target" : `${diff > 0 ? "+" : ""}${diff.toFixed(1)}kg`}
          </div>
        </div>
      </div>

      {/* Road zone chart */}
      <div style={{position:"relative",height:120}}>
        <svg width="100%" height="100%" viewBox="0 0 320 120"
          style={{position:"absolute",top:0,left:0,overflow:"visible"}}>

          {/* Y-axis line */}
          <line x1="0" y1="0" x2="0" y2="120" stroke={C.text} strokeWidth="1.5"/>
          {/* X-axis baseline */}
          <line x1="0" y1="120" x2="320" y2="120" stroke={C.text} strokeWidth="1.5"/>
          <rect x="0" y={toY(zoneHi)} width="320" height={toY(zoneLo)-toY(zoneHi)}
            fill={C.green} fillOpacity="0.15"/>
          {/* Road edges */}
          <line x1="0" y1={toY(zoneHi)} x2="320" y2={toY(zoneHi)}
            stroke={C.green} strokeWidth="1" strokeDasharray="3,2" strokeOpacity="1"/>
          <line x1="0" y1={toY(zoneLo)} x2="320" y2={toY(zoneLo)}
            stroke={C.green} strokeWidth="1" strokeDasharray="3,2" strokeOpacity="1"/>
          {/* Target centre line */}
          <line x1="0" y1={toY(target)} x2="320" y2={toY(target)}
            stroke={C.green} strokeWidth="1.5" strokeOpacity="0.8"/>

          {/* Weight line */}
          {dataPoints.length > 1 && (
            <polyline
              points={dataPoints.map((d,i) => {
                const x = (i / (dataPoints.length - 1)) * 100;
                const y = toY(d.weight);
                return `${x},${y}`;
              }).join(" ")}
              fill="none" stroke="#0F172A" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" opacity="1"
            />
          )}

          {/* Dots - coloured by zone */}
          {dataPoints.map((d, i) => {
            const x = dataPoints.length === 1 ? 0 : (i / (dataPoints.length - 1)) * 320;
            const y = toY(d.weight);
            const inZone = d.weight >= zoneLo && d.weight <= zoneHi;
            const above = d.weight > zoneHi;
            const dotCol = inZone ? C.green : above ? C.amber : C.red;
            const isLatest = i === dataPoints.length - 1; // kept for colour logic
            return (
              <circle key={i} cx={x} cy={y} r="1.8"
                fill={dotCol}/>
            );
          })}
        </svg>

        {/* Y-axis labels */}
        <div style={{position:"absolute",left:0,top:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"}}>
          <div style={{fontSize:9,color:C.text,fontFamily:mono,fontWeight:700}}>{yMax.toFixed(1)}</div>
          <div style={{fontSize:9,color:C.green,fontFamily:mono,fontWeight:700}}>{target.toFixed(1)}</div>
          <div style={{fontSize:9,color:C.text,fontFamily:mono,fontWeight:700}}>{yMin.toFixed(1)}</div>
        </div>
      </div>

      {/* Legend */}
      <div style={{display:"flex",gap:12,marginTop:8,justifyContent:"center"}}>
        {[
          ["On road",C.green], ["Above",C.amber], ["Below",C.red]
        ].map(([label,col])=>(
          <div key={label} style={{display:"flex",alignItems:"center",gap:4,fontSize:9,color:C.text}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:col}}/>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}


// ── RPE Load Chart ────────────────────────────────────────────────────────────
function RPEChart({ history }) {
  const rpeLogs = loadRPELogs ? loadRPELogs() : {};

  // Build per-day RPE — match by date prefix
  // rpeLogs keys are "date_dayKey" e.g. "2024-01-15_Mon"
  // history entries have .date = "2024-01-15"
  const rpeByDate = {};
  Object.entries(rpeLogs).forEach(([key, val]) => {
    const date = key.split('_')[0];
    // Keep highest RPE if multiple sessions same day
    if (!rpeByDate[date] || val.rpe > rpeByDate[date].rpe) {
      rpeByDate[date] = val;
    }
  });

  const hasData = Object.keys(rpeByDate).length > 0;

  if (!hasData) return (
    <div style={{background:C.card,borderRadius:14,padding:"20px",textAlign:"center",marginBottom:12}}>
      <div style={{fontSize:24,marginBottom:8}}>📈</div>
      <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4}}>RPE Load</div>
      <div style={{fontSize:11,color:C.text}}>Log RPE after sessions to track training load</div>
    </div>
  );

  // Build 84-slot array aligned to history (oldest→newest)
  const slots = Array.from({length:84}, (_,i) => {
    const entry = (history||[])[i];
    if (!entry) return null;
    const rpeEntry = rpeByDate[entry.date];
    return rpeEntry ? {date:entry.date, rpe:rpeEntry.rpe, session:rpeEntry.session} : {date:entry.date, rpe:0};
  });

  // Weekly RPE sum for acute load
  const weeks = Array.from({length:12}, (_,wi) => {
    const weekSlots = slots.slice(wi*7, wi*7+7);
    const total = weekSlots.reduce((s,d) => s+(d?.rpe||0), 0);
    const count = weekSlots.filter(d=>d?.rpe>0).length;
    return {total, avg: count>0 ? Math.round(total/count*10)/10 : 0, count};
  });

  return (
    <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginBottom:12}}>
      <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:4}}>
        📈 RPE TRAINING LOAD — 12 WEEK PROGRAMME
      </div>
      <div style={{fontSize:9,color:C.text,marginBottom:14}}>
        Session effort 1–10 · 🟢 Easy (1–4) · 🟡 Moderate (5–7) · 🔴 Hard (8–10)
      </div>

      {/* 84-slot bar chart */}
      <div style={{display:"flex",alignItems:"flex-end",gap:1,height:80,marginBottom:4}}>
        {slots.map((slot, i) => {
          const hasRPE = slot && slot.rpe > 0;
          const rpe = slot?.rpe || 0;
          const h = hasRPE ? Math.round((rpe/10)*76) : 2;
          const col = rpe <= 4 ? C.green : rpe <= 7 ? C.amber : C.red;
          const isWeekStart = i % 7 === 0;
          const isFuture = !slot;
          return (
            <div key={i} style={{
              flex:1, display:"flex", flexDirection:"column",
              alignItems:"center", justifyContent:"flex-end", height:"100%",
              borderLeft: isWeekStart&&i>0 ? `1px solid ${C.text}44` : "none",
            }}>
              <div style={{
                width:"100%", height: isFuture ? 2 : h,
                borderRadius:"2px 2px 0 0",
                background: isFuture ? C.surface : hasRPE ? col : C.surface,
                opacity: isFuture ? 0.3 : 1,
              }}/>
            </div>
          );
        })}
      </div>

      <div style={{height:2,background:C.text,marginBottom:4}}/>

      {/* Week labels */}
      <div style={{display:"flex",marginBottom:12}}>
        {Array.from({length:12},(_,wi)=>(
          <div key={wi} style={{flex:7,textAlign:"center",fontSize:9,color:C.text,fontFamily:mono,fontWeight:700}}>W{wi+1}</div>
        ))}
      </div>

      {/* Weekly load summary */}
      <div style={{fontSize:9,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:8}}>WEEKLY LOAD SUMMARY</div>
      <div style={{display:"flex",gap:2,overflowX:"auto"}}>
        {weeks.map((w,wi)=>{
          const loadCol = w.avg===0?C.surface:w.avg<=4?C.green:w.avg<=7?C.amber:C.red;
          const hasCurrent = w.count > 0;
          return (
            <div key={wi} style={{
              flex:"0 0 calc(100%/12)", textAlign:"center",
              background: hasCurrent?(loadCol+"22"):C.surface,
              borderRadius:6, padding:"6px 2px",
              border:`1px solid ${hasCurrent?loadCol:C.border}33`,
            }}>
              <div style={{fontSize:8,color:C.text,fontFamily:mono,marginBottom:2,fontWeight:700}}>W{wi+1}</div>
              <div style={{fontSize:11,fontWeight:800,color:hasCurrent?loadCol:C.border,fontFamily:mono}}>
                {hasCurrent?w.avg.toFixed(1):"—"}
              </div>
              <div style={{fontSize:7,color:C.text}}>{hasCurrent?`${w.count}s`:""}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// ── Strength Analytics ────────────────────────────────────────────────────────
function StrengthAnalytics() {
  const sessions = JSON.parse(localStorage.getItem("sessionVolume") || "[]")
    .sort((a,b) => a.date < b.date ? -1 : 1); // oldest→newest, left→right
  if (sessions.length === 0) return (
    <div style={{background:C.card,borderRadius:14,padding:"20px",textAlign:"center",marginTop:12}}>
      <div style={{fontSize:24,marginBottom:8}}>🏋️</div>
      <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4}}>Session Volume</div>
      <div style={{fontSize:11,color:C.text}}>Complete gym sessions to track volume</div>
    </div>
  );

  const maxKg = Math.max(...sessions.map(s=>s.totalKg||0)) || 1;

  return (
    <div style={{marginTop:12}}>
      <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginBottom:12}}>
        <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:4}}>🏋️ SESSION VOLUME — KG LIFTED</div>
        <div style={{fontSize:9,color:C.text,marginBottom:14}}>12-week programme · 3 gym sessions per week</div>
        <div style={{display:"flex",marginBottom:4}}>
          {Array.from({length:12},(_,wi)=>(
            <div key={wi} style={{flex:1,textAlign:"center",fontSize:8,fontFamily:mono,color:C.text,fontWeight:700}}>W{wi+1}</div>
          ))}
        </div>
        <div style={{display:"flex",alignItems:"flex-end",gap:2,height:80,overflow:"hidden"}}>
          {Array.from({length:36},(_,si)=>{
            const session = sessions[si];
            const hasData = !!session;
            const isLatest = hasData && si===sessions.length-1;
            const isNext = !hasData && si===sessions.length;
            const kg = session ? session.totalKg||0 : 0;
            const h = hasData && maxKg>0 ? Math.max(4,Math.round((kg/maxKg)*74)) : 0;
            return (
              <div key={si} style={{flex:"0 0 calc(100%/36)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",height:"100%",borderLeft:si%3===0&&si>0?`1px solid ${C.text}44`:"none"}}>
                {isLatest && <div style={{fontSize:6,color:C.green,fontFamily:mono,marginBottom:1}}>{Math.round(kg)}kg</div>}
                <div style={{width:"100%",height:isNext?3:hasData?h:2,borderRadius:"2px 2px 0 0",background:isLatest?C.green:isNext?(C.green+"44"):hasData?(C.green+"66"):C.surface,border:isNext?`1px dashed ${C.green}55`:"none"}}/>
              </div>
            );
          })}
        </div>
        <div style={{height:2,background:C.text,marginTop:2}}/>
        <div style={{display:"flex",marginTop:6}}>
          {[{l:"Foundation",w:"33%",c:"#3B82F6"},{l:"Intensification",w:"42%",c:C.amber},{l:"Competition",w:"25%",c:C.gold}].map((p,i)=>(
            <div key={i} style={{width:p.w,textAlign:"center",fontSize:7,color:p.c,fontFamily:mono,borderTop:`2px solid ${p.c}66`,paddingTop:3,overflow:"hidden",whiteSpace:"nowrap"}}>{p.l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Lift Records ──────────────────────────────────────────────────────────────
function LiftRecords() {
  const KEY_LIFTS = [
    "Back Squat","Front Squat","Romanian Deadlift","Trap Bar Deadlift",
    "Barbell Hip Thrust","Bulgarian Split Squat","Power Clean / Hang Clean",
    "Pull Ups / Chins","Single Arm DB Shoulder Press","Single Arm DB Row",
  ];
  const prData = JSON.parse(localStorage.getItem("liftPRs") || "{}");
  const lifts = KEY_LIFTS.map(name=>({name,pr:prData[name]?.weight||null,date:prData[name]?.date||null}));
  const maxPR = Math.max(...lifts.map(l=>l.pr||0)) || 1;
  const hasAny = lifts.some(l=>l.pr);

  return (
    <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginTop:12}}>
      <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:4}}>🏆 PERSONAL RECORDS — 12 WEEK PROGRAMME</div>
      <div style={{fontSize:9,color:C.text,marginBottom:16}}>Best single set weight · Updates as you train</div>
      {!hasAny && (
        <div style={{textAlign:"center",padding:"20px 0",color:C.muted,fontSize:12}}>
          <div style={{fontSize:24,marginBottom:8}}>🏋️</div>
          Complete gym sessions to set your first records
        </div>
      )}
      {hasAny && lifts.map(lift=>(
        <div key={lift.name} style={{marginBottom:12,opacity:lift.pr?1:0.4}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:4}}>
            <div style={{fontSize:12,fontWeight:700,color:lift.pr?C.text:C.muted}}>{lift.name}</div>
            <div style={{display:"flex",alignItems:"baseline",gap:6}}>
              {lift.pr
                ? <div style={{fontSize:16,fontWeight:900,color:C.green,fontFamily:mono}}>{lift.pr}kg</div>
                : <div style={{fontSize:11,color:C.border,fontFamily:mono}}>No record yet</div>
              }
              {lift.date && <div style={{fontSize:8,color:C.text}}>{new Date(lift.date).toLocaleDateString("en-GB",{day:"numeric",month:"short"})}</div>}
            </div>
          </div>
          <div style={{height:6,borderRadius:3,background:"#CBD5E1",overflow:"hidden"}}>
            {lift.pr && <div style={{height:"100%",borderRadius:3,width:`${Math.round((lift.pr/maxPR)*100)}%`,background:lift.pr===maxPR?C.gold:C.green,transition:"width 0.6s ease"}}/>}
          </div>
        </div>
      ))}
    </div>
  );
}


function AnalyticsScreen({ user, todayLog }) {
  const history = loadState("history",[]);
  const last14  = history.slice(0,14);
  const historyChron = [...history].sort((a,b)=>a.date<b.date?-1:1); // oldest→newest
  const avgScore = last14.length ? Math.round(last14.reduce((s,d)=>s+(d.score||0),0)/last14.length) : 0;
  const greenDays = last14.filter(d=>d.zone==="green").length;
  const redDays   = last14.filter(d=>d.zone==="red").length;

  return (
    <div style={{padding:"16px 20px",paddingBottom:100}}>
      <h2 style={{margin:"0 0 16px",color:C.text,fontSize:18}}>Analytics</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
        {[{label:"Avg Score",value:avgScore||"—",color:C.green},{label:"Green Days",value:greenDays,color:C.green},{label:"Red Days",value:redDays,color:C.red}].map(({label,value,color})=>(
          <div key={label} style={{background:C.card,borderRadius:12,padding:"14px 10px",textAlign:"center",border:`1px solid ${color}22`}}>
            <div style={{fontSize:24,fontWeight:900,color,fontFamily:mono,lineHeight:1}}>{value}</div>
            <div style={{fontSize:9,color:C.text,marginTop:4,lineHeight:1.3}}>{label}</div>
          </div>
        ))}
      </div>
      {last14.length>0&&(
        <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginBottom:12}}>
          <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:12}}>📊 READINESS LOAD — 12 WEEK PROGRAMME</div>
          <div style={{fontSize:9,color:C.text,marginBottom:10}}>Daily readiness scores · Coloured by zone</div>

          {/* 12-week bar chart - 84 slots */}
          <div style={{display:"flex",alignItems:"flex-end",gap:1,height:100,marginBottom:4,position:"relative"}}>
            {/* Zone threshold lines */}
            <div style={{position:"absolute",left:0,right:0,bottom:"70%",borderTop:`1.5px dashed ${C.green}`,zIndex:0}}/>
            <div style={{position:"absolute",left:0,right:0,bottom:"50%",borderTop:`1.5px dashed ${C.amber}`,zIndex:0}}/>
            {Array.from({length:84},(_,i)=>{
              const d = historyChron[i]; // oldest first → left=week1, right=week12
              const hasData = !!d;
              const isToday = hasData && d.date === new Date().toISOString().split("T")[0];
              const h = hasData ? Math.max(3, Math.round((d.score/100)*96)) : 2;
              const col = !hasData ? C.surface :
                d.zone==="green" ? C.green : d.zone==="amber" ? C.amber : C.red;
              const isWeekStart = i % 7 === 0;
              return (
                <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",height:"100%",
                  borderLeft: isWeekStart && i > 0 ? `1px solid ${C.text}44` : "none",
                  position:"relative", zIndex:1}}>
                  {isToday && <div style={{position:"absolute",top:0,bottom:0,width:2,background:C.green+"66",borderRadius:1}}/>}
                  <div style={{
                    width:"100%", height:h, borderRadius:"2px 2px 0 0",
                    background: col,
                    opacity: hasData ? 0.9 : 0.3,
                  }}/>
                </div>
              );
            })}
          </div>
          {/* Week labels */}
          <div style={{height:2,background:C.text,marginBottom:4}}/>
          <div style={{display:"flex"}}>
            {Array.from({length:12},(_,wi)=>(
              <div key={wi} style={{flex:7,textAlign:"center",fontSize:9,color:C.text,fontFamily:mono,fontWeight:700}}>W{wi+1}</div>
            ))}
          </div>
          {/* Zone legend */}
          <div style={{display:"flex",gap:12,marginTop:8,justifyContent:"center"}}>
            {[["🟢","Green ≥70",C.green],["🟡","Amber 50-69",C.amber],["🔴","Red <50",C.red]].map(([em,label,col])=>(
              <div key={label} style={{display:"flex",alignItems:"center",gap:4,fontSize:9,color:C.text}}>
                <div style={{width:8,height:8,borderRadius:2,background:col}}/>
                {label}
              </div>
            ))}
          </div>
        </div>
      )}

      <BodyWeightChart history={historyChron} user={user}/>
      <RPEChart history={historyChron}/>
      <StrengthAnalytics/>
      <LiftRecords/>
    </div>
  );
}

// ── Program Overview ──────────────────────────────────────────────────────────
// ── Training Week Planner ─────────────────────────────────────────────────────
const SCHED_META_WP = {
  gym1:      {icon:"💪", label:"Gym — Strength/Power", color:C.green},
  gym3:      {icon:"💪", label:"Gym — Strength/Power", color:"#F59E0B"},
  team:      {icon:"🏃", label:"Field Training",        color:"#3B82F6"},
  activation:{icon:"🔋", label:"Activation",            color:"#8B5CF6"},
  game:      {icon:"🏉", label:"Game Day",              color:"#EF4444"},
  rest:      {icon:"😴", label:"Active Recovery Day",       color:"#64748B"},
  recovery:  {icon:"😴", label:"Active Recovery Day",              color:"#64748B"},
  topup:     {icon:"⚡", label:"Top-Up Session",        color:"#F59E0B"},
};
const WP_DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const WP_DEFAULT = {Mon:"gym1",Tue:"team",Wed:"gym3",Thu:"team",Fri:"activation",Sat:"game",Sun:"rest"};

function WeeklyPlanner({ user, week, onUserUpdate }) {
  const normalWeek = (user && user.schedule) || WP_DEFAULT;
  const [thisWeek, setThisWeek] = useState(()=>{
    try { const s=localStorage.getItem("weekPlan"); return s?JSON.parse(s):{...normalWeek}; } catch(e) { return {...normalWeek}; }
  });
  const [editing, setEditing] = useState(null);
  const [saved, setSaved] = useState(false);

  function updateDay(dayName, stype) {
    const newWeek={...thisWeek,[dayName]:stype};
    setThisWeek(newWeek);
    localStorage.setItem("weekPlan",JSON.stringify(newWeek));
    window.dispatchEvent(new CustomEvent("primedWeekPlanChanged",{detail:newWeek}));
    setEditing(null); setSaved(true); setTimeout(()=>setSaved(false),2000);
  }
  function resetToNormal() {
    const reset={...normalWeek};
    setThisWeek(reset);
    localStorage.setItem("weekPlan",JSON.stringify(reset));
    window.dispatchEvent(new CustomEvent("primedWeekPlanChanged",{detail:reset}));
    setSaved(true); setTimeout(()=>setSaved(false),2000);
  }

  const todayN = WP_DAYS[new Date().getDay()===0?6:new Date().getDay()-1];

  return (
    <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginBottom:12}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
        <div>
          <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2}}>📅 TRAINING WEEK · WEEK {week}</div>
          <div style={{fontSize:9,color:C.muted,marginTop:2}}>Tap any day to change · changes appear in Session tab</div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {saved && <div style={{fontSize:10,color:C.green,fontFamily:mono}}>Saved ✓</div>}
          <button onClick={resetToNormal}
            style={{fontSize:10,color:C.green,background:C.green+"11",border:`1px solid ${C.green}44`,borderRadius:6,padding:"4px 10px",cursor:"pointer",fontWeight:700}}>
            ↺ Normal Week
          </button>
        </div>
      </div>

      <div style={{marginBottom:14}}>
        <div style={{fontSize:8,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:6}}>YOUR NORMAL WEEK</div>
        <div style={{display:"flex",gap:3}}>
          {WP_DAYS.map(day=>{
            const stype=normalWeek[day]||"rest";
            const meta=SCHED_META_WP[stype]||SCHED_META_WP.rest;
            return (
              <div key={day} style={{flex:1,textAlign:"center",padding:"6px 2px",background:C.interactive,borderRadius:6}}>
                <div style={{fontSize:8,color:C.muted,marginBottom:2}}>{day}</div>
                <div style={{fontSize:13}}>{meta.icon}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div style={{fontSize:8,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:6}}>THIS WEEK</div>
        {WP_DAYS.map(day=>{
          const stype=thisWeek[day]||normalWeek[day]||"rest";
          const meta=SCHED_META_WP[stype]||SCHED_META_WP.rest;
          const isChanged=stype!==(normalWeek[day]||"rest");
          const isToday=day===todayN;
          const isEditing=editing===day;
          return (
            <div key={day}>
              <button onClick={()=>setEditing(isEditing?null:day)} style={{
                width:"100%",display:"flex",alignItems:"center",gap:10,
                padding:"10px 12px",borderRadius:10,cursor:"pointer",marginBottom:4,
                background:isEditing?(meta.color+"22"):isToday?(meta.color+"11"):C.surface,
                border:`1.5px solid ${isEditing||isToday?meta.color:isChanged?(C.amber+"88"):C.border}`,
                textAlign:"left"}}>
                <div style={{fontSize:9,fontWeight:700,fontFamily:mono,color:isToday?C.text:C.muted,minWidth:30}}>
                  {day}{isToday?" ◀":""}
                </div>
                <div style={{fontSize:16,minWidth:24}}>{meta.icon}</div>
                <div style={{flex:1,fontSize:12,fontWeight:isToday?700:400,color:isChanged?C.amber:isToday?C.text:C.muted}}>
                  {meta.label}
                </div>
                {isChanged && <div style={{fontSize:9,color:C.amber}}>changed</div>}
                <div style={{fontSize:10,color:C.border}}>{isEditing?"✕":"›"}</div>
              </button>
              {isEditing && (
                <div style={{background:C.bg||C.surface,borderRadius:10,padding:8,marginBottom:4,border:`1px solid ${C.border}`,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                  {Object.entries(SCHED_META_WP).filter(([k])=>k!=="recovery").map(([key,opt])=>(
                    <button key={key} onClick={()=>updateDay(day,key)} style={{
                      padding:"8px 10px",borderRadius:8,cursor:"pointer",
                      display:"flex",alignItems:"center",gap:6,
                      background:stype===key?(opt.color+"22"):C.card,
                      border:`1.5px solid ${stype===key?opt.color:C.border}`,textAlign:"left"}}>
                      <span style={{fontSize:14}}>{opt.icon}</span>
                      <span style={{fontSize:11,color:stype===key?opt.color:C.muted,fontWeight:stype===key?700:400}}>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


function ProgramOverview({ user, onUserUpdate, onLevelChange }) {
  const week  = user?.currentWeek || 1;
  const phase = getPhase(week);
  const PHASES = [
    {name:"Foundation",weeks:"1–4",load:"65–70%",color:"#3B82F6"},
    {name:"Intensification",weeks:"5–9",load:"75–85%",color:C.amber},
    {name:"Competition",weeks:"10–12",load:"80–90%",color:C.gold},
  ];
  const weeks = Array.from({length:12},(_,i)=>{const w=i+1;return{w,phase:getPhase(w)};});
  return (
    <div style={{padding:"16px 20px",paddingBottom:100}}>
      <h2 style={{margin:"0 0 4px",color:C.text,fontSize:22,fontWeight:800}}>Training Week</h2>
      <p style={{color:C.muted,fontSize:12,marginBottom:16}}>Set your week once · Session tab updates automatically</p>

      {/* Training Load Level */}
      <div style={{background:C.card,borderRadius:14,padding:"14px 16px",marginBottom:16}}>
        <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:10}}>TRAINING LOAD LEVEL</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
          {[
            {key:"novice",      icon:"🌱", label:"Novice",       sub:"< 1 year"},
            {key:"intermediate",icon:"⚡", label:"Intermediate", sub:"1–4 years"},
            {key:"advanced",    icon:"🏆", label:"Advanced",     sub:"4+ years"},
          ].map(opt=>(
            <button key={opt.key} onClick={()=>{
              const updated={...user, strengthLevel:opt.key};
              saveState("user", updated);
              onUserUpdate&&onUserUpdate(updated);
            }} style={{
              padding:"12px 8px", borderRadius:12, cursor:"pointer", textAlign:"center",
              background: (user?.strengthLevel||"intermediate")===opt.key ? C.greenDk : C.interactive,
              border: `1.5px solid ${(user?.strengthLevel||"intermediate")===opt.key ? C.green : C.green+"55"}`,
            }}>
              <div style={{fontSize:22, marginBottom:4}}>{opt.icon}</div>
              <div style={{fontSize:11, fontWeight:700, color:(user?.strengthLevel||"intermediate")===opt.key ? "#fff" : C.text}}>{opt.label}</div>
              <div style={{fontSize:9, color:C.muted, marginTop:2}}>{opt.sub}</div>
            </button>
          ))}
        </div>
        <div style={{fontSize:10,color:C.muted,textAlign:"center",marginTop:8}}>
          Loads update immediately · Change if weights feel too easy or hard
        </div>
      </div>

      <WeeklyPlanner user={user} week={user?.currentWeek||1} onUserUpdate={onUserUpdate}/>
      <h3 style={{margin:"20px 0 12px",color:C.text,fontSize:16,fontWeight:700}}>12-Week Programme</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
        {PHASES.map(p=>(
          <div key={p.name} style={{background:C.card,borderRadius:12,padding:"12px 10px",border:`1.5px solid ${phase.name===p.name?p.color:C.border}`}}>
            <div style={{fontSize:8,fontWeight:700,color:p.color,fontFamily:mono,letterSpacing:1,marginBottom:4}}>PHASE</div>
            <div style={{fontSize:12,fontWeight:800,color:phase.name===p.name?p.color:C.text,marginBottom:2}}>{p.name}</div>
            <div style={{fontSize:9,color:p.color,fontFamily:mono}}>Wks {p.weeks}</div>
          </div>
        ))}
      </div>
      <div style={{background:C.card,borderRadius:14,padding:"16px 18px",marginBottom:12}}>
        <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:12}}>12-WEEK PROGRESS</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
          {weeks.map(({w,phase:p})=>{
            const done=w<week; const current=w===week;
            const col=p.name==="Foundation"?"#3B82F6":p.name==="Intensification"?C.amber:C.gold;
            return (
              <div key={w} style={{width:36,height:36,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,fontFamily:mono,background:current?col+"22":done?col+"11":C.surface,border:`1.5px solid ${current?col:done?col+"44":C.border}`,color:current?col:done?col+"88":C.muted}}>
                {w}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Timer Screen ─────────────────────────────────────────────────────────────
function TimerScreen() {
  const [seconds,setSeconds]=useState(90);
  const [running,setRunning]=useState(false);
  const [remaining,setRemaining]=useState(90);
  const intervalRef=useRef(null);
  const OPTIONS=[60,90,120,150,180,240,300];
  useEffect(()=>{
    if(running){
      intervalRef.current=setInterval(()=>{
        setRemaining(r=>{if(r<=1){clearInterval(intervalRef.current);setRunning(false);return 0;}return r-1;});
      },1000);
    }
    return()=>clearInterval(intervalRef.current);
  },[running]);
  function start(){setRemaining(seconds);setRunning(true);}
  function reset(){clearInterval(intervalRef.current);setRunning(false);setRemaining(seconds);}
  const pct=remaining/seconds; const r=80; const circ=2*Math.PI*r;
  const mins=Math.floor(remaining/60); const secs=remaining%60;
  return (
    <div style={{padding:"32px 20px",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:100}}>
      <h2 style={{margin:"0 0 24px",color:C.text,fontSize:18}}>Rest Timer</h2>
      <svg width={200} height={200} style={{marginBottom:24}}>
        <circle cx={100} cy={100} r={r} fill="none" stroke="#CBD5E1" strokeWidth={12}/>
        <circle cx={100} cy={100} r={r} fill="none" stroke={remaining===0?C.red:C.green} strokeWidth={12}
          strokeDasharray={`${pct*circ} ${circ}`} strokeLinecap="round" transform="rotate(-90 100 100)"
          style={{transition:running?"stroke-dasharray 1s linear":"none"}}/>
        <text x={100} y={90} textAnchor="middle" fill={C.text} fontSize={42} fontWeight="900" fontFamily="'DM Mono',monospace">
          {mins}:{String(secs).padStart(2,"0")}
        </text>
        <text x={100} y={118} textAnchor="middle" fill={C.text} fontSize={13} fontFamily="'DM Mono',monospace">
          {running?"resting...":remaining===0?"done!":"tap to start"}
        </text>
      </svg>
      <div style={{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap",justifyContent:"center"}}>
        {OPTIONS.map(s=>(
          <button key={s} onClick={()=>{setSeconds(s);setRemaining(s);setRunning(false);}} style={{padding:"8px 14px",borderRadius:20,background:seconds===s?C.green+"22":C.card,border:`1.5px solid ${seconds===s?C.green:C.border}`,color:seconds===s?C.green:C.muted,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:mono}}>
            {s<60?s+"s":Math.floor(s/60)+"m"+(s%60?String(s%60).padStart(2,"0")+"s":"")}
          </button>
        ))}
      </div>
      <div style={{display:"flex",gap:12}}>
        <button onClick={running?reset:start} style={{padding:"16px 40px",background:running?C.red:C.green,border:"none",borderRadius:14,color:"#fff",fontSize:16,fontWeight:700,cursor:"pointer"}}>{running?"Stop":"Start"}</button>
        {!running&&remaining<seconds&&<button onClick={reset} style={{padding:"16px 20px",background:C.card,border:`1.5px solid ${C.border}`,borderRadius:14,color:C.muted,fontSize:16,cursor:"pointer"}}>Reset</button>}
      </div>
    </div>
  );
}

// ── Setup Screen ──────────────────────────────────────────────────────────────
function SetupScreen({ onComplete, onLangChange }) {
  const STEPS=["language","welcome","name","position","weight","strengthLevel","email","schedule","pin","done"];
  const [step,setStep]=useState(0);
  const [name,setName]=useState("");
  const [weight,setWeight]=useState("");
  const [height,setHeight]=useState("");
  const [strengthLevel,setStrengthLevel]=useState("intermediate");
  const [position,setPosition]=useState("");
  const [pin,setPin]=useState("");
  const [pin2,setPin2]=useState("");
  const [pinError,setPinError]=useState(false);
  const [setupLang,setSetupLang]=useState("en");
  const [email,setEmail]=useState("");
  const DAYS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const [schedule,setSchedule]=useState({Mon:"gym1",Tue:"team",Wed:"gym3",Thu:"team",Fri:"activation",Sat:"game",Sun:"rest"});
  const POSITIONS=["Goalkeeper","Right Back","Centre Back","Left Back","Defensive Mid","Central Mid","Attacking Mid","Right Wing","Left Wing","Striker"];

  function canAdvance(){
    const s=STEPS[step];
    if(s==="language")  return true;
    if(s==="schedule")  return true;
    if(s==="welcome")   return true;
    if(s==="email")     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if(s==="name")      return name.trim().length>1;
    if(s==="position")  return !!position;
    if(s==="weight")    return parseFloat(weight)>0;
    if(s==="strengthLevel") return !!strengthLevel;
    if(s==="pin")       return pin.length===4 && pin2.length===4 && pin===pin2;
    return true;
  }
  function advance(){
    if(STEPS[step]==="pin"){
      if(pin.length===4&&pin2.length===4){
        if(pin!==pin2){setPinError(true);return;}
        setPinError(false);
      } else { return; }
    }
    if(canAdvance()) setStep(s=>s+1);
  }
  function finish(){
    const bmi = (parseFloat(weight)>0&&parseFloat(height)>0) ? Math.round(parseFloat(weight)/Math.pow(parseFloat(height)/100,2)*10)/10 : null;
    const user={name,position,targetWeight:parseFloat(weight),height:parseFloat(height)||null,bmi,pin:pin2,currentWeek:1,email:email.trim().toLowerCase(),schedule,strengthLevel};
    saveState("user",user); saveState("langCode",setupLang); saveState("athleteEmail",email.trim().toLowerCase());
    onComplete(user);
  }
  const pct=(step/(STEPS.length-1))*100;

  return (
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:font}}>
      <div style={{height:3,background:C.border}}>
        <div style={{height:"100%",width:`${pct}%`,background:C.green,transition:"width .3s"}}/>
      </div>
      <div style={{padding:"24px 24px 100px",maxWidth:480,margin:"0 auto"}}>

        {STEPS[step]==="language"&&(
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{marginBottom:24,marginTop:8}}><PrimedLogo size={90} /></div>
            <h2 style={{color:C.text,margin:"0 0 8px",fontSize:22,textAlign:"center",fontFamily:"'Outfit','DM Sans',sans-serif",fontWeight:800}}>Choose your language</h2>
            <p style={{color:C.muted,margin:"0 0 24px",fontSize:13,textAlign:"center",lineHeight:1.6}}>The app translates once. No internet needed after that.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,width:"100%"}}>
              {LANGUAGES.map(lang=>(
                <button key={lang.code} onClick={()=>{setSetupLang(lang.code);onLangChange&&onLangChange(lang.code);}}
                  style={{padding:"12px 10px",borderRadius:12,cursor:"pointer",border:`1.5px solid ${setupLang===lang.code?C.green:C.border}`,background:setupLang===lang.code?C.greenDk:C.card,display:"flex",alignItems:"center",gap:10}}>
                  <span style={{fontSize:22}}>{lang.flag}</span>
                  <span style={{fontSize:13,fontWeight:setupLang===lang.code?700:400,color:setupLang===lang.code?"#fff":C.text}}>{lang.name}</span>
                  {setupLang===lang.code&&<span style={{marginLeft:"auto",color:"#fff",fontSize:12}}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {STEPS[step]==="welcome"&&(
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{margin:"16px 0 28px",display:"flex",justifyContent:"center"}}><PrimedLogo size={80} showTagline={true}/></div>
            <h2 style={{color:C.text,margin:"0 0 8px",fontSize:26,fontWeight:800,fontFamily:"'Outfit','DM Sans',sans-serif"}}>
              Let's get you <span style={{color:C.green}}>PRIMED</span>
            </h2>
            <p style={{color:C.muted,margin:"0 0 24px",fontSize:13,lineHeight:1.7}}>Readiness-driven training. Check in daily. Train smarter.</p>
            <div style={{background:C.card,border:`1.5px solid ${C.border}`,borderRadius:14,padding:"16px 18px",width:"100%"}}>
              {["Daily wellness check-in — 60 seconds","Readiness Score tells you how hard to train","Session adapts — Green, Amber or Red","12-week in-season S&C programme built in"].map((item,i)=>(
                <div key={i} style={{display:"flex",gap:10,marginBottom:i<3?10:0}}>
                  <span style={{color:C.green,fontWeight:700}}>{i+1}.</span>
                  <p style={{margin:0,color:C.text,fontSize:13,lineHeight:1.5}}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {STEPS[step]==="name"&&(
          <div>
            <h2 style={{color:C.text,margin:"0 0 20px",fontSize:20,fontWeight:700}}>What's your name?</h2>
            <input type="text" placeholder="First name" value={name} onChange={e=>setName(e.target.value)}
              style={{width:"100%",padding:"14px 16px",background:C.surface,border:`1.5px solid ${name.trim().length>1?C.green:C.border}`,borderRadius:12,color:C.text,fontSize:16,outline:"none"}}/>
          </div>
        )}

        {STEPS[step]==="position"&&(
          <div>
            <h2 style={{color:C.text,margin:"0 0 20px",fontSize:20,fontWeight:700}}>Your playing position</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {POSITIONS.map(p=>(
                <button key={p} onClick={()=>setPosition(p)} style={{padding:"12px 10px",borderRadius:12,cursor:"pointer",border:`1.5px solid ${position===p?C.green:C.green+"55"}`,background:position===p?C.greenDk:C.interactive,color:position===p?"#fff":C.text,fontSize:13,fontWeight:position===p?700:400,textAlign:"left"}}>{p}</button>
              ))}
            </div>
          </div>
        )}

        {STEPS[step]==="weight"&&(
          <div>
            <h2 style={{color:C.text,margin:"0 0 6px",fontSize:20,fontWeight:700}}>Body Measurements</h2>
            <p style={{color:C.muted,margin:"0 0 20px",fontSize:13,lineHeight:1.6}}>Used to calculate training loads and track body composition over time.</p>

            <div style={{marginBottom:16}}>
              <label style={{fontSize:11,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,display:"block",marginBottom:8}}>BODY WEIGHT</label>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <input type="number" placeholder="90" value={weight} onChange={e=>setWeight(e.target.value)}
                  style={{flex:1,padding:"14px 16px",background:C.surface,border:`1.5px solid ${parseFloat(weight)>0?C.green:C.border}`,borderRadius:12,color:C.text,fontSize:24,fontFamily:mono,fontWeight:700,textAlign:"center",outline:"none"}}/>
                <span style={{fontSize:16,color:C.text,fontFamily:mono,minWidth:28}}>kg</span>
              </div>
            </div>

            <div style={{marginBottom:16}}>
              <label style={{fontSize:11,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,display:"block",marginBottom:8}}>HEIGHT</label>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <input type="number" placeholder="180" value={height} onChange={e=>setHeight(e.target.value)}
                  style={{flex:1,padding:"14px 16px",background:C.surface,border:`1.5px solid ${parseFloat(height)>0?C.green:C.border}`,borderRadius:12,color:C.text,fontSize:24,fontFamily:mono,fontWeight:700,textAlign:"center",outline:"none"}}/>
                <span style={{fontSize:16,color:C.text,fontFamily:mono,minWidth:28}}>cm</span>
              </div>
            </div>

            {parseFloat(weight)>0 && parseFloat(height)>0 && (()=>{
              const bmi = parseFloat(weight)/Math.pow(parseFloat(height)/100,2);
              const bmiR = Math.round(bmi*10)/10;
              return (
                <div style={{background:C.card,border:`1.5px solid ${C.border}`,borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontSize:10,color:C.text,fontFamily:mono,letterSpacing:2}}>BMI</div>
                    <div style={{fontSize:28,fontWeight:900,color:C.green,fontFamily:mono}}>{bmiR}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:11,color:C.muted}}>Body Mass Index</div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {STEPS[step]==="strengthLevel"&&(
          <div>
            <h2 style={{color:C.text,margin:"0 0 6px",fontSize:22,fontWeight:800}}>Strength Experience</h2>
            <p style={{color:C.muted,margin:"0 0 20px",fontSize:13,lineHeight:1.6}}>
              Choose the level that best matches your gym training background. This sets your starting loads.
            </p>
            {[
              {key:"novice",icon:"🌱",label:"Novice",sub:"Less than 1 year. Building technique and base strength.",eg:"Squat ~1×BW · Deadlift ~1.25×BW · Bench ~0.75×BW"},
              {key:"intermediate",icon:"⚡",label:"Intermediate",sub:"1–4 years of consistent training. Solid technique.",eg:"Squat ~1.75×BW · Deadlift ~2×BW · Bench ~1.25×BW"},
              {key:"advanced",icon:"🏆",label:"Advanced",sub:"4+ years. Strong across all lifts, good technique.",eg:"Squat ~2×BW · Deadlift ~2.5×BW · Bench ~1.5×BW"},
            ].map(opt=>(
              <button key={opt.key} onClick={()=>setStrengthLevel(opt.key)}
                style={{width:"100%",marginBottom:12,padding:"16px 18px",textAlign:"left",cursor:"pointer",
                  background:strengthLevel===opt.key?C.greenDk:C.interactive,
                  border:`2px solid ${strengthLevel===opt.key?C.green:C.green+"55"}`,borderRadius:16}}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:6}}>
                  <span style={{fontSize:22}}>{opt.icon}</span>
                  <span style={{fontSize:16,fontWeight:800,color:strengthLevel===opt.key?"#fff":C.text}}>{opt.label}</span>
                </div>
                <p style={{margin:"0 0 4px",fontSize:12,color:C.muted,lineHeight:1.5}}>{opt.sub}</p>
                <p style={{margin:0,fontSize:11,color:strengthLevel===opt.key?"#fff":C.text,fontFamily:mono}}>{opt.eg}</p>
              </button>
            ))}
          </div>
        )}

        {STEPS[step]==="email"&&(
          <div>
            <h2 style={{color:C.text,margin:"0 0 6px",fontSize:20,fontWeight:700}}>Where should we send your renewal code?</h2>
            <p style={{color:C.muted,margin:"0 0 20px",fontSize:13,lineHeight:1.7}}>At Week 12 we'll email your cycle summary and returning athlete discount code.</p>
            <input type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}
              autoCapitalize="none" autoCorrect="off"
              style={{width:"100%",padding:"14px 16px",background:C.surface,border:`1.5px solid ${email.length>0&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())?C.green:C.border}`,borderRadius:12,color:C.text,fontSize:16,outline:"none"}}/>
            <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:"12px 14px",marginTop:12}}>
              <p style={{margin:0,fontSize:11,color:C.muted,lineHeight:1.6}}>🔒 Only used to send your renewal code. Never shared.</p>
            </div>
          </div>
        )}

        {STEPS[step]==="schedule"&&<ScheduleBuilder days={DAYS} schedule={schedule} setSchedule={setSchedule}/>}

        {STEPS[step]==="pin"&&(
          <div>
            <h2 style={{color:C.text,margin:"0 0 20px",fontSize:20,fontWeight:700}}>Create your PIN</h2>
            {[["CHOOSE A 4-DIGIT PIN",pin,setPin],["CONFIRM YOUR PIN",pin2,setPin2]].map(([label,val,setter],idx)=>(
              <div key={idx} style={{marginBottom:16}}>
                <label style={{fontSize:11,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,display:"block",marginBottom:8}}>{label}</label>
                <input type="password" inputMode="numeric" maxLength={4} placeholder="••••" value={val}
                  onChange={e=>setter(e.target.value.replace(/\D/g,"").slice(0,4))}
                  style={{width:"100%",padding:"16px",background:C.surface,border:`1.5px solid ${
                    val.length===4
                      ? (pin.length===4 && pin2.length===4 && pin!==pin2)
                        ? C.red   // both filled, mismatch → red
                        : C.green // filled and matching (or confirm not yet filled) → green
                      : val.length>0 ? C.border : C.border
                  }`,borderRadius:12,color:C.text,fontSize:28,fontFamily:mono,fontWeight:700,textAlign:"center",letterSpacing:8,outline:"none"}}/>
              </div>
            ))}
            {(pinError||(pin2.length===4&&pin!==pin2))&&(
              <div style={{display:"flex",alignItems:"center",gap:6,marginTop:8,padding:"10px 14px",background:C.red+"18",borderRadius:10,border:`1px solid ${C.red}44`}}>
                <span style={{fontSize:16}}>⚠️</span>
                <p style={{color:C.red,fontSize:13,fontWeight:600}}>PINs don't match — please re-enter</p>
              </div>
            )}
          </div>
        )}

        {STEPS[step]==="done"&&(
          <div style={{paddingBottom:20}}>
            <div style={{textAlign:"center",marginBottom:24}}>
              <PrimedLogo size={70}/>
              <h1 style={{color:C.text,margin:"16px 0 6px",fontSize:26,fontWeight:800}}>You're set up!</h1>
              <p style={{color:C.muted,fontSize:13,lineHeight:1.6}}>Here's how to get the most from PRIMED</p>
            </div>
            {[
              {icon:"🌅",title:"Check in every morning",
               body:"Before training, complete your daily wellness check-in — sleep, energy, soreness, motivation and hydration. Takes 30 seconds."},
              {icon:"📊",title:"Read your Readiness Score",
               body:"Green (70–100) = full training. Amber (50–69) = modified loads. Red (<50) = recovery focus. Weights adjust automatically."},
              {icon:"💪",title:"Follow your session",
               body:"Go to the Session tab, tap today's day. Your warm-up and all three blocks load with weights personalised to your body weight and experience level."},
              {icon:"⚙️",title:"Adjust loads if needed",
               body:"In the Training Week tab switch between Novice, Intermediate and Advanced if the weights feel too easy or hard."},
              {icon:"📅",title:"Set your week once",
               body:"Use the Training Week tab at the start of each week if your schedule differs from normal. The Session tab updates automatically."},
              {icon:"📈",title:"Track your progress",
               body:"The Analytics tab shows your readiness trend, body weight vs target, session volume and personal records across all 12 weeks."},
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:12,marginBottom:12,background:C.card,borderRadius:12,padding:"14px 16px"}}>
                <div style={{fontSize:22,minWidth:30,paddingTop:1}}>{item.icon}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:3}}>{item.title}</div>
                  <div style={{fontSize:12,color:C.muted,lineHeight:1.6}}>{item.body}</div>
                </div>
              </div>
            ))}
            <button onClick={finish} style={{width:"100%",padding:"16px",background:C.green,border:"none",borderRadius:14,color:"#fff",fontSize:17,fontWeight:700,cursor:"pointer",marginTop:8,boxShadow:`0 4px 20px ${C.green}55`}}>
              Start training →
            </button>
          </div>
        )}

        {STEPS[step]!=="done"&&(
          <div style={{position:"fixed",bottom:0,left:0,right:0,padding:"16px 24px",background:C.bg,borderTop:`1px solid ${C.border}`}}>
            <div style={{display:"flex",gap:12,maxWidth:480,margin:"0 auto"}}>
              {step>0&&<button onClick={()=>setStep(s=>s-1)} style={{padding:"14px 20px",background:C.card,border:`1.5px solid ${C.border}`,borderRadius:12,color:C.muted,fontSize:14,cursor:"pointer"}}>← Back</button>}
              <button onClick={advance} disabled={!canAdvance()} style={{flex:1,padding:"14px 0",background:canAdvance()?C.green:"#1E2D45",border:"none",borderRadius:12,color:canAdvance()?"#fff":C.muted,fontSize:15,fontWeight:700,cursor:canAdvance()?"pointer":"default",transition:"all .2s"}}>
                {STEPS[step]==="schedule"?"Looks good →":"Next →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Login Screen ──────────────────────────────────────────────────────────────
function LoginScreen({ user, onLogin, onReset }) {
  const [pin,setPin]=useState("");
  const [error,setError]=useState(false);
  const hour=new Date().getHours();
  const greeting=hour<12?"Good morning":hour<18?"Good afternoon":"Good evening";

  function tryLogin(p){
    if(p===user.pin){onLogin();}
    else{setError(true);setPin("");setTimeout(()=>setError(false),1500);}
  }

  return (
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:font,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,textAlign:"center"}}>
      <div style={{marginBottom:20}}><PrimedLogo size={200} /></div>
      <h2 style={{color:C.text,margin:"0 0 4px",fontSize:24}}>{greeting}, {user.name}</h2>
      <p style={{color:C.muted,margin:"0 0 32px",fontSize:13}}>Enter your PIN to continue</p>
      <div style={{display:"flex",gap:10,marginBottom:24,justifyContent:"center"}}>
        {[0,1,2,3].map(i=>(
          <div key={i} style={{width:16,height:16,borderRadius:"50%",background:pin.length>i?C.green:C.border,transition:"background .15s"}}/>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,width:"100%",maxWidth:320,marginBottom:16,alignSelf:"center"}}>
        {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((n,i)=>(
          <button key={i} onClick={()=>{
            if(n==="⌫"){setPin(p=>p.slice(0,-1));}
            else if(n!==""&&pin.length<4){
              const next=pin+n; setPin(next);
              if(next.length===4) setTimeout(()=>tryLogin(next),100);
            }
          }} style={{padding:"22px 0",background:n===""?"transparent":C.card,border:n===""?"none":`1px solid ${C.border}`,borderRadius:14,color:error?C.red:C.text,fontSize:24,fontWeight:700,cursor:n===""?"default":"pointer"}}>
            {n}
          </button>
        ))}
      </div>
      <button onClick={onReset} style={{background:"none",border:"none",color:C.muted,fontSize:12,cursor:"pointer",marginTop:8}}>Not {user.name}? Reset app</button>
    </div>
  );
}

// ── TopUp Screen ─────────────────────────────────────────────────────────────
function TopUpScreen({ zone }) {
  const [selected, setSelected] = useState(null);
  const [phasesDone, setPhasesDone] = useState([]);
  const [showRPE, setShowRPE] = useState(false);
  const [rpeLogged, setRpeLogged] = useState(false);
  const [rpeValue, setRpeValue] = useState(null);
  const [activePhase, setActivePhase] = useState(null);
  const ENERGY_COLORS = { Aerobic:"C.green", Anaerobic:"#F59E0B", Speed:"#EF4444", Mixed:"#8B5CF6" };
  const available = zone==="red" ? [] :
    zone==="amber" ? TOPUP_SESSIONS.filter(s=>s.zones.includes("amber")) : TOPUP_SESSIONS;

  function openSession(s) { setSelected(s); setPhasesDone([]); setRpeLogged(false); setRpeValue(null); setActivePhase(null); }
  function closeSession() { setSelected(null); }

  if (selected) {
    const col = selected.color;
    const allDone = phasesDone.length >= selected.protocol.length;
    return (
      <div style={{paddingBottom:100}}>
        <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"12px 20px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:10}}>
          <button onClick={closeSession} style={{background:"none",border:"none",color:C.muted,fontSize:20,cursor:"pointer"}}>←</button>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700,color:C.text}}>{selected.title}</div>
            <div style={{fontSize:10,color:C.text,fontFamily:mono}}>{selected.subtitle}</div>
          </div>
        </div>
        <div style={{padding:"16px 20px"}}>
          <p style={{margin:"0 0 16px",fontSize:13,color:C.text,lineHeight:1.7,background:col+"18",border:`1px solid ${col}33`,borderRadius:12,padding:"12px 14px"}}>{selected.overview}</p>
          {selected.protocol.map((phase,i)=>{
            const done=phasesDone.includes(i); const isActive=activePhase===i;
            return (
              <div key={i} style={{background:done?col+"18":C.card,border:`1.5px solid ${done?col:isActive?col+"66":C.border}`,borderRadius:12,padding:"14px 16px",marginBottom:8,cursor:"pointer"}}
                onClick={()=>setActivePhase(isActive?null:i)}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:done?col:C.surface,border:`1.5px solid ${done?col:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:done?14:12,color:done?"#fff":C.muted,fontWeight:700}}>{done?"✓":i+1}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:700,color:done?col:C.text}}>{phase.phase}</div>
                    <div style={{fontSize:10,color:C.text,fontFamily:mono}}>{phase.duration}</div>
                  </div>
                </div>
                {isActive&&(
                  <div style={{marginTop:10,paddingTop:10,borderTop:`1px solid ${C.border}`}}>
                    <p style={{margin:"0 0 12px",fontSize:12,color:C.text,lineHeight:1.7}}>{phase.detail}</p>
                    {!done&&<button onClick={e=>{e.stopPropagation();setPhasesDone(d=>[...d,i]);}} style={{padding:"9px 18px",background:col,border:"none",borderRadius:8,color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer"}}>Mark complete ✓</button>}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 14px",marginBottom:16}}>
            <div style={{fontSize:9,fontWeight:700,color:C.gold,fontFamily:mono,letterSpacing:2,marginBottom:4}}>COACH SAYS</div>
            <p style={{margin:0,fontSize:12,color:C.gold,lineHeight:1.6}}>{selected.coaching}</p>
          </div>
          {!rpeLogged?(
            <button onClick={()=>setShowRPE(true)} style={{width:"100%",padding:"14px 0",background:allDone?col:C.card,border:`1.5px solid ${allDone?col:C.border}`,borderRadius:12,color:allDone?"#fff":C.muted,fontSize:14,fontWeight:700,cursor:"pointer"}}>
              {allDone?"Log RPE →":"Log RPE (complete session first)"}
            </button>
          ):(
            <div style={{background:col+"18",border:`1.5px solid ${col}44`,borderRadius:12,padding:"14px 16px",textAlign:"center"}}>
              <div style={{fontSize:13,fontWeight:700,color:col}}>✓ RPE {rpeValue} logged</div>
            </div>
          )}
        </div>
        {showRPE&&(
          <>
            <div onClick={()=>setShowRPE(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:100}}/>
            <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:101,background:C.surface,borderRadius:"20px 20px 0 0",padding:"20px 20px 40px"}}>
              <div style={{width:40,height:4,background:C.border,borderRadius:2,margin:"0 auto 16px"}}/>
              <div style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:16}}>How hard was that?</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}}>
                {[1,2,3,4,5,6,7,8,9,10].map(v=>(
                  <button key={v} onClick={()=>{setRpeValue(v);setRpeLogged(true);setShowRPE(false);}}
                    style={{padding:"12px 0",borderRadius:10,background:v<=3?"C.green22":v<=6?"#F59E0B22":"#EF444422",border:`1.5px solid ${v<=3?C.green:v<=6?C.amber:C.red}`,color:v<=3?C.green:v<=6?C.amber:C.red,fontSize:16,fontWeight:900,cursor:"pointer",fontFamily:mono}}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{padding:"16px 20px",paddingBottom:100}}>
      <h2 style={{margin:"0 0 4px",color:C.text,fontSize:18,fontWeight:700}}>Fitness Top-Ups</h2>
      <p style={{margin:"0 0 16px",fontSize:12,color:C.muted,lineHeight:1.6}}>Standalone 20–25 min sessions. Use when needed to maintain fitness.</p>
      {zone==="red"&&(
        <div style={{background:"#EF444418",border:"1px solid #EF444444",borderRadius:12,padding:"14px 16px",marginBottom:16,textAlign:"center"}}>
          <div style={{fontSize:13,fontWeight:700,color:C.red,marginBottom:4}}>🔴 Red day — no top-ups today</div>
          <div style={{fontSize:11,color:C.muted}}>Your body needs recovery, not more load.</div>
        </div>
      )}
      {zone==="amber"&&(
        <div style={{background:"#F59E0B11",border:"1px solid #F59E0B33",borderRadius:10,padding:"10px 14px",marginBottom:14}}>
          <p style={{margin:0,fontSize:11,color:C.amber,lineHeight:1.5}}>⚠️ Amber day — aerobic sessions only. High-intensity options locked.</p>
        </div>
      )}
      {zone!=="red"&&["running","gym"].map(cat=>(
        <div key={cat}>
          <div style={{fontSize:9,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,margin:"16px 0 10px"}}>
            {cat==="running"?"🏃 RUNNING SESSIONS":"🏋️ GYM CARDIO SESSIONS"}
          </div>
          {TOPUP_SESSIONS.filter(s=>s.category===cat).map(s=>{
            const isLocked=!s.zones.includes(zone); const col=ENERGY_COLORS[s.energy]||C.green;
            return (
              <button key={s.id} onClick={()=>!isLocked&&openSession(s)} disabled={isLocked}
                style={{width:"100%",marginBottom:8,padding:"14px 16px",background:isLocked?C.surface:C.card,border:`1.5px solid ${isLocked?C.border:col+"66"}`,borderRadius:12,cursor:isLocked?"default":"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"left",opacity:isLocked?0.4:1}}>
                <div style={{width:44,height:44,borderRadius:10,flexShrink:0,background:col+"22",border:`1.5px solid ${col}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{s.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:2}}>{s.title}</div>
                  <div style={{fontSize:10,color:C.text,fontFamily:mono}}>{s.subtitle}</div>
                </div>
                <span style={{fontSize:9,fontWeight:700,fontFamily:mono,color:col,background:col+"22",border:`1px solid ${col}44`,borderRadius:5,padding:"2px 7px"}}>{s.energy}</span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ── Cycle Completion Screen ───────────────────────────────────────────────────
function CycleCompletionScreen({ user, onStartNewCycle, onDismiss }) {
  const cycleNum = loadCurrentCycle();
  const summary  = buildCycleSummary(user);
  return (
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:font,overflowY:"auto"}}>
      <div style={{background:`linear-gradient(160deg,${C.greenDk} 0%,${C.bg} 100%)`,padding:"48px 24px 36px",textAlign:"center",borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:"flex",justifyContent:"center",marginBottom:20}}><PrimedMark size={48} accentColor={C.green}/></div>
        <div style={{fontSize:48,marginBottom:12}}>🏆</div>
        <h1 style={{margin:"0 0 8px",color:C.text,fontSize:26,fontFamily:"'Outfit','DM Sans',sans-serif",fontWeight:800}}>Cycle {cycleNum} Complete</h1>
        <p style={{margin:"0 0 6px",fontSize:15,color:C.green,fontWeight:700}}>12 weeks. Done.</p>
      </div>
      <div style={{padding:"24px 20px 80px",maxWidth:520,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20}}>
          {[{label:"Avg Readiness",value:summary.avgScore,unit:"/100",color:C.gold},{label:"Green Days",value:summary.greenDays,unit:" days",color:C.green},{label:"Check-ins",value:summary.totalCheckins,unit:"",color:"#3B82F6"}].map(({label,value,unit,color})=>(
            <div key={label} style={{background:C.card,borderRadius:12,padding:"14px 10px",textAlign:"center",border:`1px solid ${color}22`}}>
              <div style={{fontSize:22,fontWeight:900,color,fontFamily:mono,lineHeight:1}}>{value}<span style={{fontSize:10,fontWeight:400}}>{unit}</span></div>
              <div style={{fontSize:9,color:C.muted,marginTop:3,lineHeight:1.3}}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <button onClick={()=>{archiveCycle(cycleNum,user);onStartNewCycle();}} style={{width:"100%",padding:"16px 0",background:`linear-gradient(135deg,${C.greenDk},${C.green})`,border:"none",borderRadius:14,color:"#fff",fontSize:15,fontWeight:700,cursor:"pointer"}}>
            Start Cycle {cycleNum+1} →
          </button>
          <button onClick={onDismiss} style={{background:"none",border:"none",color:C.muted,fontSize:12,cursor:"pointer",padding:"8px 0"}}>Not yet — return to app</button>
        </div>
      </div>
    </div>
  );
}

// ── Locked Session Screen ─────────────────────────────────────────────────────
function LockedSessionScreen({ cycleNum, onUnlock }) {
  const [code,setCode]=useState(""); const [error,setError]=useState(false); const [success,setSuccess]=useState(false);
  function tryCode(){
    if(unlockWithCode(code,cycleNum)){setSuccess(true);setTimeout(()=>onUnlock(),1200);}
    else{setError(true);setTimeout(()=>setError(false),2000);}
  }
  return (
    <div style={{padding:"48px 24px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",minHeight:"60vh",justifyContent:"center"}}>
      <div style={{fontSize:52,marginBottom:20}}>🏆</div>
      <div style={{background:C.gold+"18",border:`1px solid ${C.gold}44`,borderRadius:14,padding:"16px 20px",marginBottom:24,width:"100%"}}>
        <div style={{fontSize:11,fontWeight:700,color:C.gold,fontFamily:mono,letterSpacing:2,marginBottom:6}}>CYCLE {cycleNum} COMPLETE</div>
        <div style={{fontSize:16,fontWeight:700,color:C.text,marginBottom:4}}>12 weeks done. Your data is saved.</div>
        <div style={{fontSize:12,color:C.muted,lineHeight:1.6}}>Your 2-week grace period has ended. Check Analytics for your full summary.</div>
      </div>
      <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"20px",width:"100%",marginBottom:16}}>
        <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4}}>Ready for Cycle {cycleNum+1}?</div>
        <div style={{fontSize:12,color:C.muted,marginBottom:16,lineHeight:1.6}}>Purchase your next 12-week block and enter your renewal code below.</div>
        <a href="https://primedtraining.com/cycle2" target="_blank" style={{display:"block",padding:"14px 0",background:`linear-gradient(135deg,${C.greenDk},${C.green})`,border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:700,textDecoration:"none",marginBottom:12}}>Get Cycle {cycleNum+1} →</a>
        <div style={{display:"flex",gap:8}}>
          <input type="text" placeholder="Enter renewal code" value={code}
            onChange={e=>{setCode(e.target.value);setError(false);}}
            style={{flex:1,background:C.surface,border:`1.5px solid ${error?C.red:success?C.green:C.border}`,borderRadius:10,padding:"11px 14px",color:C.text,fontSize:13,fontFamily:mono,fontWeight:700,outline:"none",textTransform:"uppercase"}}/>
          <button onClick={tryCode} style={{padding:"11px 16px",background:C.green,border:"none",borderRadius:10,color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer"}}>{success?"✓":"Unlock"}</button>
        </div>
        {error&&<div style={{marginTop:8,fontSize:11,color:C.red,fontFamily:mono}}>Code not recognised.</div>}
        {success&&<div style={{marginTop:8,fontSize:11,color:C.green,fontFamily:mono}}>✓ Unlocked…</div>}
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
function MainApp({ user, todayLog, onReset, langCode, onLangChange, t, onRecheckWellness, onUserUpdate }) {
  const [tab, setTab] = useState("session");
  const [showSettings, setShowSettings] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const cycleNum   = loadCurrentCycle();
  const grace      = getGraceState(cycleNum);
  const isUnlocked = isCycleUnlocked(cycleNum + 1);
  const isWeek12Done = (user.currentWeek || 1) >= 12;
  if (isWeek12Done && !grace.started) startGracePeriod(cycleNum);
  const sessionLocked = isWeek12Done && grace.expired && !isUnlocked;
  const col = zoneColor(todayLog?.zone || "green");

  const TABS = [
    { id:"session",   label:"Session",   icon:"💪" },
    { id:"topup",     label:"Top-Up",    icon:"⚡" },
    { id:"analytics", label:"Analytics", icon:"📊" },
    { id:"program",   label:"Training Week", icon:"📅" },
    { id:"timer",     label:"Timer",     icon:"⏱" },
  ];

  if (showCompletion) {
    return <CycleCompletionScreen user={user}
      onStartNewCycle={()=>{saveState("completionDismissed_"+cycleNum,true);setShowCompletion(false);window.location.reload();}}
      onDismiss={()=>{saveState("completionDismissed_"+cycleNum,true);setShowCompletion(false);}}/>;
  }

  return (
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:font}}>
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO_SMALL} alt="PRIMED" style={{ height:32, objectFit:"contain" }}/>
          {todayLog&&<span style={{fontSize:10,fontWeight:700,color:col,fontFamily:mono,marginLeft:6,background:col+"22",padding:"2px 6px",borderRadius:4}}>{todayLog.score}</span>}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <LanguageSelector currentLang={langCode} onSelect={onLangChange}/>
          <button onClick={()=>setShowSettings(true)} style={{background:"none",border:"none",color:C.muted,fontSize:20,cursor:"pointer",padding:"4px 8px"}}>⚙</button>
        </div>
      </div>

      <div>
        {tab==="session"&&(sessionLocked?<LockedSessionScreen cycleNum={cycleNum} onUnlock={()=>window.location.reload()}/>:<SessionScreen log={todayLog} user={user}/>)}
        {tab==="topup"     && <TopUpScreen zone={todayLog?.zone||"green"}/>}
        {tab==="analytics" && <AnalyticsScreen user={user} todayLog={todayLog}/>}
        {tab==="program"   && <ProgramOverview user={user} onUserUpdate={onUserUpdate} onLevelChange={level=>{const u={...user,strengthLevel:level};saveState("user",u);onUserUpdate&&onUserUpdate(u);}}/>}
        {tab==="timer"     && <TimerScreen/>}
      </div>

      <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:30,background:C.surface,borderTop:`1px solid ${C.border}`,display:"flex"}}>
        {TABS.map(({id,label,icon})=>(
          <button key={id} onClick={()=>setTab(id)} style={{flex:1,padding:"10px 0 8px",border:"none",borderBottom:`2.5px solid ${tab===id?col:"transparent"}`,background:"transparent",color:tab===id?col:C.muted,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:mono,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <span style={{fontSize:18}}>{icon}</span>
            <span style={{fontSize:9}}>{label}</span>
          </button>
        ))}
      </div>

      {showSettings&&(
        <>
          <div onClick={()=>setShowSettings(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:100}}/>
          <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:101,background:C.surface,borderRadius:"20px 20px 0 0",padding:"20px 24px 48px"}}>
            <div style={{width:40,height:4,background:C.border,borderRadius:2,margin:"0 auto 20px"}}/>
            <h3 style={{margin:"0 0 16px",color:C.text,fontSize:17}}>Settings</h3>

            {/* Strength Level */}
            <div style={{marginBottom:16}}>
              <div style={{fontSize:10,fontWeight:700,color:C.text,fontFamily:mono,letterSpacing:2,marginBottom:8}}>TRAINING LOAD LEVEL</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
                {[
                  {key:"novice",     icon:"🌱", label:"Novice"},
                  {key:"intermediate",icon:"⚡", label:"Intermediate"},
                  {key:"advanced",   icon:"🏆", label:"Advanced"},
                ].map(opt=>(
                  <button key={opt.key} onClick={()=>{
                    const updated={...user,strengthLevel:opt.key};
                    saveState("user",updated);
                    onUserUpdate&&onUserUpdate(updated);
                  }} style={{
                    padding:"10px 6px",borderRadius:10,cursor:"pointer",textAlign:"center",
                    background:user?.strengthLevel===opt.key?C.greenDk:C.interactive,
                    border:`1.5px solid ${user?.strengthLevel===opt.key?C.green:C.green+"55"}`,
                  }}>
                    <div style={{fontSize:18,marginBottom:3}}>{opt.icon}</div>
                    <div style={{fontSize:10,fontWeight:700,color:user?.strengthLevel===opt.key?"#fff":C.text}}>{opt.label}</div>
                  </button>
                ))}
              </div>
              <div style={{fontSize:10,color:C.muted,marginTop:6,textAlign:"center"}}>
                Loads update immediately for next session
              </div>
            </div>

            <button onClick={()=>{const history=loadState("history",[]);const today=new Date().toISOString().split("T")[0];const filtered=history.filter(h=>!h.date?.startsWith(today));saveState("history",filtered);setShowSettings(false);onRecheckWellness&&onRecheckWellness();}} style={{width:"100%",padding:"14px 16px",background:C.card,border:`1.5px solid ${C.border}`,borderRadius:12,cursor:"pointer",display:"flex",alignItems:"center",gap:12,marginBottom:10,textAlign:"left"}}>
              <span style={{fontSize:18}}>📊</span>
              <div><div style={{fontSize:13,fontWeight:700,color:C.text}}>Re-check wellness</div><div style={{fontSize:11,color:C.muted}}>Redo today's check-in</div></div>
            </button>
            <button onClick={()=>{setShowSettings(false);setShowResetConfirm(true);}} style={{width:"100%",padding:"14px 16px",background:"#EF444411",border:`1.5px solid ${C.red}33`,borderRadius:12,cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"left"}}>
              <span style={{fontSize:18}}>🗑</span>
              <div><div style={{fontSize:13,fontWeight:700,color:C.red}}>Reset app & clear all data</div><div style={{fontSize:11,color:C.muted}}>Cannot be undone</div></div>
            </button>
          </div>
        </>
      )}

      {showResetConfirm&&(
        <>
          <div onClick={()=>setShowResetConfirm(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.8)",zIndex:200}}/>
          <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:201,background:C.surface,borderRadius:"20px 20px 0 0",padding:"28px 24px 48px"}}>
            <div style={{width:40,height:4,background:C.border,borderRadius:2,margin:"0 auto 20px"}}/>
            <h3 style={{margin:"0 0 8px",color:C.red,textAlign:"center",fontSize:18}}>Reset everything?</h3>
            <p style={{margin:"0 0 24px",color:C.muted,textAlign:"center",fontSize:13,lineHeight:1.6}}>All your data will be permanently deleted. This cannot be undone.</p>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setShowResetConfirm(false)} style={{flex:1,padding:"14px 0",background:C.card,border:`1.5px solid ${C.border}`,borderRadius:12,color:C.muted,fontSize:14,cursor:"pointer"}}>Cancel</button>
              <button onClick={()=>{onReset();setShowResetConfirm(false);}} style={{flex:1,padding:"14px 0",background:C.red,border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer"}}>Reset everything</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


// ── Welcome Back Screen ───────────────────────────────────────────────────────
function WelcomeBackScreen({ user, onContinue }) {
  const [animIn, setAnimIn] = useState(false);
  const zone = (() => {
    const history = loadState("history", []);
    const today = new Date().toISOString().split("T")[0];
    const todayLog = history.find(h => h.date?.startsWith(today));
    return todayLog?.zone || null;
  })();
  const col = zone ? zoneColor(zone) : C.green;

  // Check streak
  const history = loadState("history", []);
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    if (history.some(h => h.date?.startsWith(key))) streak++;
    else break;
  }

  const hour = new Date().getHours();
  const greeting = hour < 5  ? "Still up?" :
                   hour < 12 ? "Good morning" :
                   hour < 17 ? "Good afternoon" :
                   hour < 21 ? "Good evening" : "Good evening";

  const motivational = [
    "Every check-in counts.",
    "Consistency builds champions.",
    "Your data, your edge.",
    "Train smart. Recover smarter.",
    "Readiness is a habit.",
    "Small edges. Big results.",
  ];
  const quote = motivational[new Date().getDay() % motivational.length];

  useEffect(() => {
    setTimeout(() => setAnimIn(true), 50);
    // Auto-advance after 2.5 seconds
    const timer = setTimeout(() => onContinue(), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div onClick={onContinue} style={{
      minHeight: "100vh", background: C.bg, fontFamily: font,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "32px 24px", cursor: "pointer",
      position: "relative", overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300, height: 300,
        background: `radial-gradient(circle, ${col}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }}/>



      {/* Welcome text */}
      <div style={{
        opacity: animIn ? 1 : 0,
        transform: animIn ? "translateY(0)" : "translateY(24px)",
        transition: "all 0.6s ease 0.15s",
        textAlign: "center",
        marginBottom: 8,
      }}>

        <div style={{marginBottom:24}}>
          <PrimedLogo size={200}/>
        </div>
        <h1 style={{
          margin: 0,
          fontSize: 36,
          fontWeight: 900,
          color: C.text,
          fontFamily: "'Outfit', 'DM Sans', sans-serif",
          letterSpacing: -0.5,
          lineHeight: 1.1,
        }}>
          Welcome back,
        </h1>
        <h1 style={{
          margin: "4px 0 0",
          fontSize: 36,
          fontWeight: 900,
          color: col,
          fontFamily: "'Outfit', 'DM Sans', sans-serif",
          letterSpacing: -0.5,
          lineHeight: 1.1,
        }}>
          {user.name}.
        </h1>
      </div>

      {/* Streak badge */}
      {streak > 1 && (
        <div style={{
          opacity: animIn ? 1 : 0,
          transform: animIn ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)",
          transition: "all 0.6s ease 0.3s",
          marginTop: 24,
          background: C.gold + "18",
          border: `1.5px solid ${C.gold}44`,
          borderRadius: 12,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <span style={{ fontSize: 22 }}>🔥</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: C.gold }}>
              {streak} day streak
            </div>
            <div style={{ fontSize: 10, color: C.muted, fontFamily: mono }}>
              Keep it going
            </div>
          </div>
        </div>
      )}

      {/* Quote */}
      <div style={{
        opacity: animIn ? 1 : 0,
        transition: "all 0.6s ease 0.45s",
        marginTop: streak > 1 ? 20 : 36,
        fontSize: 20,
        fontWeight: 600,
        color: C.text,
        fontStyle: "italic",
        textAlign: "center",
        lineHeight: 1.4,
        padding: "0 16px",
      }}>
        "{quote}"
      </div>

      {/* Tap to continue hint */}
      <div style={{
        opacity: animIn ? 0.5 : 0,
        transition: "all 0.6s ease 0.8s",
        position: "absolute",
        bottom: 40,
        fontSize: 10,
        color: C.muted,
        fontFamily: mono,
        letterSpacing: 2,
      }}>
        TAP TO CONTINUE
      </div>
    </div>
  );
}


// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [user,setUser]         = useState(()=>loadState("user",null));
  const [todayLog,setTodayLog] = useState(()=>{
    const history=loadState("history",[]); const today=new Date().toISOString().split("T")[0];
    return history.find(h=>h.date?.startsWith(today))||null;
  });
  const [loggedIn,setLoggedIn] = useState(false);
  const [showWelcome,setShowWelcome] = useState(false);
  const [langCode,setLangCode] = useState(()=>loadState("langCode","en"));
  const { t: tRaw } = useTranslation(langCode) || {};
  const t = tRaw || {};

  function handleReset(){localStorage.clear();setUser(null);setTodayLog(null);setLoggedIn(false);setShowWelcome(false);}
  function handleLangChange(code){setLangCode(code);saveState("langCode",code);}

  if (!user) return <SetupScreen onComplete={u=>{setUser(u);setLoggedIn(false);}} onLangChange={handleLangChange}/>;
  if (!loggedIn) return <LoginScreen user={user} onLogin={()=>{ setLoggedIn(true); setShowWelcome(true); }} onReset={handleReset}/>;
  if (showWelcome) return <WelcomeBackScreen user={user} onContinue={()=>setShowWelcome(false)} t={t}/>;
  if (!todayLog) return <WellnessScreen user={user} onSubmit={log=>setTodayLog(log)} langCode={langCode} onLangChange={handleLangChange} t={t}/>;
  return <MainApp user={user} todayLog={todayLog} onReset={handleReset} langCode={langCode} onLangChange={handleLangChange} t={t} onRecheckWellness={()=>setTodayLog(null)} onUserUpdate={u=>{setUser(u);saveState("user",u);}}/>;
}
