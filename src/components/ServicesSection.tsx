import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  "Formatação e Backup Profissional",
  "Limpeza Completa de Vírus e Malwares",
  "Consultoria de Hardware (O que comprar para melhorar seu PC)",
  'Resolução de "Tela Azul" e erros do Windows',
  "Instalação e configuração de programas",
  "Otimização de performance para jogos e trabalho",
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Serviços <span className="text-gradient">Mais Procurados</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => (
              <FadeIn key={service} delay={i * 80}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 card-hover">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
