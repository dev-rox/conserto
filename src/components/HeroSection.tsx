import { MessageCircle, CheckCircle } from "lucide-react";
import heroSetup from "@/assets/hero-setup.jpg";
import FadeIn from "./FadeIn";

const WHATSAPP_LINK = "https://wa.me/5511917956316?text=Olá%20Raul!%20Preciso%20de%20suporte%20técnico.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-20 md:pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroSetup} alt="Setup de tecnologia" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-16 text-center">
        <FadeIn>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <CheckCircle size={14} />
            100% Remoto · Atendimento em Todo o Brasil
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Suporte Técnico Remoto Especializado:{" "}
            <span className="text-gradient">Seu PC Novo de Novo</span>, Sem Sair de Casa.
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Atendimento rápido e seguro para Gamers, Streamers, Empresas e Uso Pessoal. Resolvo seu problema via acesso remoto enquanto você acompanha tudo.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-all hover:brightness-110 glow-green"
            >
              <MessageCircle size={20} />
              Falar com Raul Agora
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="mt-10 text-sm text-muted-foreground">
            ✅ Mais de <span className="font-bold text-foreground">3500+</span> atendimentos realizados com sucesso
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
