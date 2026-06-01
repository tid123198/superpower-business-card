import { ArrowUpRight, Camera, CircleDot, Monitor, Radio, Video, Wifi } from "lucide-react";
import { profile } from "../data/profile";

const categoryIcons = {
  "Wired Car Camera": Camera,
  "Wireless Car Camera": Wifi,
  "Parking Sensor": CircleDot,
  "Car Monitor": Monitor,
  DVR: Video,
  "Smart Products & Radio": Radio,
};

export default function ProductCategories() {
  return (
    <section className="py-4">
      <div className="mb-3 flex items-end justify-between px-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#86868b]">
            {profile.sections.categoriesEyebrow}
          </p>
          <h2 className="mt-1 text-[22px] font-bold tracking-[-0.01em] text-[#1d1d1f]">
            {profile.sections.categoriesTitle}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {profile.categories.map((category) => {
          const Icon = categoryIcons[category.name] || Camera;

          return (
            <a
              className="min-h-[140px] rounded-[20px] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.035)] ring-1 ring-black/[0.035] transition duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              href={category.url}
              target="_blank"
              rel="noreferrer"
              key={category.name}
            >
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf4ff] text-[#007aff]">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="line-clamp-2 text-[14px] font-semibold leading-5 text-[#1d1d1f]">
                  {category.name}
                </h3>
                <ArrowUpRight className="mt-0.5 shrink-0 text-[#007aff]" size={13} />
              </div>
              <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-[#6e6e73]">{category.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
