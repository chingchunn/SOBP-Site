import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";
import { Sun, Droplets, Recycle, LineChart, Wrench, ClipboardCheck } from "lucide-react";
const services = [
  {
    icon: Sun,
    title: "Energía Solar",
    description: "Sistemas fotovoltaicos personalizados para hogares y empresas.",
    category: "Instalación",
  },
  {
    icon: Droplets,
    title: "Gestión del Agua",
    description: "Soluciones eficientes para el aprovechamiento y tratamiento del agua.",
    category: "Consultoría",
  },
  {
    icon: Recycle,
    title: "Gestión de Residuos",
    description: "Sistemas integrales de reciclaje y manejo de residuos.",
    category: "Servicios",
  },
  {
    icon: LineChart,
    title: "Auditorías Ambientales",
    description: "Evaluación y optimización de tu impacto ambiental.",
    category: "Consultoría",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicio técnico especializado para sistemas ecológicos.",
    category: "Servicios",
  },
  {
    icon: ClipboardCheck,
    title: "Certificaciones",
    description: "Asesoramiento para certificaciones ambientales.",
    category: "Consultoría",
  },
];
const ServicesList = () => {
  const { toast } = useToast();
  const handleServiceClick = (service: string) => {
    toast({
      title: `Servicio seleccionado: ${service}`,
      description: "Un asesor se pondrá en contacto contigo pronto.",
    });
  };
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Ofrecemos una gama completa de soluciones sostenibles adaptadas a tus necesidades
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block p-2 bg-eco-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-eco-primary" />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-eco-text">
                    {service.title}
                  </h3>
                  <p className="text-eco-text/80 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      onClick={() => handleServiceClick(service.title)}
                      className="w-full text-eco-primary hover:bg-eco-primary hover:text-white"
                    >
                      Más Información
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesList;