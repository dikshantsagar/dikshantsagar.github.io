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
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NeuralBackground } from './components/NeuralBackground';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative">
        {/* Subtle Dynamic Neural Network Manifold Background */}
        <NeuralBackground />

        <Navbar />

        <main>
          {/* 1. Recruiter Executive Hero */}
          <Hero />

          {/* 2. Core Research Directions */}
          <ResearchFocus />

          {/* 3. Selected Publications */}
          <Publications />

          {/* 4. Experience & Laboratories */}
          <Experience />

          {/* 5. Featured Architectures & Systems */}
          <Projects />

          {/* 6. Technical Stack & Systems */}
          <Skills />

          {/* 7. Education & Honors */}
          <AwardsAndTeaching />

          {/* 8. Connect & Inquiries */}
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
