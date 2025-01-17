import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { features } from '@/constants';
import { FeatureCardProps } from '@/types';
import React from 'react';

const Features = () => {
  return (
    <div className="flex gap-20 flex-col my-20  px-20">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-4xl font-bold">
          Powerful Features for Remote Teams
        </h1>
        <p className="text-lg text-slate-300">
          Everything you need to keep your team productive and connected
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            points={feature.points}
            icon={feature.icon}
          />
        ))}
      </div>

      <Button className="btn-green p-6 w-fit mx-auto hover:bg-success-100">
        Explore All features
      </Button>
    </div>
  );
};

export default Features;

const FeatureCard = ({
  title,
  description,
  points,
  icon: Icon,
}: FeatureCardProps) => {
  return (
    <Card className="w-full max-w-[300px] p-4 text-slate-200 bg-dark-400">
      <CardHeader className="flex flex-col text-center items-center gap-4">
        <div className="h-12 w-12 bg-green-200 rounded-full flex items-center justify-center text-green-600">
          <Icon size={24} />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-sm text-slate-300">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span className="text-slate-400 text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
