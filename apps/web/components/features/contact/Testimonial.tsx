import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from '@/constants';
import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20  text-white flex flex-col items-center">
      <div className="text-center py-12">
        <h1 className="text-center mb-4  font-bold text-5xl">
          Trusted by Remote Teams Worldwide
        </h1>
        <p className="text-slate-300">
          See what our customers have to say about their experience
        </p>
      </div>
      <div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonial;
