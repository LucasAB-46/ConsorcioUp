import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Imagen de Fondo de Puerto Madero */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Administración de Consorcios en Buenos Aires" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Capa de oscurecimiento para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
          Administración <br />
          <span className="text-brand-red">Transparente</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
          Gestión profesional en CABA liderada por <strong className="text-white">Aldana & Lucas</strong>. Elevamos la administración de tu edificio al siguiente nivel.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#contacto" 
            className="bg-brand-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-brand-red/20 uppercase"
          >
            Pedir Presupuesto
          </a>
          <a 
            href="#servicios" 
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all uppercase"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;