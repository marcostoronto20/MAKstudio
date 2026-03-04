'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-4 items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
      <button 
        onClick={() => setLanguage('pt-BR')}
        className={`text-2xl hover:scale-110 transition-transform ${language === 'pt-BR' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-100'}`}
        title="Português"
      >
        🇧🇷
      </button>
      <button 
        onClick={() => setLanguage('en-US')}
        className={`text-2xl hover:scale-110 transition-transform ${language === 'en-US' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-100'}`}
        title="English"
      >
        🇺🇸
      </button>
      <button 
        onClick={() => setLanguage('es-ES')}
        className={`text-2xl hover:scale-110 transition-transform ${language === 'es-ES' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-100'}`}
        title="Español"
      >
        🇪🇸
      </button>
    </div>
  );
}
