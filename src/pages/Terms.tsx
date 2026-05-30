import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const Terms: React.FC = () => {
  useSEO('Terms & Conditions - Text Repeater Pro', 'Terms and Conditions for using Text Repeater Pro.');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto w-full bg-white p-8 rounded-3xl border border-[#E8E2D6] shadow-sm"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold text-slate-800 mb-6 font-serif tracking-tight">Terms and Conditions</h1>
      <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p>
          Welcome to Text Repeater Pro!
        </p>
        <p>
          These terms and conditions outline the rules and regulations for the use of Text Repeater Pro's Website.
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Text Repeater Pro if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">1. Use of the Site</h2>
        <p>
          Text Repeater Pro is provided as a free utility. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">2. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, Text Repeater Pro and/or its licensors own all the intellectual property rights and materials contained in this Website.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">3. No Warranties</h2>
        <p>
          This Website is provided "as is," with all faults, and Text Repeater Pro expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Furthermore, nothing contained on this Website shall be interpreted as advising you. The site relies on client-side JavaScript execution, and performance may vary based on your device limits.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">4. Limitation of Liability</h2>
        <p>
          In no event shall Text Repeater Pro, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Text Repeater Pro, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">5. External Links</h2>
        <p>
          Our Website may contain links to third-party web sites or services that are not owned or controlled by Text Repeater Pro. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">6. Changes to Terms</h2>
        <p>
          Text Repeater Pro is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>
      </div>
    </motion.div>
  );
};
