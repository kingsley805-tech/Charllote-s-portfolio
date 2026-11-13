import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { cvData } from '../data/cvData';

export default function Contact() {
  const { personal } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a descriptive message (at least 15 characters).';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleQuickSubject = (subjectText, defaultMsg = '') => {
    setFormData(prev => ({
      ...prev,
      subject: subjectText,
      message: defaultMsg || prev.message
    }));
    if (errors.subject) setErrors(prev => ({ ...prev, subject: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate secure client-side submission with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Enquire</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 dark:text-ivory-100 tracking-tight">
            Professional Contact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300">
            For hospital placements, clinical opportunities, professional references, or healthcare collaborations.
          </p>
        </div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & References Notice */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-charcoal-800 shadow-soft">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100 mb-6 pb-3 border-b border-sage-100 dark:border-charcoal-800">
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-charcoal-500 dark:text-charcoal-400 block font-medium">Primary Email</span>
                    <a
                      href={`mailto:${personal.emails[0]}`}
                      className="text-sm sm:text-base font-semibold text-charcoal-800 dark:text-ivory-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all"
                    >
                      {personal.emails[0]}
                    </a>
                  </div>
                </div>

                {/* Email 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-charcoal-500 dark:text-charcoal-400 block font-medium">Secondary Email</span>
                    <a
                      href={`mailto:${personal.emails[1]}`}
                      className="text-sm sm:text-base font-semibold text-charcoal-800 dark:text-ivory-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all"
                    >
                      {personal.emails[1]}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-charcoal-500 dark:text-charcoal-400 block font-medium">Telephone (Ghana)</span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-sm sm:text-base font-semibold text-charcoal-800 dark:text-ivory-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {personal.phone} ({personal.formattedPhone})
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-charcoal-500 dark:text-charcoal-400 block font-medium">Location</span>
                    <p className="text-sm sm:text-base font-semibold text-charcoal-800 dark:text-ivory-100">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* References Available on Request Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sage-50 to-teal-50/50 dark:from-charcoal-800 dark:to-teal-950/40 border border-sage-300 dark:border-charcoal-700">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h4 className="font-serif font-bold text-base sm:text-lg text-charcoal-800 dark:text-ivory-100">
                  Professional References
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 mb-4 leading-relaxed">
                As stated in the official CV, academic and clinical references from Pentecost University lecturers and supervising hospital midwives are available upon formal request for credential verification.
              </p>
              
              <button
                type="button"
                onClick={() => handleQuickSubject(
                  "Request for Professional Midwifery References",
                  "Dear Charllote,\n\nI am contacting you regarding a midwifery position/opportunity and would like to request your academic and clinical references.\n\nThank you."
                )}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white dark:bg-charcoal-900 text-teal-700 dark:text-teal-300 border border-sage-300 dark:border-charcoal-700 hover:border-teal-500 transition-colors shadow-xs"
              >
                Click to Pre-fill Reference Request in Form ↓
              </button>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-charcoal-800 shadow-soft-xl">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-charcoal-800 dark:text-ivory-100 mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400 mb-6">
              Complete the form below to initiate communication. Response turnaround is typically within 24–48 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto shadow-soft">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-teal-900 dark:text-teal-200">
                  Message Prepared Successfully!
                </h4>
                <p className="text-sm text-teal-800 dark:text-teal-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Charllote Korankye. Your inquiry has been processed. You can also send an email directly to <strong>{personal.primaryEmail}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-teal-700 dark:text-teal-300 bg-white dark:bg-charcoal-900 border border-teal-300 dark:border-teal-700 hover:bg-teal-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Kwame Mensah / Sister Grace Osei"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-ivory-50/50 dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? 'border-rose-400 focus:ring-rose-400' 
                        : 'border-sage-200 dark:border-charcoal-700 focus:ring-teal-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300 mb-1.5">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@hospital.org"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-ivory-50/50 dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-rose-400 focus:ring-rose-400' 
                        : 'border-sage-200 dark:border-charcoal-700 focus:ring-teal-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject Line & Quick Pills */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300 mb-1.5">
                    Subject / Topic <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Clinical Placement / Hospital Position / Reference Request"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-ivory-50/50 dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject 
                        ? 'border-rose-400 focus:ring-rose-400' 
                        : 'border-sage-200 dark:border-charcoal-700 focus:ring-teal-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}

                  {/* Quick Preset Buttons */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] text-charcoal-400 mr-1 self-center">Quick suggestions:</span>
                    <button
                      type="button"
                      onClick={() => handleQuickSubject("Clinical Midwifery Job Opportunity")}
                      className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sage-100 dark:bg-charcoal-800 hover:bg-teal-100 text-teal-800 dark:text-teal-300 transition-colors"
                    >
                      Job Opportunity
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSubject("Request for Professional References")}
                      className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sage-100 dark:bg-charcoal-800 hover:bg-teal-100 text-teal-800 dark:text-teal-300 transition-colors"
                    >
                      Reference Request
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSubject("Maternal Health Project Collaboration")}
                      className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sage-100 dark:bg-charcoal-800 hover:bg-teal-100 text-teal-800 dark:text-teal-300 transition-colors"
                    >
                      Collaboration
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please include details about your organization, hospital ward, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-ivory-50/50 dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.message 
                        ? 'border-rose-400 focus:ring-rose-400' 
                        : 'border-sage-200 dark:border-charcoal-700 focus:ring-teal-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-teal-500 hover:bg-teal-600 active:scale-95 shadow-soft hover:shadow-soft-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

