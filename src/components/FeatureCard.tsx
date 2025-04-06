
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
      {/* Background decorative element */}
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-red-50 rounded-full opacity-70"></div>
      
      <div className="relative z-10">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-red-50 rounded-full text-red-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
