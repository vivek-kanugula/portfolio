import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { trackPageView } from './utils/telemetry';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { OpenSourceSection } from './components/OpenSourceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { ThankYouSection } from './components/ThankYouSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioShell({
  onOpenResume,
}: {
  onOpenResume: () => void;
}) {
  const { currentThemeMeta } = useTheme();

  // Track initial visitor landing silently once per session
  useEffect(() => {
    trackPageView(currentThemeMeta?.name);
  }, [currentThemeMeta]);

  return (
    <div className="min-h-screen bg-mono-950 text-mono-100 flex flex-col font-sans selection:bg-aurora-indigo/35 selection:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <Header
        onOpenResume={onOpenResume}
      />

      {/* Main Content with top offset for fixed navbar */}
      <main className="flex-1 pt-16">
        <Hero
          onOpenResume={onOpenResume}
        />

        <ExperienceSection />

        <ProjectsSection />

        <OpenSourceSection />

        <SkillsMatrix />

        <EducationSection />

        <InterestsSection />

        <ContactSection />

        <ThankYouSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={onOpenResume}
      />
    </div>
  );
}

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <PortfolioShell onOpenResume={() => setResumeOpen(true)} />

      {/* Official PDF Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </ThemeProvider>
  );
}

export default App;
