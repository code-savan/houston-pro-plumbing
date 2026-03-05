'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-white font-display font-bold text-xl sm:text-2xl tracking-tight">
              {BUSINESS_DETAILS.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-orange' : ''}>
                  {word}{' '}
                </span>
              ))}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center gap-2 bg-orange text-white px-5 py-2.5 rounded-full font-bold hover:bg-orange/90 transition-all shadow-md hover:shadow-orange/20"
            >
              <Phone size={18} />
              <span>{BUSINESS_DETAILS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-navy flex flex-col md:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-4 py-5 border-b border-white/10">
              <a href="#" className="text-white font-display font-bold text-xl tracking-tight">
                {BUSINESS_DETAILS.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-orange' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 focus:outline-none"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-grow flex flex-col items-center justify-center space-y-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-bold text-white hover:text-orange transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="flex items-center justify-center gap-3 w-full bg-orange text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-orange/20 mt-8"
              >
                <Phone size={24} />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm mb-2">Available 24/7 for Emergencies</p>
              <p className="text-white font-bold">{BUSINESS_DETAILS.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
