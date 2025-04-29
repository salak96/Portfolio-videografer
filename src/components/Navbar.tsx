import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white font-bold text-xl">SLK</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-pink-400 transition-colors">Home</a>
            <a href="#projects" className="text-white hover:text-pink-400 transition-colors">Projects</a>
            <a href="#about" className="text-white hover:text-pink-400 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-pink-400 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center space-y-8">
            <button className="absolute top-4 right-4 text-white" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
            <a href="#" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#projects" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#about" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;