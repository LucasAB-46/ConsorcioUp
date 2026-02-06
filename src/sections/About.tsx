import React from 'react';
import { Shield, Zap, Scale } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-4 uppercase italic">Sobre Nosotros</h2>
          <div className="w-24 h-2 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              En <strong className="text-brand-dark">Consorcio Up</strong>, unimos dos pilares fundamentales para la administración moderna: la <strong>seguridad jurídica</strong> y la <strong>innovación tecnológica</strong>.
            </p>
            <p>
              Nuestro equipo está liderado por la <strong>Dra. Aldana Freitas Abuin</strong>, abogada especializada, aportando un respaldo legal sólido en cada decisión, y <strong>Lucas</strong>, experto en sistemas, garantizando procesos ágiles, digitales y transparentes.
            </p>
            <p className="bg-brand-dark text-white p-6 rounded-2xl italic shadow-xl">
              "No solo administramos edificios; elevamos la calidad de vida de los vecinos mediante una gestión presente, honesta y eficiente."
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-brand-red shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Scale className="text-brand-red w-8 h-8" />
                <h3 className="font-bold text-xl text-brand-dark uppercase">Respaldo Legal</h3>
              </div>
              <p className="text-gray-600">Asesoramiento jurídico integral para prevenir conflictos y asegurar el cumplimiento de todas las normativas vigentes.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-brand-dark shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="text-brand-dark w-8 h-8" />
                <h3 className="font-bold text-xl text-brand-dark uppercase">Gestión Digital</h3>
              </div>
              <p className="text-gray-600">Implementamos soluciones tecnológicas para que la información del consorcio esté siempre disponible y clara para los propietarios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;