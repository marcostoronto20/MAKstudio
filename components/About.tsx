'use client';

import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white/90"
        >
          <span className="text-cyan-400">MAK Studio</span> is an independent mobile app studio focused on building clean, modern and intuitive digital products.
        </motion.p>
      </div>
    </section>
  );
}
