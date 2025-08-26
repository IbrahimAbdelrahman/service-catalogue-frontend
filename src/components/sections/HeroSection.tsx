import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='hero' className='section-hero'>
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='home-about_action'>
              <div
                id='w-node-af188d7a-b1fa-aa40-f315-f1aa7d90469e-6335a2bf'
                data-w-id='af188d7a-b1fa-aa40-f315-f1aa7d90469e'
                style={{
                  transform:
                    "translate3d(13.0392%, -8.8592%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
                className='action_image left'
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
              </div>

              <div
                id='w-node-_19e938e7-f5e9-a49d-b400-215de2befbaa-6335a2bf'
                className='action_content'
              >
                <div className='w-layout-vflex action_top'>
                  <div
                    data-wf--tag--variant='base'
                    data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                    className='tag-wrapper'
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      opacity: 1,
                    }}
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
                    <div
                      className='stroke-wrapper'
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(356.292deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    >
                      <div
                        data-w-id='6e0e5d9e-df71-2e56-c251-612c91d2a6a3'
                        className='stroke'
                      ></div>
                    </div>
                  </div>

                  <div className='w-layout-vflex clip-content'>
                    <div
                      style={{
                        transform:
                          "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        opacity: 1,
                        transformStyle: "preserve-3d",
                      }}
                      className='w-layout-vflex text-hero'
                    >
                      <h1 className='heading-style-small'>
                        We design intuitive, human-centric AI experiences.
                      </h1>
                    </div>
                  </div>
                </div>

                <div className='w-layout-vflex action_bottom'>
                  <div
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform:
                        "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className='w-layout-vflex subtitle-hero'
                  >
                    <h2 className='heading-style-h4'>
                      We help forward-thinking brands craft intuitive AI
                      interfaces, boost user trust, and scale faster.
                    </h2>
                  </div>

                  <div className='w-layout-vflex flex-block-4'>
                    <div
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        opacity: 1,
                        transformStyle: "preserve-3d",
                      }}
                      className='w-layout-vflex hero_button-primary'
                    >
                      <a
                        href='#section-contact'
                        className='button primary w-button'
                      >
                        Book a demo
                      </a>
                    </div>

                    <div
                      data-w-id='480c34d2-84a1-1b73-aab8-3142b6492cf8'
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        opacity: 1,
                        transformStyle: "preserve-3d",
                      }}
                      className='w-layout-vflex hero_button-secondary'
                    >
                      <a
                        href='#section-testimonials'
                        className='button outline w-button'
                      >
                        They trust us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id='w-node-bc13bc38-e126-9d72-530c-33fc1395af20-6335a2bf'
                style={{
                  transform:
                    "translate3d(-13.0392%, 8.8592%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
                className='action_image right'
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
