import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Maximize2, 
  Sparkles,
  Lock
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Gallery() {
  const { galleryItems } = cvData;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, galleryItems.length]);

  const activePhoto = selectedPhotoIndex !== null ? galleryItems[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Clinical & Academic Gallery
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            Authentic documentation of Charllote Amaniampong Korankye's clinical uniforms, academic formation at Pentecost University, and hospital ward placements.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-charcoal-900 border border-sage-200 dark:border-charcoal-800 shadow-soft hover:shadow-soft-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-between p-5">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[11px] font-semibold backdrop-blur-md">
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-white">
                    <span className="text-xs text-sage-300 font-medium block">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-charcoal-900 flex-1 flex flex-col justify-between">
                <p className="text-xs text-charcoal-600 dark:text-charcoal-300 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 pt-2 border-t border-sage-100 dark:border-charcoal-800 flex items-center justify-between text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                  <span>Click to expand image</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Medical Privacy & Confidentiality Notice */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-sage-50/70 dark:bg-charcoal-800/60 border border-sage-200 dark:border-charcoal-700 flex items-center gap-3.5 text-xs text-charcoal-600 dark:text-charcoal-300">
          <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-400 shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <p className="leading-relaxed">
            <strong>Patient Privacy & Medical Ethics Compliance:</strong> In strict accordance with the Nursing and Midwifery Council of Ghana (N&MC) code of conduct and international patient rights, all clinical ward photographs respect patient confidentiality. No unconsented patient images or sensitive medical records are displayed.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full bg-charcoal-900 rounded-3xl overflow-hidden border border-charcoal-700 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-charcoal-800 bg-charcoal-950/80">
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold block">
                  {activePhoto.category} • {selectedPhotoIndex + 1} of {galleryItems.length}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  {activePhoto.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 rounded-xl bg-charcoal-800 text-charcoal-300 hover:text-white hover:bg-charcoal-700 transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[480px]">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={() => setSelectedPhotoIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-900/80 text-white hover:bg-teal-500 transition-colors shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setSelectedPhotoIndex((prev) => (prev + 1) % galleryItems.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-900/80 text-white hover:bg-teal-500 transition-colors shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-charcoal-950 text-charcoal-300 text-xs sm:text-sm border-t border-charcoal-800 flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-2xl">{activePhoto.description}</p>
              <span className="px-2.5 py-1 rounded bg-teal-950 text-teal-300 font-medium text-xs">
                {activePhoto.tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

