// components/DhomoreIntro.tsx
import React from 'react';

const DhomoreIntro: React.FC = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
          <span className="font-semibold text-gray-800">"Dhomore"</span> is a high-quality detergent powder packed with powerful cleaning agents that tackle tough stains, dirt, and grease — even in large loads.
          <br className="hidden sm:block" />
          Let <span className="text-[#00B2A9] font-semibold">Dhomore</span> <span className="italic">wash it!</span>
        </p>
    </section>
  );
};

export default DhomoreIntro;
