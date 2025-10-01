import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { textReveal, fadeInUp } from "@/utils/animations";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

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
    // Simulate form submission
    try {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsError(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setIsError(true);
      setIsSubmitted(false);
      console.error("Form submission error:", error);
    }
  };

  return (
    <section
      id='section-contact'
      className='bg-gray-800 text-white py-20 px-4'
      ref={sectionRef}
    >
      <div className='max-w-7xl mx-auto px-8'>
        <div className='w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start'>
            {/* Left Section - Header and Contact Info (2/5 of width) */}
            <div className='lg:col-span-3 flex flex-col gap-8'>
              <div className='flex flex-col gap-12'>
                <motion.h2
                  className='text-4xl lg:text-5xl font-semibold leading-tight text-white'
                  variants={textReveal}
                  initial='hidden'
                  animate={sectionInView ? "visible" : "hidden"}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Let's build something meaningful together
                </motion.h2>
                <motion.div
                  className='text-xl text-gray-300 leading-relaxed'
                  variants={fadeInUp}
                  initial='hidden'
                  animate={sectionInView ? "visible" : "hidden"}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Got a project in mind? Tell us a bit more and we'll get back
                  to you within 24h.
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className='flex flex-col gap-12'>
                <motion.div
                  className='flex items-center gap-4'
                  variants={fadeInUp}
                  initial='hidden'
                  animate={sectionInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  <div className='flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg flex-shrink-0'>
                    <img
                      loading='lazy'
                      src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e3e3f8fd79612720ac7616_email-icon.svg'
                      alt=''
                      className='w-6 h-6 brightness-0 invert'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='text-base text-gray-400'>Email address</div>
                    <div className='text-base text-white'>
                      <a
                        href='mailto:contact@ateko.com'
                        className='text-white hover:text-cyan-300 transition-colors duration-300'
                      >
                        contact@ateko.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='flex items-center gap-4'
                  variants={fadeInUp}
                  initial='hidden'
                  animate={sectionInView ? "visible" : "hidden"}
                  transition={{ delay: 0.3 }}
                >
                  <div className='flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg flex-shrink-0'>
                    <img
                      loading='lazy'
                      src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e3e4047c68bc6c9f6e3744_phone-icon.svg'
                      alt=''
                      className='w-6 h-6 brightness-0 invert'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='text-base text-gray-400'>Phone number</div>
                    <div className='text-base text-white'>(123) 456 - 7890</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Section - Contact Form (3/5 of width) */}
            <div className='lg:col-span-2'>
              <motion.form
                id='email-form'
                name='email-form'
                method='get'
                onSubmit={handleSubmit}
                className='flex flex-col gap-7 w-full'
                variants={fadeInUp}
                initial='hidden'
                animate={sectionInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
              >
                <div className='flex flex-col'>
                  <label
                    htmlFor='Name-3'
                    className='text-base font-medium text-white mb-3'
                  >
                    Full Name
                  </label>
                  <input
                    className='w-full px-5 py-4 border border-white/15 rounded-xl bg-white/5 text-white text-base transition-all duration-300 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:shadow-lg focus:shadow-cyan-400/10 placeholder-gray-500'
                    maxLength={256}
                    name='name'
                    placeholder=''
                    type='text'
                    id='Name-3'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label
                    htmlFor='Email-5'
                    className='text-base font-medium text-white mb-3'
                  >
                    Email Address
                  </label>
                  <input
                    className='w-full px-5 py-4 border border-white/15 rounded-xl bg-white/5 text-white text-base transition-all duration-300 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:shadow-lg focus:shadow-cyan-400/10 placeholder-gray-500'
                    maxLength={256}
                    name='email'
                    placeholder=''
                    type='email'
                    id='Email-5'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label
                    htmlFor='Company'
                    className='text-base font-medium text-white mb-3'
                  >
                    Company / Brand name
                  </label>
                  <input
                    className='w-full px-5 py-4 border border-white/15 rounded-xl bg-white/5 text-white text-base transition-all duration-300 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:shadow-lg focus:shadow-cyan-400/10 placeholder-gray-500'
                    maxLength={256}
                    name='company'
                    placeholder=''
                    type='text'
                    id='Company'
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='flex flex-col'>
                  <label
                    htmlFor='Message'
                    className='text-base font-medium text-white mb-3'
                  >
                    What can we help you with?
                  </label>
                  <textarea
                    placeholder="We're building an AI tool for e-commerce and need help with UX and Webflow."
                    maxLength={5000}
                    id='Message'
                    name='message'
                    className='w-full px-5 py-4 border border-white/15 rounded-xl bg-white/5 text-white text-base transition-all duration-300 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 focus:shadow-lg focus:shadow-cyan-400/10 placeholder-gray-500 min-h-[140px] resize-y font-sans'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full px-8 py-4 mt-4 border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 bg-cyan-300 text-slate-900 hover:bg-cyan-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-300/30 font-sans'
                >
                  Submit
                </button>
              </motion.form>

              {/* Form Status Messages */}
              {isSubmitted && (
                <motion.div
                  className='p-4 rounded-lg mt-4 text-sm bg-green-500/10 border border-green-500 text-green-500'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div>Thank you! Your submission has been received!</div>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  className='p-4 rounded-lg mt-4 text-sm bg-red-500/10 border border-red-500 text-red-500'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
