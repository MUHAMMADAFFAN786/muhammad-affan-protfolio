interface SupabaseIconProps {
  className?: string;
}

const SupabaseIcon = ({ className = 'w-3.5 h-3.5' }: SupabaseIconProps) => (
  <svg className={className} viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M63.7076 110.284C60.8489 113.886 55.089 111.912 54.9407 107.314L52.5857 32.4999H99.3599C103.779 32.4999 106.211 37.6801 103.493 41.1656L63.7076 110.284Z"
      fill="url(#supabase_grad)"
    />
    <path
      d="M45.4144 2.71589C48.2731 -0.886451 54.033 1.08747 54.1813 5.68555L56.4144 80.5H9.64007C5.22076 80.5 2.78894 75.3198 5.50679 71.8343L45.4144 2.71589Z"
      fill="#3ECF8E"
    />
    <defs>
      <linearGradient id="supabase_grad" x1="53" y1="32" x2="94.5" y2="118" gradientUnits="userSpaceOnUse">
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
    </defs>
  </svg>
);

export default SupabaseIcon;
