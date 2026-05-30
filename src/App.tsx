/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { TextRepeater } from './pages/TextRepeater';
import { TextReverser } from './pages/TextReverser';
import { CaseConverter } from './pages/CaseConverter';
import { WordCounter } from './pages/WordCounter';
import { FancyText } from './pages/FancyText';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans text-slate-800">
      <Header />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<TextRepeater />} />
          <Route path="/reverser" element={<TextReverser />} />
          <Route path="/case" element={<CaseConverter />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/fancy" element={<FancyText />} />
        </Routes>
      </main>
    </div>
  );
}
