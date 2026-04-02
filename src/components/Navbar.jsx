import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-surface/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            Devanand<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-text/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/Devanand_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all text-sm font-medium"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2 bg-surface mt-4 rounded-lg border border-surface/50"
          >
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-text/80 hover:text-white hover:bg-background/50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/Devanand_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 mt-4 bg-primary text-white px-4 py-2 rounded-md text-base font-medium justify-center"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
