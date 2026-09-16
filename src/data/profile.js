import logo from "../assets/logo.jpg";

const appBaseUrl = import.meta.env.BASE_URL;
const siteBase = "https://www.safecarcamera.com";
const assetBase = `${siteBase}/assets`;

export const profile = {
  deployment: { basePath: "/", pageUrl: "https://card.safecarcamera.com/" },
  company: {
    name: "SUPERPOWER HOLDINGS INTL IND LIMITED",
    shortName: "SUPERPOWER",
    positioning: "Vehicle Camera Systems for B2B & OEM Projects",
    location: "Shenzhen, China",
    since: "Since 2010",
    website: `${siteBase}/`,
    logo,
  },
  person: { name: "Jessica Liu", title: "Business Development" },
  contact: {
    phone: "+8613714500919",
    phoneDisplay: "+86 137 1450 0919",
    whatsapp: "8613714500919",
    email: "superpowervideo@gmail.com",
    emailSubject: "Vehicle Camera System Project Inquiry",
    whatsappMessage: "Hello Jessica, I'm interested in your vehicle camera systems.",
    vcfUrl: `${appBaseUrl}jessica-liu.vcf`,
  },
  buttons: {
    whatsapp: "WhatsApp",
    email: "Email",
    products: "View Products",
    website: "Visit Website",
    save: "Save Contact",
    saveShort: "Save Contact",
    quote: "Request a Quote",
  },
  hero: {
    title: "Vehicle Camera Systems for B2B & OEM Projects",
    description: "Commercial vehicle cameras, monitors and matched vision systems for global distributors, fleets and OEM projects.",
    image: `${assetBase}/product-discovery-system.webp`,
    imageAlt: "SuperPower vehicle monitor, cameras and cables for commercial vehicle projects",
  },
  sections: {
    products: {
      title: "What We Provide",
      description: "Vehicle vision products built for commercial and industrial applications.",
    },
    vehicles: {
      title: "Find by Vehicle",
      description: "Start with your vehicle type and find a suitable visibility solution.",
    },
    why: { title: "Why SuperPower" },
    quality: {
      title: "Built for Professional Vehicle Applications",
      note: "Certification availability varies by model. Please contact us for applicable documents.",
    },
    finalCta: {
      title: "Have a Vehicle Camera Project?",
      description: "Tell us your vehicle type, camera positions, video format and estimated quantity.",
    },
  },
  productCategories: [
    {
      name: "Commercial Vehicle Cameras",
      description: "Rear · Side · Front · Blind Spot",
      image: `${assetBase}/products/cam-b09/cam-b09-backup-camera-main.webp`,
      imageAlt: "Commercial vehicle backup camera with adjustable bracket",
      url: `${siteBase}/products/vehicle-cameras`,
    },
    {
      name: "Vehicle LCD Monitors",
      description: '4.3"–10.1" · Multi-input Displays',
      image: `${assetBase}/products/sup-m700/sup-m700-7-inch-tft-lcd-monitor-main.webp`,
      imageAlt: "7-inch vehicle LCD monitor on a dashboard stand",
      url: `${siteBase}/products/vehicle-lcd-monitors`,
    },
    {
      name: "Camera + Monitor Systems",
      description: "Matched Cameras · Displays · Cables",
      image: `${assetBase}/product-discovery-system.webp`,
      imageAlt: "Matched vehicle camera monitor system with cables",
      url: `${siteBase}/products/camera-monitor-kits`,
    },
    {
      name: "OEM / ODM Projects",
      description: "Branding · Connectors · Cables · Configuration",
      image: `${assetBase}/factory-quality.webp`,
      imageAlt: "Vehicle camera and monitor quality inspection",
      url: `${siteBase}/contact`,
    },
  ],
  vehicleApplications: [
    {
      name: "Trucks & Buses",
      description: "Rear and blind-spot visibility",
      image: `${assetBase}/application-trucks-buses-china-v2.webp`,
      imageAlt: "Vehicle camera system installation on a commercial truck",
      url: `${siteBase}/vehicles#trucks`,
    },
    {
      name: "Forklifts",
      description: "Rear-view and operator visibility",
      image: `${assetBase}/application-forklifts-china-v2.webp`,
      imageAlt: "Forklift rear-view camera system inspection",
      url: `${siteBase}/vehicles#forklifts`,
    },
    {
      name: "Construction & Mining",
      description: "Rugged vehicle vision systems",
      image: `${assetBase}/application-construction-mining-china-v2.webp`,
      imageAlt: "Rugged camera system on construction equipment",
      url: `${siteBase}/vehicles#construction`,
    },
    {
      name: "Commercial Fleets",
      description: "Flexible camera and monitor configurations",
      image: `${assetBase}/application-fleet-retrofit-china-v2.webp`,
      imageAlt: "Camera system retrofit inside a commercial fleet vehicle",
      url: `${siteBase}/vehicles`,
    },
  ],
  proofPoints: [
    { value: "Since 2010", label: "Vehicle safety electronics experience" },
    { value: "1000+ m²", label: "Production & office facility" },
    { value: "25+", label: "R&D, quality & support team" },
    { value: "OEM / ODM", label: "Project configuration support" },
  ],
  qualityPoints: ["IP68 / IP69K Options", "AHD & CVBS", "Wide Voltage Options", "100% Functional Testing"],
  certifications: ["CE", "FCC", "RoHS"],
  externalLinks: {
    products: `${siteBase}/products`,
    inquiry: `${siteBase}/contact`,
    website: `${siteBase}/`,
  },
  footer: { copyright: "© 2010–2026 SUPERPOWER" },
  seo: {
    title: "Jessica Liu | SUPERPOWER Vehicle Camera Systems",
    description: "Contact Jessica Liu at SUPERPOWER for commercial vehicle cameras, LCD monitors, matched vision systems and OEM/ODM vehicle electronics projects.",
    ogTitle: "SUPERPOWER | Vehicle Camera Systems for B2B & OEM Projects",
    ogDescription: "Commercial vehicle cameras, monitors and matched vision systems for distributors, fleets and OEM projects.",
    ogImage: `${assetBase}/product-discovery-system.webp`,
  },
};

export const getWhatsAppUrl = (message = profile.contact.whatsappMessage) =>
  `https://wa.me/${profile.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const getMailtoUrl = (subject = profile.contact.emailSubject) =>
  `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}`;
