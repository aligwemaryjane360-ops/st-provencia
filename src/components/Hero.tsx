import React, { useState } from 'react';
import { Sparkles, ArrowDown, ChevronRight, ShieldCheck, Droplet } from 'lucide-react';
import { PRODUCTS } from '../data/brandData';
import { Product } from '../types';

interface HeroProps {
  onOpenProductDetail: (product: Product) => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProductDetail, onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'sparkling' | 'still'>('sparkling');

  const currentProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0C1017] text-white pt-24 pb-16 overflow-hidden select-none">
      {/* Dynamic Background Ambient Lighting */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 opacity-40 pointer-events-none ${
          activeTab === 'sparkling'
            ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1B3E80]/40 via-[#0C1017]/80 to-[#0C1017]'
            : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#521A2A]/40 via-[#0C1017]/80 to-[#0C1017]'
        }`}
      />

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-[#C8A96A]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow transition-colors duration-1000 ${
            activeTab === 'sparkling' ? 'bg-[#214E9F]/20' : 'bg-[#6B2338]/20'
          }`}
        />
        {/* Subtle floating bubble dots */}
        <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-white/20 animate-float" />
        <div className="absolute top-2/3 left-1/4 w-3 h-3 rounded-full bg-[#C8A96A]/30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-16 w-2.5 h-2.5 rounded-full bg-white/20 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-[#C8A96A]/40 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-center lg:text-left space-y-8 z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A96A]/30 bg-[#1A1A1A]/60 backdrop-blur-md text-[#C8A96A] text-xs font-inter tracking-[0.2em] uppercase">
            <Sparkles size={14} className="text-[#C8A96A]" />
            <span>Estate Bottled • Australian Alps</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cormorant text-4xl sm:text-6xl xl:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Pure Australian Mineral Water.{' '}
            <span className="block font-normal italic text-[#C8A96A] gold-shimmer mt-1">
              Elevated for Extraordinary Moments.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Naturally sourced and crafted for those who appreciate purity, elegance and exceptional taste.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => scrollToSection('#collection')}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-xl hover:shadow-[#C8A96A]/20 flex items-center justify-center gap-2 group"
            >
              <span>Explore Collection</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#story')}
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-inter text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C8A96A] hover:text-[#C8A96A] backdrop-blur-sm transition-all duration-300"
            >
              Our Story
            </button>
          </div>

          {/* Key Quick Stats */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <p className="font-cormorant text-2xl sm:text-3xl font-semibold text-white">50 Yrs</p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-light tracking-wider uppercase">Natural Basalt Filtration</p>
            </div>
            <div>
              <p className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#C8A96A]">7.6 pH</p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-light tracking-wider uppercase">Optimal Alkaline Balance</p>
            </div>
            <div>
              <p className="font-cormorant text-2xl sm:text-3xl font-semibold text-white">0%</p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-light tracking-wider uppercase">Additive Mineral Sodium</p>
            </div>
          </div>
        </div>

        {/* Center / Right Column: Interactive Bottle Showcase */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          {/* Bottle Toggle Pill */}
          <div className="mb-6 p-1.5 bg-[#161C28]/80 backdrop-blur-md rounded-full border border-white/15 flex items-center space-x-2 z-20 shadow-2xl">
            <button
              onClick={() => setActiveTab('sparkling')}
              className={`px-6 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'sparkling'
                  ? 'bg-[#214E9F] text-white shadow-lg shadow-[#214E9F]/50 scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sparkling Sapphire
            </button>
            <button
              onClick={() => setActiveTab('still')}
              className={`px-6 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'still'
                  ? 'bg-[#6B2338] text-white shadow-lg shadow-[#6B2338]/50 scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Still Burgundy
            </button>
          </div>

          {/* Bottle Image Frame */}
          <div className="relative group w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center">
            
            {/* Soft Backlight Aura */}
            <div
              className={`absolute inset-4 rounded-full blur-3xl transition-colors duration-700 opacity-60 ${
                activeTab === 'sparkling' ? 'bg-[#214E9F]' : 'bg-[#6B2338]'
              }`}
            />

            {/* Main Animated Bottle */}
            <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                referrerPolicy="no-referrer"
                className="max-h-[82vh] w-auto object-contain animate-float drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-105 cursor-pointer"
                onClick={() => onOpenProductDetail(currentProduct)}
              />
            </div>

            {/* Click to inspect overlay pill */}
            <button
              onClick={() => onOpenProductDetail(currentProduct)}
              className="absolute bottom-4 z-20 px-4 py-2 bg-[#1A1A1A]/80 backdrop-blur-md border border-[#C8A96A]/40 text-xs text-[#C8A96A] font-inter tracking-widest uppercase rounded-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-xl"
            >
              <span>Inspect Bottle Details</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Product Micro Description underneath */}
          <div className="mt-4 text-center space-y-1">
            <h3 className="font-cormorant text-2xl font-semibold text-white">
              {currentProduct.name}
            </h3>
            <p className="text-xs text-[#C8A96A] font-light tracking-wider">
              {currentProduct.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#story')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#C8A96A] transition-colors flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] uppercase z-20 cursor-pointer"
      >
        <span>Discover Estate Origin</span>
        <ArrowDown size={14} className="animate-bounce text-[#C8A96A]" />
      </button>
    </section>
  );
};
