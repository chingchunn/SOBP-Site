import { useState } from 'react';
import { Button } from '../ui/button';
import type{Project} from './types'
import GalleryGrid from './GalleryGrid';

interface GalleryFilterProps {
  projects: Project[];
}

const categories = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'solar', label: 'Energía Solar' },
  { id: 'water', label: 'Gestión del Agua' },
  { id: 'recycling', label: 'Reciclaje' },
];

const GalleryFilter = ({ projects }: GalleryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
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
      {/* Renderizar el grid filtrado */}
      <GalleryGrid projects={filteredProjects} onProjectClick={() => {}} />
    </>
  );
};

export default GalleryFilter;