import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import Image from 'next/image';
import React from 'react';

const OverView = () => {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] my-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
};

export default OverView;

const Skeleton = () => (
  <Image
    src="/assets/elephant.jpg"
    alt="placeholder"
    className="object-cover rounded-lg"
    width={400}
    height={400}
  />
);
const items = [
  {
    title: 'Seamless Teamwork',
    description:
      'Empower your team with tools that make collaboration easier than ever. From task management to real-time updates, stay aligned and achieve goals together.',
    className: 'md:col-span-2',
  },
  {
    title: ' Work Smarter, Not Harder',
    description:
      'Boost productivity with features designed to streamline your workflow. From automated processes to insightful analytics, we’ve got you covered.',
    className: 'md:col-span-1',
  },
  {
    title: 'Grow Without Limits',
    description:
      'Whether you’re a small team or a growing enterprise, our platform scales to meet your needs. Designed for flexibility and innovation.',
    header: <Skeleton />,
    className: 'md:col-span-3',
  },
];
