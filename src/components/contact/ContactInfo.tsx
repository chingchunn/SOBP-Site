import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, Mail, HelpCircle } from "lucide-react";

const ContactInfo = () => {
  const info = [
    { icon: MapPin, text: "123 Calle Aventura, Ciudad" },
    { icon: Phone, text: "+1 234 567 890" },
    { icon: Mail, text: "info@solaristreks.com" },
    { icon: HelpCircle, text: "Preguntas Frecuentes" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {info.map((item, index) => (
        <Card key={index} className="group hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center space-x-4">
            <item.icon className="h-5 w-5 text-eco-primary group-hover:scale-110 transition-transform" />
            <span className="text-eco-text/80">{item.text}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;