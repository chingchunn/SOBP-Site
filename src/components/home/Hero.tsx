import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-eco-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-light/80" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full"
          >
            Soluciones Ecológicas Innovadoras
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-eco-text"
          >
            Innovación sustentable para un futuro mejor
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-eco-text/80 mb-8"
          >
            Transformando hogares y negocios con soluciones ecológicas de vanguardia
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="bg-eco-primary hover:bg-eco-primary/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explorar Productos
            </Button>
            <Button
              variant="outline"
              className="border-eco-primary text-eco-primary hover:bg-eco-primary/10 px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Consultoría
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;