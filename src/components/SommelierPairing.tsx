import React, { useState } from 'react';
import { MINERAL_PROFILE, PRODUCTS } from '../data/brandData';
import { GlassWater, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

export const SommelierPairing: React.FC = () => {
  const [activeWater, setActiveWater] = useState<'sparkling' | 'still'>('sparkling');

  const selectedProduct = PRODUCTS.find((p) => p.id === activeWater) || PRODUCTS[0];

  return (
    <section id="minerals" className="py-24 lg:py-36 bg-[#161C28] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-inter tracking-[0.3em] uppercase text-[#C8A96A] font-semibold">
            Mineral Chemistry & Pairing
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Curated for Haute Cuisine
          </h2>
          <p className="font-inter text-gray-300 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            Discover the geological mineral matrix that makes St. Provencia the preferred water of international sommeliers.
          </p>
          <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#0C1017] border border-white/10 rounded-full">
            <button
              onClick={() => setActiveWater('sparkling')}
              className={`px-8 py-3 text-xs font-inter font-semibold tracking-widest uppercase rounded-full transition-all duration-300 ${
                activeWater === 'sparkling'
                  ? 'bg-[#214E9F] text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sparkling Pairing Guide
            </button>
            <button
              onClick={() => setActiveWater('still')}
              className={`px-8 py-3 text-xs font-inter font-semibold tracking-widest uppercase rounded-full transition-all duration-300 ${
                activeWater === 'still'
                  ? 'bg-[#6B2338] text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Still Pairing Guide
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Left Mineral Breakdown Table / Right Pairing Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Mineral Analysis Matrix */}
          <div className="lg:col-span-7 bg-[#10141F] p-8 sm:p-10 border border-white/10 space-y-8">
            <div>
              <h3 className="font-cormorant text-2xl font-semibold text-white">
                Certified Subterranean Mineral Profile
              </h3>
              <p className="text-xs font-inter text-gray-400 mt-1 font-light">
                Analyzed at estate laboratory in Victoria, Australia. Zero chemical treatment.
              </p>
            </div>

            <div className="space-y-4">
              {MINERAL_PROFILE.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#181E2C] border border-white/5 hover:border-[#C8A96A]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <span className="font-cormorant text-lg text-white font-medium">
                      {item.name}
                    </span>
                    <p className="text-xs font-inter text-gray-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <span className="font-cormorant text-xl font-bold text-[#C8A96A] sm:text-right">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sommelier Food & Wine Pairing Guide */}
          <div className="lg:col-span-5 bg-[#10141F] p-8 sm:p-10 border border-white/10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                    activeWater === 'sparkling' ? 'bg-[#214E9F]' : 'bg-[#6B2338]'
                  }`}
                >
                  <Utensils size={20} />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-white">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-inter text-[#C8A96A] uppercase tracking-wider">
                    Recommended Culinary Matchings
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <p className="text-xs font-inter text-gray-300 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>

                <div className="p-4 bg-[#181E2C] border border-[#C8A96A]/20">
                  <span className="text-[10px] font-inter uppercase tracking-widest text-[#C8A96A] font-semibold block mb-2">
                    Ideal Dishes to Accompany
                  </span>
                  <ul className="space-y-2 text-xs text-gray-200">
                    {selectedProduct.bestPairedWith.map((dish, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#C8A96A] flex-shrink-0" />
                        <span>{dish}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Details */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-[#181E2C] border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                    Serving Temp
                  </span>
                  <span className="font-cormorant text-lg font-semibold text-[#C8A96A]">
                    {activeWater === 'sparkling' ? '8°C - 10°C' : '11°C - 13°C'}
                  </span>
                </div>

                <div className="p-3 bg-[#181E2C] border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                    Glassware
                  </span>
                  <span className="font-cormorant text-lg font-semibold text-white">
                    {activeWater === 'sparkling' ? 'Stemmed Tulip' : 'Heavy Crystal Tumbler'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
