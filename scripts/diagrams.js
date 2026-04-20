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
    const textFill = q.highlight ? '#fffdf8' : INK;
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

// ── S-curve (prospect theory) ─────────────────────────────
function curveS({ xLabels = { left: 'Losses', right: 'Gains' }, yLabel = 'Value' }) {
  return `<svg viewBox="0 0 640 440" role="img" aria-label="S-curve" xmlns="http://www.w3.org/2000/svg" class="curve">
      <line x1="70" y1="220" x2="570" y2="220" stroke="${INK}" stroke-width="1"/>
      <line x1="320" y1="60" x2="320" y2="400" stroke="${INK}" stroke-width="1"/>
      <path d="M 100 380 C 220 360 280 310 320 220 C 360 130 450 90 540 80" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
      <text x="100" y="422" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xLabels.left)}</text>
      <text x="540" y="422" text-anchor="middle" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(xLabels.right)}</text>
      <text x="330" y="76" font-family="${FONT_SUB}" font-size="14" fill="${MUTED}" font-style="italic">${esc(yLabel)}</text>
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
      <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-family="${FONT_LABEL}" font-size="18" fill="#fffdf8">${esc(center)}</text>
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

module.exports = { pentagon, matrix2x2, hexagon, curveInvertedU, curveS, scatter, network, linear, equation, custom };
