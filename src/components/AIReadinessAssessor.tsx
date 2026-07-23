import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, Sliders, Calculator, Cpu } from 'lucide-react';
import { INDUSTRIES_DATA, SERVICES_DATA } from '../data';

export const AIReadinessAssessor: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('financial');
  const [primaryGoal, setPrimaryGoal] = useState<string>('automation');
  const [companyScale, setCompanyScale] = useState<string>('mid');

  const goals = [
    { id: 'automation', label: 'Workflow & Process Automation', boost: '35% - 60% Latency Reduction' },
    { id: 'analytics', label: 'Predictive Insights & Decisioning', boost: '3x Faster Strategic Intelligence' },
    { id: 'genai', label: 'Knowledge Base & LLM Assistants', boost: '70% Manual Task Reduction' },
    { id: 'vision', label: 'Quality Control & Visual Inspection', boost: '99.4% Defect Accuracy' },
  ];

  const scales = [
    { id: 'growth', label: 'Growing Enterprise (50-200 Team)' },
    { id: 'mid', label: 'Mid-Market Enterprise (200-1000 Team)' },
    { id: 'large', label: 'Large Corporate & Public Sector' },
  ];

  const getRecommendations = () => {
    let recs = SERVICES_DATA.slice(0, 3);
    if (primaryGoal === 'automation') {
      recs = SERVICES_DATA.filter(s => s.id === 'intelligent-automation' || s.id === 'custom-ai-development' || s.id === 'ai-integration-services');
    } else if (primaryGoal === 'genai') {
      recs = SERVICES_DATA.filter(s => s.id === 'generative-ai-solutions' || s.id === 'ai-strategy-consulting' || s.id === 'custom-ai-development');
    } else if (primaryGoal === 'analytics') {
      recs = SERVICES_DATA.filter(s => s.id === 'machine-learning-solutions' || s.id === 'data-analytics-bi' || s.id === 'ai-strategy-consulting');
    } else if (primaryGoal === 'vision') {
      recs = SERVICES_DATA.filter(s => s.id === 'computer-vision-solutions' || s.id === 'intelligent-automation' || s.id === 'custom-ai-development');
    }
    return recs;
  };

  const selectedGoalObj = goals.find(g => g.id === primaryGoal);

  return (
    <section className="py-20 px-6 sm:px-8 bg-[#F5F2EC] relative border-y border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] px-3 py-1 rounded-full bg-white border border-[#E2DDD5]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0D131F]">
            AI Opportunity & Architecture Diagnostic
          </h2>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Select your industry sector and core objective to view tailored ATLASNEX AI recommendations and estimated impact metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E3DA] shadow-xs space-y-6">
            
            {/* Step 1: Industry */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D131F] flex items-center justify-between">
                <span>01. Select Your Sector</span>
                <span className="text-[10px] text-[#94A3B8]">12 Sectors Available</span>
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs font-semibold text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
              >
                {INDUSTRIES_DATA.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Goal */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D131F]">
                02. Primary Transformation Focus
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setPrimaryGoal(g.id)}
                    className={`p-3 rounded-xl text-left text-xs transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      primaryGoal === g.id
                        ? 'bg-[#0D131F] text-white border-[#0D131F] shadow-sm'
                        : 'bg-[#FBF9F5] text-[#334155] border-[#E2DDD5] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <span className="font-semibold">{g.label}</span>
                    {primaryGoal === g.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Scale */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D131F]">
                03. Enterprise Operational Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scales.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setCompanyScale(s.id)}
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold transition-all cursor-pointer border ${
                      companyScale === s.id
                        ? 'bg-[#C5A059] text-[#0D131F] border-[#C5A059]'
                        : 'bg-[#FBF9F5] text-[#475569] border-[#E2DDD5]'
                    }`}
                  >
                    {s.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Blueprint Column */}
          <div className="lg:col-span-6 bg-[#0D131F] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                <Cpu className="w-4 h-4" />
                <span>Recommended AI Blueprint</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                ATLASNEX Architecture
              </span>
            </div>

            {/* Metric Preview Card */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                  Projected Productivity Lift
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#C5A059]">
                  {selectedGoalObj?.boost}
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                High ROI
              </span>
            </div>

            {/* Recommended Services Stack */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                Tailored Solution Modules:
              </span>
              <div className="space-y-3">
                {getRecommendations().map((service) => (
                  <div
                    key={service.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#C5A059] shrink-0 bg-[#C5A059]/10 px-2 py-0.5 rounded">
                      {service.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactElem = document.querySelector('#contact');
                if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-4 rounded-xl gold-gradient-bg text-[#0D131F] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get Detailed Implementation Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
