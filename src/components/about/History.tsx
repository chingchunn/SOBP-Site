import { motion } from "framer-motion";

const History = () => {
  const milestones = [
    {
      year: "2015",
      title: "Fundación",
      description: "EcoSphere Solutions nace con la visión de transformar el sector energético."
    },
    {
      year: "2018",
      title: "Expansión Nacional",
      description: "Alcanzamos presencia en las principales ciudades del país."
    },
    {
      year: "2020",
      title: "Innovación Verde",
      description: "Lanzamiento de nuestra línea de productos sostenibles."
    },
    {
      year: "2023",
      title: "Reconocimiento Internacional",
      description: "Premiados por nuestro impacto en sostenibilidad."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-eco-primary/10 to-eco-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-eco-text mb-4">
            Nuestra Historia
          </h2>
          <p className="text-eco-text/80 max-w-2xl mx-auto">
            Un viaje hacia la sostenibilidad y la innovación
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6 mb-12 last:mb-0"
            >
              <div className="md:w-1/3 text-center md:text-right">
                <span className="text-3xl font-bold text-eco-primary">
                  {milestone.year}
                </span>
              </div>
              <div className="hidden md:block w-px h-24 bg-eco-primary/20 relative">
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-eco-primary"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-eco-text mb-2">
                  {milestone.title}
                </h3>
                <p className="text-eco-text/80">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;