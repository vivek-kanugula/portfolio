import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { AnimatedSection } from './AnimatedSection';
import { SpotlightCard } from './motion/SpotlightCard';
import { MagneticButton } from './motion/MagneticButton';

export const ProjectsSection: React.FC = () => {
  const getProjectSpotlight = (idx: number) => {
    switch (idx) {
      case 0:
        return 'rgba(99, 102, 241, 0.18)'; // Notify: Electric Indigo
      case 1:
        return 'rgba(6, 182, 212, 0.18)';  // QueryFusion: Celestial Cyan
      case 2:
      default:
        return 'rgba(245, 158, 11, 0.18)'; // SAP Audit: Solar Amber
    }
  };

  return (
    <section id="projects" className="relative border-b border-mono-800/80 bg-mono-950 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div className="absolute inset-0 radial-spotlight-amber pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aurora-indigo font-semibold">
            <FolderGit2 className="h-4 w-4 text-aurora-indigo" />
            <span>Featured Work</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
            Projects
          </h2>
          <p className="mt-2.5 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Key applications and systems I have designed and built, highlighting their objectives, practical use cases, and technical stacks.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROFILE_DATA.projects.map((project, idx) => {
            const isFeatured = idx === 0;

            return (
              <AnimatedSection
                key={project.id}
                delayMs={idx * 100}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={getProjectSpotlight(idx)}
                  spotlightRadius={390}
                  enableTilt={true}
                  tiltIntensity={2.5}
                  featured={isFeatured}
                  className="group relative flex h-full flex-col justify-between p-6 sm:p-7 hover:border-aurora-indigo/50 hover:shadow-2xl hover:shadow-indigo-950/20"
                >
                  {/* Sleek top highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-aurora-indigo/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Title & Tagline */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-mono-50 font-sans group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-aurora-indigo/30 bg-aurora-indigo/10 px-2 py-0.5 text-[10px] font-mono text-aurora-indigo font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="mt-1 text-xs sm:text-sm font-medium text-telemetry-amber font-sans">
                      {project.tagline}
                    </p>

                    {/* Objective / Use Case */}
                    <div className="mt-4 pt-4 border-t border-mono-800/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-mono-400 block mb-1">
                        Objective & Use Case
                      </span>
                      <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed text-justify">
                        {project.objective}
                      </p>
                    </div>

                    {/* Summary Description */}
                    <p className="mt-3 text-xs sm:text-sm text-mono-400 font-sans leading-relaxed text-justify">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Tech Stack & Links */}
                  <div className="mt-6 pt-5 border-t border-mono-800/80 space-y-4">
                    {/* Tech Stack Pills */}
                    <div>
                      <span className="text-[11px] font-mono text-mono-400 block mb-2 uppercase tracking-wider">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-lg border border-mono-800/90 bg-mono-850/90 px-2.5 py-0.5 text-xs font-mono text-mono-300 transition-all hover:border-aurora-indigo/60 hover:text-white hover:bg-mono-800 hover:-translate-y-0.5 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Magnetic Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <MagneticButton strength={0.3}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-tactile inline-flex items-center gap-1.5 rounded-lg border border-mono-700 bg-mono-850 px-3 py-1.5 text-xs font-mono text-mono-200 transition-all hover:bg-mono-800 hover:text-white hover:border-aurora-indigo/60"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          <span>GitHub</span>
                        </a>
                      </MagneticButton>

                      {project.liveDemoUrl && (
                        <MagneticButton strength={0.3}>
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-tactile inline-flex items-center gap-1.5 rounded-lg border border-white bg-gradient-to-r from-white to-mono-100 px-3 py-1.5 text-xs font-mono font-medium text-mono-950 transition-all hover:shadow-lg hover:shadow-white/20"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Live Demo</span>
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
