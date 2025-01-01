import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
const plans = [
  {
    name: "Básico",
    price: "299",
    description: "Ideal para pequeños negocios",
    features: [
      "Evaluación inicial",
      "Plan básico de sostenibilidad",
      "Soporte por email",
      "Actualizaciones trimestrales",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "599",
    description: "Perfecto para empresas en crecimiento",
    features: [
      "Todo lo del plan Básico",
      "Consultoría personalizada",
      "Soporte prioritario",
      "Auditorías mensuales",
      "Certificaciones básicas",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "999",
    description: "Para grandes empresas",
    features: [
      "Todo lo del plan Profesional",
      "Soluciones a medida",
      "Soporte 24/7",
      "Auditorías semanales",
      "Todas las certificaciones",
      "Capacitación del personal",
    ],
    highlighted: false,
  },
];
const ServicesPricing = () => {
  return (
    <section className="py-24 bg-eco-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-eco-primary bg-eco-primary/10 rounded-full">
            Planes y Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">
            Encuentra el Plan Perfecto para Ti
          </h2>
          <p className="text-lg text-eco-text/80 max-w-2xl mx-auto">
            Ofrecemos diferentes planes adaptados a las necesidades de cada empresa
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 h-full ${plan.highlighted ? 'border-eco-primary shadow-lg scale-105' : ''}`}>
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-eco-text mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-eco-primary">${plan.price}</span>
                    <span className="text-eco-text/80">/mes</span>
                  </div>
                  <p className="text-eco-text/80 mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-eco-text/80">
                        <Check className="h-5 w-5 text-eco-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-eco-primary hover:bg-eco-primary/90 text-white'
                        : 'bg-eco-primary/10 hover:bg-eco-primary hover:text-white text-eco-primary'
                    }`}
                  >
                    Comenzar Ahora
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesPricing;