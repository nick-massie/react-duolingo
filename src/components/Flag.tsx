import type { Language } from "~/utils/languages";


export const Flag = ({
  language,
  width = 84,
}: {
  language: Language;
  width?: number;
}) => {
  const height = width * (19.3171 / 24);
  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <rect width="100%" height="100%" fill="#4F46E5" />
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="12" fill="white">
        {language.code.toUpperCase()}
      </text>
    </svg>
  );
};
