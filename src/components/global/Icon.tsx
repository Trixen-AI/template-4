interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon = ({icon, width = 24, height = 24, className}: IconProps) => (
  <svg width={width} height={height} className={className}>
    <use xlinkHref={`#icon-${icon.toLowerCase()}`}/>
  </svg>
);
