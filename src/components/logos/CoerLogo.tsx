interface CoerLogoProps { size?: number; }

/**
 * COER University — gear ring, satellite dish, green leaf, COER box, buildings,
 * Sanskrit text, recreated faithfully from official branding.
 */
const CoerLogo = ({ size = 56 }: CoerLogoProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" aria-label="COER University">
    <circle cx="60" cy="60" r="59" fill="white" />

    {/* ── Red gear teeth (outer ring) ── */}
    {Array.from({ length: 18 }).map((_, i) => {
      const a = (i * 360) / 18;
      const r = (a * Math.PI) / 180;
      return <rect key={i} x={60 + 51 * Math.cos(r) - 3} y={60 + 51 * Math.sin(r) - 5} width="6" height="10" rx="2" fill="#CC1111" transform={`rotate(${a} ${60 + 51 * Math.cos(r)} ${60 + 51 * Math.sin(r)})`} />;
    })}
    <circle cx="60" cy="60" r="48" fill="none" stroke="#CC1111" strokeWidth="3" />
    <circle cx="60" cy="60" r="43" fill="none" stroke="#CC1111" strokeWidth="1" />

    {/* ── Satellite dish (left half) ── */}
    {/* Dish body — ellipse arc */}
    <path d="M28 42 C28 62 36 76 46 80 C46 60 40 46 28 42 Z" fill="#D1D5DB" stroke="#4B5563" strokeWidth="0.8" />
    {/* Dish grid lines (wave-style) */}
    {[48, 53, 58, 63, 68, 73].map((y) => (
      <path key={y} d={`M29 ${y} Q37 ${y - 2} 46 ${y}`} fill="none" stroke="#6B7280" strokeWidth="0.7" />
    ))}
    {/* Dish arm / support */}
    <line x1="46" y1="60" x2="56" y2="50" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
    {/* Dish focal point */}
    <circle cx="56" cy="49" r="3" fill="#6B7280" />
    {/* Vertical pole */}
    <line x1="37" y1="80" x2="37" y2="92" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />

    {/* ── Green oval / leaf (upper right of dish) ── */}
    <ellipse cx="58" cy="44" rx="10" ry="5" fill="#16A34A" transform="rotate(-35 58 44)" />
    <ellipse cx="58" cy="44" rx="5" ry="2.5" fill="#22C55E" transform="rotate(-35 58 44)" />

    {/* ── Buildings (right side) ── */}
    {/* Tall building */}
    <rect x="72" y="52" width="10" height="30" fill="#DC2626" />
    {/* Windows tall */}
    {[56, 62, 68, 74].map((y) => (
      <rect key={y} x="74" y={y} width="2.5" height="3" fill="white" opacity="0.6" />
    ))}
    {[56, 62, 68, 74].map((y) => (
      <rect key={y + 100} x="78" y={y} width="2.5" height="3" fill="white" opacity="0.6" />
    ))}
    {/* Shorter building */}
    <rect x="83" y="60" width="8" height="22" fill="#EF4444" />
    {[64, 70, 76].map((y) => (
      <rect key={y} x="85" y={y} width="4" height="3" fill="white" opacity="0.5" />
    ))}

    {/* ── COER label box ── */}
    <rect x="46" y="62" width="22" height="14" rx="2" fill="white" stroke="#CC1111" strokeWidth="1.5" />
    <text x="57" y="73" textAnchor="middle" fontSize="7" fontWeight="800" fill="#CC1111" fontFamily="Arial,sans-serif" letterSpacing="0.5">COER</text>

    {/* ── Outer text: COER UNIVERSITY ── */}
    <path id="top-arc" d="M20 60 A40 40 0 0 1 100 60" fill="none" />
    <text fontSize="6.5" fontWeight="700" fill="#CC1111" fontFamily="Arial,sans-serif" letterSpacing="2">
      <textPath href="#top-arc" startOffset="12%">COER UNIVERSITY</textPath>
    </text>

    {/* ── Sanskrit text (bottom) ── */}
    <path id="bot-arc" d="M22 68 A40 40 0 0 0 98 68" fill="none" />
    <text fontSize="6" fill="#CC1111" fontFamily="serif" letterSpacing="0.5">
      <textPath href="#bot-arc" startOffset="8%">चारितं खलु धम्मो</textPath>
    </text>
  </svg>
);

export default CoerLogo;
