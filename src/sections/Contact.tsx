import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Columna de Información (Roja) */}
          <div className="md:w-5/12 bg-brand-red p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black italic mb-6 uppercase">¡Hablemos!</h2>
              <p className="text-white/90 text-lg mb-12">
                Solicitá un presupuesto sin compromiso o coordinemos una reunión en tu edificio.
              </p>

              <div className="space-y-8">
                {/* Teléfono / WhatsApp interactivo */}
                <a 
                  href="https://wa.me/541124076677" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-medium">Llamanos o WhatsApp</p>
                    <p className="font-bold text-lg group-hover:text-white transition-colors">11 2407 6677</p>
                  </div>
                </a>

                {/* Email interactivo */}
                <a 
                  href="mailto:consultas.consorcio.up@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-medium">Email de consultas</p>
                    <p className="font-bold group-hover:text-white transition-colors">consultas.consorcio.up@gmail.com</p>
                  </div>
                </a>

                {/* Ubicación (Estático) */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-medium">Zona de Cobertura</p>
                    <p className="font-bold">CABA, Argentina</p>
                  </div>
                </div>

                {/* Instagram interactivo */}
                <a 
                  href="https://www.instagram.com/consorcio.up" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 font-medium">Seguinos</p>
                    <p className="font-bold group-hover:text-white transition-colors">@consorcio.up</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-sm font-medium opacity-80 italic">
                Transparencia y Eficacia en cada gestión.
              </p>
            </div>
          </div>

          {/* Columna del Formulario (Blanca) */}
          <div className="md:w-7/12 p-12 bg-white">
            <form 
              action="https://formspree.io/f/xdalnnoo" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dirección del Edificio</label>
                <input 
                  type="text" 
                  name="direccion"
                  required
                  placeholder="Ej: Av. Rivadavia 1234"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email o WhatsApp de contacto</label>
                <input 
                  type="text" 
                  name="contacto"
                  required
                  placeholder="Para poder responderte"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tu Mensaje</label>
                <textarea 
                  name="mensaje"
                  rows={4}
                  placeholder="Contanos qué necesita tu consorcio..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all resize-none text-gray-900"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-black/10"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;