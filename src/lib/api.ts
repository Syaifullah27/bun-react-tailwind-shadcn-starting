// src/lib/api.ts
export type ApiCharacter = {
  id: number;
  name: string;
  image: string;
  race?: string;
  ki?: string;
  maxKi?: string;
};

export type CharactersListResponse = {
  items?: ApiCharacter[];          // existing clients use data.items
  total?: number | null;
  page?: number;
  limit?: number;
  // some APIs put meta inside `meta`:
  meta?: { total?: number; page?: number; limit?: number };
};

const DEFAULT_BASE = "https://dragonball-api.com";

/**
 * Read base URL from env var BUN_PUBLIC_BASE_URL (if present),
 * fallback to DEFAULT_BASE.
 *
 * Note: Bun (with import.meta.hot support) typically provides import.meta.env,
 * so we read from import.meta.env. If your setup exposes env variables another way,
 * adjust accordingly.
 */
export const BASE_URL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.BUN_PUBLIC_BASE_URL) ||
  DEFAULT_BASE;

/**
 * Fetch characters with page & limit. Caller expects the API shape above.
 * Pass an optional AbortSignal.
 */
export async function fetchCharactersApi(
  page = 1,
  limit = 10,
  signal?: AbortSignal
): Promise<CharactersListResponse> {
  const url = `${BASE_URL.replace(/\/+$/,'')}/api/characters?page=${encodeURIComponent(
    String(page)
  )}&limit=${encodeURIComponent(String(limit))}`;

  const res = await fetch(url, { signal });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API error ${res.status}: ${text}`);
  }
  const data = (await res.json()) as CharactersListResponse;
  return data;
}
