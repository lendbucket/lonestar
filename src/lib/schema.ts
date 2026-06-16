// src/lib/schema.ts
// Connected @graph JSON-LD for Lone Star Contracting Group.
// Every node carries a stable @id and references the others, so search engines
// resolve the whole site to one Organization entity instead of many loose blobs.
//
// Render on any page with the existing pattern:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(graph([...nodes])) }} />

import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

/* =========================================================================
   ONE-TIME CONFIG. Fill the TODO values with real data, then leave it alone.
   Never invent ratings, reviews, addresses, or profiles you do not have.
   ========================================================================= */
export const ORG = {
  legalName: "Lone Star Contracting Group LLC", // TODO confirm exact registered entity
  telephone: "+1-540-447-9432",
  baseLocality: "Corpus Christi",
  baseRegion: "TX",
  geo: { lat: 27.8006, lng: -97.3964 },          // Corpus Christi HQ. Adjust if your base differs.
  foundingDate: "",                              // optional, e.g. "2024". Leave "" to omit.
  logoPath: "/images/lone-star-logo-dark.svg",
  sameAs: [] as string[],                        // TODO real profile URLs: Facebook, LinkedIn, Instagram, Google Business Profile
};

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Node = Record<string, unknown>;

/* Map each trade to its most specific schema.org LocalBusiness subtype.
   Anything not listed falls back to GeneralContractor. */
const TRADE_TYPE: Record<string, string> = {
  roofing: "RoofingContractor",
  plumbing: "Plumber",
  electrical: "Electrician",
  hvac: "HVACBusiness",
  "interior-painting": "HousePainter",
  "exterior-painting": "HousePainter",
};
export const tradeType = (id: string): string => TRADE_TYPE[id] ?? "GeneralContractor";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/* ---------------------------- GLOBAL NODES ---------------------------- */
// Emit these two once, in the root layout. Every other node points at them by @id.

export function organizationNode(): Node {
  return {
    "@type": ["Organization", "GeneralContractor"],
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: ORG.legalName,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    ...(ORG.telephone ? { telephone: ORG.telephone } : {}),
    logo: { "@type": "ImageObject", url: abs(ORG.logoPath) },
    image: abs(ORG.logoPath),
    ...(ORG.foundingDate ? { foundingDate: ORG.foundingDate } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: ORG.baseLocality,
      addressRegion: ORG.baseRegion,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: ORG.geo.lat, longitude: ORG.geo.lng },
    areaServed: { "@type": "State", name: "Texas" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
      ...(ORG.telephone ? { telephone: ORG.telephone } : {}),
      areaServed: "US-TX",
      availableLanguage: ["English", "Spanish"],
    },
    knowsAbout: [
      "General Contracting", "Roofing", "Foundation Repair", "Concrete",
      "Plumbing", "Electrical", "HVAC", "Fencing", "Painting", "Drywall",
      "Remodeling", "Commercial Construction", "Tree Service", "Site Work",
    ],
    ...(ORG.sameAs.length ? { sameAs: ORG.sameAs } : {}),
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    // Intentionally no potentialAction/SearchAction: there is no indexable
    // on-site search endpoint, and declaring one you do not have hurts trust.
  };
}

/* ---------------------------- PER-PAGE NODES ---------------------------- */

export function webPageNode(opts: {
  url: string;
  name: string;
  description?: string;
  image?: string;
  breadcrumbId?: string;
  mainEntityId?: string;
}): Node {
  const id = `${opts.url}#webpage`;
  return {
    "@type": "WebPage",
    "@id": id,
    url: opts.url,
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(opts.image) } } : {}),
    ...(opts.breadcrumbId ? { breadcrumb: { "@id": opts.breadcrumbId } } : {}),
    ...(opts.mainEntityId ? { mainEntity: { "@id": opts.mainEntityId } } : {}),
    inLanguage: "en-US",
  };
}

export function breadcrumbNode(url: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

// City service-by-city leaf: the Service Lone Star provides in that city.
export function serviceNode(opts: {
  url: string;
  serviceName: string;       // e.g. "Roofing"
  serviceId: string;         // e.g. "roofing"
  cityName: string;
  description: string;
  subServices: string[];
  image?: string;
}): Node {
  return {
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: `${opts.serviceName} in ${opts.cityName}, TX`,
    serviceType: opts.serviceName,
    description: opts.description,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: opts.cityName },
      { "@type": "State", name: "Texas" },
    ],
    ...(opts.image ? { image: abs(opts.image) } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${opts.serviceName} services in ${opts.cityName}`,
      itemListElement: opts.subServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s, serviceType: opts.serviceName },
      })),
    },
  };
}

// Service hub /services/[service]: declares the org operating as a specific
// contractor type across Texas, with its full sub-service catalog.
export function contractorNode(opts: {
  url: string;
  serviceName: string;
  serviceId: string;
  description: string;
  subServices: string[];
}): Node {
  return {
    "@type": tradeType(opts.serviceId),
    "@id": `${opts.url}#service`,
    name: `${SITE_NAME} — ${opts.serviceName}`,
    description: opts.description,
    url: opts.url,
    parentOrganization: { "@id": ORG_ID },
    areaServed: { "@type": "State", name: "Texas" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${opts.serviceName} services`,
      itemListElement: opts.subServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s, serviceType: opts.serviceName },
      })),
    },
  };
}

export function faqNode(url: string, faqs: { question: string; answer: string }[]): Node {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// How It Works / process page.
export function howToNode(opts: {
  url: string;
  name: string;
  steps: { title: string; description: string }[];
}): Node {
  return {
    "@type": "HowTo",
    "@id": `${opts.url}#howto`,
    name: opts.name,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

// Blog posts.
export function articleNode(opts: {
  url: string;
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}): Node {
  return {
    "@type": "BlogPosting",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.image ? { image: abs(opts.image) } : {}),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${opts.url}#webpage` },
    inLanguage: "en-US",
  };
}

/* ------------------------------- WRAPPER ------------------------------- */
export function graph(nodes: (Node | null | undefined)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
