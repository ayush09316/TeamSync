import ContactForm from '@/components/features/contact/ContactForm';
import ContactHeader from '@/components/features/contact/ContactHeader';
import React from 'react';

const Contact = () => {
  return (
    <section className="pt-24 bg-black">
      <div className="flex items-start justify-around w-full h-auto">
        <ContactHeader />
        <div className="max-w-[560px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
