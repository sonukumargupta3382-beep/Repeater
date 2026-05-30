import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="w-full bg-white border-t border-[#E8E2D6] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Text Repeater Pro. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? "text-[#5A5A40] font-semibold" : "text-slate-600 hover:text-[#5A5A40]"}>Tools</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-[#5A5A40] font-semibold" : "text-slate-600 hover:text-[#5A5A40]"}>About Us</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-[#5A5A40] font-semibold" : "text-slate-600 hover:text-[#5A5A40]"}>Contact Us</NavLink>
          <NavLink to="/privacy" className={({isActive}) => isActive ? "text-[#5A5A40] font-semibold" : "text-slate-600 hover:text-[#5A5A40]"}>Privacy Policy</NavLink>
          <NavLink to="/terms" className={({isActive}) => isActive ? "text-[#5A5A40] font-semibold" : "text-slate-600 hover:text-[#5A5A40]"}>Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
};
