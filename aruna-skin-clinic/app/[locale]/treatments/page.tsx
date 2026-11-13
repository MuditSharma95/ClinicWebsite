import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { treatments } from "@/lib/treatments";
import { clinic, whatsappLink } from "@/lib/clinic";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dermatology Treatments | Aruna Skin Clinic, Khatima",
  description: "Explore skin, hair, nail and dermatology consultations with Dr. Sachin Goyal at Aruna Skin Clinic, Khatima, Uttarakhand.",  alternates: localizedAlternates("/treatments"),
};

export default async function TreatmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (raw !== "en" && raw !== "hi") return null;
  const locale = raw as "en" | "hi";
  const hi = locale === "hi";
  const wa = whatsappLink(hi ? "नमस्ते, मैं अरुणा स्किन क्लिनिक में उपचार संबंधी परामर्श लेना चाहता/चाहती हूँ।" : "Hello, I would like to enquire about a dermatology consultation at Aruna Skin Clinic.");
  return <main className="min-h-screen bg-paper text-ink">
    <header className="border-b border-forest/10"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href={`/${locale}`} className="flex items-center gap-3"><img src="/images/aruna-emblem.jpg" alt="Aruna Skin Clinic" className="h-10 w-10 rounded-full object-cover"/><span><strong className="block font-display text-xl text-forest">ARUNA</strong><span className="text-[9px] font-bold tracking-[.25em] text-sage">SKIN CLINIC</span></span></Link><div className="flex items-center gap-4"><Link href={hi ? "/en/treatments" : "/hi/treatments"} className="rounded-full border border-forest/15 px-3 py-2 text-xs font-semibold text-forest">{hi ? "EN" : "हिंदी"}</Link><Link href={`/${locale}`} className="hidden text-xs font-semibold text-forest sm:block">{hi ? "होम" : "Home"}</Link></div></div></header>
    <section className="bg-cream"><div className="mx-auto max-w-6xl px-5 py-16 md:py-20"><Link href={`/${locale}`} className="inline-flex items-center gap-2 text-xs font-semibold text-sage"><ArrowLeft size={14}/>{hi ? "होम पेज" : "Back to home"}</Link><p className="eyebrow mt-9">{hi ? "अरुणा स्किन क्लिनिक · खटीमा" : "ARUNA SKIN CLINIC · KHATIMA"}</p><h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-forest sm:text-6xl">{hi ? "त्वचा, बाल और नाखूनों की देखभाल" : "Dermatology care, explained."}</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-muted">{hi ? "डॉ. सचिन गोयल से परामर्श के लिए उपलब्ध प्रमुख सेवाओं के बारे में जानें। उपचार की उपयुक्तता चिकित्सकीय जाँच के बाद तय होती है।" : "Explore the areas of care available for consultation with Dr. Sachin Goyal. Treatment suitability is determined after an individual clinical assessment."}</p></div></section>
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20"><div className="grid gap-5 md:grid-cols-2">{treatments.map((item, i) => <article key={item.slug} className="group border border-forest/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft sm:p-9"><div className="flex items-center justify-between"><span className="eyebrow">0{i + 1} · {item.category.toUpperCase()}</span><ArrowRight size={17} className="text-sage transition group-hover:translate-x-1"/></div><h2 className="mt-8 font-display text-3xl text-forest">{item.title[locale]}</h2><p className="mt-4 text-sm leading-7 text-muted">{item.summary[locale]}</p><Link href={`/${locale}/treatments/${item.slug}`} className="mt-7 inline-flex items-center gap-2 border-b border-sand pb-2 text-xs font-bold text-forest">{hi ? "विस्तार से जानें" : "Learn about this service"}<ArrowRight size={14}/></Link></article>)}</div></section>
    <section className="bg-forest px-5 py-14 text-white"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><p className="eyebrow !text-sand">{clinic.doctor} · {clinic.qualification}</p><h2 className="mt-3 font-display text-3xl">{hi ? "परामर्श के लिए संपर्क करें" : "Not sure where to start?"}</h2><p className="mt-3 text-sm text-white/70">{hi ? "अपनी अपॉइंटमेंट संबंधी पूछताछ WhatsApp पर भेजें।" : "Send the clinic an appointment enquiry on WhatsApp."}</p></div><a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold text-forest"><MessageCircle size={16}/>{hi ? "WhatsApp पर संपर्क करें" : "Enquire on WhatsApp"}</a></div></section>
    <footer className="px-5 py-7 text-center text-[10px] text-muted">© {new Date().getFullYear()} Aruna Skin Clinic · Khatima</footer>
  </main>;
}
