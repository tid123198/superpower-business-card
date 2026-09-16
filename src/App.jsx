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
            <article className={`solution-row motion-reveal ${index % 2 ? "solution-row--reverse" : ""} ${item.images ? "solution-row--kits" : ""}`} key={item.title}>
              <div className="solution-visual">{item.images ? <div className="kit-images">{item.images.map(image => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}</div> : <img src={item.image} alt={item.alt} loading="lazy" />}</div>
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
            <div className="contact-meta">
              <dl className="contact-meta-list">
                <div><dt>Email</dt><dd><a className="contact-email" href={getMailtoUrl()}>{profile.contact.email}</a></dd></div>
                <div><dt>Website</dt><dd><a className="contact-website" href={profile.externalLinks.website} target="_blank" rel="noreferrer">safecarcamera.com <span aria-hidden="true">→</span></a></dd></div>
              </dl>
              <details className="contact-more">
                <summary>More contact info <span aria-hidden="true">→</span></summary>
                <dl className="contact-more-content contact-meta-list">
                  <div><dt>Phone</dt><dd><a href={`tel:+${profile.contact.whatsapp}`}>+86 13714500919</a></dd></div>
                  <div><dt>Location</dt><dd>{profile.company.location}</dd></div>
                  <div><dt>Company</dt><dd>{profile.company.shortName}</dd></div>
                </dl>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer" ref={footerRef}>
        <svg className="footer-logo-filter" width="0" height="0" aria-hidden="true" focusable="false"><defs><filter id="footer-logo-remove-white" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3" /></filter></defs></svg>
        <div className="layout">
          <div className="footer-help">
            <h2>Got more questions?</h2>
            <p>Explore our <a href={profile.externalLinks.products} target="_blank" rel="noreferrer">products</a> or <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">chat with Jessica</a></p>
          </div>
          <div className="footer-brand-row">
            <a className="footer-logo" href={profile.externalLinks.website} target="_blank" rel="noreferrer" aria-label="SUPERPOWER website"><img src={profile.company.logo} alt="SUPERPOWER" loading="lazy" /></a>
            <ShareButton />
          </div>
          <div className="footer-columns">
            <nav aria-labelledby="footer-products"><h3 id="footer-products">Products</h3>{profile.solutions.items.map(item => <a key={item.title} href={item.url} target="_blank" rel="noreferrer">{item.title}</a>)}</nav>
            <nav aria-labelledby="footer-company"><h3 id="footer-company">Company</h3><a href="#proof-title">OEM / ODM</a><a href="#solutions-title">Selected Solutions</a><a href={profile.externalLinks.website} target="_blank" rel="noreferrer">Visit Website →</a></nav>
            <nav aria-labelledby="footer-contact"><h3 id="footer-contact">Contact</h3><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp</a><a href={`tel:+${profile.contact.whatsapp}`}>+86 13714500919</a><a href={profile.contact.vcfUrl} download>Save Contact</a></nav>
            <div className="footer-direct"><h3>Let’s discuss your project</h3><p>{profile.person.name} · {profile.person.title}</p><a className="footer-email" href={getMailtoUrl()}><span>{profile.contact.email}</span><span className="footer-email-arrow" aria-hidden="true">→</span></a></div>
          </div>
          <div className="footer-bottom"><span>{profile.company.location}</span><p>{profile.copyright}</p></div>
        </div>
      </footer>
      <a className={`sticky-contact ${footerVisible || primaryCTAVisible ? "sticky-contact--hidden" : ""}`} href={getWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" tabIndex={footerVisible || primaryCTAVisible ? -1 : undefined}><MessageCircle size={21} aria-hidden="true" /></a>
    </>
  );
}
