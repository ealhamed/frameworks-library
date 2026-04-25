// Diagram SVG generators. Each returns an <svg> string given a typed config.

const INK = 'var(--text, #1a1714)';
const ACCENT = 'var(--accent, #b05a3a)';
const MUTED = 'var(--muted, #4a4640)';

const FONT_LABEL = 'DM Serif Display, Cormorant Garamond, serif';
const FONT_SUB = 'Inter, sans-serif';

function esc(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── pentagon ──────────────────────────────────────────────
// vertices: [{label, desc}, ...] (exactly 5)
function pentagon({ vertices }) {
  // Pentagon geometry: center (400, 250), radius 170, starting from top
  const cx = 400, cy = 250, r = 170;
  const angles = [-90, -18, 54, 126, 198]; // degrees, starting from top, clockwise
  const pts = angles.map(a => {
    const rad = a * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });

  const edges = [];
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      edges.push([i, j]);
    }
  }

  const edgeStrokes = edges.map(([i, j]) =>
    `<line x1="${pts[i].x.toFixed(0)}" y1="${pts[i].y.toFixed(0)}" x2="${pts[j].x.toFixed(0)}" y2="${pts[j].y.toFixed(0)}"/>`
  ).join('\n        ');

  const dots = pts.map(p =>
    `<circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="7"/>`
  ).join('\n        ');

  // Label positions — outside the pentagon
  const labelPlacements = [
    { x: cx, y: pts[0].y - 28, anchor: 'middle', subDy: -18 },                        // top
    { x: pts[1].x + 18, y: pts[1].y - 4, anchor: 'start', subDy: 18 },                 // upper-right
    { x: pts[2].x + 18, y: pts[2].y + 8, anchor: 'start', subDy: 18 },                 // lower-right — nudged right
    { x: pts[3].x - 18, y: pts[3].y + 8, anchor: 'end', subDy: 18 },                   // lower-left
    { x: pts[4].x - 18, y: pts[4].y - 4, anchor: 'end', subDy: 18 }                    // upper-left
  ];

  const labels = vertices.map((v, i) => {
    const p = labelPlacements[i];
    return `
        <text x="${p.x}" y="${p.y}" text-anchor="${p.anchor}">${esc(v.label)}</text>`;
  }).join('');

  const subs = vertices.map((v, i) => {
    const p = labelPlacements[i];
    return `
        <text x="${p.x}" y="${p.y + p.subDy}" text-anchor="${p.anchor}">${esc(v.desc)}</text>`;
  }).join('');

  return `<svg viewBox="-140 -20 920 580" role="img" aria-label="Pentagon diagram" xmlns="http://www.w3.org/2000/svg" class="pentagon">
      <defs>
        <filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
          <feDisplacementMap in="SourceGraphic" scale="1.2"/>
        </filter>
      </defs>
      <g stroke="${INK}" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.85" filter="url(#ink)">
        ${edgeStrokes}
      </g>
      <g fill="${ACCENT}">
        ${dots}
      </g>
      <g font-family="${FONT_LABEL}" font-size="24" fill="${INK}">${labels}
      </g>
      <g font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${subs}
      </g>
    </svg>`;
}

// ── 2x2 matrix ────────────────────────────────────────────
// { xAxis: {label, lo, hi}, yAxis: {label, lo, hi}, quadrants: [{pos:'tl'|'tr'|'bl'|'br', label, highlight?}] }
function matrix2x2({ xAxis, yAxis, quadrants }) {
  const posMap = {
    tl: { x: 180, y: 130, cx: 180, cy: 130 },
    tr: { x: 420, y: 130, cx: 420, cy: 130 },
    bl: { x: 180, y: 330, cx: 180, cy: 330 },
    br: { x: 420, y: 330, cx: 420, cy: 330 },
  };

  const cells = quadrants.map(q => {
    const p = posMap[q.pos];
    const fill = q.highlight ? ACCENT : INK;
    const fillOpacity = q.highlight ? 0.92 : 0.06;
    const textFill = q.highlight ? 'var(--bg-elevated, #fffdf8)' : INK;
    const textWeight = q.highlight ? 500 : 500;
    return `
        <rect x="${p.x - 110}" y="${p.y - 70}" width="220" height="140" fill="${fill}" fill-opacity="${fillOpacity}" stroke="${INK}" stroke-width="2"/>
        <text x="${p.x}" y="${p.y}" text-anchor="middle" font-family="${FONT_LABEL}" font-size="22" font-weight="${textWeight}" fill="${textFill}">${esc(q.label)}</text>`;
  }).join('');

  return `<svg viewBox="20 40 600 400" role="img" aria-label="2x2 matrix" xmlns="http://www.w3.org/2000/svg" class="matrix">
      <g>
        ${cells}
      </g>
      <!-- axis labels -->
      <g font-family="${FONT_SUB}" font-size="15" fill="${MUTED}" font-style="italic">
        <text x="60" y="230" text-anchor="middle" transform="rotate(-90, 60, 230)">${esc(yAxis.label)}</text>
        <text x="60" y="100" text-anchor="middle" transform="rotate(-90, 60, 100)">${esc(yAxis.hi)}</text>
        <text x="60" y="360" text-anchor="middle" transform="rotate(-90, 60, 360)">${esc(yAxis.lo)}</text>
        <text x="300" y="425" text-anchor="middle">${esc(xAxis.label)}</text>
        <text x="180" y="410" text-anchor="middle">${esc(xAxis.lo)}</text>
        <text x="420" y="410" text-anchor="middle">${esc(xAxis.hi)}</text>
      </g>
    </svg>`;
}

