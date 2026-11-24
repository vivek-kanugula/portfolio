import React from 'react';

interface RadarSweepProps {
  className?: string;
}

export const RadarSweep: React.FC<RadarSweepProps> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`} aria-hidden="true">
      <div className="radar-sweep-disk" />
    </div>
  );
};
