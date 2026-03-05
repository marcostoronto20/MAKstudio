'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt-BR' | 'en-US' | 'es-ES';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  'en-US': {
    'hero.title.start': 'We build modern,',
    'hero.title.modern': 'high-quality',
    'hero.title.end': 'mobile apps.',
    'hero.email': 'Email',
    'hero.contact_text': 'Contact us.',
    'hero.instagram': 'Instagram',
    'hero.footer.line1': 'MAK Studio is an independent mobile app studio',
    'hero.footer.line2': 'focused on building clean,',
    'hero.footer.line3': 'modern and intuitive digital products.',
    
    'about.text': 'MAK Studio is an independent mobile app studio focused on building clean, modern and intuitive digital products.',
    
    'apps.va_comprar.tag': 'Featured Project',
    'apps.va_comprar.description': 'A clean and intuitive grocery list app designed to simplify everyday shopping.',
    'apps.va_comprar.button': 'View Project',
    
    'apps.nutrikiko.tag': 'Private Client Platform',
    'apps.nutrikiko.description': 'A structured meal planning system built to help nutrition professionals deliver customized diet plans.',
    'apps.nutrikiko.button': 'View Platform',
    
    'apps.custom.name': 'Custom Service Apps',
    'apps.custom.tag': 'Tailor-Made Solutions',
    'apps.custom.description': 'Custom mobile apps designed for service professionals to manage bookings, clients and operations.',
    'apps.custom.button': 'Explore Solutions',
    
    'footer.email': 'Email',
    'footer.instagram': 'Instagram',
  },
  'pt-BR': {
    'hero.title.start': 'Criamos aplicativos',
    'hero.title.modern': 'modernos e de',
    'hero.title.end': 'alta qualidade.',
    'hero.email': 'Email',
    'hero.contact_text': 'Entre em contato conosco.',
    'hero.instagram': 'Instagram',
    'hero.footer.line1': 'MAK Studio é um estúdio independente de apps',
    'hero.footer.line2': 'focado em criar produtos digitais',
    'hero.footer.line3': 'limpos, modernos e intuitivos.',
    
    'about.text': 'MAK Studio é um estúdio independente de apps móveis focado em criar produtos digitais limpos, modernos e intuitivos.',
    
    'apps.va_comprar.tag': 'Projeto Destaque',
    'apps.va_comprar.description': 'Um app de lista de compras limpo e intuitivo projetado para simplificar as compras do dia a dia.',
    'apps.va_comprar.button': 'Ver Projeto',
    
    'apps.nutrikiko.tag': 'Plataforma Privada',
    'apps.nutrikiko.description': 'Um sistema estruturado de planejamento alimentar para ajudar nutricionistas a entregar planos de dieta personalizados.',
    'apps.nutrikiko.button': 'Ver Plataforma',
    
    'apps.custom.name': 'Apps de Serviço Personalizados',
    'apps.custom.tag': 'Soluções Sob Medida',
    'apps.custom.description': 'Apps móveis personalizados para profissionais de serviço gerenciarem agendamentos, clientes e operações.',
    'apps.custom.button': 'Explorar Soluções',
    
    'footer.email': 'Email',
    'footer.instagram': 'Instagram',
  },
  'es-ES': {
    'hero.title.start': 'Creamos aplicaciones',
    'hero.title.modern': 'modernas y de',
    'hero.title.end': 'alta calidad.',
    'hero.email': 'Correo',
    'hero.contact_text': 'Contáctenos.',
    'hero.instagram': 'Instagram',
    'hero.footer.line1': 'MAK Studio es un estudio independiente de apps',
    'hero.footer.line2': 'enfocado en crear productos digitales',
    'hero.footer.line3': 'limpios, modernos e intuitivos.',
    
    'about.text': 'MAK Studio es un estudio independiente de apps móviles enfocado en crear productos digitales limpios, modernos e intuitivos.',
    
    'apps.va_comprar.tag': 'Proyecto Destacado',
    'apps.va_comprar.description': 'Una app de lista de compras limpia e intuitiva diseñada para simplificar las compras diarias.',
    'apps.va_comprar.button': 'Ver Proyecto',
    
    'apps.nutrikiko.tag': 'Plataforma Privada',
    'apps.nutrikiko.description': 'Un sistema estructurado de planificación de comidas para ayudar a nutricionistas a entregar planes de dieta personalizados.',
    'apps.nutrikiko.button': 'Ver Plataforma',
    
    'apps.custom.name': 'Apps de Servicio Personalizadas',
    'apps.custom.tag': 'Soluciones a Medida',
    'apps.custom.description': 'Apps móviles personalizadas para profesionales de servicio para gestionar reservas, clientes y operaciones.',
    'apps.custom.button': 'Explorar Soluciones',
    
    'footer.email': 'Correo',
    'footer.instagram': 'Instagram',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR'); // Default to pt-BR as requested implies focus on Portuguese options

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
