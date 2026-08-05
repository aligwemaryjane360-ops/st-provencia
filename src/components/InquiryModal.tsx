import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building2, Mail, Phone, User, MessageSquare } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'both',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: 'hotel',
    estimatedVolume: '50-200 cases/year',
    bottlePreference: defaultType,
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-[#121620] text-white max-w-2xl w-full my-8 p-6 sm:p-10 border border-[#C8A96A]/40 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/5 border border-white/10"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6 animate-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#C8A96A]/20 border border-[#C8A96A] flex items-center justify-center mx-auto text-[#C8A96A]">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <h3 className="font-cormorant text-3xl font-semibold text-white">
                Inquiry Received
              </h3>
              <p className="text-xs font-inter text-[#C8A96A] tracking-wider uppercase font-semibold">
                St. Provencia Private Concierge
              </p>
            </div>

            <p className="font-inter text-gray-300 text-sm max-w-md mx-auto leading-relaxed font-light">
              Thank you, <span className="text-white font-medium">{formData.fullName || 'Valued Partner'}</span>. Our hospitality concierge team will contact you within 24 hours regarding your sample kit and allocation pricing.
            </p>

            <div className="p-4 bg-[#181E2C] border border-white/10 text-xs font-inter text-gray-400 max-w-md mx-auto">
              Confirmation reference sent to: <span className="text-white">{formData.email || 'your email'}</span>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-inter text-[#C8A96A] uppercase tracking-[0.2em] font-semibold">
                B2B & Private Concierge
              </p>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-light text-white">
                Request Sommelier Sample Kit
              </h2>
              <p className="font-inter text-gray-400 text-xs font-light">
                Complimentary 750ml tasting bottles dispatched directly to qualified hospitality venues & corporate partners.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#181E2C] border border-white/10 text-white text-xs pl-10 pr-4 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="email"
                      required
                      placeholder="julian@grandhotel.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181E2C] border border-white/10 text-white text-xs pl-10 pr-4 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                    Company / Venue Name *
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Crown Pavilion Hotel"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#181E2C] border border-white/10 text-white text-xs pl-10 pr-4 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="tel"
                      placeholder="+61 400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#181E2C] border border-white/10 text-white text-xs pl-10 pr-4 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                    Business Category
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full bg-[#181E2C] border border-white/10 text-white text-xs px-3 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                  >
                    <option value="hotel">Luxury Hotel / Resort</option>
                    <option value="restaurant">Fine Dining Restaurant</option>
                    <option value="retailer">Premium Retailer / Caviar Bar</option>
                    <option value="corporate">Corporate / Private Jet Charter</option>
                    <option value="private">Private Consumer Collector</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                    Bottle Preference
                  </label>
                  <select
                    value={formData.bottlePreference}
                    onChange={(e) => setFormData({ ...formData, bottlePreference: e.target.value })}
                    className="w-full bg-[#181E2C] border border-white/10 text-white text-xs px-3 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                  >
                    <option value="both">Both (Sparkling Sapphire & Still Burgundy)</option>
                    <option value="sparkling">Sparkling Mineral Water Only</option>
                    <option value="still">Still Mineral Water Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-inter uppercase tracking-wider text-gray-300 mb-1">
                  Message / Special Requests
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-gray-500" />
                  <textarea
                    rows={3}
                    placeholder="Provide details on venue seating, custom bottle engraving requests, or sample shipping address..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181E2C] border border-white/10 text-white text-xs pl-10 pr-4 py-2.5 focus:border-[#C8A96A] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C8A96A] text-[#1A1A1A] font-inter text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-xl"
              >
                <span>Submit Sample Request</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
