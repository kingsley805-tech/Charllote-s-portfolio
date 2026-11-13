import React from 'react';
import { 
  Heart, 
  ShieldAlert, 
  Sparkles, 
  Baby, 
  BookOpen, 
  Quote,
  CheckCircle2
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Philosophy() {
  const { philosophy } = cvData;

  return (
    <section id="philosophy" className="py-20 lg:py-28 relative bg-gradient-to-b from-white via-sage-50/40 to-white dark:from-charcoal-900 dark:via-charcoal-950 dark:to-charcoal-900 overflow-hidden">
      
      {/* Decorative Warm Blush Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blush-200/20 dark:bg-blush-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Quote Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative">
          <Quote className="w-16 h-16 text-teal-400/30 dark:text-teal-600/20 mx-auto -mb-6" />
          
          <h2 className="font-serif italic font-medium text-2xl sm:text-3xl lg:text-4xl text-charcoal-800 dark:text-ivory-100 leading-snug tracking-tight">
            "{philosophy.quote}"
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-teal-500 rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              Charllote Korankye • Midwife Philosophy
            </span>
            <span className="h-0.5 w-10 bg-teal-500 rounded-full" />
          </div>
        </div>

        {/* Four Ethical Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-sage-200 dark:border-charcoal-800 hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 shadow-soft flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-serif font-bold text-sm">0{idx + 1}</span>
                </div>

                <h3 className="font-serif font-bold text-lg text-charcoal-800 dark:text-ivory-100 mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-sage-100 dark:border-charcoal-800 flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Patient-Centred Care</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

