import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-black h-screen w-screen overflow-hidden text-white selection:bg-cyan-500/30">
      <Hero />
    </main>
  );
}
