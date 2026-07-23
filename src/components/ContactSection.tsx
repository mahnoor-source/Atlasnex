import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { Phone, Mail, MapPin, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Strategy & Consulting',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-[#F5F2EC] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Callout Banner */}
        <div className="bg-[#0D131F] text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C5A059] px-3.5 py-1 rounded-full bg-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              {CONTACT_INFO.tagline}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {CONTACT_INFO.description}
            </p>
          </div>
        </div>

        {/* Contact Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#0D131F]">
                Direct Contacts
              </h3>
              <p className="text-xs text-[#64748B]">
                Reach our enterprise AI architecture team directly via phone or email.
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E3DA] shadow-2xs space-y-3 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient-bg text-[#0D131F] flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest block">
                    Phone Direct
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-lg font-serif font-bold text-[#0D131F] hover:text-[#C5A059] transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                className="p-2.5 rounded-xl bg-[#F5F2EC] hover:bg-[#0D131F] hover:text-white transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-[#71717A]" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E3DA] shadow-2xs space-y-3 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient-bg text-[#0D131F] flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest block">
                    General Inquiries
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-lg font-serif font-bold text-[#0D131F] hover:text-[#C5A059] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                className="p-2.5 rounded-xl bg-[#F5F2EC] hover:bg-[#0D131F] hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-[#71717A]" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E3DA] shadow-2xs space-y-3 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] text-[#0D131F] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest block">
                  Regional Headquarters
                </span>
                <p className="text-sm font-bold text-[#0D131F] font-serif">
                  ATLASNEX SDN. BHD. • {CONTACT_INFO.location}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E3DA] shadow-md relative">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0D131F]">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#64748B] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to ATLASNEX SDN. BHD. An enterprise AI consultant will review your request and get in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0D131F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#0D131F] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif font-bold text-[#0D131F]">
                    Schedule an AI Advisory Session
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Fill in your details below to discuss your custom AI requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D131F]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dato' / Dr. / Mr. Azman"
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D131F]">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D131F]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 1x-xxx xxxx"
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D131F]">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D131F]">
                    Primary AI Solution Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="AI Strategy & Consulting">AI Strategy & Consulting</option>
                    <option value="Custom AI Development">Custom AI Development</option>
                    <option value="Machine Learning Solutions">Machine Learning Solutions</option>
                    <option value="Generative AI Solutions">Generative AI Solutions</option>
                    <option value="Intelligent Automation">Intelligent Automation</option>
                    <option value="Computer Vision Solutions">Computer Vision Solutions</option>
                    <option value="Data Analytics & BI">Data Analytics & Business Intelligence</option>
                    <option value="AI Integration Services">AI Integration Services</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D131F]">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, current tech stack, or operational challenges..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E2DDD5] text-xs text-[#0D131F] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#0D131F] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#0D131F] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Transmitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Enterprise Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D15] text-white py-12 px-6 sm:px-8 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg gold-gradient-bg text-[#0D131F] font-extrabold flex items-center justify-center">
            A
          </div>
          <div>
            <p className="font-display font-bold text-white tracking-wide">
              ATLASNEX SDN. BHD.
            </p>
            <p className="text-[10px] text-slate-400">
              Enterprise AI Solutions That Transform Businesses
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
          <a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#C5A059] transition-colors">About</a>
          <a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a>
          <a href="#industries" className="hover:text-[#C5A059] transition-colors">Industries</a>
          <a href="#process" className="hover:text-[#C5A059] transition-colors">Process</a>
          <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
        </div>

        <p className="text-slate-300 text-center md:text-right">
          © 2026 ATLASNEX SDN. BHD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
