import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Share2, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      icon: Shield,
      title: "Our Commitment",
      content: "At EcoSphere Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding data collection, usage, and protection."
    },
    {
      icon: Eye,
      title: "Data Collection",
      content: "We collect information such as names, email addresses, and usage data to provide and improve our services. This includes cookies and similar tracking technologies to enhance your browsing experience."
    },
    {
      icon: UserCheck,
      title: "Data Usage",
      content: "Your information helps us personalize your experience, process transactions, send newsletters, and improve our services. We analyze usage patterns to enhance site functionality and user experience."
    },
    {
      icon: Share2,
      title: "Data Sharing",
      content: "We do not sell your personal information. We may share data with trusted partners who assist in operating our website, conducting business, or serving our users, subject to confidentiality agreements."
    },
    {
      icon: Lock,
      title: "Security Measures",
      content: "We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security assessments to prevent unauthorized access."
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: "For privacy-related concerns or to exercise your data rights, please contact us at privacy@ecosphere.com"
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-eco-primary text-center mb-12"
          {...fadeIn}
        >
          Privacy Policy
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

export default PrivacyPolicy;