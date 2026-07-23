import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES_DATA } from '../data';
import { IconMapper } from './IconMapper';
import { Globe, ArrowUpRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-24 px-6 sm:px-8 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            <Globe className="w-4 h-4" />
            <span>Cross-Sector Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0D131F] tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            We deliver AI solutions across a wide range of industries, helping organizations embrace digital transformation and improve operational performance.
          </p>
        </div>

        {/* 12 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-[#E8E3DA] hover:border-[#C5A059] shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F2EC] flex items-center justify-center text-[#0D131F] group-hover:bg-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                    <IconMapper name={ind.iconName} className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-serif font-bold text-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                    {ind.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] font-semibold text-[#8C6B28]">
                <span>ATLASNEX Enterprise Deployment</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
