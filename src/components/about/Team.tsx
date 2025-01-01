import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "../../components/ui/button";

const Team = () => {
  const team = [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      linkedin: "#",
      email: "ana@ecosphere.com"
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Tecnología",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      linkedin: "#",
      email: "carlos@ecosphere.com"
    },
    {
      name: "María López",
      role: "Directora de Sostenibilidad",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      linkedin: "#",
      email: "maria@ecosphere.com"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-eco-text mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-eco-text/80 max-w-2xl mx-auto">
            Conoce a los expertos detrás de EcoSphere Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-eco-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-eco-text mb-1">
                  {member.name}
                </h3>
                <p className="text-eco-text/80 mb-4">{member.role}</p>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;