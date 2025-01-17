'use client';

import Testimonial from '@/components/features/contact/Testimonial';
import Features from '@/components/features/home/Features';
import OverView from '@/components/features/home/OverView';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className=" p-8 bg-hero-pattern min-h-[92vh] bg-cover bg-center">
        <div className="text-center text-white bg-opacity-50 relative mt-20 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">
            Your Team&apos;s Command Center
          </h1>
          <p className="mt-4 text-lg mx-auto max-w-2xl text-gray-400">
            One platform for all your remote work needs. Seamlessly manage
            tasks, collaborate on documents, and stay connected with your team
            in real-time.
          </p>
          <Button
            onClick={() => router.push('/documents')}
            className="btn-green mt-8 py-4 hover:bg-success-100 w-36 text-[15px] h-11"
          >
            Get Started
          </Button>

          <div className="w-[40rem] rounded-2xl h-96 bg-dark-200 mt-16"></div>
        </div>
      </div>
      <Features />

      <OverView />

      <Testimonial />
      <div className="bg-hero-pattern bg-cover bg-center min-h-[92vh] flex flex-col text-center justify-center items-center">
        <h1 className="text-6xl font-bold">Features of Tomorrow.</h1>
        <h2 className="text-6xl font-bold">Available Today.</h2>
        <Button
          onClick={() => router.push('/documents')}
          className="btn-green mt-8 py-4 hover:bg-success-100 w-36 text-[15px] h-11"
        >
          Get Started
        </Button>
      </div>
    </>
  );
}