// ── hexagon ───────────────────────────────────────────────
// vertices: [{label, icon, desc?}] (6)
function hexagon({ vertices, centerLabel }) {
  const cx = 400, cy = 250, r = 160;
  const angles = [-90, -30, 30, 90, 150, 210];
  const pts = angles.map(a => {
    const rad = a * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });

  const polyPoints = pts.map(p => `${p.x.toFixed(0)},${p.y.toFixed(0)}`).join(' ');

  const dots = pts.map(p =>
    `<circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="7" fill="${ACCENT}"/>`
  ).join('\n        ');

  const labelOffsets = [
    { dx: 0, dy: -22, anchor: 'middle' },  // top
    { dx: 22, dy: -2,  anchor: 'start' },   // upper-right
    { dx: 22, dy: 14,  anchor: 'start' },   // lower-right
    { dx: 0,  dy: 32,  anchor: 'middle' },  // bottom
    { dx: -22, dy: 14, anchor: 'end' },     // lower-left
    { dx: -22, dy: -2, anchor: 'end' }      // upper-left
  ];

  const labels = vertices.map((v, i) => {
    const p = pts[i], o = labelOffsets[i];
    return `<text x="${(p.x + o.dx).toFixed(0)}" y="${(p.y + o.dy).toFixed(0)}" text-anchor="${o.anchor}" font-family="${FONT_LABEL}" font-size="20" fill="${INK}">${esc(v.label)}</text>`;
  }).join('\n        ');

  return `<svg viewBox="-100 -20 960 580" role="img" aria-label="Hexagon diagram" xmlns="http://www.w3.org/2000/svg" class="hexagon">
      <defs>
        <filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="5"/>
          <feDisplacementMap in="SourceGraphic" scale="1.2"/>
        </filter>
      </defs>
      <polygon points="${polyPoints}" fill="none" stroke="${INK}" stroke-width="1.2" stroke-linejoin="round" opacity="0.85" filter="url(#ink)"/>
      <g>
        ${dots}
      </g>
      <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-family="${FONT_LABEL}" font-size="20" fill="${INK}">${esc(centerLabel?.title || '')}</text>
      <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-family="${FONT_SUB}" font-size="11" fill="${MUTED}" font-style="italic">${esc(centerLabel?.sub || '')}</text>
      <g>
        ${labels}
      </g>
    </svg>`;
}

// ── inverted-U curve (Yerkes-Dodson or similar) ───────────
// { title, xAxis, yAxis, peakLabel }
function curveInvertedU({ xAxis, yAxis, peakLabel }) {
  const path = 'M 100 380 Q 300 80 500 380';
  return `<svg viewBox="0 0 640 440" role="img" aria-label="Inverted-U curve" xmlns="http://www.w3.org/2000/svg" class="curve">
      <defs>
        <filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="4"/>
          <feDisplacementMap in="SourceGraphic" scale="1"/>
        </filter>
      </defs>
      <line x1="70" y1="380" x2="570" y2="380" stroke="${INK}" stroke-width="1"/>
      <line x1="70" y1="380" x2="70" y2="60" stroke="${INK}" stroke-width="1"/>
      <path d="${path}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" filter="url(#ink)"/>
      <circle cx="300" cy="155" r="8" fill="${ACCENT}"/>
      <text x="300" y="140" text-anchor="middle" font-family="${FONT_LABEL}" font-size="18" fill="${ACCENT}">${esc(peakLabel || 'peak')}</text>
      <text x="320" y="422" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xAxis)}</text>
      <text x="30" y="220" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic" transform="rotate(-90, 30, 220)">${esc(yAxis)}</text>
    </svg>`;
}

