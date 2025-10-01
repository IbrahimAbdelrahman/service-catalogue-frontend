import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  tagAnimation,
  strokeAnimation,
  textReveal,
  fadeInUp,
} from "@/utils/animations";

const DemoSection: React.FC = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation(0.2);
  const [demoButtonWidth, setDemoButtonWidth] = useState(164.054);
  const [demoButtonHeight, setDemoButtonHeight] = useState(56);
  const [imageTransform, setImageTransform] = useState(-2.83025);
  const [contentTransform, setContentTransform] = useState(5.6605);

  // Dynamic animation for demo button
  useEffect(() => {
    const animateDemo = () => {
      const time = Date.now() * 0.001;

      // Subtle width and height changes
      setDemoButtonWidth(164.054 + Math.sin(time * 0.5) * 2);
      setDemoButtonHeight(56 + Math.cos(time * 0.7) * 1);

      // Image wrapper transform
      setImageTransform(-2.83025 + Math.sin(time * 0.3) * 1.5);

      // Content transform
      setContentTransform(5.6605 + Math.cos(time * 0.4) * 1.2);
    };

    const interval = setInterval(animateDemo, 50);
    return () => clearInterval(interval);
  }, []);

  // Demo button expand animation variants
  const demoButtonVariants = {
    hidden: {
      width: "56px", // Start with just the avatar size
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      width: `${demoButtonWidth}px`, // Expand to full width
      opacity: 1,
      scale: 1,
    },
  };

  // Content reveal animation (delayed after width expansion)
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const handleDemoClick = () => {
    const contactSection = document.getElementById("section-contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='section-demo' className='section-demo' ref={sectionRef}>
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
                    Curious about working with us?
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
                      Let's talk about your project — with <em>Mathis</em>
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
                    Book a free 30-minute call to explore how we work, ask your
                    questions, and get a live tour of Ateko.
                  </motion.div>

                  {/* Demo Button */}
                  <motion.a
                    href='#section-contact'
                    onClick={(e) => {
                      e.preventDefault();
                      handleDemoClick();
                    }}
                    className='demo_component w-inline-block'
                    style={{
                      willChange: "width, height",
                      height: `${demoButtonHeight}px`,
                      overflow: "hidden", // Hide content during expansion
                    }}
                    variants={demoButtonVariants}
                    initial='hidden'
                    animate={sectionInView ? "visible" : "hidden"}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      width: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className='w-layout-vflex demo_image-wrapper'
                      style={{
                        willChange: "transform",
                        transform: `translate3d(${imageTransform}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className='w-layout-vflex avatar_wrapper small'>
                        <img
                          src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e2f9b7f9c8f6d0256d0b13_Portrait%20of%20a%20Smiling%20Person.jpeg'
                          loading='lazy'
                          sizes='(max-width: 2400px) 100vw, 2400px'
                          alt='Mathis Roux'
                          className='avatar'
                        />
                      </div>
                    </div>
                    <motion.div
                      className='w-layout-vflex demo_content'
                      style={{
                        willChange: "width, height, transform",
                        width: "100%",
                        transform: `translate3d(${contentTransform}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                        transformStyle: "preserve-3d",
                      }}
                      variants={contentVariants}
                      initial='hidden'
                      animate={sectionInView ? "visible" : "hidden"}
                      transition={{
                        delay: 0.3, // Delay to let width expand first
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <div className='text-size-regular'>
                        Schedule a demo with Mathis
                      </div>
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className='bg-overlay' />
    </section>
  );
};

export default DemoSection;
