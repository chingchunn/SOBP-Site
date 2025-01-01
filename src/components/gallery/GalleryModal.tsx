import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from './types';

interface GalleryModalProps {
  selectedImage: number | null;
  setSelectedImage: (id: number | null) => void;
  projects: Project[];
}

const GalleryModal = ({ selectedImage, setSelectedImage, projects }: GalleryModalProps) => (
  <AnimatePresence>
    {selectedImage !== null && (
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
          {projects.find((p) => p.id === selectedImage) && (
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={projects.find((p) => p.id === selectedImage)?.image}
                alt={projects.find((p) => p.id === selectedImage)?.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {projects.find((p) => p.id === selectedImage)?.title}
                </h3>
                <p className="text-eco-text/80">
                  {projects.find((p) => p.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default GalleryModal;