import React, { useState, useMemo } from 'react';
import { ToolLayout } from '../components/ToolLayout';
import { useTranslation } from 'react-i18next';

export const TextRepeater: React.FC = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [repeatCount, setRepeatCount] = useState<number>(10);
  const [separator, setSeparator] = useState<string>('space');
  const [customSeparator, setCustomSeparator] = useState<string>('');

  const outputText = useMemo(() => {
    if (!inputText || repeatCount <= 0) return '';
    
    let sep = '';
    switch (separator) {
      case 'space': sep = ' '; break;
      case 'newline': sep = '\n'; break;
      case 'comma': sep = ', '; break;
      case 'none': sep = ''; break;
      case 'custom': sep = customSeparator; break;
      default: sep = ' ';
    }

    return Array(repeatCount).fill(inputText).join(sep);
  }, [inputText, repeatCount, separator, customSeparator]);

  const controls = (
    <div className="flex flex-col sm:flex-row gap-4 items-end">
      <div className="flex-1 w-full space-y-2">
        <label htmlFor="repeatCount" className="block text-xs font-semibold text-slate-500">
          {t('repeat_times')}
        </label>
        <input
          id="repeatCount"
          type="number"
          min="1"
          max="10000"
          value={repeatCount}
          onChange={(e) => setRepeatCount(parseInt(e.target.value) || 0)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D6] bg-[#FDFBF7] text-sm focus:ring-2 focus:ring-[#5A5A40] outline-none transition-shadow"
        />
      </div>
      <div className="flex-1 w-full space-y-2">
        <label htmlFor="separator" className="block text-xs font-semibold text-slate-500">
          {t('separator')}
        </label>
        <select
          id="separator"
          value={separator}
          onChange={(e) => setSeparator(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D6] bg-[#FDFBF7] text-sm focus:ring-2 focus:ring-[#5A5A40] outline-none transition-shadow"
        >
          <option value="space">{t('space')}</option>
          <option value="newline">{t('newline')}</option>
          <option value="comma">{t('comma')}</option>
          <option value="none">{t('none')}</option>
          <option value="custom">{t('custom')}</option>
        </select>
      </div>
      {separator === 'custom' && (
         <div className="flex-1 w-full space-y-2">
           <label htmlFor="customSeparator" className="block text-xs font-semibold text-slate-500">
             {t('custom')}
           </label>
           <input
             id="customSeparator"
             type="text"
             value={customSeparator}
             onChange={(e) => setCustomSeparator(e.target.value)}
             className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D6] bg-[#FDFBF7] text-sm focus:ring-2 focus:ring-[#5A5A40] outline-none transition-shadow"
           />
         </div>
      )}
    </div>
  );

  const howItWorks = (
    <ol className="list-decimal pl-5 space-y-2 marker:text-[#A09D94]">
      <li>{t('how_repeater_1')}</li>
      <li>{t('how_repeater_2')}</li>
      <li>{t('how_repeater_3')}</li>
      <li>{t('how_repeater_4')}</li>
    </ol>
  );

  return (
    <ToolLayout
      title={t('nav_repeater')}
      description={t('repeater_desc')}
      inputText={inputText}
      setInputText={setInputText}
      outputText={outputText}
      controls={controls}
      howItWorks={howItWorks}
    />
  );
};
