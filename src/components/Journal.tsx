import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/brandData';
import { JournalArticle } from '../types';
import { BookOpen, ArrowUpRight, Clock, User, X } from 'lucide-react';

export const Journal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 lg:py-36 bg-[#F8F6F2] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs font-inter tracking-[0.3em] uppercase text-[#C8A96A] font-semibold">
              Editorial & Insights
            </p>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
              The Journal of Water
            </h2>
            <p className="font-inter text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              Explorations in gastronomy, Australian hydrogeology, sommelier craft, and sustainable luxury design.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="w-24 h-[1px] bg-[#C8A96A]" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white border border-[#C8A96A]/20 hover:border-[#C8A96A] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Article Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[10px] font-inter uppercase tracking-widest font-semibold border border-white/20">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-[11px] font-inter text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-cormorant text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#C8A96A] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-inter text-gray-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Read Action */}
              <div className="p-6 md:p-8 pt-0 flex items-center justify-between text-xs font-inter uppercase tracking-widest text-[#C8A96A] font-semibold">
                <span>Read Story</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-[#F8F6F2] text-[#1A1A1A] max-w-3xl w-full my-8 p-6 sm:p-12 border border-[#C8A96A]/30 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-gray-600 hover:text-[#1A1A1A] bg-white border border-gray-200"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#C8A96A] text-[10px] font-inter uppercase tracking-widest font-semibold">
                {selectedArticle.category}
              </span>

              <h2 className="font-cormorant text-3xl sm:text-5xl font-light text-[#1A1A1A] leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-gray-500 font-inter pb-6 border-b border-gray-200">
                <span className="flex items-center gap-1 font-semibold text-[#1A1A1A]">
                  <User size={14} className="text-[#C8A96A]" />
                  {selectedArticle.author}
                </span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              {/* Cover Image */}
              <div className="w-full h-64 sm:h-80 overflow-hidden border border-gray-200">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Content */}
              <div className="font-inter text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 font-light whitespace-pre-line pt-4">
                {selectedArticle.content}
              </div>

              <div className="pt-8 border-t border-gray-200 flex justify-between items-center">
                <p className="text-xs font-inter text-gray-400 italic">
                  Published by St. Provencia Editorial Team
                </p>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 bg-[#1A1A1A] text-white font-inter text-xs font-semibold tracking-widest uppercase hover:bg-[#C8A96A] hover:text-[#1A1A1A] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
