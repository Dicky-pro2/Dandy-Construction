import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Dandy <span className="text-gold-500">Construction</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-gold-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-gold-500">About</Link></li>
          <li><Link to="/services" className="hover:text-gold-500">Services</Link></li>
          <li><Link to="/projects" className="hover:text-gold-500">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gold-500">Contact</Link></li>
        </ul>

        {/* Desktop CTA Button */}
        <Link to="/contact" className="hidden md:block">
          <button className="border-2 border-gold-500 px-4 py-2 rounded hover:bg-gold-500 hover:text-white transition">
            Get Quote
          </button>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 font-medium">
          <Link to="/" className="hover:text-gold-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gold-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-gold-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" className="hover:text-gold-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="hover:text-gold-500" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full border-2 border-gold-500 px-4 py-2 rounded hover:bg-gold-500 hover:text-white transition">
              Get Quote
            </button>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;