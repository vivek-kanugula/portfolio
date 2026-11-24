import { useState } from 'react';
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

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mono-950 text-mono-100 flex flex-col font-sans selection:bg-aurora-indigo/35 selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content with top offset for fixed navbar */}
      <main className="flex-1 pt-16">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
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
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Official PDF Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
