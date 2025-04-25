import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import WhatsAppChat from '@/components/WhatsApp';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;

        if (isInView) {
          section.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#00B2A9] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={cn(
            "max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000",
            loaded && "opacity-100 translate-y-0"
          )}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About DSRV</h1>
            <p className="text-xl text-gray-100 mb-8">
              Pioneering clean laundry solutions since our founding
            </p>
          </div>
        </div>

        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={(el) => addToRefs(el, 0)}
            className="flex flex-col md:flex-row items-center gap-12 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img
                  src="/labs.png"
                  alt="DSRV Labs"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-dsrv-blue/10 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-dsrv-green/10 -z-10"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative wave-line pb-6 mb-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize laundry care, DSRV began as a small family-owned business in Dankuni. What started as a passion for creating effective cleaning solutions has now grown into a trusted brand known for quality and innovation.
              </p>

              <p className="text-gray-600 mb-6">
                Our journey has been guided by a simple principle: create products that make everyday life easier. We've spent years perfecting our formula to deliver powerful cleaning while being gentle on fabrics and the environment.
              </p>

              <p className="text-gray-600">
                Today, DSRV stands as a testament to our commitment to quality, constantly evolving to meet the changing needs of households while staying true to our original vision of providing superior cleaning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#00B2A9]"> {/* Light background for contrast */}
        <div className="container mx-auto px-4">
          <div
            ref={(el) => addToRefs(el, 1)}
            className="max-w-3xl mx-auto text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#fff]">Our Values</h2> {/* Darker text for contrast */}
            <p className="text-lg text-white"> {/* Darker text for contrast */}
              The principles that guide everything we do
            </p>
          </div>

          <div
            ref={(el) => addToRefs(el, 2)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-1000 delay-300"
          >
            {[
              {
                title: "Quality Excellence",
                description: "We never compromise on quality, ensuring every product delivers outstanding results.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                color: "dsrv-blue"
              },
              {
                title: "Customer Focus",
                description: "Our customers are at the heart of everything we do, driving our innovation and service.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "dsrv-green"
              },
              {
                title: "Environmental Responsibility",
                description: "We're committed to reducing our environmental footprint through sustainable practices.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "dsrv-blue"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${value.color}/10 flex items-center justify-center text-${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={(el) => addToRefs(el, 3)}
            className="flex flex-col md:flex-row md:items-center gap-12 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <div className="w-full md:w-1/2">
              <div className="relative wave-line pb-6 mb-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Company Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    DSRV & Co.<br />
                    PO & PS Dankuni coal complex<br />
                    Village-kharial<br />
                    PIN-712310
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">International Address (Africa Ghana)</h3>
                  <p className="text-gray-600">

                    DSRV & Co.<br />
                    AQ78 NII ADJEI SANKUMA <br />
                    ST GZ0746180<br />
                    NR TESHIE MALIK ROUNDBOUT<br/>
                    ACCRA ACCRA <br />
                    Ghana
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact</h3>
                  <p className="text-gray-600">
                    Email: <a href="mailto:sales@dsrv.in" className="text-dsrv-blue hover:underline">sales@dsrv.in</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                {/* This would ideally be a map */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <img src="/maps.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppChat />
      <Footer />
    </div>
  );
};

export default About;