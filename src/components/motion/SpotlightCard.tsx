import React, { useRef, useState, useEffect } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
  enableTilt?: boolean;
  tiltIntensity?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(6, 182, 212, 0.08)',
  spotlightRadius = 350,
  enableTilt = true,
  tiltIntensity = 2.5,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [supportsFinePointer, setSupportsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable interactive 3D tilt and mouse spotlight on devices with fine pointer (mouse/trackpad)
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
      // Calculate normalized delta from center (-1 to 1)
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      // Invert Y for standard 3D perspective feel
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
    ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-2px)`
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
      className={`relative rounded-xl border border-mono-800/90 bg-mono-900/60 transition-all overflow-hidden will-change-transform ${className}`}
      {...rest}
    >
      {/* Interactive Cursor Spotlight Glow */}
      {supportsFinePointer && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Subtle border highlight following cursor */}
      {supportsFinePointer && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.25), transparent 70%)`,
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
