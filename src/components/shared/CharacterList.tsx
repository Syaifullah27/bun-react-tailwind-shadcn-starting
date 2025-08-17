import "@/public/styles/globals.css";
// import { ProfileCard } from "./components/shared";
// import { profileData } from "./data";
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { useTheme } from '@/context/ThemeContext';
import CharacterCard from '@/components/shared/CharacterCard';
import SearchBar from '@/components/shared/SearchBar';
import CounterZustand from '@/components/shared/CounterZustand';
import SkeletonCard from '@/components/shared/SkeletonCard';
import useDragonBallCharacters from '@/hooks/useDragonBallCharacters';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
export function App() {
   const { theme, toggleTheme } = useTheme();
  const { characters, loading, error } = useDragonBallCharacters();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = useMemo(() => {
    return characters.filter(character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [characters, searchTerm]);
  return (
<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-6">
          <Button 
            onClick={toggleTheme}
            variant="outline"
            className="rounded-full p-2"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dragon Ball Characters
        </motion.h1>

        {/* Counter Zustand */}
        <div className="max-w-md mx-auto mb-16">
          <CounterZustand />
        </div>

        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        {/* Loading and Error States */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 text-xl mb-4">Error: {error}</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Reload Page
            </Button>
          </div>
        )}

        {/* Character Grid */}
        {!loading && !error && (
          <>
            {filteredCharacters.length === 0 ? (
              <p className="text-center text-gray-600 dark:text-gray-400 text-xl">
                No characters found
              </p>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredCharacters.map(character => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
      <Toaster position="top-right" theme={theme} />
        </div>
      
      
        );
      }
      
      export default App;