import { useState, useEffect } from 'react';
import { Navbar, Footer, BackToTop } from './components/Shared';
import { Hero } from './components/Hero';
import { AboutSection, MissionSection, WhySupportSection } from './components/AboutMission';
import { BrochureSection } from './components/BrochureSection';
import { ProjectsSection } from './components/ProjectsFund';
import { ContactSection } from './components/GallerySponsorsContact';
import { VideoSection } from './components/VideoSection';
import { DonateSection } from './components/DonateSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-brand-beige z-[100]">
          <div className="w-12 h-12 border-4 border-brand-green/30 border-t-brand-green rounded-full animate-spin"></div>
          <h2 className="mt-6 text-2xl font-serif tracking-widest text-brand-green font-bold">Markhins ARTORYX'26</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white text-brand-dark font-sans selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar />
      <Hero />
      <AboutSection />
      <VideoSection />
      <MissionSection />
      <BrochureSection />
      <ProjectsSection />
      <WhySupportSection />
      <DonateSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
