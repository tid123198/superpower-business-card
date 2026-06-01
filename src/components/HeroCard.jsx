import ContactButtons from "./ContactButtons";
import { profile } from "../data/profile";

export default function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-white/90 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04] backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-[28px] bg-gradient-to-br from-[#eef7ff] via-white to-[#f5f5f7] opacity-80" />
      <div className="relative mb-5 flex items-center gap-3">
        <img
          className="h-12 w-32 rounded-2xl bg-white object-contain px-1.5 py-1 shadow-sm ring-1 ring-[#e5e5ea]"
          src={profile.company.logo}
          alt={`${profile.company.shortName} logo`}
        />
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-5 text-[#1d1d1f]">{profile.company.shortName}</p>
          <p className="text-[13px] leading-5 text-[#6e6e73]">{profile.company.location}</p>
        </div>
      </div>

      <div className="relative mb-4 flex items-center gap-4">
        <img
          className="h-20 w-20 rounded-full border border-[#e5e5ea] bg-[#f5f5f7] object-cover p-1 shadow-[0_8px_22px_rgba(0,0,0,0.07)]"
          src={profile.person.avatar}
          alt={profile.person.name}
        />
        <div className="min-w-0">
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.01em] text-[#1d1d1f]">
            {profile.person.name}
          </h1>
          <p className="mt-1 text-[15px] font-medium text-[#6e6e73]">{profile.person.title}</p>
          <p className="mt-1 text-xs leading-5 text-[#6e6e73]">{profile.company.name}</p>
        </div>
      </div>

      <p className="relative mb-4 rounded-[22px] bg-[#f5f5f7] px-4 py-2.5 text-[14px] leading-6 text-[#3a3a3c] ring-1 ring-black/[0.03]">
        {profile.person.summary}
      </p>
      <ContactButtons />
    </section>
  );
}
