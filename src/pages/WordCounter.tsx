import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ClipboardPaste, Trash2 } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { useSEO } from '../hooks/useSEO';
import { useTranslation } from 'react-i18next';

export const WordCounter: React.FC = () => {
  const { t } = useTranslation();
  useSEO(t('nav_word'), t('word_desc'));
  const [inputText, setInputText] = useState('');
  const { pasteFromClipboard } = useClipboard();

  const handlePaste = async () => {
    const text = await pasteFromClipboard();
    if (text) {
      setInputText(text);
    }
  };

  const stats = useMemo(() => {
    const text = inputText || '';
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = text.trim() ? text.split(/\n+/).filter(Boolean).length : 0;
    const avgWordLength = words > 0 ? (charsNoSpaces / words).toFixed(1) : '0.0';

    return {
      chars,
      charsNoSpaces,
      words,
      sentences,
      paragraphs,
      avgWordLength
    };
  }, [inputText]);

  const statCards = [
    { label: t('stat_words'), value: stats.words },
    { label: t('stat_chars'), value: stats.chars },
    { label: t('stat_chars_nospaces'), value: stats.charsNoSpaces },
    { label: t('stat_sentences'), value: stats.sentences },
    { label: t('stat_paragraphs'), value: stats.paragraphs },
    { label: 'Avg Word Length', value: stats.avgWordLength },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto w-full flex flex-col gap-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-slate-900 font-serif tracking-tight mb-2">{t('nav_word')}</h2>
        <p className="text-slate-500 text-sm">{t('word_desc')}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {statCards.map(({ label, value }) => (
          <div key={label} className="p-4 bg-[#E8E2D6]/30 rounded-2xl border border-[#E8E2D6] flex flex-col">
            <div className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-wider mb-1">{label}</div>
            <div className="text-2xl font-bold text-slate-800">{value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#A09D94]">{t('source_text')}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePaste}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E2D6] rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-colors"
            >
              <ClipboardPaste className="w-4 h-4" />
              <span className="hidden sm:inline">{t('btn_paste')}</span>
            </button>
            <button
              onClick={() => setInputText('')}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E2D6] rounded-full text-xs font-semibold text-red-600 hover:bg-red-50 shadow-sm transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t('btn_clear')}</span>
            </button>
          </div>
        </div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="..."
          className="w-full h-80 p-4 text-sm leading-relaxed text-slate-800 bg-white border border-[#E8E2D6] rounded-2xl shadow-inner focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent resize-none transition-shadow"
        />
      </div>

      <div className="bg-white p-6 rounded-3xl border border-[#E8E2D6] mt-4 shadow-sm">
        <h3 className="text-sm font-bold text-[#A09D94] uppercase tracking-wider mb-4">
          {t('how_it_works')}
        </h3>
        <ol className="list-decimal pl-5 space-y-2 marker:text-[#A09D94] text-slate-600 text-sm">
          <li>{t('how_word_1')}</li>
          <li>{t('how_word_2')}</li>
        </ol>
      </div>
    </motion.div>
  );
};
