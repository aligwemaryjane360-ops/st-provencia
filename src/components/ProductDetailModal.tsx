import React from 'react';
import { Product } from '../types';
import { X, Check, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenInquiry: (productType?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenInquiry,
}) => {
  if (!product) return null;

  const isSparkling = product.id === 'sparkling';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-[#121620] text-white max-w-4xl w-full my-8 p-6 sm:p-12 border border-white/20 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/5 border border-white/10"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Bottle Image */}
          <div className="md:col-span-5 relative flex items-center justify-center p-8 bg-[#181E2C] border border-white/10">
            <div
              className={`absolute w-48 h-48 rounded-full blur-2xl opacity-40 ${
                isSparkling ? 'bg-[#214E9F]' : 'bg-[#6B2338]'
              }`}
            />
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="relative z-10 max-h-[380px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-6">
            <span
              className={`inline-block px-3 py-1 text-[10px] font-inter font-semibold tracking-widest uppercase rounded-full ${
                isSparkling ? 'bg-[#214E9F] text-white' : 'bg-[#6B2338] text-white'
              }`}
            >
              {product.badge}
            </span>

            <h2 className="font-cormorant text-3xl sm:text-4xl font-light text-white">
              {product.name}
            </h2>

            <p className="text-xs font-inter text-[#C8A96A] tracking-wider uppercase font-medium">
              {product.subtitle}
            </p>

            <p className="text-xs sm:text-sm font-inter text-gray-300 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-[#181E2C] p-4 border border-white/10">
              <div>
                <span className="text-gray-400 text-[10px] uppercase block">Aquifer Source</span>
                <span className="font-semibold text-white">{product.bottleDetails.origin}</span>
              </div>
              <div>
                <span className="text-gray-400 text-[10px] uppercase block">Natural pH</span>
                <span className="font-semibold text-[#C8A96A]">{product.ph}</span>
              </div>
              <div>
                <span className="text-gray-400 text-[10px] uppercase block">Total Minerals (TDS)</span>
                <span className="font-semibold text-white">{product.tds}</span>
              </div>
              <div>
                <span className="text-gray-400 text-[10px] uppercase block">Bottle Material</span>
                <span className="font-semibold text-white">{product.bottleColor}</span>
              </div>
            </div>

            {/* Tasting & Pairings */}
            <div>
              <p className="text-xs font-inter uppercase text-[#C8A96A] font-semibold mb-2">
                Tasting Notes & Palate
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                {product.tastingNotes.map((note, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Check size={12} className="text-[#C8A96A]" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(product.id);
                }}
                className="w-full sm:w-auto px-8 py-3 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Sample Kit</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border border-white/20 text-gray-300 font-inter text-xs tracking-widest uppercase hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
