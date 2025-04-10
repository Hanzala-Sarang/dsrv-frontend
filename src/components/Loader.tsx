
import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative w-40 h-40 mb-6">
        {/* DSRV Logo with water effect */}
        <div className="text-6xl font-bold text-center relative overflow-hidden">
          <span className="text-dsrv-blue">D</span>
          <span className="text-dsrv-green">S</span>
          <span className="text-dsrv-blue">R</span>
          <span className="text-dsrv-green">V</span>
          
          {/* Water filling effect */}
          <div 
            className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-dsrv-blue-light to-dsrv-green-light transition-all duration-1000 ease-out" 
            style={{ 
              height: `${progress}%`,
              opacity: 0.7
            }}
          ></div>
        </div>
        
        {/* Bubbles */}
        <div className="bubbles">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bubble" style={{ animationDuration: `${2 + Math.random() * 2}s` }}></div>
          ))}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-60 h-1 mt-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-dsrv-blue to-dsrv-green transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
