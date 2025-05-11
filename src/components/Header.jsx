import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const NavLink = ({ to, children, currentPath }) => {
  const isActive = currentPath === to;
  
  return (
    <Link to={to} className="relative px-3 py-2 text-sm font-medium">
      <span className={isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600 transition-colors'}>
        {children}
      </span>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-full"
          layoutId="underline"
        />
      )}
    </Link>
  );
};

const Header = ({ companyName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Code2 className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-lg font-bold text-gray-900">
            {companyName} <span className="text-blue-600">Internship</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/about" currentPath={location.pathname}>About Me</NavLink>
          <NavLink to="/journey" currentPath={location.pathname}>Journey</NavLink>
          <NavLink to="/projects" currentPath={location.pathname}>Projects</NavLink>
          <NavLink to="/challenges" currentPath={location.pathname}>Challenges</NavLink>
          <NavLink to="/thank-you" currentPath={location.pathname}>Thank You</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white py-4"
        >
          <div className="container-custom flex flex-col space-y-3">
            <NavLink to="/" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
              About Me
            </NavLink>
            <NavLink to="/journey" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
              Journey
            </NavLink>
            <NavLink to="/projects" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/challenges" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
              Challenges
            </NavLink>
            <NavLink to="/thank-you" currentPath={location.pathname} onClick={() => setIsMenuOpen(false)}>
              Thank You
            </NavLink>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;