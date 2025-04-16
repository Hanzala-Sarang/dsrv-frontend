
import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import FeatureSection from '@/components/FeatureSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

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
        <ProductSection />
        <FeatureSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
