import React from 'react';
import { Sparkles, Eraser, Feather } from 'lucide-react';

const CleaningFeatureSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#00B2A9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="tshirt stain.webp" // Replace with your actual image path
            alt="Stain Removal Comparison"
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Choose Based on Your Needs
          </h2>
          <p className="text-lg text-gray-100">
            From daily dirt to stubborn stains, find the right treatment for your clothes. Our cleaning solutions are powerful yet fabric-friendly.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Sparkles className="text-white w-6 h-6 mt-1" />
              <div>
                <strong className="block text-white">Deep Cleaning</strong>
                <span className="text-gray-100">Ensures freshness and hygiene down to the threads.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Eraser className="text-white w-6 h-6 mt-1" />
              <div>
                <strong className="block text-white">Super Stain Removal</strong>
                <span className="text-gray-100">Targets and lifts even the toughest stains.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Feather className="text-white w-6 h-6 mt-1" />
              <div>
                <strong className="block text-white">Gentle on Fabrics</strong>
                <span className="text-gray-100">Preserves softness and longevity of garments.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CleaningFeatureSection;
