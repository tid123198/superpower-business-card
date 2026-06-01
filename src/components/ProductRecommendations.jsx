import { ArrowLeft, ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { getProductInquiryUrl, profile } from "../data/profile";

const autoRotateDelay = 3500;

export default function ProductRecommendations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = profile.products[activeIndex];
  const totalProducts = profile.products.length;

  const goToProduct = (index) => {
    setActiveIndex((index + totalProducts) % totalProducts);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalProducts);
    }, autoRotateDelay);

    return () => window.clearInterval(timer);
  }, [totalProducts]);

  return (
    <section className="py-6">
      <div className="mb-4 flex items-end justify-between gap-4 px-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#86868b]">
            {profile.sections.productsEyebrow}
          </p>
          <h2 className="mt-1 text-[22px] font-bold tracking-[-0.01em] text-[#1d1d1f]">
            {profile.sections.productsTitle}
          </h2>
        </div>
        <div className="flex gap-1.5">
          <button
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#007aff] shadow-[0_4px_14px_rgba(0,0,0,0.04)] ring-1 ring-[#e5e5ea] transition hover:bg-[#f5f5f7] active:scale-[0.95]"
            type="button"
            aria-label="Previous product"
            onClick={() => goToProduct(activeIndex - 1)}
          >
            <ArrowLeft size={14} />
          </button>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#007aff] shadow-[0_4px_14px_rgba(0,0,0,0.04)] ring-1 ring-[#e5e5ea] transition hover:bg-[#f5f5f7] active:scale-[0.95]"
            type="button"
            aria-label="Next product"
            onClick={() => goToProduct(activeIndex + 1)}
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.045)] ring-1 ring-black/[0.035]">
        <a
          className="m-3 flex aspect-[4/3] items-center justify-center rounded-[22px] bg-[#f7f7f9] p-5 ring-1 ring-black/[0.025] transition hover:bg-[#f1f6ff] active:scale-[0.995]"
          href={activeProduct.detailUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View details for ${activeProduct.name}`}
        >
          <img
            className="h-full w-full object-contain drop-shadow-[0_10px_16px_rgba(29,29,31,0.06)] transition duration-300"
            src={activeProduct.image}
            alt={activeProduct.name}
          />
        </a>
        <div className="px-5 pb-5 pt-1">
          <div className="mb-3 flex items-center justify-center gap-1.5">
            {profile.products.map((product, index) => (
              <button
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-[#007aff]" : "w-2 bg-[#d1d1d6]"
                }`}
                type="button"
                aria-label={`Show ${product.name}`}
                onClick={() => goToProduct(index)}
                key={product.name}
              />
            ))}
          </div>
          <p className="mb-2 text-center text-xs font-semibold text-[#86868b]">
            {activeIndex + 1} / {totalProducts}
          </p>
          <a
            className="block text-center text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#1d1d1f] transition hover:text-[#007aff]"
            href={activeProduct.detailUrl}
            target="_blank"
            rel="noreferrer"
          >
            {activeProduct.name}
          </a>
          <p className="mx-auto mt-2 line-clamp-2 max-w-[310px] text-center text-[14px] leading-6 text-[#6e6e73]">
            {activeProduct.description}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <a
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-3 text-[14px] font-semibold text-[#007aff] transition hover:bg-[#eaf4ff] active:scale-[0.98]"
              href={activeProduct.detailUrl}
              target="_blank"
              rel="noreferrer"
            >
              {profile.buttons.details}
              <ArrowUpRight size={16} />
            </a>
            <a
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#007aff] px-3 text-[14px] font-semibold text-white transition hover:bg-[#006ee6] active:scale-[0.98]"
              href={getProductInquiryUrl(activeProduct.name)}
              target="_blank"
              rel="noreferrer"
            >
              {profile.buttons.requestQuote}
              <Send size={15} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
