import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá Guil! Quero descobrir como os anúncios podem mudar meu negócio. Vamos conversar?", "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-whatsapp rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading text-white leading-tight">
              Pronto para atrair clientes{" "}
              <span className="text-whatsapp-light">todos os dias?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Fale agora comigo no WhatsApp e descubra como os anúncios podem 
              <strong className="text-white"> mudar seu negócio</strong>
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="group text-lg px-12 py-6 h-auto"
            >
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
              Falar com Guil no WhatsApp
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-blue-200">
              ✓ Resposta rápida garantida • ✓ Análise gratuita do seu negócio • ✓ Sem compromisso
            </p>
          </div>

          {/* Trust Elements */}
          <div className="pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-blue-100">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-white">4+ anos</div>
                <p className="text-sm">de experiência em tráfego</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-white">R$500mil+</div>
                <p className="text-sm">gerenciados em anúncios</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
                <p className="text-sm">negócios transformados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;