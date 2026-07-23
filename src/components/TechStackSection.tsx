import React from 'react';
import { motion } from 'motion/react';
import { TECH_DATA } from '../data';
import { IconMapper } from './IconMapper';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section id="technologies" className="py-24 px-6 sm:px-8 bg-[#F5F2EC] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            <Cpu className="w-4 h-4" />
            <span>Technology Stack Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0D131F] tracking-tight">
            Technologies We Work With
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            We engineer solutions leveraging world-class frameworks, modern cloud infrastructure, advanced LLMs, and enterprise-grade MLOps pipelines.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_DATA.map((tech, idx) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-[#E8E3DA] shadow-2xs hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-[#F2ECE1] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EC] flex items-center justify-center text-[#C5A059]">
                  <IconMapper name={tech.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0D131F]">
                  {tech.category}
                </h3>
              </div>

              <div className="space-y-3">
                {tech.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 text-xs text-[#1E293B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
