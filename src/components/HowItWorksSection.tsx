import { MessageCircle, Search, Monitor, Rocket } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Contato",
    description: "Você me chama no WhatsApp e explica o problema.",
  },
  {
    icon: Search,
    number: "2",
    title: "Diagnóstico",
    description: "Faço um diagnóstico gratuito e passo o orçamento.",
  },
  {
    icon: Monitor,
    number: "3",
    title: "Acesso Remoto",
    description: "Conectamos via AnyDesk/TeamViewer de forma segura.",
  },
  {
    icon: Rocket,
    number: "4",
    title: "Pronto!",
    description: "Seu computador fica otimizado e seguro.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="border-y border-border bg-card/50 py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Como <span className="text-gradient">Funciona</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Simples, rápido e sem complicação
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon size={28} />
                </div>
                <span className="text-xs font-bold text-primary">{step.number}</span>
                <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>

                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-8 translate-x-full bg-border lg:block" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
