import React, { useState, useMemo } from 'react';
import { ToolLayout } from '../components/ToolLayout';
import { useTranslation } from 'react-i18next';

type CaseType = 'upper' | 'lower' | 'title' | 'camel' | 'pascal' | 'snake' | 'kebab' | 'sentence' | 'alternating';

export const CaseConverter: React.FC = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [caseType, setCaseType] = useState<CaseType>('upper');

  const outputText = useMemo(() => {
    if (!inputText) return '';
    
    switch (caseType) {
      case 'upper':
        return inputText.toUpperCase();
      case 'lower':
        return inputText.toLowerCase();
      case 'title':
        return inputText.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
      case 'sentence':
        return inputText.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, match => match.toUpperCase());
      case 'camel':
        return inputText.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
      case 'pascal': {
        const camel = inputText.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
        return camel.charAt(0).toUpperCase() + camel.slice(1);
      }
      case 'snake':
        return inputText.toLowerCase().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
      case 'kebab':
        return inputText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
      case 'alternating':
        return inputText.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
      default:
        return inputText;
    }
  }, [inputText, caseType]);

  const cases: { value: CaseType; label: string }[] = [
    { value: 'upper', label: 'UPPERCASE' },
    { value: 'lower', label: 'lowercase' },
    { value: 'title', label: 'Title Case' },
    { value: 'sentence', label: 'Sentence case.' },
    { value: 'camel', label: 'camelCase' },
    { value: 'pascal', label: 'PascalCase' },
    { value: 'snake', label: 'snake_case' },
    { value: 'kebab', label: 'kebab-case' },
    { value: 'alternating', label: 'aLtErNaTiNg' },
  ];

  const controls = (
    <div className="flex flex-wrap gap-2">
      {cases.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setCaseType(value)}
          className={`px-3 py-2 text-xs transition-colors rounded-xl border-2 ${
            caseType === value
               ? 'border-[#5A5A40] bg-[#F8F5F0] font-bold text-[#5A5A40]'
               : 'border-transparent bg-[#F2F1EC] font-medium text-slate-600 hover:bg-[#EBE7E0]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  const howItWorks = (
    <ol className="list-decimal pl-5 space-y-2 marker:text-[#A09D94]">
      <li>{t('how_case_1')}</li>
      <li>{t('how_case_2')}</li>
      <li>{t('how_case_3')}</li>
    </ol>
  );

  return (
    <ToolLayout
      title={t('nav_case')}
      description={t('case_desc')}
      inputText={inputText}
      setInputText={setInputText}
      outputText={outputText}
      controls={controls}
      howItWorks={howItWorks}
    />
  );
};
