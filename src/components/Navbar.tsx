import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/85 backdrop-blur-md border-b border-[#E8E3DA] py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-white shadow-md shadow-[#C5A059]/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-extrabold text-lg tracking-wider text-[#0D131F]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#0D131F] group-hover:text-[#C5A059] transition-colors">
                ATLASNEX
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#71717A] uppercase -mt-1">
                SDN. BHD.
              </span>
            </div>
          </a>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            {/* Quick Consultation Button (Desktop) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full border border-[#D8D2C6] bg-white/60 hover:bg-[#0D131F] hover:text-white hover:border-[#0D131F] transition-all duration-300 shadow-xs"
              id="header-consult-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Inquire AI</span>
            </a>

            {/* Menu Icon (Hamburger) Always Visible */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full bg-[#0D131F] text-white hover:bg-[#C5A059] hover:text-[#0D131F] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059] shadow-md flex items-center gap-2 group cursor-pointer"
              aria-label="Toggle navigation menu"
              id="hamburger-menu-button"
            >
              <span className="text-xs font-bold uppercase tracking-wider px-1 hidden sm:inline-block">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              {isOpen ? (
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              ) : (
                <Menu className="w-5 h-5 transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Modern Luxury Full-screen / Overlay Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D131F]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
            id="mobile-nav-overlay"
          >
            {/* Header Spacing inside overlay */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gold-gradient-bg flex items-center justify-center text-[#0D131F] font-bold">
                  A
                </div>
                <span className="font-display font-bold text-white tracking-wide">
                  ATLASNEX SDN. BHD.
                </span>
              </div>
              <span className="text-xs text-[#94A3B8] uppercase tracking-widest">
                Enterprise AI Solutions
              </span>
            </div>

            {/* Menu Links */}
            <div className="max-w-7xl mx-auto w-full py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                  Navigation Directory
                </p>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * idx, duration: 0.3 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={`group flex items-center justify-between text-2xl sm:text-4xl font-serif tracking-wide py-2 border-b border-white/5 transition-all duration-300 ${
                          isActive
                            ? 'text-[#C5A059] font-semibold pl-4 border-[#C5A059]/40'
                            : 'text-white/80 hover:text-white hover:pl-4'
                        }`}
                        id={`nav-link-${link.name.toLowerCase()}`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-xs font-sans text-white/40 group-hover:text-[#C5A059]">
                            0{idx + 1}
                          </span>
                          <span>{link.name}</span>
                        </span>
                        <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[#C5A059]" />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Company Info & Quick Contact Card inside Menu */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-[#C5A059]/20 text-[#C5A059] rounded-full">
                    Transforming Enterprise Workflows
                  </span>
                  <h3 className="text-2xl font-serif text-white">
                    Innovate Smarter. Automate Faster.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Ready to leverage machine learning, custom LLMs, and intelligent automation for your enterprise? Reach out to our strategy advisors.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-[#C5A059] transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-[#C5A059]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{CONTACT_INFO.phone}</span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-[#C5A059] transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-[#C5A059]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{CONTACT_INFO.email}</span>
                  </a>
                </div>

                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-3.5 rounded-xl gold-gradient-bg text-[#0D131F] font-bold text-sm uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  id="drawer-contact-action-btn"
                >
                  <span>Book Executive AI Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Footer inside Overlay */}
            <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
              <span>© 2026 ATLASNEX SDN. BHD. All rights reserved.</span>
              <span>Kuala Lumpur, Malaysia • Enterprise AI Architecture</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
