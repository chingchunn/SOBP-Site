import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { ArrowRight, Sun, Droplets, Recycle } from "lucide-react";

const products = [
  {
    icon: Sun,
    title: "Passion",
    description: "We bring energy and commitment to everything we do. Passion fuels our drive to deliver outstanding results and go beyond expectations — not just for clients, but for the future of digital commerce.",
  },
  {
    icon: Droplets,
    title: "Professional",
    description: "We uphold high standards in communication, execution, and ethics. Being professional means delivering consistently, respecting deadlines, and building long-term relationships based on trust and reliability.",
  },
  {
    icon: Recycle,
    title: "Innovation",
    description: "We don’t just keep up with trends — we set them. Innovation is about finding smarter, faster, and more impactful ways to solve problems using the latest technologies and creative thinking.",
  },
];

const ProductShowcase = () => {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            At ET Tech, we turn digital challenges into smart commerce solutions.
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            We’re a forward-thinking company focused on driving digital transformation for brands worldwide. With a foundation built on passion, professionalism, innovation, and creativity — we help businesses thrive in a tech-driven future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="mb-6">
                  <product.icon className="w-12 h-12 text-eco-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-text group-hover:text-eco-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-eco-text/80 mb-6">
                  {product.description}
                </p>
                <div className="flex items-center text-eco-primary font-medium group-hover:translate-x-2 transition-transform">
                  Saber más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;