// ── S-curve (prospect theory, asymmetric loss aversion) ─────
function curveS({ xLabels = { left: 'Losses', right: 'Gains' }, yLabel = 'Value', lossAversion = true }) {
  // Left branch (losses) drops sharply below origin; right branch (gains) rises gently.
  // Origin at (320, 220). Kink at origin when lossAversion=true.
  const path = lossAversion
    ? 'M 100 420 C 180 410 260 400 310 240 L 320 220 L 330 200 C 380 130 460 100 540 90'
    : 'M 100 380 C 220 360 280 310 320 220 C 360 130 450 90 540 80';
  const guide = lossAversion ? `
      <line x1="100" y1="220" x2="100" y2="420" stroke="${MUTED}" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
      <line x1="540" y1="220" x2="540" y2="90"  stroke="${MUTED}" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
      <text x="100" y="440" text-anchor="middle" font-family="${FONT_SUB}" font-size="11" fill="${MUTED}" font-style="italic">pain</text>
      <text x="540" y="440" text-anchor="middle" font-family="${FONT_SUB}" font-size="11" fill="${MUTED}" font-style="italic">pleasure</text>` : '';
  return `<svg viewBox="0 0 640 460" role="img" aria-label="Asymmetric S-curve (loss aversion)" xmlns="http://www.w3.org/2000/svg" class="curve">
      <line x1="70" y1="220" x2="570" y2="220" stroke="${INK}" stroke-width="1"/>
      <line x1="320" y1="60" x2="320" y2="400" stroke="${INK}" stroke-width="1"/>
      <path d="${path}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      ${guide}
      <text x="180" y="210" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xLabels.left)}</text>
      <text x="460" y="210" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xLabels.right)}</text>
      <text x="330" y="76" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(yLabel)}</text>
    </svg>`;
}

// ── U-curve with bottom sweet spot (overfitting valley) ─────
function curveU({ xAxis, yAxis, bottomLabel = 'sweet spot', leftCurveLabel, rightCurveLabel }) {
  // Two curves: training error monotonically falling; validation error U-shaped.
  const training = 'M 100 120 C 200 180 320 280 540 370';
  const validation = 'M 100 110 C 200 240 320 340 420 320 C 480 310 520 330 540 120';
  return `<svg viewBox="0 0 640 440" role="img" aria-label="Training vs validation error U-curve" xmlns="http://www.w3.org/2000/svg" class="curve">
      <line x1="70" y1="380" x2="570" y2="380" stroke="${INK}" stroke-width="1"/>
      <line x1="70" y1="380" x2="70" y2="60" stroke="${INK}" stroke-width="1"/>
      <path d="${training}" fill="none" stroke="${MUTED}" stroke-width="1.5" stroke-dasharray="6 4" stroke-linecap="round"/>
      <path d="${validation}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      ${leftCurveLabel ? `<text x="180" y="230" font-family="${FONT_SUB}" font-size="12" fill="${MUTED}" font-style="italic">${esc(leftCurveLabel)}</text>` : ''}
      ${rightCurveLabel ? `<text x="350" y="360" font-family="${FONT_SUB}" font-size="12" fill="${MUTED}" font-style="italic">${esc(rightCurveLabel)}</text>` : ''}
      <circle cx="420" cy="320" r="8" fill="${ACCENT}"/>
      <text x="420" y="300" text-anchor="middle" font-family="${FONT_LABEL}" font-size="17" fill="${ACCENT}">${esc(bottomLabel)}</text>
      <text x="320" y="422" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xAxis)}</text>
      <text x="30" y="220" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic" transform="rotate(-90, 30, 220)">${esc(yAxis)}</text>
    </svg>`;
}

