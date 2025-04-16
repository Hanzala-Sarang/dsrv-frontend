import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Let\'s Connect', path: '/contact' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
      "bg-white",
      scrolled ? "shadow-md py-2" : "py-4"
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="relative z-50">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-colors relative group",
                "text-[#005f99] hover:text-blue-700",
                location.pathname === link.path && "font-semibold text-blue-800"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                "bg-[#005f99]",
                location.pathname === link.path && "w-full"
              )}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden relative z-50 focus:outline-none transition-colors",
            "text-[#005f99]"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          `fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform lg:hidden`,
          isOpen ? 'translate-x-0 bg-[#005f99]' : 'translate-x-full'
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xl font-medium transition-colors",
                "text-white hover:text-white/80",
                location.pathname === link.path && "font-semibold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
