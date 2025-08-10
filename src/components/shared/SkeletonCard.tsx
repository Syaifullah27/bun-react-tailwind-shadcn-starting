import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="w-full sm:w-64 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border-0 overflow-hidden">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 animate-pulse" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;