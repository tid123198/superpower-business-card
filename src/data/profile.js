import logo from "../assets/superpower-logo-original.jpg";
import portrait from "../assets/jessica-liu-portrait.jpg";
import camera from "../assets/cam-b09-transparent-reflection.png";

const site = "https://www.safecarcamera.com";
const assets = `${site}/assets`;
const monitor = `${assets}/products/sup-m700/sup-m700-7-inch-tft-lcd-monitor-main.webp`;

export const profile = {
  company: {
    shortName: "SUPERPOWER",
    location: "Shenzhen, China",
    logo,
  },
  person: { name: "Jessica Liu", title: "Business Development", portrait },
  pageUrl: "https://card.safecarcamera.com/",
  hero: {
    title: "Vehicle Camera Systems",
    subtitle: "for B2B & OEM Projects",
    description: "Commercial vehicle cameras, monitors and matched vision systems for global B2B projects.",
    camera,
    monitor,
  },
  contact: {
    whatsapp: "8613714500919",
    email: "superpowervideo@gmail.com",
    whatsappMessage: "Hello Jessica, I'm interested in your vehicle camera systems.",
    vcfUrl: `${import.meta.env.BASE_URL}jessica-liu.vcf`,
    title: "Have a Vehicle Camera Project?",
    description: "Tell us your vehicle type, camera positions and estimated quantity.",
  },
  solutions: {
    title: "Selected Solutions",
    description: "Professional vehicle vision products for commercial applications.",
    items: [
      { title: "Vehicle Cameras", description: "Rear · Side · Front", image: camera, alt: "SuperPower CAM-B09 reverse camera", url: `${site}/products/vehicle-cameras` },
      { title: "Vehicle Monitors", description: '4.3"–10.1"', image: monitor, alt: "SuperPower SUP-M700 vehicle LCD monitor on its dashboard stand", url: `${site}/products/vehicle-lcd-monitors` },
      { title: "Camera + Monitor Systems", description: "Matched system solutions", paired: true, url: `${site}/products/camera-monitor-kits` },
    ],
  },
  proof: {
    title: "Built for Professional Vehicle Projects",
    items: [
      { value: "2010", label: "Since" },
      { value: "OEM / ODM", label: "Project Support" },
      { value: "GLOBAL B2B", label: "Commercial Applications" },
    ],
    credentials: "CE · FCC · RoHS · IP-rated options",
    note: "Certification availability varies by model.",
  },
  externalLinks: { products: `${site}/products`, website: `${site}/`, inquiry: `${site}/contact` },
  copyright: "© 2026 SUPERPOWER",
  seo: {
    title: "Jessica Liu | Vehicle Camera Systems | SUPERPOWER",
    description: "Connect with Jessica Liu at SUPERPOWER for commercial vehicle cameras, monitors and OEM/ODM vehicle vision projects.",
    image: monitor,
  },
};

export const getWhatsAppUrl = () =>
  `https://wa.me/${profile.contact.whatsapp}?text=${encodeURIComponent(profile.contact.whatsappMessage)}`;
export const getMailtoUrl = () => `mailto:${profile.contact.email}`;
