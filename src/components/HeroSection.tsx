'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-[#00B2A9]">
      <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col lg:flex-row items-center z-10 relative">
                {/* Right Image Section for Desktop | Top for Mobile */}
                <div className={cn(
          "w-full lg:w-1/2 relative transition-all duration-700 delay-700 transform",
          loaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"
        )}>
          <div className="relative mx-auto w-full max-w-md z-20">
            {/* Product Image with pop-up */}
            <img 
              src="/dhomore.webp"
              alt="DSRV Detergent Powder"
              className="relative z-30  object-contain drop-shadow-xl transition-transform duration-700 ease-out animate-pop"
              width={400}
            />

            {/* Optional Glow Background */}
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl z-10"></div>

            {/* Shine Spot */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white rounded-full opacity-70 blur-sm z-40"></div>
          </div>
        </div>
        {/* Left Content Section for Desktop | Bottom for Mobile */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0 z-20">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-700 transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="text-white">Clean</span> & <span className="text-gray-200">Fresh</span> Wash Every Time
          </h1>

          <p className={cn(
            "text-lg text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-300 transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Dhomore detergent delivers powerful cleaning with advanced stain removal technology, keeping your clothes bright, fresh, and spotless.
          </p>

          <div className={cn(
            "space-x-4 transition-all duration-700 delay-500 transform",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-[#00B2A9] font-medium hover:bg-gray-100 transition-colors">
              Try Now
              <ArrowRight size={16} className="ml-2" />
            </Link>

            <Link to="/about" className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>


      </div>

      {/* SVG Wave Background at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#F3F4F6"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pop {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-pop {
          animation: pop 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
