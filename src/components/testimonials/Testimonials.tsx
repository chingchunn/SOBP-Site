import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote: "Thanks to EcoSphere, my business is more sustainable and profitable.",
    name: "Juana Pérez",
    role: "Owner",
    company: "Restaurante Verde",
    image: "https://images.unsplash.com/photo-1497030947858-3f40f1508e84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    quote: "The solar installation process was seamless and the results are amazing.",
    name: "Maria Rodriguez",
    role: "CEO",
    company: "Green Solutions Inc",
    image: "https://images.unsplash.com/photo-1533973427779-4b8c2eb4c3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    quote: "Professional team and outstanding results. Highly recommended!",
    name: "Carlos Santos",
    role: "Director",
    company: "Eco Ventures",
    image: "https://plus.unsplash.com/premium_photo-1664461663149-38803236abe8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG8lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
  }
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-16 bg-gradient-to-br from-eco-secondary/20 to-eco-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-eco-primary mb-4">What Our Clients Say</h2>
          <p className="text-eco-text/80">Discover how we've helped businesses achieve their sustainability goals</p>
        </motion.div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="testimonials-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-eco-primary">{testimonial.name}</h3>
                    <p className="text-sm text-eco-text/60">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-eco-text/80 italic flex-grow">{testimonial.quote}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;