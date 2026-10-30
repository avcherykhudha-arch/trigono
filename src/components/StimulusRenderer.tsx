import React from 'react';
import { QuestionStimulus, SingleGraphConfig, TriangleConfig, CartesianPointConfig } from '../types/trigonometry';
import { MathView } from './MathView';
import { Eye, Compass, Triangle, Sparkles } from 'lucide-react';

interface StimulusRendererProps {
  stimulus: QuestionStimulus;
  compact?: boolean;
}

export const StimulusRenderer: React.FC<StimulusRendererProps> = ({ stimulus, compact = false }) => {
  switch (stimulus.type) {
    case 'single_graph':
      return stimulus.graph ? (
        <SingleGraphView graph={stimulus.graph} title={stimulus.title} compact={compact} />
      ) : null;

    case 'triangle_diagram':
      return stimulus.triangle ? (
        <TriangleView triangle={stimulus.triangle} title={stimulus.title} description={stimulus.description} />
      ) : null;

    case 'cartesian_point':
      return stimulus.cartesian ? (
        <CartesianPointView cartesian={stimulus.cartesian} title={stimulus.title} description={stimulus.description} />
      ) : null;

    case 'identity_formula':
    default:
      return (
        <div className="bg-slate-800/90 border border-cyan-500/30 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{stimulus.title || 'Stimulus Aljabar Trigonometri'}</span>
          </div>
          {stimulus.formulaLatex && (
            <div className="bg-slate-950/70 border border-slate-700/60 rounded-xl p-4 my-2 text-center text-xl sm:text-2xl text-cyan-100 overflow-x-auto">
              <MathView expression={stimulus.formulaLatex} />
            </div>
          )}
          {stimulus.description && (
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              {stimulus.description}
            </p>
          )}
        </div>
      );
  }
};

/**
 * High-Precision SVG Graph plotted strictly from mathematical functions.
 */
