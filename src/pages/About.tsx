import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const About: React.FC = () => {
  useSEO('About Us - Text Repeater Pro', 'Learn more about Text Repeater Pro and our free online text utilities.');

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
      
      <h1 className="text-3xl font-bold text-slate-800 mb-6 font-serif tracking-tight">About Us</h1>
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          Welcome to <strong>Text Repeater Pro</strong>. We provide a comprehensive suite of online text utilities built to make your daily tasks, communication, and text formatting easier and more efficient.
        </p>
        <p>
          Whether you need to generate repeated text, reverse strings, manipulate character casing, or get accurate real-time word statistics, our platform is designed to be completely free, fast, and accessible right from your browser. We focus on modern design, speed, and privacy—meaning your text data stays securely on your device and is not saved on our servers.
        </p>
        <p>
          Our tools include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Text Repeater:</strong> Generate bulk text quickly and efficiently.</li>
          <li><strong>Text Reverser:</strong> Flip characters or words backwards.</li>
          <li><strong>Case Converter:</strong> Easily format sentences into uppercase, lowercase, camelCase, and more.</li>
          <li><strong>Word Counter:</strong> Monitor real-time character, word, and paragraph counts.</li>
        </ul>
        <p>
          We hope our tools save you time. If you have any suggestions, feel free to use our Contact Us page to reach out. Thank you for using Text Repeater Pro!
        </p>
      </div>
    </motion.div>
  );
};
