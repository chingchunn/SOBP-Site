import { Card, CardContent } from "../ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { HelpCircle } from "lucide-react";

const faqs = [
  { question: "¿Cómo reservo una excursión?", answer: "Puedes reservar a través de nuestro formulario..." },
  { question: "¿Qué incluyen los programas?", answer: "Nuestros programas incluyen guía especializado..." },
  { question: "¿Tienen programas para principiantes?", answer: "¡Sí! Ofrecemos programas para todos los niveles..." },
];

const ContactFAQs = () => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <span className="text-eco-text font-medium">{faq.question}</span>
                <HelpCircle className="h-5 w-5 text-eco-primary" />
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>{faq.question}</DialogTitle>
              <DialogDescription>{faq.answer}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ContactFAQs;