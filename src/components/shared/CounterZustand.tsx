import React from 'react';
import { Button } from '@/components/ui/button';
import { useCounterStore } from '@/store/counterStore';

const CounterZustand = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Counter Zustand</h2>
      <div className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">{count}</div>
      <div className="flex space-x-4">
        <Button 
          onClick={decrement}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Decrement
        </Button>
        <Button 
          onClick={reset}
          className="bg-gray-600 hover:bg-gray-700 text-white"
        >
          Reset
        </Button>
        <Button 
          onClick={increment}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Increment
        </Button>
      </div>
    </div>
  );
};

export default CounterZustand;