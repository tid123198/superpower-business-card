import { Mail, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { getMailtoUrl, getWhatsAppUrl, profile } from "../data/profile";

function ChatBubble({ children, role }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-5 ${
          isUser ? "bg-[#007aff] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ConsultationWidget() {
  const { consultation } = profile;
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", text: consultation.greeting },
  ]);

  const sendToWhatsApp = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    window.open(getWhatsAppUrl(`Hello Jessica, I have a question: ${trimmed}`), "_blank", "noreferrer");
  };

  const handleQuestionClick = (item) => {
    setChatMessages((current) => [
      ...current,
      { role: "user", text: item.question },
      { role: "assistant", text: item.answer },
    ]);
  };

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    setChatMessages((current) => [...current, { role: "user", text: trimmed }]);
    setMessage("");
    sendToWhatsApp(trimmed);
  };

  return (
    <>
      <button
        className="fixed bottom-[96px] right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#007aff] shadow-[0_10px_24px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06] backdrop-blur-xl transition hover:-translate-y-0.5 active:scale-[0.96] md:bottom-6 md:right-6"
        type="button"
        aria-label={consultation.title}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} strokeWidth={1.9} />
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-0 bottom-[86px] z-40 flex items-end justify-center bg-black/10 px-3 pb-3 backdrop-blur-[2px] md:inset-0 md:items-end md:justify-end md:p-6">
          <section className="flex max-h-[70vh] w-full max-w-[430px] flex-col overflow-hidden rounded-[24px] bg-white/92 shadow-[0_16px_44px_rgba(0,0,0,0.13)] ring-1 ring-black/[0.06] backdrop-blur-xl md:max-h-[640px] md:max-w-[380px]">
            <header className="flex items-center justify-between border-b border-[#e5e5ea]/80 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <img
                  className="h-11 w-11 rounded-2xl bg-[#f5f5f7] object-cover p-0.5 ring-1 ring-[#e5e5ea]"
                  src={profile.person.avatar}
                  alt={profile.person.name}
                />
                <div>
                  <h2 className="text-[16px] font-bold text-[#1d1d1f]">{consultation.title}</h2>
                  <div className="mt-0.5 flex items-center gap-1.5 text-xs text-[#6e6e73]">
                    <span className="h-2 w-2 rounded-full bg-[#34c759]" />
                    {consultation.status}
                  </div>
                </div>
              </div>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition hover:bg-[#e5e5ea] active:scale-[0.96]"
                type="button"
                aria-label={consultation.closeLabel}
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <div className="grid gap-2.5">
                {chatMessages.map((item, index) => (
                  <ChatBubble role={item.role} key={`${item.role}-${index}`}>
                    {item.text}
                  </ChatBubble>
                ))}
              </div>

              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#86868b]">
                  {consultation.commonQuestionsLabel}
                </p>
                <div className="grid gap-2">
                  {consultation.questions.map((item) => (
                    <button
                      className="rounded-2xl bg-[#f5f5f7] px-3.5 py-2.5 text-left text-[13px] font-medium leading-5 text-[#1d1d1f] ring-1 ring-black/[0.03] transition hover:bg-[#eaf4ff] active:scale-[0.99]"
                      type="button"
                      onClick={() => handleQuestionClick(item)}
                      key={item.question}
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <footer className="border-t border-[#e5e5ea]/80 bg-white/80 p-3 backdrop-blur-xl">
              <div className="mb-2 grid grid-cols-[1fr_1.25fr_1fr] gap-1.5">
                <a
                  className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#edf8f1] text-[12px] font-semibold text-[#1f9d55]"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} />
                  {consultation.whatsappLabel}
                </a>
                <a
                  className="flex h-10 items-center justify-center gap-1 rounded-full bg-[#007aff] text-[11px] font-semibold text-white"
                  href={profile.externalLinks.inquiry}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Sparkles size={15} />
                  {consultation.requestQuoteLabel}
                </a>
                <a
                  className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#f5f5f7] text-[12px] font-semibold text-[#1d1d1f] ring-1 ring-[#e5e5ea]"
                  href={getMailtoUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail size={15} />
                  {consultation.emailLabel}
                </a>
              </div>

              <div className="flex gap-2">
                <input
                  className="h-11 min-w-0 flex-1 rounded-full bg-[#f5f5f7] px-4 text-[14px] text-[#1d1d1f] outline-none ring-1 ring-[#e5e5ea] placeholder:text-[#86868b] focus:ring-[#007aff]/45"
                  type="text"
                  value={message}
                  placeholder={consultation.inputPlaceholder}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleSend();
                  }}
                />
                <button
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#007aff] text-white transition disabled:bg-[#d1d1d6] disabled:text-white/80"
                  type="button"
                  disabled={!message.trim()}
                  aria-label={consultation.sendLabel}
                  onClick={handleSend}
                >
                  <Send size={18} />
                </button>
              </div>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
