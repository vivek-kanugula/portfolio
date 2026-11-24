import React, { useRef, useState, useEffect } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
  enableTilt?: boolean;
  tiltIntensity?: number;
  featured?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(99, 102, 241, 0.12)',
  spotlightRadius = 380,
  enableTilt = true,
  tiltIntensity = 2.5,
  featured = false,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [supportsFinePointer, setSupportsFinePointer] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setSupportsFinePointer(pointerQuery.matches && !motionQuery.matches);

    const updatePointerSupport = () => {
      setSupportsFinePointer(pointerQuery.matches && !motionQuery.matches);
    };

    pointerQuery.addEventListener('change', updatePointerSupport);
    motionQuery.addEventListener('change', updatePointerSupport);

    return () => {
      pointerQuery.removeEventListener('change', updatePointerSupport);
      motionQuery.removeEventListener('change', updatePointerSupport);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!supportsFinePointer || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      setTilt({
        x: -deltaY * tiltIntensity,
        y: deltaX * tiltIntensity,
      });
    }
  };

  const handlePointerEnter = () => {
    if (supportsFinePointer) setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const transformStyle = supportsFinePointer && enableTilt && isHovered
    ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-3px)`
    : undefined;

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out, border-color 0.25s ease, box-shadow 0.25s ease'
          : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      className={`relative rounded-xl border border-mono-800/80 bg-mono-900/70 transition-all overflow-hidden will-change-transform backdrop-blur-sm ${
        featured ? 'ring-1 ring-aurora-indigo/30' : ''
      } ${className}`}
      {...rest}
    >
      {/* Featured Subtle Aurora Ambient Backlight */}
      {featured && (
        <div className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-aurora-indigo/15 blur-2xl" />
      )}

      {/* Interactive Cursor Spotlight Glow */}
      {supportsFinePointer && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Dynamic Cursor Border Highlight */}
      {supportsFinePointer && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.75 : 0,
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.35), transparent 70%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px',
          }}
          aria-hidden="true"
        />
      )}

      {/* Card Content with relative z-index */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
