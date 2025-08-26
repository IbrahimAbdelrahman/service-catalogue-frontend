import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className='h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
      <CardHeader>
        <div className='flex items-center justify-between mb-2'>
          <div className='p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg'>
            {service.icon}
          </div>
          <Badge variant='secondary' className='text-xs'>
            Service
          </Badge>
        </div>
        <CardTitle className='text-xl font-semibold text-gray-900'>
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-gray-600 mb-4 leading-relaxed'>
          {service.description}
        </CardDescription>
        <div className='space-y-2'>
          <p className='text-sm font-medium text-gray-900'>Deliverables:</p>
          <p className='text-sm text-gray-600'>{service.deliverables}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
