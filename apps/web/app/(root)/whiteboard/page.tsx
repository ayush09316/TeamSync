import EmptySection from '@/components/layout/EmptySection';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from 'lucide-react';
import React from 'react';

const Whiteboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Whiteboard</h1>
        <div className="flex gap-4 items-center">
          <Button variant="secondary" className=" font-medium text-dark-100">
            <Upload size={16} />
            Import
          </Button>
          <Button className="bg-success hover:bg-success-100 font-medium text-dark-100">
            <Plus size={16} />
            New Board
          </Button>
        </div>
      </div>

      <EmptySection label="whiteboard" />
    </div>
  );
};

export default Whiteboard;
