import { CheckCircle, MessageSquare } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const SocialProofSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground px-4">
            Resultados reais que falam por si
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Veja como nossos clientes estão transformando seus negócios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp Chat Mockup */}
          <div className="bg-whatsapp/5 rounded-3xl p-4 md:p-8 mb-12">
            <div className="max-w-sm md:max-w-md mx-auto bg-white rounded-3xl p-4 md:p-6 shadow-xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-whatsapp rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-gray-900">Cliente - João Silva</h4>
                  <p className="text-xs text-gray-500">online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 md:space-y-4 py-4 md:py-6">
                <div className="flex justify-end">
                  <div className="bg-whatsapp text-white rounded-2xl rounded-br-md px-3 md:px-4 py-2 md:py-3 max-w-xs">
                    <p className="text-xs md:text-sm">Oi Guil! Como está indo com os anúncios?</p>
                    <span className="text-xs opacity-80">14:32</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-3 md:px-4 py-2 md:py-3 max-w-xs">
                    <p className="text-xs md:text-sm font-medium">
                      Comecei a anunciar com você e em 7 dias chegaram 8 clientes no WhatsApp! 🚀
                    </p>
                    <span className="text-xs text-gray-500">14:35</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-3 md:px-4 py-2 md:py-3 max-w-xs">
                    <p className="text-xs md:text-sm">
                      Já fechei 3 vendas! Muito obrigado pela estratégia! 💪
                    </p>
                    <span className="text-xs text-gray-500">14:36</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Statement */}
          <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground font-heading px-4">
              "Resultados reais com estratégias simples e eficazes."
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">8+</div>
                <p className="text-sm md:text-base text-muted-foreground">Clientes em 7 dias</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">3x</div>
                <p className="text-sm md:text-base text-muted-foreground">ROI médio dos clientes</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">24h</div>
                <p className="text-sm md:text-base text-muted-foreground">Para primeiros resultados</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center bg-primary/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-heading">
              Quer resultados como esse?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Converse comigo agora e descubra como posso ajudar você a ter resultados similares
            </p>
            <WhatsAppButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;