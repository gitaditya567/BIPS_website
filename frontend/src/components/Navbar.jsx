import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-16 h-16 transition-transform duration-300 transform hover-scale-105">
            <img 
               src="/assets/logo_footer.png" 
               alt="BIPS Logo" 
               className="w-full h-full object-contain mix-blend-multiply" 
            />
          </div>
          <div className="flex flex-col border-l-2 border-primary/20 pl-4">
            <h1 className="text-lg md-text-xl font-bold font-serif leading-tight tracking-tight text-primary">
              Bimla International
            </h1>
            <p className="text-[10px] md-text-xs uppercase tracking-[0.25em] font-bold text-secondary">
              Public School
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md-flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`block px-4 py-2 text-base font-bold uppercase tracking-widest transition-all duration-300 rounded-xl border border-transparent ${location.pathname === link.path ? 'text-secondary bg-primary/5 border-primary/10' : 'text-text-dark hover:text-secondary hover:bg-primary/5'}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn bg-secondary text-white hover:bg-primary text-xs uppercase tracking-widest py-3 px-6 shadow-md transition-all duration-300 transform hover:-translate-y-1">
              Apply Now <ArrowRight size={16} />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md-hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#1a365d" /> : <Menu color="#1a365d" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md-hidden overflow-hidden border-t border-primary/10"
          >
            <ul className="flex flex-col py-6">
              {navLinks.map((link) => (
                <li key={link.path} className="w-full">
                  <Link 
                    to={link.path} 
                    className={`block w-full py-4 px-8 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${location.pathname === link.path ? 'bg-primary/5 text-primary border-l-4 border-secondary' : 'text-text-light hover:bg-primary/5 hover:text-primary pl-9'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="mt-6 px-8 w-full">
                <Link to="/contact" className="btn bg-secondary text-white w-full text-center text-xs uppercase tracking-widest py-3 hover:bg-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Apply Now <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolling Ticker Bar */}
      <div className="ticker-bar border-t border-white/10 mt-4">
        <div className="animate-marquee px-4">
         Welcome to Bimla International Public School | ADMISSION OPEN FOR ACADEMIC YEAR 2026-27 | ENROLL NOW TO SECURE YOUR CHILD'S FUTURE | VISIT CAMPUS OR CALL +91 123 456 7890 FOR DETAILS  | Admisson Open 2026-27 | 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
