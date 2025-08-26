import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  heroContainer,
  fadeInLeft,
  fadeInRight,
  tagAnimation,
  strokeAnimation,
  textReveal,
  fadeInUp,
  buttonHover,
  buttonTap,
} from "@/utils/animations";

const HeroSection: React.FC = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.2);

  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id='hero'
      className='section-hero'
      ref={heroRef}
      variants={heroContainer}
      initial='hidden'
      animate={heroInView ? "visible" : "hidden"}
    >
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='home-about_action'>
              <motion.div
                id='w-node-af188d7a-b1fa-aa40-f315-f1aa7d90469e-6335a2bf'
                data-w-id='af188d7a-b1fa-aa40-f315-f1aa7d90469e'
                className='action_image left'
                variants={fadeInLeft}
                whileHover={{
                  scale: 1.0,
                  x: "5.8143%",
                  y: "-6.3708%",
                  transition: { duration: 0.3 },
                }}
              >
                <div className='action_height'>
                  <img
                    src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting.jpeg'
                    loading='lazy'
                    sizes='(max-width: 2400px) 100vw, 2400px'
                    srcSet='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting-p-500.jpeg 500w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting-p-800.jpeg 800w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting-p-2000.jpeg 2000w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40d25fbc1edc2cdc38b19_Minimalist%20Office%20Meeting.jpeg 2400w'
                    alt=''
                    className='image-cover'
                  />
                </div>
              </motion.div>

              <motion.div
                id='w-node-_19e938e7-f5e9-a49d-b400-215de2befbaa-6335a2bf'
                className='action_content'
                variants={fadeInUp}
              >
                <div className='w-layout-vflex action_top'>
                  <motion.div
                    data-wf--tag--variant='base'
                    data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                    className='tag-wrapper'
                    variants={tagAnimation}
                  >
                    <div className='w-layout-vflex tag'>
                      <div
                        data-w-id='055297b7-fac4-0ad7-3526-e431647abfe4'
                        className='text-size-small text-color-aqua-pastel'
                        style={{ display: "block" }}
                      >
                        AI Consulting Studio
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
                    >
                      <div
                        data-w-id='6e0e5d9e-df71-2e56-c251-612c91d2a6a3'
                        className='stroke'
                      ></div>
                    </motion.div>
                  </motion.div>

                  <div className='w-layout-vflex clip-content'>
                    <motion.div
                      className='w-layout-vflex text-hero'
                      variants={textReveal}
                    >
                      <h1 className='heading-style-small'>
                        We design intuitive, human-centric AI experiences.
                      </h1>
                    </motion.div>
                  </div>
                </div>

                <div className='w-layout-vflex action_bottom'>
                  <motion.div
                    className='w-layout-vflex subtitle-hero'
                    variants={fadeInUp}
                  >
                    <h2 className='heading-style-h4'>
                      We help forward-thinking brands craft intuitive AI
                      interfaces, boost user trust, and scale faster.
                    </h2>
                  </motion.div>

                  <div className='w-layout-vflex flex-block-4'>
                    <motion.div
                      className='w-layout-vflex hero_button-primary'
                      variants={fadeInUp}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      <Button
                        className='button primary w-button h-auto'
                        onClick={() => handleScrollToSection("contact")}
                      >
                        Book a demo
                      </Button>
                    </motion.div>

                    <motion.div
                      data-w-id='480c34d2-84a1-1b73-aab8-3142b6492cf8'
                      className='w-layout-vflex hero_button-secondary'
                      variants={fadeInUp}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      <Button
                        variant='outline'
                        className='button outline w-button h-auto'
                        onClick={() => handleScrollToSection("services")}
                      >
                        They trust us
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                id='w-node-bc13bc38-e126-9d72-530c-33fc1395af20-6335a2bf'
                className='action_image right'
                variants={fadeInRight}
                whileHover={{
                  scale: 1.0,
                  x: "-24.5442%",
                  y: "5.0644%",
                  transition: { duration: 0.3 },
                }}
              >
                <div className='action_height'>
                  <img
                    src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop.jpeg'
                    loading='lazy'
                    sizes='(max-width: 2400px) 100vw, 2400px'
                    srcSet='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop-p-500.jpeg 500w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop-p-800.jpeg 800w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop-p-2000.jpeg 2000w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40c64e3b478e0da258ad1_Person%20in%20Orange%20Beanie%20Working%20on%20Laptop.jpeg 2400w'
                    alt=''
                    className='image-cover'
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
