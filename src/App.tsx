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
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mono-950 text-mono-100 flex flex-col font-sans selection:bg-mono-800 selection:text-mono-50">
      {/* Navigation Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content: Hero -> Experience -> Projects -> Open Source -> Skills -> Education -> Contact */}
      <main className="flex-1">
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
