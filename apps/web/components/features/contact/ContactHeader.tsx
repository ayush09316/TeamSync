import { MoveRightIcon } from 'lucide-react';
import React from 'react';

const ContactHeader = () => {
  return (
    <div className="flex flex-col max-w-[544px] text-start text-white items-start justify-center mt-12 p-8">
      <h1 className="text-5xl font-semibold">Let&apos;s Connect</h1>
      <p className="text-xl mt-4 text-gray-400">
        We&apos;re happy to assist you with any questions about our technology,
        pricing plans, and assistance.
      </p>
      <p className="mt-12 text-success hover:text-success-100 cursor-pointer">
        Book meeting here
        <MoveRightIcon size={18} className="inline ml-2" />
      </p>
    </div>
  );
};

export default ContactHeader;
