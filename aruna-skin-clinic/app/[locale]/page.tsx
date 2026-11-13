import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClinicHome from "@/components/ClinicHome";
import type { Locale } from "@/lib/content";
import { clinicJsonLd, jsonLdScript, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "hi") return {};
  const hi = locale === "hi";
  return {
    title: hi ? "खटीमा में त्वचा रोग विशेषज्ञ | अरुणा स्किन क्लिनिक" : "Dermatologist in Khatima | Dr. Sachin Goyal",
    description: hi
      ? "अरुणा स्किन क्लिनिक, खटीमा में डॉ. सचिन गोयल से त्वचा, बाल और नाखूनों से संबंधित परामर्श लें।"
      : "Consult Dr. Sachin Goyal, MBBS, MD (DVL), for skin, hair and nail concerns at Aruna Skin Clinic, Khatima, Uttarakhand.",
    alternates: localizedAlternates(""),
    openGraph: {
      title: hi ? "अरुणा स्किन क्लिनिक | खटीमा" : "Aruna Skin Clinic | Dermatologist in Khatima",
      description: hi ? "डॉ. सचिन गोयल से त्वचा, बाल और नाखूनों के लिए परामर्श।" : "Dermatology consultation with Dr. Sachin Goyal in Khatima.",
      url: `/${locale}`,
      locale: hi ? "hi_IN" : "en_IN",
    },
  };
}

export function generateStaticParams() { return [{ locale: "en" }, { locale: "hi" }]; }

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "hi") notFound();
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(clinicJsonLd())} />
    <ClinicHome locale={locale as Locale} />
  </>;
}
