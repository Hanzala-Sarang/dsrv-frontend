import React, { useEffect, useRef } from 'react';
import './bubbles.css';

const ProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const products = [
    {
      name: "Dhomore Detergent Powder",
      image: "/Dhomore product.png",
      description:
        "Combines advanced stain-removing technology with a refreshing fragrance to give your clothes a superior clean.",
      features: [
        "Superior stain removal",
        "Long-lasting freshness",
        "Gentle on fabrics",
        "Economical usage",
        "Environment-friendly formula",
      ],
      color: "text-blue-600",
      badge: "Premium Quality",
    },
    {
      name: "Dhomore Liquid Detergent",
      image: "liquid detergent.webp",
      description:
        "Dissolves quickly in water, removing tough stains and dirt while protecting fabric color and softness.",
      features: [
        "Quick dissolving formula",
        "Color protection",
        "Gentle on hands",
        "Concentrated cleaning power",
        "Fresh fragrance",
      ],
      color: "text-blue-600",
      badge: "Advanced Formula",
    },
    {
      name: "Loowit Mosquito Incense Stick",
      image: "/agarbatti.webp",
      description:
        "Offers long-lasting protection from mosquitoes with a pleasant natural aroma.",
      features: [
        "Repels mosquitoes effectively",
        "Natural ingredients",
        "Long-lasting effect",
        "Safe for indoor use",
        "Pleasant fragrance",
      ],
      color: "text-blue-600",
      badge: "Natural Defense",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#00B2A9] overflow-hidden">
      {/* Bubbles */}
      <div className="bubble-group left-bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="bubble-group right-bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Products</h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="opacity-0 translate-y-8 transition-all duration-1000"
            >
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 sm:h-64 md:h-72 object-contain bg-white"
                  />
                  <span className={`absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow ${product.color}`}>
                    {product.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3">
                    <div className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Quality</p>
                      <p className="font-medium text-sm">Long-lasting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
