import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpenSourceSection } from './components/OpenSourceSection';
import { ArchitectureCaseStudies } from './components/ArchitectureCaseStudies';
import { BenchmarkExplorer } from './components/BenchmarkExplorer';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceSection } from './components/ExperienceSection';
import { EngineeringLab } from './components/EngineeringLab';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SystemTerminal } from './components/SystemTerminal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mono-950 text-mono-100 flex flex-col font-sans selection:bg-mono-800 selection:text-mono-50">
      {/* Sticky Spec Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Systems Content */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <OpenSourceSection />

        <ArchitectureCaseStudies />

        <BenchmarkExplorer />

        <SkillsMatrix />

        <ExperienceSection />

        <EngineeringLab />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <SystemTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />
    </div>
  );
}

export default App;
