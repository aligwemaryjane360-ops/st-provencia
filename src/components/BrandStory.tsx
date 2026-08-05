import React from 'react';
import { BRAND_STORY } from '../data/brandData';
import { ShieldCheck, Compass, Sparkles, MapPin } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 lg:py-36 bg-[#F8F6F2] text-[#1A1A1A] relative overflow-hidden">
      {/* Decorative Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#214E9F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A]/5 border border-[#C8A96A]/30 text-[#1A1A1A] text-[11px] font-inter tracking-[0.25em] uppercase">
            <MapPin size={12} className="text-[#C8A96A]" />
            <span>Victorian Highlands • Australia</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
            {BRAND_STORY.title}
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl border border-[#C8A96A]/20 group">
              <img
                src={BRAND_STORY.heroImage}
                alt="Australian Subterranean Mineral Spring"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#121620]/80 backdrop-blur-md border border-white/10 text-white space-y-2">
                <p className="font-cormorant text-xl font-light italic text-[#C8A96A]">
                  Protected Estate Aquifer
                </p>
                <p className="text-xs font-inter font-light text-gray-300 leading-relaxed">
                  Percolated over 50 years through subterranean basalt rock in Victoria, Australia.
                </p>
              </div>
            </div>

            {/* Backing Gold Outline Frame Accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#C8A96A]/30 pointer-events-none -z-0" />
          </div>

          {/* Right Column: Editorial Storytelling Text */}
          <div className="lg:col-span-6 space-y-8">
            <p className="font-cormorant text-2xl sm:text-3xl font-light leading-snug text-[#1A1A1A] border-l-2 border-[#C8A96A] pl-6 italic">
              {BRAND_STORY.lead}
            </p>

            <div className="space-y-6 font-inter text-gray-700 text-sm sm:text-base leading-relaxed font-light">
              {BRAND_STORY.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Editorial Quote Box */}
            <div className="p-8 bg-white border border-[#C8A96A]/20 shadow-sm relative">
              <span className="font-cormorant text-6xl text-[#C8A96A]/30 absolute top-2 left-4 select-none">“</span>
              <p className="font-cormorant text-xl italic text-[#1A1A1A] relative z-10 leading-relaxed pl-4">
                {BRAND_STORY.quote}
              </p>
              <p className="text-xs font-inter tracking-[0.2em] uppercase text-[#C8A96A] mt-4 font-semibold pl-4">
                — Master Bottler & Estate Caretaker
              </p>
            </div>

            {/* 4-Step Filtration Journey */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-t border-[#1A1A1A]/10">
              <div className="p-3 bg-white/60 border border-gray-200">
                <span className="block font-cormorant text-2xl font-bold text-[#C8A96A]">01</span>
                <span className="text-[10px] font-inter uppercase tracking-wider text-gray-600">Rainfall</span>
              </div>
              <div className="p-3 bg-white/60 border border-gray-200">
                <span className="block font-cormorant text-2xl font-bold text-[#C8A96A]">02</span>
                <span className="text-[10px] font-inter uppercase tracking-wider text-gray-600">50-Yr Filtration</span>
              </div>
              <div className="p-3 bg-white/60 border border-gray-200">
                <span className="block font-cormorant text-2xl font-bold text-[#C8A96A]">03</span>
                <span className="text-[10px] font-inter uppercase tracking-wider text-gray-600">Basalt Aquifer</span>
              </div>
              <div className="p-3 bg-white/60 border border-gray-200">
                <span className="block font-cormorant text-2xl font-bold text-[#C8A96A]">04</span>
                <span className="text-[10px] font-inter uppercase tracking-wider text-gray-600">Estate Bottling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
