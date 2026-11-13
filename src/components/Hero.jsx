import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Heart, 
  Building2, 
  Stethoscope,
  Phone
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
      className="relative flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden"
    >
      {/* Background Decorative Healthcare Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-sage-200/40 via-teal-100/30 to-blush-200/20 dark:from-teal-950/20 dark:via-charcoal-900/40 dark:to-teal-900/10 rounded-full blur-3xl pointer-events-none -z-10 animate-subtle-pulse" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blush-300/15 dark:bg-blush-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Verified Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 dark:bg-teal-950/70 border border-teal-300/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-semibold tracking-wide w-fit shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span>Professional Midwife • Maternal & Newborn Health</span>
            </div>

            {/* Name & Academic Institution */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-charcoal-900 dark:text-white tracking-tight leading-[1.12]">
                Charllote <span className="text-teal-600 dark:text-teal-400">Korankye</span>
              </h1>
              <p className="font-sans font-medium text-base sm:text-lg lg:text-xl text-teal-700 dark:text-sage-300">
                Pentecost University — BSc. Midwifery Candidate
              </p>
            </div>

            {/* Inspiring Headline */}
            <blockquote className="border-l-4 border-teal-500 pl-4 py-1 text-base sm:text-lg text-charcoal-700 dark:text-charcoal-200 font-serif italic">
              "{personal.headline}"
            </blockquote>

            {/* Professional Bio strictly from CV */}
            <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed max-w-2xl">
              Dedicated and compassionate midwifery professional with hands-on clinical training across five premier public and teaching hospitals in Ghana. Experienced in normal vaginal delivery assistance, routine antenatal assessments, fetal heart rate monitoring, partograph tracking, and vital newborn resuscitation care.
            </p>

            {/* Location & Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-charcoal-800/80 border border-sage-200 dark:border-charcoal-700 shadow-xs">
                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Kasoa, Accra, Ghana</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-charcoal-800/80 border border-sage-200 dark:border-charcoal-700 shadow-xs">
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <a href={`tel:${personal.phone}`} className="hover:text-teal-600 transition-colors">
                  {personal.phone}
                </a>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-charcoal-800/80 border border-sage-200 dark:border-charcoal-700 shadow-xs">
                <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Rotations: Korle-Bu & 4 Public Facilities</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollToSection('cv')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-teal-500 hover:bg-teal-600 active:scale-95 shadow-soft-lg hover:shadow-soft-xl transition-all duration-200 group text-sm sm:text-base"
              >
                <FileText className="w-5 h-5 text-teal-100 group-hover:scale-110 transition-transform" />
                <span>View My Official CV</span>
                <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-charcoal-700 dark:text-ivory-100 bg-white dark:bg-charcoal-800/90 hover:bg-sage-50 dark:hover:bg-charcoal-700 border border-sage-300/80 dark:border-charcoal-700 active:scale-95 shadow-soft transition-all duration-200 text-sm sm:text-base"
              >
                <Stethoscope className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Explore Clinical Experience</span>
              </button>
            </div>

            {/* Quick Micro Verification Line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-charcoal-500 dark:text-charcoal-400">
              <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>
                Verified Ghanaian Public Hospital Clinical Placements • Safe Motherhood & Respectful Care Focus
              </span>
            </div>

          </div>

          {/* Right Column: Hero Portrait Composition & Floating Metric Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-md mx-auto">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-teal-500 via-sage-300 to-blush-300 rounded-3xl opacity-35 blur-xl dark:opacity-20 animate-pulse pointer-events-none" />

              {/* Main Portrait Card with Original Authentic Photo (Unmodified Background) */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white dark:border-charcoal-800 bg-white dark:bg-charcoal-900 group">
                <img
                  src="/images/charllote-portrait.jpg"
                  alt="Charllote Korankye - Midwifery Professional in official uniform with Pentecost University badge"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Image Overlay with Name Badge Highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-black/10 flex flex-col justify-end p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-600/90 backdrop-blur-md text-xs font-semibold w-fit mb-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Pentecost University • BSc. Midwifery</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-white">Charllote Korankye</p>
                  <p className="text-xs text-sage-200">
                    Clinical Rotations: Korle-Bu • Greater Accra Regional • Achimota • Mother & Child • Swedru
                  </p>
                </div>
              </div>

              {/* Floating Information Card 1: Five Hospitals */}
              <div className="absolute -bottom-4 left-0 sm:-bottom-6 sm:-left-8 z-30 rounded-2xl p-3 sm:p-4 shadow-soft-xl border border-teal-200/80 dark:border-charcoal-700 flex items-center gap-2.5 sm:gap-3 bg-white dark:bg-charcoal-900 max-w-[210px] sm:max-w-[250px]">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold font-serif text-teal-700 dark:text-teal-300 leading-none">
                    5
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-charcoal-800 dark:text-ivory-100">
                    Hospitals Trained
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-charcoal-500 dark:text-charcoal-400">
                    Tertiary, Regional & Municipal
                  </div>
                </div>
              </div>

              {/* Floating Information Card 2: Essential Newborn & Motherhood Care */}
              <div className="absolute -top-3 right-0 sm:-top-4 sm:-right-6 z-30 rounded-2xl p-3 sm:p-4 shadow-soft-xl border border-sage-300/80 dark:border-charcoal-700 flex items-center gap-2.5 sm:gap-3 bg-white dark:bg-charcoal-900 max-w-[200px] sm:max-w-[230px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sage-100 dark:bg-sage-950 text-sage-700 dark:text-sage-300 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-sage-300 text-sage-600 dark:text-sage-300" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-charcoal-800 dark:text-ivory-100 leading-tight">
                    Safe Motherhood
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                    Evidence-Based Care
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-charcoal-500 dark:text-charcoal-400">
                    Compassionate Delivery
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Verified Stats Strip below Hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-sage-200/70 dark:border-charcoal-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/80 dark:bg-charcoal-900/80 rounded-2xl p-5 border border-sage-200/80 dark:border-charcoal-800/80 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 group shadow-xs hover:shadow-soft"
              >
                <div className="flex items-baseline gap-1">
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform inline-block">
                    {stat.value}
                  </span>
                </div>
                <div className="font-semibold text-sm sm:text-base text-charcoal-800 dark:text-ivory-100 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs font-medium text-teal-700 dark:text-sage-400">
                  {stat.sublabel}
                </div>
                <div className="text-[11px] text-charcoal-500 dark:text-charcoal-400 mt-1 leading-snug">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
