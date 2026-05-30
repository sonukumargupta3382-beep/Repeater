import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const PrivacyPolicy: React.FC = () => {
  useSEO('Privacy Policy - Text Repeater Pro', 'Privacy Policy for Text Repeater Pro.');

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
      
      <h1 className="text-3xl font-bold text-slate-800 mb-6 font-serif tracking-tight">Privacy Policy</h1>
      <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p>
          At Text Repeater Pro, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Text Repeater Pro and how we use it.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">1. Data Processing</h2>
        <p>
          <strong>All text processing happens locally in your browser.</strong> We do not log, store, or transmit your text input to any external servers. The text you paste or type into our tools remains strictly on your device.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">2. Log Files</h2>
        <p>
          Text Repeater Pro follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">3. Cookies and Web Beacons</h2>
        <p>
          Like any other website, Text Repeater Pro uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">4. Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">5. Advertising Partners Privacy Policies</h2>
        <p>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Text Repeater Pro, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that Text Repeater Pro has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-6 mb-2">6. Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </motion.div>
  );
};
