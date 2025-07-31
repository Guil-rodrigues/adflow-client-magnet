import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/55SEUNUMERO?text=Olá Guil! Quero descobrir como os anúncios podem mudar meu negócio. Vamos conversar?", "_blank");
  };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-whatsapp rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-56 h-56 md:w-80 md:h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Headline */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-white leading-tight px-4">
              Pronto para atrair clientes{" "}
              <span className="text-whatsapp-light">todos os dias?</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-4">
              Fale agora comigo no WhatsApp e descubra como os anúncios podem 
              <strong className="text-white"> mudar seu negócio</strong>
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 md:space-y-6">
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="group text-base md:text-lg px-8 md:px-12 py-4 md:py-6 h-auto w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
              Falar com Guil no WhatsApp
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-xs md:text-sm text-blue-200 px-4">
              ✓ Resposta rápida garantida • ✓ Análise gratuita do seu negócio • ✓ Sem compromisso
            </p>
          </div>

          {/* Trust Elements */}
          <div className="pt-6 md:pt-8 border-t border-white/20">
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-blue-100">
              <div className="space-y-2 p-4">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">4+ anos</div>
                <p className="text-xs md:text-sm">de experiência em tráfego</p>
              </div>
              <div className="space-y-2 p-4">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">R$500mil+</div>
                <p className="text-xs md:text-sm">gerenciados em anúncios</p>
              </div>
              <div className="space-y-2 p-4">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">100+</div>
                <p className="text-xs md:text-sm">negócios transformados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;