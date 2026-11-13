import React, { useState } from 'react';
import { 
  HeartPulse, 
  Baby, 
  ShieldAlert, 
  Smile, 
  CheckCircle, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  FileText, 
  Sparkles,
  ClipboardList
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Skills() {
  const { competencyCategories } = cvData;
  const [activeCategoryId, setActiveCategoryId] = useState('all');

  const iconMap = {
    HeartPulse,
    Baby,
    ShieldAlert,
    Smile,
    CheckCircle
  };

  const filteredCategories = activeCategoryId === 'all'
    ? competencyCategories
    : competencyCategories.filter(cat => cat.id === activeCategoryId);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-ivory-50/50 dark:bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Clinical Competencies</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Midwifery Skills & Clinical Competencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Evidence-based clinical skills acquired and practised across Ghanaian tertiary, regional, and municipal maternal wards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategoryId === 'all'
                ? 'bg-teal-500 text-white shadow-soft'
                : 'bg-white dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-300 border border-sage-200 dark:border-charcoal-700 hover:border-teal-400'
            }`}
          >
            All Competencies ({competencyCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {competencyCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategoryId === cat.id
                  ? 'bg-teal-500 text-white shadow-soft'
                  : 'bg-white dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-300 border border-sage-200 dark:border-charcoal-700 hover:border-teal-400'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || HeartPulse;
            return (
              <div 
                key={category.id}
                className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-charcoal-800 shadow-soft"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-6 border-b border-sage-100 dark:border-charcoal-800">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100">
                      {category.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-2xl bg-ivory-50/70 dark:bg-charcoal-800/60 border border-sage-200/70 dark:border-charcoal-700 hover:border-teal-400 dark:hover:border-teal-500 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                          <h4 className="font-bold text-sm sm:text-base text-charcoal-800 dark:text-ivory-100">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-600 dark:text-charcoal-300 pl-6 leading-relaxed">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

