// src/App.tsx
import "@/public/styles/globals.css";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import { useTheme } from "@/context/ThemeContext";
import CharactersTable from "@/components/shared/Charactertable";
import SearchBar from "@/components/shared/SearchBar";
import CounterZustand from "@/components/shared/CounterZustand";
import SkeletonCard from "@/components/shared/SkeletonCard";
import useCharactersQuery from "@/hooks/useCharactersQuery";
import Pagination from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function App() {
  const { theme, toggleTheme } = useTheme();

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { items, total, isLoading, isFetching, isError, error, hasMore } =
    useCharactersQuery(page, limit);

  // client-side search on current page
  const filtered = useMemo(() => {
    return items.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-6">
          <Button onClick={toggleTheme} variant="outline" className="rounded-full p-2" aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dragon Ball Characters
        </motion.h1>

        <div className="max-w-md mx-auto mb-6">
          <CounterZustand />
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="mb-4 max-w-4xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: limit }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error: {(error as Error)?.message ?? "Unknown"}</p>
              <Button onClick={() => window.location.reload()}>Reload</Button>
            </div>
          ) : (
            <>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                <CharactersTable data={filtered} />
                {isFetching && <div className="text-sm text-gray-500 mt-2">Updating...</div>}
                <Pagination
                  page={page}
                  total={total}
                  limit={limit}
                  hasMore={hasMore}
                  onPageChange={(p) => setPage(p)}
                  onLimitChange={(l) => {
                    setLimit(l);
                    setPage(1);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <Toaster position="top-right" theme={theme} />
    </div>
  );
}

export default App;
