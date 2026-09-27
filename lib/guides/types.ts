import type { Localized } from "../langs";

// Long-read "Kitchen secrets" articles. Content lives in code (one file per
// article, all three languages side by side), like the collections: authored
// once, reviewed in git, statically rendered.

export interface GuideSection {
  /** Rendered as <h2>; also the table-of-contents entry. */
  heading: string;
  paragraphs: string[];
  /** Optional bullet list under the paragraphs. */
  list?: string[];
  /** Optional highlighted "secret" box — the exact number / trick. */
  tip?: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  emoji: string;
  /** Optional cover photo under /public (e.g. "/img/guides/<slug>.webp"), 16:9-ish. */
  image?: string;
  /** ISO date of the last meaningful edit (Article dateModified). */
  updated: string;
  title: Localized;
  /** One or two sentences: card text and meta description. */
  summary: Localized;
  sections: Localized<GuideSection[]>;
  faq?: Localized<GuideFaq[]>;
  /** Recipe slugs to show under the article as "try it in practice". */
  relatedRecipes?: string[];
}
