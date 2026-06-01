import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { getMailtoUrl, getWhatsAppUrl, profile } from "../data/profile";
import SaveContactButton from "./SaveContactButton";

const buttonBase =
  "flex h-12 items-center justify-center gap-2 rounded-2xl px-4 text-[14px] font-semibold transition duration-200 hover:-translate-y-0.5 active:scale-[0.98]";

export default function ContactButtons() {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-2 gap-2">
        <a
          className={`${buttonBase} bg-[#25D366] text-white shadow-[0_10px_22px_rgba(37,211,102,0.22)]`}
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          {profile.buttons.whatsapp}
        </a>
        <a
          className={`${buttonBase} bg-[#007aff] text-white shadow-[0_10px_22px_rgba(0,122,255,0.2)]`}
          href={profile.externalLinks.inquiry}
          target="_blank"
          rel="noreferrer"
        >
          <Send size={17} />
          <span className="whitespace-nowrap">{profile.buttons.contactUs}</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <a className={`${buttonBase} bg-[#f5f5f7] text-[#1d1d1f] ring-1 ring-black/[0.04]`} href={`tel:${profile.contact.phone}`}>
          <Phone size={17} />
          {profile.buttons.call}
        </a>
        <a
          className={`${buttonBase} bg-[#f5f5f7] text-[#1d1d1f] ring-1 ring-black/[0.04]`}
          href={getMailtoUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <Mail size={17} />
          {profile.buttons.email}
        </a>
        <SaveContactButton className={`${buttonBase} bg-[#f5f5f7] text-[#1d1d1f] ring-1 ring-black/[0.04]`} />
      </div>
    </div>
  );
}
