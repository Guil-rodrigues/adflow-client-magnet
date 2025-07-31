import { MessageCircle, Target, TrendingUp, BarChart3 } from "lucide-react";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
            Por que escolher anúncios online?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme visitantes em clientes com estratégias que realmente funcionam para negócios locais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;