import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyProvencia } from './components/WhyProvencia';
import { SommelierPairing } from './components/SommelierPairing';
import { HospitalityB2B } from './components/HospitalityB2B';
import { Testimonials } from './components/Testimonials';
import { Journal } from './components/Journal';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product } from './types';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryDefaultType, setInquiryDefaultType] = useState<string>('both');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenInquiry = (defaultType = 'both') => {
    setInquiryDefaultType(defaultType);
    setInquiryModalOpen(true);
  };

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-[#C8A96A] selection:text-white">
      {/* Fixed Luxury Navigation Header */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main>
        {/* Full Screen Hero with Floating Bottle & Ambient Glow */}
        <Hero
          onOpenProductDetail={handleOpenProductDetail}
          onOpenInquiry={() => handleOpenInquiry('both')}
        />

        {/* Brand Story Editorial Split */}
        <BrandStory />

        {/* Product Showcase (Sparkling Sapphire & Still Burgundy) */}
        <ProductShowcase
          onOpenProductDetail={handleOpenProductDetail}
          onOpenInquiry={(type) => handleOpenInquiry(type || 'both')}
        />

        {/* Why St. Provencia Cards */}
        <WhyProvencia />

        {/* Interactive Mineral Chemistry & Sommelier Pairings */}
        <SommelierPairing />

        {/* B2B Hospitality & Hotel Program */}
        <HospitalityB2B onOpenInquiry={handleOpenInquiry} />

        {/* Testimonials */}
        <Testimonials />

        {/* Editorial Journal Stories */}
        <Journal />

        {/* Final CTA Banner */}
        <section className="py-24 bg-[#121620] text-white text-center relative overflow-hidden border-t border-b border-[#C8A96A]/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8A96A]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
            <span className="text-xs font-inter uppercase tracking-[0.3em] text-[#C8A96A] font-semibold">
              The Standard of Mineral Water
            </span>

            <h2 className="font-cormorant text-4xl sm:text-6xl font-light leading-tight text-white">
              Experience Premium Mineral Water.
            </h2>

            <p className="font-inter text-gray-300 text-sm sm:text-base font-light max-w-xl mx-auto">
              Elevate your dining tables, hotel suites, or private collection with St. Provencia Estate Bottled Water.
            </p>

            <div className="pt-4">
              <button
                onClick={() => handleOpenInquiry('both')}
                className="px-10 py-4 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry('both')} />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultType={inquiryDefaultType}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenInquiry={(type) => handleOpenInquiry(type || 'both')}
      />
    </div>
  );
}

