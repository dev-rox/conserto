import { User, Gamepad2, Video, Camera, GraduationCap, Building2 } from "lucide-react";
import FadeIn from "./FadeIn";

const audiences = [
  {
    icon: User,
    title: "Pessoas Físicas",
    items: ["Remoção de vírus", "PC lento", "Formatação", "Instalação de impressoras e drivers"],
  },
  {
    icon: Gamepad2,
    title: "Gamers",
    items: ["Otimização de FPS", "Redução de input lag", "Limpeza de sistema", "Overclock seguro"],
  },
  {
    icon: Video,
    title: "Streamers",
    items: ["Configuração de OBS Studio", "Alertas e overlays", "Resolução de bitrate", "Correção de áudio/vídeo"],
  },
  {
    icon: Camera,
    title: "Influencers",
    items: ["Backup em nuvem", "Configuração de Premiere/CapCut", "Fluxo de trabalho", "Organização de arquivos"],
  },
  {
    icon: GraduationCap,
    title: "Estudantes",
    items: ["Pacote Office", "Formatação ABNT no Word", "Recuperação de arquivos", "Otimização Zoom/Teams"],
  },
  {
    icon: Building2,
    title: "Pequenas Empresas",
    items: ["Configuração de rede", "E-mail corporativo", "Segurança de dados", "Suporte mensal"],
  },
];

const AudienceSection = () => {
  return (
    <section id="quem-atendo" className="py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Para Quem é o <span className="text-gradient">Meu Atendimento</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Soluções personalizadas para cada perfil de cliente
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="card-hover group rounded-xl border border-border bg-card p-6 h-full">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((text) => (
                    <li key={text} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
