import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.35,
  ...rest
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsFinePointer(pointerQuery.matches && !motionQuery.matches);

    const update = () => {
      setIsFinePointer(pointerQuery.matches && !motionQuery.matches);
    };

    pointerQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);

    return () => {
      pointerQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isFinePointer || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    // Clamp displacement to maximum 8px
    const maxDisplacement = 8;
    const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX));
    const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handlePointerEnter = () => {
    if (isFinePointer) setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: isFinePointer && isHovered
          ? `translate3d(${position.x.toFixed(1)}px, ${position.y.toFixed(1)}px, 0)`
          : 'translate3d(0, 0, 0)',
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)'
          : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`inline-block will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
