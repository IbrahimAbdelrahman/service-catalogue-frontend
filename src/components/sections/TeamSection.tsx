import React from "react";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/types";

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Eliott Serban",
      position: "Creative Developer",
      linkedIn: "https://www.linkedin.com/in/merdy-mouanga-249680b6/",
    },
    {
      id: "2",
      name: "Camille Torres",
      position: "Product Designer",
      linkedIn: "https://www.linkedin.com/in/merdy-mouanga-249680b6/",
    },
    {
      id: "3",
      name: "Mathis Roux",
      position: "AI Experience Lead",
      linkedIn: "https://www.linkedin.com/in/merdy-mouanga-249680b6/",
    },
  ];

  return (
    <section id='team' className='py-20 lg:py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4'>
            Meet the team
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            The people behind the pixels
          </h3>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We&apos;re a compact, hands-on team of designers, strategists and
            builders — passionate about crafting better AI experiences through
            human-first design.
          </p>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <h4 className='text-2xl font-bold text-gray-900 mb-4'>
            Curious about working with us?
          </h4>
          <h5 className='text-xl text-gray-700 mb-6'>
            Let&apos;s talk about your project — with Mathis
          </h5>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Book a free 30-minute call to explore how we work, ask your
            questions, and get a live tour of Ateko.
          </p>
          <Button
            size='lg'
            className='bg-black text-white hover:bg-gray-800 px-8 py-4'
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a demo with Mathis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
