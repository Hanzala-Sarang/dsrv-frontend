
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const ProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) imageRef.current.classList.add('opacity-100', 'translate-y-0');
            if (textRef.current) textRef.current.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Product Image */}
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 mb-8 md:mb-0 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="DSRV Detergent Powder" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-dsrv-blue/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dsrv-green/10 rounded-full -z-10"></div>
              
              {/* Sparkle elements */}
              <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-white rounded-full opacity-70 shadow-lg"></div>
              <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-white rounded-full opacity-60 shadow-md"></div>
            </div>
          </div>
          
          {/* Product Details */}
          <div 
            ref={textRef}
            className="w-full md:w-1/2 opacity-0 translate-y-8 transition-all duration-1000 delay-300"
          >
            <div className="relative wave-line pb-6 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-dsrv-blue">Premium Quality</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">DSRV Detergent Powder</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              DSRV detergent powder combines advanced stain-removing technology with a refreshing fragrance to give your clothes a superior clean. Our unique formula targets tough stains while being gentle on fabrics, keeping your clothes looking new for longer.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Superior stain removal",
                "Long-lasting freshness",
                "Gentle on fabrics",
                "Economical usage",
                "Environment-friendly formula"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-dsrv-green/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-dsrv-green"></div>
                  </div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center border border-gray-200 rounded-lg px-4 py-2">
                <div className="mr-3 text-dsrv-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Long-lasting</p>
                  <p className="font-medium">90 Days Freshness</p>
                </div>
              </div>
              
              <div className="flex items-center border border-gray-200 rounded-lg px-4 py-2">
                <div className="mr-3 text-dsrv-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Quality</p>
                  <p className="font-medium">Premium Grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
