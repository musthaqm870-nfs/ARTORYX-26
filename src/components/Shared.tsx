import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Facebook, Instagram, ArrowUp, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-center mb-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif text-brand-blue font-bold mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-dark/70 max-w-2xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Video', href: '#video' },
    { name: 'Projects', href: '#projects' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
    { name: 'Brochure', href: '/brochure.pdf', external: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-white/95 backdrop-blur-md border-b border-brand-dark/10 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <Logo className={`w-12 h-12 ${isScrolled ? 'text-brand-green' : 'text-brand-yellow'}`} />
          <span className={`text-2xl font-serif tracking-wide font-bold ${isScrolled ? 'text-brand-dark' : 'text-brand-white'}`}>MARKHINS ARTORYX'26</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`transition-colors text-sm uppercase tracking-widest font-bold ${isScrolled ? 'text-brand-dark/80 hover:text-brand-green' : 'text-brand-white/90 hover:text-brand-yellow'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={isScrolled ? 'text-brand-dark' : 'text-brand-white'} /> : <Menu className={isScrolled ? 'text-brand-dark' : 'text-brand-white'} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-white border-b border-brand-dark/10 px-6 py-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)} 
              className="text-brand-dark/80 hover:text-brand-green font-bold text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-green text-brand-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Logo className="w-14 h-14 text-brand-yellow" />
            <h3 className="text-3xl font-serif text-brand-white font-bold">ARTORYX'26</h3>
          </div>
          <p className="text-brand-white/80 mb-2 font-serif italic text-lg">You are connecting....</p>
          <p className="text-brand-white/80 font-bold text-sm uppercase tracking-wider text-brand-yellow">Organized by MARKHINS Bengaluru</p>
        </div>
        <div className="flex space-x-6 mb-8 md:mb-0">
          <a href="https://facebook.com/markhinsblr" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-yellow transition-colors"><Facebook /></a>
          <a href="https://instagram.com/markhins_bengaluru" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-yellow transition-colors"><Instagram /></a>
          <a href="https://youtube.com/channel/UC-6NVjGcQVnughYFn2y-qVA" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-yellow transition-colors"><Youtube /></a>
        </div>
      </div>
      <div className="text-center mt-12 text-brand-white/60 text-sm space-y-2">
        <p>&copy; 2026 MARKHINS Bengaluru. All Rights Reserved.</p>
        <p>Designed with ❤️ to empower creativity, leadership, and innovation.</p>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (!isVisible) return null;
  
  return (
    <button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-brand-yellow text-brand-dark rounded-full shadow-lg hover:bg-brand-green hover:text-brand-white hover:shadow-xl transition-all z-40">
      <ArrowUp size={24} />
    </button>
  );
}
