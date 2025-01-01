import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
const ServicesHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-eco-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-eco-secondary/30 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-eco-text mb-6">
            Soluciones Sostenibles para un Futuro Mejor
          </h1>
          <p className="text-lg md:text-xl text-eco-text/80 mb-8">
            Descubre cómo nuestros servicios pueden ayudarte a crear un impacto positivo en el medio ambiente mientras optimizas tus recursos.
          </p>
          <Button
            size="lg"
            className="bg-eco-primary hover:bg-eco-primary/90 text-white"
          >
            Explorar Servicios <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesHero;