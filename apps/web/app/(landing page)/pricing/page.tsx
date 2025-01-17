import PricingCard from '@/components/features/home/Pricing';
import { pricingPlans } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Pricing = () => {
  return (
    <div className="mt-20  px-20 flex flex-col items-center">
      <div className="text-center">
        <h1 className="font-bold text-5xl">TeamSync Pricing</h1>
        <p className="mt-4 text-slate-300">
          Pricing plans that grow with you. From prototype to Enterprise.
        </p>
      </div>
      <div className="mt-10 flex justify-evenly gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <div className="flex gap-10 bg-dark-400 mt-10 p-4 max-w-xl items-center">
        <div className="max-w-lg">
          <h1 className="text-xl font-semibold">Custom Enterprise Plans</h1>
          <p className="mt-4 text-slate-300">
            Connect with our team for higher resource limits, dedicated
            requirements, annual contracts, and more.
          </p>
        </div>
        <Link
          href={'/contact'}
          className="btn-green hover:bg-success-100 text-sm w-60 py-2"
        >
          Talk to Sales
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
