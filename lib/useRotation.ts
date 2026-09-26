"use client";

import { useCallback, useEffect, useState } from "react";

// Picks `count` random items for this visitor, preferring ones they haven't
// been shown yet (remembered per browser in localStorage). The first render
// uses the first `count` items so server HTML and hydration match; the
// shuffle happens right after mount. Storage is best-effort: private mode
// or blocked storage just means no memory, never an error.
export function useRotation<T>(items: T[], count: number, storageKey: string, idOf: (item: T) => string) {
  const [picked, setPicked] = useState<T[]>(() => items.slice(0, count));

  const shuffle = useCallback(() => {
    if (items.length <= count) {
      setPicked(shuffled(items));
      return;
    }
    let seen = new Set<string>(readSeen(storageKey));
    let fresh = items.filter((i) => !seen.has(idOf(i)));
    // Everything shown already — start a new cycle.
    if (fresh.length < count) {
      seen = new Set();
      fresh = items;
    }
    const next = shuffled(fresh).slice(0, count);
    next.forEach((i) => seen.add(idOf(i)));
    writeSeen(storageKey, [...seen]);
    setPicked(next);
  }, [items, count, storageKey, idOf]);

  useEffect(() => {
    shuffle();
    // Shuffle once per page view; `shuffle` is stable for the given props.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { picked, shuffle };
}

function shuffled<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function readSeen(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function writeSeen(key: string, ids: string[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    /* storage unavailable — rotation still works, just without memory */
  }
}
