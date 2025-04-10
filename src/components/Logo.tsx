import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <div className="text-3xl font-bold relative">
        <span className="text-dsrv-blue">D</span>
        <span className="text-dsrv-blue">S</span>
        <span className="text-dsrv-blue">R</span>
        <span className="text-dsrv-blue">V</span>
        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-dsrv-blue via-dsrv-green-light to-dsrv-green"></div>
      </div>
      <div className="absolute -top-1 -right-2 w-3 h-3 rounded-full bg-dsrv-blue-light opacity-70 animate-bubble"></div>
      <div className="absolute -bottom-1 -left-2 w-2 h-2 rounded-full bg-dsrv-green-light opacity-70 animate-bubble animation-delay-500"></div>
    </div>
  );
};

export default Logo;