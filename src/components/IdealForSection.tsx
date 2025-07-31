import { Store, Wrench, Heart, Briefcase } from "lucide-react";

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
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
            Ideal para quem?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estratégias especializadas para diferentes tipos de negócios locais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {businessTypes.map((business, index) => {
            const IconComponent = business.icon;
            return (
              <div 
                key={index}
                className="flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground font-heading">
                    {business.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {business.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;