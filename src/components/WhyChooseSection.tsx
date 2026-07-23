import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_DATA } from '../data';
import { IconMapper } from './IconMapper';
import { ShieldCheck, Award } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-6 sm:px-8 bg-[#0D131F] text-white relative overflow-hidden">
      
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Award className="w-3.5 h-3.5" />
            <span>The ATLASNEX Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Why Choose ATLASNEX
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We bridge the gap between cutting-edge AI breakthroughs and dependable enterprise execution—delivering real business outcomes, absolute security, and sustained competitive advantage.
          </p>
        </div>

        {/* 5 Pillars Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_DATA.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 space-y-4 group hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient-bg text-[#0D131F] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                <IconMapper name={pillar.iconName} className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C5A059] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Pillar</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
