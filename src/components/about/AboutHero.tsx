import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-br from-eco-primary/20 to-eco-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-eco-text mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-eco-text/80">
              Liderando el camino hacia un futuro más sostenible a través de soluciones
              innovadoras y compromiso con el medio ambiente.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;