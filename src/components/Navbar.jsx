import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Download, 
  ShieldCheck, 
  PhoneCall,
  User,
  GraduationCap,
  Briefcase,
  Activity,
  FileText,
  Mail,
  Camera
} from 'lucide-react';

export default function Navbar({ activeSection, theme, toggleTheme, scrollProgress }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Activity },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'clinical-flow', label: 'Clinical Care', icon: HeartHandshake },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'cv', label: 'CV', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-teal-500 via-sage-400 to-blush-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-soft dark:shadow-none bg-ivory-100/90 dark:bg-charcoal-900/90 border-b border-sage-200/50 dark:border-charcoal-800'
            : 'bg-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-2">
            {/* Logo / Candidate Identity using Profile Picture */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1 min-w-0 max-w-[calc(100%-84px)] lg:max-w-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-teal-500/80 ring-offset-2 ring-offset-ivory-100 dark:ring-offset-charcoal-900 overflow-hidden shadow-soft group-hover:scale-105 transition-transform shrink-0 bg-teal-50 dark:bg-charcoal-800 flex items-center justify-center">
                <img
                  src="/images/charllote-avatar.jpg"
                  alt="Charllote Amaniampong Korankye Midwife Logo"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-sm sm:text-base md:text-lg text-charcoal-800 dark:text-ivory-100 tracking-tight leading-tight flex items-center gap-1.5 truncate">
                  Charllote Amaniampong Korankye
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-500 shrink-0" title="Clinical Midwife"></span>
                </span>
                <span className="text-[11px] sm:text-xs text-teal-600 dark:text-sage-300 font-medium tracking-wide truncate">
                  <span className="sm:hidden">Midwife • Maternal Health</span>
                  <span className="hidden sm:inline">Midwife • Maternal & Newborn Health</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-teal-700 dark:text-teal-300 font-semibold bg-teal-50 dark:bg-teal-950/40'
                        : 'text-charcoal-600 dark:text-charcoal-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-sage-50/60 dark:hover:bg-charcoal-800/50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-teal-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action: Theme Toggle (CV download removed from nav) */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100/60 dark:hover:bg-charcoal-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
                ) : (
                  <Moon className="w-5 h-5 text-teal-700" />
                )}
              </button>
            </div>

            {/* Mobile / Tablet Controls (< lg) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100/60 dark:hover:bg-charcoal-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-teal-700" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-charcoal-700 dark:text-charcoal-200 hover:bg-sage-100 dark:hover:bg-charcoal-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass border-t border-sage-200 dark:border-charcoal-800 bg-ivory-100/98 dark:bg-charcoal-900/98 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-4">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                      isActive
                        ? 'bg-teal-500 text-white font-semibold shadow-sm'
                        : 'text-charcoal-700 dark:text-charcoal-200 hover:bg-sage-100 dark:hover:bg-charcoal-800'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-sage-200/60 dark:border-charcoal-800 flex items-center justify-center gap-3 text-xs text-charcoal-500 dark:text-charcoal-400">
              <span>Pentecost University</span>
              <span>•</span>
              <span>Accra, Ghana</span>
              <span>•</span>
              <span>0209083214</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

