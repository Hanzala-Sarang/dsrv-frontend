import React from 'react';

interface ImageSectionProps {
  src: string;
  alt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt }) => {
  return (
    <section className="w-full py-4">
      <div className="max-w-9xl mx-auto px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-xl shadow-xl border border-white mb-8">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
