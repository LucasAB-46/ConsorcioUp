import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-6">
        
        {/* Aquí ponemos la imagen del logo */}
        <div className="opacity-80 hover:opacity-100 transition-opacity">
            {/* Asegúrate de que la imagen siga llamándose logo.jpg en la carpeta public */}
            <img 
                src="/logo.jpg" 
                alt="Consorcio Up Logo" 
                className="h-24 w-auto object-contain mx-auto"
            />
        </div>

        <p className="text-gray-400 text-sm max-w-md">
          Gestión profesional, transparente y eficiente para consorcios en CABA.
          <br />
          Aldana & Lucas.
        </p>

        <p className="text-brand-gray text-xs mt-4">
          © {new Date().getFullYear()} Consorcio Up. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;