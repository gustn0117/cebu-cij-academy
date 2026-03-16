import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('cij-lang');
    if (saved && translations[saved]) setLang(saved);
  }, []);

  const changeLang = (code) => {
    setLang(code);
    localStorage.setItem('cij-lang', code);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t: translations[lang] || translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
