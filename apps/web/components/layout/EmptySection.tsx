import { Sparkles } from 'lucide-react';
import React from 'react';

const EmptySection = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 max-h-[80vh] gap-0 border-2 border-dashed border-gray-600 rounded-lg">
      <Sparkles size={60} color="grey" />
      <h1 className="font-semibold text-lg text-gray-400 mt-6 mb-2">
        No {label} yet !
      </h1>
      <p className="text-gray-400">
        Create your first {label} to start your journey
      </p>
    </div>
  );
};

export default EmptySection;
