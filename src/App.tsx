import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchFocus } from './components/ResearchFocus';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AwardsAndTeaching } from './components/AwardsAndTeaching';
import { CVSection } from './components/CVSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-cyan-500/25 selection:text-cyan-700 dark:selection:text-cyan-200 transition-colors duration-200">
        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero with Interactive Particle / Manifold Background */}
          <Hero />

          {/* 2. Research Focus (Problem -> Approach -> Impact) */}
          <ResearchFocus />

          {/* 3. Selected Research & Publications */}
          <Publications />

          {/* 4. Research Experience & Laboratories */}
          <Experience />

          {/* 5. Featured Projects & Architectures */}
          <Projects />

          {/* 6. Technical Stack & Systems */}
          <Skills />

          {/* 7. Education, Honors, Awards & Teaching */}
          <AwardsAndTeaching />

          {/* 8. CV Download Access */}
          <CVSection />

          {/* 9. Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
