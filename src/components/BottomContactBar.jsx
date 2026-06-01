import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { getMailtoUrl, getWhatsAppUrl, profile } from "../data/profile";

const items = [
  {
    label: profile.buttons.call,
    icon: Phone,
    href: `tel:${profile.contact.phone}`,
    className: "bg-white text-[#1d1d1f] ring-1 ring-[#e5e5ea]",
  },
  {
    label: profile.buttons.whatsapp,
    icon: MessageCircle,
    href: getWhatsAppUrl(),
    external: true,
    className: "bg-white text-[#1d1d1f] ring-1 ring-[#e5e5ea]",
  },
  {
    label: profile.buttons.email,
    icon: Mail,
    href: getMailtoUrl(),
    external: true,
    className: "bg-white text-[#3a3a3c] ring-1 ring-[#e5e5ea]",
  },
  {
    label: profile.buttons.quote,
    icon: Send,
    href: profile.externalLinks.inquiry,
    external: true,
    className: "bg-[#007aff] text-white shadow-[0_8px_18px_rgba(0,122,255,0.18)]",
  },
];

export default function BottomContactBar() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-20 grid w-full max-w-[430px] -translate-x-1/2 grid-cols-4 gap-2 border-t border-[#e5e5ea]/80 bg-white/80 px-3 pt-2 shadow-[0_-8px_22px_rgba(0,0,0,0.05)] backdrop-blur-xl pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            className={`flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-[11px] font-semibold transition hover:bg-[#f5f5f7] active:scale-[0.96] ${item.className}`}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            key={item.label}
          >
            <Icon size={21} strokeWidth={1.9} />
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