// ── Bell family (Central Limit Theorem — distributions tightening) ─
function bellFamily({ xAxis = 'sample mean', yAxis = 'density', centerLabel = 'true mean', curveLabels = ['n small', 'n medium', 'n large'] }) {
  // Three overlapping bell curves, same center, progressively tighter.
  const cx = 320;
  // Approximate bell: M (cx-w) 360 Q cx peakY (cx+w) 360
  const bells = [
    { w: 200, peakY: 180, opacity: 0.35, label: curveLabels[0] },
    { w: 130, peakY: 140, opacity: 0.6,  label: curveLabels[1] },
    { w:  70, peakY:  90, opacity: 1.0,  label: curveLabels[2] }
  ];
  const paths = bells.map(b =>
    `<path d="M ${cx - b.w} 360 Q ${cx} ${b.peakY} ${cx + b.w} 360" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity="${b.opacity}"/>`
  ).join('\n      ');
  const bellLabels = bells.map((b, i) => {
    const lx = cx + b.w + 8;
    const ly = 356 - i * 4;
    return `<text x="${lx}" y="${ly}" font-family="${FONT_SUB}" font-size="11" fill="${MUTED}" font-style="italic" opacity="${b.opacity}">${esc(b.label)}</text>`;
  }).join('\n      ');
  return `<svg viewBox="0 0 640 440" role="img" aria-label="Distributions tightening with sample size" xmlns="http://www.w3.org/2000/svg" class="curve">
      <line x1="70" y1="360" x2="570" y2="360" stroke="${INK}" stroke-width="1"/>
      <line x1="${cx}" y1="360" x2="${cx}" y2="70" stroke="${MUTED}" stroke-width="1" stroke-dasharray="3 4"/>
      ${paths}
      ${bellLabels}
      <text x="${cx}" y="60" text-anchor="middle" font-family="${FONT_LABEL}" font-size="16" fill="${ACCENT}">${esc(centerLabel)}</text>
      <text x="320" y="410" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xAxis)}</text>
      <text x="40" y="220" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic" transform="rotate(-90, 40, 220)">${esc(yAxis)}</text>
    </svg>`;
}

// ── Supply & Demand (X-crossing with optional shift) ──────
function supplyDemand({
  title: _t, // unused, for caller readability
  shift = null,               // null | 'demand-right' | 'demand-left' | 'supply-right' | 'supply-left'
  xAxis = 'quantity',
  yAxis = 'price',
  equilibriumLabel = 'equilibrium',
  shiftedLabel = "equilibrium'"
} = {}) {
  // Axis box: x 90..570, y 60..380.
  // Demand (downward): (110, 90) → (560, 350)
  // Supply (upward):   (110, 350) → (560, 90)
  // Original equilibrium at the cross: (335, 220).
  const demand = 'M 110 90 L 560 350';
  const supply = 'M 110 350 L 560 90';
  let shiftedPath = '';
  let shiftedEq = null;
  if (shift === 'demand-right') {
    shiftedPath = 'M 200 90 L 640 350';
    shiftedEq = { x: 410, y: 170 };
  } else if (shift === 'demand-left') {
    shiftedPath = 'M 40 90 L 490 350';
    shiftedEq = { x: 265, y: 270 };
  } else if (shift === 'supply-right') {
    shiftedPath = 'M 200 350 L 640 90';
    shiftedEq = { x: 410, y: 270 };
  } else if (shift === 'supply-left') {
    shiftedPath = 'M 40 350 L 490 90';
    shiftedEq = { x: 265, y: 170 };
  }
  return `<svg viewBox="0 0 640 440" role="img" aria-label="Supply and demand" xmlns="http://www.w3.org/2000/svg" class="curve">
      <line x1="90" y1="380" x2="570" y2="380" stroke="${INK}" stroke-width="1"/>
      <line x1="90" y1="380" x2="90" y2="60" stroke="${INK}" stroke-width="1"/>
      <path d="${demand}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <path d="${supply}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <text x="565" y="355" font-family="${FONT_SUB}" font-size="13" fill="${MUTED}" font-style="italic">D</text>
      <text x="565" y="95"  font-family="${FONT_SUB}" font-size="13" fill="${MUTED}" font-style="italic">S</text>
      ${shiftedPath ? `<path d="${shiftedPath}" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-dasharray="7 5" opacity="0.85"/>` : ''}
      <circle cx="335" cy="220" r="7" fill="${INK}"/>
      <text x="335" y="205" text-anchor="middle" font-family="${FONT_LABEL}" font-size="15" fill="${INK}">${esc(equilibriumLabel)}</text>
      ${shiftedEq ? `<circle cx="${shiftedEq.x}" cy="${shiftedEq.y}" r="7" fill="${ACCENT}"/>
      <text x="${shiftedEq.x}" y="${shiftedEq.y - 15}" text-anchor="middle" font-family="${FONT_LABEL}" font-size="15" fill="${ACCENT}">${esc(shiftedLabel)}</text>` : ''}
      <text x="320" y="418" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xAxis)}</text>
      <text x="50" y="220" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic" transform="rotate(-90, 50, 220)">${esc(yAxis)}</text>
    </svg>`;
}

