import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection: React.FC = () => {
  return (
    <section className='d-flex relative py-20 lg:py-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Badge */}
          <div className='flex justify-center mb-8'>
            <Badge
              variant='secondary'
              className='px-4 py-2 text-sm font-medium'
            >
              AI Consulting Studio
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight'>
            We design intuitive,{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              human-centric
            </span>{" "}
            AI experiences.
          </h1>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed'>
            We help forward-thinking brands craft intuitive AI interfaces, boost
            user trust, and scale faster.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              className='bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg'
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a demo
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='px-8 py-4 text-lg'
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className='mt-16'>
            <p className='text-sm text-gray-500 mb-6'>
              Trusted by companies in 100+ countries around the globe.
            </p>
            <div className='flex justify-center items-center space-x-8 opacity-60'>
              {/* Placeholder for company logos */}
              <div className='h-8 w-24 bg-gray-200 rounded'></div>
              <div className='h-8 w-24 bg-gray-200 rounded'></div>
              <div className='h-8 w-24 bg-gray-200 rounded'></div>
              <div className='h-8 w-24 bg-gray-200 rounded'></div>
              <div className='h-8 w-24 bg-gray-200 rounded'></div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10'>
          <div className='w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30'></div>
        </div>
        <div className='absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -z-10'>
          <div className='w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl opacity-40'></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
