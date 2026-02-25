import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { ExtrasSection } from './components/ExtrasSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 font-sans selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900 dark:selection:text-sky-100 transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ResearchSection />
          <ProjectsSection />
          <SkillsSection />
          <ExtrasSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}