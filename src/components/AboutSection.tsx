import { CheckCircle, Award, Users, DollarSign } from "lucide-react";
import guilImage from "@/assets/guil-rodrigues.jpg";

const achievements = [
  {
    icon: DollarSign,
    text: "R$ 500mil+ em mídia gerenciada"
  },
  {
    icon: Users,
    text: "+100 negócios atendidos"
  },
  {
    icon: Award,
    text: "Certificado Meta & Google"
  },
  {
    icon: CheckCircle,
    text: "Membro da mentoria Subido PRO"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-3xl blur-2xl opacity-10 transform -rotate-6 scale-105"></div>
                <img 
                  src={guilImage} 
                  alt="Guil Rodrigues - Especialista em Tráfego Pago" 
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    Conheça o especialista
                  </h3>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
                    Guil Rodrigues
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gestor de tráfego com mais de <strong className="text-foreground">4 anos de experiência</strong> e 
                  <strong className="text-foreground"> R$500 mil gerenciados</strong> em anúncios. 
                  Especialista em Google e Meta Ads. Já atendeu mais de 
                  <strong className="text-foreground"> 100 negócios</strong> em todo o Brasil.
                </p>

                <blockquote className="text-xl md:text-2xl font-medium text-foreground italic border-l-4 border-primary pl-6">
                  "Acredito que todo negócio local merece acesso a clientes todos os dias com anúncios inteligentes."
                </blockquote>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground font-heading">
                  Credenciais e resultados:
                </h4>
                
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg text-foreground font-medium">
                          {achievement.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;