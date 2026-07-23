import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { IconMapper } from './IconMapper';
import { Check, ArrowRight, X, Sparkles, Filter, Search } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Consulting & Strategy', 'Engineering & Software', 'Data & Analytics', 'LLMs & GenAI', 'Automation', 'Visual AI', 'Enterprise Infrastructure'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.items.some((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 px-6 sm:px-8 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E3DA] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              <Sparkles className="w-4 h-4" />
              <span>Our AI Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#0D131F] tracking-tight">
              Our AI Services
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              We design, develop, and deploy intelligent AI solutions tailored to your business objectives—combining advanced technologies with practical implementation to deliver measurable outcomes.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI capabilities..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E2DDD5] text-xs font-medium text-[#0D131F] placeholder-[#94A3B8] focus:outline-none focus:border-[#C5A059] transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0D131F]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0D131F] text-white shadow-md'
                  : 'bg-white border border-[#E2DDD5] text-[#475569] hover:bg-[#F2ECE1] hover:text-[#0D131F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-[#E8E3DA] shadow-2xs hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Card Header */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] flex items-center justify-center text-[#C5A059] group-hover:bg-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                    <IconMapper name={service.iconName} className="w-6 h-6" />
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6B28]">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 font-sans">
                    {service.subtitle}
                  </p>
                </div>

                {/* Items Checklist */}
                <div className="pt-4 border-t border-[#F2ECE1] space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                    Key Deliverables:
                  </span>
                  <div className="space-y-2">
                    {service.items.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                    {service.items.length > 4 && (
                      <span className="text-[11px] font-semibold text-[#8C6B28] block pt-1">
                        + {service.items.length - 4} more solution modules
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 mt-6 border-t border-[#F2ECE1] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold uppercase tracking-wider text-[#0D131F] group-hover:text-[#C5A059] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] text-[#94A3B8] font-mono">
                  {service.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep-Dive Modal Drawer */}
        <AnimatePresence>
          {activeModalService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0D131F]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveModalService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FBF9F5] rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-[#E8E3DA] shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setActiveModalService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#E2DDD5] text-[#0D131F] hover:bg-[#0D131F] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl gold-gradient-bg text-[#0D131F] flex items-center justify-center shadow-md">
                    <IconMapper name={activeModalService.iconName} className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                      {activeModalService.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D131F]">
                      {activeModalService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed font-sans">
                  {activeModalService.description}
                </p>

                <div className="space-y-3 bg-white p-6 rounded-xl border border-[#E2DDD5]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D131F]">
                    Complete Solution Scope:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalService.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-[#1E293B] font-medium">
                        <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E3DA]">
                  <span className="text-xs text-[#64748B]">
                    Custom implementation tailored to your enterprise infrastructure.
                  </span>
                  <a
                    href="#contact"
                    onClick={() => {
                      setActiveModalService(null);
                      const contactElem = document.querySelector('#contact');
                      if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0D131F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#0D131F] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request AI Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