export const SingleGraphView: React.FC<{
  graph: SingleGraphConfig;
  title?: string;
  compact?: boolean;
  overrideHeight?: number;
}> = ({ graph, title, compact = false, overrideHeight }) => {
  const width = 640;
  const height = overrideHeight || (compact ? 220 : 300);
  const padding = { top: 35, right: 40, bottom: 45, left: 55 };

  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const yMin = graph.yMin ?? -3;
  const yMax = graph.yMax ?? 3;
  const domainMin = graph.domainDeg[0] ?? 0;
  const domainMax = graph.domainDeg[1] ?? 360;

  // Coordinate transforms
  const xScale = (deg: number) => {
    return padding.left + ((deg - domainMin) / (domainMax - domainMin)) * innerWidth;
  };

  const yScale = (val: number) => {
    return padding.top + ((yMax - val) / (yMax - yMin)) * innerHeight;
  };

  // Generate curve path with 2-degree step
  const pathPoints: [number, number][] = [];
  const step = 2;
  for (let deg = domainMin; deg <= domainMax; deg += step) {
    const rad = ((graph.frequency * (deg - graph.phaseShiftDeg)) * Math.PI) / 180;
    const trigVal = graph.type === 'sin' ? Math.sin(rad) : Math.cos(rad);
    const yVal = graph.amplitude * trigVal + graph.verticalShift;
    pathPoints.push([xScale(deg), yScale(yVal)]);
  }

  const dPath = pathPoints.reduce((acc, [x, y], i) => {
    return i === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)}` : `${acc} L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }, '');

  // Grid Ticks
  const xTicks = [0, 90, 180, 270, 360].filter(d => d >= domainMin && d <= domainMax);
  const yTicks = [-3, -2, -1, 0, 1, 2, 3].filter(y => y >= yMin && y <= yMax);

  const zeroY = yScale(0);
  const zeroX = xScale(0);

  return (
    <div className="w-full bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-sm">
      {title && (
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs sm:text-sm">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>{title}</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
            Domain: {domainMin}° - {domainMax}°
          </span>
        </div>
      )}

      <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto select-none font-sans"
          role="img"
          aria-label={title || 'Grafik Trigonometri'}
        >
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38bdf8" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Grid lines */}
          {xTicks.map(xDeg => {
            const x = xScale(xDeg);
            return (
              <g key={`x-grid-${xDeg}`}>
                <line
                  x1={x}
                  y1={padding.top}
                  x2={x}
                  y2={height - padding.bottom}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <text
                  x={x}
                  y={height - padding.bottom + 18}
                  fill="#94a3b8"
                  fontSize={compact ? '10' : '11'}
                  textAnchor="middle"
                  fontWeight="500"
                >
                  {xDeg}°
                </text>
              </g>
            );
          })}

          {yTicks.map(yVal => {
            const y = yScale(yVal);
            return (
              <g key={`y-grid-${yVal}`}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                  opacity={yVal === 0 ? "0.2" : "0.5"}
                />
                <text
                  x={padding.left - 10}
                  y={y + 4}
                  fill="#94a3b8"
                  fontSize={compact ? '10' : '11'}
                  textAnchor="end"
                  fontWeight="500"
                >
                  {yVal}
                </text>
              </g>
            );
          })}

          {/* Sumbu X (y = 0) */}
          <line
            x1={padding.left - 5}
            y1={zeroY}
            x2={width - padding.right + 15}
            y2={zeroY}
            stroke="#cbd5e1"
            strokeWidth="1.8"
          />
          <polygon
            points={`${width - padding.right + 18},${zeroY} ${width - padding.right + 10},${zeroY - 4} ${width - padding.right + 10},${zeroY + 4}`}
            fill="#cbd5e1"
          />
          <text
            x={width - padding.right + 25}
            y={zeroY + 4}
            fill="#e2e8f0"
            fontSize="12"
            fontWeight="bold"
          >
            X
          </text>

          {/* Sumbu Y (x = 0) */}
          <line
            x1={zeroX}
            y1={height - padding.bottom + 5}
            x2={zeroX}
            y2={padding.top - 15}
            stroke="#cbd5e1"
            strokeWidth="1.8"
          />
          <polygon
            points={`${zeroX},${padding.top - 18} ${zeroX - 4},${padding.top - 10} ${zeroX + 4},${padding.top - 10}`}
            fill="#cbd5e1"
          />
          <text
            x={zeroX}
            y={padding.top - 24}
            fill="#e2e8f0"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            Y
          </text>

          {/* Sumbu Keseimbangan Vertikal (jika ada pergeseran D != 0) */}
          {graph.verticalShift !== 0 && (
            <g>
              <line
                x1={padding.left}
                y1={yScale(graph.verticalShift)}
                x2={width - padding.right}
                y2={yScale(graph.verticalShift)}
                stroke="#38bdf8"
                strokeDasharray="5 4"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <text
                x={width - padding.right}
                y={yScale(graph.verticalShift) - 6}
                fill="#38bdf8"
                fontSize="10"
                textAnchor="end"
                fontWeight="600"
              >
                Garis Tengah y = {graph.verticalShift}
              </text>
            </g>
          )}

          {/* The Trigonometric Curve */}
          <path
            d={dPath}
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="2.8"
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Key points highlighted with labels */}
          {graph.keyPoints?.map((pt, idx) => {
            const px = xScale(pt.x);
            const py = yScale(pt.y);

            return (
              <g key={`pt-${idx}`}>
                {/* Guidelines to axes */}
                <line
                  x1={px}
                  y1={py}
                  x2={px}
                  y2={zeroY}
                  stroke="#38bdf8"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1={px}
                  y1={py}
                  x2={zeroX}
                  y2={py}
                  stroke="#c084fc"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                  opacity="0.5"
                />

                {/* Point circle */}
                <circle
                  cx={px}
                  cy={py}
                  r={pt.isExtrema ? '5' : '4'}
                  fill={pt.isExtrema ? '#f43f5e' : '#38bdf8'}
                  stroke="#ffffff"
                  strokeWidth="1.8"
                />

                {/* Point label badge */}
                {pt.label && (
                  <g>
                    <rect
                      x={px - 36}
                      y={py > zeroY ? py + 8 : py - 22}
                      width="72"
                      height="16"
                      rx="4"
                      fill="#0f172a"
                      fillOpacity="0.85"
                      stroke="#475569"
                      strokeWidth="0.8"
                    />
                    <text
                      x={px}
                      y={py > zeroY ? py + 20 : py - 10}
                      fill="#e2e8f0"
                      fontSize="9.5"
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      {pt.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

/**
 * Geometric Right Triangle Component with side lengths & acute angle theta
 */
export const TriangleView: React.FC<{
  triangle: TriangleConfig;
  title?: string;
  description?: string;
}> = ({ triangle, title, description }) => {
  return (
    <div className="w-full bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2 text-cyan-300 font-semibold text-sm">
        <Triangle className="w-4 h-4 text-cyan-400 rotate-90" />
        <span>{title || 'Diagram Segitiga Siku-Siku'}</span>
      </div>

      <div className="relative w-full max-w-md mx-auto aspect-[16/10] bg-slate-950/80 rounded-xl border border-slate-800 p-2 flex items-center justify-center">
        <svg viewBox="0 0 400 240" className="w-full h-full select-none">
          <defs>
            <linearGradient id="triGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Vertices: A(60, 190), B(320, 190), C(320, 50) */}
          {/* Siku-siku di B */}
          <polygon
            points="70,190 330,190 330,50"
            fill="url(#triGradient)"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Right angle marker at B (330, 190) */}
          <polyline
            points="312,190 312,172 330,172"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.8"
          />
          <circle cx="321" cy="181" r="1.5" fill="#94a3b8" />

          {/* Angle theta arc at A (70, 190) */}
          <path
            d="M 115 190 A 45 45 0 0 0 106 168"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
          />
          <text x="122" y="180" fill="#fbbf24" fontSize="16" fontWeight="bold">
            θ
          </text>

          {/* Vertex Labels */}
          <text x="48" y="200" fill="#e2e8f0" fontSize="14" fontWeight="bold">
            A
          </text>
          <text x="340" y="200" fill="#e2e8f0" fontSize="14" fontWeight="bold">
            B
          </text>
          <text x="340" y="48" fill="#e2e8f0" fontSize="14" fontWeight="bold">
            C
          </text>

          {/* Side Labels */}
          {/* Adjacent (AB - horizontal bottom) */}
          <text
            x="200"
            y="215"
            fill="#38bdf8"
            fontSize="13"
            fontWeight="600"
            textAnchor="middle"
          >
            {triangle.sideAdjacent.label} (Samping)
          </text>

          {/* Opposite (BC - vertical right) */}
          <text
            x="355"
            y="120"
            fill="#38bdf8"
            fontSize="13"
            fontWeight="600"
            dominantBaseline="middle"
          >
            {triangle.sideOpposite.label} (Depan)
          </text>

          {/* Hypotenuse (AC - diagonal) */}
          <text
            x="180"
            y="105"
            fill="#c084fc"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            {triangle.sideHypotenuse?.label || 'Miring (AC)'}
          </text>
        </svg>
      </div>

      {description && (
        <p className="text-slate-300 text-xs sm:text-sm mt-3 px-1 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

/**
 * 2D Cartesian Quadrant View with Vector OP and Angle Arc
 */
export const CartesianPointView: React.FC<{
  cartesian: CartesianPointConfig;
  title?: string;
  description?: string;
}> = ({ cartesian, title, description }) => {
  const size = 320;
  const center = size / 2;
  const scale = 5.2;

  const targetX = center + cartesian.x * scale;
  const targetY = center - cartesian.y * scale;

  return (
    <div className="w-full bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-4 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
          <Compass className="w-4 h-4 text-cyan-400" />
          <span>{title || 'Bidang Koordinat Kartesius'}</span>
        </div>
        <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-700/50">
          Kuadran {cartesian.quadrant}
        </span>
      </div>

      <div className="relative w-full max-w-sm mx-auto aspect-square bg-slate-950/80 rounded-xl border border-slate-800 p-2 flex items-center justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full select-none">
          <defs>
            <filter id="pGlow">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#f43f5e" />
            </filter>
          </defs>

          {/* Quadrant labels */}
          <text x={center + 50} y={center - 50} fill="#475569" fontSize="12" fontWeight="bold">
            Kuadran I (+,+)
          </text>
          <text x={center - 110} y={center - 50} fill="#475569" fontSize="12" fontWeight="bold">
            Kuadran II (-,+)
          </text>
          <text x={center - 115} y={center + 60} fill="#475569" fontSize="12" fontWeight="bold">
            Kuadran III (-,-)
          </text>
          <text x={center + 50} y={center + 60} fill="#475569" fontSize="12" fontWeight="bold">
            Kuadran IV (+,-)
          </text>

          {/* Axes */}
          <line x1="20" y1={center} x2={size - 20} y2={center} stroke="#64748b" strokeWidth="1.5" />
          <line x1={center} y1={size - 20} x2={center} y2="20" stroke="#64748b" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x={size - 15} y={center + 14} fill="#94a3b8" fontSize="11" fontWeight="bold">
            X
          </text>
          <text x={center + 8} y="18" fill="#94a3b8" fontSize="11" fontWeight="bold">
            Y
          </text>
          <text x={center - 14} y={center + 14} fill="#64748b" fontSize="10">
            (0,0)
          </text>

          {/* Projection dashed lines */}
          <line
            x1={targetX}
            y1={targetY}
            x2={targetX}
            y2={center}
            stroke="#38bdf8"
            strokeDasharray="3 3"
            strokeWidth="1.2"
          />
          <line
            x1={targetX}
            y1={targetY}
            x2={center}
            y2={targetY}
            stroke="#38bdf8"
            strokeDasharray="3 3"
            strokeWidth="1.2"
          />

          {/* Radius vector OP */}
          <line
            x1={center}
            y1={center}
            x2={targetX}
            y2={targetY}
            stroke="#f59e0b"
            strokeWidth="2.5"
          />

          {/* Point P */}
          <circle
            cx={targetX}
            cy={targetY}
            r="5"
            fill="#f43f5e"
            stroke="#ffffff"
            strokeWidth="1.8"
            filter="url(#pGlow)"
          />

          {/* Point P Label */}
          <rect
            x={targetX - 45}
            y={targetY - 26}
            width="90"
            height="18"
            rx="4"
            fill="#0f172a"
            stroke="#64748b"
            strokeWidth="0.8"
          />
          <text
            x={targetX}
            y={targetY - 14}
            fill="#f8fafc"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
          >
            P({cartesian.x}, {cartesian.y})
          </text>

          {/* Angle Arc from positive X to vector */}
          <circle
            cx={center}
            cy={center}
            r="32"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text
            x={center + 14}
            y={center - 18}
            fill="#38bdf8"
            fontSize="12"
            fontWeight="bold"
          >
            θ
          </text>
        </svg>
      </div>

      {description && (
        <p className="text-slate-300 text-xs sm:text-sm mt-3 px-1 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
