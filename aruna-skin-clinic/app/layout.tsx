import type { Metadata } from "next";
import "./globals.css";
import { absoluteUrl, googleVerificationMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Aruna Skin Clinic | Dermatologist in Khatima",
    template: "%s | Aruna Skin Clinic, Khatima",
  },
  description: "Consult Dr. Sachin Goyal, MBBS, MD (DVL), for skin, hair and nail concerns at Aruna Skin Clinic, Tanakpur Road, Khatima, Uttarakhand.",
  applicationName: "Aruna Skin Clinic",
  category: "health",
  verification: googleVerificationMetadata(),
  openGraph: {
    type: "website",
    siteName: "Aruna Skin Clinic",
    title: "Aruna Skin Clinic | Dermatologist in Khatima",
    description: "Dermatology consultation with Dr. Sachin Goyal in Khatima, Uttarakhand.",
    url: absoluteUrl("/en"),
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    images: [{ url: "/images/doctor-sachin.jpg", width: 900, height: 1125, alt: "Dr. Sachin Goyal at Aruna Skin Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aruna Skin Clinic | Dermatologist in Khatima",
    description: "Skin, hair and nail consultations with Dr. Sachin Goyal.",
    images: ["/images/doctor-sachin.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
