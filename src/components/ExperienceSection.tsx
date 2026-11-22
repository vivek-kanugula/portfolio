import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Briefcase, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="border-b border-mono-800 bg-mono-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <Briefcase className="h-4 w-4" />
            <span>Professional Career</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Work Experience
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            A look at what I've worked on so far — from troubleshooting real-world server performance issues at Accenture to writing automation tools that save hours of manual effort.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Work Experience Column (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {PROFILE_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-mono-800 bg-mono-900/50 p-6 sm:p-7 transition-colors hover:border-mono-700 hover:bg-mono-900"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-mono-800/80 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-mono-50 font-sans">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-mono text-telemetry-amber font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-mono-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-mono-300 font-sans leading-relaxed text-justify">
                  {exp.summary}
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-mono-300 font-sans">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-telemetry-emerald font-mono font-bold shrink-0 mt-0.5">›</span>
                      <span className="text-justify leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-mono-800/80">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-mono-850 px-2 py-0.5 text-xs font-mono text-mono-400 border border-mono-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Column (Spans 1 col) */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-mono-400 flex items-center gap-2">
              <Award className="h-4 w-4 text-mono-300" />
              <span>Milestones & Coding</span>
            </h3>

            {PROFILE_DATA.achievements.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-mono-800 bg-mono-900/50 p-5 sm:p-6 transition-colors hover:border-mono-700 hover:bg-mono-900"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-mono-800 px-2.5 py-1 text-xs font-mono font-bold text-telemetry-amber border border-mono-700">
                    {item.badge}
                  </span>
                </div>
                <h4 className="mt-3 text-sm sm:text-base font-bold text-mono-100 font-sans">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm font-sans text-mono-400 leading-relaxed text-justify">
                  {item.description}
                </p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-telemetry-cyan hover:text-white transition-colors"
                  >
                    <span>View LeetCode Profile (21241A0595)</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
