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
    <section className="relative min-h-screen pt-20 overflow-hidden wave-bg">
      <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 transform transition-all duration-700",
            loaded && "opacity-100 translate-y-0"
          )}>
            <span className="text-dsrv-blue">Clean</span> & <span className="text-dsrv-green">Fresh</span> Wash Every Time
          </h1>
          
          <p className={cn(
            "text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 transform transition-all duration-700 delay-300",
            loaded && "opacity-100 translate-y-0"
          )}>
            DSRV detergent delivers powerful cleaning with advanced stain removal technology, keeping your clothes bright, fresh, and spotless.
          </p>
          
          <div className={cn(
            "space-x-4 opacity-0 transform transition-all duration-700 delay-500",
            loaded && "opacity-100 translate-y-0"
          )}>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-dsrv-blue text-white font-medium hover:bg-dsrv-blue/90 transition-colors">
              Try Now
              <ArrowRight size={16} className="ml-2" />
            </Link>
            
            <Link to="/about" className="inline-flex items-center px-6 py-3 rounded-lg border border-dsrv-blue text-dsrv-blue font-medium hover:bg-dsrv-blue/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Image */}
        <div className={cn(
          "w-full lg:w-1/2 relative opacity-0 transform transition-all duration-700 delay-700",
          loaded && "opacity-100 translate-y-0"
        )}>
          <div className="relative mx-auto w-full max-w-md">
            {/* Product image */}
            <img 
              src="/placeholder.jpg" 
              alt="DSRV Detergent Powder" 
              className="relative z-10 animate-float"
            />
            
            {/* Background Effect */}
            <div className="absolute -inset-4 bg-gradient-radial from-dsrv-blue-light/20 to-transparent rounded-full z-0"></div>
            
            {/* Circular shine effect */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white rounded-full opacity-70 blur-sm z-20"></div>
            
            {/* Wave decoration */}
            <div className="absolute -bottom-10 left-0 right-0 h-20 bg-wave-pattern opacity-10 animate-wave"></div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#F3F4F6" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
