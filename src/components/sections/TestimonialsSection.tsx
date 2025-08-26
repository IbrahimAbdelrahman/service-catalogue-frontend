import React from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types";

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      content:
        "The team delivered exactly what we needed — fast, smart, and beautifully executed. It felt like working with a true partner, not just a vendor.",
      author: "Anna R.",
      position: "Founder",
      company: "NeuralBloom",
    },
    {
      id: "2",
      content:
        "They helped us turn a complex AI idea into a smooth and intuitive product. Our users love the new interface, and so do we.",
      author: "Damien L.",
      position: "Product Lead",
      company: "Synthflow",
    },
    {
      id: "3",
      content:
        "Using Ateko AI was such a pleasant surprise! The app is easy to use and really intuitive. It made our daily tasks a breeze.",
      author: "Matthew James",
      position: "Software Engineer",
      company: "TechCorp",
    },
    {
      id: "4",
      content:
        "Our AI tool is now much easier to use. Feedback from users has been incredible.",
      author: "Olivia M.",
      position: "Co-founder",
      company: "NovaMind",
    },
    {
      id: "5",
      content:
        "Clear process, great energy, and strong results. Can&apos;t wait to work with them again.",
      author: "Yann D.",
      position: "Head of Product",
      company: "Aether Labs",
    },
    {
      id: "6",
      content:
        "Designs were sharp, thoughtful, and scalable. Truly a great experience all around.",
      author: "Léa G.",
      position: "Founder",
      company: "Flowstate AI",
    },
    {
      id: "7",
      content:
        "The new UX made a huge difference. Simple, elegant and super user-friendly.",
      author: "Aaron P.",
      position: "CTO",
      company: "SmartQuery",
    },
    {
      id: "8",
      content:
        "They challenged us in all the right ways. The end result exceeded expectations.",
      author: "Nina V.",
      position: "Product Manager",
      company: "Brainsight",
    },
  ];

  return (
    <section id='testimonials' className='py-20 lg:py-32 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4'>
            Wall of love
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Trusted by founders, loved by users
          </h3>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We collaborate with bold teams who value clarity, creativity and
            results. Here&apos;s what some of them had to say about working with
            us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
