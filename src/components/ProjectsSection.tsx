import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="border-b border-mono-800 bg-mono-950 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-telemetry-amber">
            <FolderGit2 className="h-4 w-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-mono-50 font-sans">
            Projects
          </h2>
          <p className="mt-3 text-mono-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
            Key applications and systems I have designed and built, highlighting their objectives, practical use cases, and technical stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROFILE_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-lg border border-mono-800 bg-mono-900/60 p-6 sm:p-7 transition-all hover:border-mono-700 hover:bg-mono-900"
            >
              <div>
                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-mono-50 font-sans">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-telemetry-amber font-sans">
                  {project.tagline}
                </p>

                {/* Objective / Use Case */}
                <div className="mt-4 pt-4 border-t border-mono-800/80">
                  <span className="text-xs font-mono uppercase tracking-wider text-mono-400 block mb-1">
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
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded border border-mono-800 bg-mono-850 px-2 py-0.5 text-xs font-mono text-mono-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded border border-mono-700 bg-mono-850 px-3 py-1.5 text-xs font-mono text-mono-200 transition-colors hover:bg-mono-800 hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-mono-700 bg-mono-100 px-3 py-1.5 text-xs font-mono font-medium text-mono-950 transition-colors hover:bg-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
