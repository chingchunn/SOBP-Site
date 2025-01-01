import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Leaf, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Compromiso inquebrantable con el cuidado del medio ambiente",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Tecnología de vanguardia para soluciones más eficientes",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Impacto positivo en la sociedad a través de acciones sostenibles",
  },
];

const Values = () => {
  return (
    <section className="py-24 bg-eco-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
            Nuestros Valores
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            Construyendo un futuro sostenible
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Nuestros valores fundamentales guían cada decisión y acción que tomamos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eco-primary/10 mb-6 hover:bg-eco-primary/20">
                  <value.icon className="w-8 h-8 text-eco-text transition-transform ease-in-out hover:rotate-180" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-text">
                  {value.title}
                </h3>
                <p className="text-eco-text/80">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;