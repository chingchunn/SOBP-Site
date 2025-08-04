import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { toast } = useToast();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );
  const headerHeight = useTransform(scrollY, [0, 50], ["5rem", "4rem"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
    toast({
      title: language === "es" ? "Language changed to English" : "Idioma cambiado a Español",
      duration: 2000,
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      style={{ background: headerBackground, height: headerHeight }}
      className="flex justify-center items-center flex-wrap fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/" className="text-2xl font-bold text-eco-primary">
              SOBP
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="text-eco-text hover:text-eco-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              className="p-2 rounded-md text-eco-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Button
              variant="default"
              className="bg-eco-primary hover:bg-eco-primary/90 text-white"
              onClick={() =>
                toast({
                  title: "Solicitud de consultoría",
                  description: "Gracias por tu interés. Te contactaremos pronto.",
                })
              }
            >
              Solicitar Consultoría
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden"
        >
          <nav className="flex flex-col items-start space-y-4 p-4">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="text-eco-text hover:text-eco-primary transition-colors duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;