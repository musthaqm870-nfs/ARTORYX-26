import { motion } from 'motion/react';
import { SectionHeader } from './Shared';
import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Globe, Instagram, Facebook, Youtube } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-brand-blue text-brand-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-yellow font-bold mb-6">Contact</h2>
            <p className="text-brand-white/80 mb-12 text-lg leading-relaxed">
              ARTORYX'26 Organizing Committee<br/>
              Markhins Bengaluru<br/>
              Markaz Khykha Institute of Higher Islamic Studies
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-yellow mr-6 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 font-bold">Address</h4>
                  <p className="text-brand-white/70 leading-relaxed text-lg">16, 15th 'B' Street,<br />Ulsoor,<br />Bengaluru - 560008</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-brand-yellow hover:text-brand-dark transition-colors">
                    Google Maps
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-yellow mr-6 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 font-bold">Phone</h4>
                  <p className="text-brand-white/70 text-lg">+91 7994556808</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-yellow mr-6 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 font-bold">Email</h4>
                  <p className="text-brand-yellow text-lg tracking-wider">majlismarkhins@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-yellow mr-6 flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 font-bold">Website</h4>
                  <a href="https://markhins.com" target="_blank" rel="noopener noreferrer" className="text-brand-yellow text-lg tracking-wider hover:underline">https://markhins.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-white p-10 rounded-2xl shadow-xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif text-brand-dark font-bold mb-8 text-center">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              <a href="https://instagram.com/markhins_bengaluru" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-brand-beige border border-brand-dark/5 hover:border-brand-green hover:shadow-lg transition-all text-brand-dark group">
                <Instagram size={32} className="group-hover:text-brand-green transition-colors" />
                <span className="font-bold">Instagram</span>
              </a>
              <a href="https://facebook.com/markhinsblr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-brand-beige border border-brand-dark/5 hover:border-brand-green hover:shadow-lg transition-all text-brand-dark group">
                <Facebook size={32} className="group-hover:text-brand-green transition-colors" />
                <span className="font-bold">Facebook</span>
              </a>
              <a href="https://youtube.com/channel/UC-6NVjGcQVnughYFn2y-qVA" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-brand-beige border border-brand-dark/5 hover:border-brand-green hover:shadow-lg transition-all text-brand-dark group">
                <Youtube size={32} className="group-hover:text-brand-green transition-colors" />
                <span className="font-bold">YouTube</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
