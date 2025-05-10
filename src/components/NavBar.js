import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeStyle = {
    color: '#f97316',
    borderBottom: '2px solid #f97316',
    fontWeight: '600'
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Clickable Logo Section */}
        <Link 
          to="/" 
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="mr-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-orange-500">Clean Bloom</h1>
            <p className="text-xs text-gray-600">Because Clean Should Bloom</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            end
            className="text-gray-600 hover:text-orange-500 transition-colors"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact"
            className="text-gray-600 hover:text-orange-500 transition-colors"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/booking"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Book Now
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-gray-600"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <NavLink 
            to="/" 
            end
            className="block py-2 text-gray-600"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services"
            className="block py-2 text-gray-600"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about"
            className="block py-2 text-gray-600"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact"
            className="block py-2 text-gray-600"
            style={({ isActive }) => isActive ? activeStyle : {}}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/booking"
            className="block mt-2 bg-orange-500 text-white px-4 py-2 rounded-md text-center hover:bg-orange-600"
          >
            Book Now
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;