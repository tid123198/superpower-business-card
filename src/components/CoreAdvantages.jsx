import { CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";

export default function CoreAdvantages() {
  return (
    <section className="py-6">
      <div className="mb-3 px-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#86868b]">
          {profile.sections.advantagesEyebrow}
        </p>
        <h2 className="mt-1 text-[22px] font-bold tracking-[-0.01em] text-[#1d1d1f]">
          {profile.sections.advantagesTitle}
        </h2>
      </div>
      <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.035]">
        <div>
          {profile.advantages.map((advantage) => (
            <div
              className="mx-4 flex items-center gap-3 border-b border-[#e5e5ea]/70 py-4 last:border-b-0"
              key={advantage}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf4ff] text-[#007aff]">
                <CheckCircle2 size={17} />
              </span>
              <p className="text-[15px] font-normal leading-6 text-[#1d1d1f]">{advantage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
