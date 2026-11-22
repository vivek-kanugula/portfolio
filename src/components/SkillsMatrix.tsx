import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Cpu } from 'lucide-react';

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
    <section id="skills" className="border-b border-mono-800 bg-mono-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-cyan">
            <Cpu className="h-4 w-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed">
            Technologies, frameworks, and core computer science areas I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-mono-800 bg-mono-900/50 p-5 sm:p-6 transition-colors hover:border-mono-700 hover:bg-mono-900"
            >
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-mono-200 pb-3 border-b border-mono-800">
                {cat.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded border border-mono-800 bg-mono-850 px-2.5 py-1 text-xs font-mono text-mono-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
