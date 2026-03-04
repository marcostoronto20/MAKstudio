'use client';

import { Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex gap-8">
          <a 
            href="mailto:hello@makstudio.com" 
            className="text-sm font-medium uppercase tracking-wide text-white/50 hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium uppercase tracking-wide text-white/50 hover:text-cyan-400 transition-colors"
          >
            Instagram
          </a>
        </div>
        
        <div className="text-sm text-white/30 font-mono">
          © 2026 MAK Studio
        </div>
      </div>
    </footer>
  );
}
