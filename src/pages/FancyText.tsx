import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ClipboardPaste, Trash2, Copy, CheckCircle2 } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { useSEO } from '../hooks/useSEO';
import { useTranslation } from 'react-i18next';

const FANCY_FONTS: Record<string, { label: string, map: Record<string, string> }> = {
  bold: {
    label: 'Bold',
    map: Object.fromEntries(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        .split('')
        .map((c, i) => [c, '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'[i]])
    )
  },
  italic: {
    label: 'Italic',
    map: Object.fromEntries(
       'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        .split('')
        .map((c, i) => [c, '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789'[i]])
    )
  },
  cursive: {
    label: 'Cursive',
    map: Object.fromEntries(
       'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .map((c, i) => [c, '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'[i]])
    )
  },
  wide: {
    label: 'Wide',
    map: Object.fromEntries(
       'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        .split('')
        .map((c, i) => [c, 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９'[i]])
    )
  },
  bubble: {
      label: 'Bubble',
      map: Object.fromEntries(
         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
          .split('')
          .map((c, i) => [c, 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨'[i] || c])
      )
  },
  strike: {
      label: 'Strike Through',
      map: {}
  }
};

const applyFancyFont = (text: string, fontKey: string) => {
  if (!text) return '';
  if (fontKey === 'strike') return text.split('').map(c => c + '\u0336').join('');
  
  const map = FANCY_FONTS[fontKey].map;
  return text.split('').map(c => map[c] || c).join('');
};


export const FancyText: React.FC = () => {
  const { t } = useTranslation();
  useSEO(t('nav_fancy'), t('fancy_desc'));
  const [inputText, setInputText] = useState('');
  const { pasteFromClipboard, copyToClipboard } = useClipboard();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handlePaste = async () => {
    const text = await pasteFromClipboard();
    if (text) {
      setInputText(text);
    }
  };

  const handleCopy = async (result: string, id: string) => {
    await copyToClipboard(result);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto w-full flex flex-col gap-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-slate-900 font-serif tracking-tight mb-2">{t('nav_fancy')}</h2>
        <p className="text-slate-500 text-sm">{t('fancy_desc')}</p>
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
          className="w-full h-32 p-4 text-sm leading-relaxed text-slate-800 bg-white border border-[#E8E2D6] rounded-2xl shadow-inner focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent resize-none transition-shadow"
        />
      </div>

      {inputText && (
        <div className="flex flex-col gap-4 mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#A09D94]">{t('fancy_results')}</h3>
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(FANCY_FONTS).map(([key, { label }]) => {
              const result = applyFancyFont(inputText, key);
              const isCopied = copiedId === key;
              return (
                <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#F2F1EC] p-4 rounded-2xl border border-[#E8E2D6] gap-4">
                  <div className="flex-1 min-w-0 pr-4">
                    <span className="block text-[10px] font-bold text-[#A09D94] uppercase tracking-wider mb-1">{label}</span>
                    <p className="text-slate-600 break-words text-lg font-mono">{result}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(result, key)}
                    className={`shrink-0 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-xl border ${
                      isCopied 
                        ? 'bg-[#E8E2D6] text-[#5A5A40] border-[#E8E2D6]' 
                        : 'bg-white text-slate-700 border-[#E8E2D6] hover:bg-slate-50'
                    }`}
                  >
                    {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {isCopied ? t('copied') : t('btn_copy')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-3xl border border-[#E8E2D6] mt-4 shadow-sm">
        <h3 className="text-sm font-bold text-[#A09D94] uppercase tracking-wider mb-4">
          {t('how_it_works')}
        </h3>
        <ol className="list-decimal pl-5 space-y-2 marker:text-[#A09D94] text-slate-600 text-sm">
          <li>{t('how_fancy_1')}</li>
          <li>{t('how_fancy_2')}</li>
          <li>{t('how_fancy_3')}</li>
        </ol>
      </div>
    </motion.div>
  );
};
