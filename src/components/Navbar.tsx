import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO EN CÓDIGO (Limpio y escalable) */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center font-bold text-white text-sm">
              UP
            </div>
            <span className="text-white font-bold text-xl tracking-tight uppercase">
              Consorcio <span className="text-brand-red">Up</span>
            </span>
          </div>
          
          {/* Links Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-brand-red transition-colors font-medium">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-300 hover:text-brand-red transition-colors font-medium">
              Nosotros
            </a>
            <a 
              href="https://wa.me/541124076777" 
              target="_blank" 
              className="bg-brand-red text-white px-5 py-2 rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg shadow-brand-red/20"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;