import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Nombre" className="border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                          throw new Error("Function not implemented.");
                      } } />
            <Input type="email" placeholder="Email" className="border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                          throw new Error("Function not implemented.");
                      } } />
          </div>
          <Input placeholder="Asunto" className="border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                      throw new Error("Function not implemented.");
                  } } />
          <Textarea
                      placeholder="Mensaje"
                      className="min-h-[150px] border-eco-primary/20 focus:border-eco-primary" label={""} value={""} onChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
                          throw new Error("Function not implemented.");
                      } }          />
          <Button type="submit" className="w-full text-white bg-eco-primary hover:bg-eco-primary/90">
            Enviar mensaje
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;