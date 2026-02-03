import React from 'react';
// Cambiamos 'Tool' por 'Wrench' que sí existe en Lucide
import { ShieldCheck, Receipt, Wrench, Users, Search, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const allServices = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Gestión Transparente",
      description: "Acceso total a la documentación y estados de cuenta del consorcio de forma digital."
    },
    {
      icon: <Receipt size={32} />,
      title: "Liquidación de Expensas",
      description: "Emisión puntual y clara, con múltiples medios de pago integrados para los vecinos."
    },
    {
      icon: <Wrench size={32} />, // Icono corregido aquí
      title: "Mantenimiento Preventivo",
      description: "Coordinación con proveedores técnicos calificados para cuidar el valor de su propiedad."
    },
    {
      icon: <Users size={32} />,
      title: "Atención de Aldana & Lucas",
      description: "Trato directo y personal con los administradores. Sin intermediarios ni demoras."
    },
    {
      icon: <Search size={32} />,
      title: "Auditorías de Gastos",
      description: "Analizamos cada rubro para optimizar los costos fijos y reducir el valor de las expensas."
    },
    {
      icon: <Clock size={32} />,
      title: "Guardia de Emergencias",
      description: "Estamos presentes ante cualquier urgencia técnica fuera de los horarios administrativos."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4">Lo que hacemos</h2>
          <p className="text-4xl md:text-5xl font-black text-white">
            Servicios diseñados para <br /> <span className="text-gray-500">vivir sin preocupaciones.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-gray/50 p-8 rounded-2xl border border-white/5 hover:border-brand-red/40 transition-all group"
            >
              <div className="text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;