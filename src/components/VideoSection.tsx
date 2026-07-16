import { motion } from 'motion/react';
import { SectionHeader } from './Shared';

export function VideoSection() {
  return (
    <section id="video" className="py-24 px-6 bg-brand-beige">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Our Media" subtitle="Watch the MARKHINS Bengaluru documentaries and highlights to learn more about our journey, vision, and vibrant campus life." />
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video bg-brand-dark/5 border border-brand-dark/10">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/10izonDOiC4" 
                title="MARKHINS Bengaluru | English Documentary" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-dark text-center">English Documentary</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video bg-brand-dark/5 border border-brand-dark/10">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/A-Jg-wacQSU" 
                title="ARTORYX Highlights | MARKHINS Bengaluru" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-dark text-center">ARTORYX Highlights</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
