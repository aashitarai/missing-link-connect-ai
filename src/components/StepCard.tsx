
import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="md:hidden mb-4 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center font-bold mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
