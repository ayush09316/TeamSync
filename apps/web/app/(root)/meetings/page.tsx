import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

const Meeting = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Meetings</h1>
        <Button className="bg-success hover:bg-success-100 font-medium text-dark-100">
          <Plus size={16} />
          Schedule Meeting
        </Button>
      </div>
    </div>
  );
};

export default Meeting;
