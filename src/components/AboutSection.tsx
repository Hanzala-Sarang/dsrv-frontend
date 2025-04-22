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
    <section
      ref={sectionRef}
      className="py-20 bg-[#00B2A9] relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000"
        >
          <div className="inline-block mb-6">
            <div className="p-3 bg-white/10 rounded-full">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>

          <p className="text-lg text-white/90 mb-8 leading-relaxed">
          At "DSRV" our mission is to deliver exceptional manufacturing solutions that drive innovation, ensure quality, and empower industries worldwide. We are committed to producing high-performance products through cutting-edge technology, sustainable practices, and a deep dedication to excellence in every step of our process.
          </p>


          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-sm flex flex-col items-center text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-white/80 text-center">Constantly improving our formula for better results</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-sm flex flex-col items-center text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-white/80 text-center">Premium ingredients for exceptional cleaning</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-sm flex flex-col items-center text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-white/80 text-center">Eco-friendly practices for a cleaner planet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
