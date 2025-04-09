
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) {
            contentRef.current.classList.add('opacity-100', 'translate-y-0');
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dsrv-blue/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dsrv-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000"
        >
          <div className="inline-block mb-6">
            <div className="p-3 bg-dsrv-blue/10 rounded-full">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-dsrv-blue to-dsrv-green text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At DSRV, we believe that clean clothes shouldn't come at the expense of your fabrics or the environment. 
            That's why we've developed a detergent formula that's tough on stains but gentle on everything else.
          </p>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our commitment to quality means we invest in research and innovation to continually improve our products,
            ensuring you get the best cleaning experience possible. We're dedicated to creating products that make your
            laundry routine easier, more efficient, and more environmentally responsible.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-dsrv-blue/10 flex items-center justify-center text-dsrv-blue mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-center">Constantly improving our formula for better results</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-dsrv-green/10 flex items-center justify-center text-dsrv-green mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600 text-center">Premium ingredients for exceptional cleaning</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-dsrv-blue/10 flex items-center justify-center text-dsrv-blue mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-center">Eco-friendly practices for a cleaner planet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
