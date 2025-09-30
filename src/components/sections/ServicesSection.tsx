import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { tagAnimation, strokeAnimation } from "@/utils/animations";

const ServicesSection: React.FC = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation(0.2);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Images for each service
  const serviceImages = [
    [
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e407d06bf47a65092f5747_card%20statistics.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e185d9c04d4c3c03de73f7_Webflow-Template-UI-4.avif",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e407d06bf47a65092f5747_card%20statistics.png",
    ],
    [
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e185d9c04d4c3c03de73f7_Webflow-Template-UI-4.avif",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e407d06bf47a65092f5747_card%20statistics.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e185d9c04d4c3c03de73f7_Webflow-Template-UI-4.avif",
    ],
    [
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e407d06bf47a65092f5747_card%20statistics.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e185d9c04d4c3c03de73f7_Webflow-Template-UI-4.avif",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX.png",
    ],
    [
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e407d06bf47a65092f5747_card%20statistics.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX.png",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e185d9c04d4c3c03de73f7_Webflow-Template-UI-4.avif",
      "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e407d06bf47a65092f5747_card%20statistics.png",
    ],
  ];

  // Setup intersection observer for service items
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const serviceElement = entry.target as HTMLElement;
          const serviceIndex = parseInt(
            serviceElement.dataset.serviceIndex || "0"
          );

          setActiveServiceIndex(serviceIndex);
        }
      });
    }, observerOptions);

    // Observe all service items
    const serviceItems = document.querySelectorAll("[data-service-index]");
    serviceItems.forEach((item) => observer.observe(item));

    return () => {
      serviceItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id='section-services'
      className='section-services'
      ref={sectionRef}
    >
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='w-layout-vflex flex-vertical-small center'>
              <motion.div
                data-wf--tag--variant='is-dark'
                data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                className='tag-wrapper'
                variants={tagAnimation}
              >
                <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                  <div
                    data-w-id='055297b7-fac4-0ad7-3526-e431647abfe4'
                    className='text-size-small text-color-aqua-pastel'
                    style={{ display: "block" }}
                  >
                    What we do
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
                  />
                </motion.div>
              </motion.div>
              <div className='w-layout-vflex padding-global'>
                <div className='w-layout-vflex flex-vertical-medium center'>
                  <div className='w-layout-vflex clip-content'>
                    <h3
                      data-w-id='8a8c174d-2f2f-e42c-9dcb-c07eb11cd9e9'
                      style={{
                        transform:
                          "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        opacity: 1,
                        transformStyle: "preserve-3d",
                      }}
                      className='heading-style-small'
                    >
                      It’s packed with all you need
                    </h3>
                  </div>
                  <div
                    data-w-id='8a8c174d-2f2f-e42c-9dcb-c07eb11cd9f0'
                    style={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transform:
                        "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className='text-size-large'
                  >
                    We design seamless AI experiences
                    <br />
                    from strategy to interface, through to final Webflow
                    delivery.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='features_grid'>
              <motion.div
                data-w-id='287657b4-260f-2c62-65f0-afd8eb681ee8'
                className='feature_left'
                initial={{ opacity: 1, y: 30 }}
                animate={
                  sectionInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 30 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className='features_sticky'>
                  <div className='features_window'>
                    <div className='w-layout-vflex feature-visual'>
                      <div className='features_images'>
                        <motion.div
                          className='w-layout-vflex feature-images_wrapper'
                          style={{
                            willChange: "transform",
                            transform:
                              "translate3d(0px, 2.1625%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <motion.div
                            className='w-layout-vflex features_strip'
                            style={{
                              willChange: "transform",
                              transform:
                                "translate3d(0px, 3.654%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <motion.div
                              className='w-layout-vflex features_image'
                              key={`image-0-${activeServiceIndex}`}
                            >
                              <img
                                src={serviceImages[activeServiceIndex][0]}
                                loading='lazy'
                                alt=''
                                className='feature-visual_image'
                              />
                            </motion.div>
                            <motion.div
                              className='w-layout-vflex features_image'
                              key={`image-1-${activeServiceIndex}`}
                            >
                              <img
                                src={serviceImages[activeServiceIndex][1]}
                                loading='lazy'
                                alt=''
                                className='feature-visual_image'
                              />
                            </motion.div>
                          </motion.div>
                          <motion.div
                            className='w-layout-vflex features_strip'
                            style={{
                              willChange: "transform",
                              transform:
                                "translate3d(0px, 3.654%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <motion.div
                              className='w-layout-vflex features_image'
                              key={`image-2-${activeServiceIndex}`}
                            >
                              <img
                                src={serviceImages[activeServiceIndex][2]}
                                loading='lazy'
                                sizes='(max-width: 1024px) 100vw, 1024px'
                                srcSet={
                                  serviceImages[activeServiceIndex][2].includes(
                                    "UX.png"
                                  )
                                    ? "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX-p-500.png 500w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX-p-800.png 800w, https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e40ed2fbc1edc2cdc511d4_UX.png 1024w"
                                    : undefined
                                }
                                alt=''
                                className='feature-visual_image'
                              />
                            </motion.div>
                            <motion.div
                              className='w-layout-vflex features_image'
                              key={`image-3-${activeServiceIndex}`}
                            >
                              <img
                                src={serviceImages[activeServiceIndex][3]}
                                loading='lazy'
                                alt=''
                                className='feature-visual_image'
                              />
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </div>
                      <motion.div
                        className='border-glow-card'
                        initial={{ opacity: 1 }}
                        animate={
                          sectionInView ? { opacity: 1 } : { opacity: 1 }
                        }
                        transition={{ duration: 1, delay: 0.9 }}
                        style={{
                          willChange: "filter",
                          filter: "hue-rotate(193.867deg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className='feature_right'>
                <div className='w-dyn-list'>
                  <div role='list' className='w-dyn-items'>
                    <div role='listitem' className='w-dyn-item'>
                      <div className='features_item' data-service-index='0'>
                        <motion.div
                          data-wf--tag--variant='is-dark'
                          data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                          className='tag-wrapper'
                          variants={tagAnimation}
                        >
                          <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                            <div
                              data-w-id='055297b7-fac4-0ad7-3526-e431647abfe4'
                              className='text-size-small text-color-aqua-pastel'
                              style={{ display: "block" }}
                            >
                              Pixel-perfect, code-free delivery.
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
                            />
                          </motion.div>
                        </motion.div>
                        <div className='features_title'>
                          <div className='w-layout-vflex clip-content'>
                            <h4
                              data-w-id='c4f267ab-643c-afe1-9877-05095aa40ffe'
                              className='heading-style-h1 text-size-medium text-color-aqua-pastel'
                              style={{
                                transform:
                                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                opacity: 1,
                                transformStyle: "preserve-3d",
                              }}
                            >
                              Webflow Development
                            </h4>
                          </div>
                        </div>
                        <div className='features_content'>
                          <div
                            data-w-id='c4f267ab-643c-afe1-9877-05095aa41001'
                            className='text-size-large text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            We bring it all to life with pixel-perfect, fast and
                            scalable Webflow builds — no code needed on your
                            side.
                          </div>
                          <div
                            data-w-id='b751f98a-9195-64ad-7a43-4b1bda8b76bc'
                            className='text-size-medium text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            Deliverables : live Webflow site, CMS setup,
                            animations, SEO-ready structure
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role='listitem' className='w-dyn-item'>
                      <div className='features_item' data-service-index='1'>
                        <motion.div
                          data-wf--tag--variant='is-dark'
                          data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                          className='tag-wrapper'
                          variants={tagAnimation}
                        >
                          <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                            <div
                              data-w-id='055297b7-fac4-0ad7-3526-e431647abfe4'
                              className='text-size-small text-color-aqua-pastel'
                              style={{ display: "block" }}
                            >
                              Make your vision unforgettable.
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
                            />
                          </motion.div>
                        </motion.div>
                        <div className='features_title'>
                          <div className='w-layout-vflex clip-content'>
                            <h4
                              data-w-id='c4f267ab-643c-afe1-9877-05095aa40ffe'
                              className='heading-style-h1 text-size-medium text-color-aqua-pastel'
                              style={{
                                transform:
                                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                opacity: 1,
                                transformStyle: "preserve-3d",
                              }}
                            >
                              Brand &amp; Identity Design
                            </h4>
                          </div>
                        </div>
                        <div className='features_content'>
                          <div
                            data-w-id='c4f267ab-643c-afe1-9877-05095aa41001'
                            className='text-size-large text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            A bold and consistent brand is essential. We create
                            timeless identities that reflect your vision.
                          </div>
                          <div
                            data-w-id='b751f98a-9195-64ad-7a43-4b1bda8b76bc'
                            className='text-size-medium text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            Deliverables : logo, color palette, typography,
                            brand guidelines
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role='listitem' className='w-dyn-item'>
                      <div className='features_item' data-service-index='2'>
                        <motion.div
                          data-wf--tag--variant='is-dark'
                          data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                          className='tag-wrapper'
                          variants={tagAnimation}
                        >
                          <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                            <div
                              data-w-id='055297b7-fac4-0ad7-3526-e431647abfe4'
                              className='text-size-small text-color-aqua-pastel'
                              style={{ display: "block" }}
                            >
                              Design that earns trust.
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
                            />
                          </motion.div>
                        </motion.div>
                        <div className='features_title'>
                          <div className='w-layout-vflex clip-content'>
                            <h4
                              data-w-id='c4f267ab-643c-afe1-9877-05095aa40ffe'
                              className='heading-style-h1 text-size-medium text-color-aqua-pastel'
                              style={{
                                transform:
                                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                opacity: 1,
                                transformStyle: "preserve-3d",
                              }}
                            >
                              UX/UI for AI Products
                            </h4>
                          </div>
                        </div>
                        <div className='features_content'>
                          <div
                            data-w-id='c4f267ab-643c-afe1-9877-05095aa41001'
                            className='text-size-large text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            We design intuitive user experiences that simplify
                            complex AI interactions and build user trust.
                          </div>
                          <div
                            data-w-id='b751f98a-9195-64ad-7a43-4b1bda8b76bc'
                            className='text-size-medium text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            Deliverables : wireframes, UI kit, high-fidelity
                            mockups, Figma system
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role='listitem' className='w-dyn-item'>
                      <div className='features_item' data-service-index='3'>
                        <motion.div
                          data-wf--tag--variant='is-dark'
                          data-w-id='055297b7-fac4-0ad7-3526-e431647abfe3'
                          className='tag-wrapper'
                          variants={tagAnimation}
                        >
                          <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                            <div
                              data-w-id='055297b7-fac4-0ad7-3526-e431647abfe4'
                              className='text-size-small text-color-aqua-pastel'
                              style={{ display: "block" }}
                            >
                              Shape clarity out of complexity.
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
                            />
                          </motion.div>
                        </motion.div>
                        <div className='features_title'>
                          <div className='w-layout-vflex clip-content'>
                            <h4
                              data-w-id='c4f267ab-643c-afe1-9877-05095aa40ffe'
                              className='heading-style-h1 text-size-medium text-color-aqua-pastel'
                              style={{
                                transform:
                                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                opacity: 1,
                                transformStyle: "preserve-3d",
                              }}
                            >
                              AI Strategy & Consulting
                            </h4>
                          </div>
                        </div>
                        <div className='features_content'>
                          <div
                            data-w-id='c4f267ab-643c-afe1-9877-05095aa41001'
                            className='text-size-large text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            We help you define a clear and ethical AI roadmap —
                            tailored to your product, your users, and your
                            goals.
                          </div>
                          <div
                            data-w-id='b751f98a-9195-64ad-7a43-4b1bda8b76bc'
                            className='text-size-medium text-style-muted'
                            style={{
                              opacity: 1,
                              filter: "blur(0px)",
                              transform:
                                "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            Deliverables : user flows, product scope, AI
                            personas, workshops
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-overlay' />
    </section>
  );
};

export default ServicesSection;
