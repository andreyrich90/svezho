import type { Recipe } from "./types";

// Photos for recipes that live in the repo (public/img/recipes/<slug>/),
// keyed by recipe slug. They fill in only what the database leaves empty:
// an admin-uploaded cover or step gallery always wins, so this never
// overwrites a photo added from the admin panel.
//
//   cover: public/img/recipes/<slug>/cover.webp
//   steps: public/img/recipes/<slug>/step-1.webp … step-N.webp
//
// `steps` is the number of step photos, in step order.
export const RECIPE_PHOTOS: Record<string, { cover?: boolean; steps?: number }> = {
  "ovsyanka-s-yagodami": { cover: true },
  "tost-s-avokado-i-yaycom": { cover: true },
  "pyshnye-blinchiki": { cover: true },
  "grecheskiy-salat": { cover: true },
  "tomatnyy-krem-sup": { cover: true },
  "kurica-s-kinoa-bowl": { cover: true },
  "pasta-s-tomatami-i-bazilikom": { cover: true },
  "zelenyy-smuzi": { cover: true },
  "syrniki-iz-tvoroga": { cover: true },
  "zolotye-lukovye-kolca-v-pivnom-klyare": { cover: true },
  "kartofelnye-dolki-s-paprikoy": { cover: true },
  "syrnye-palochki-v-dvoynoy-panirovke": { cover: true },
  "kurinye-krylya-v-medovo-chesnochnoy-glazuri": { cover: true },
  "rzhanye-grenki-s-chesnokom-i-syrnym-dipom": { cover: true },
  "kurinye-oladi-s-kabachkom": { cover: true },
  "domashnie-myasnye-kotlety": { cover: true },
  "pozharskie-kotlety": { cover: true },
  "kurinye-kotlety-s-syrom": { cover: true },
  "kotlety-iz-indeyki-s-kabachkom": { cover: true },
  "rybnye-kotlety-iz-mintaya": { cover: true },
  "pechenochnye-kotlety-s-risom": { cover: true },
  "kartofelnye-kotlety-s-gribami": { cover: true },
  "grechnevye-kotlety-s-gribami": { cover: true },
  "kapustnye-kotlety-s-syrom": { cover: true },
  "krevetki-v-chesnochnom-masle": { cover: true },
  "krevetki-medovo-chili": { cover: true },
  "krevetki-v-slivochnom-souse": { cover: true },
  "hrustyaschie-krevetki": { cover: true },
  "kokosovoe-karri-s-krevetkami": { cover: true },
  "krevetki-teriyaki": { cover: true },
  "limonno-perechnye-krevetki": { cover: true },
  "pasta-s-krevetkami": { cover: true },
  "kurinoe-file-v-slivochno-chesnochnom-souse": { cover: true },
  "kuritsa-teriyaki": { cover: true },
  "kurinye-bedra-medovo-gorchichnye": { cover: true },
  "kuritsa-v-karri-s-kokosovym-molokom": { cover: true },
};

const isPlaceholder = (src?: string | null) => !src || !src.trim() || /\.svg(\?|$)/i.test(src);

export function withRepoPhotos(r: Recipe): Recipe {
  const p = RECIPE_PHOTOS[r.slug];
  if (!p) return r;
  const base = `/img/recipes/${r.slug}`;
  const image = p.cover && isPlaceholder(r.image) ? `${base}/cover.webp` : r.image;
  const gallery =
    p.steps && !(r.gallery && r.gallery.length)
      ? Array.from({ length: p.steps }, (_, i) => `${base}/step-${i + 1}.webp`)
      : r.gallery;
  return { ...r, image, gallery };
}
