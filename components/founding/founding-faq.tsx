"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { getFaqItems } from "@/lib/founding-copy";
import { SectionLabel } from "./section-label";

export function FoundingFaq({ showTodayBlock }: { showTodayBlock: boolean }) {
  const items = getFaqItems(showTodayBlock);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openFromHash = useCallback(() => {
    const slug = window.location.hash.replace("#faq-", "");
    if (items.some((item) => item.slug === slug)) setOpenSlug(slug);
  }, [items]);

  useEffect(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFromHash]);

  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="founding-faq-title">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            id="founding-faq-title"
            className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
          >
            Questions before you buy
          </h2>
        </div>
        <div className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden divide-y divide-black/[0.06]">
          {items.map((item) => {
            const isOpen = openSlug === item.slug;
            return (
              <article key={item.slug} id={`faq-${item.slug}`}>
                <button
                  onClick={() => setOpenSlug(isOpen ? null : item.slug)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#FAF7F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-semibold text-brand-secondary text-[15px]">{item.question}</h3>
                  <span className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="w-[17px] h-[17px] text-brand-primary" />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 sm:px-6 pb-6 -mt-1 text-[14px] text-brand-secondary/75 leading-relaxed text-pretty">
                    {item.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
