// src/hooks/useDragonBallCharacters.ts
import { useState, useEffect, useCallback, useRef } from "react";
import type { ApiCharacter } from "@/lib/api";
import { fetchCharactersApi } from "@/lib/api";

interface UseCharactersResult {
  characters: ApiCharacter[];
  loading: boolean;
  error: string | null;
  total: number | null;
  hasMore: boolean;
  refetch: () => void;
}

const useDragonBallCharacters = (page: number, limit: number): UseCharactersResult => {
  const [characters, setCharacters] = useState<ApiCharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  const fetchCharacters = useCallback(async () => {
    try {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);
      setError(null);

      const data = await fetchCharactersApi(page, limit, controller.signal);

      const items = data.items ?? [];
      setCharacters(items);

      // Try to deduce total count robustly from several possible fields
      const resolvedTotal =
        data.total ??
        data.meta?.total ??
        null;
      setTotal(resolvedTotal);

    } catch (err) {
      if ((err as any).name === "AbortError") {
        // aborted — ignore
        return;
      }
      setError((err as Error).message || "Failed to fetch characters");
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchCharacters();
    return () => {
      abortRef.current?.abort();
    };
  }, [fetchCharacters]);

  // If the API doesn't report total, assume there is more if items length === limit.
  const hasMore = (() => {
    if (total !== null && typeof total === "number") {
      return page * limit < total;
    }
    return characters.length === limit; // if we received full page, assume more
  })();

  return {
    characters,
    loading,
    error,
    total,
    hasMore,
    refetch: fetchCharacters,
  };
};

export default useDragonBallCharacters;
