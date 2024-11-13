import { createContext, useContext, useState, useEffect } from 'react';
import en from '../../public/locales/en.json';
import es from '../../public/locales/es.json';

const LanguageContext = createContext({
  language: 'en',
  translations: en,
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    setTranslations(language === 'en' ? en : es);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
