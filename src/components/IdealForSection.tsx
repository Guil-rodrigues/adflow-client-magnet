import { Store, Wrench, Heart, Briefcase } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const businessTypes = [
  {
    icon: Store,
    title: "Lojas físicas",
    description: "Moda, pet shops, decoração, eletrônicos e qualquer comércio que quer atrair mais clientes locais."
  },
  {
    icon: Wrench,
    title: "Prestadores de serviço",
    description: "Encanadores, eletricistas, técnicos em geral que precisam de clientes na sua região de atuação."
  },
  {
    icon: Heart,
    title: "Clínicas e salões",
    description: "Profissionais da saúde, estética e beleza que querem agenda sempre cheia com novos pacientes."
  },
  {
    icon: Briefcase,
    title: "Profissionais liberais",
    description: "Advogados, arquitetos, consultores e outros profissionais que buscam clientes qualificados."
  }
];

const IdealForSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground px-4">
            Ideal para quem?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estratégias especializadas para diferentes tipos de negócios locais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {businessTypes.map((business, index) => {
            const IconComponent = business.icon;
            return (
              <div 
                key={index}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto sm:mx-0">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                
                <div className="space-y-2 md:space-y-3 text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground font-heading">
                    {business.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {business.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center bg-white/50 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-heading">
            Seu negócio está na lista?
          </h3>
          <p className="text-muted-foreground mb-6">
            Converse comigo e vamos criar uma estratégia personalizada para o seu tipo de negócio
          </p>
          <WhatsAppButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;