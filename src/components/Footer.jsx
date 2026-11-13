import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Download, 
  ShieldCheck, 
  GraduationCap,
  ArrowUp
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Footer() {
  const { personal, stats } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Clinical Placements', href: '#experience' },
    { label: 'Competencies', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Clinical Care Flow', href: '#clinical-flow' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Curriculum Vitae', href: '#cv' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal-900 text-charcoal-200 pt-16 pb-12 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full ring-2 ring-teal-400/80 overflow-hidden shadow-soft shrink-0 bg-charcoal-800">
                <img
                  src="/images/charllote-avatar.jpg"
                  alt="Charllote Amaniampong Korankye - Midwife"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Charllote Amaniampong Korankye
                </h3>
                <p className="text-xs text-teal-400 font-medium">
                  Professional Midwife • Maternal & Newborn Health
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed max-w-sm">
              Pentecost University BSc. Midwifery candidate with supervised clinical training across five major public and teaching hospitals in Ghana. Committed to compassionate, respectful, and safe maternal-infant healthcare.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sage-300">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Strict compliance with N&MC Ghana professional standards</span>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-charcoal-300">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white">
              Direct Contact & Location
            </h4>
            
            <div className="space-y-2 text-xs text-charcoal-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${personal.phone}`} className="hover:text-teal-400 transition-colors">
                  {personal.phone} ({personal.formattedPhone})
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${personal.primaryEmail}`} className="hover:text-teal-400 transition-colors break-all">
                  {personal.primaryEmail}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={personal.cvFilePath}
                download="Charllote_Korankye_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all shadow-soft"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>
            © {new Date().getFullYear()} Charllote Amaniampong Korankye. All rights reserved. Professional Midwifery Portfolio.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Maternal Health in Ghana
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-charcoal-800 text-charcoal-300 hover:text-white hover:bg-teal-500 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

