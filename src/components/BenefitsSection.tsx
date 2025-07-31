import { MessageCircle, Target, TrendingUp, BarChart3 } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const benefits = [
  {
    icon: MessageCircle,
    title: "Clientes todos os dias no WhatsApp",
    description: "Estratégias comprovadas para gerar leads qualificados que chegam direto no seu WhatsApp, prontos para comprar."
  },
  {
    icon: Target,
    title: "Estratégia sob medida para seu negócio",
    description: "Cada campanha é personalizada para o seu tipo de negócio e público local, maximizando resultados."
  },
  {
    icon: TrendingUp,
    title: "Mais visibilidade local",
    description: "Apareça na frente dos seus clientes ideais na sua região quando eles estão procurando o que você oferece."
  },
  {
    icon: BarChart3,
    title: "Relatórios claros e acompanhamento",
    description: "Receba relatórios detalhados e tenha acompanhamento próximo para otimizar sempre os resultados."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground px-4">
            Por que escolher anúncios online?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Transforme visitantes em clientes com estratégias que realmente funcionam para negócios locais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 font-heading">
                  {benefit.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <div className="max-w-md mx-auto mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-heading">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale comigo agora e descubra como transformar seu negócio
            </p>
          </div>
          <WhatsAppButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;