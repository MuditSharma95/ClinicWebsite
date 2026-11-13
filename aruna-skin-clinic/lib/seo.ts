import type { Metadata } from "next";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export function absoluteUrl(path = "") {
  return new URL(path.startsWith("/") ? path : `/${path}`, `${siteUrl}/`).toString();
}
export function localizedAlternates(path = "") {
  return {
    canonical: absoluteUrl(`/en${path}`),
    languages: {
      en: absoluteUrl(`/en${path}`),
      hi: absoluteUrl(`/hi${path}`),
      "x-default": absoluteUrl(`/en${path}`),
    },
  };
}
export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#clinic`,
    name: "Aruna Skin Clinic",
    url: siteUrl,
    telephone: "+91-7010501030",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tanakpur Road, near Om Hospital",
      addressLocality: "Khatima",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "10:00",
      closes: "20:00",
    }],
    medicalSpecialty: "https://schema.org/Dermatology",
    employee: {
      "@type": "Physician",
      name: "Dr. Sachin Goyal",
      medicalSpecialty: "https://schema.org/Dermatology",
      worksFor: { "@id": `${siteUrl}/#clinic` },
    },
  };
}
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
export function googleVerificationMetadata(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  return google ? { google } : undefined;
}
