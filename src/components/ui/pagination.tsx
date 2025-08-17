// src/components/ui/Pagination.tsx
import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  total: number | null;
  limit: number;
  hasMore: boolean;
  onPageChange: (newPage: number) => void;
  onLimitChange?: (newLimit: number) => void;
}

export default function Pagination({
  page,
  total,
  limit,
  hasMore,
  onPageChange,
  onLimitChange,
}: Props) {
  const totalPages = total ? Math.max(1, Math.ceil(total / limit)) : null;

  const gotoPage = (p: number) => {
    if (p < 1) return;
    if (totalPages && p > totalPages) return;
    onPageChange(p);
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex gap-2 items-center">
        <Button onClick={() => gotoPage(1)} disabled={page === 1}>
          First
        </Button>
        <Button onClick={() => gotoPage(page - 1)} disabled={page === 1}>
          Prev
        </Button>

        <div className="px-3 py-2 text-sm text-gray-700">
          Page <strong>{page}</strong>
          {totalPages ? <> of <strong>{totalPages}</strong></> : hasMore ? <> (more)</> : <> (end)</>}
        </div>

        <Button onClick={() => gotoPage(page + 1)} disabled={!hasMore}>
          Next
        </Button>
        {totalPages && (
          <Button onClick={() => gotoPage(totalPages)} disabled={page === totalPages}>
            Last
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm">Per page:</label>
        <select
          className="px-2 py-1 rounded border bg-white dark:bg-gray-700"
          value={limit}
          onChange={(e) => onLimitChange?.(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}
