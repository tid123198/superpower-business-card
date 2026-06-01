import { Building2, CheckCircle2, Globe2, Send } from "lucide-react";
import { profile } from "../data/profile";

export default function CompanyIntro() {
  return (
    <section className="pb-6">
      <div className="mb-3 px-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#86868b]">About supplier</p>
        <h2 className="mt-1 text-[22px] font-bold tracking-[-0.01em] text-[#1d1d1f]">
          {profile.sections.companyTitle}
        </h2>
      </div>
      <div className="rounded-[28px] bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.035]">
        <div className="mb-4 flex items-center gap-2 text-[#1d1d1f]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4ff] text-[#007aff]">
            <Building2 size={18} strokeWidth={1.9} />
          </span>
          <p className="text-[15px] font-semibold">{profile.company.name}</p>
        </div>
        <div className="grid gap-3">
          {profile.companyHighlights.map((highlight) => (
            <div className="flex gap-3" key={highlight}>
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#007aff]" size={17} />
              <p className="text-[14px] leading-6 text-[#6e6e73]">{highlight}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-3 text-[15px] font-semibold text-[#007aff] transition hover:bg-[#eaf4ff] active:scale-[0.98]"
            href={profile.externalLinks.website}
            target="_blank"
            rel="noreferrer"
          >
            <Globe2 size={16} />
            {profile.buttons.website}
          </a>
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#007aff] px-3 text-[15px] font-semibold text-white transition hover:bg-[#006ee6] active:scale-[0.98]"
            href={profile.externalLinks.inquiry}
            target="_blank"
            rel="noreferrer"
          >
            <Send size={16} />
            {profile.buttons.requestQuote}
          </a>
        </div>
      </div>
    </section>
  );
}
