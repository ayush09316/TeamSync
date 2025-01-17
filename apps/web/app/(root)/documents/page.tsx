import React from 'react';
import { Taskbar } from '../tasks/page';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from 'lucide-react';

const Document = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Documents</h1>
        <div className="flex gap-4 items-center">
          <Button variant="secondary" className=" font-medium text-dark-100">
            <Upload size={16} />
            Upload
          </Button>
          <Button className="bg-success hover:bg-success-100 font-medium text-dark-100">
            <Plus size={16} />
            New Document
          </Button>
        </div>
      </div>
      <Taskbar />
    </div>
  );
};

export default Document;
