import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { Sun, Moon, Globe } from "lucide-react";
import { useToast } from "../hooks/use-toast";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
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
    setLanguage(prev => prev === "es" ? "en" : "es");
    toast({
      title: language === "es" ? "Language changed to English" : "Idioma cambiado a Español",
      duration: 2000,
    });
  };
  return (
    <motion.header
      style={{ background: headerBackground, height: headerHeight }}
      className=" flex justify-center items-center flex-wrap fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
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
              EcoSphere Solutions
            </a>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {["Home", "About Us", "Products & Services", "Portfolio", "Contact Us"].map(
              (item, index) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="text-eco-text hover:text-eco-primary transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLanguageToggle}
              className="rounded-full"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              className="bg-eco-primary hover:bg-eco-primary/90 text-white"
              onClick={() => toast({
                title: "Solicitud de consultoría",
                description: "Gracias por tu interés. Te contactaremos pronto.",
              })}
            >
              Solicitar Consultoría
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};
export default Header;