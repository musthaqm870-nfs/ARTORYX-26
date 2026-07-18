import { motion } from 'motion/react';
import { SectionHeader } from './Shared';
import { CustomVideoPlayer } from './CustomVideoPlayer';

export function VideoSection() {
  return (
    <section id="video" className="py-24 px-6 bg-brand-beige">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Our Media" subtitle="Watch the MARKHINS Bengaluru documentaries and highlights to learn more about our journey, vision, and vibrant campus life." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h3 className="text-xl font-serif font-bold text-brand-dark text-center">MARKHINS Bengaluru Documentary</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video bg-brand-dark/5 border border-brand-dark/10">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dXfHUUSKAmQ" 
                title="QUEST Foundation | Documentary" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-dark text-center">QUEST Documentary</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 text-center md:col-span-2 lg:col-span-1"
          >
            <CustomVideoPlayer 
              src="/video.mp4" 
              poster="/video_thumbnail.png" 
              title="Artoryx Highlights" 
            />
            <h3 className="text-xl font-serif font-bold text-brand-dark text-center">Artoryx Highlights</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
