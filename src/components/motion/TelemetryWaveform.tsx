import React from 'react';

interface TelemetryWaveformProps {
  className?: string;
  barCount?: number;
  variant?: 'cyan' | 'indigo' | 'emerald' | 'amber';
}

export const TelemetryWaveform: React.FC<TelemetryWaveformProps> = ({
  className = '',
  barCount = 5,
  variant = 'cyan',
}) => {
  const colorMap = {
    cyan: 'from-aurora-indigo via-telemetry-cyan to-telemetry-cyan',
    indigo: 'from-telemetry-cyan via-aurora-indigo to-aurora-violet',
    emerald: 'from-telemetry-cyan via-telemetry-emerald to-telemetry-emerald',
    amber: 'from-telemetry-amber via-yellow-400 to-amber-500',
  };

  const gradient = colorMap[variant];

  return (
    <div className={`inline-flex items-center gap-1 h-4 px-1 ${className}`} aria-hidden="true">
      {Array.from({ length: barCount }).map((_, idx) => (
        <span
          key={idx}
          className={`w-0.5 rounded-full bg-gradient-to-t ${gradient} waveform-bar-${(idx % 5) + 1}`}
        />
      ))}
    </div>
  );
};
