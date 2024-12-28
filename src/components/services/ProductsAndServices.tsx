import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";
import { Sun, Droplets, Recycle, LineChart, Wrench, ClipboardCheck } from "lucide-react";
const products = [
  {
    icon: Sun,
    title: "Paneles Solares Personalizables",
    description: "Sistemas fotovoltaicos de alta eficiencia adaptados a tus necesidades específicas.",
  },
  {
    icon: Droplets,
    title: "Sistemas de Recolección de Agua",
    description: "Soluciones innovadoras para la captación y aprovechamiento de agua pluvial.",
  },
  {
    icon: Recycle,
    title: "Reciclaje Inteligente",
    description: "Compactadoras de residuos con tecnología avanzada para una gestión eficiente.",
  },
];
const services = [
  {
    icon: LineChart,
    title: "Consultoría en Sostenibilidad",
    description: "Asesoramiento experto para implementar prácticas ecológicas en tu empresa.",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description: "Servicio completo de instalación y mantenimiento de sistemas ecológicos.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditorías Ambientales",
    description: "Evaluaciones detalladas para garantizar el cumplimiento de normas ambientales.",
  },
];
const ProductsAndServices = () => {
  const { toast } = useToast();
  const handleMoreInfo = (item: string) => {
    toast({
      title: `Información sobre ${item}`,
      description: "Un asesor se pondrá en contacto contigo pronto.",
    });
  };
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-eco-secondary/30 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
            Nuestras Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            Productos y Servicios
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Descubre nuestras soluciones sostenibles diseñadas para maximizar la eficiencia y minimizar el impacto ambiental
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Productos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-eco-text mb-8">Productos Ecológicos</h3>
            <div className="space-y-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="flex-shrink-0"
                        >
                          <product.icon className="w-8 h-8 text-eco-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-eco-text">
                            {product.title}
                          </h4>
                          <p className="text-eco-text/80 mb-4">
                            {product.description}
                          </p>
                          <Button
                            variant="outline"
                            onClick={() => handleMoreInfo(product.title)}
                            className="text-eco-primary hover:bg-eco-primary hover:text-white"
                          >
                            Más Información
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-eco-text mb-8">Servicios Profesionales</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="flex-shrink-0"
                        >
                          <service.icon className="w-8 h-8 text-eco-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-eco-text">
                            {service.title}
                          </h4>
                          <p className="text-eco-text/80 mb-4">
                            {service.description}
                          </p>
                          <Button
                            variant="outline"
                            onClick={() => handleMoreInfo(service.title)}
                            className="text-eco-primary hover:bg-eco-primary hover:text-white"
                          >
                            Más Información
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            // size="lg"
            onClick={() => toast({
              title: "¡Gracias por tu interés!",
              description: "Un especialista se pondrá en contacto contigo para discutir cómo podemos ayudarte.",
            })}
            className="bg-eco-primary hover:bg-eco-primary/90 text-white"
          >
            Descubre Cómo Podemos Ayudarte
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default ProductsAndServices;