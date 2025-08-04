import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://elion.co.in/wp-content/uploads/2023/09/singleuseplastic.jpg',
    title: (
      <>Plastic Reimagined. <br/> For a Greener Tomorrow.</>),
    description: 'Our eco-friendly plastic is biodegradable, recyclable, and made for the future.',
  },
  // {
  //   image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  //   title: 'Energía Renovable',
  //   description: 'Tecnología al servicio del planeta',
  // },
  // {
  //   image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  //   title: 'Futuro Sostenible',
  //   description: 'Innovación para las próximas generaciones',
  // },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
              
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center text-white"
                  >
                    <div className="container mx-auto px-4 text-center">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 text-4xl leading-snug font-bold md:text-6xl md:leading-tight"
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8 text-xl leading-relaxed md:text-2xl md:leading-loose"
                      >
                        {slide.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroCarousel;