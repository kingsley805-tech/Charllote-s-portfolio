import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  ShieldCheck, 
  Users, 
  FileCheck,
  ChevronRight,
  Activity
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Experience() {
  const { clinicalPlacements, experienceSummary } = cvData;
  const [selectedPlacementId, setSelectedPlacementId] = useState(clinicalPlacements[0].id);

  const selectedPlacement = clinicalPlacements.find(p => p.id === selectedPlacementId) || clinicalPlacements[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Clinical Experience & Rotations</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Hospital Clinical Placements
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Comprehensive supervised rotations across five leading public hospitals and apex tertiary referral centres in Ghana.
          </p>
        </div>

        {/* Global Summary Cards (CV Verified Clinical Duties) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-sage-200 dark:border-charcoal-800 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
              <Baby className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-800 dark:text-ivory-100 mb-2">
              Normal Delivery Management
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              Assisted in the clinical management of normal birth deliveries across all five public facilities, collaborating closely with senior midwives and doctors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-sage-200 dark:border-charcoal-800 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-800 dark:text-ivory-100 mb-2">
              Intrapartum Partograph Vigilance
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              Monitored maternal and fetal wellbeing throughout active labour, meticulously recording vital signs, contractions, and fetal heart rate on partographs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-sage-200 dark:border-charcoal-800 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-charcoal-800 dark:text-ivory-100 mb-2">
              Antenatal & Postnatal Care
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              Delivered weekly antenatal assessments, screened for high-risk complications, and provided postpartum counselling on exclusive breastfeeding and infant care.
            </p>
          </div>
        </div>

        {/* Interactive Hospital Placements Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Facility Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 px-1 mb-2">
              Select Placement Facility ({clinicalPlacements.length})
            </h3>
            {clinicalPlacements.map((placement, index) => {
              const isSelected = placement.id === selectedPlacementId;
              return (
                <button
                  key={placement.id}
                  onClick={() => setSelectedPlacementId(placement.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-teal-500 text-white border-teal-600 shadow-soft-lg'
                      : 'bg-white dark:bg-charcoal-900 text-charcoal-800 dark:text-ivory-100 border-sage-200 dark:border-charcoal-800 hover:border-teal-400 dark:hover:border-teal-600'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-semibold uppercase ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-sage-100 dark:bg-charcoal-800 text-teal-800 dark:text-teal-300'
                      }`}>
                        {placement.badge}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-base leading-snug">
                      {placement.facility}
                    </h4>
                    <p className={`text-xs flex items-center gap-1 ${
                      isSelected ? 'text-teal-100' : 'text-charcoal-500 dark:text-charcoal-400'
                    }`}>
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{placement.location}</span>
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-charcoal-400 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Facility Card */}
          <div className="lg:col-span-7 bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-charcoal-800 shadow-soft-xl">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-sage-100 dark:border-charcoal-800">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  {selectedPlacement.badge}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal-800 dark:text-ivory-100">
                  {selectedPlacement.facility}
                </h3>
                <p className="text-xs sm:text-sm text-teal-700 dark:text-teal-400 font-medium flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedPlacement.location}</span>
                  <span>•</span>
                  <span>{selectedPlacement.type}</span>
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sage-50 dark:bg-charcoal-800 text-xs font-semibold text-charcoal-700 dark:text-ivory-200 border border-sage-200 dark:border-charcoal-700">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>{selectedPlacement.role}</span>
                </span>
              </div>
            </div>

            {/* Ward / Department Coverage */}
            <div className="py-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 mb-2.5">
                Hospital Departments & Clinical Units
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedPlacement.departments.map((dept, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-ivory-200/80 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-200 text-xs font-medium border border-sage-200/80 dark:border-charcoal-700"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Responsibilities directly from CV */}
            <div className="py-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 mb-2">
                Key Clinical Responsibilities & Practical Exposure
              </h4>
              <div className="space-y-3">
                {selectedPlacement.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                    <p className="text-sm text-charcoal-700 dark:text-charcoal-200 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Skills Applied Badges */}
            <div className="pt-6 border-t border-sage-100 dark:border-charcoal-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400 mb-3">
                Core Midwifery Skills Applied at this Facility
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedPlacement.skillsApplied.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-medium border border-teal-200 dark:border-teal-800"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

