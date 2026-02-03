import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Círculo de luz de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          ADMINISTRACIÓN <br /> 
          <span className="text-brand-red italic">TRANSPARENTE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
          Gestión profesional en CABA por <span className="text-white font-semibold">Aldana & Lucas</span>. 
          Llevamos la administración de tu consorcio al siguiente nivel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
            Pedir Presupuesto
          </button>
          <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors">
            Ver Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;