// ── Monopoly pricing (D, MR, MC with surplus regions) ─────
function monopoly({ xAxis = 'quantity', yAxis = 'price' } = {}) {
  // Geometry: Demand P = 400 - Q, MR = 400 - 2Q, MC = horizontal at p=150.
  // In SVG units: x-axis q=0..400 maps to px=90..570. y-axis p=0..400 maps to py=380..60.
  // So q px per unit = (570-90)/400 = 1.2 ; p px per unit = (380-60)/400 = 0.8.
  // Demand line from (0,400) to (400,0) → (90, 60) to (570, 380)
  // MR line from (0,400) to (200,0) → (90, 60) to (330, 380)
  // MC horizontal at p=150 → py=380-150*0.8=260, from x=90 to x=570
  // Monopoly: MR=MC → 400-2Q=150 → Q=125, P=275, px(Q)=90+125*1.2=240, py(P)=380-275*0.8=160
  // Perfect comp: P=MC → 400-Q=150 → Q=250, P=150, px=90+250*1.2=390, py=260
  // Profit rectangle: from Q=0 at P=150 to Q=125 at P=275 → (90,160)→(240,260)
  // Deadweight loss triangle: (240,160) (240,260) (390,260) — no wait:
  //   DWL is between MC and D, from Q_monop (125) to Q_comp (250).
  //   Vertices: monopoly point on D (240,160), perfect-comp point (390,260), and monopoly point on MC (240,260).
  // Consumer surplus (monopoly): triangle (90,60), (90,160), (240,160)
  return `<svg viewBox="0 0 640 440" role="img" aria-label="Monopoly vs competitive pricing" xmlns="http://www.w3.org/2000/svg" class="curve monopoly">
      <line x1="90" y1="380" x2="570" y2="380" stroke="${INK}" stroke-width="1"/>
      <line x1="90" y1="380" x2="90" y2="60" stroke="${INK}" stroke-width="1"/>
      <!-- CS (monopoly) -->
      <polygon points="90,60 90,160 240,160" fill="${ACCENT}" fill-opacity="0.12"/>
      <!-- Profit rectangle -->
      <polygon points="90,160 240,160 240,260 90,260" fill="${ACCENT}" fill-opacity="0.35"/>
      <!-- DWL triangle -->
      <polygon points="240,160 390,260 240,260" fill="${INK}" fill-opacity="0.22"/>
      <!-- Demand -->
      <path d="M 90 60 L 570 380" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <!-- MR -->
      <path d="M 90 60 L 330 380" fill="none" stroke="${INK}" stroke-width="1.5" stroke-dasharray="6 4" stroke-linecap="round"/>
      <!-- MC -->
      <path d="M 90 260 L 570 260" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <!-- Curve labels -->
      <text x="575" y="382" font-family="${FONT_SUB}" font-size="13" fill="${MUTED}" font-style="italic">D</text>
      <text x="335" y="382" font-family="${FONT_SUB}" font-size="13" fill="${MUTED}" font-style="italic">MR</text>
      <text x="575" y="258" font-family="${FONT_SUB}" font-size="13" fill="${MUTED}" font-style="italic">MC</text>
      <!-- Monopoly point -->
      <circle cx="240" cy="160" r="6" fill="${INK}"/>
      <line x1="240" y1="160" x2="240" y2="380" stroke="${MUTED}" stroke-width="1" stroke-dasharray="3 4" opacity="0.7"/>
      <line x1="240" y1="160" x2="90" y2="160" stroke="${MUTED}" stroke-width="1" stroke-dasharray="3 4" opacity="0.7"/>
      <!-- Perfect comp point -->
      <circle cx="390" cy="260" r="6" fill="${INK}" fill-opacity="0.55"/>
      <line x1="390" y1="260" x2="390" y2="380" stroke="${MUTED}" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
      <!-- Labels -->
      <text x="82" y="164" text-anchor="end" font-family="${FONT_LABEL}" font-size="13" fill="${INK}">Pₘ</text>
      <text x="82" y="264" text-anchor="end" font-family="${FONT_LABEL}" font-size="13" fill="${INK}">P_c = MC</text>
      <text x="240" y="400" text-anchor="middle" font-family="${FONT_LABEL}" font-size="13" fill="${INK}">Qₘ</text>
      <text x="390" y="400" text-anchor="middle" font-family="${FONT_LABEL}" font-size="13" fill="${INK}">Q_c</text>
      <!-- Region labels -->
      <text x="155" y="115" text-anchor="middle" font-family="${FONT_SUB}" font-size="12" fill="${ACCENT}" font-style="italic">CS</text>
      <text x="165" y="215" text-anchor="middle" font-family="${FONT_SUB}" font-size="12" fill="${ACCENT}" font-weight="600">profit</text>
      <text x="295" y="222" text-anchor="middle" font-family="${FONT_SUB}" font-size="11" fill="${INK}" font-style="italic">DWL</text>
      <text x="320" y="428" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xAxis)}</text>
      <text x="50" y="220" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic" transform="rotate(-90, 50, 220)">${esc(yAxis)}</text>
    </svg>`;
}

