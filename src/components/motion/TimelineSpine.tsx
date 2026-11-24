import React from 'react';

interface TimelineSpineProps {
  className?: string;
}

export const TimelineSpine: React.FC<TimelineSpineProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center h-full w-6 ${className}`} aria-hidden="true">
      {/* Top glowing origin node */}
      <div className="relative flex h-3 w-3 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-indigo opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-indigo ring-2 ring-mono-950" />
      </div>

      {/* Vertical Spine Line with subtle moving shimmer */}
      <div className="relative flex-1 w-0.5 bg-gradient-to-b from-aurora-indigo/60 via-telemetry-cyan/40 to-telemetry-emerald/40 overflow-hidden my-1">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
      </div>

      {/* Bottom terminus node */}
      <div className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-telemetry-emerald" />
      </div>
    </div>
  );
};
