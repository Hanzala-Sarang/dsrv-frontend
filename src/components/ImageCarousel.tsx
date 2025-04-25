import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type Props = {
  images: string[];
  interval?: number; // Optional: Interval in milliseconds
};

const ImageCarousel: React.FC<Props> = ({ images, interval = 3000 }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1 },
      },
      '(min-width: 768px)': {
        slides: { perView: 1 },
      },
    },
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const autoplay = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    };

    timeoutRef.current = setInterval(autoplay, interval);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [instanceRef, interval]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden ">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center relative h-[250px] sm:h-[350px] md:h-[500px] bg-white"
          >
            <img
              src={src}
              alt={`carousel-img-${index}`}
              className="w-full h-full object-contain object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
