export interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
  }
  
  export const projects = [
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