import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ContactFormData } from "@/types";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id='contact' className='py-20 lg:py-32 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Let&apos;s build something meaningful together
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Got a project in mind? Tell us a bit more and we&apos;ll get back
              to you within 24h.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
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
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-500'>
                    Email address
                  </p>
                  <p className='text-lg text-gray-900'>contact@ateko.com</p>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='flex-shrink-0'>
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
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <p className='text-sm font-medium text-gray-500'>
                    Phone number
                  </p>
                  <p className='text-lg text-gray-900'>(123) 456 - 7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-gray-900'>
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <Label
                      htmlFor='fullName'
                      className='text-sm font-medium text-gray-700'
                    >
                      Full Name
                    </Label>
                    <Input
                      id='fullName'
                      name='fullName'
                      type='text'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className='mt-1'
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor='email'
                      className='text-sm font-medium text-gray-700'
                    >
                      Email Address
                    </Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='mt-1'
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor='company'
                    className='text-sm font-medium text-gray-700'
                  >
                    Company / Brand name
                  </Label>
                  <Input
                    id='company'
                    name='company'
                    type='text'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='mt-1'
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor='message'
                    className='text-sm font-medium text-gray-700'
                  >
                    What can we help you with?
                  </Label>
                  <Textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='mt-1'
                    placeholder='Tell us about your project...'
                    required
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full bg-black text-white hover:bg-gray-800'
                  size='lg'
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
