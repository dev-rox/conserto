import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511917956316?text=Olá%20Raul!%20Preciso%20de%20suporte%20técnico.";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 glow-green md:bottom-8 md:right-8"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppFab;
