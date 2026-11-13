import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Hero() {
  const { personal, stats } = cvData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elPos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elPos - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex flex-col justify-center pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Background Decorative Healthcare Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-sage-200/30 via-teal-100/30 to-blush-200/20 dark:from-teal-950/20 dark:via-charcoal-900/40 dark:to-teal-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Professional Status Pill (Responsive text so it never overflows narrow screens) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-100/90 dark:bg-teal-950/70 border border-teal-300/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-semibold tracking-wide w-fit mx-auto lg:mx-0 shadow-xs">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span className="sm:hidden">Professional Midwife</span>
              <span className="hidden sm:inline">Professional Midwife • Maternal & Newborn Health</span>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif font-bold text-2xl sm:text-4xl lg:text-6xl text-charcoal-900 dark:text-white tracking-tight leading-tight">
                Charllote <span className="block sm:inline text-teal-600 dark:text-teal-400">Korankye</span>
              </h1>
              <p className="font-sans font-medium text-xs sm:text-base lg:text-xl text-teal-700 dark:text-sage-300">
                Pentecost University • BSc. Midwifery
              </p>
            </div>

            {/* Mobile Portrait (< lg): Neatly displays right under the title so photo appears immediately */}
            <div className="lg:hidden flex justify-center py-2">
              <div className="relative w-48 sm:w-60 aspect-[4/5] rounded-2xl overflow-hidden shadow-soft-xl border-4 border-white dark:border-charcoal-800 bg-white dark:bg-charcoal-900">
                <img
                  src="/images/charllote-portrait.jpg"
                  alt="Charllote Korankye - Midwifery Professional in official uniform"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent flex items-end p-3 text-white">
                  <span className="text-[11px] font-medium text-sage-200">
                    Pentecost University • BSc. Midwifery
                  </span>
                </div>
              </div>
            </div>

            {/* Concise, impactful Bio strictly based on CV - NOT lengthy */}
            <p className="text-sm sm:text-base lg:text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-1 sm:px-0">
              Dedicated and compassionate midwifery professional trained across five premier Ghanaian public and teaching hospitals, committed to respectful maternal care, safe deliveries, and essential newborn health.
            </p>

            {/* Call to Actions (Mobile full-width stack / Desktop side-by-side) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 sm:pt-2 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <button
                onClick={() => scrollToSection('cv')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-white bg-teal-500 hover:bg-teal-600 active:scale-95 shadow-soft hover:shadow-soft-lg transition-all duration-200 group text-sm sm:text-base"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-teal-100 group-hover:scale-110 transition-transform" />
                <span>View Official CV</span>
                <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-charcoal-700 dark:text-ivory-100 bg-white dark:bg-charcoal-800 hover:bg-sage-50 dark:hover:bg-charcoal-700 border border-sage-300/80 dark:border-charcoal-700 active:scale-95 shadow-soft transition-all duration-200 text-sm sm:text-base"
              >
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 dark:text-teal-400" />
                <span>Clinical Experience</span>
              </button>
            </div>

          </div>

          {/* Desktop Portrait Column (lg:col-span-5) - Clean, Unobstructed, Neatly displayed */}
          <div className="hidden lg:flex justify-center items-center lg:col-span-5">
            <div className="relative w-full max-w-sm">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 via-sage-300 to-blush-300 rounded-3xl opacity-30 blur-lg dark:opacity-20 pointer-events-none" />

              {/* Main Portrait Card with Original Authentic Photo (Unmodified Background) */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white dark:border-charcoal-800 bg-white dark:bg-charcoal-900 group">
                <img
                  src="/images/charllote-portrait.jpg"
                  alt="Charllote Korankye - Midwifery Professional in official uniform with Pentecost University badge"
                  className="w-full h-[460px] lg:h-[500px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                />

                {/* Refined Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-600/90 backdrop-blur-md text-xs font-semibold w-fit mb-1 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-teal-200" />
                    <span>Pentecost University • BSc. Midwifery</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-white">Charllote Korankye</p>
                  <p className="text-xs text-sage-200">
                    Clinical Rotations: Korle-Bu • Greater Accra • Achimota • Mother & Child • Swedru
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Stats Strip below Hero */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-sage-200/70 dark:border-charcoal-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/80 dark:bg-charcoal-900/80 rounded-2xl p-3.5 sm:p-5 border border-sage-200/80 dark:border-charcoal-800/80 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 group shadow-xs hover:shadow-soft text-center sm:text-left"
              >
                <div className="font-serif font-bold text-2xl sm:text-4xl text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-charcoal-800 dark:text-ivory-100 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-teal-700 dark:text-sage-400 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
