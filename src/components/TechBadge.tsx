import { ReactNode } from 'react';
import SupabaseIcon from './icons/SupabaseIcon';

interface TechDef {
  bg: string;      // tailwind or inline bg color
  color: string;   // hex for inline style
  icon: ReactNode;
}

const PY = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M11.5 2C9 2 7 3 7 5v2h5v1H5C3 8 2 9.5 2 11.5S3 15 5 15h1v-2.5C6 11 7 10 8.5 10H14c1.4 0 2.5-1 2.5-2.5V5c0-1.7-1.4-3-5-3z" fill="#FFD43B"/>
    <path d="M12.5 22C15 22 17 21 17 19v-2h-5v-1h7c2 0 3-1.5 3-3.5S19 9 17 9h-1v2.5C16 13 15 14 13.5 14H8C6.6 14 5.5 15 5.5 16.5V19c0 1.7 1.4 3 5 3H12.5z" fill="#3776AB"/>
    <circle cx="9" cy="5.5" r="1" fill="#3776AB"/>
    <circle cx="15" cy="18.5" r="1" fill="#FFD43B"/>
  </svg>
);

const JS = (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <rect width="24" height="24" fill="#F7DF1E" rx="2"/>
    <text x="3" y="19" fontSize="12" fontWeight="700" fill="#000">JS</text>
  </svg>
);

const HTML = (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M2 2l1.7 19.3L12 24l8.3-2.7L22 2z" fill="#E34F26"/>
    <path d="M12 22.1V4h8l-1.5 16.8L12 22.1z" fill="#EF652A"/>
    <text x="6" y="17" fontSize="7" fontWeight="700" fill="white">HTML</text>
  </svg>
);

const CSS = (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M2 2l1.7 19.3L12 24l8.3-2.7L22 2z" fill="#1572B6"/>
    <path d="M12 22.1V4h8l-1.5 16.8L12 22.1z" fill="#33A9DC"/>
    <text x="6.5" y="17" fontSize="7" fontWeight="700" fill="white">CSS</text>
  </svg>
);

const TF = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M12 2L4 6v5l8 4 8-4V6L12 2z" fill="#FF6F00"/>
    <path d="M4 11v6l8 4 8-4v-6l-8 4-8-4z" fill="#FFA726"/>
  </svg>
);

const PT = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M4 5h10a5 5 0 010 10H4V5z" fill="#EE4C2C"/>
    <path d="M14 15h-4v4h4v-4z" fill="#EE4C2C" opacity="0.6"/>
    <circle cx="14" cy="10" r="3" fill="white" opacity="0.3"/>
  </svg>
);

const GIT = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="6" cy="6" r="2.5" fill="#F05032"/>
    <circle cx="18" cy="6" r="2.5" fill="#F05032"/>
    <circle cx="6" cy="18" r="2.5" fill="#F05032"/>
    <path d="M8.5 6h7M6 8.5v7M8.5 18h3.5l5.5-5.5V8.5" stroke="#F05032" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const GH = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const VSCODE = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M17 1.5L9.5 9 6 6 1.5 8.5v7L6 18l3.5-3 7.5 7.5 4-2V3.5L17 1.5z" fill="#007ACC"/>
    <path d="M17 1.5L9.5 9l-3.5 9 11 7V1.5H17z" fill="#1BA1E2" opacity="0.4"/>
    <path d="M1.5 8.5L6 6l3.5 3L6 18 1.5 15.5v-7z" fill="white" opacity="0.15"/>
  </svg>
);

const MYSQL = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <ellipse cx="12" cy="6" rx="9" ry="3.5" fill="#4479A1"/>
    <path d="M3 6v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V6" fill="#4479A1" opacity="0.8"/>
    <path d="M3 10v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-4" fill="#4479A1" opacity="0.6"/>
    <path d="M3 14v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-4" fill="#4479A1" opacity="0.4"/>
  </svg>
);

const MONGO = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M12 2C9 6 7 9 7 13c0 2.8 2.2 5 5 5s5-2.2 5-5c0-4-2-7-5-11z" fill="#47A248"/>
    <line x1="12" y1="18" x2="12" y2="22" stroke="#47A248" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const FASTAPI = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="12" r="10" fill="#009688"/>
    <path d="M13 4l-7 11h6l-1 5 7-11h-6l1-5z" fill="white"/>
  </svg>
);

