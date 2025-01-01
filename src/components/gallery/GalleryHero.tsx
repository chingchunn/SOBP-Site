import { motion } from 'framer-motion';

const GalleryHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
        Nuestros Proyectos
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
        Galería de Soluciones Sostenibles
      </h2>
      <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
        Explora nuestra colección de proyectos exitosos en energía solar, gestión del agua y reciclaje
      </p>
    </motion.div>
  );
};

export default GalleryHero;