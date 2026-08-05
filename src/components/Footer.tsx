import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Send, MapPin, Phone, Mail, Check } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0A0D14] text-white pt-20 pb-12 border-t border-[#C8A96A]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Top Newsletter & Brand Tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-white/10">
          
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-cormorant text-3xl sm:text-4xl font-light text-white">
              Experience Australian Mineral Water
            </h3>
            <p className="font-inter text-gray-400 text-xs sm:text-sm font-light max-w-md">
              Subscribe to St. Provencia Private Gazette for sommelier harvest notes, dining pairings, and estate news.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#181E2C] border border-[#C8A96A] text-xs font-inter text-[#C8A96A] flex items-center gap-2">
                <Check size={16} />
                <span>Thank you. You have been added to the St. Provencia Private Gazette.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#161C28] border border-white/15 text-white text-xs px-4 py-3.5 focus:border-[#C8A96A] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors flex-shrink-0 flex items-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 font-inter">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-bold tracking-[0.2em] text-white uppercase">
                St. Provencia
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C8A96A] font-light">
                Australian Mineral Water
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Naturally sourced from a subterranean volcanic aquifer in Victoria, Australia. Bottled at the source in signature Sapphire & Burgundy glass.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-gray-400">
              <a href="#" className="p-2 border border-white/10 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-gray-400 font-light uppercase tracking-wider">
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Brand Story</a></li>
              <li><a href="#minerals" className="hover:text-white transition-colors">Mineral Matrix</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why St. Provencia</a></li>
              <li><a href="#hospitality" className="hover:text-white transition-colors">Hospitality Program</a></li>
              <li><a href="#journal" className="hover:text-white transition-colors">Editorial Journal</a></li>
            </ul>
          </div>

          {/* Estate Contact */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Estate & Concierge
            </p>
            <div className="space-y-2 text-xs text-gray-400 font-light">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#C8A96A]" />
                <span>Provencia Springs Estate, Victorian Highlands, VIC 3741, Australia</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#C8A96A]" />
                <span>concierge@stprovencia.com.au</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#C8A96A]" />
                <span>+61 (0) 3 9820 4000</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-2.5 border border-[#C8A96A] text-[#C8A96A] text-[11px] font-semibold uppercase tracking-widest hover:bg-[#C8A96A] hover:text-[#1A1A1A] transition-colors"
              >
                Contact Concierge
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-light gap-4">
          <p>© 2026 St. Provencia Mineral Water Pty Ltd. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Hospitality</a>
            <a href="#" className="hover:text-gray-300">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
