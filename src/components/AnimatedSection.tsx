import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delayMs = 0,
  ...rest
}) => {
  const { ref, isInView } = useInView({ threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '650ms',
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5'
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
