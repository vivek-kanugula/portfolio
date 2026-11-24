import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative border-b border-mono-800 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-cyan">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Education
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Formal undergraduate education in Computer Science and Engineering, covering core algorithms, system design, and database architectures.
          </p>
        </AnimatedSection>

        {/* Education Cards */}
        <div className="mt-7 sm:mt-8 max-w-4xl space-y-6">
          {PROFILE_DATA.education.map((edu, idx) => (
            <AnimatedSection
              key={idx}
              delayMs={idx * 100}
            >
              <div className="group rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 sm:p-8 interactive-card hover:border-mono-700 hover:bg-mono-900">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-mono-800/80 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-mono-50 font-sans group-hover:text-white transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-mono-300 mt-1">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between items-center text-xs font-mono text-mono-400 gap-1.5">
                    <span className="rounded-md bg-telemetry-emerald/10 border border-telemetry-emerald/40 px-2.5 py-1 font-bold text-telemetry-emerald text-xs shadow-sm">
                      {edu.grade}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1 text-mono-400">
                      <Calendar className="h-3 w-3 text-telemetry-cyan" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-mono-500">
                      <MapPin className="h-3 w-3" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block mb-2">
                    Academic Focus & Highlights
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-mono-300 font-sans">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-telemetry-cyan font-mono font-bold">›</span>
                        <span className="text-justify leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Academic Distinction Badge */}
                <div className="mt-6 pt-4 border-t border-mono-800/80 flex items-center gap-2 text-xs font-mono text-mono-400">
                  <Award className="h-4 w-4 text-telemetry-amber" />
                  <span>Graduated with Distinction (9.21 CGPA) • GATE CS 2025 Qualified</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
