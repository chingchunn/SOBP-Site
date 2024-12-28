import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { ArrowRight, Sun, Droplets, Recycle } from "lucide-react";

const products = [
  {
    icon: Sun,
    title: "Energía Solar",
    description: "Sistemas fotovoltaicos de última generación para tu hogar o negocio",
  },
  {
    icon: Droplets,
    title: "Recolección de Agua",
    description: "Sistemas inteligentes de captación y aprovechamiento de agua pluvial",
  },
  {
    icon: Recycle,
    title: "Reciclaje Inteligente",
    description: "Soluciones innovadoras para la gestión y reciclaje de residuos",
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
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
            Tecnología al servicio del planeta
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Descubre nuestras soluciones sostenibles diseñadas para maximizar la eficiencia y minimizar el impacto ambiental
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="mb-6">
                  <product.icon className="w-12 h-12 text-eco-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-text group-hover:text-eco-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-eco-text/80 mb-6">
                  {product.description}
                </p>
                <div className="flex items-center text-eco-primary font-medium group-hover:translate-x-2 transition-transform">
                  Saber más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;