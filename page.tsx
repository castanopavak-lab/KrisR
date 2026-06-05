import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import SmoothScroll from '@/components/SmoothScroll';

export default function Page() {
  return (
    <SmoothScroll>
      <Hero />
      
      {/* Quote Section */}
      <section className="h-screen flex items-center justify-center bg-black px-10">
        <h2 className="text-3xl md:text-6xl italic text-center max-w-5xl leading-tight font-serif">
          "La calle me enseñó más que la escuela, <span className="text-orange-600">la música fue mi salida</span> y hoy el mundo es mi escenario."
        </h2>
      </section>

      <Timeline />

      {/* Placeholder for Discography and other sections */}
      <section className="h-[200vh] bg-slate-950 flex flex-col items-center justify-center">
        <h3 className="text-white/20 text-sm tracking-[1em] uppercase mb-10">Próximos lanzamientos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Aquí irían las cards de discografía */}
        </div>
      </section>
    </SmoothScroll>
  );
}
