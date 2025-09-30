import React from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "@/types";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  tagAnimation,
  strokeAnimation,
  textReveal,
  fadeInUp,
} from "@/utils/animations";

const TeamSection: React.FC = () => {
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation(0.2);
  const { ref: teamGridRef, isInView: teamGridInView } =
    useScrollAnimation(0.3);

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Eliott Serban",
      position: "Creative Developer",
      linkedIn: "https://www.linkedin.com/in/merdy-mouanga-249680b6/",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e2f9d03a1a5bb3dc9d9892_Smiling%20Man%20with%20Beard%20and%20Glasses.jpeg",
    },
    {
      id: "2",
      name: "Camille Torres",
      position: "Product Designer",
      linkedIn: "https://www.linkedin.com/in/merdy-mouanga-249680b6/",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e2d95ced18c428226e0feb_Portrait%20of%20a%20Young%20Professional%20Woman.jpeg",
    },
    {
      id: "3",
      name: "Mathis Roux",
      position: "AI Experience Lead",
      linkedIn: "https://www.linkedin.com/in/merdy-mouanga-249680b6/",
      avatar:
        "https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e2f9b7f9c8f6d0256d0b13_Portrait%20of%20a%20Smiling%20Person.jpeg",
    },
  ];

  const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({
    member,
    index,
  }) => {
    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut" as const,
          delay: index * 0.15,
        },
      },
    };

    return (
      <motion.div
        className={`w-layout-vflex team-card_${
          index === 0 ? "one" : index === 1 ? "two" : "three"
        }`}
        variants={cardVariants}
        initial='hidden'
        animate={teamGridInView ? "visible" : "hidden"}
        style={{
          willChange: "opacity, transform",
          transformStyle: "preserve-3d",
        }}
      >
        <div className='team_card'>
          <div className='team_card-visual'>
            <div className='img-wrapper'>
              <a
                href='#'
                className='w-inline-block w-lightbox'
                aria-label='open lightbox'
                aria-haspopup='dialog'
              >
                <img
                  sizes='(max-width: 2400px) 100vw, 2400px'
                  src={member.avatar}
                  alt={`${member.name} portrait`}
                  loading='lazy'
                  className='img-team'
                />
              </a>
            </div>
          </div>
          <div className='team_card-content'>
            <div className='team_card-text'>
              <div className='w-layout-vflex clip-content'>
                <motion.h4
                  className='heading-style-h5'
                  variants={textReveal}
                  initial='hidden'
                  animate={teamGridInView ? "visible" : "hidden"}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {member.name}
                </motion.h4>
              </div>
              <motion.div
                className='text-size-small text-style-muted'
                variants={fadeInUp}
                initial='hidden'
                animate={teamGridInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {member.position}
              </motion.div>
            </div>
            <a
              href={member.linkedIn}
              target='_blank'
              rel='noopener noreferrer'
              className='team_card-link w-inline-block'
            >
              <img
                loading='lazy'
                src='https://cdn.prod.website-files.com/67e10b83fa5b37426335a2be/67e30fad5427f86b5641f9aa_95853ce47f6ae1113b757cb0517f5d63_iconmonstr-linkedin-3.svg'
                alt='LinkedIn'
                className='team_card-logo'
              />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id='section-team' className='section-team' ref={sectionRef}>
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
                    Meet the team
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
                      The people behind the <em>pixels</em>
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
                    We're a compact, hands-on team of designers, strategists and
                    builders — passionate about crafting better AI experiences
                    through human-first design.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className='w-layout-vflex padding-section-extra-large'>
        <div className='w-layout-vflex padding-global'>
          <div className='container-large'>
            <div className='w-layout-vflex flex-vertical-large center'>
              <div className='w-layout-vflex team_content' ref={teamGridRef}>
                <div className='team_grid'>
                  {teamMembers.map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                  ))}
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

export default TeamSection;
