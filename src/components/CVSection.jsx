import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  Building2, 
  GraduationCap, 
  ShieldCheck,
  FileCheck,
  Languages,
  Phone
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function CVSection() {
  const { personal, education, clinicalPlacements, certifications } = cvData;
  const [viewMode, setViewMode] = useState('preview'); // 'preview' or 'breakdown'

  return (
    <section id="cv" className="py-20 lg:py-28 relative bg-ivory-50/70 dark:bg-charcoal-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Official Midwifery Curriculum Vitae
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Download or inspect the complete, verified curriculum vitae of Charllote Korankye.
          </p>
        </div>

        {/* Action Header Card with Download & Actions */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-charcoal-800 shadow-soft-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                <FileCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100">
                  Charllote Korankye - Professional CV
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400 mt-0.5">
                  Format: PDF Document • Authentic Original Source • Size: ~46 KB
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              {/* Direct Download Button */}
              <a
                href={personal.cvFilePath}
                download="Charllote_Korankye_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-teal-500 hover:bg-teal-600 active:scale-95 shadow-soft transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF CV</span>
              </a>

              {/* View in New Tab Button */}
              <a
                href={personal.cvFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-charcoal-700 dark:text-ivory-200 bg-sage-50 dark:bg-charcoal-800 hover:bg-sage-100 dark:hover:bg-charcoal-700 border border-sage-300 dark:border-charcoal-700 transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Open in Tab</span>
              </a>
            </div>

          </div>

          {/* Toggle between embedded PDF and Structured Summary */}
          <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-sage-100 dark:border-charcoal-800">
            <button
              onClick={() => setViewMode('preview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'preview'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-charcoal-600 dark:text-charcoal-400 hover:bg-sage-100 dark:hover:bg-charcoal-800'
              }`}
            >
              Interactive Document Viewer
            </button>
            <button
              onClick={() => setViewMode('breakdown')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'breakdown'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-charcoal-600 dark:text-charcoal-400 hover:bg-sage-100 dark:hover:bg-charcoal-800'
              }`}
            >
              Structured Document Summary
            </button>
          </div>
        </div>

        {/* View Mode 1: In-Browser PDF Document Viewer */}
        {viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto bg-white dark:bg-charcoal-900 rounded-3xl overflow-hidden border border-sage-200 dark:border-charcoal-800 shadow-soft-xl">
            <div className="bg-charcoal-800 text-white p-3 px-5 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                Charllote_Korankye_CV.pdf (Original Document Preview)
              </span>
              <a 
                href={personal.cvFilePath} 
                download="Charllote_Korankye_CV.pdf"
                className="text-teal-300 hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                Download Copy
              </a>
            </div>

            <div className="relative w-full h-[650px] sm:h-[820px] bg-charcoal-100 dark:bg-charcoal-950">
              <iframe
                src={`${personal.cvFilePath}#view=FitH`}
                title="Charllote Korankye CV PDF Preview"
                className="w-full h-full border-0"
              />
            </div>
            
            <div className="p-4 bg-ivory-100 dark:bg-charcoal-950 text-center text-xs text-charcoal-500 dark:text-charcoal-400 border-t border-sage-200 dark:border-charcoal-800">
              Note: If your browser does not render inline PDF previews, please click the <strong>Download PDF CV</strong> button above to review the complete file.
            </div>
          </div>
        )}

        {/* View Mode 2: Structured Document Summary */}
        {viewMode === 'breakdown' && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            
            {/* Box 1: Core Credentials */}
            <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 border border-sage-200 dark:border-charcoal-800 shadow-soft">
              <h4 className="font-serif font-bold text-lg text-charcoal-800 dark:text-ivory-100 flex items-center gap-2 mb-4 pb-3 border-b border-sage-100 dark:border-charcoal-800">
                <GraduationCap className="w-5 h-5 text-teal-600" />
                <span>Education & Registrations</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-charcoal-700 dark:text-charcoal-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pentecost University:</strong> Midwifery Programme (BSc. Midwifery) — Active Candidate.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Odorgonno Senior High School:</strong> Senior High School Certificate.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Licensure:</strong> Midwifery licence / registration (PIN: In progress with Nursing & Midwifery Council Ghana).
                  </div>
                </li>
              </ul>
            </div>

            {/* Box 2: Hospital Placements */}
            <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 border border-sage-200 dark:border-charcoal-800 shadow-soft">
              <h4 className="font-serif font-bold text-lg text-charcoal-800 dark:text-ivory-100 flex items-center gap-2 mb-4 pb-3 border-b border-sage-100 dark:border-charcoal-800">
                <Building2 className="w-5 h-5 text-teal-600" />
                <span>Verified Hospital Rotations</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700 dark:text-charcoal-300">
                {clinicalPlacements.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    <span><strong>{p.facility}</strong> ({p.location})</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 pt-3 border-t border-sage-100 dark:border-charcoal-800">
                Assisted in the management of normal deliveries, labour monitoring, partographs, and immediate newborn care across all 5 facilities.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

