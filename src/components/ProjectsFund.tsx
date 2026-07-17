import { motion } from 'motion/react';
import { SectionHeader } from './Shared';
import { Smartphone, ShieldCheck } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    { 
      id: 1, 
      name: 'Seminar Hall Reconstruction', 
      desc: 'Complete upgrade of the seminar hall including high-quality seating arrangements (₹8,00,000) and complete ceiling renovation covering 1,400 Sq. Ft. (₹2,80,000) to improve acoustics and aesthetics.', 
      budget: 1080000, 
      img: '/seminar-hall.png', 
      progress: 0,
      pdfUrl: '/project-cost-details.pdf',
    },
    {
      id: 2,
      name: 'Festival Expenses',
      desc: 'Overall estimated budget for the festival, covering Food (₹41,000), Prizes (₹1,30,000), Guest logistics (₹60,000), and Media & PR (₹60,000).',
      budget: 291000,
      img: '/festival-expenses.jpg',
      progress: 0,
      pdfUrl: '/festival-expenses.jpg'
    },
    {
      id: 3,
      name: 'Festival Food',
      desc: 'Food arrangements for 200+ people including Breakfast (₹9,000), Lunch (₹13,000), Tea & Snacks (₹4,000), and Dinner (₹15,000).',
      budget: 41000,
      img: '/festival-food.jpg',
      progress: 0,
      pdfUrl: '/festival-food.jpg',
    }
  ];

  const totalBudget = projects.reduce((acc, curr) => acc + curr.budget, 0);

  return (
    <section id="projects" className="py-24 px-6 bg-brand-white">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader title="Project Overview & Cost Details" subtitle={`An overview of the ongoing projects, current requirements, and estimated expenses. Total Estimated Cost: ₹${totalBudget.toLocaleString('en-IN')}`} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-beige border border-brand-dark/5 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-white">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${
                    project.img.includes('festival') || project.img.includes('budget') || project.img.includes('seminar-hall')
                      ? 'object-contain p-2' 
                      : 'object-cover'
                  }`} 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-brand-blue font-bold mb-2">{project.name}</h3>
                <p className="text-brand-dark/70 text-sm mb-6 flex-1 leading-relaxed">{project.desc}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-brand-dark/50 uppercase tracking-wider text-xs font-bold">Budget</span>
                    <span className="font-bold text-brand-green">₹{project.budget.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-brand-dark/10 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="bg-brand-yellow h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                {project.pdfUrl && (
                  <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3 border border-brand-green text-brand-green rounded hover:bg-brand-green hover:text-brand-white transition-colors text-xs uppercase tracking-widest font-bold">
                    {project.pdfUrl.endsWith('.pdf') ? 'Download PDF Details' : 'View Image Details'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
