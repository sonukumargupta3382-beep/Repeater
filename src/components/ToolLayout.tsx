import React from 'react';
import { motion } from 'motion/react';
import { Copy, ClipboardPaste, Trash2, CheckCircle2 } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { useSEO } from '../hooks/useSEO';
import { useTranslation } from 'react-i18next';

interface ToolLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  inputText: string;
  setInputText: (text: string) => void;
  outputText: string;
  controls?: React.ReactNode;
  howItWorks?: React.ReactNode;
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({
  title,
  description,
  children,
  inputText,
  setInputText,
  outputText,
  controls,
  howItWorks
}) => {
  useSEO(title, description);
  const { t } = useTranslation();
  const { copyToClipboard, pasteFromClipboard, hasCopied } = useClipboard();

  const handlePaste = async () => {
    const text = await pasteFromClipboard();
    if (text) {
      setInputText(text);
    }
  };

  const handleClear = () => {
    setInputText('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto w-full flex flex-col gap-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-slate-900 font-serif tracking-tight mb-2">{title}</h2>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>

      {controls && (
        <div className="bg-white p-6 rounded-3xl border border-[#E8E2D6] shadow-sm">
          {controls}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A09D94]">{t('source_text')}</h3>
            <div className="flex items-center gap-2">
               <button
                onClick={handlePaste}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E2D6] rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-colors"
                aria-label={t('btn_paste')}
              >
                <ClipboardPaste className="w-4 h-4" />
                <span className="hidden sm:inline">{t('btn_paste')}</span>
              </button>
              <button
                onClick={handleClear}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E2D6] rounded-full text-xs font-semibold text-red-600 hover:bg-red-50 shadow-sm transition-colors"
                aria-label={t('btn_clear')}
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
            className="w-full h-64 p-4 text-sm leading-relaxed text-slate-800 bg-white border border-[#E8E2D6] rounded-2xl shadow-inner focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent resize-none transition-shadow"
          />
        </div>

        {/* Output Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A09D94]">{t('result_output')}</h3>
            <button
              onClick={() => copyToClipboard(outputText)}
              disabled={!outputText}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-all ${
                hasCopied
                  ? 'bg-[#E8E2D6] text-[#5A5A40] border border-[#E8E2D6]'
                  : 'bg-[#5A5A40] text-white border border-[#5A5A40] hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
              }`}
            >
              {hasCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {hasCopied ? t('copied') : t('btn_copy')}
            </button>
          </div>
          {children || (
            <textarea
              readOnly
              value={outputText}
              placeholder="..."
              className="w-full h-64 p-4 text-sm text-slate-600 bg-[#F2F1EC] border border-[#E8E2D6] rounded-2xl shadow-inner focus:outline-none resize-none font-mono whitespace-pre-wrap"
            />
          )}
        </div>
      </div>
      
      {howItWorks && (
        <div className="bg-white p-6 rounded-3xl border border-[#E8E2D6] mt-4 shadow-sm">
          <h3 className="text-sm font-bold text-[#A09D94] uppercase tracking-wider mb-4">
            {t('how_it_works')}
          </h3>
          <div className="text-slate-600 text-sm space-y-2 leading-relaxed">
            {howItWorks}
          </div>
        </div>
      )}
    </motion.div>
  );
};
