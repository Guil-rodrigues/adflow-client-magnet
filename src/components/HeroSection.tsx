import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import guilImage from "@/assets/guil-rodrigues.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Quero atrair clientes no WhatsApp com anúncios online.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-whatsapp rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
                Seu concorrente já está{" "}
                <span className="text-whatsapp-light">anunciando.</span>
                <br />
                E você ainda não?
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Descubra como atrair clientes todos os dias no WhatsApp usando anúncios online — 
                <strong className="text-white"> mesmo se você nunca investiu em tráfego antes.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="whatsapp" 
                size="xl" 
                onClick={handleWhatsAppClick}
                className="group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Quero Atrair Clientes no WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-whatsapp rounded-full"></div>
                <span>R$ 500mil+ gerenciados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-whatsapp rounded-full"></div>
                <span>+100 negócios atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-whatsapp rounded-full"></div>
                <span>Certificado Meta & Google</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-whatsapp rounded-2xl blur-2xl opacity-20 transform rotate-6 scale-105"></div>
              <img 
                src={guilImage} 
                alt="Guil Rodrigues - Gestor de Tráfego" 
                className="relative w-80 md:w-96 lg:w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;