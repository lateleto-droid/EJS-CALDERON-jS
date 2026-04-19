'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    contactMethod: 'Phone',
    bestTime: '',
    description: '',
    honeypot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot 

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '',
        serviceType: '', contactMethod: 'Phone', bestTime: '',
        description: '', honeypot: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold font-heading text-jet mb-6">Request Your Free Estimate</h3>
      
      <div className="space-y-6">
        {/* Hidden Honeypot */}
        <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input 
              type="text" 
              name="firstName"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 pt-6 focus:border-brand focus:outline-none transition-colors text-jet placeholder-transparent"
              placeholder="First Name"
            />
            <label htmlFor="firstName" className="absolute left-0 top-2 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-brand">
              First Name
            </label>
          </div>
          <div className="relative">
            <input 
              type="text" 
              name="lastName"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 pt-6 focus:border-brand focus:outline-none transition-colors text-jet placeholder-transparent"
              placeholder="Last Name"
            />
            <label htmlFor="lastName" className="absolute left-0 top-2 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-brand">
              Last Name
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input 
              type="email" 
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 pt-6 focus:border-brand focus:outline-none transition-colors text-jet placeholder-transparent"
              placeholder="Email Address"
            />
            <label htmlFor="email" className="absolute left-0 top-2 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-brand">
              Email Address
            </label>
          </div>
          <div className="relative">
            <input 
              type="tel" 
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="peer w-full border-b-2 border-gray-200 bg-transparent py-2 pt-6 focus:border-brand focus:outline-none transition-colors text-jet placeholder-transparent"
              placeholder="Phone Number"
            />
            <label htmlFor="phone" className="absolute left-0 top-2 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-brand">
              Phone Number
            </label>
          </div>
        </div>

        <div className="relative pt-4">
          <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Service Type</label>
          <select 
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-brand focus:outline-none transition-colors text-jet"
          >
            <option value="" disabled>Select a service...</option>
            <option value="exteriors">Exteriors</option>
            <option value="interiors">Interiors</option>
            <option value="siding">Siding</option>
            <option value="decks">Decks</option>
            <option value="roofing">Roofing</option>
            <option value="concrete">Concrete & Foundation</option>
            <option value="other">Other / Multi-Service</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-3 block">Preferred Contact</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="contactMethod" value="Phone" checked={formData.contactMethod === 'Phone'} onChange={handleChange} className="text-brand focus:ring-brand accent-brand" />
                <span className="text-sm font-medium">Phone</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="contactMethod" value="Email" checked={formData.contactMethod === 'Email'} onChange={handleChange} className="text-brand focus:ring-brand accent-brand" />
                <span className="text-sm font-medium">Email</span>
              </label>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Best Time to Reach</label>
            <select 
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 bg-transparent py-2 focus:border-brand focus:outline-none transition-colors text-jet"
            >
              <option value="" disabled>Select time...</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
            </select>
          </div>
        </div>

        <div className="relative pt-4">
          <label htmlFor="description" className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Project Description</label>
          <textarea 
            name="description"
            id="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 rounded p-3 focus:border-brand focus:outline-none transition-colors text-jet resize-none"
            placeholder="Tell us a bit about what you&apos;re looking to build..."
          />
        </div>

        <p className="text-xs text-gray-400">
          By submitting this form, you agree to our privacy policy. We will never share your information.
        </p>

        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            "w-full py-4 rounded-sm font-bold tracking-wide uppercase transition-all shadow-lg active:scale-95 flex justify-center items-center gap-2",
            status === 'success' ? "bg-green-500 text-white hover:bg-green-600" : "bg-brand text-white hover:bg-brand-dark"
          )}
        >
          {status === 'loading' && <Loader2 className="animate-spin" size={20} />}
          {status === 'success' ? "Message Sent!" : "Get Free Estimate"}
        </button>
        
        {status === 'success' && (
          <div className="text-center text-sm font-medium text-green-600 animate-in fade-in slide-in-from-bottom-2">
            We&apos;ll be in touch within 24 hours!
          </div>
        )}
      </div>
    </form>
  );
}
