import { useEffect, useRef, useState } from "react";
import { MessageCircle, Share2 } from "lucide-react";
import { profile, getMailtoUrl, getWhatsAppUrl } from "./data/profile";

function ProductPair({ hero = false }) {
  return (
    <div className={`product-pair ${hero ? "product-pair--hero" : ""}`} aria-label="Vehicle camera and LCD monitor — project configuration confirmed separately">
      <img className="pair-monitor" src={profile.hero.monitor} alt="SuperPower vehicle LCD monitor" loading={hero ? "eager" : "lazy"} />
      <img className="pair-camera" src={profile.hero.camera} alt="SuperPower commercial vehicle camera" loading={hero ? "eager" : "lazy"} />
    </div>
  );
}

function ShareButton() {
  const [status, setStatus] = useState("");
  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: profile.seo.title, url: profile.pageUrl });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(profile.pageUrl);
        setStatus("Link copied");
      } else {
        setStatus(profile.pageUrl);
      }
    } catch (error) {
      if (error.name !== "AbortError") setStatus("Please copy the page address to share.");
    }
  }
  return <div className="share-wrap"><button onClick={share}><Share2 size={15} aria-hidden="true" />Share</button><span role="status">{status}</span></div>;
}

function AnimatedYear({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / 1000, 1);
        setDisplay(String(Math.round(Number(value) * (1 - (1 - progress) ** 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .6 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <strong ref={ref} aria-label={value}><span className="animated-year" aria-hidden="true">{display}</span></strong>;
}

export default function App() {
  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const [primaryCTAVisible, setPrimaryCTAVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const visible = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      setPrimaryCTAVisible(visible.size > 0);
    }, { threshold: .5 });
    document.querySelectorAll(".hero-actions .button-dark, .contact .button-light").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    document.querySelectorAll(".motion-reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <header className="hero-header layout">
            <div className="logo-frame"><img src={profile.company.logo} alt="SUPERPOWER" /></div>
            <ShareButton />
          </header>
          <div className="hero-body layout">
            <div className="hero-copy">
              <div className="identity-block">
                <span className="identity-avatar"><img src={profile.person.portrait} alt="Jessica Liu" width="64" height="64" decoding="async" /></span>
                <p className="identity">{profile.person.name}<span>{profile.person.title}</span></p>
              </div>
              <h1 id="hero-title">{profile.hero.title}<span>{profile.hero.subtitle}</span></h1>
              <p className="hero-description">{profile.hero.description}</p>
              <div className="hero-actions">
                <a className="button-dark" href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" />WhatsApp</a>
                <a className="text-link" href={profile.externalLinks.products} target="_blank" rel="noreferrer">View Products <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <ProductPair hero />
          </div>
        </section>

        <section className="solutions layout section-space" aria-labelledby="solutions-title">
          <div className="section-heading motion-reveal"><h2 id="solutions-title">{profile.solutions.title}</h2><p>{profile.solutions.description}</p></div>
          {profile.solutions.items.map((item, index) => (
            <article className={`solution-row motion-reveal ${index % 2 ? "solution-row--reverse" : ""}`} key={item.title}>
              <div className="solution-visual">{item.paired ? <ProductPair /> : <img src={item.image} alt={item.alt} loading="lazy" />}</div>
              <div className="solution-copy"><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href={item.url} target="_blank" rel="noreferrer" aria-label={`Explore ${item.title}`}>Explore <span aria-hidden="true">→</span></a></div>
            </article>
          ))}
        </section>

        <section className="proof layout section-space motion-reveal" aria-labelledby="proof-title">
          <h2 id="proof-title">{profile.proof.title}</h2>
          <div className="proof-line">{profile.proof.items.map(item => <div key={item.value}>{/^\d+$/.test(item.value) ? <AnimatedYear value={item.value} /> : <strong>{item.value}</strong>}<span>{item.label}</span></div>)}</div>
          <div className="credentials"><p>{profile.proof.credentials}</p><p>{profile.proof.note}</p></div>
        </section>

        <section className="contact section-space" aria-labelledby="contact-title">
          <div className="layout motion-reveal">
            <h2 id="contact-title">{profile.contact.title}</h2>
            <p>{profile.contact.description}</p>
            <a className="button-light" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <a className="contact-email" href={getMailtoUrl()}>{profile.contact.email}</a>
            <a className="contact-website" href={profile.externalLinks.website} target="_blank" rel="noreferrer">Visit safecarcamera.com <span aria-hidden="true">→</span></a>
            <details className="contact-more"><summary>Contact details</summary><div><a href={profile.contact.vcfUrl} download>Save Contact</a><a href={profile.externalLinks.inquiry} target="_blank" rel="noreferrer">Request a Quote →</a></div></details>
          </div>
        </section>
      </main>
      <footer className="footer layout" ref={footerRef}><div><strong>{profile.company.shortName}</strong><span>{profile.company.location}</span></div><p>{profile.copyright}</p></footer>
      <a className={`sticky-contact ${footerVisible || primaryCTAVisible ? "sticky-contact--hidden" : ""}`} href={getWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" tabIndex={footerVisible || primaryCTAVisible ? -1 : undefined}><MessageCircle size={21} aria-hidden="true" /></a>
    </>
  );
}
