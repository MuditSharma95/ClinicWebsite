"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, Quote, UserRound } from "lucide-react";
import { patientReviews } from "@/lib/reviews";
import { whatsappLink } from "@/lib/clinic";
import type { Locale } from "@/lib/content";

export default function PatientFeedback({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);\n  const [isPaused, setIsPaused] = useState(false);
  const hi = locale === "hi";
  const reviews = patientReviews;
  const count = reviews.length;
  const visibleCount = Math.min(3, count);
  const visibleReviews = useMemo(
    () => Array.from({ length: visibleCount }, (_, offset) => reviews[(active + offset) % count]),
    [active, count, reviews, visibleCount]
  );
  const go = (direction: number) => {
    if (count > 0) setActive((current) => (current + direction + count) % count);
  };
  // Auto-advance only when there are more than three genuine reviews to rotate.
  // Pause while the visitor hovers/focuses the section, and respect reduced-motion preferences.
  useEffect(() => {
    if (count <= 3 || isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActive((current) => (current + 1) % count);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [count, isPaused]);

  const wa = whatsappLink(hi
    ? "नमस्ते, मैं अरुणा स्किन क्लिनिक के बारे में अपना अनुभव साझा करना चाहता/चाहती हूँ।"
    : "Hello Aruna Skin Clinic, I would like to share feedback about my visit.");

  const cardClass = "flex min-h-[370px] flex-col rounded-[24px] bg-[#2B454B] p-7 text-white shadow-[0_16px_36px_rgba(26,49,53,.10)] transition duration-300 hover:-translate-y-1 sm:p-8";
  const avatarClass = "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E8E9DC] text-[#24434A]";

  return (
    <section id="patient-feedback" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false); }} className="bg-[#FFFEFB] py-20 text-[#253D40] sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="eyebrow">{hi ? "मरीजों की राय" : "PATIENT FEEDBACK"}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#173F32] sm:text-5xl">
            {hi ? "मरीजों के अनुभव" : "What our patients say"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#687775]">
            {hi
              ? "अरुणा स्किन क्लिनिक में आए मरीजों की वास्तविक प्रतिक्रियाएँ।"
              : "Hear from people who have visited Aruna Skin Clinic."}
          </p>
        </div>

        {count > 0 ? (
          <>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
              {visibleReviews.map((review, index) => (
                <article key={`${review.id}-${active}-${index}`} className={cardClass}>
                  <Quote size={38} fill="#E7BE61" strokeWidth={1.5} className="text-[#E7BE61]" aria-hidden="true" />
                  <p className="mt-8 flex-1 text-[15px] leading-6 text-[#F3F5F1]">“{review.quote}”</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className={avatarClass}><UserRound size={23} strokeWidth={1.5} aria-hidden="true" /></div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">{review.author}</p>
                      {review.context && <p className="mt-1 truncate text-xs text-white/55">{review.context}</p>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {count > 3 && (
              <div className="mt-8 flex items-center justify-center gap-5">
                <button type="button" onClick={() => go(-1)} aria-label={hi ? "पिछली प्रतिक्रियाएँ" : "Previous reviews"} className="rounded-full border border-[#2B454B]/25 p-2.5 text-[#2B454B] transition hover:bg-[#E9EEE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A65B]">
                  <ArrowLeft size={17} />
                </button>
                <div className="flex items-center gap-2" aria-label={hi ? "प्रतिक्रिया स्लाइड चुनें" : "Choose review group"}>
                  {Array.from({ length: count }, (_, index) => (
                    <button key={index} type="button" onClick={() => setActive(index)} aria-label={`${hi ? "प्रतिक्रिया" : "Review"} ${index + 1}`} aria-current={active === index ? "true" : undefined} className={`h-2 rounded-full transition-all ${active === index ? "w-8 bg-[#4F806B]" : "w-2 bg-[#B8C8BE]"}`} />
                  ))}
                </div>
                <button type="button" onClick={() => go(1)} aria-label={hi ? "अगली प्रतिक्रियाएँ" : "Next reviews"} className="rounded-full border border-[#2B454B]/25 p-2.5 text-[#2B454B] transition hover:bg-[#E9EEE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A65B]">
                  <ArrowRight size={17} />
                </button>
              </div>
              <p className="mt-3 text-center text-[11px] text-[#7A8984]">
                {hi ? "प्रतिक्रियाएँ हर 5 सेकंड में अपने आप बदलेंगी।" : "Reviews advance automatically every 5 seconds."}
              </p>
            )}
          </>
        ) : (
          <>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <article key={item} className={cardClass}>
                  <Quote size={38} fill="#E7BE61" strokeWidth={1.5} className="text-[#E7BE61]" aria-hidden="true" />
                  <p className="mt-8 flex-1 text-[15px] leading-6 text-[#F3F5F1]">
                    {hi
                      ? "मरीजों की वास्तविक प्रतिक्रिया और अनुभव, अनुमति मिलने के बाद यहाँ साझा किए जाएँगे।"
                      : "Patient experiences will be shared here once genuine feedback and permission to publish are received."}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className={avatarClass}><UserRound size={23} strokeWidth={1.5} aria-hidden="true" /></div>
                    <div>
                      <p className="text-sm font-semibold text-white">{hi ? "अरुणा स्किन क्लिनिक के मरीज" : "Aruna Skin Clinic patient"}</p>
                      <p className="mt-1 text-xs text-white/55">{hi ? "मरीज की प्रतिक्रिया" : "Patient feedback"}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#E8E9DC] px-5 py-3 text-xs font-semibold text-[#24434A] transition hover:bg-[#DCE4D8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A65B]">
                <MessageCircle size={15} />
                {hi ? "अपनी प्रतिक्रिया साझा करें" : "Share your feedback"}
              </a>
              <p className="text-center text-xs text-[#7A8984]">
                {hi ? "केवल वास्तविक और अनुमति-प्राप्त प्रतिक्रियाएँ प्रकाशित की जाएँगी।" : "Only genuine reviews shared with permission will be published."}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
