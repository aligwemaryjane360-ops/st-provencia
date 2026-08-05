import React, { useState } from 'react';
import { PRODUCTS } from '../data/brandData';
import { Product } from '../types';
import { ChevronRight, Sparkles, Droplets, Check, Info } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenProductDetail: (product: Product) => void;
  onOpenInquiry: (productType?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onOpenProductDetail,
  onOpenInquiry,
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section id="collection" className="py-24 lg:py-36 bg-[#121620] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#214E9F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6B2338]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <p className="text-xs font-inter tracking-[0.3em] uppercase text-[#C8A96A] font-semibold">
            Signature Estate Collection
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Two Masterpieces of Purity
          </h2>
          <p className="font-inter text-gray-300 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            Housed in bespoke heavy glass vessels designed to preserve mineral equilibrium and command fine dining tables.
          </p>
          <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Both Bottles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PRODUCTS.map((product) => {
            const isSparkling = product.id === 'sparkling';
            const isHovered = hoveredProduct === product.id;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className={`group relative bg-[#181E2C] border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? isSparkling
                      ? 'border-[#214E9F] shadow-2xl shadow-[#214E9F]/20'
                      : 'border-[#6B2338] shadow-2xl shadow-[#6B2338]/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Badge */}
                <div className="p-6 md:p-8 flex justify-between items-start border-b border-white/10 relative z-10">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-inter font-semibold tracking-[0.2em] uppercase rounded-full mb-3 ${
                        isSparkling
                          ? 'bg-[#214E9F]/30 text-[#60A5FA] border border-[#214E9F]/50'
                          : 'bg-[#6B2338]/30 text-[#F472B6] border border-[#6B2338]/50'
                      }`}
                    >
                      {product.badge}
                    </span>
                    <h3 className="font-cormorant text-3xl sm:text-4xl font-normal text-white">
                      {product.name}
                    </h3>
                    <p className="text-xs font-inter text-[#C8A96A] font-light tracking-wider mt-1">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="block font-cormorant text-2xl text-white font-medium">
                      {product.ph}
                    </span>
                    <span className="text-[10px] font-inter text-gray-400 uppercase tracking-widest">
                      {product.tds}
                    </span>
                  </div>
                </div>

                {/* Bottle Image Container with Hover Effects */}
                <div className="relative py-12 px-6 flex items-center justify-center min-h-[380px] group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black/30 transition-colors">
                  
                  {/* Glowing Backlight Circle */}
                  <div
                    className={`absolute w-64 h-64 rounded-full blur-3xl transition-opacity duration-700 ${
                      isHovered ? 'opacity-70 scale-110' : 'opacity-20'
                    } ${isSparkling ? 'bg-[#214E9F]' : 'bg-[#6B2338]'}`}
                  />

                  {/* Bottle Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="relative z-10 h-[360px] w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
                  />
                </div>

                {/* Description & Tasting Notes */}
                <div className="p-6 md:p-8 bg-[#141A26] border-t border-white/10 space-y-6">
                  <p className="text-xs sm:text-sm font-inter text-gray-300 font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Tasting Highlights */}
                  <div>
                    <p className="text-[10px] font-inter uppercase tracking-[0.2em] text-[#C8A96A] font-semibold mb-2">
                      Palate & Tasting Profile
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                      {product.tastingNotes.map((note, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check size={12} className="text-[#C8A96A] flex-shrink-0" />
                          <span className="truncate">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="w-full sm:w-1/2 py-3 px-4 border border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#1A1A1A] transition-all duration-300 text-xs font-inter font-semibold tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <Info size={14} />
                      <span>Learn More</span>
                    </button>

                    <button
                      onClick={() => onOpenInquiry(product.id)}
                      className={`w-full sm:w-1/2 py-3 px-4 text-xs font-inter font-semibold tracking-widest uppercase transition-all duration-300 text-white flex items-center justify-center gap-2 ${
                        isSparkling
                          ? 'bg-[#214E9F] hover:bg-[#1B3E80]'
                          : 'bg-[#6B2338] hover:bg-[#521A2A]'
                      }`}
                    >
                      <span>Request Sample</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
