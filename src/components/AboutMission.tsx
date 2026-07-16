import { motion } from 'motion/react';
import { SectionHeader, AnimatedCounter } from './Shared';
import { Lightbulb, Users, Calendar, Trophy, Heart, Target, Globe, BookOpen } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { label: 'Creative Students', value: 850, icon: <Users size={24} /> },
    { label: 'Arts Events', value: 45, icon: <Calendar size={24} /> },
    { label: 'Workshops', value: 20, icon: <Lightbulb size={24} /> },
    { label: 'Competitions', value: 30, icon: <Trophy size={24} /> },
  ];

  return (
    <section id="about" className="py-24 relative bg-brand-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue font-bold mb-6">About ARTORYX'26</h2>
            <p className="font-serif italic text-brand-dark/80 text-xl mb-4">
              Celebrating creativity, talent, and innovation.
            </p>
            <p className="text-brand-dark/70 leading-relaxed mb-4">
              Artoryx is the annual arts and cultural festival of Markhins Islamic College, celebrating creativity, talent, and innovation. It brings together students from diverse backgrounds to showcase their skills through inspiring performances, artistic competitions, and meaningful cultural experiences.
            </p>
            <p className="text-brand-dark/70 leading-relaxed mb-10">
              More than just a festival, Artoryx is a platform that nurtures imagination, builds confidence, and fosters unity, encouraging participants to express their ideas while upholding values of excellence, respect, and collaboration.
            </p>
            <a href="#about" className="self-start px-8 py-3 bg-brand-yellow text-brand-dark font-bold uppercase text-sm tracking-wider rounded-full hover:bg-brand-green hover:text-brand-white transition-colors">
              Find Out More
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue p-12 md:p-24 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute inset-0 z-0">
               <img src="/nurturing.jpg" className="w-full h-full object-cover opacity-20" alt="Students reading together" />
            </div>
            <div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark py-3 px-8 font-bold text-sm tracking-widest uppercase z-10 w-full text-right shadow-md">
              Project
            </div>
            
            <div className="relative z-10 mt-8">
              <h3 className="text-4xl md:text-5xl font-serif text-brand-white font-bold mb-6">Seminar Hall Reconstruction</h3>
              <p className="text-brand-white/80 leading-relaxed mb-8">
                Help us upgrade our facilities with a complete ceiling renovation and modern seating arrangements to foster a better learning and collaborative environment.
              </p>
              <a href="#projects" className="text-brand-yellow font-bold uppercase tracking-wider text-sm hover:text-brand-white transition-colors">
                View Project Details
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  const focusAreas = [
    { title: 'Student Creativity', icon: <Lightbulb /> },
    { title: 'Leadership', icon: <Target /> },
    { title: 'Innovation', icon: <Globe /> },
    { title: 'Culture', icon: <BookOpen /> },
    { title: 'Islamic Values', icon: <Heart /> },
    { title: 'Community Building', icon: <Users /> },
  ];

  return (
    <section className="py-24 px-6 bg-brand-beige">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {focusAreas.slice(0, 4).map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-brand-green mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-serif text-brand-dark font-bold mb-3">{area.title}</h3>
              <p className="text-brand-dark/70 text-sm leading-relaxed mb-6">
                Supporting {area.title.toLowerCase()} provides a platform for brilliant young minds to shine and express themselves in our community.
              </p>
              <a href="#" className="text-brand-yellow font-bold uppercase tracking-wider text-xs hover:text-brand-green transition-colors">
                Learn More!
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySupportSection() {
  const reasons = [
    { title: 'Support Student Talent', desc: 'Provide a platform for brilliant young minds to shine and express themselves.' },
    { title: 'Empower Future Leaders', desc: 'Invest in the organizational and leadership skills of our driven students.' },
    { title: 'Promote Art & Culture', desc: 'Help preserve and innovate upon rich, historical cultural traditions.' },
    { title: 'Build Community', desc: 'Foster unity, networking, and collaboration within and beyond our campus.' }
  ];

  return (
    <section className="py-24 px-6 bg-brand-green text-brand-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Fundraising Campaigns</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-white text-brand-dark p-8 rounded-lg shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h3 className="text-xl font-serif text-brand-blue font-bold mb-4">{reason.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed text-sm mb-6">{reason.desc}</p>
              <a href="#donate" className="text-brand-green font-bold text-xs uppercase tracking-widest hover:text-brand-yellow transition-colors">Donate Now</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
