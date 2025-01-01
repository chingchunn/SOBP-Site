import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { ClipboardCheck, MessageSquare, Settings, Zap } from "lucide-react";
const steps = [
  {
    icon: ClipboardCheck,
    title: "Evaluación Inicial",
    description: "Analizamos tus necesidades y objetivos específicos.",
  },
  {
    icon: Settings,
    title: "Planificación",
    description: "Desarrollamos una estrategia personalizada.",
  },
  {
    icon: Zap,
    title: "Implementación",
    description: "Ejecutamos las soluciones de manera eficiente.",
  },
  {
    icon: MessageSquare,
    title: "Seguimiento",
    description: "Monitoreamos y optimizamos los resultados.",
  },
];
const ServicesProcess = () => {
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
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            Cómo Trabajamos
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Nuestro proceso está diseñado para garantizar resultados óptimos en cada proyecto
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-eco-primary/20 transform translate-y-8" />
              )}
              <Card className="p-6 text-center relative bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-eco-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-eco-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-text">
                  {step.title}
                </h3>
                <p className="text-eco-text/80">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesProcess;