import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Dandy <span className="text-gold-500">Construction</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A trusted construction company delivering durable, high-quality
            residential and commercial structures across Nigeria. Built with
            excellence, delivered with pride.
          </p>
          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="bg-gray-700 hover:bg-blue-600 text-white p-2 rounded transition duration-300">
              📘
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="bg-gray-700 hover:bg-pink-500 text-white p-2 rounded transition duration-300">
              📸
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="bg-gray-700 hover:bg-sky-500 text-white p-2 rounded transition duration-300">
              🐦
            </a>
            <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer"
              className="bg-gray-700 hover:bg-green-500 text-white p-2 rounded transition duration-300">
              💬
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link to="/" className="hover:text-gold-500 transition duration-200">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-500 transition duration-200">
                👷 About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-500 transition duration-200">
                🔧 Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gold-500 transition duration-200">
                🏗️ Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-500 transition duration-200">
                📞 Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link to="/services" className="hover:text-gold-500 transition duration-200">
                🏗️ Building Construction
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-500 transition duration-200">
                🔨 Renovation & Remodeling
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-500 transition duration-200">
                📋 Project Management
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-500 transition duration-200">
                ⚙️ Civil Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <span className="text-gray-400">
                12 Construction Avenue, GRA Phase 2,
                Port Harcourt, Rivers State, Nigeria.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <span className="text-gray-400">+234 800 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">📧</span>
              <span className="text-gray-400 break-all">info@dandyconstruction.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">🕐</span>
              <span className="text-gray-400">Mon – Fri: 8:00am – 6:00pm</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Dandy Construction. All rights reserved.</p>
        <p>
          Built with ❤️ by{" "}
          <span className="text-gold-500 font-medium">Dandy Construction Team</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;