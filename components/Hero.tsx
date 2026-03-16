'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function Hero() {
  const INSTAGRAM_ENABLED = false;
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] md:h-screen flex flex-col justify-start pt-24 md:pt-32 px-4 md:px-6 overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Desktop background */}
        <Image
          src="/hero/makbgfinal.png"
          alt="MAK Studio Background"
          fill
          priority
          quality={100}
          className="hidden md:block object-cover object-center opacity-55 scale-100"
        />

        {/* Mobile background */}
        <Image
  src="/hero/makbgfinal-mobile.png"
  alt="MAK Studio Background Mobile"
  fill
  priority
  quality={100}
  className="block md:hidden object-cover object-[58%_62%] opacity-55 scale-[0.92]"
/>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

        {/* Extra gradient help for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35 md:hidden" />

        {/* Watermark Icon */}
        <div className="hidden md:block absolute bottom-[-1%] right-[31%] w-[500px] h-[500px] opacity-[0.06] pointer-events-none mix-blend-screen rotate-[5deg]">
          <Image
            src="/hero/MK logo3.png"
            alt=""
            fill
            className="object-contain blur-[1px]"
          />
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-4 md:top-6 left-0 w-full px-4 md:px-6 flex justify-between items-start z-20">
        <div className="relative w-28 h-9 md:w-44 md:h-14">
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
      <div className="relative z-10 w-full flex items-start mt-2 md:-mt-8">
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold tracking-tight text-white mb-6 md:mb-8 flex flex-col items-start"
          >
            <div className="flex flex-col w-full">
              <span className="text-[2.35rem] sm:text-[2.8rem] md:text-6xl lg:text-7xl leading-[0.92]">
                {t('hero.title.start')}
              </span>

              <span className="text-[3rem] sm:text-[3.4rem] md:text-7xl lg:text-8xl text-white/50 leading-[0.9] ml-4 sm:ml-8 md:ml-24">
                {t('hero.title.modern')}
              </span>

              <span className="text-[2.25rem] sm:text-[2.6rem] md:text-5xl lg:text-6xl text-[#6BE2FF] drop-shadow-[0_0_15px_rgba(107,226,255,0.4)] leading-[0.92] ml-8 sm:ml-14 md:ml-48">
                {t('hero.title.end')}
              </span>
            </div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 max-w-full"
          >
            <a
              href="mailto:studiomak26@gmail.com"
              className="group flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium tracking-wide uppercase transition-colors"
            >
              <div className="relative w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]">
                <Image
                  src="/hero/iconemail.png"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.4)] font-bold">
                EMAIL
              </span>
            </a>

            <span className="hidden md:block w-px h-6 bg-white/18" />

            <p className="text-[11px] sm:text-xs md:text-sm text-white/45 font-light tracking-wide">
              {t('hero.contact_text')}
            </p>

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

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="
          absolute z-20
          bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[340px] text-center
          md:bottom-12 md:left-auto md:right-12 md:translate-x-0 md:w-auto md:max-w-xl md:text-right
          flex flex-col gap-1 md:gap-2
        "
      >
        <p className="font-display text-[1.95rem] sm:text-[2.2rem] md:text-4xl font-bold text-white leading-[0.95] tracking-tight">
          {t('hero.footer.line1')}
        </p>

        <p className="font-mono text-[10px] sm:text-[11px] md:text-sm text-cyan-500/80 tracking-[0.18em] md:tracking-[0.2em] uppercase">
          {t('hero.footer.line2')}
        </p>

        <p className="font-sans text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide leading-snug">
          {t('hero.footer.line3')}
        </p>
      </motion.div>
    </section>
  );
}