// ── scatter with fit line + residuals ────────────────────
// { xLabel, yLabel, note }
function scatter({ xLabel = 'x', yLabel = 'y', note = '' }) {
  // Deterministic seeded "random" so the picture is stable build-to-build.
  let seed = 17;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const x0 = 90, y0 = 360, xN = 560, yN = 60;
  const n = 22;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const fx = i / (n - 1);
    const jitterX = (rand() - 0.5) * 0.06;
    const cx = x0 + (xN - x0) * (fx + jitterX);
    const fy = 0.15 + fx * 0.72 + (rand() - 0.5) * 0.28; // upward trend with noise
    const cy = yN + (y0 - yN) * (1 - fy);
    pts.push({ x: cx, y: cy, fx });
  }

  // Fit line: y = a + b x in viewbox coords (manual OLS on pts)
  const meanX = pts.reduce((s,p)=>s+p.x,0)/n;
  const meanY = pts.reduce((s,p)=>s+p.y,0)/n;
  let num = 0, den = 0;
  pts.forEach(p => { num += (p.x-meanX)*(p.y-meanY); den += (p.x-meanX)*(p.x-meanX); });
  const b = num/den;
  const a = meanY - b*meanX;
  const lineY = (x) => a + b*x;

  const residualIdx = [3, 9, 15]; // a few representative drops
  const residuals = residualIdx.map(i => {
    const p = pts[i];
    return `<line x1="${p.x.toFixed(0)}" y1="${p.y.toFixed(0)}" x2="${p.x.toFixed(0)}" y2="${lineY(p.x).toFixed(0)}" stroke="${ACCENT}" stroke-width="1.2" stroke-dasharray="2 3" opacity="0.9"/>`;
  }).join('\n        ');

  const dots = pts.map(p =>
    `<circle cx="${p.x.toFixed(0)}" cy="${p.y.toFixed(0)}" r="4.5" fill="${INK}" fill-opacity="0.78"/>`
  ).join('\n        ');

  const lx1 = x0 + 10, lx2 = xN - 10;
  const ly1 = lineY(lx1), ly2 = lineY(lx2);

  return `<svg viewBox="0 0 640 440" role="img" aria-label="Scatter with fit line" xmlns="http://www.w3.org/2000/svg" class="curve">
      <!-- axes -->
      <line x1="${x0}" y1="${y0}" x2="${xN + 10}" y2="${y0}" stroke="${INK}" stroke-width="1"/>
      <line x1="${x0}" y1="${y0}" x2="${x0}" y2="${yN - 10}" stroke="${INK}" stroke-width="1"/>
      <!-- fitted line -->
      <line x1="${lx1.toFixed(0)}" y1="${ly1.toFixed(0)}" x2="${lx2.toFixed(0)}" y2="${ly2.toFixed(0)}" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <!-- residual drops -->
      <g>
        ${residuals}
      </g>
      <!-- dots -->
      <g>
        ${dots}
      </g>
      <!-- axis labels -->
      <text x="${(x0 + xN)/2}" y="${y0 + 48}" text-anchor="middle" font-family="${FONT_SUB}" font-size="15" fill="${MUTED}" font-style="italic">${esc(xLabel)}</text>
      <text x="${x0 - 36}" y="${(y0 + yN)/2}" text-anchor="middle" font-family="${FONT_SUB}" font-size="15" fill="${MUTED}" font-style="italic" transform="rotate(-90, ${x0 - 36}, ${(y0 + yN)/2})">${esc(yLabel)}</text>
      ${note ? `<text x="${xN - 6}" y="${yN + 14}" text-anchor="end" font-family="${FONT_SUB}" font-size="13" fill="${ACCENT}" font-style="italic">${esc(note)}</text>` : ''}
    </svg>`;
}

