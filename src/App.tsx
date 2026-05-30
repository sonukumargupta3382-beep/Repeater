/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TextRepeater } from './pages/TextRepeater';
import { TextReverser } from './pages/TextReverser';
import { CaseConverter } from './pages/CaseConverter';
import { WordCounter } from './pages/WordCounter';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans text-slate-800">
      <ScrollToTop />
      <Header />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<TextRepeater />} />
          <Route path="/reverser" element={<TextReverser />} />
          <Route path="/case" element={<CaseConverter />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
