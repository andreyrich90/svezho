"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLang, useT } from "./DictProvider";
import { href } from "@/lib/nav";

// Hero search box. Submits to /recipes?q=… so the query is a real, shareable
// URL the RecipeExplorer picks up server-side (and search engines can index).
export default function HeroSearch() {
  const t = useT();
  const lang = useLang();
  const router = useRouter();
  const [q, setQ] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(href(lang, "/recipes") + (query ? `?q=${encodeURIComponent(query)}` : ""));
  }

  return (
    <form onSubmit={submit} className="relative mt-8 max-w-md">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
      />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t("recipes.search.placeholder")}
        aria-label={t("recipes.search.placeholder")}
        className="w-full rounded-full border border-line bg-surface py-3.5 pl-12 pr-28 text-ink shadow-soft outline-none transition focus:border-clay"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-clay px-5 py-2.5 text-sm font-bold text-white transition hover:bg-clay2"
      >
        {t("recipes.search.button")}
      </button>
    </form>
  );
}
