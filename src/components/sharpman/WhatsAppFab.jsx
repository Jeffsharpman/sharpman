import { MessageCircle } from "lucide-react";
const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.link/3fl6df"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:scale-105 active:scale-95 transition-all duration-200 sm:bottom-8 sm:right-8"
      style={{ boxShadow: "0 0 28px var(--lime-glow), 0 8px 32px rgba(0,0,0,0.3)" }}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFab;
