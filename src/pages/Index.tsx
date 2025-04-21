
import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import FeatureSection from '@/components/FeatureSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ImageSection from '@/components/ImageSection';
import CleaningFeatureSection from '@/components/CleaningFeatureSection';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main >
        <HeroSection />
        <ImageSection src="irmtbanner.webp" alt="irmtbanner"/>
        <ProductSection />
        <ImageSection src="rmtbanner.webp" alt="rmtbanner"/>
        <FeatureSection />
        <CleaningFeatureSection />
        <ImageSection src="frmtbanner.webp" alt="frmtbanner"/>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
