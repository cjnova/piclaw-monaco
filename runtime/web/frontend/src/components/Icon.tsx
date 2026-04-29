interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className = "" }: IconProps) {
  return (
    <i
      className={`codicon codicon-${name} ${className}`}
      style={{ fontSize: `${size}px` }}
    />
  );
}
