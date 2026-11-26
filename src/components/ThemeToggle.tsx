import React, { useState, useRef, useEffect } from 'react';
import { useTheme, THEMES, ThemeType } from '../context/ThemeContext';
import { Sparkles, Terminal, ChevronDown, Check } from 'lucide-react';
import { MagneticButton } from './motion/MagneticButton';
import { trackInteraction } from '../utils/telemetry';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, cycleTheme, currentThemeMeta } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownOpen]);

  const getThemeIcon = (id: ThemeType) => {
    switch (id) {
      case 'terminal':
        return <Terminal className="h-3.5 w-3.5 text-telemetry-emerald" />;
      case 'obsidian':
      default:
        return <Sparkles className="h-3.5 w-3.5 text-aurora-indigo" />;
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <MagneticButton strength={0.25}>
        <div className="flex items-center rounded-lg border border-mono-800 bg-mono-900/90 shadow-sm transition-all hover:border-aurora-indigo/50 hover:bg-mono-850">
          {/* Main Cycle Click Button */}
          <button
            onClick={cycleTheme}
            className="btn-tactile flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-mono-200 hover:text-white transition-colors"
            title={`Current theme: ${currentThemeMeta.name}. Click to cycle theme`}
            aria-label="Toggle theme"
          >
            <span className="flex items-center justify-center">
              {getThemeIcon(theme)}
            </span>
            <span className="hidden sm:inline-block font-semibold tracking-wide">
              {currentThemeMeta.badge}
            </span>
          </button>

          {/* Quick Dropdown Trigger Arrow */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="border-l border-mono-800/80 px-1.5 py-1.5 text-mono-400 hover:text-white transition-colors"
            aria-label="Open theme menu"
            aria-expanded={dropdownOpen}
          >
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </MagneticButton>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-mono-800 bg-mono-900/95 p-1.5 shadow-2xl backdrop-blur-md z-50 animate-fade-in font-sans">
          <div className="px-2.5 py-1.5 border-b border-mono-800/80 text-[10px] font-mono uppercase tracking-wider text-mono-400">
            Select Visual Theme
          </div>

          <div className="py-1 space-y-1">
            {(Object.keys(THEMES) as ThemeType[]).map((themeKey) => {
              const item = THEMES[themeKey];
              const isSelected = theme === themeKey;

              return (
                <button
                  key={themeKey}
                  onClick={() => {
                    setTheme(themeKey);
                    setDropdownOpen(false);
                    trackInteraction('theme_toggle', item.name);
                  }}
                  className={`w-full flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-all ${
                    isSelected
                      ? 'bg-mono-800/90 text-white font-semibold ring-1 ring-aurora-indigo/30'
                      : 'text-mono-300 hover:bg-mono-850 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center">
                      {getThemeIcon(themeKey)}
                    </span>
                    <div className="text-left">
                      <div className="font-mono text-xs">{item.name}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {item.colorSwatch.map((color, cIdx) => (
                          <span
                            key={cIdx}
                            className="h-2 w-2 rounded-full border border-black/20"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="h-3.5 w-3.5 text-telemetry-emerald shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
