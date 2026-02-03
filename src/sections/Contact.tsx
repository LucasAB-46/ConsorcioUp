import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-red rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            
            {/* Info de contacto */}
            <div className="p-12 text-white flex flex-col justify-center space-y-8">
              <h2 className="text-4xl font-black uppercase italic">¡Mejora tu Consorcio!</h2>
              <p className="text-red-100 text-lg">
                Solicitá un presupuesto sin compromiso o coordinemos una reunión en tu edificio.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Phone size={20}/></div>
                  <span className="font-bold">11 2407 6777</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Mail size={20}/></div>
                  <span>consultas.consorcio.up</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><MapPin size={20}/></div>
                  <span>CABA, Argentina</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Instagram size={20}/></div>
                  <span>@consorcio.up</span>
                </div>
              </div>
            </div>

            {/* Formulario Simple */}
            <div className="bg-white p-12">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-brand-red text-black" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Dirección del Edificio</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-brand-red text-black" placeholder="Ej: Av. Rivadavia 1234" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tu Mensaje</label>
                  <textarea className="w-full p-3 border border-gray-200 rounded-lg focus:outline-brand-red text-black h-32" placeholder="Contanos qué necesita tu consorcio..."></textarea>
                </div>
                <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Consorcio Up - Aldana & Lucas Administradores. Todos los derechos reservados.
        </footer>
      </div>
    </section>
  );
};

export default Contact;