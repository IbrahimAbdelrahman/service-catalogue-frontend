import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "@/types";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  tagAnimation,
  strokeAnimation,
  textReveal,
  fadeInUp,
} from "@/utils/animations";

const TestimonialsSection: React.FC = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation(0.2);
  const [currentTransform, setCurrentTransform] = useState(-30.75);

  // Enhanced testimonials data with avatars matching the original
  const testimonials: Testimonial[] = [
    {
      id: "1",
      content:
        "The team delivered exactly what we needed — fast, smart, and beautifully executed. It felt like working with a true partner, not just a vendor.",
      author: "Anna R.",
      position: "Founder",
      company: "NeuralBloom",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e400d758c3493123728918_Composed%20Asian%20Businesswoman%20Portrait.jpeg",
    },
    {
      id: "2",
      content:
        "They helped us turn a complex AI idea into a smooth and intuitive product. Our users love the new interface, and so do we.",
      author: "Damien L.",
      position: "Product Lead",
      company: "Synthflow",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e400d7a94a6099559cd56f_Cheerful%20Man%20in%20Blazer.jpeg",
    },
    {
      id: "3",
      content:
        "Using Ateko AI was such a pleasant surprise!\nThe app is easy to use and really intuitive.\nIt made our daily tasks a breeze.",
      author: "Matthew James",
      position: "Software Engineer",
      company: "TechCorp",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e401209c42638b4a10cd38_Distinguished%20Man%20in%20Formal%20Setting.jpeg",
    },
    {
      id: "4",
      content:
        "Our AI tool is now much easier to use.\nFeedback from users has been incredible.",
      author: "Olivia M.",
      position: "Co-founder",
      company: "NovaMind",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e400d726aa171d0cebf304_Professional%20Portrait.jpeg",
    },
    {
      id: "5",
      content:
        "Clear process, great energy, and strong results.\nCan't wait to work with them again.",
      author: "Yann D.",
      position: "Head of Product",
      company: "Aether Labs",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e4014d2fb249cae803e0b5_Professional%20Business%20Portrait%20(1).jpeg",
    },
    {
      id: "6",
      content:
        "Designs were sharp, thoughtful, and scalable.\nTruly a great experience all around.",
      author: "Léa G.",
      position: "Founder",
      company: "Flowstate AI",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e4016dae52b6e0f07a3a5e_Elegant%20Woman%20in%20White%20Blazer%20(1).jpeg",
    },
    {
      id: "7",
      content:
        "The new UX made a huge difference.\nSimple, elegant and super user-friendly.",
      author: "Aaron P.",
      position: "CTO",
      company: "SmartQuery",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e401888e6db9e26f2bd30c_Formal%20Portrait%20of%20a%20Man.jpeg",
    },
    {
      id: "8",
      content:
        "They challenged us in all the right ways. The end result exceeded expectations.",
      author: "Nina V.",
      position: "Product Manager",
      company: "Brainsight",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e401e8a94a6099559df2a7_Black%20and%20White%20Portrait%20of%20a%20Woman.jpeg",
    },
    {
      id: "9",
      content:
        "Their attention to detail is next level.\nHighly recommended for Webflow projects.",
      author: "Kevin R.",
      position: "Growth",
      company: "ThinkHuman",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e401e80e24e005d8d1f35d_Cheerful%20Young%20Man%20with%20Glasses.jpeg",
    },
    {
      id: "10",
      content:
        "They delivered ahead of time, every time. Communication was always smooth.",
      author: "Camille S.",
      position: "Design Ops",
      company: "Neuronix",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e401e97809db2a99df9181_Serene%20Portrait%20of%20a%20Young%20Woman.jpeg",
    },
  ];

  // Infinite scroll animation
  useEffect(() => {
    const animateCarousel = () => {
      setCurrentTransform((prev) => {
        const newTransform = prev - 0.05;
        // Reset when we've scrolled through all testimonials
        return newTransform <= -100 ? -30.75 : newTransform;
      });
    };

    const interval = setInterval(animateCarousel, 50);
    return () => clearInterval(interval);
  }, []);

  const TestimonialCard: React.FC<{
    testimonial: Testimonial;
    className?: string;
  }> = ({ testimonial, className = "" }) => (
    <div className={`testimonial_card is-testimonial ${className}`}>
      <div className='flex-vertical-large'>
        <div className='testimonial-card_top'>
          <div className='badge primary'>
            <div className='icon-1x1_small w-embed'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z'></path>
              </svg>
            </div>
          </div>
        </div>
        <div className='testimonial-card_center'>
          <div
            dangerouslySetInnerHTML={{
              __html: testimonial.content.replace(/\n/g, "<br>"),
            }}
          />
        </div>
        <div className='testimonial-card_bottom'>
          <div className='w-layout-vflex flex-horizontal-medium'>
            <div className='w-layout-vflex avatar_wrapper'>
              <img
                src={testimonial.avatar}
                loading='lazy'
                alt={`${testimonial.author} avatar`}
                sizes='(max-width: 2400px) 100vw, 2400px'
                className='avatar'
              />
            </div>
            <div className='w-layout-vflex flex-vertical-tiny'>
              <div className='text-size-medium text-weight-medium'>
                {testimonial.author}
              </div>
              <div className='text-size-small'>
                {testimonial.position} @ {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id='section-testimonials'
      className='section-testimonials'
      ref={sectionRef}
    >
      {/* Header Section */}
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='w-layout-vflex flex-vertical-small center'>
              <motion.div
                data-wf--tag--variant='is-dark'
                className='tag-wrapper'
                variants={tagAnimation}
                initial='hidden'
                animate={sectionInView ? "visible" : "hidden"}
              >
                <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                  <div
                    className='text-size-small text-color-aqua-pastel'
                    style={{ display: "block" }}
                  >
                    Wall of love
                  </div>
                </div>
                <motion.div
                  className='stroke-wrapper'
                  variants={strokeAnimation}
                  animate={{
                    rotate: [0, 360],
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <div className='stroke' />
                </motion.div>
              </motion.div>

              <div className='w-layout-vflex padding-global'>
                <div className='w-layout-vflex flex-vertical-medium center'>
                  <div className='w-layout-vflex clip-content'>
                    <motion.h3
                      className='heading-style-small'
                      variants={textReveal}
                      initial='hidden'
                      animate={sectionInView ? "visible" : "hidden"}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <em>Trusted</em> by founders, <em>loved</em> by users
                    </motion.h3>
                  </div>
                  <motion.div
                    className='text-size-large'
                    variants={fadeInUp}
                    initial='hidden'
                    animate={sectionInView ? "visible" : "hidden"}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    We collaborate with bold teams who value clarity, creativity
                    and results. Here's what some of them had to say about
                    working with us.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className='w-layout-vflex padding-section-small'>
        <div className='w-layout-vflex padding-section-extra-large'>
          <div className='testimonial_wrapper'>
            {/* Top Row - Moving Left */}
            <div className='testimonial_component'>
              <motion.div
                className='testimonial_loop-trigger'
                style={{
                  transform: `translate3d(${currentTransform}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`top-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>

              {/* Duplicate for seamless scrolling */}
              <motion.div
                className='testimonial_loop-trigger'
                style={{
                  transform: `translate3d(${currentTransform}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`top-duplicate-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>
            </div>

            {/* Bottom Row - Moving Right */}
            <div className='testimonial_component is-bottom'>
              <motion.div
                className='testimonial_loop-trigger-bottom'
                style={{
                  transform: `translate3d(${-currentTransform}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                {/* Reverse the testimonials order for bottom row */}
                {[
                  ...testimonials.slice().reverse(),
                  ...testimonials.slice().reverse(),
                ].map((testimonial, index) => (
                  <TestimonialCard
                    key={`bottom-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </motion.div>

              {/* Duplicate for seamless scrolling */}
              <motion.div
                className='testimonial_loop-trigger-bottom'
                style={{
                  transform: `translate3d(${-currentTransform}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                {[
                  ...testimonials.slice().reverse(),
                  ...testimonials.slice().reverse(),
                ].map((testimonial, index) => (
                  <TestimonialCard
                    key={`bottom-duplicate-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className='bg-overlay' />
    </section>
  );
};

export default TestimonialsSection;
