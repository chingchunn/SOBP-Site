import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Input from "./ui/input";
import { useToast } from "../hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  const { toast } = useToast();
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our newsletter soon.",
    });
  };
  return (
    <footer className="bg-eco-text text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="text-2xl font-bold mb-4 block">
              SOBP
            </a>
            <p className="text-gray-300 mb-6">
              Leading the way in sustainable solutions for a greener tomorrow.
            </p>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@ecosphere.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                info@ecosphere.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                (123) 456-7890
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MapPin size={18} />
                123 Eco Street, Managua, Nicaragua.
              </a>
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: "Home", path: "/" },
                { text: "About Us", path: "/" },
                { text: "Products & Services", path: "/" },
                { text: "Contact Us", path: "/" },
                { text: "Privacy Policy", path: "/" },
                { text: "Terms & Conditions", path: "/" },
              ].map((link) => (
                <li key={link.text}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error("Function not implemented.");
                } }              />
              <Button
                type="submit"
                className="w-full bg-eco-primary hover:bg-eco-primary/90"
              >
                Subscribe
              </Button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Twitter, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} EcoSphere Solutions. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;