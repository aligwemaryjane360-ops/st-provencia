import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Droplets, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: (defaultType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Our Story', href: '#story' },
    { name: 'Mineral Profile', href: '#minerals' },
    { name: 'Why St. Provencia', href: '#why-us' },
    { name: 'Hospitality', href: '#hospitality' },
    { name: 'Journal', href: '#journal' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#1A1A1A] text-[#F8F6F2] text-xs py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-2 border-b border-[#C8A96A]/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-pulse"></span>
        <span>Complimentary Sommelier Tasting Kits Available for Luxury Hospitality Partners</span>
        <button 
          onClick={() => onOpenInquiry('hospitality')}
          className="underline text-[#C8A96A] hover:text-white transition-colors ml-2 font-semibold"
        >
          Request Kit &rarr;
        </button>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#121620]/90 backdrop-blur-md shadow-2xl py-4 border-b border-white/10 text-white'
            : 'bg-gradient-to-b from-black/60 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-[#C8A96A] flex items-center justify-center bg-[#1A1A1A]/40 group-hover:border-white transition-colors">
              <span className="font-cormorant text-base font-bold text-[#C8A96A]">SP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#C8A96A] transition-colors">
                St. Provencia
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#C8A96A] font-light -mt-1">
                Australian Mineral Water
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-[0.15em] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-[#C8A96A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase bg-[#C8A96A] text-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#C8A96A] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121620] text-white flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-300">
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-bold tracking-[0.2em] text-white uppercase">
                St. Provencia
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C8A96A]">
                Australian Mineral Water
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#C8A96A]"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto text-center font-cormorant text-3xl font-light tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#C8A96A] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-4 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors"
            >
              Contact Us & Order Tasting Kit
            </button>
            <p className="text-center text-xs text-gray-400 font-light">
              Victorian Highlands Aquifer • Estate Bottled Australia
            </p>
          </div>
        </div>
      )}
    </>
  );
};
