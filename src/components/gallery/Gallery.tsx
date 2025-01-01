import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    id: 1,
    category: 'solar',
    title: 'Instalación Solar Residencial',
    description: 'Sistema fotovoltaico de 5kW para vivienda unifamiliar',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276'
  },
  {
    id: 2,
    category: 'water',
    title: 'Sistema de Captación Pluvial',
    description: 'Recolección y filtración de agua de lluvia para uso doméstico',
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249'
  },
  {
    id: 3,
    category: 'recycling',
    title: 'Centro de Reciclaje Automatizado',
    description: 'Implementación de sistema de clasificación inteligente',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b'
  },
  {
    id: 4,
    category: 'solar',
    title: 'Parque Solar Comercial',
    description: 'Instalación de 50kW para centro comercial',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBhcnF1ZSUyMFNvbGFyJTIwQ29tZXJjaWFsfGVufDB8fDB8fHww'
  },
  {
    id: 5,
    category: 'water',
    title: 'Tratamiento de Aguas Grises',
    description: 'Sistema de purificación y reutilización',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716'
  },
  {
    id: 6,
    category: 'recycling',
    title: 'Planta de Compostaje',
    description: 'Procesamiento de residuos orgánicos a gran escala',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
];
const categories = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'solar', label: 'Energía Solar' },
  { id: 'water', label: 'Gestión del Agua' },
  { id: 'recycling', label: 'Reciclaje' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  return (
    <section className="py-24 bg-eco-light">
      <div className="container mx-auto px-4">
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-2 rounded-full transition-all duration-300
                ${selectedCategory === category.id 
                  ? 'bg-eco-primary text-white' 
                  : 'text-eco-primary hover:bg-eco-primary/10'}
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(project.id)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ZoomIn className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-eco-primary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                {projects.find(p => p.id === selectedImage) && (
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img
                      src={projects.find(p => p.id === selectedImage)?.image}
                      alt={projects.find(p => p.id === selectedImage)?.title}
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">
                        {projects.find(p => p.id === selectedImage)?.title}
                      </h3>
                      <p className="text-eco-text/80">
                        {projects.find(p => p.id === selectedImage)?.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Gallery;