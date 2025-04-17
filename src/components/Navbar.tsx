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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Lock scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: "Let's Connect", path: '/contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50 bg-white border shadow-lg rounded-xl",
        "transition-all duration-300"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-50">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium text-[#005f99] transition relative group",
                location.pathname === link.path && "font-semibold text-blue-800"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute left-0 bottom-0 h-0.5 w-0 bg-[#005f99] transition-all duration-300 group-hover:w-full",
                location.pathname === link.path && "w-full"
              )}></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <button className="px-5 py-2 rounded-full bg-[#005f99] text-white font-semibold hover:opacity-90 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
  className={cn(
    "lg:hidden z-50",
    isOpen ? "text-white" : "text-[#005f99]"
  )}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={26} /> : <Menu size={26} />}
</button>

      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "fixed inset-0 bg-[#005f99] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-white text-2xl font-medium hover:text-white/80 transition",
              location.pathname === link.path && "font-semibold"
            )}
          >
            {link.name}
          </Link>
        ))}

        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <button className="px-6 py-3 rounded-full text-[#005f99] bg-white font-semibold text-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
