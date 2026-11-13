import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, MapPin, MessageCircle, Stethoscope } from "lucide-react";
import { clinic, whatsappLink } from "@/lib/clinic";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dr. Sachin Goyal | Aruna Skin Clinic, Khatima",
  description: "Meet Dr. Sachin Goyal, MBBS, MD (DVL), dermatologist at Aruna Skin Clinic, Khatima, for skin, hair and nail consultations.",\n  alternates: localizedAlternates("/about"),
};

const copy = {
  en: {
    back: "Back to home", eyebrow: "YOUR DERMATOLOGIST", intro: "Dr. Sachin Goyal", qualification: "MBBS, MD (DVL)",
    summary: "At Aruna Skin Clinic, Dr. Sachin Goyal offers specialist consultations for concerns related to skin, hair and nails, along with venereology, leprosy and dermatosurgery services.",
    focus: "Areas of consultation", areas: ["Skin conditions and concerns", "Hair and scalp disorders", "Nail conditions", "Venereology and sexually transmitted infections", "Leprosy", "Dermatosurgery and suitable minor skin procedures"],
    approach: "A considered, patient-focused approach", approachText: "A good consultation starts by understanding the concern. The aim is to assess each patient individually, explain available options clearly and guide care based on clinical evaluation.",
    clinic: "Visit Aruna Skin Clinic", address: "Tanakpur Road, near Om Hospital, Khatima, Uttarakhand", hours: "Daily, 10:00 AM – 8:00 PM", book: "Enquire on WhatsApp", note: "Contact the clinic to confirm appointment availability. Treatment suitability is determined after consultation."
  },
  hi: {
    back: "होम पेज पर वापस जाएँ", eyebrow: "आपके त्वचा रोग विशेषज्ञ", intro: "डॉ. सचिन गोयल", qualification: "MBBS, MD (DVL)",
    summary: "अरुणा स्किन क्लिनिक में डॉ. सचिन गोयल त्वचा, बालों और नाखूनों से जुड़ी समस्याओं के लिए विशेषज्ञ परामर्श प्रदान करते हैं। इसके साथ ही वे यौन रोग, कुष्ठ रोग एवं डर्मेटोसर्जरी से संबंधित सेवाएँ भी प्रदान करते हैं।",
    focus: "परामर्श के प्रमुख क्षेत्र", areas: ["त्वचा संबंधी समस्याएँ", "बाल एवं सिर की त्वचा के रोग", "नाखूनों से जुड़ी समस्याएँ", "यौन रोग एवं यौन संचारित संक्रमण", "कुष्ठ रोग", "डर्मेटोसर्जरी एवं उपयुक्त छोटी त्वचा प्रक्रियाएँ"],
    approach: "मरीज-केंद्रित और व्यक्तिगत देखभाल", approachText: "अच्छे परामर्श की शुरुआत मरीज की समस्या को समझने से होती है। उद्देश्य प्रत्येक मरीज का अलग-अलग मूल्यांकन करना, उपलब्ध विकल्पों की स्पष्ट जानकारी देना और चिकित्सकीय जाँच के आधार पर मार्गदर्शन करना है।",
    clinic: "अरुणा स्किन क्लिनिक आएँ", address: "टनकपुर रोड, ओम हॉस्पिटल के पास, खटीमा, उत्तराखंड", hours: "प्रतिदिन, सुबह 10:00 बजे से रात 8:00 बजे तक", book: "WhatsApp पर संपर्क करें", note: "अपॉइंटमेंट की उपलब्धता की पुष्टि के लिए क्लिनिक से संपर्क करें। उपचार की उपयुक्तता परामर्श के बाद तय की जाती है।"
  }
} as const;

