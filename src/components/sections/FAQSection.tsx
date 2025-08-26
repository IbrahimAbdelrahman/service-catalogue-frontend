import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/types";

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      id: "1",
      question: "What kind of projects do you work on?",
      answer:
        "We specialize in digital products powered by AI — from SaaS dashboards and web apps to branding and landing pages. If your idea needs clarity, design and Webflow execution, we can help.",
    },
    {
      id: "2",
      question: "Do you only work with AI startups?",
      answer:
        "Not at all. While we love working with AI teams, we also collaborate with tech companies, agencies, and founders across various industries who value thoughtful design.",
    },
    {
      id: "3",
      question: "How long does a project usually take?",
      answer:
        "It depends on the scope. A full brand + website typically takes 3–5 weeks. A UX/UI design project may take 2–4 weeks. We always start with a clear timeline.",
    },
    {
      id: "4",
      question: "Can you develop the website after design?",
      answer:
        "Yes. We offer full Webflow development — clean, responsive, CMS-powered and SEO-ready. You'll be able to edit everything easily after launch.",
    },
  ];

  return (
    <section id='faq' className='py-20 lg:py-32 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4'>
            Still wondering?
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Frequently Asked Questions
          </h3>
          <p className='text-xl text-gray-600'>
            Here are some of the things people usually ask us before starting a
            project.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className='border-b border-gray-200'
            >
              <AccordionTrigger className='text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-gray-600 leading-relaxed pt-2 pb-6'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
