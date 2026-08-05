import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/brandData';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 lg:py-36 bg-[#121620] text-white relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-inter tracking-[0.3em] uppercase text-[#C8A96A] font-semibold">
            Industry Acclaim
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-white tracking-tight">
            Endorsed by Culinary Leaders
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto mt-4" />
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative bg-[#181E2C] p-8 sm:p-14 border border-white/10 shadow-2xl space-y-8">
          <Quote size={48} className="text-[#C8A96A]/30 absolute top-8 left-8 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center space-x-1 text-[#C8A96A] relative z-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#C8A96A" className="text-[#C8A96A]" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-white italic relative z-10">
            "{current.quote}"
          </p>

          {/* Author Details */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-cormorant text-2xl font-semibold text-white">
                {current.author}
              </p>
              <p className="text-xs font-inter text-[#C8A96A] font-medium tracking-wider mt-0.5">
                {current.role} • {current.venue}
              </p>
              <p className="text-[11px] font-inter text-gray-400 font-light mt-0.5">
                {current.location}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-white/20 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors bg-[#121620]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 border border-white/20 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors bg-[#121620]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIdx === idx ? 'w-8 bg-[#C8A96A]' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
