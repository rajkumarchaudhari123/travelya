'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';
import { MdFlight, MdHotel, MdDirectionsCar, MdPalette } from 'react-icons/md';
import { GiWorld, GiMountainCave, GiModernCity, GiPalmTree } from 'react-icons/gi';
import { TbBuildingCastle } from 'react-icons/tb';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [logoImage, setLogoImage] = useState<string | null>('/logo.png');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logo upload
  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerLogoUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => handleLogoUpload(e as any);
    fileInput.click();
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Destinations', 
      href: '/destinations',
      dropdown: [
        { name: 'Domestic', icon: <MdFlight />, color: 'text-yellow-600' },
        { name: 'Beach Holidays', icon: <GiPalmTree />, color: 'text-blue-500' },
        { name: 'Mountain Trekking', icon: <GiMountainCave />, color: 'text-emerald-600' },
        { name: 'Cultural Tours', icon: <TbBuildingCastle />, color: 'text-purple-600' },
        { name: 'City Breaks', icon: <GiModernCity />, color: 'text-cyan-600' },
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Flight Booking', icon: <MdFlight />, color: 'text-sky-600' },
        { name: 'Hotel Reservation', icon: <MdHotel />, color: 'text-amber-600' },
        { name: 'Car Rental', icon: <MdDirectionsCar />, color: 'text-lime-600' },
        { name: 'Tour Packages', icon: <GiWorld />, color: 'text-green-600' },
        { name: 'Visa Assistance', icon: '📝', color: 'text-rose-600' },
        { name: 'Travel Insurance', icon: '🛡️', color: 'text-teal-600' },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/aboutus' },
    { name: 'Contact', href: '/contact' },
  ];

  // Color palette for yellowish-greenish theme
  const gradientColors = {
    normal: 'from-emerald-500 via-lime-500 to-yellow-400',
    scrolled: 'from-emerald-600 via-lime-600 to-yellow-500',
    hover: 'from-emerald-400 via-lime-400 to-yellow-300',
    button: 'from-yellow-500 via-amber-500 to-orange-500',
    buttonHover: 'from-yellow-600 via-amber-600 to-orange-600',
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-700 transform ${
        isScrolled 
          ? 'bg-gradient-to-r from-emerald-700/95 via-lime-700/95 to-yellow-600/95 backdrop-blur-xl shadow-2xl py-3 scale-100'
          : 'bg-gradient-to-r from-emerald-500 via-lime-500 to-yellow-400 py-5 shadow-xl'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo with 3D Effects - Fixed Logo Display */}
            <div 
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={triggerLogoUpload}
              title="Click to change logo"
            >
              <div className="relative">
                {/* 3D Outer Glow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-yellow-300 to-lime-400 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                
                {/* 3D Shadow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-800/30 via-lime-800/30 to-yellow-800/30 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Logo Container with 3D Depth */}
                <div className="relative bg-gradient-to-br from-white via-emerald-50 to-yellow-50 p-3 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-3xl border-2 border-white/30">
                  {/* Logo Image */}
                  {logoImage ? (
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={logoImage}
                        alt="Travelya Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <MdFlight className="text-3xl text-gradient bg-gradient-to-r from-emerald-600 to-yellow-500 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      {/* Animation dots */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping animation-delay-300"></div>
                    </div>
                  )}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 text-xs font-bold bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-2 py-1 rounded-full animate-bounce">
                  ✨
                </div>
              </div>
              
              {/* Brand Name with 3D Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-2xl">
                  Travelya
                </span>
                <span className="text-xs font-semibold tracking-widest text-yellow-200/90">
                  EXPLORE • DREAM • DISCOVER
                </span>
              </div>
            </div>

            {/* Desktop Navigation with 3D Effects */}
            <div className="hidden xl:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group" style={{ perspective: '1000px' }}>
                  {/* Navigation Link with 3D Hover */}
                  <a
                    href={link.href}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    className="relative px-5 py-3 rounded-xl font-semibold text-white/95 hover:text-white transition-all duration-500 flex items-center space-x-2 overflow-hidden group"
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-lime-500/0 to-yellow-400/0 group-hover:from-emerald-500/20 group-hover:via-lime-500/20 group-hover:to-yellow-400/20 rounded-xl transition-all duration-500"></div>
                    
                    {/* 3D Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-500"></div>
                    
                    {/* Content */}
                    <span className="relative drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">{link.name}</span>
                    {link.dropdown && (
                      <FiChevronDown className="relative transform transition-transform duration-500 group-hover:rotate-180" />
                    )}
                    
                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-emerald-300 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500 transform -translate-x-1/2 group-hover:translate-x-0"></div>
                  </a>
                  
                  {/* 3D Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div 
                      className="absolute left-0 mt-3 w-72 bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform transition-all duration-500 origin-top"
                      style={{ transformStyle: 'preserve-3d', transform: 'rotateX(0deg)' }}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {/* Dropdown Header */}
                      <div className="bg-gradient-to-r from-emerald-600 via-lime-600 to-yellow-500 p-4 text-white">
                        <div className="flex items-center space-x-2">
                          {link.name === 'Destinations' ? <GiWorld className="text-xl" /> : <MdPalette className="text-xl" />}
                          <span className="font-bold">{link.name}</span>
                        </div>
                      </div>
                      
                      {/* Dropdown Items */}
                      <div className="p-2">
                        {link.dropdown.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="group/item flex items-center space-x-4 px-4 py-3 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className={`text-2xl ${item.color} transform group-hover/item:scale-125 transition-transform duration-300`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <span className="font-semibold text-gray-800 group-hover/item:text-emerald-700">
                                {item.name}
                              </span>
                            </div>
                            <div className="opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"></div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions - Book Now Button Only */}
            <div className="hidden xl:flex items-center space-x-4">
              {/* Book Now Button with 3D Effect */}
              <button className="relative group">
                {/* Outer Glow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                
                {/* Button with 3D Depth */}
                <div className="relative bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:translate-y-[-2px] border-2 border-white/30">
                  <span className="flex items-center space-x-3 drop-shadow-lg">
                    <MdFlight className="transform -rotate-45 group-hover:rotate-12 transition-transform duration-700" />
                    <span className="tracking-wider">BOOK NOW</span>
                  </span>
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-2 -right-2 text-xs bg-white text-amber-600 px-2 py-1 rounded-full font-bold animate-bounce">
                    ✈️
                  </div>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button with 3D Effect */}
            <div className="xl:hidden flex items-center space-x-3">
              {/* Mobile Book Now Button */}
              <button className="relative group">
                {/* Outer Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                
                {/* Button with 3D Depth */}
                <div className="relative bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white font-bold px-4 py-3 rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:translate-y-[-1px] border-2 border-white/30">
                  <span className="flex items-center space-x-2 drop-shadow-lg text-sm">
                    <MdFlight className="transform -rotate-45 group-hover:rotate-12 transition-transform duration-700" />
                    <span className="tracking-wide">BOOK</span>
                  </span>
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/30 group-hover:border-white/50 transition-all duration-500">
                  {isMenuOpen ? (
                    <FiX className="text-2xl text-white" />
                  ) : (
                    <FiMenu className="text-2xl text-white" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu with 3D Effects */}
          <div className={`xl:hidden overflow-hidden transition-all duration-700 ${
            isMenuOpen 
              ? 'max-h-[500px] opacity-100 mt-6 scale-100' 
              : 'max-h-0 opacity-0 scale-95'
          }`}>
            <div className="bg-gradient-to-br from-emerald-600/95 via-lime-600/95 to-yellow-500/95 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl">
              {navLinks.map((link, index) => (
                <div key={index} className="mb-3">
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between w-full text-left text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <span className="font-semibold">{link.name}</span>
                    {link.dropdown && (
                      <FiChevronDown className="transform transition-transform duration-300" />
                    )}
                    <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-emerald-300 group-hover:w-full transition-all duration-500"></div>
                  </a>
                </div>
              ))}
              
              {/* Mobile Actions */}
              <div className="mt-8 pt-6 border-t border-white/30 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <button className="flex items-center justify-center space-x-3 bg-white/15 backdrop-blur-md text-white p-4 rounded-xl border border-white/30 hover:bg-white/25 transition-all duration-300">
                    <FiUser />
                    <span className="font-medium">Login / Sign Up</span>
                  </button>
                  <button className="flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white font-bold p-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-[1.02]">
                    <MdFlight className="transform -rotate-45 text-xl" />
                    <span className="text-lg">Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </>
  );
}