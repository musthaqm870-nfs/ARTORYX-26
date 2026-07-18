import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="/background.jpg" 
          alt="MARKHINS ARTORYX'26 Event" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/90"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-white font-bold mb-6 tracking-tight drop-shadow-xl"
        >
          MARKHINS ARTORYX'26
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-light text-brand-white mb-8 font-serif drop-shadow-md"
        >
          You are connecting....
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-brand-white/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-md"
        >
          A creative arts festival celebrating talent, innovation, culture, leadership, and creativity at MARKHINS Bangalore.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#donate" className="px-10 py-4 border-2 border-brand-yellow text-brand-white font-bold tracking-wide uppercase hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 w-full sm:w-auto text-center rounded-full backdrop-blur-sm">
            Donate Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
