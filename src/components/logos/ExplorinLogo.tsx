interface ExplorinLogoProps { size?: number; }

/**
 * Explorin Academy — orange/amber X-figure with graduation cap on dark navy,
 * recreated from official branding.
 */
const ExplorinLogo = ({ size = 56 }: ExplorinLogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Explorin Academy">
    <rect width="100" height="100" rx="50" fill="#1A2A3A" />

    {/* Left arm sweeping up-right */}
    <path d="M14 72 C24 60 36 50 50 40" stroke="#F97316" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* Right arm sweeping up-left */}
    <path d="M86 72 C76 60 64 50 50 40" stroke="#F97316" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* Left leg sweeping down-right */}
    <path d="M18 86 C30 76 40 64 50 55" stroke="#FB923C" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* Right leg sweeping down-left */}
    <path d="M82 86 C70 76 60 64 50 55" stroke="#FB923C" strokeWidth="8" strokeLinecap="round" fill="none" />

    {/* Head */}
    <circle cx="50" cy="33" r="7" fill="#FCD34D" />

    {/* Graduation cap — horizontal board */}
    <rect x="38" y="22" width="24" height="5" rx="2" fill="#D97706" />
    {/* Cap crown */}
    <rect x="45" y="16" width="10" height="6" rx="2" fill="#F97316" />
    {/* Tassel */}
    <line x1="62" y1="24" x2="67" y2="31" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
    <circle cx="67" cy="32" r="2" fill="#FCD34D" />
  </svg>
);

export default ExplorinLogo;
