import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Type, Repeat, ArrowLeftRight, CaseUpper, Binary, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Repeat, label: t('nav_repeater') },
    { to: '/reverser', icon: ArrowLeftRight, label: t('nav_reverser') },
    { to: '/case', icon: CaseUpper, label: t('nav_case') },
    { to: '/word-counter', icon: Binary, label: t('nav_word') },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
    { code: 'ko', name: '한국어' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E2D6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and App Name on Left (<) */}
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Text Repeater Pro Logo" className="w-8 h-8 rounded-lg shadow-sm" />
            <h1 className="text-xl font-bold tracking-tight text-[#2C2C1E]">
              {t('app_name')} <span className="text-[#5A5A40]">Pro</span>
            </h1>
          </div>
          
          {/* Hamburger Menu on Right (>) */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 p-2 text-slate-600 hover:bg-[#EBE7E0] rounded-xl transition-colors focus:outline-none"
                aria-label="Change language"
              >
                <Globe className="w-6 h-6" />
                <span className="text-xs font-semibold uppercase">{i18n.language.substring(0, 2)}</span>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-[#E8E2D6] rounded-xl shadow-lg overflow-hidden py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          i18n.language === lang.code
                            ? 'bg-[#5A5A40] text-white font-medium'
                            : 'text-slate-700 hover:bg-[#EBE7E0]'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:bg-[#EBE7E0] rounded-xl transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Menu Layer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white border-b border-[#E8E2D6] absolute w-full shadow-lg"
          >
            <nav className="flex flex-col p-4 gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {navItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#5A5A40] text-white shadow-md'
                        : 'text-slate-600 hover:bg-[#EBE7E0]'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
