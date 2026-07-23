import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AIReadinessAssessor } from './components/AIReadinessAssessor';
import { WhyChooseSection } from './components/WhyChooseSection';
import { IndustriesSection } from './components/IndustriesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection, Footer } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'industries', 'why-us', 'technologies', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#0D131F] overflow-x-hidden selection:bg-[#C5A059]/20 font-sans">
      {/* Sticky Header with Hamburger Menu Always Visible */}
      <Navbar activeSection={activeSection} />

      {/* Main One Page Scrollable Sections */}
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <AIReadinessAssessor />
        <WhyChooseSection />
        <IndustriesSection />
        <TechStackSection />
        <ProcessSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
