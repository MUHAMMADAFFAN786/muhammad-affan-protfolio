interface FlyRankLogoProps { size?: number; }

/** FlyRank AI — green cursive "y" on black, recreated from official branding */
const FlyRankLogo = ({ size = 56 }: FlyRankLogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-label="FlyRank AI">
    <rect width="100" height="100" rx="50" fill="#050505" />
    {/* Cursive "y" shape — two strokes meeting at centre then long descender */}
    {/* Left arm: top-left down to centre */}
    <path d="M28 22 C32 34 40 42 50 52" stroke="#00E87A" strokeWidth="9" strokeLinecap="round" fill="none" />
    {/* Right arm: top-right down to centre */}
    <path d="M72 22 C68 34 60 42 50 52" stroke="#00E87A" strokeWidth="9" strokeLinecap="round" fill="none" />
    {/* Descender: centre down-left, curving */}
    <path d="M50 52 C46 64 38 74 32 82" stroke="#00E87A" strokeWidth="9" strokeLinecap="round" fill="none" />
  </svg>
);

export default FlyRankLogo;
