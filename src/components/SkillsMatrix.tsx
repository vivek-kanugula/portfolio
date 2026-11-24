import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Cpu } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const SkillsMatrix: React.FC = () => {
  const skillCategories = [
    { title: "Languages", skills: PROFILE_DATA.skills.languages },
    { title: "Backend & Frameworks", skills: PROFILE_DATA.skills.backend },
    { title: "Distributed Systems & Databases", skills: PROFILE_DATA.skills.dataAndDistributed },
    { title: "AI & Automation", skills: PROFILE_DATA.skills.aiAndTools },
    { title: "Cloud & DevOps", skills: PROFILE_DATA.skills.cloudAndDevOps },
    { title: "Core CS Fundamentals", skills: PROFILE_DATA.skills.fundamentals },
  ];

  return (
    <section id="skills" className="relative border-b border-mono-800 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-cyan pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-cyan">
            <Cpu className="h-4 w-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Skills & Technologies
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Technologies, frameworks, and core computer science areas I work with across distributed architectures and backend engineering.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <AnimatedSection
              key={idx}
              delayMs={idx * 80}
              className="h-full"
            >
              <div className="group h-full rounded-xl border border-mono-800/90 bg-mono-900/60 p-6 interactive-card hover:border-mono-700 hover:bg-mono-900 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-mono-800/80 pb-3">
                    <h3 className="text-sm font-bold font-sans text-mono-100 uppercase tracking-wider group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-mono-500 font-medium">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-md border border-mono-800 bg-mono-850 px-2.5 py-1 text-xs font-mono text-mono-300 transition-all hover:border-mono-600 hover:text-white hover:bg-mono-800 hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
