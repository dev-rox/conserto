import { Shield } from "lucide-react";
import FadeIn from "./FadeIn";

const AboutSection = () => {
  return (
    <section className="border-y border-border bg-card/50 py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
            {/* Avatar placeholder */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 glow-blue">
              <Shield size={48} className="text-primary" />
            </div>

            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Sobre <span className="text-gradient">Raul Oliveira</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Especialista em resolver problemas de hardware e software à distância com transparência e segurança. Com anos de experiência em suporte técnico, atendo desde usuários domésticos até empresas, sempre com foco em soluções rápidas, acessíveis e sem enrolação. Seu computador em boas mãos, sem sair de casa.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
