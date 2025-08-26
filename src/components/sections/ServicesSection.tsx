import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import type { Service } from "@/types";

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      title: "Webflow Development",
      description:
        "We bring it all to life with pixel-perfect, fast and scalable Webflow builds — no code needed on your side.",
      deliverables:
        "live Webflow site, CMS setup, animations, SEO-ready structure",
      icon: (
        <svg
          className='w-6 h-6 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
          />
        </svg>
      ),
    },
    {
      id: "2",
      title: "Brand & Identity Design",
      description:
        "A bold and consistent brand is essential. We create timeless identities that reflect your vision.",
      deliverables: "logo, color palette, typography, brand guidelines",
      icon: (
        <svg
          className='w-6 h-6 text-purple-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
          />
        </svg>
      ),
    },
    {
      id: "3",
      title: "UX/UI for AI Products",
      description:
        "We design intuitive user experiences that simplify complex AI interactions and build user trust.",
      deliverables: "wireframes, UI kit, high-fidelity mockups, Figma system",
      icon: (
        <svg
          className='w-6 h-6 text-indigo-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
    {
      id: "4",
      title: "AI Strategy & Consulting",
      description:
        "We help you define a clear and ethical AI roadmap — tailored to your product, your users, and your goals.",
      deliverables: "user flows, product scope, AI personas, workshops",
      icon: (
        <svg
          className='w-6 h-6 text-green-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
    },
  ];

  return (
    <section id='services' className='py-20 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4'>
            What we do
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            It&apos;s packed with all you need
          </h3>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We design seamless AI experiences from strategy to interface,
            through to final Webflow delivery.
          </p>
          <div className='mt-4'>
            <span className='text-sm text-gray-500 italic'>
              Pixel-perfect, code-free delivery.
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
