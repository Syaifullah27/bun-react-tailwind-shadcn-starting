import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Character {
  id: number;
  name: string;
  image: string;
  race?: string;
  ki?: string;
  maxKi?: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="w-full sm:w-64"
    >
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border-0 overflow-hidden">
        <CardHeader className="p-0">
          <img 
            src={character.image} 
            alt={character.name} 
            className="w-full h-64 object-cover p-4"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/256?text=No+Image';
              e.currentTarget.className = 'w-full h-64 bg-gray-200 object-contain p-4';
            }}
          />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white truncate">
            {character.name}
          </h3>
          <div className="mt-2 space-y-1">
            {character.race && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Race:</span> {character.race}
              </p>
            )}
            {character.ki && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Ki:</span> {character.ki}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CharacterCard;