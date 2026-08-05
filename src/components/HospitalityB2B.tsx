import React from 'react';
import { BRAND_STORY } from '../data/brandData';
import { Hotel, UtensilsCrossed, Award, Wine, ArrowRight } from 'lucide-react';

interface HospitalityB2BProps {
  onOpenInquiry: (defaultType?: string) => void;
}

export const HospitalityB2B: React.FC<HospitalityB2BProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hospitality" className="py-24 lg:py-36 bg-[#F8F6F2] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Container */}
        <div className="bg-[#121620] text-white p-8 md:p-16 lg:p-20 relative overflow-hidden border border-[#C8A96A]/30">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C8A96A]/10 border border-[#C8A96A]/40 text-[#C8A96A] text-[11px] font-inter tracking-[0.25em] uppercase">
                <Hotel size={14} />
                <span>5-Star Hotels & Fine Dining Partners</span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-white">
                Elevate Your Tablescape with Signature Australian Mineral Water
              </h2>

              <p className="font-inter text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                St. Provencia partners directly with luxury boutique hotels, Michelin-starred dining rooms, and high-end private clubs. We provide custom allocation, sommelier tasting kits, and bespoke bottle engraving for flagship properties.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-inter text-gray-300">
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10">
                  <Wine size={18} className="text-[#C8A96A]" />
                  <span>Bespoke Property Laser Engraving</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10">
                  <Award size={18} className="text-[#C8A96A]" />
                  <span>Direct Sommelier Staff Masterclasses</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10">
                  <UtensilsCrossed size={18} className="text-[#C8A96A]" />
                  <span>Guaranteed Stock Allocation</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10">
                  <Hotel size={18} className="text-[#C8A96A]" />
                  <span>Cold-Chain Direct Hotel Delivery</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('hospitality')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Request Tasting Kit for Venue</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => onOpenInquiry('corporate')}
                  className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-inter text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300"
                >
                  B2B Wholesale Pricing
                </button>
              </div>
            </div>

            {/* Right Lifestyle Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src={BRAND_STORY.diningImage}
                  alt="Luxury Fine Dining Table Setup with St. Provencia Water"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-inter font-light">
                  <p className="font-cormorant text-lg text-[#C8A96A] font-medium">
                    The Grand Pavilion Dining Room
                  </p>
                  <p className="text-gray-300 text-[11px] mt-0.5">
                    Featuring St. Provencia Deep Sapphire Sparkling Glass
                  </p>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#C8A96A]/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
