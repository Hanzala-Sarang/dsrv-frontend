
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 relative overflow-hidden">
      {/* Wave SVG at top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-gray-600 mb-6">
              Premium quality detergent for a superior cleaning experience. DSRV keeps your clothes fresh, bright, and stain-free.
            </p>
            <div className="flex space-x-4">
              {/* Social icons */}
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-dsrv-blue transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'facebook' && <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.21.5C10.57.5,9.82,3.44,9.82,5.32v2.15H7v4h2.82V22h4.68V11.46h3.1l.42-4Z" />}
                    {social === 'twitter' && <path d="M23.32,6.44a9.63,9.63,0,0,1-2.6.71,4.49,4.49,0,0,0,2-2.49h0a1,1,0,0,0-1.46-1.15,9.72,9.72,0,0,1-3.36,1.29A4.56,4.56,0,0,0,11.31,9a4.2,4.2,0,0,0,.11,1h0A13.69,13.69,0,0,1,1.47,3.9a1,1,0,0,0-1.63,1,4.51,4.51,0,0,0,.92,2.78A1,1,0,0,0,.47,9.16,4.51,4.51,0,0,0,2,11.73a1,1,0,0,0,.7,1.81,4.46,4.46,0,0,0,1.38,1,4.56,4.56,0,0,1-2.9.06,1,1,0,0,0-1.14,1.48,9.75,9.75,0,0,0,15-5.5,12.88,12.88,0,0,0,2.62-5.27h0A1,1,0,0,0,23.32,6.44Z" />}
                    {social === 'instagram' && <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12s0-3.64-.07-4.93Zm-2.54,8a5.73,5.73,0,0,1-.39,1.8A3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35H8.92A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81V8.92A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h6.13A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81V12C19.39,14,19.39,14.05,19.39,15.07Z" />}
                    {social === 'linkedin' && <path d="M22.23,0H1.77A1.77,1.77,0,0,0,0,1.77V22.23A1.77,1.77,0,0,0,1.77,24H22.23A1.77,1.77,0,0,0,24,22.23V1.77A1.77,1.77,0,0,0,22.23,0ZM7.27,20.1H3.64V8.59H7.27Zm-1.82-13A2.05,2.05,0,1,1,7.5,5.05,2.05,2.05,0,0,1,5.45,7.1Zm14.65,13H16.46V14.17c0-1.35,0-3.09-1.88-3.09s-2.17,1.47-2.17,3V20.1H8.77V8.59h3.45v1.59h.05a3.8,3.8,0,0,1,3.42-1.88c3.67,0,4.34,2.41,4.34,5.55v6.25Z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { text: 'Home', link: '/' },
                { text: 'About Us', link: '/about' },
                { text: 'Let\'s Connect', link: '/contact' },
                { text: 'FAQs', link: '#' },
                { text: 'Privacy Policy', link: '#' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className="text-gray-600 hover:text-dsrv-blue transition-colors relative group"
                  >
                    {item.text}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dsrv-blue group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                'DSRV Detergent Powder',
                'DSRV Liquid Detergent',
                'DSRV Stain Remover',
                'DSRV Fabric Softener',
                'DSRV Color Protection',
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-600 hover:text-dsrv-blue transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dsrv-blue group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dsrv-blue/10 flex items-center justify-center mr-3 text-dsrv-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">
                    DSRV & Co. <br />
                    PO & PS Dankuni coal complex <br />
                    Village-kharial <br />
                    PIN-712310
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dsrv-green/10 flex items-center justify-center mr-3 text-dsrv-green">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:sales.dsrv.in" className="text-gray-600 hover:text-dsrv-blue">
                    sales.dsrv.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} DSRV & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
