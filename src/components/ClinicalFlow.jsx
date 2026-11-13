import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Baby, 
  Stethoscope, 
  ShieldCheck, 
  HeartPulse, 
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function ClinicalFlow() {
  const { clinicalCaseWalkthrough } = cvData;
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const activePhase = clinicalCaseWalkthrough[activePhaseIndex];

  return (
    <section id="clinical-flow" className="py-20 lg:py-28 relative bg-ivory-50/70 dark:bg-charcoal-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Interactive Clinical Demonstration</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            The Midwifery Care Continuum
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            An evidence-based walkthrough of how Charllote provides structured clinical care from prenatal triage to postnatal maternal and infant recovery.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {clinicalCaseWalkthrough.map((phase, idx) => {
            const isActive = idx === activePhaseIndex;
            return (
              <button
                key={idx}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-teal-500 text-white border-teal-600 shadow-soft-lg scale-[1.02]'
                    : 'bg-white dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-200 border-sage-200 dark:border-charcoal-700 hover:border-teal-400'
                }`}
              >
                <div className="text-[11px] font-bold uppercase opacity-80 mb-1">
                  Step 0{idx + 1}
                </div>
                <div className="font-serif font-bold text-sm leading-tight">
                  {phase.phase.split('. ')[1] || phase.phase}
                </div>
                <div className={`text-[10px] mt-2 font-medium ${
                  isActive ? 'text-teal-100' : 'text-teal-600 dark:text-sage-400'
                }`}>
                  {phase.timing}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-10 border border-sage-200 dark:border-charcoal-800 shadow-soft-xl relative overflow-hidden">
          
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-sage-100 dark:border-charcoal-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Clinical Window: {activePhase.timing}</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal-800 dark:text-ivory-100">
                {activePhase.phase}
              </h3>
              <p className="text-sm sm:text-base text-teal-700 dark:text-teal-400 font-medium mt-1">
                Clinical Focus: {activePhase.focus}
              </p>
            </div>

            {/* Quick Progress indicator */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePhaseIndex(prev => Math.max(0, prev - 1))}
                disabled={activePhaseIndex === 0}
                className="px-3 py-2 rounded-xl border border-sage-200 dark:border-charcoal-700 text-xs font-semibold disabled:opacity-40 hover:bg-sage-50 dark:hover:bg-charcoal-800 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => setActivePhaseIndex(prev => Math.min(clinicalCaseWalkthrough.length - 1, prev + 1))}
                disabled={activePhaseIndex === clinicalCaseWalkthrough.length - 1}
                className="px-4 py-2 rounded-xl bg-teal-500 text-white text-xs font-semibold disabled:opacity-40 hover:bg-teal-600 transition-colors flex items-center gap-1"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Clinical Steps Checklist */}
          <div className="py-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 mb-4 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Standard Operating Procedures & Clinical Milestones</span>
            </h4>
            
            <div className="space-y-4">
              {activePhase.steps.map((step, sIdx) => (
                <div 
                  key={sIdx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-ivory-50 dark:bg-charcoal-800/50 border border-sage-200/60 dark:border-charcoal-700/80 hover:border-teal-400 dark:hover:border-teal-500 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {sIdx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-medium text-charcoal-800 dark:text-ivory-100">
                      {step}
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Guarantee Footer */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-50 via-sage-50 to-ivory-100 dark:from-charcoal-800 dark:via-charcoal-800 dark:to-teal-950/40 border border-teal-200/80 dark:border-charcoal-700 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-medium">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>WHO & Ghana Health Service Maternal-Newborn Guidelines Adherent</span>
            </div>
            <span className="text-charcoal-500 dark:text-charcoal-400 text-xs">
              Practised under supervision across all 5 clinical placement hospitals
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

