import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { pick, type Lang } from "@/lib/langs";
import { href } from "@/lib/nav";
import { readingMinutes, type Guide } from "@/lib/guides";

// Card for a "Kitchen secrets" article. Server component (no client JS).
export default function GuideCard({ guide, lang }: { guide: Guide; lang: Lang }) {
  const t = getDict(lang);
  return (
    <Link
      href={href(lang, `/guides/${guide.slug}`)}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      {guide.image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-cream2">
          <Image
            src={guide.image}
            alt={pick(guide.title, lang)}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream2 text-2xl">
          {guide.emoji}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
          <Clock size={13} /> {readingMinutes(guide, lang)} {t["guides.minRead"]}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
        {pick(guide.title, lang)}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted clamp-3">{pick(guide.summary, lang)}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-clay">
        {t["guides.read"]} <ArrowRight size={15} className="transition group-hover:translate-x-1" />
      </span>
      </div>
    </Link>
  );
}
