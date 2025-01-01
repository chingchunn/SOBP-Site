import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    id: "solar",
    question: "How do solar panels work?",
    answer: "Solar panels convert sunlight into electricity through photovoltaic cells. These cells absorb solar energy and create an electric current, which is then converted into usable power for your home or business.",
    category: "Products"
  },
  {
    id: "cost",
    question: "What is the cost of installation?",
    answer: "Installation costs vary based on system size and complexity. We provide free consultations to assess your needs and provide detailed pricing. Most clients see a return on investment within 3-5 years through energy savings.",
    category: "Pricing"
  },
  {
    id: "timeline",
    question: "How long does implementation take?",
    answer: "Most installations are completed within 2-4 weeks from contract signing. This includes permit acquisition, installation, and final inspection. We'll provide you with a detailed timeline during consultation.",
    category: "Services"
  },
  {
    id: "maintenance",
    question: "What maintenance is required?",
    answer: "Solar panels require minimal maintenance. We recommend annual inspections and occasional cleaning to ensure optimal performance. Our maintenance packages provide peace of mind with regular check-ups.",
    category: "Services"
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-eco-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-eco-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco-accent rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-eco-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-eco-text/80 mb-8">
            Find answers to common questions about our sustainable solutions
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-eco-text/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-eco-primary/20 focus:outline-none focus:ring-2 focus:ring-eco-primary/20 transition-all"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            <AnimatePresence>
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center text-left">
                      <span className="text-lg font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-eco-text/80 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </AnimatePresence>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;