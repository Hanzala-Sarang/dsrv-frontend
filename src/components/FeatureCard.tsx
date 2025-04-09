
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 overflow-hidden relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-dsrv-blue/5 to-dsrv-green/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon */}
      <div className="relative mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-dsrv-blue/10 to-dsrv-green/10 flex items-center justify-center text-dsrv-blue group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 relative">{title}</h3>
      <p className="text-gray-600 relative">{description}</p>
      
      {/* Hover effect line */}
      <div className={cn(
        "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-dsrv-blue to-dsrv-green w-0 group-hover:w-full transition-all duration-500"
      )}></div>
    </div>
  );
};

export default FeatureCard;
