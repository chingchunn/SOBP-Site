import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { ArrowRight, Sun, Droplets, Recycle } from "lucide-react";

const products = [
  {
    icon: Sun,
    title: "Extracting from Starch, Corn, or Algae",
    description: "We start by sourcing natural, renewable materials like corn, starch, or algae. These plants are rich in sugars and carbohydrates, which are the building blocks for eco-friendly plastics.",
  },
  {
    icon: Droplets,
    title: "Polymerization Process",
    description: "Through a controlled chemical process, these natural sugars are converted into biopolymers — long chains of molecules that give the material strength and flexibility, just like traditional plastic.",
  },
  {
    icon: Recycle,
    title: "Biodegradation Process After Use",
    description: "Once discarded, the bioplastic naturally breaks down in composting or soil environments. Microorganisms help decompose it into water, carbon dioxide, and organic matter — leaving no toxic residue behind.",
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            The Science Behind the Sustainability
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Our eco-plastic starts with renewable resources like corn, starch, or algae. Through a clean polymerization process, we transform these into durable bioplastics — 
            without relying on fossil fuels. After use, the material naturally breaks down, returning to the earth without leaving harmful waste.
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