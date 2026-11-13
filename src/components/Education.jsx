import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2,
  Building
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Education() {
  const { education } = cvData;

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100 dark:bg-sage-950/80 border border-sage-300 dark:border-sage-800 text-sage-800 dark:text-sage-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Rigorous academic foundation in midwifery sciences, obstetrics, neonatal care, and clinical ethics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-charcoal-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-teal-500 to-sage-400" />

              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-sage-100 dark:border-charcoal-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-charcoal-800 dark:text-ivory-100 pt-1">
                    {edu.programme}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-charcoal-600 dark:text-charcoal-300 font-medium">
                    <Building className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="font-semibold text-charcoal-800 dark:text-ivory-100">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ivory-100 dark:bg-charcoal-800 text-xs font-semibold text-charcoal-700 dark:text-ivory-200 border border-sage-200 dark:border-charcoal-700">
                  <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{edu.status}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-charcoal-600 dark:text-charcoal-300 pt-4 leading-relaxed">
                {edu.description}
              </p>

              {/* Core Course Modules */}
              <div className="pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 flex items-center gap-1.5 mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  <span>Key Coursework & Clinical Focus</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.coreCourses.map((course, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory-50 dark:bg-charcoal-800/60 border border-sage-200/60 dark:border-charcoal-700 text-xs text-charcoal-700 dark:text-charcoal-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

