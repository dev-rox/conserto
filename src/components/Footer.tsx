import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511917956316?text=Olá%20Raul!%20Preciso%20de%20suporte%20técnico.";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <span className="text-lg font-bold">
              <span className="text-gradient">Raul Oliveira</span>{" "}
              <span className="text-muted-foreground font-medium">Tech</span>
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Suporte técnico remoto para todo o Brasil
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Raul Oliveira Tech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
