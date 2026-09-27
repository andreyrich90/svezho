"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Shuffle } from "lucide-react";
import { useLang, useT } from "./DictProvider";
import { href } from "@/lib/nav";
import { useRotation } from "@/lib/useRotation";

// Lightweight, already-localized guide data passed from the server page, so
// the full article bodies never ship to the browser.
export interface GuideTeaser {
  slug: string;
  emoji: string;
  image?: string;
  title: string;
  summary: string;
  minutes: number;
}

const idOf = (g: GuideTeaser) => g.slug;

// Home-page "Kitchen secrets": a different set of articles on every visit.
export default function RotatingGuides({ guides, count = 6 }: { guides: GuideTeaser[]; count?: number }) {
  const t = useT();
  const lang = useLang();
  const { picked, shuffle } = useRotation(guides, count, "recepto:seen-guides", idOf);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {picked.map((g) => (
          <Link
            key={g.slug}
            href={href(lang, `/guides/${g.slug}`)}
            className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            {g.image && (
              <div className="relative aspect-[16/9] overflow-hidden bg-cream2">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream2 text-2xl">
                {g.emoji}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                <Clock size={13} /> {g.minutes} {t("guides.minRead")}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">{g.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted clamp-3">{g.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-clay">
              {t("guides.read")} <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </span>
            </div>
          </Link>
        ))}
      </div>
      {guides.length > count && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={shuffle}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-bold text-basil shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <Shuffle size={16} /> {t("home.shuffle")}
          </button>
        </div>
      )}
    </>
  );
}
