import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const ServicesCTA = () => {
  return (
    <section className="py-24 bg-eco-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Comenzar tu Viaje Sostenible?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Únete a las empresas que ya están haciendo la diferencia. Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-eco-primary hover:bg-white/90"
            >
              Contactar Ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Ver Más Servicios
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesCTA;