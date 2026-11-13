import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { getTreatment, treatments } from "@/lib/treatments";
import { clinic, whatsappLink } from "@/lib/clinic";
import { localizedAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return ["en", "hi"].flatMap((locale) => treatments.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (raw !== "en" && raw !== "hi") return {};
  const item = getTreatment(slug);
  if (!item) return {};
  const locale = raw as "en" | "hi";
  return {
    title: `${item.title[locale]} | Dr. Sachin Goyal | Aruna Skin Clinic`,
    description: item.summary[locale],
    alternates: localizedAlternates(`/treatments/${slug}`)
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (raw !== "en" && raw !== "hi") notFound();
  const locale = raw as "en" | "hi";
  const item = getTreatment(slug);
  if (!item) notFound();
  const hi = locale === "hi";
  const message = hi
    ? `नमस्ते अरुणा स्किन क्लिनिक, मैं ${item.title.hi} के संबंध में डॉ. सचिन गोयल से परामर्श लेना चाहता/चाहती हूँ। कृपया अपॉइंटमेंट की जानकारी दें।`
    : `Hello Aruna Skin Clinic, I would like to enquire about a consultation for ${item.title.en} with Dr. Sachin Goyal. Please share appointment availability.`;
  const wa = whatsappLink(message);
  return <main className="min-h-screen bg-paper text-ink">
    <header className="border-b border-forest/10"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href={`/${locale}`} className="flex items-center gap-3"><img src="/images/aruna-emblem.jpg" alt="Aruna Skin Clinic" className="h-10 w-10 rounded-full object-cover"/><span><strong className="block font-display text-xl text-forest">ARUNA</strong><span className="text-[9px] font-bold tracking-[.25em] text-sage">SKIN CLINIC</span></span></Link><Link href={hi ? `/en/treatments/${slug}` : `/hi/treatments/${slug}`} className="rounded-full border border-forest/15 px-3 py-2 text-xs font-semibold text-forest">{hi ? "EN" : "हिंदी"}</Link></div></header>
    <section className="bg-cream"><div className="mx-auto max-w-6xl px-5 py-16 md:py-20"><Link href={`/${locale}/treatments`} className="inline-flex items-center gap-2 text-xs font-semibold text-sage"><ArrowLeft size={14}/>{hi ? "सभी उपचार" : "All treatments"}</Link><p className="eyebrow mt-9">{hi ? "डॉ. सचिन गोयल · त्वचा रोग विशेषज्ञ" : "DR. SACHIN GOYAL · DERMATOLOGIST"}</p><h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-forest sm:text-6xl">{item.title[locale]}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted">{item.summary[locale]}</p><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-4 text-xs font-semibold text-white shadow-soft transition hover:bg-sage"><MessageCircle size={16}/>{hi ? "WhatsApp पर अपॉइंटमेंट पूछें" : "Enquire about an appointment"}<ArrowRight size={15}/></a></div></section>
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_.8fr] md:py-20"><div><p className="eyebrow">{hi ? "इस समस्या के बारे में" : "UNDERSTANDING THE CONCERN"}</p><h2 className="mt-4 font-display text-3xl text-forest">{hi ? "मूल्यांकन क्यों ज़रूरी है?" : "Why an individual assessment matters"}</h2><p className="mt-6 text-sm leading-8 text-muted">{item.overview[locale]}</p><h2 className="mt-12 font-display text-3xl text-forest">{hi ? "परामर्श में क्या शामिल हो सकता है" : "What a consultation may cover"}</h2><ul className="mt-6 space-y-4">{item.points[locale].map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-7 text-muted"><CheckCircle2 size={18} className="mt-1 shrink-0 text-sage"/>{point}</li>)}</ul></div><aside className="h-fit bg-cream p-7 sm:p-9"><p className="eyebrow">{hi ? "महत्वपूर्ण जानकारी" : "PLEASE NOTE"}</p><h2 className="mt-4 font-display text-2xl text-forest">{hi ? "हर व्यक्ति की स्थिति अलग होती है" : "Care is individual"}</h2><p className="mt-5 text-sm leading-7 text-muted">{item.note[locale]}</p><div className="mt-8 border-t border-forest/10 pt-6"><p className="font-semibold text-forest">{clinic.doctor}</p><p className="mt-1 text-xs text-sage">{clinic.qualification}</p><p className="mt-4 text-xs leading-6 text-muted">{hi ? "अरुणा स्किन क्लिनिक, खटीमा" : "Aruna Skin Clinic, Khatima"}</p><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-4 text-xs font-semibold text-white"><MessageCircle size={15}/>{hi ? "WhatsApp पर संपर्क करें" : "Contact on WhatsApp"}</a></div></aside></section>
    <section className="border-t border-forest/10 px-5 py-12"><div className="mx-auto max-w-6xl"><p className="eyebrow">{hi ? "अन्य सेवाएँ" : "EXPLORE OTHER SERVICES"}</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{treatments.filter((other) => other.slug !== slug).slice(0, 3).map((other) => <Link key={other.slug} href={`/${locale}/treatments/${other.slug}`} className="flex items-center justify-between border border-forest/10 p-5 text-sm font-semibold text-forest transition hover:bg-cream">{other.title[locale]}<ArrowRight size={15} className="text-sage"/></Link>)}</div><Link href={`/${locale}/treatments`} className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-sage">{hi ? "सभी सेवाएँ देखें" : "View all services"}<ArrowRight size={14}/></Link></div></section>
    <footer className="px-5 py-7 text-center text-[10px] text-muted">© {new Date().getFullYear()} Aruna Skin Clinic · Khatima</footer>
  </main>;
}
