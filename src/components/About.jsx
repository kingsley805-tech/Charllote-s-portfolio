import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  Languages, 
  Compass, 
  Stethoscope, 
  Users, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function About() {
  const { personal, languages } = cvData;

  const corePillars = [
    {
      icon: Heart,
      title: "Compassionate Maternal Care",
      desc: "Providing continuous empathetic reassurance, emotional stability, and dignified support to labouring mothers."
    },
    {
      icon: ShieldCheck,
      title: "Clinical Safety & Vigilance",
      desc: "Strict adherence to sterile techniques, partograph protocols, and early recognition of obstetric complications."
    },
    {
      icon: GraduationCap,
      title: "Evidence-Based Knowledge",
      desc: "Grounded in contemporary obstetric medicine, WHO guidelines, and neonatal resuscitation standards."
    },
    {
      icon: Users,
      title: "Interprofessional Teamwork",
      desc: "Collaborating seamlessly with consultant obstetricians, midwives, and pediatricians for maternal survival."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-ivory-50/60 dark:bg-charcoal-900/40">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -left-36 w-80 h-80 bg-sage-200/30 dark:bg-sage-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-200/20 dark:bg-teal-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100 dark:bg-sage-950/80 border border-sage-300 dark:border-sage-800 text-sage-800 dark:text-sage-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Professional Profile & Journey</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            About Charllote Amaniampong Korankye
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            A dedicated midwife driven by a profound commitment to safe childbirth, maternal empowerment, and newborn survival across Ghana.
          </p>
        </div>

        {/* Main Grid: Photo with Highlights & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Authentic Candidate Photo (Academic/Clinical Lab Coat) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white dark:border-charcoal-800 bg-white dark:bg-charcoal-900">
              <img
                src={personal.actionImages.labcoat}
                alt="Charllote Amaniampong Korankye at Pentecost University wearing embroidered clinical lab coat"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center"
                loading="lazy"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/60 to-transparent text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-sage-300 mb-1">
                  <GraduationCap className="w-4 h-4 text-teal-400" />
                  <span>Pentecost University Campus</span>
                </div>
                <p className="font-serif font-bold text-base sm:text-lg">
                  Clinical & Academic Midwifery Formation
                </p>
                <p className="text-xs text-ivory-200/80 mt-0.5">
                  Hands-on simulation labs, obstetric sciences & clinical clerkship preparation.
                </p>
              </div>
            </div>

            {/* Quick credential tag */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 glass-card rounded-2xl p-4 shadow-soft-lg border border-teal-200/70 dark:border-charcoal-700 bg-white/95 dark:bg-charcoal-900/95 max-w-[240px]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-800 dark:text-ivory-100">
                    BSc. Midwifery
                  </div>
                  <div className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                    Pentecost University
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-charcoal-700 dark:text-charcoal-200 leading-relaxed text-base sm:text-lg">
              <p>
                My vocation in midwifery is built on a simple conviction: <strong>every woman deserves to experience pregnancy and childbirth with dignity, safety, and unwavering clinical support.</strong>
              </p>
              <p className="text-charcoal-600 dark:text-charcoal-300">
                As a student midwife in the respected <strong>BSc. Midwifery Programme at Pentecost University</strong>, I have had the privilege of training within Ghana's most demanding clinical settings—from the bustling labour wards of <strong>Korle-Bu Teaching Hospital</strong> and <strong>Greater Accra Regional Hospital</strong>, to <strong>Achimota Hospital</strong>, <strong>Mother and Child Hospital</strong>, and <strong>Swedru Municipal Hospital</strong>.
              </p>
              <p className="text-charcoal-600 dark:text-charcoal-300">
                In each healthcare facility, I have assisted in normal spontaneous vaginal deliveries, maintained strict vigilance over the <strong>WHO Partograph</strong>, conducted comprehensive routine antenatal palpations, and supported new mothers through the crucial first hours of neonatal life and exclusive breastfeeding.
              </p>
            </div>

            {/* Core Values / Competence Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={i}
                    className="p-4 rounded-xl bg-white dark:bg-charcoal-800/80 border border-sage-200/80 dark:border-charcoal-700 shadow-xs hover:border-teal-400 dark:hover:border-teal-500 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-charcoal-800 dark:text-ivory-100">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Linguistic Capability Section */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sage-50 to-teal-50/40 dark:from-charcoal-800/90 dark:to-teal-950/40 border border-sage-300/80 dark:border-charcoal-700">
              <div className="flex items-center gap-2 mb-2 text-teal-800 dark:text-teal-300">
                <Languages className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h4 className="font-serif font-bold text-base sm:text-lg">
                  Linguistic Proficiency & Patient Rapport
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 mb-4">
                Clinical care in Ghanaian healthcare environments requires more than medical expertise; it demands effective cultural connection and language fluency to relieve maternal anxiety during labour and ensure informed consent.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {languages.map((lang, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/90 dark:bg-charcoal-900/90 p-3 rounded-xl border border-sage-200 dark:border-charcoal-700"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-charcoal-800 dark:text-ivory-100">
                        {lang.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-medium">
                        {idx === 0 ? "Proficient" : "Native / Fluent"}
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal-500 dark:text-charcoal-400 mt-1 leading-relaxed">
                      {lang.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

