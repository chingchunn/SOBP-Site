import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { Send, MapPin, Phone, Mail, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// const faqs = [
//   {
//     question: "¿Cómo reservo una excursión?",
//     answer: "Puedes reservar a través de nuestro formulario de contacto o llamándonos directamente. Te responderemos en menos de 24 horas con toda la información necesaria."
//   },
//   {
//     question: "¿Qué incluyen los programas?",
//     answer: "Nuestros programas incluyen guía especializado, equipo necesario, seguro de actividades y, en algunos casos, transporte y alimentación. Los detalles específicos varían según el programa seleccionado."
//   },
//   {
//     question: "¿Tienen programas para principiantes?",
//     answer: "¡Sí! Ofrecemos programas para todos los niveles de experiencia, desde principiantes hasta expertos. Nuestros guías adaptarán la actividad a tu nivel."
//   }
// ];

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <section className="py-20 bg-eco-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-eco-text mb-4">
            Ready to Make a Change?
          </h2>
          <p className="text-eco-text/80 text-lg max-w-2xl mx-auto">
            Contact Us Now!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        placeholder="Nombre"
                        className="border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                          throw new Error("Function not implemented.");
                        } }                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email"
                        className="border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                          throw new Error("Function not implemented.");
                        } }                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Asunto"
                      className="border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                        throw new Error("Function not implemented.");
                      } }                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Mensaje"
                      className="min-h-[150px] border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
                        throw new Error("Function not implemented.");
                      } }                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-eco-primary hover:bg-eco-primary/90"
                  >
                    Enviar mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: "123 Calle Aventura, Ciudad" },
                { icon: Phone, text: "+1 234 567 890" },
                { icon: Mail, text: "info@solaristreks.com" },
                { icon: HelpCircle, text: "Preguntas Frecuentes" },
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <item.icon className="h-5 w-5 text-eco-primary group-hover:scale-110 transition-transform" />
                    <span className="text-eco-text/80">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div className="space-y-4">
              {/* {faqs.map((faq, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <span className="text-eco-text font-medium">{faq.question}</span>
                        <HelpCircle className="h-5 w-5 text-eco-primary" />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-white/90">
                    <DialogHeader>
                      <DialogTitle>{faq.question}</DialogTitle>
                      <DialogDescription>
                        {faq.answer}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))} */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;