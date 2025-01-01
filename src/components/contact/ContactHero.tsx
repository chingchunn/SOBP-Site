import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 mt-12"
    >
      <h2 className="text-4xl font-bold text-eco-text mb-4">Contáctanos</h2>
      <p className="text-eco-text/80 text-lg max-w-2xl mx-auto">
        Estamos aquí para ayudarte a planificar tu próxima aventura
      </p>
    </motion.div>
  );
};

export default ContactHero;