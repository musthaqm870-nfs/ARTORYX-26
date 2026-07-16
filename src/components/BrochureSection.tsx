import React from 'react';
import { motion } from 'motion/react';

export const BrochureSection: React.FC = () => {
  return (
    <section className="w-full bg-brand-yellow">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side: Image or graphic */}
        <div className="w-full md:w-[60%] relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-white">
            <div className="absolute inset-0 border-[10px] border-brand-white z-10 pointer-events-none"></div>
            {/* We can use the background image that was provided or a placeholder */}
            <img 
              src="/brochure-image.jpg" 
              alt="Brochure Background" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center p-8 text-center">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark mb-4 max-w-2xl leading-tight">
                <span className="text-brand-green block mb-2">Nurturing Knowledge</span> 
                <span className="text-brand-yellow">Inspiring Values</span>
              </h3>
            </div>
        </div>
        
        {/* Right side: Text and Download */}
        <div className="w-full md:w-[40%] bg-brand-yellow p-10 md:p-16 lg:p-24 flex flex-col justify-center items-start">
          <p className="text-brand-dark font-medium text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
            As a perennial journey of academic and moral excellence, Markhins is shaping a better tomorrow through intensive and integrated education, offering a unique path to spiritual and career success.
          </p>
          <a 
            href="/brochure.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Download Campus Brochure
          </a>
        </div>
      </div>
    </section>
  );
};
