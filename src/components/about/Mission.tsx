import { motion } from "framer-motion";
import { Leaf, Sun, TreePine } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Comprometidos con prácticas empresariales sostenibles y respetuosas con el medio ambiente."
    },
    {
      icon: Sun,
      title: "Innovación",
      description: "Desarrollando soluciones innovadoras para un futuro más verde y eficiente."
    },
    {
      icon: TreePine,
      title: "Impacto Ambiental",
      description: "Reduciendo la huella de carbono a través de tecnologías limpias y renovables."
    }
  ];

  return (
    <section className="py-16 bg-eco-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-eco-text mb-4">
            Nuestra Misión
          </h2>
          <p className="text-eco-text/80 max-w-2xl mx-auto">
            Transformando el mundo a través de soluciones sostenibles y tecnología verde
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <mission.icon className="w-12 h-12 text-eco-primary mb-4" />
                <h3 className="text-xl font-semibold text-eco-text mb-2">
                  {mission.title}
                </h3>
                <p className="text-eco-text/80">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;