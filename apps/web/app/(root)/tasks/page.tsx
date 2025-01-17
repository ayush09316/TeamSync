import Combobox from '@/components/common/ComboBox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { priorityOptions, statusOptions } from '@/constants';
import { Plus } from 'lucide-react';
import React from 'react';

export const Taskbar = () => {
  return (
    <div className="flex gap-12">
      <Input
        placeholder="Search Task"
        className="border border-slate-600  bg-dark-100 focus:outline-none focus:ring-1 focus:ring-slate-500"
      />
      <Combobox options={priorityOptions} />
      <Combobox options={statusOptions} />
    </div>
  );
};

const Task = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Task</h1>
        <Button className="bg-success hover:bg-success-100 font-medium text-dark-100">
          <Plus size={16} />
          New Task
        </Button>
      </div>
      <Taskbar />
    </div>
  );
};

export default Task;
