interface StarDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
}

export const StarDecoration = ({ position, size = 'md' }: StarDecorationProps) => {
  const positionClasses = {
    'top-left': '-top-8 -left-8',
    'top-right': '-top-8 -right-8',
    'bottom-left': '-bottom-8 -left-8',
    'bottom-right': '-bottom-8 -right-8',
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <svg
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} text-primary opacity-80`}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
    </svg>
  );
};
