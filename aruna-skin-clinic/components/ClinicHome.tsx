"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, Instagram, MapPin, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { clinic, whatsappLink } from "@/lib/clinic";
import { content, type Locale } from "@/lib/content";
import PatientFeedback from "@/components/PatientFeedback";

function ImagePanel({ label, src, className = "", position = "center" }: { label: string; src?: string; className?: string; position?: string }) {
  return <div className={`photo-placeholder flex items-end p-5 ${className}`} role="img" aria-label={label} style={src ? { backgroundImage: `linear-gradient(0deg, rgba(24,42,30,.28), transparent 48%), url(${src})`, backgroundSize: "cover", backgroundPosition: position } : undefined}><span className="relative z-10 rounded-full border border-white/60 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-forest backdrop-blur">{label}</span></div>;
}

export default function ClinicHome({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const wa = whatsappLink(t.whatsappMessage);
  const nav = [
    ["home", "#home"], ["about", "#doctor"], ["treatments", "#treatments"], ["gallery", "#gallery"], ["contact", "#contact"]
  ] as const;

  return <main className="overflow-hidden">
    <div className="bg-forest px-4 py-2 text-center text-[10px] tracking-[.13em] text-white/90 sm:text-xs">{clinic.city} <span className="mx-2 text-sand">•</span> {clinic.doctor} · {clinic.qualification}</div>
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Aruna Skin Clinic home">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-sage/40 bg-white"><img src="/images/aruna-emblem.jpg" alt="Aruna Skin Clinic emblem" className="h-full w-full object-cover"/></div>
          <div><div className="font-display text-[22px] leading-none tracking-tight">ARUNA</div><div className="mt-1 text-[8px] font-semibold tracking-[.27em] text-sage">SKIN CLINIC</div></div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">{nav.map(([key, href]) => <a key={key} href={href} className="text-[12px] font-medium text-ink/75 transition hover:text-sage">{t.nav[key]}</a>)}</nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={locale === "en" ? "/hi" : "/en"} className="rounded-full border border-forest/15 px-3 py-2 text-xs font-semibold text-forest">{locale === "en" ? "हिंदी" : "EN"}</Link>
          <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-forest px-5 py-3 text-xs font-semibold text-white transition hover:bg-sage">{t.nav.book}</a>
        </div>
        <div className="flex items-center gap-3 lg:hidden"><Link href={locale === "en" ? "/hi" : "/en"} className="text-xs font-semibold text-forest">{locale === "en" ? "हिंदी" : "EN"}</Link><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="rounded-full border border-forest/15 p-2">{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button></div>
      </div>
      {menuOpen && <nav className="border-t border-forest/10 bg-paper px-5 py-4 lg:hidden">{nav.map(([key, href]) => <a key={key} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-forest/10 py-3 text-sm">{t.nav[key]}</a>)}<a href={wa} target="_blank" rel="noreferrer" className="mt-4 block rounded-full bg-forest px-5 py-3 text-center text-sm text-white">{t.nav.book}</a></nav>}
    </header>

    <section id="home" className="relative bg-cream">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-sage"/><span className="eyebrow">{t.heroEyebrow}</span></div>
          <h1 className="font-display whitespace-pre-line text-[clamp(3.5rem,7vw,6.7rem)] leading-[.98] text-forest">{t.heroTitle}</h1>
          <p className="mt-7 max-w-md text-[15px] leading-7 text-ink/65">{t.heroText}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3"><a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-forest px-6 py-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sage">{t.nav.book}<ArrowRight size={15}/></a><a href="#treatments" className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-4 text-xs font-semibold text-forest hover:bg-white">{t.explore}<ArrowDownRight size={15}/></a></div>
          <div className="mt-14 flex items-center gap-4 border-t border-forest/15 pt-5"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sage"><Check size={19}/></div><div><div className="text-xs font-semibold text-forest">{clinic.doctor}</div><div className="mt-1 text-[10px] tracking-wide text-muted">{clinic.qualification} · {t.doctorLabel}</div></div></div>
        </div>
        <div className="relative mx-auto w-full max-w-[570px]">
          <ImagePanel label="Dr. Sachin Goyal" src="/images/doctor-sachin.jpg" position="center 28%" className="relative z-10 aspect-[4/5] w-full rounded-2xl shadow-soft"/>
          <div className="absolute -bottom-5 right-4 z-20 max-w-[210px] rounded-2xl bg-paper p-4 shadow-soft"><div className="eyebrow">ARUNA SKIN CLINIC</div><p className="mt-2 font-display text-xl leading-tight text-forest">Care close to home.</p><p className="mt-1 text-[10px] text-muted">{clinic.city}</p></div>
        </div>
      </div>
      <div className="soft-grid h-3 opacity-50"/>
    </section>

    <section className="section-pad mx-auto max-w-7xl px-5 lg:px-8"><div className="grid items-center gap-14 lg:grid-cols-2">
      <ImagePanel label="Aruna Skin Clinic" src="/images/clinic-exterior.jpg" position="center" className="aspect-[5/4] rounded-[3px]"/>
      <div className="max-w-xl"><p className="eyebrow">{t.introEyebrow}</p><h2 className="font-display mt-5 text-4xl leading-[1.12] text-forest sm:text-5xl">{t.introTitle}</h2><p className="mt-6 text-sm leading-7 text-muted">{t.introText}</p><a href="#doctor" className="mt-8 inline-flex items-center gap-3 border-b border-sage pb-2 text-xs font-semibold text-forest">{t.doctorTitle}<ArrowRight size={15}/></a></div>
    </div></section>

    <section id="treatments" className="bg-cream section-pad"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">{t.treatmentsEyebrow}</p><h2 className="font-display mt-4 text-4xl text-forest sm:text-5xl">{t.treatmentsTitle}</h2><p className="mt-4 text-sm leading-6 text-muted">{t.treatmentsText}</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{t.treatments.map((item, i) => <Link key={item.slug} href={`/${locale}/treatments/${item.slug}`} aria-label={`${t.learnMore}: ${item.title}`} className="group block overflow-hidden bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand"><div className="aspect-[16/10] overflow-hidden bg-cream"><img src={`/images/treatment-${item.image}.jpg`} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"/></div><div className="p-5 sm:p-6"><div className="mb-6 flex items-center justify-between"><span className="eyebrow">0{i+1} / {item.tag}</span><ArrowDownRight size={17} className="text-sage transition group-hover:translate-x-1 group-hover:translate-y-1"/></div><h3 className="font-display text-2xl text-forest">{item.title}</h3><p className="mt-3 min-h-[72px] text-xs leading-6 text-muted">{item.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-sage">{t.learnMore}<ArrowRight size={13}/></span></div></Link>)}</div></div></section>

    <section id="doctor" className="section-pad mx-auto max-w-7xl px-5 lg:px-8"><div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><ImagePanel label="Dr. Sachin Goyal" src="/images/doctor-sachin.jpg" position="center 24%" className="aspect-[4/5] max-h-[560px] rounded-2xl shadow-soft"/></div><div className="max-w-xl"><p className="eyebrow">{t.doctorLabel}</p><h2 className="font-display mt-5 text-4xl text-forest sm:text-5xl">{t.doctorTitle}</h2><div className="mt-7 text-2xl font-medium text-ink">{clinic.doctor}</div><p className="mt-2 text-sm font-semibold tracking-wide text-sage">{clinic.qualification}</p><p className="mt-4 text-xs leading-6 text-muted">{clinic.specialties}</p><p className="mt-7 text-sm leading-7 text-muted">{t.doctorText}</p><a href={wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full border border-forest/20 px-6 py-3 text-xs font-semibold text-forest hover:bg-cream">{t.nav.book}<ArrowRight size={15}/></a><Link href={`/${locale}/about`} className="ml-5 mt-8 inline-flex items-center gap-2 text-xs font-semibold text-sage underline underline-offset-4">{locale === "hi" ? "डॉक्टर की पूरी प्रोफ़ाइल" : "View full doctor profile"}<ArrowRight size={14}/></Link></div></div></section>

    <PatientFeedback locale={locale} />

    <section id="gallery" className="section-pad mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">{t.galleryEyebrow}</p><h2 className="font-display mt-4 text-4xl text-forest sm:text-5xl">{t.galleryTitle}</h2><p className="mt-3 text-sm text-muted">{t.galleryText}</p></div><span className="text-xs text-sage">ARUNA SKIN CLINIC · KHATIMA</span></div><div className="mt-10 grid gap-4 sm:grid-cols-3"><ImagePanel label="Clinic exterior" src="/images/clinic-exterior.jpg" className="aspect-[4/3]"/><ImagePanel label="Clinic services" src="/images/clinic-services-reference.jpg" position="center" className="aspect-[4/3]"/><ImagePanel label="Doctor profile" src="/images/doctor-sachin.jpg" position="center 25%" className="aspect-[4/3]"/></div></section>

    <section className="bg-cream section-pad"><div className="mx-auto max-w-3xl px-5"><div className="text-center"><p className="eyebrow">{t.faqEyebrow}</p><h2 className="font-display mt-4 text-4xl text-forest">{t.faqTitle}</h2></div><div className="mt-10 divide-y divide-forest/15 border-y border-forest/15">{t.faqs.map(([q, a], i) => <div key={q} className="py-5"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-forest"><span>{q}</span><ChevronDown size={17} className={`shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`}/></button>{openFaq === i && <p className="max-w-2xl pt-4 text-sm leading-7 text-muted">{a}</p>}</div>)}</div></div></section>

    <section id="contact" className="section-pad mx-auto max-w-7xl px-5 lg:px-8"><div className="grid overflow-hidden rounded-sm bg-[#E9E4DA] lg:grid-cols-[1fr_.85fr]"><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow">{t.contactEyebrow}</p><h2 className="font-display mt-5 text-4xl leading-tight text-forest sm:text-5xl">{t.contactTitle}</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted">{t.contactText}</p><a href={wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-4 text-xs font-semibold text-white hover:bg-sage"><MessageCircle size={16}/>{t.nav.book}</a></div><div className="bg-paper p-8 sm:p-12 lg:p-14"><div className="space-y-7"><div className="flex gap-4"><MapPin className="mt-1 text-sage" size={19}/><div><div className="text-xs font-bold text-forest">{t.address}</div><p className="mt-2 text-sm leading-6 text-muted">{clinic.address}, {clinic.city}</p></div></div><div className="flex gap-4"><Clock3 className="mt-1 text-sage" size={19}/><div><div className="text-xs font-bold text-forest">{t.hours}</div><p className="mt-2 text-sm leading-6 text-muted">{clinic.hours}</p></div></div><div className="flex gap-4"><Phone className="mt-1 text-sage" size={19}/><div><div className="text-xs font-bold text-forest">{t.call}</div><a href={`tel:+${clinic.whatsappNumber}`} className="mt-2 block text-sm text-muted">{clinic.displayPhone}</a></div></div></div><a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 border-b border-sage pb-2 text-xs font-semibold text-forest">{t.directions}<ArrowRight size={14}/></a></div></div></section>

    <footer className="bg-[#26372D] px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><div className="font-display text-3xl">ARUNA</div><div className="mt-1 text-[9px] tracking-[.3em] text-sand">SKIN CLINIC</div><p className="mt-4 max-w-xs text-xs leading-6 text-white/60">{t.footerLine}</p></div><div className="flex flex-wrap gap-5 text-xs text-white/70"><a href="#home">{t.nav.home}</a><a href="#treatments">{t.nav.treatments}</a><a href="#doctor">{t.nav.about}</a><a href="#contact">{t.nav.contact}</a></div><div className="text-[10px] text-white/45">© {new Date().getFullYear()} Aruna Skin Clinic</div></div></footer>

    <a href={wa} target="_blank" rel="noreferrer" aria-label="Book on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#238B58] text-white shadow-xl transition hover:scale-105"><MessageCircle size={25}/></a>
  </main>;
}
