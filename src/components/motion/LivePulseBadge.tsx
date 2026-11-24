import React from 'react';

interface LivePulseBadgeProps {
  label: string;
  variant?: 'emerald' | 'amber' | 'cyan';
  dotOnly?: boolean;
  className?: string;
}

export const LivePulseBadge: React.FC<LivePulseBadgeProps> = ({
  label,
  variant = 'emerald',
  dotOnly = false,
  className = '',
}) => {
  const colorMap = {
    emerald: {
      bg: 'bg-telemetry-emerald/10 border-telemetry-emerald/30 text-telemetry-emerald',
      dot: 'bg-telemetry-emerald',
      ring: 'bg-telemetry-emerald',
    },
    amber: {
      bg: 'bg-telemetry-amber/10 border-telemetry-amber/30 text-telemetry-amber',
      dot: 'bg-telemetry-amber',
      ring: 'bg-telemetry-amber',
    },
    cyan: {
      bg: 'bg-telemetry-cyan/10 border-telemetry-cyan/30 text-telemetry-cyan',
      dot: 'bg-telemetry-cyan',
      ring: 'bg-telemetry-cyan',
    },
  };

  const style = colorMap[variant];

  if (dotOnly) {
    return (
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${style.ring}`} />
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${style.dot}`} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-medium backdrop-blur-sm transition-all shadow-sm ${style.bg} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${style.ring}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`} />
      </span>
      <span>{label}</span>
    </span>
  );
};
