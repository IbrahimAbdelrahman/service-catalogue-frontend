import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className='text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
      <CardContent className='p-6'>
        <div className='flex justify-center mb-4'>
          <Avatar className='h-20 w-20'>
            <AvatarFallback className='bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 font-semibold text-xl'>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <h4 className='text-xl font-semibold text-gray-900 mb-2'>
          {member.name}
        </h4>
        <p className='text-gray-600 mb-4'>{member.position}</p>
        {member.linkedIn && (
          <Button
            variant='outline'
            size='sm'
            onClick={() => window.open(member.linkedIn, "_blank")}
            className='text-blue-600 hover:text-blue-700'
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
            LinkedIn
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
