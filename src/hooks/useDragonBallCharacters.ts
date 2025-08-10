import { useState, useEffect, useCallback } from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
  race?: string;
  ki?: string;
  maxKi?: string;
}

const useDragonBallCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dragonball-api.com/api/characters');
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const data = await response.json();
      setCharacters(data.items || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, loading, error, refetch: fetchCharacters };
};

export default useDragonBallCharacters;