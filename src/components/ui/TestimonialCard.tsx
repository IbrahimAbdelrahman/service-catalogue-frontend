import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className='h-full border border-gray-100 hover:shadow-md transition-shadow duration-300'>
      <CardContent className='p-6'>
        <blockquote className='text-gray-900 mb-6 leading-relaxed'>
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>
        <div className='flex items-center'>
          <Avatar className='h-12 w-12 mr-4'>
            <AvatarFallback className='bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 font-semibold'>
              {testimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className='font-semibold text-gray-900'>
              {testimonial.author}
            </div>
            <div className='text-sm text-gray-600'>
              {testimonial.position} @ {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