// ── network (hub + spokes) ───────────────────────────────
// { center: 'label', satellites: [{label}...]}
function network({ center, satellites }) {
  const cx = 320, cy = 240;
  const n = satellites.length;
  const r = 160;

  const spokes = satellites.map((s, i) => {
    const angle = -90 + (360 / n) * i;
    const rad = angle * Math.PI / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    return { x, y, label: s.label };
  });

  const lines = spokes.map(s =>
    `<line x1="${cx}" y1="${cy}" x2="${s.x.toFixed(0)}" y2="${s.y.toFixed(0)}" stroke="${INK}" stroke-width="1.2" opacity="0.8"/>`
  ).join('\n        ');

  const dots = spokes.map(s =>
    `<circle cx="${s.x.toFixed(0)}" cy="${s.y.toFixed(0)}" r="10" fill="${ACCENT}"/>`
  ).join('\n        ');

  const labels = spokes.map(s => {
    // place label slightly past the dot on the spoke direction
    const dx = s.x - cx, dy = s.y - cy;
    const len = Math.sqrt(dx*dx + dy*dy);
    const nx = dx / len, ny = dy / len;
    // Shift horizontal labels further out so they don't land on the hub
    const isHorizontal = Math.abs(ny) < 0.3;
    const outDist = isHorizontal ? 52 : 32;
    const lx = s.x + nx * outDist;
    const ly = s.y + ny * outDist + 5;
    const anchor = Math.abs(nx) > 0.6 ? (nx > 0 ? 'start' : 'end') : 'middle';
    return `<text x="${lx.toFixed(0)}" y="${ly.toFixed(0)}" text-anchor="${anchor}" font-family="${FONT_LABEL}" font-size="19" fill="${INK}">${esc(s.label)}</text>`;
  }).join('\n        ');

  return `<svg viewBox="-60 0 760 480" role="img" aria-label="Network diagram" xmlns="http://www.w3.org/2000/svg" class="network">
      <g>
        ${lines}
      </g>
      <circle cx="${cx}" cy="${cy}" r="34" fill="${INK}"/>
      <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-family="${FONT_LABEL}" font-size="18" fill="var(--bg-elevated, #fffdf8)">${esc(center)}</text>
      ${dots}
      ${labels}
    </svg>`;
}

