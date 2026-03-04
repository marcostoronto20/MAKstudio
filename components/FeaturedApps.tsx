'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const apps = [
  {
    id: 1,
    name: 'Vá Comprar!',
    tag: 'Featured Project',
    description: 'A clean and intuitive grocery list app designed to simplify everyday shopping.',
    image: '/projects/va-comprar-mockup.png',
    buttonText: 'View Project',
    link: '#',
  },
  {
    id: 2,
    name: 'NutriKiko',
    tag: 'Private Client Platform',
    description: 'A structured meal planning system built to help nutrition professionals deliver customized diet plans.',
    image: '/projects/nutrikiko-mockup.png',
    buttonText: 'View Platform',
    link: '#',
  },
  {
    id: 3,
    name: 'Custom Service Apps',
    tag: 'Tailor-Made Solutions',
    description: 'Custom mobile apps designed for service professionals to manage bookings, clients and operations.',
    image: '/projects/custom-service-apps-mockup.png',
    buttonText: 'Explore Solutions',
    link: '#',
  },
];

export default function FeaturedApps() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-8"
          >
            {/* Image Card */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
              <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Floating Tag on Image */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium uppercase tracking-wider text-white/80">
                  {app.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-display text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {app.name}
              </h3>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm">
                {app.description}
              </p>
              
              <button className="mt-2 group/btn flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white hover:text-cyan-400 transition-colors">
                {app.buttonText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
