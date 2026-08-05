import React from 'react';
import { FEATURES } from '../data/brandData';
import { Droplet, Sparkles, Scale, ShieldCheck, Utensils, Crown } from 'lucide-react';

export const WhyProvencia: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Droplet':
        return <Droplet className="text-[#C8A96A]" size={28} />;
      case 'Sparkles':
        return <Sparkles className="text-[#C8A96A]" size={28} />;
      case 'Scale':
        return <Scale className="text-[#C8A96A]" size={28} />;
      case 'ShieldCheck':
        return <ShieldCheck className="text-[#C8A96A]" size={28} />;
      case 'Utensils':
        return <Utensils className="text-[#C8A96A]" size={28} />;
      case 'Crown':
        return <Crown className="text-[#C8A96A]" size={28} />;
      default:
        return <Droplet className="text-[#C8A96A]" size={28} />;
    }
  };

  return (
    <section id="why-us" className="py-24 lg:py-36 bg-[#F8F6F2] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <p className="text-xs font-inter tracking-[0.3em] uppercase text-[#C8A96A] font-semibold">
            Uncompromising Excellence
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
            Why St. Provencia
          </h2>
          <p className="font-inter text-gray-600 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            Every bottle reflects an unyielding commitment to purity, luxury design, and environmental harmony.
          </p>
          <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white p-8 border border-[#C8A96A]/20 hover:border-[#C8A96A] transition-all duration-500 shadow-sm hover:shadow-xl relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Icon & Metric */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#F8F6F2] border border-[#C8A96A]/20 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-300">
                    {getIcon(feature.iconName)}
                  </div>
                  {feature.metric && (
                    <span className="text-[10px] font-inter uppercase font-semibold tracking-widest px-2.5 py-1 bg-[#F8F6F2] text-[#C8A96A] border border-[#C8A96A]/30">
                      {feature.metric}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#C8A96A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-inter uppercase text-[#C8A96A] font-medium tracking-wider mt-1">
                    {feature.subtitle}
                  </p>
                  <p className="font-inter text-gray-600 text-xs sm:text-sm font-light leading-relaxed mt-4">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Gold Accent Line on Hover */}
              <div className="w-0 group-hover:w-full h-[2px] bg-[#C8A96A] transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
