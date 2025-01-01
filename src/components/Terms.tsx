import { motion } from "framer-motion";
import { Book, Shield, Copyright, AlertTriangle, RefreshCw, Mail } from "lucide-react";

const Terms = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      icon: Book,
      title: "Introduction",
      content: "By accessing and using EcoSphere Solutions' website, you accept and agree to be bound by these Terms and Conditions. Please read them carefully before using our services."
    },
    {
      icon: Shield,
      title: "Usage Guidelines",
      content: "Users must not: (a) Use our services for illegal purposes, (b) Attempt to gain unauthorized access to our systems, (c) Upload malicious content, or (d) Interfere with other users' access to the service."
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content: "All content, trademarks, and materials on this website are the property of EcoSphere Solutions. Users may not use, reproduce, or distribute our content without explicit permission."
    },
    {
      icon: AlertTriangle,
      title: "Liability",
      content: "EcoSphere Solutions provides this website 'as is' and makes no warranties about the accuracy or reliability of the content. We are not liable for any damages arising from the use of our services."
    },
    {
      icon: RefreshCw,
      title: "Modifications",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services constitutes acceptance of modified terms."
    },
    {
      icon: Mail,
      title: "Contact Information",
      content: "For questions about these Terms & Conditions, please contact us at legal@ecosphere.com"
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-eco-primary text-center mb-12"
          {...fadeIn}
        >
          Terms & Conditions
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <section.icon className="w-6 h-6 text-eco-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-eco-text mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.p 
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Terms;