export default async function AboutDoctorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (rawLocale !== "en" && rawLocale !== "hi") return null;
  const locale = rawLocale as "en" | "hi";
  const t = copy[locale];
  const message = locale === "hi"
    ? "नमस्ते अरुणा स्किन क्लिनिक, मैं डॉ. सचिन गोयल से अपॉइंटमेंट के बारे में जानकारी लेना चाहता/चाहती हूँ। कृपया उपलब्ध समय बताएं।"
    : "Hello Aruna Skin Clinic, I would like to enquire about an appointment with Dr. Sachin Goyal. Please share the available timings.";
  const wa = whatsappLink(message);
  return <main className="min-h-screen bg-paper text-ink">
    <header className="border-b border-forest/10 bg-paper/95"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
      <Link href={`/${locale}`} className="flex items-center gap-3"><img src="/images/aruna-emblem.jpg" alt="Aruna emblem" className="h-11 w-11 rounded-full object-cover"/><span><strong className="block font-display text-xl text-forest">ARUNA</strong><span className="text-[9px] font-bold tracking-[.25em] text-sage">SKIN CLINIC</span></span></Link>
      <div className="flex items-center gap-4"><Link href={locale === "en" ? "/hi/about" : "/en/about"} className="rounded-full border border-forest/15 px-3 py-2 text-xs font-semibold text-forest">{locale === "en" ? "हिंदी" : "EN"}</Link><Link href={`/${locale}`} className="hidden text-xs font-semibold text-forest sm:inline">{t.back}</Link></div>
    </div></header>
    <section className="bg-cream"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[.85fr_1.15fr] md:py-20">
      <div className="mx-auto w-full max-w-sm"><img src="/images/doctor-sachin.jpg" alt="Dr. Sachin Goyal" className="aspect-[4/5] w-full rounded-t-[42%] object-cover object-top shadow-soft"/><p className="mt-3 text-center text-[10px] text-muted">{clinic.name} · {clinic.city}</p></div>
      <div><p className="eyebrow">{t.eyebrow}</p><h1 className="mt-4 font-display text-5xl leading-tight text-forest sm:text-6xl">{t.intro}</h1><p className="mt-3 text-sm font-bold tracking-wide text-sage">{t.qualification}</p><p className="mt-7 max-w-xl text-sm leading-8 text-muted">{t.summary}</p><a href={wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-4 text-xs font-semibold text-white transition hover:bg-sage"><MessageCircle size={16}/>{t.book}<ArrowRight size={15}/></a></div>
    </div></section>
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-20"><div><p className="eyebrow">{t.eyebrow}</p><h2 className="mt-4 font-display text-3xl text-forest">{t.focus}</h2><ul className="mt-7 space-y-4">{t.areas.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sand"/>{item}</li>)}</ul></div>
      <div className="bg-cream p-7 sm:p-9"><Stethoscope className="text-sage" size={28}/><h2 className="mt-5 font-display text-3xl text-forest">{t.approach}</h2><p className="mt-5 text-sm leading-8 text-muted">{t.approachText}</p></div></section>
    <section className="bg-forest px-5 py-14 text-white"><div className="mx-auto max-w-6xl"><p className="eyebrow !text-sand">ARUNA SKIN CLINIC</p><h2 className="mt-4 font-display text-3xl">{t.clinic}</h2><div className="mt-7 grid gap-6 sm:grid-cols-2"><div className="flex gap-3"><MapPin className="shrink-0 text-sand"/><p className="text-sm leading-7 text-white/80">{t.address}</p></div><div className="flex gap-3"><Clock3 className="shrink-0 text-sand"/><p className="text-sm leading-7 text-white/80">{t.hours}</p></div></div><p className="mt-7 text-xs leading-6 text-white/60">{t.note}</p><Link href={`/${locale}#contact`} className="mt-8 inline-flex items-center gap-2 border-b border-sand pb-2 text-xs font-semibold">{t.back}<ArrowLeft size={14}/></Link></div></section>
    <footer className="px-5 py-7 text-center text-[10px] text-muted">© {new Date().getFullYear()} Aruna Skin Clinic · Khatima</footer>
  </main>;
}
