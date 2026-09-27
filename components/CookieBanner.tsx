"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang, useT } from "./DictProvider";
import { href } from "@/lib/nav";

// localStorage key: "1" = accepted, "0" = declined, absent = not asked yet.
// The inline GA snippet in app/[locale]/layout.tsx reads the same key to set
// the Consent Mode default before Google's tag loads.
const KEY = "recepto-cookie";
// Fired by the footer's "Cookie settings" link to reopen the banner.
export const COOKIE_SETTINGS_EVENT = "recepto:cookie-settings";

type Gtag = (...args: unknown[]) => void;

function updateConsent(granted: boolean) {
  const v = granted ? "granted" : "denied";
  (window as unknown as { gtag?: Gtag }).gtag?.("consent", "update", {
    analytics_storage: v,
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
  });
}

// Cookie consent notice with equal Accept / Decline choices (EU rules and
// Google Consent Mode v2). The choice is remembered and can be changed later.
export default function CookieBanner() {
  const t = useT();
  const lang = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage unavailable — just don't show */
    }
    const reopen = () => setShow(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  if (!show) return null;

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(KEY, granted ? "1" : "0");
    } catch {
      /* ignore */
    }
    updateConsent(granted);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 rounded-xl2 border border-line bg-surface p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink/80">
          {t("cookie.text")}{" "}
          <Link href={href(lang, "/privacy")} className="font-semibold text-clay hover:underline">
            {t("cookie.more")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => choose(false)}
            className="rounded-full border border-line px-5 py-2 text-sm font-bold text-ink transition hover:bg-cream2"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={() => choose(true)}
            className="rounded-full bg-clay px-5 py-2 text-sm font-bold text-white transition hover:bg-clay2"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
