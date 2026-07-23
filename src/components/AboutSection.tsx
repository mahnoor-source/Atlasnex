import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_DATA } from '../data';
import { Brain, Cpu, Sparkles, Workflow, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const capabilitiesList = [
    'Artificial Intelligence',
    'Machine Learning (ML)',
    'Large Language Models (LLMs)',
    'Computer Vision',
    'Data Analytics',
    'Intelligent Automation',
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-[#F5F2EC] relative overflow-hidden">
      {/* Decorative Subtle Line Art Background */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Company Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              <Sparkles className="w-4 h-4" />
              <span>{ABOUT_DATA.title}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#0D131F] leading-tight">
              {ABOUT_DATA.subtitle}
            </h2>

            <div className="space-y-4 text-[#475569] text-base leading-relaxed font-sans">
              <p className="font-medium text-[#1E293B] text-lg">
                {ABOUT_DATA.p1}
              </p>
              <p>{ABOUT_DATA.p2}</p>
              <p>{ABOUT_DATA.p3}</p>
            </div>

            {/* Expertise Domains Matrix */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0D131F]">
                Core Engineering Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilitiesList.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD5] text-[#1E293B] shadow-2xs hover:border-[#C5A059] transition-colors"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Highlights & Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stat Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8E3DA] shadow-sm hover:shadow-md transition-all space-y-3 relative group">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] flex items-center justify-center text-[#C5A059] group-hover:bg-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-[#0D131F]">
                End-to-End
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                AI Transformation
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Partnering with your enterprise from strategy and design to deployment and continuous SLA optimization.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#0D131F] text-white p-8 rounded-2xl border border-[#1E293B] shadow-md space-y-3 relative group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-white">
                Scalable
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Enterprise Ready
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cloud-native architecture engineered for security, high throughput, zero downtime, and regulatory compliance.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8E3DA] shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] flex items-center justify-center text-[#C5A059]">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-[#0D131F]">
                Measurable
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Business Value
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Focused on concrete ROI—reducing operational latency, automating high-cost workflows, and driving growth.
              </p>
            </div>

            {/* Action Banner inside About */}
            <div className="bg-gradient-to-br from-[#EAE1D0] to-[#E3D7C0] p-8 rounded-2xl border border-[#C5A059]/30 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8C6B28]">
                  Malaysian AI Leadership
                </span>
                <h4 className="text-xl font-serif font-bold text-[#0D131F] mt-1">
                  Ready to transform your operations?
                </h4>
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D131F] hover:text-[#8C6B28] transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
