'use client';

import React, { useState, useRef } from 'react';
import { 
  FaPlane, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaRegCopyright,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset,
  FaChevronRight,
  FaStar,
  FaGlobeAmericas,
  FaUserFriends,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaTree,
  FaWater
} from 'react-icons/fa';
import { 
  MdFlight, 
  MdHotel, 
  MdDirectionsCar, 
  MdTravelExplore, 
  MdBeachAccess,
  MdAttachMoney,
  MdTempleHindu,
  MdLandscape,
  MdLocationCity
} from 'react-icons/md';
import { 
  GiModernCity, 
  GiMountainCave, 
  GiIsland, 
  GiWorld, 
  GiCommercialAirplane,
  GiCastle,
  GiElephant,
  GiTigerHead,
  GiLotus
} from 'react-icons/gi';

import { TbBuildingCastle, TbBeach } from 'react-icons/tb';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Enhanced marquee items with 3D effects - FIXED: No Math.random()
  const marqueeItems = [
    { text: "🌍 EXPLORE 100+ INDIAN DESTINATIONS", icon: <MdTravelExplore />, color: "from-emerald-400 to-blue-400" },
    { text: "✈️ DOMESTIC FLIGHTS WITH BEST PRICES", icon: <MdFlight />, color: "from-blue-400 to-cyan-400" },
    { text: "🏨 5000+ LUXURY & BUDGET HOTELS", icon: <MdHotel />, color: "from-amber-400 to-orange-400" },
    { text: "🚗 PREMIUM CAR RENTAL SERVICES", icon: <MdDirectionsCar />, color: "from-lime-400 to-green-400" },
    { text: "⭐ 10,000+ HAPPY CUSTOMERS", icon: <FaStar />, color: "from-yellow-400 to-amber-400" },
    { text: "🔒 100% SECURE ONLINE BOOKING", icon: <FaShieldAlt />, color: "from-purple-400 to-pink-400" },
    { text: "📞 24/7 CUSTOMER SUPPORT", icon: <FaHeadset />, color: "from-rose-400 to-red-400" },
  ];

  // Social links
  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook', url: 'https://facebook.com/travelya', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/travelya', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com/travelya', color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn', url: 'https://linkedin.com/company/travelya', color: 'bg-blue-700 hover:bg-blue-800' },
    { icon: <FaYoutube />, name: 'YouTube', url: 'https://youtube.com/travelya', color: 'bg-red-600 hover:bg-red-700' },
  ];

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faq' },
  ];

  // Popular INDIAN destinations with icons (using correct icons)
  const destinations = [
    { name: 'Goa Beaches', icon: <FaUmbrellaBeach />, tag: 'Beach', location: 'Goa' },
    { name: 'Kashmir', icon: <FaMountain />, tag: 'Mountains', location: 'Jammu & Kashmir' },
    { name: 'Jaipur', icon: <GiCastle />, tag: 'Heritage', location: 'Rajasthan' },
    { name: 'Kerala', icon: <FaTree />, tag: 'Nature', location: 'Kerala' },
    { name: 'Leh-Ladakh', icon: <GiMountainCave />, tag: 'Adventure', location: 'Ladakh' },
    { name: 'Varanasi', icon: <MdTempleHindu />, tag: 'Spiritual', location: 'UP' },
    { name: 'Rishikesh', icon: <FaWater />, tag: 'Adventure', location: 'Uttarakhand' },
  ];

  // Payment methods
  const paymentMethods = [
    { name: 'Visa', color: 'text-blue-600' },
    { name: 'MasterCard', color: 'text-red-600' },
    { name: 'PayPal', color: 'text-blue-400' },
    { name: 'UPI', color: 'text-purple-600' },
    { name: 'NetBanking', color: 'text-green-600' },
    { name: 'EMI', color: 'text-orange-600' },
  ];

  // Awards and recognitions
  const awards = [
    "🏆 Best Travel Agency 2024",
    "⭐ 4.9/5 Customer Rating",
    "🎖️ ISO 9001 Certified",
    "✅ IATA Approved",
    "🛡️ TAAI Member"
  ];

  // Fixed background elements without Math.random()
  const fixedBackgroundElements = [
    { width: 150, height: 130, top: 20, left: 15 },
    { width: 60, height: 65, top: 65, left: 90 },
    { width: 160, height: 200, top: 5, left: 70 },
    { width: 100, height: 110, top: 75, left: 5 },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Fixed Background Elements - No Random Values */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {fixedBackgroundElements.map((el, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"
            style={{
              width: `${el.width}px`,
              height: `${el.height}px`,
              top: `${el.top}%`,
              left: `${el.left}%`,
              filter: 'blur(40px)',
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      {/* 3D Animated Marquee */}
      <div className="relative bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 py-5 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-blue-400/30 to-purple-400/30 blur-2xl"></div>
        
        <div 
          ref={marqueeRef}
          className="marquee-container relative z-10"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`animate-marquee whitespace-nowrap ${isHovering ? 'pause-animation' : ''}`}>
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span 
                key={index} 
                className="inline-flex items-center mx-10 text-lg font-bold group"
              >
                {/* 3D Effect Container */}
                <div className="relative">
                  {/* 3D Shadow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-transparent rounded-full blur opacity-50 group-hover:opacity-100"></div>
                  
                  {/* Icon Container */}
                  <div className={`relative bg-gradient-to-r ${item.color} p-3 rounded-full transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                </div>
                
                <span className="ml-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                  {item.text}
                </span>
                
                {/* 3D Separator */}
                <div className="relative ml-5">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur opacity-20 group-hover:opacity-40"></div>
                  <div className="relative w-1 h-8 bg-gradient-to-b from-yellow-300 to-amber-600 rounded-full transform rotate-12"></div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Company Info with 3D Logo */}
          <div className="lg:col-span-2 space-y-8">
            {/* 3D Logo Section */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* 3D Card */}
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                <div className="flex items-center space-x-6">
                  {/* 3D Logo Container */}
                  <div className="relative">
                    {/* Logo Shadow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur-xl opacity-30"></div>
                    
                    {/* Logo Image with 3D Effect */}
                    <div className="relative bg-gradient-to-br from-white to-gray-100 p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 border-2 border-emerald-400/30">
                      <div className="w-16 h-16 relative overflow-hidden">
                        <Image
                          src="/logo.png"
                          alt="Travelya Logo"
                          fill
                          className="object-contain"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl">
                                  <svg class="w-12 h-12 text-white transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
                                  </svg>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                      Travelya
                    </h2>
                    <p className="text-sm text-gray-300 mt-1 tracking-widest">EXPLORE INCREDIBLE INDIA</p>
                    
                    {/* Awards */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {awards.slice(0, 3).map((award, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs">
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="mt-6 text-gray-300 leading-relaxed">
                  Making travel dreams come true since 2008. We specialize in creating unforgettable Indian travel experiences with premium services and 24/7 support.
                </p>
                
                {/* Contact Info with 3D Effects */}
                <div className="mt-8 space-y-4">
                  {[
                    { icon: <FaPhoneAlt />, label: 'Call Us', value: '+91 836 827 3091', color: 'from-green-500 to-emerald-500' },
                    { icon: <FaEnvelope />, label: 'Email Us', value: 'travelya@example.com', color: 'from-blue-500 to-cyan-500' },
                    { icon: <FaMapMarkerAlt />, label: 'Visit Us', value: 'Noida sector-82 pocket-12, India', color: 'from-purple-500 to-pink-500' },
                  ].map((contact, idx) => (
                    <div key={idx} className="group/item relative">
                      {/* 3D Hover Effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-gray-800 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-center space-x-4 p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                        <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-full`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-400">{contact.label}</p>
                          <p className="font-bold">{contact.value}</p>
                        </div>
                        <FaChevronRight className="opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links with 3D */}
          <div className="space-y-8">
            <div className="relative group">
              {/* 3D Header */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold mb-6 pb-3 border-b-2 border-cyan-500 inline-block relative">
                  <span className="flex items-center">
                    <GiWorld className="mr-2" />
                    Quick Navigation
                  </span>
                </h3>
              </div>
              
              {/* Links Grid with 3D Hover */}
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="group/link relative p-3 rounded-xl transition-all duration-300 hover:translate-x-2"
                  >
                    {/* 3D Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center space-x-2">
                      <FaChevronRight className="text-cyan-400 text-xs opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all duration-300" />
                      <span className="text-gray-300 group-hover/link:text-white transition-colors">
                        {link.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media with 3D Effects */}
            <div className="mt-8">
              <h4 className="font-bold mb-4 flex items-center">
                <FaUserFriends className="mr-2 text-cyan-400" />
                Follow Our Journey
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative ${social.color} p-3 rounded-full transform hover:scale-110 hover:rotate-12 transition-all duration-300 group/social`}
                  >
                    {/* 3D Glow */}
                    <div className="absolute -inset-2 bg-current rounded-full blur opacity-0 group-hover/social:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <span className="relative z-10">{social.icon}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Popular INDIAN Destinations */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold mb-6 pb-3 border-b-2 border-emerald-500 inline-block relative">
                <span className="flex items-center">
                  <MdTravelExplore className="mr-2" />
                  Top Indian Destinations
                </span>
              </h3>
            </div>
            
            {/* Destinations Grid */}
            <div className="grid grid-cols-2 gap-3">
              {destinations.map((dest, index) => (
                <div 
                  key={index}
                  className="group/dest relative p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:from-emerald-500/20 hover:to-blue-500/20 transition-all duration-300 cursor-pointer"
                >
                  {/* 3D Hover Effect */}
                  <div className="absolute inset-0 border border-emerald-500/20 rounded-xl opacity-0 group-hover/dest:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-emerald-400 to-blue-400 p-2 rounded-lg">
                      {dest.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{dest.name}</div>
                      <div className="text-xs text-gray-400">{dest.location}</div>
                    </div>
                  </div>
                  
                  {/* Tag Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black text-xs px-2 py-1 rounded-full font-bold transform group-hover/dest:scale-110 transition-transform duration-300">
                    {dest.tag}
                  </div>
                </div>
              ))}
            </div>
            
            {/* WhatsApp Support */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-500 p-3 rounded-full">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">Instant Support</h4>
                  <p className="text-sm text-gray-300">Get instant help on WhatsApp</p>
                </div>
              </div>
              <a 
                href="https://wa.me/918368273091"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-center py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="inline mr-2" />
                Chat Now
              </a>
            </div>
          </div>

          {/* Newsletter & Payment */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold mb-6 pb-3 border-b-2 border-purple-500 inline-block relative">
                <span className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  Newsletter
                </span>
              </h3>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30">
              <p className="text-gray-300 mb-6">
                Subscribe to get exclusive travel deals, destination guides, and special offers!
              </p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="relative w-full px-5 py-4 bg-gray-900/80 border border-purple-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Subscribe Now
                </button>
              </form>
              
              {/* Payment Methods */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="font-bold mb-4 flex items-center">
                  <FaCreditCard className="mr-2 text-purple-400" />
                  Secure Payments
                </h4>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((method, index) => (
                    <span key={index} className={`px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm ${method.color}`}>
                      {method.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with 3D Effects */}
        <div className="relative pt-12 border-t border-gray-700/50">
          {/* Glow Line */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-3 text-gray-400 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur opacity-20"></div>
                <FaRegCopyright className="relative" />
              </div>
              <span>{currentYear} Travelya. All rights reserved.</span>
            </div>
            
            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Disclaimer'].map((policy, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 hover:scale-105"
                >
                  {policy}
                </a>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {[
                { text: 'IATA', color: 'from-blue-500 to-cyan-500' },
                { text: 'ISO 9001', color: 'from-emerald-500 to-green-500' },
                { text: 'TAAI', color: 'from-amber-500 to-orange-500' },
              ].map((cert, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${cert.color} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <span className={`relative px-3 py-1.5 bg-gradient-to-r ${cert.color} rounded-full text-xs font-bold`}>
                    {cert.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
        
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
}