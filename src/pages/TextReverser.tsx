import React, { useState, useMemo } from 'react';
import { ToolLayout } from '../components/ToolLayout';
import { useTranslation } from 'react-i18next';

export const TextReverser: React.FC = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [reverseMode, setReverseMode] = useState<'text' | 'words'>('text');

  const outputText = useMemo(() => {
    if (!inputText) return '';
    
    if (reverseMode === 'text') {
      return inputText.split('').reverse().join('');
    } else {
      return inputText.split(' ').reverse().join(' ');
    }
  }, [inputText, reverseMode]);

  const controls = (
    <div className="flex gap-4">
      <div className="w-full space-y-2">
        <span className="block text-xs font-semibold text-slate-500">{t('reverse_mode')}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setReverseMode('text')}
            className={`flex-1 px-3 py-2.5 rounded-xl border-2 transition-colors text-xs ${
              reverseMode === 'text'
                ? 'border-[#5A5A40] bg-[#F8F5F0] font-bold text-[#5A5A40]'
                : 'border-transparent bg-[#F2F1EC] font-medium text-slate-600 hover:bg-[#EBE7E0]'
            }`}
          >
            {t('reverse_text')}
          </button>
          <button
            onClick={() => setReverseMode('words')}
            className={`flex-1 px-3 py-2.5 rounded-xl border-2 transition-colors text-xs ${
              reverseMode === 'words'
                ? 'border-[#5A5A40] bg-[#F8F5F0] font-bold text-[#5A5A40]'
                : 'border-transparent bg-[#F2F1EC] font-medium text-slate-600 hover:bg-[#EBE7E0]'
            }`}
          >
            {t('reverse_words')}
          </button>
        </div>
      </div>
    </div>
  );

  const howItWorks = (
    <ol className="list-decimal pl-5 space-y-2 marker:text-[#A09D94]">
      <li>{t('how_reverser_1')}</li>
      <li>{t('how_reverser_2')}</li>
      <li>{t('how_reverser_3')}</li>
    </ol>
  );

  return (
    <ToolLayout
      title={t('nav_reverser')}
      description={t('reverser_desc')}
      inputText={inputText}
      setInputText={setInputText}
      outputText={outputText}
      controls={controls}
      howItWorks={howItWorks}
    />
  );
};
