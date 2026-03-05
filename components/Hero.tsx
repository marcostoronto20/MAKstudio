'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function Hero() {
  const INSTAGRAM_ENABLED = false;
  const { t, language } = useLanguage();
  const isEnglish = language === 'en-US';

  return (
    <section className="relative h-screen flex flex-col justify-start pt-24 md:pt-32 px-4 md:px-6 overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
  src="/hero/mak-studio-hero-v2.png"
  alt="MAK Studio Background"
  fill
  className="object-cover object-[63%_center] md:object-center opacity-55 scale-155 md:scale-100"
  priority
  quality={100}
/>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Watermark Icon */}
        <div className="absolute bottom-[-1%] right-[-150%] md:right-[31%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-[0.06] pointer-events-none mix-blend-screen rotate-[5deg]">
          <Image
            src="/hero/MK logo3.png"
            alt=""
            fill
            className="object-contain blur-[1px]"
        />
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-6 left-0 w-full px-6 flex justify-between items-start z-20">
        <div className="relative w-32 h-10 md:w-44 md:h-14">
          <Image 
            src="/hero/maklogo2branco.png" 
            alt="MAK Studio" 
            fill
            className="object-contain object-left opacity-80 hover:opacity-100 transition duration-300"
            priority
          />
        </div>
        <LanguageSelector />
      </header>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex items-start -mt-4 md:-mt-8">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[0.9] tracking-tight text-white mb-12 flex flex-col items-start"
          >
            <div className="flex flex-col w-full">
              <span className="text-4xl md:text-6xl lg:text-7xl leading-[0.9]">{t('hero.title.start')}</span>
              <span className="text-5xl md:text-7xl lg:text-8xl text-white/50 leading-[0.9] ml-12 md:ml-24">{t('hero.title.modern')}</span>
              <span className="text-3xl md:text-5xl lg:text-6xl text-[#6BE2FF] drop-shadow-[0_0_15px_rgba(107,226,255,0.4)] leading-[0.9] ml-24 md:ml-48">{t('hero.title.end')}</span>
            </div>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6"
          >
            <a 
              href="mailto:studiomak26@gmail.com" 
              className="group flex items-center gap-2 text-sm font-medium tracking-wide uppercase transition-colors"
            >
              <div className="relative w-5 h-5 drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]">
                <Image 
                  src="/hero/iconemail.png" 
                  alt="Email" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.4)] font-semibold">EMAIL</span>
            </a>

            {INSTAGRAM_ENABLED && (
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{t('hero.instagram')}</span>
              </a>
            )}

          </motion.div>
        </div>
      </div>

      {/* Footer Text - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 right-4 md:right-12 max-w-xl text-right flex flex-col gap-2 z-20"
      >
        <p className="font-display text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight">
          {t('hero.footer.line1')}
        </p>
        <p className="font-mono text-xs md:text-sm text-cyan-500/80 tracking-[0.2em] uppercase">
          {t('hero.footer.line2')}
        </p>
        <p className="font-sans text-lg md:text-xl text-gray-400 font-light tracking-wide">
          {t('hero.footer.line3')}
        </p>
      </motion.div>
    </section>
  );
}
