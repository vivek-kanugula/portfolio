import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Cpu } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SpotlightCard } from './motion/SpotlightCard';

export const SkillsMatrix: React.FC = () => {
  const skillCategories = [
    { title: "Languages", skills: PROFILE_DATA.skills.languages, color: "rgba(99, 102, 241, 0.16)" },
    { title: "Backend & Frameworks", skills: PROFILE_DATA.skills.backend, color: "rgba(6, 182, 212, 0.16)" },
    { title: "Distributed Systems & Databases", skills: PROFILE_DATA.skills.dataAndDistributed, color: "rgba(139, 92, 246, 0.16)" },
    { title: "AI & Automation", skills: PROFILE_DATA.skills.aiAndTools, color: "rgba(16, 185, 129, 0.16)" },
    { title: "Cloud & DevOps", skills: PROFILE_DATA.skills.cloudAndDevOps, color: "rgba(56, 189, 248, 0.16)" },
    { title: "Core CS Fundamentals", skills: PROFILE_DATA.skills.fundamentals, color: "rgba(245, 158, 11, 0.16)" },
  ];

  return (
    <section id="skills" className="relative border-b border-mono-800/80 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-cyan pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-cyan font-semibold">
            <Cpu className="h-4 w-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
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
              <SpotlightCard
                spotlightColor={cat.color}
                spotlightRadius={320}
                enableTilt={true}
                tiltIntensity={2.0}
                className="group h-full p-6 hover:border-aurora-indigo/40 hover:shadow-xl overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-mono-800/80 pb-3">
                    <h3 className="text-sm font-bold font-sans text-mono-100 uppercase tracking-wider group-hover:text-white transition-colors flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-aurora-indigo group-hover:animate-ping" />
                      {cat.title}
                    </h3>
                    <span className="rounded-full border border-aurora-indigo/30 bg-aurora-indigo/10 px-2 py-0.5 text-[10px] font-mono text-aurora-indigo font-bold">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`rounded-lg border border-mono-800 bg-mono-850 px-2.5 py-1 text-xs font-mono text-mono-300 transition-all hover:border-aurora-indigo/60 hover:text-white hover:bg-mono-800 hover:-translate-y-0.5 shadow-sm ${
                          sIdx % 2 === 0 ? 'group-hover:animate-float-slow' : 'group-hover:animate-float-delayed'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
