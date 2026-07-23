import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Cpu, Play } from 'lucide-react';
import { HERO_DATA } from '../data';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToSection = (id: string) => {
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 sm:px-8 flex items-center justify-center bg-[#FBF9F5] overflow-hidden subtle-grid-bg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Soft Ambient Background Lighting Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-[600px] h-[600px] bg-[#E8DCC4]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline, Description & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Company Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-[#E2DDD5] shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D131F]">
              {HERO_DATA.company}
            </span>
            <span className="text-[#94A3B8] text-xs">|</span>
            <span className="text-xs font-semibold text-[#71717A]">
              Enterprise AI Solutions
            </span>
          </div>

          {/* Large Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#0D131F] leading-[1.08] tracking-tight">
              Enterprise AI Solutions <br className="hidden sm:block" />
              <span className="italic font-normal gold-gradient-text">
                That Transform
              </span>{' '}
              Businesses.
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl text-[#8C6B28] tracking-wide">
              {HERO_DATA.subheadline}
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-sans">
            {HERO_DATA.overview}
          </p>

          {/* 6 Offerings Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {HERO_DATA.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                className="flex items-center gap-2.5 bg-white/60 p-2.5 px-3.5 rounded-xl border border-[#EAE5DC] text-xs font-semibold text-[#1E293B] shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => scrollToSection('#services')}
              className="px-8 py-4 rounded-xl bg-[#0D131F] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#0D131F] transition-all duration-300 shadow-xl shadow-[#0D131F]/10 flex items-center justify-center gap-3 group cursor-pointer"
              id="hero-explore-services-btn"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 rounded-xl bg-white/80 border border-[#D8D2C6] text-[#0D131F] font-bold text-sm uppercase tracking-wider hover:bg-[#F2ECE1] transition-all duration-300 shadow-xs flex items-center justify-center gap-2.5 cursor-pointer"
              id="hero-schedule-session-btn"
            >
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Schedule Strategy Session</span>
            </button>
          </div>

          {/* Metric Bar */}
          <div className="pt-6 border-t border-[#E8E3DA] flex flex-wrap items-center gap-8 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span className="font-semibold text-[#0D131F]">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#C5A059]" />
              <span className="font-semibold text-[#0D131F]">Custom Models & LLMs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold text-[#0D131F]">End-to-End Delivery</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Animation Hero Object */}
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center py-6"
        >
          {/* Outer Decorative Luxury Halo Frame */}
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            
            {/* Ambient Backing Glow */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#C5A059]/20 via-[#EAE1D0]/40 to-transparent blur-2xl transition-opacity duration-700 ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-70'
              }`}
            />

            {/* Architectural Glass Card Holder */}
            <div className="absolute inset-0 rounded-3xl luxury-glass p-4 shadow-2xl flex items-center justify-center border border-white/80 overflow-hidden group">
              
              {/* Corner Architectural Accent Lines */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C5A059]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C5A059]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C5A059]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C5A059]" />

              {/* Main Floating Animation Canvas Container */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                
                {/* Floating Motion Wrapper */}
                <motion.div
                  animate={{
                    y: isHovered ? [-16, 16, -16] : [-10, 10, -10],
                    rotate: isHovered ? [-4, 4, -4] : [-2, 2, -2],
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{
                    y: {
                      duration: isHovered ? 4 : 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    rotate: {
                      duration: isHovered ? 5 : 7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    scale: { duration: 0.4 },
                  }}
                  className="relative z-10 w-full h-full max-h-[380px] flex items-center justify-center p-2"
                >
                  {/* Floating Object GIF requested by user */}
                  <img
                    src={HERO_DATA.heroAnimationGif}
                    alt="ATLASNEX Enterprise AI Intelligence Core"
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 rounded-2xl"
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Fallback indicator if image takes a second */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#FBF9F5]/80 rounded-2xl">
                      <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin" />
                      <span className="text-xs font-semibold text-[#0D131F]">
                        Loading AI Core...
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Soft Dynamic Shadow Underneath that syncs with floating */}
                <motion.div
                  animate={{
                    scale: isHovered ? [0.8, 1.2, 0.8] : [0.85, 1.1, 0.85],
                    opacity: isHovered ? [0.2, 0.45, 0.2] : [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    duration: isHovered ? 4 : 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-3/4 h-8 bg-[#0D131F] rounded-full blur-xl -mt-6 pointer-events-none"
                />

                {/* Floating Interactive Badge overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-[#0D131F]/90 text-white backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl gold-gradient-bg text-[#0D131F]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white tracking-wide">
                        ATLASNEX AI Core
                      </p>
                      <p className="text-[10px] text-slate-300">
                        {isHovered ? 'Active Neural Synthesis' : 'Hover to trigger pulse'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#C5A059] px-2.5 py-1 rounded-full bg-white/10">
                    Live
                  </span>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
