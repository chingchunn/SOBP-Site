import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    id: 1,
    category: 'solar',
    title: 'Bioplastic Food Packaging',
    description: 'Sistema fotovoltaico de 5kW para vivienda unifamiliar',
    image: 'https://takeawaypackaging.co.uk/wp-content/uploads/2022/09/Cold-Food-Containers.webp'
  },
  {
    id: 2,
    category: 'water',
    title: 'Bioplastic Cosmetics Containers',
    description: 'Recolección y filtración de agua de lluvia para uso doméstico',
    image: 'https://cosmeticsbusiness.com/article-image-alias/introducing-idealpak-s-bioplastic-product-sugarcane-packaging-2.jpg'
  },
  {
    id: 3,
    category: 'recycling',
    title: 'Bioplastic E-commerce Packaging',
    description: 'Implementación de sistema de clasificación inteligente',
    image: 'https://www.futuremarketinsights.com/public/assets/images/category/cat-195.jpg'
  },
  {
    id: 4,
    category: 'solar',
    title: 'Bioplastic Food Packaging',
    description: 'Instalación de 50kW para centro comercial',
    image: 'https://www.thechemicalengineer.com/media/14825/plastic-veg.jpg?width=960'
  },
  {
    id: 5,
    category: 'water',
    title: 'Newly Developed Transparent Bio Plastic as an Alternative to Aluminium for Aerosols',
    description: 'Sistema de purificación y reutilización',
    image: 'https://www.cosmeticsdesign-europe.com/resizer/v2/MSPMFMOEV5LRBM67L5GOUBCIVM.jpg?auth=81c589bc6eb7892baad0ddd4b2ed153db2c0854b7f2321f4084b12f538cb4029&smart=true'
  },
  {
    id: 6,
    category: 'recycling',
    title: 'Bioplastic is Not Plastic-Free',
    description: 'Procesamiento de residuos orgánicos a gran escala',
    image: 'https://i.shgcdn.com/ef66c811-ddaf-4da8-a1de-75e6a77a4a47/-/format/auto/-/quality/normal/'
  },
];
const categories = [
  { id: 'all', label: 'All' },
  { id: 'solar', label: 'Food Packaging' },
  { id: 'water', label: 'Comestics Containers' },
  { id: 'recycling', label: 'Disposable Cutlery and Cups' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  return (
    <section id="stage" className="py-24 bg-eco-light">
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
            Smart Tech Capabilities
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