// ── linear arrow flow ─────────────────────────────────────
// { steps: ['A','B','C','D'] }
function linear({ steps }) {
  const n = steps.length;
  const width = 640, height = 140;
  const gap = width / n;
  const boxes = steps.map((s, i) => {
    const x = gap * i + gap / 2;
    return `
        <text x="${x}" y="78" text-anchor="middle" font-family="${FONT_LABEL}" font-size="24" fill="${INK}">${esc(s)}</text>
        ${i < n - 1 ? `<text x="${x + gap/2}" y="76" text-anchor="middle" font-family="${FONT_SUB}" font-size="22" fill="${ACCENT}">→</text>` : ''}`;
  }).join('');
  const horizontal = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Linear flow" xmlns="http://www.w3.org/2000/svg" class="linear-h">
      <g>
        ${boxes}
      </g>
    </svg>`;
  const verticalRows = steps.map((s, i) => `
        <div class="lin-step">${esc(s)}</div>
        ${i < n - 1 ? `<div class="lin-arrow">↓</div>` : ''}`).join('');
  const vertical = `<div class="linear-v">${verticalRows}
      </div>`;
  return `<div class="linear">${horizontal}${vertical}</div>`;
}

// ── equation display (simple text block, styled via CSS) ──
function equation({ lhs, rhs }) {
  return `<div class="equation"><span class="lhs">${esc(lhs)}</span> <span class="eq">=</span> <span class="rhs">${esc(rhs)}</span></div>`;
}

// ── custom (passthrough) ──────────────────────────────────
function custom({ svg }) {
  return svg;
}

// ── flow (numbered stations with label + description) ─────
// steps: [{label, desc}, ...]
function flow({ steps = [] }) {
  const cards = steps.map((s, i) => `
        <li class="flow-step">
          <div class="flow-step-num">${i + 1}</div>
          <div class="flow-step-body">
            <div class="flow-step-label">${esc(s.label || '')}</div>
            ${s.desc ? `<div class="flow-step-desc">${esc(s.desc)}</div>` : ''}
          </div>
        </li>`).join('');
  return `<ol class="flow">${cards}
      </ol>`;
}

// ── two-axis (X/Y with labelled extremes + axes) ──────────
// xAxis: {label, lowDesc, highDesc}, yAxis: {label, lowDesc, highDesc}
// SVG holds short labels only (low/high arrows). Long descriptions render as
// an HTML legend below the chart — SVG <text> doesn't wrap, so multi-clause
// descriptions would otherwise overflow into an unreadable smear.
function twoAxis({ xAxis = {}, yAxis = {} }) {
  const ariaParts = [];
  if (yAxis.label) ariaParts.push('vertical axis is ' + yAxis.label);
  if (xAxis.label) ariaParts.push('horizontal axis is ' + xAxis.label);
  const aria = ariaParts.length ? 'Two-axis chart: ' + ariaParts.join('; ') : 'Two-axis chart';

  const svg = `<svg viewBox="0 0 640 420" role="img" aria-label="${esc(aria)}" xmlns="http://www.w3.org/2000/svg" class="two-axis">
      <defs>
        <marker id="ta-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="${INK}"/>
        </marker>
      </defs>
      <line x1="120" y1="350" x2="600" y2="350" stroke="${INK}" stroke-width="2" marker-end="url(#ta-arrow)"/>
      <line x1="120" y1="350" x2="120" y2="30"  stroke="${INK}" stroke-width="2" marker-end="url(#ta-arrow)"/>
      <g font-family="${FONT_LABEL}" font-size="20" fill="${INK}">
        <text x="360" y="395" text-anchor="middle">${esc(xAxis.label || '')}</text>
        <text x="50" y="190" text-anchor="middle" transform="rotate(-90, 50, 190)">${esc(yAxis.label || '')}</text>
      </g>
      <g font-family="${FONT_SUB}" font-size="13" fill="${MUTED}" font-style="italic">
        <text x="125" y="370" text-anchor="start">low →</text>
        <text x="595" y="370" text-anchor="end">high</text>
        <text x="105" y="350" text-anchor="end">low</text>
        <text x="105" y="40"  text-anchor="end">↑ high</text>
      </g>
    </svg>`;

  const legendRow = (axis, fallbackLabel) => {
    if (!axis || (!axis.lowDesc && !axis.highDesc)) return '';
    return `
      <div class="ta-legend-row">
        <div class="ta-legend-label">${esc(axis.label || fallbackLabel)}</div>
        ${axis.lowDesc ? `<div class="ta-legend-end"><span class="ta-legend-tag">low</span><span>${esc(axis.lowDesc)}</span></div>` : ''}
        ${axis.highDesc ? `<div class="ta-legend-end"><span class="ta-legend-tag">high</span><span>${esc(axis.highDesc)}</span></div>` : ''}
      </div>`;
  };

  return `<div class="two-axis-wrap">
      ${svg}
      <div class="ta-legend">
        ${legendRow(yAxis, 'Y axis')}
        ${legendRow(xAxis, 'X axis')}
      </div>
    </div>`;
}

// ── decision-tree (nested HTML — questions + labelled branches) ────
// nodes: [{id, question, branches: [{label, leadsTo}]}]
// `leadsTo` is either another node id (looked up by id) or a free-text outcome.
function decisionTree({ nodes = [] }) {
  if (!nodes.length) return '<p class="muted">[empty decision tree]</p>';
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const seen = new Set();
  function walk(node, depth = 0) {
    if (!node || seen.has(node.id)) return '';
    seen.add(node.id);
    const branches = (node.branches || []).map(b => {
      const leadsToNode = byId[b.leadsTo];
      const child = leadsToNode
        ? walk(leadsToNode, depth + 1)
        : `<div class="dt-leaf">${esc(b.leadsTo || '')}</div>`;
      return `
            <li class="dt-branch">
              <div class="dt-edge-label">${esc(b.label || '')}</div>
              ${child}
            </li>`;
    }).join('');
    return `
        <div class="dt-node">
          <div class="dt-question">${esc(node.question || '')}</div>
          ${branches ? `<ul class="dt-branches">${branches}
          </ul>` : ''}
        </div>`;
  }
  return `<div class="decision-tree">${walk(nodes[0])}
      </div>`;
}

module.exports = { pentagon, matrix2x2, hexagon, curveInvertedU, curveU, curveS, bellFamily, supplyDemand, monopoly, scatter, network, linear, equation, custom, flow, twoAxis, decisionTree };
