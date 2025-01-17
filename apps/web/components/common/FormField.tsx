import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface FormFieldProps {
  label: string;
  placeholder: string;
  id: string;
  isTextarea?: boolean;
}

const FormField = ({
  label,
  placeholder,
  id,
  isTextarea = false,
}: FormFieldProps) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <Label htmlFor={id} className="text-white">
        {label} *
      </Label>
      {isTextarea ? (
        <Textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          className="border border-dark-200 rounded-md outline-none focus:border-success"
        />
      ) : (
        <Input
          id={id}
          placeholder={placeholder}
          className="border border-dark-200 h-10 rounded-md outline-none focus:border-success"
        />
      )}
    </div>
  );
};

export default FormField;
