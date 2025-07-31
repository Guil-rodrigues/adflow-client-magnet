import WhatsAppButton from "@/components/WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-whatsapp rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
                Seu concorrente já está{" "}
                <span className="text-whatsapp-light">anunciando.</span>
                <br />
                E você ainda não?
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Descubra como atrair clientes todos os dias no WhatsApp usando anúncios online — 
                <strong className="text-white"> mesmo se você nunca investiu em tráfego antes.</strong>
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <WhatsAppButton size="xl" className="w-full sm:w-auto mx-auto lg:mx-0" />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-blue-100">
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
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-whatsapp rounded-2xl blur-2xl opacity-20 transform rotate-6 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Guil Rodrigues - Gestor de Tráfego" 
                className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;