import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "default" | "outline";
  size?: "default" | "lg" | "xl";
  className?: string;
  text?: string;
}

const WhatsAppButton = ({ 
  variant = "default", 
  size = "lg", 
  className = "",
  text = "Quero Atrair Clientes no WhatsApp"
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/55SEUNUMERO?text=Olá! Quero atrair clientes no WhatsApp com anúncios online.", "_blank");
  };

  return (
    <Button 
      variant="whatsapp" 
      size={size}
      onClick={handleWhatsAppClick}
      className={`group font-semibold ${className}`}
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      <span className="text-sm md:text-base">{text}</span>
    </Button>
  );
};

export default WhatsAppButton;