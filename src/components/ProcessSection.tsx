import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data';
import { Workflow, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 sm:px-8 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            <Workflow className="w-4 h-4" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0D131F] tracking-tight">
            Our Implementation Process
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            A battle-tested 5-phase delivery framework designed to de-risk AI adoption, ensure regulatory compliance, and accelerate time-to-value.
          </p>
        </div>

        {/* Horizontal / Vertical Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-[#E8E3DA] space-y-4 hover:border-[#C5A059] transition-all relative group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#F2ECE1] pb-3">
                  <span className="font-display text-2xl font-black text-[#C5A059]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Sub-deliverables */}
              <div className="pt-4 border-t border-[#F2ECE1] space-y-2">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-[11px] text-[#334155]">
                    <Check className="w-3 h-3 text-[#C5A059] shrink-0" />
                    <span>{detail}</span>
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