const FLASK = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M9 2v8L4 18c-.8 1.5 0 4 3 4h10c3 0 3.8-2.5 3-4L15 10V2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="15" r="1" fill="#00BFFF"/>
    <circle cx="14" cy="18" r="1" fill="#00BFFF"/>
  </svg>
);

const NUMPY = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M12 3L3 8v8l9 5 9-5V8L12 3z" fill="#013243"/>
    <path d="M3 8l9 5 9-5" stroke="#4DABCF" strokeWidth="1.2"/>
    <path d="M12 13v8" stroke="#4DABCF" strokeWidth="1.2"/>
    <path d="M3 8v8" stroke="#4DABCF" strokeWidth="1.2" opacity="0.5"/>
    <path d="M21 8v8" stroke="#4DABCF" strokeWidth="1.2" opacity="0.5"/>
  </svg>
);

const PANDAS = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <rect x="4" y="3" width="4" height="18" rx="2" fill="#150458"/>
    <rect x="16" y="3" width="4" height="18" rx="2" fill="#150458"/>
    <rect x="8" y="8" width="8" height="4" rx="1" fill="#E70484"/>
    <rect x="8" y="14" width="8" height="3" rx="1" fill="#150458" opacity="0.5"/>
  </svg>
);

const OPENCV = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="12" r="4" fill="#5C3EE8"/>
    <path d="M12 2C6.5 2 2 6.5 2 12" stroke="#5C3EE8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 12C22 17.5 17.5 22 12 22" stroke="#E05252" strokeWidth="3" strokeLinecap="round"/>
    <path d="M6 20C3 17.5 2 14.5 2 12" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const KERAS = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M5 3v18" stroke="#D00000" strokeWidth="3" strokeLinecap="round"/>
    <path d="M5 12l7-9" stroke="#D00000" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M5 12l7 9" stroke="#D00000" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 3l7 9-7 9" stroke="#D00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SKLEARN = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="12" r="9" fill="none" stroke="#F7931E" strokeWidth="2"/>
    <path d="M7 12h10M12 7l5 5-5 5" stroke="#3499CD" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const JUPYTER = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#F37626" strokeWidth="1.5"/>
    <circle cx="7" cy="9" r="2" fill="#F37626"/>
    <circle cx="17" cy="9" r="2" fill="#9E9E9E"/>
    <circle cx="12" cy="17" r="2" fill="#616161"/>
  </svg>
);

const COLAB = (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <circle cx="12" cy="12" r="10" fill="#F9AB00"/>
    <circle cx="9" cy="12" r="5" fill="white" opacity="0.9"/>
    <circle cx="15" cy="12" r="5" fill="#F9AB00" opacity="0.8"/>
    <path d="M7 10l-2.5 2 2.5 2" stroke="#F9AB00" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 10l2.5 2-2.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GENERIC = (color: string, label: string) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <circle cx="12" cy="12" r="11" fill={color} opacity="0.9"/>
    <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Arial,sans-serif">
      {label.slice(0, 2).toUpperCase()}
    </text>
  </svg>
);

