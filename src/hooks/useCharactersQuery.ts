// src/hooks/useCharactersQuery.ts
import { useQuery } from "@tanstack/react-query";
import type { CharactersListResponse, ApiCharacter } from "@/lib/api";
import { fetchCharactersApi } from "@/lib/api";

export type UseCharactersQueryResult = {
  items: ApiCharacter[];
  total: number | null;
  page: number;
  limit: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: unknown;
  hasMore: boolean;
};

export function useCharactersQuery(page: number, limit: number) {
  const { data, isLoading, isFetching, isError, error } = useQuery<
    CharactersListResponse,
    Error
  >({
    queryKey: ["characters", page, limit],
    queryFn: async () => await fetchCharactersApi(page, limit),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });

  const items = data?.items ?? [];
  const total =
    data?.total ??
    data?.meta?.total ??
    null;

  const hasMore = (() => {
    if (typeof total === "number") return page * limit < total;
    // if total unknown, if we got full page -> maybe more
    return items.length === limit;
  })();

  return {
    items,
    total,
    page,
    limit,
    isLoading,
    isFetching,
    isError,
    error,
    hasMore,
  } as UseCharactersQueryResult;
}

export default useCharactersQuery;
