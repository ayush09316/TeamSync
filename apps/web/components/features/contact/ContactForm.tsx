import FormField from '@/components/common/FormField';
import { Button } from '@/components/ui/button';
import React from 'react';

const ContactForm = () => {
  return (
    <form className="bg-dark-300 relative w-full flex flex-col gap-8 p-8 rounded-xl border border-dark-200">
      <FormField label={'Your Name'} placeholder={'John Doe'} id="name" />
      <FormField label={'Email'} placeholder={'John@gmail.com'} id="email" />
      <div className="flex justify-between">
        <FormField
          label={'Company Website'}
          placeholder={'company.com'}
          id="company-website"
        />
        <FormField
          label={'Company Size'}
          placeholder={'1-10'}
          id="company-size"
        />
      </div>
      <FormField
        label={'Message'}
        placeholder={'Your message here'}
        id="message"
        isTextarea
      />
      <div className="flex gap-3 items-center">
        <p className="text-white text-sm">
          By submitting you agree to the Terms Service and acknowledge the
          Privacy Policy.
        </p>
        <Button className="btn-green hover:bg-success-100 w-80 py-5">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