const techMap: Record<string, TechDef> = {
  Python:        { bg: '#3776AB15', color: '#3776AB', icon: PY },
  JavaScript:    { bg: '#F7DF1E15', color: '#b8a000', icon: JS },
  'HTML':        { bg: '#E34F2615', color: '#E34F26', icon: HTML },
  'CSS':         { bg: '#1572B615', color: '#1572B6', icon: CSS },
  TensorFlow:    { bg: '#FF6F0015', color: '#FF6F00', icon: TF },
  PyTorch:       { bg: '#EE4C2C15', color: '#EE4C2C', icon: PT },
  Keras:         { bg: '#D0000015', color: '#D00000', icon: KERAS },
  'Scikit-learn':{ bg: '#F7931E15', color: '#F7931E', icon: SKLEARN },
  FastAPI:       { bg: '#00968815', color: '#009688', icon: FASTAPI },
  Flask:         { bg: '#ffffff15', color: '#aaaaaa', icon: FLASK },
  NumPy:         { bg: '#013243aa', color: '#4DABCF', icon: NUMPY },
  Pandas:        { bg: '#15045820', color: '#E70484', icon: PANDAS },
  OpenCV:        { bg: '#5C3EE815', color: '#5C3EE8', icon: OPENCV },
  MySQL:         { bg: '#4479A115', color: '#4479A1', icon: MYSQL },
  'MongoDB Atlas':{ bg: '#47A24815', color: '#47A248', icon: MONGO },
  'Supabase Studio': { bg: '#3ECF8E15', color: '#3ECF8E', icon: <SupabaseIcon className="w-4 h-4" /> },
  Supabase:      { bg: '#3ECF8E15', color: '#3ECF8E', icon: <SupabaseIcon className="w-4 h-4" /> },
  Git:           { bg: '#F0503215', color: '#F05032', icon: GIT },
  GitHub:        { bg: '#18171715', color: '#ffffff', icon: GH },
  'VS Code':     { bg: '#007ACC15', color: '#007ACC', icon: VSCODE },
  'Jupyter Notebook': { bg: '#F3762615', color: '#F37626', icon: JUPYTER },
  'Google Colab':{ bg: '#F9AB0015', color: '#F9AB00', icon: COLAB },
  Java:          { bg: '#ED8B0015', color: '#ED8B00', icon: GENERIC('#ED8B00', 'Ja') },
  'C++':         { bg: '#00599C15', color: '#00599C', icon: GENERIC('#00599C', 'C+') },
  SQL:           { bg: '#CC292715', color: '#CC2927', icon: GENERIC('#CC2927', 'SQ') },
  Matplotlib:    { bg: '#11557C15', color: '#11557C', icon: GENERIC('#11557C', 'Pl') },
  Seaborn:       { bg: '#7DB7C015', color: '#7DB7C0', icon: GENERIC('#7DB7C0', 'Sn') },
  Plotly:        { bg: '#3F4F7515', color: '#636EFA', icon: GENERIC('#636EFA', 'Px') },
  UiPath:        { bg: '#FA461615', color: '#FA4616', icon: GENERIC('#FA4616', 'Ui') },
  'Microsoft Power Platform': { bg: '#742AB615', color: '#742AB6', icon: GENERIC('#742AB6', 'MS') },
  'IntelliJ IDEA': { bg: '#FE315D15', color: '#FE315D', icon: GENERIC('#FE315D', 'IJ') },
  'Deep Learning':    { bg: '#8B5CF615', color: '#8B5CF6', icon: GENERIC('#8B5CF6', 'DL') },
  'Computer Vision':  { bg: '#06B6D415', color: '#06B6D4', icon: GENERIC('#06B6D4', 'CV') },
  'Prompt Engineering':{ bg: '#10B98115', color: '#10B981', icon: GENERIC('#10B981', 'PE') },
  'LLM Fine-Tuning':  { bg: '#F59E0B15', color: '#F59E0B', icon: GENERIC('#F59E0B', 'LM') },
  XGBoost:       { bg: '#E2231A15', color: '#E2231A', icon: GENERIC('#E2231A', 'XG') },
  CNN:           { bg: '#6366F115', color: '#6366F1', icon: GENERIC('#6366F1', 'CN') },
};

export const getTech = (name: string): TechDef =>
  techMap[name] ?? { bg: '#ffffff10', color: '#94a3b8', icon: GENERIC('#94a3b8', name) };

interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

const TechBadge = ({ name, size = 'sm' }: TechBadgeProps) => {
  const t = getTech(name);
  const padding = size === 'md' ? 'px-4 py-2' : 'px-3 py-1.5';
  return (
    <span
      className={`inline-flex items-center gap-2 ${padding} rounded-full border text-sm font-medium transition-all duration-200 cursor-default hover:scale-105 hover:shadow-md`}
      style={{
        background: t.bg,
        borderColor: t.color + '40',
        color: t.color === '#ffffff' ? '#e2e8f0' : t.color,
      }}
    >
      {t.icon}
      <span className="text-slate-200">{name}</span>
    </span>
  );
};

export default TechBadge;
