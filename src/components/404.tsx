import { motion } from "framer-motion";
import { Button } from "./ui/button";

import { Sun } from "lucide-react";
const NotFound = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-eco-secondary/30 to-eco-primary/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 text-eco-primary/20"
        >
          <Sun size={200} />
        </motion.div>
        
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-8 h-8 border-2 border-eco-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-eco-primary mb-4"
        >
          404
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-eco-text mb-8"
        >
          Oops! The page you're looking for is out of solar reach. 🌞
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-eco-primary hover:bg-eco-primary/90 text-white min-w-[200px]"
            >
              <a href="/home">Go Back Home</a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white min-w-[200px]"
            >
              <a href="/home">Explore Products</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default NotFound;