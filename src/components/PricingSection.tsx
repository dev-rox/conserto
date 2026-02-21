import { MessageCircle, Zap, Building2 } from "lucide-react";
import FadeIn from "./FadeIn";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá%20Raul!%20Preciso%20de%20suporte%20técnico.";

const plans = [
  {
    icon: Zap,
    name: "Avulso",
    description: "Para resolver problemas pontuais",
    price: "Sob Consulta",
    features: ["Diagnóstico gratuito", "Atendimento único", "Garantia do serviço", "Suporte pós-atendimento"],
    highlight: false,
  },
  {
    icon: Zap,
    name: "Pack Gamer/Streamer",
    description: "Otimização completa focada em performance",
    price: "Sob Consulta",
    features: ["Otimização de FPS e sistema", "Configuração de OBS", "Overclock seguro", "Suporte prioritário"],
    highlight: true,
  },
  {
    icon: Building2,
    name: "Mensal Empresa",
    description: "Suporte contínuo para negócios",
    price: "Plano Recorrente",
    features: ["Suporte ilimitado", "Atendimento prioritário", "Gestão de rede e segurança", "Relatórios mensais"],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              <span className="text-gradient">Planos</span> & Preços
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Escolha o plano ideal para sua necessidade
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-xl border p-6 card-hover ${
                  plan.highlight
                    ? "border-primary/50 bg-primary/5 glow-blue"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Popular
                  </span>
                )}
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary w-fit">
                  <plan.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                <p className="mt-4 text-2xl font-extrabold text-gradient">{plan.price}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:brightness-110"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <MessageCircle size={16} />
                  Contratar
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
