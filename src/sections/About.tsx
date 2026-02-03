import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Imagen de stock profesional */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red -z-10 rounded-lg"></div>
            <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Administradores profesionales" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-[500px]"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-black text-white uppercase italic">
              Lucas & Aldana
            </h2>
            <p className="text-brand-red font-bold">Administradores de Consorcio Matriculados en CABA</p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sabemos que la administración de un edificio es, ante todo, una cuestión de confianza. Por eso, en <strong>Consorcio Up</strong>, nos alejamos del modelo tradicional de oficinas cerradas.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nos enfocamos en la <strong>cercanía con el vecino</strong> y en el uso de herramientas tecnológicas que permiten que cada propietario sepa exactamente en qué se invierte su dinero.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-white font-bold">
                <div className="w-12 h-[2px] bg-brand-red"></div>
                Transparencia y Eficacia
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;