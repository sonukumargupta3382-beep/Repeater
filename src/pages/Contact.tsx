import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Send, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

export const Contact: React.FC = () => {
  useSEO('Contact Us - Text Repeater Pro', 'Get in touch with the Text Repeater Pro team.');
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '57ad3087-e931-4e5e-b56d-256631181802');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto w-full bg-white p-8 rounded-3xl border border-[#E8E2D6] shadow-sm"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>
      
      <h1 className="text-3xl font-bold text-slate-800 mb-2 font-serif tracking-tight">Contact Us</h1>
      <p className="text-slate-500 mb-8">We'd love to hear from you. Please fill out the form below to initiate communication.</p>

      {status === 'success' && (
        <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 border border-green-200">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 bg-rose-50 text-rose-700 p-4 rounded-xl flex items-center gap-3 border border-rose-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">Oops! Something went wrong. Please try again later.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="subject" value="New Contact Form Submission - Text Repeater Pro" />
        
        <div>
          <label htmlFor="name" className="block text-sm font-semibold tracking-wide text-slate-600 mb-1.5 uppercase">Full Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            placeholder="John Doe"
            className="w-full bg-[#FDFBF7] border border-[#E8E2D6] rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] transition-shadow"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold tracking-wide text-slate-600 mb-1.5 uppercase">Email Address</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            placeholder="john@example.com"
            className="w-full bg-[#FDFBF7] border border-[#E8E2D6] rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] transition-shadow"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold tracking-wide text-slate-600 mb-1.5 uppercase">Message</label>
          <textarea 
            name="message" 
            id="message" 
            rows={5}
            required 
            placeholder="How can we help you?"
            className="w-full bg-[#FDFBF7] border border-[#E8E2D6] rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] transition-shadow resize-y"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-[#2C2C1E] text-[#FDFBF7] font-semibold rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 hover:bg-[#1A1A10] transition-colors disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        
        <p className="text-center text-sm font-medium text-slate-500 mt-4">
          Admin: KKG
        </p>
      </form>
    </motion.div>
  );
};
