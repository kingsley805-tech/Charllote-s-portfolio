import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import ClinicalFlow from './components/ClinicalFlow';
import Certifications from './components/Certifications';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'skills',
  'education',
  'clinical-flow',
  'certifications',
  'philosophy',
  'gallery',
  'cv',
  'contact'
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS, 120);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get('section');
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const navHeight = 80;
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: top - navHeight, behavior: 'instant' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-ivory-100 dark:bg-charcoal-950 text-charcoal-700 dark:text-ivory-100 flex flex-col font-sans transition-colors duration-300">
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        scrollProgress={scrollProgress}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <ClinicalFlow />
        <Certifications />
        <Philosophy />
        <Gallery />
        <CVSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <BackToTop />
    </div>
  );
}

