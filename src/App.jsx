import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Download, ExternalLink, Globe2, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { getMailtoUrl, getWhatsAppUrl, profile } from "./data/profile";

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function SectionHeading({ id, title, description }) {
  return <div className="section-heading"><h2 id={id}>{title}</h2>{description ? <p>{description}</p> : null}</div>;
}

function ActionLink({ href, icon: Icon, children, primary = false, external = false }) {
  return (
    <a className={`action-button ${primary ? "action-button--primary" : ""}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <Icon aria-hidden="true" size={18} strokeWidth={1.9} /><span>{children}</span>
    </a>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <header className="brand-row">
          <div className="brand-logo-frame">
            <img src={profile.company.logo} alt="SUPERPOWER" className="brand-logo" />
          </div>
          <span className="brand-divider" aria-hidden="true" />
          <div className="contact-identity"><strong>{profile.person.name}</strong><span>{profile.person.title}</span></div>
        </header>
        <div className="hero__copy">
          <p className="eyebrow">B2B vehicle vision systems</p>
          <h1 id="hero-title">{profile.hero.title}</h1>
          <p className="hero__description">{profile.hero.description}</p>
          <p className="location-tag">{profile.company.location} <span aria-hidden="true">·</span> {profile.company.since}</p>
        </div>
        <div className="hero-actions" aria-label="Contact and company links">
          <ActionLink href={getWhatsAppUrl()} icon={MessageCircle} primary external>{profile.buttons.whatsapp}</ActionLink>
          <ActionLink href={getMailtoUrl()} icon={Mail}>{profile.buttons.email}</ActionLink>
          <ActionLink href={profile.externalLinks.products} icon={ArrowRight} external>{profile.buttons.products}</ActionLink>
          <ActionLink href={profile.externalLinks.website} icon={Globe2} external>{profile.buttons.website}</ActionLink>
          <a className="save-link" href={profile.contact.vcfUrl} download><Download aria-hidden="true" size={16} />{profile.buttons.save}</a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__image-wrap"><img src={profile.hero.image} alt={profile.hero.imageAlt} /></div>
        <div className="hero__visual-note"><span>Camera</span><span>Display</span><span>Matched system</span></div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="page-section" aria-labelledby="products-title">
      <Reveal><SectionHeading id="products-title" {...profile.sections.products} /></Reveal>
      <div className="product-grid">
        {profile.productCategories.map((item, index) => (
          <Reveal key={item.name} delay={index * 40}>
            <a className="product-card" href={item.url} target="_blank" rel="noreferrer">
              <div className="product-card__image"><img src={item.image} alt={item.imageAlt} loading="lazy" /></div>
              <div className="product-card__copy"><h3>{item.name}</h3><p>{item.description}</p></div>
              <ArrowRight className="card-arrow" aria-hidden="true" size={19} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function VehicleSection() {
  return (
    <section className="page-section page-section--tinted" aria-labelledby="vehicles-title">
      <div className="section-inner">
        <Reveal><SectionHeading id="vehicles-title" {...profile.sections.vehicles} /></Reveal>
        <div className="vehicle-grid">
          {profile.vehicleApplications.map((item, index) => (
            <Reveal key={item.name} delay={index * 40}>
              <a className="vehicle-card" href={item.url} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
                <div className="vehicle-card__overlay"><div><h3>{item.name}</h3><p>{item.description}</p></div><ArrowRight aria-hidden="true" size={19} /></div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="page-section trust-section" aria-labelledby="why-title">
      <Reveal><SectionHeading id="why-title" {...profile.sections.why} /></Reveal>
      <div className="proof-grid">
        {profile.proofPoints.map((item, index) => (
          <Reveal className="proof-item" delay={index * 35} key={item.value}><strong>{item.value}</strong><span>{item.label}</span></Reveal>
        ))}
      </div>
      <Reveal className="quality-strip">
        <div className="quality-strip__header"><ShieldCheck aria-hidden="true" size={24} /><h3>{profile.sections.quality.title}</h3></div>
        <div className="quality-points">{profile.qualityPoints.map((item) => <span key={item}><Check aria-hidden="true" size={15} />{item}</span>)}</div>
        <div className="cert-row" aria-label="Available certification documents by model">
          {profile.certifications.map((item) => <span className="cert-mark" key={item}><ShieldCheck aria-hidden="true" size={16} />{item}</span>)}
          <p>{profile.sections.quality.note}</p>
        </div>
      </Reveal>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <Reveal className="final-cta__inner">
        <p className="eyebrow eyebrow--light">Project inquiry</p><h2 id="final-cta-title">{profile.sections.finalCta.title}</h2><p>{profile.sections.finalCta.description}</p>
        <div className="final-cta__actions">
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} />Chat on WhatsApp</a>
          <a href={profile.externalLinks.inquiry} target="_blank" rel="noreferrer">{profile.buttons.quote}<ArrowRight aria-hidden="true" size={18} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ footerRef }) {
  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-brand"><strong>{profile.company.shortName}</strong><span>{profile.company.positioning}</span><span>{profile.company.location}</span></div>
      <nav aria-label="Footer links"><a href={profile.externalLinks.website} target="_blank" rel="noreferrer">Website</a><a href={getMailtoUrl()}>Email</a><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">WhatsApp</a></nav>
      <p>{profile.footer.copyright}</p>
    </footer>
  );
}

function MobileContactBar({ footerRef }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.08 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerRef]);
  return (
    <nav className={`mobile-contact ${hidden ? "mobile-contact--hidden" : ""}`} aria-label="Quick contact">
      <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} />WhatsApp</a>
      <a href={profile.externalLinks.inquiry} target="_blank" rel="noreferrer">Get a Quote<ExternalLink aria-hidden="true" size={16} /></a>
    </nav>
  );
}

export default function App() {
  const footerRef = useRef(null);
  return <><main><Hero /><ProductSection /><VehicleSection /><TrustSection /><FinalCta /></main><Footer footerRef={footerRef} /><MobileContactBar footerRef={footerRef} /></>;
}
