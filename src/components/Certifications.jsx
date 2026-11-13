import React from 'react';
import { 
  FileBadge, 
  Award, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Sparkles,
  Info
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Certifications() {
  const { certifications } = cvData;

  const iconMap = {
    FileBadge,
    Award,
    ShieldCheck,
    Activity
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileBadge className="w-3.5 h-3.5" />
            <span>Licensure & Clinical Training</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Professional Registrations & Training
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Official registration status and accredited clinical competencies verified in hospital practice.
          </p>
        </div>

        {/* Highlight Card: Official N&MC Ghana Midwifery Licensure Status */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-soft-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Licensure Status: PIN in Progress</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Nursing and Midwifery Council (N&MC) Ghana
              </h3>
              <p className="text-sm sm:text-base text-teal-100 max-w-xl leading-relaxed">
                Undergoing final academic and clinical requirements for the professional Midwifery PIN licence following completion of the Pentecost University BSc. Midwifery programme and hospital rotations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shrink-0 w-full md:w-auto">
              <span className="text-xs text-teal-100 block font-medium">Candidate Status</span>
              <span className="font-serif font-bold text-xl text-white block mt-0.5">Midwifery Licensure</span>
              <span className="text-[11px] text-teal-200 block mt-1">Pending Final PIN Issuance</span>
            </div>
          </div>
        </div>

        {/* Certifications & Clinical Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || FileBadge;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-7 border border-sage-200 dark:border-charcoal-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase font-bold px-2.5 py-1 rounded-full bg-sage-100 dark:bg-charcoal-800 text-teal-800 dark:text-teal-300">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-charcoal-800 dark:text-ivory-100 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 font-medium mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed">
                    {cert.details}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-sage-100 dark:border-charcoal-800 flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span>{cert.status}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

