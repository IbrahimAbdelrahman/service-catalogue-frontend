import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { tagAnimation, textReveal, fadeInUp } from "@/utils/animations";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation(0.2);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs: FAQItem[] = [
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
      question: "Can you develop the website after design?",
      answer:
        "It depends on the scope. A full brand + website typically takes 3–5 weeks. A UX/UI design project may take 2–4 weeks. We always start with a clear timeline.",
    },
    {
      id: "4",
      question: "How long does a project usually take?",
      answer:
        "Yes. We offer full Webflow development — clean, responsive, CMS-powered and SEO-ready. You'll be able to edit everything easily after launch.",
    },
    {
      id: "5",
      question: "Can you develop the website after design?",
      answer:
        "Yes. We offer full Webflow development — clean, responsive, CMS-powered and SEO-ready. You'll be able to edit everything easily after launch.",
    },
  ];

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section className='faq-section' ref={sectionRef}>
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='w-layout-vflex flex-vertical-small center'>
              {/* Header Section */}
              <motion.div
                data-wf--tag--variant='is-dark'
                className='tag-wrapper'
                variants={tagAnimation}
                initial='hidden'
                animate={sectionInView ? "visible" : "hidden"}
              >
                <div className='w-layout-vflex tag w-variant-9fd017c2-66fc-72be-1593-aa31376c3818'>
                  <div className='text-size-small text-color-aqua-pastel'>
                    Still wondering?
                  </div>
                </div>
                <motion.div
                  className='stroke-wrapper'
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
                      Frequently Asked Questions
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
                    Here are some of the things people usually ask us before
                    starting a project.
                  </motion.div>
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <motion.div
              className='faq_wrapper'
              variants={fadeInUp}
              initial='hidden'
              animate={sectionInView ? "visible" : "hidden"}
            >
              <div className='faq_list'>
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className='faq_item'
                    variants={fadeInUp}
                    initial='hidden'
                    animate={sectionInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className='faq-item_header'
                      onClick={() => toggleItem(faq.id)}
                    >
                      <div className='faq-item_title'>
                        <div className='w-layout-vflex clip-content'>
                          <div className='text-size-medium'>{faq.question}</div>
                        </div>
                      </div>
                      <div className='faq-icon_wrapper'>
                        <motion.img
                          src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e3afca22c1c40f0c132146_icon-chevron-down.svg'
                          loading='lazy'
                          alt=''
                          className='faq_icon'
                          animate={{
                            rotate: openItem === faq.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <AnimatePresence>
                      {openItem === faq.id && (
                        <motion.div
                          className='faq-item_content'
                          initial={{
                            height: 0,
                            opacity: 0,
                            y: 20,
                            scaleY: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            y: 0,
                            scaleY: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            y: 20,
                            scaleY: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className='faq_spacer' />
                          <div className='faq-item_text w-richtext'>
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
