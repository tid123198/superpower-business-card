import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.jpg";
import carMonitor from "../assets/products/car-monitor.jpg";
import carplayAiBox from "../assets/products/carplay-ai-box.jpg";
import dvrProduct from "../assets/products/dvr-product.jpg";
import dvr from "../assets/products/dvr.jpg";
import miniCamera from "../assets/products/mini-camera.jpg";
import monitorProduct from "../assets/products/monitor-product.jpg";
import parkingSensorProduct from "../assets/products/parking-sensor-product.jpg";
import parkingSensor from "../assets/products/parking-sensor.jpg";
import rearViewCamera from "../assets/products/rear-view-camera.jpg";
import sideViewCamera from "../assets/products/side-view-camera.jpg";
import smartProducts from "../assets/products/smart-products.jpg";
import wiredCamera from "../assets/products/wired-camera.jpg";
import wirelessCamera from "../assets/products/wireless-camera.jpg";
import wirelessSystem from "../assets/products/wireless-system.jpg";

const appBaseUrl = import.meta.env.BASE_URL;

export const profile = {
  deployment: {
    basePath: "/",
    pageUrl: "https://card.safecarcamera.com/",
  },
  company: {
    name: "SUPERPOWER HOLDINGS INTL IND LIMITED",
    shortName: "SUPERPOWER",
    location: "Shenzhen, China",
    website: "https://www.safecarcamera.com/",
    contactUrl: "https://www.safecarcamera.com/contact-us/",
    logo,
  },
  person: {
    name: "Jessica Liu",
    title: "Export Sales Manager",
    avatar,
    summary:
      "Car camera, parking sensor, car monitor and DVR supplier in Shenzhen, China. OEM/ODM support for global buyers.",
  },
  contact: {
    phone: "+8613714500919",
    phoneDisplay: "+86 137 1450 0919",
    whatsapp: "8613714500919",
    email: "jessicasuperpower@163.com",
    emailSubject: "Request Quote for Car Camera Products",
    whatsappMessage:
      "Hello Jessica, I am interested in your car camera products. Could you send me more details?",
    vcfUrl: `${appBaseUrl}jessica-liu.vcf`,
  },
  buttons: {
    whatsapp: "WhatsApp",
    contactUs: "Request Quote",
    requestQuote: "Request Quote",
    quote: "Quote",
    inquiry: "Request Quote",
    call: "Call",
    email: "Email",
    save: "Save Contact",
    saveShort: "Save",
    details: "Details",
    website: "Website",
  },
  sections: {
    advantagesEyebrow: "Why work with us",
    advantagesTitle: "Core Advantages",
    categoriesEyebrow: "Products",
    categoriesTitle: "Product Categories",
    productsEyebrow: "Recommended",
    productsTitle: "Featured Products",
    companyTitle: "Company Profile",
  },
  consultation: {
    title: "Online Consultation",
    status: "Usually replies quickly",
    commonQuestionsLabel: "Common questions",
    inputPlaceholder: "Type your question...",
    closeLabel: "Close consultation",
    sendLabel: "Send question",
    whatsappLabel: "WhatsApp",
    quoteLabel: "Quote",
    emailLabel: "Email",
    requestQuoteLabel: "Request Quote",
    greeting:
      "Hi, this is Jessica from SUPERPOWER. We supply car cameras, parking sensors, car monitors and DVR products from Shenzhen, China. How can I help you?",
    questions: [
      {
        question: "Are you a manufacturer or trading company?",
        answer:
          "We are a Shenzhen-based automotive electronics supplier focused on car cameras, parking sensors, car monitors and DVR products.",
      },
      {
        question: "What are your main products?",
        answer:
          "Our main products include wired car cameras, wireless car cameras, parking sensors, car monitors, DVR and smart in-car electronic products.",
      },
      {
        question: "Do you support OEM/ODM?",
        answer:
          "Yes, we support OEM/ODM projects for importers, distributors and global automotive accessory buyers.",
      },
      {
        question: "Can I get a product catalog?",
        answer:
          "Yes. Please contact us on WhatsApp or email, and we will send you the latest product catalog.",
      },
      {
        question: "Can you send me a quotation?",
        answer:
          "Yes. Please tell us the product model, quantity and destination country, then we can provide a quotation.",
      },
    ],
  },
  externalLinks: {
    inquiry: "https://www.safecarcamera.com/contact-us/",
    website: "https://www.safecarcamera.com/",
  },
  companyHighlights: [
    "Shenzhen-based automobile electronics supplier focused on car camera systems.",
    "Main products include rear view cameras, parking sensors, car monitors, DVR and smart in-car products.",
    "OEM/ODM support for importers, distributors and global automotive accessory buyers.",
  ],
  advantages: [
    "Shenzhen car camera supplier",
    "Rear view camera / parking sensor / car monitor",
    "OEM / ODM support",
    "Waterproof / night vision / wide angle products",
    "Fast response for global buyers",
  ],
  categories: [
    {
      name: "Wired Car Camera",
      description: "Rear view and side view camera solutions.",
      image: wiredCamera,
      url: "https://www.safecarcamera.com/category/products/wired-car-camera/",
    },
    {
      name: "Wireless Car Camera",
      description: "Wireless camera systems for cars and fleets.",
      image: wirelessCamera,
      url: "https://www.safecarcamera.com/category/products/wireless-car-camera/",
    },
    {
      name: "Parking Sensor",
      description: "Reliable reverse parking sensor systems.",
      image: parkingSensor,
      url: "https://www.safecarcamera.com/category/products/parking-sensor/",
    },
    {
      name: "Car Monitor",
      description: "TFT LCD monitors for vehicle camera systems.",
      image: carMonitor,
      url: "https://www.safecarcamera.com/category/products/car-monitor/",
    },
    {
      name: "DVR",
      description: "HD car DVR and driving recorder products.",
      image: dvr,
      url: "https://www.safecarcamera.com/category/products/dvr/",
    },
    {
      name: "Smart Products & Radio",
      description: "Smart in-car electronics and radio products.",
      image: smartProducts,
      url: "https://www.safecarcamera.com/category/products/smart-products-radio/",
    },
  ],
  products: [
    {
      name: "170 Degree Rear View Camera",
      description: "Wide angle waterproof camera for safer reversing.",
      image: rearViewCamera,
      detailUrl:
        "https://www.safecarcamera.com/170-degree-vehicle-rear-view-camera-upside-down-install-metal-body-black-car-reverse-fisheye-lens-camera/",
    },
    {
      name: "Mini Waterproof Car Camera",
      description: "Compact rear camera with night vision support.",
      image: miniCamera,
      detailUrl:
        "https://www.safecarcamera.com/mini-waterproof-car-parking-assistance-reversing-back-rear-view-camera-hd-car-rear-view-camera/",
    },
    {
      name: "Wireless Camera System",
      description: "Wireless camera kit for commercial vehicles and fleets.",
      image: wirelessSystem,
      detailUrl:
        "https://www.safecarcamera.com/forklift-wireless-camera-system-backup-sensor-forklift-safety-system-with-strong-magnetic-absorption-battery/",
    },
    {
      name: "AHD Side View Camera",
      description: "IP-rated side camera for trucks and buses.",
      image: sideViewCamera,
      detailUrl:
        "https://www.safecarcamera.com/ahd-car-side-view-front-reverse-backup-camera-ip69k-waterproof-car-camera-for-truck-van-rv-trailer-bu/",
    },
    {
      name: "Car Parking Sensor",
      description: "Reverse sensor system for aftermarket installation.",
      image: parkingSensorProduct,
      detailUrl: "https://www.safecarcamera.com/video-parking-sensor-3-in-1-car-backup-camera-radar-detector-system-zhd-ps028/",
    },
    {
      name: "7 Inch Car Monitor",
      description: "Vehicle display for rear view camera systems.",
      image: monitorProduct,
      detailUrl: "https://www.safecarcamera.com/new-car-digital-rearview-mirror-with-4-3-inch-tft-lcd-monitor-specific-zhd-m045/",
    },
    {
      name: "1080P Car DVR",
      description: "HD driving recorder with night vision function.",
      image: dvrProduct,
      detailUrl: "https://www.safecarcamera.com/category/products/dvr/",
    },
    {
      name: "Carplay AI Box",
      description: "Smart in-car product for multimedia upgrades.",
      image: carplayAiBox,
      detailUrl: "https://www.safecarcamera.com/category/products/smart-products-radio/",
    },
  ],
  companyIntro:
    "SUPERPOWER HOLDINGS INTL IND LIMITED is a Shenzhen-based automobile electronics supplier focused on car cameras, rear view camera systems, parking sensors, car monitors, DVR and smart in-car products. We support OEM/ODM projects and provide practical product solutions for importers, distributors and global automotive accessory buyers.",
  seo: {
    title: "Jessica Liu | Car Camera & Parking Sensor Supplier in Shenzhen",
    description:
      "Contact Jessica Liu from SUPERPOWER HOLDINGS INTL IND LIMITED for car cameras, rear view cameras, parking sensors, car monitors, DVR and OEM/ODM automobile electronics solutions.",
    ogTitle: "Car Camera & Parking Sensor Supplier in Shenzhen",
    ogDescription:
      "Rear view camera, wireless car camera, parking sensor, car monitor and DVR supplier. OEM/ODM support and fast response for global buyers.",
    ogImage: "https://card.safecarcamera.com/og-image.png",
  },
};

export const getWhatsAppUrl = (message = profile.contact.whatsappMessage) =>
  `https://wa.me/${profile.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const getMailtoUrl = (subject = profile.contact.emailSubject) =>
  `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}`;

export const getProductInquiryUrl = (productName) =>
  `${profile.externalLinks.inquiry}?product=${encodeURIComponent(productName)}`;
