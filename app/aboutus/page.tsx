'use client';

import React, { useState } from 'react';
import { 
  FaUserTie, 
  FaLightbulb, 
  FaHandsHelping, 
  FaAward, 
  FaHeart, 
  FaShieldAlt, 
  FaMapMarkedAlt,
  FaStar,
  FaQuoteLeft,
  FaGlobeAmericas,
  FaUsers,
  FaCalendarCheck,
  FaRocket,
  FaPlane,
  FaCompass,
  FaUmbrellaBeach,
  FaMountain
} from 'react-icons/fa';
import { MdTravelExplore, MdOutlineFamilyRestroom, MdCelebration, MdLocationOn, MdGroups } from 'react-icons/md';
import { GiWorld, GiMedal, GiJourney, GiStonePath, GiPartyFlags, GiCommercialAirplane } from 'react-icons/gi';
import { TbBeach, TbBuildingCastle } from 'react-icons/tb';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('story');
  const [imageError, setImageError] = useState({
    neeraj: false,
    priya: false,
    rohan: false,
    anjali: false
  });

  // Handle image errors
  const handleImageError = (imageName: keyof typeof imageError) => {
    setImageError(prev => ({ ...prev, [imageName]: true }));
  };

  // Team members data
  const teamMembers = [
    { 
      name: 'Neeraj Yadav', 
      role: 'Founder & CEO', 
      image: 'https://res.cloudinary.com/dpfdj5xc0/image/upload/v1757316584/Chat/ChatFiles/jg2ayriwp85dnaqedmrr.jpg', 
      desc: 'B.Tech Graduate passionate about revolutionizing travel experiences with innovative technology',
      expertise: ['Tech Innovation', 'Customer Experience', 'Strategic Planning'],
      experience: '3+ Years',
      key: 'neeraj' as const
    },
    { 
      name: 'Rajkumar', 
      role: 'Travel Director', 
      image: 'https://res.cloudinary.com/dpfdj5xc0/image/upload/v1758807935/Chat/ChatFiles/icw5snk1w7rpe1iyoyd5.jpg', 
      desc: '15+ years expertise in luxury travel planning and destination management',
      expertise: ['Luxury Travel', 'Destination Planning', 'VIP Services'],
      experience: '2+ Years',
      key: 'priya' as const
    },
    { 
      name: 'Rajnish', 
      role: 'Operations Head', 
      image: '/rajnish.jpg', 
      desc: 'Expert in logistics, customer experience and operational excellence',
      expertise: ['Logistics', 'Operations', 'Quality Control'],
      experience: '2+ Years',
      key: 'rohan' as const
    },
    { 
      name: 'Adesh', 
      role: 'Customer Relations', 
      image: '/adesh.jpg', 
      desc: 'Dedicated to creating unforgettable experiences for every traveler',
      expertise: ['Customer Service', 'Relationship Management', 'Personalization'],
      experience: '1+ Years',
      key: 'anjali' as const
    },
  ];

  // Values data
  const ourValues = [
    { 
      icon: <FaHeart />, 
      title: 'Passion for Travel', 
      desc: 'We live and breathe travel experiences, crafting journeys that inspire', 
      color: 'from-rose-500 to-pink-600',
      stats: '100% Passion'
    },
    { 
      icon: <FaShieldAlt />, 
      title: 'Safety First', 
      desc: 'Your security is our top priority with 24/7 support and verified partners', 
      color: 'from-blue-500 to-cyan-600',
      stats: '0 Safety Incidents'
    },
    { 
      icon: <FaHandsHelping />, 
      title: 'Personalized Service', 
      desc: 'Tailored experiences designed specifically for your preferences', 
      color: 'from-emerald-500 to-green-600',
      stats: '5000+ Personalized Trips'
    },
    { 
      icon: <FaAward />, 
      title: 'Excellence', 
      desc: 'Striving for perfection in every journey we curate', 
      color: 'from-amber-500 to-yellow-600',
      stats: '4.9/5 Rating'
    },
    { 
      icon: <FaUsers />, 
      title: 'Customer Focus', 
      desc: 'Your satisfaction drives our success and innovation', 
      color: 'from-violet-500 to-purple-600',
      stats: '98% Satisfaction'
    },
    { 
      icon: <FaGlobeAmericas />, 
      title: 'Global Perspective', 
      desc: 'Local insights with international standards and quality', 
      color: 'from-indigo-500 to-blue-600',
      stats: '100+ Destinations'
    },
  ];

  // Milestones - FIXED: Removed random values causing hydration mismatch
  const milestones = [
    { 
      year: '2025', 
      event: 'Travelya Founded', 
      desc: 'Journey begins on 1st March 2025', 
      icon: <FaRocket />, 
      color: 'from-emerald-500 to-lime-500',
      width: 'w-full'
    },
    { 
      year: '2025', 
      event: 'First 100 Trips', 
      desc: 'Successfully organized 100+ memorable trips', 
      icon: <FaCalendarCheck />, 
      color: 'from-blue-500 to-cyan-500',
      width: 'w-11/12'
    },
    { 
      year: '2026', 
      event: '5,000+ Customers', 
      desc: 'Served 5,000+ happy travelers globally', 
      icon: <FaUsers />, 
      color: 'from-purple-500 to-pink-500',
      width: 'w-10/12'
    },
    { 
      year: '2026', 
      event: '100 Destinations', 
      desc: 'Expanded network to 100+ worldwide destinations', 
      icon: <FaMapMarkedAlt />, 
      color: 'from-amber-500 to-orange-500',
      width: 'w-9/12'
    },
  ];

  // Services we excel in
  const services = [
    { icon: <MdOutlineFamilyRestroom />, name: 'Family Vacations', desc: 'Perfect getaways for unforgettable family bonding', color: 'bg-emerald-100 text-emerald-600' },
    { icon: <MdCelebration />, name: 'Wedding Celebrations', desc: 'Magical destinations for your special day', color: 'bg-rose-100 text-rose-600' },
    { icon: <TbBeach />, name: 'Beach Holidays', desc: 'Tropical paradises and serene coastal escapes', color: 'bg-blue-100 text-blue-600' },
    { icon: <FaMountain />, name: 'Mountain Treks', desc: 'Adventure in the world\'s most stunning peaks', color: 'bg-amber-100 text-amber-600' },
    { icon: <TbBuildingCastle />, name: 'Cultural Tours', desc: 'Immerse in rich heritage and traditions', color: 'bg-purple-100 text-purple-600' },
    { icon: <GiCommercialAirplane />, name: 'Business Travel', desc: 'Efficient and comfortable corporate journeys', color: 'bg-cyan-100 text-cyan-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-emerald-50/20 to-yellow-50/20">
      {/* Hero Section with FIXED background - removed random values */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-lime-500 to-yellow-400 pt-32 pb-28">
        {/* Simple background pattern without random values */}
        <div className="absolute inset-0">
          {/* Fixed positioned circles - no random values */}
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 animate-pulse"></div>
        </div>
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2070')] opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 px-6 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <GiJourney className="text-2xl text-white mr-3" />
              <span className="text-white font-medium">Since March 1, 2025</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Our <span className="text-yellow-200 drop-shadow-2xl">Journey</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/95 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Redefining travel with innovation, passion, and unforgettable experiences
            </p>
            
            {/* Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {[
                { label: 'Happy Travelers', value: '5,000+', icon: '😊' },
                { label: 'Destinations', value: '100+', icon: '🌍' },
                { label: 'Expert Guides', value: '50+', icon: '👨‍✈️' },
                { label: 'Trip Rating', value: '4.9/5', icon: '⭐' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated Travel Icons - FIXED: Removed random positions */}
        <div className="absolute top-10 left-10 text-5xl opacity-20 animate-float">✈️</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20 animate-float animation-delay-300">🏝️</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-20 animate-float animation-delay-700">🗺️</div>
        <div className="absolute top-1/3 right-1/4 text-4xl opacity-20 animate-float animation-delay-500">🏔️</div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 px-4 -mt-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Founder Image & Info - FIXED Image Display */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-yellow-500/20"></div>
                  
                  {imageError.neeraj ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100 via-lime-100 to-yellow-100">
                      <div className="text-center p-8">
                        <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 p-2">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <FaUserTie className="text-6xl text-emerald-600" />
                          </div>
                        </div>
                        <p className="text-gray-600 font-medium">Neeraj Yadav</p>
                        <p className="text-sm text-gray-500">Founder & CEO</p>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src="https://res.cloudinary.com/dpfdj5xc0/image/upload/v1757316584/Chat/ChatFiles/jg2ayriwp85dnaqedmrr.jpg"
                      alt="Neeraj Yadav - Founder & CEO"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={() => handleImageError('neeraj')}
                      loading="lazy"
                    />
                  )}
                  
                  {/* Badge on Image */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-600 to-lime-500 text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center space-x-2">
                    <GiMedal className="text-xl" />
                    <span>Founder & CEO</span>
                  </div>
                </div>
                
                {/* Founder Details */}
                <div className="p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Neeraj Yadav</h3>
                      <div className="flex items-center space-x-4">
                        <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          B.Tech Graduate
                        </span>
                        <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                          Travel Innovator
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">3+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    A visionary entrepreneur with a B.Tech background, Neeraj founded Travelya with the 
                    mission to bridge the gap between technology and memorable travel experiences.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-xl">
                      <div className="font-semibold text-emerald-800 mb-1">Expertise</div>
                      <div className="text-sm text-gray-600">Tech Innovation & Strategy</div>
                    </div>
                    <div className="bg-lime-50 p-4 rounded-xl">
                      <div className="font-semibold text-lime-800 mb-1">Focus</div>
                      <div className="text-sm text-gray-600">Customer Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl rotate-12 opacity-80 blur-sm"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full opacity-70 blur-sm"></div>
            </div>

            {/* Founder's Message */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br from-emerald-200 to-yellow-200 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-500 shadow-xl">
                    <FaLightbulb className="text-3xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Vision & Mission</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-2"></div>
                  </div>
                </div>
                
                {/* Quote Section */}
                <div className="relative mb-10">
                  <FaQuoteLeft className="text-6xl text-emerald-200 absolute -top-6 -left-4" />
                  <div className="pl-12">
                    <p className="text-2xl text-gray-800 leading-relaxed font-medium italic mb-6">
                      "Our vision is simple: to make every journey not just a trip, but a story worth telling. 
                      We combine technology with heartfelt service to create experiences that stay with you forever."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">NY</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Neeraj Yadav</div>
                        <div className="text-emerald-600">Founder, Travelya</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mission Card */}
                <div className="bg-gradient-to-r from-emerald-50 to-lime-50 rounded-3xl p-8 border-l-8 border-emerald-500 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <GiStonePath className="mr-3 text-emerald-600" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To deliver seamless, safe, and extraordinary travel experiences by leveraging technology 
                    while maintaining the personal touch that makes every journey special. We're committed to 
                    innovation without compromising on the human connection.
                  </p>
                </div>
                
                {/* Services Highlights */}
                <div className="mt-12">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">We Excel In:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
                        <div className={`inline-flex p-3 rounded-xl ${service.color} mb-3`}>
                          {service.icon}
                        </div>
                        <div className="font-semibold text-gray-800 mb-1">{service.name}</div>
                        <div className="text-sm text-gray-600">{service.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Promise Section */}
          <div className="relative mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 rounded-4xl transform -skew-y-2"></div>
            <div className="relative bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 rounded-4xl p-12 md:p-16 text-white transform skew-y-2">
              <div className="transform -skew-y-2">
                <div className="text-center max-w-5xl mx-auto">
                  <GiJourney className="text-8xl mx-auto mb-8 animate-pulse opacity-80" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Promise to You</h2>
                  <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
                    Be it a family vacation, wedding celebration, or business trip — we ensure your journey 
                    is smooth, stress-free, and truly memorable. Every mile with us is crafted with care.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { icon: <FaShieldAlt />, title: 'Safe & Secure', desc: 'Verified partners, 24/7 support, and comprehensive safety measures' },
                      { icon: <MdTravelExplore />, title: 'Personalized', desc: 'Tailored itineraries matching your preferences and budget' },
                      { icon: <FaHeart />, title: 'Memorable', desc: 'Creating experiences you will cherish for a lifetime' },
                    ].map((item, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border border-white/30">
                        <div className="text-5xl mb-6 opacity-90">{item.icon}</div>
                        <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                        <p className="opacity-90">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tabs Section */}
          <div className="mb-24">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: 'story', label: 'Our Journey', icon: <GiStonePath /> },
                { id: 'values', label: 'Our Values', icon: <FaHeart /> },
                { id: 'team', label: 'Our Team', icon: <MdGroups /> },
                { id: 'milestones', label: 'Milestones', icon: <FaRocket /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center space-x-3 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-2xl transform scale-105'
                      : 'bg-white text-gray-800 shadow-xl hover:shadow-2xl hover:scale-105'
                  }`}
                >
                  <span className="text-2xl">{tab.icon}</span>
                  <span className="text-lg">{tab.label}</span>
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.id ? 'bg-white opacity-100' : 'bg-emerald-500 opacity-0 group-hover:opacity-100'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-500">
              {/* Our Journey Tab */}
              {activeTab === 'story' && (
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 rounded-3xl blur-2xl opacity-30"></div>
                    <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                      <GiWorld className="text-8xl text-emerald-600 mb-8 opacity-80" />
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">The Travelya Evolution</h3>
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Born from a simple idea in 2025, Travelya has grown into a trusted name in travel. 
                          What started as a passion project has transformed into a platform connecting travelers 
                          with unforgettable experiences worldwide.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Our engineering background gives us a unique advantage in travel logistics, allowing 
                          us to create seamless, efficient, and enjoyable journeys for every customer.
                        </p>
                        <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-2xl">
                          <h4 className="font-bold text-gray-900 mb-4 text-xl">Why Choose Travelya?</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              'Engineering precision in planning',
                              '24/7 customer support',
                              'Verified partners & guides',
                              'Flexible policies',
                              'Personalized itineraries',
                              'No hidden costs'
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full"></div>
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Growth Story</h3>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">01</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h4>
                          <p className="text-gray-700">
                            Started with a vision to make travel planning easier and more enjoyable 
                            through technology and personalized service.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">02</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Building Trust</h4>
                          <p className="text-gray-700">
                            Focused on building relationships with customers and partners, 
                            creating a network of trusted service providers.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">03</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Expanding Horizons</h4>
                          <p className="text-gray-700">
                            Growing our destination portfolio while maintaining the quality 
                            and personal touch that defines Travelya.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Our Values Tab */}
              {activeTab === 'values' && (
                <div>
                  <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                      The principles that guide every decision we make and every journey we create
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ourValues.map((value, index) => (
                      <div 
                        key={index}
                        className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                      >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        
                        {/* Icon */}
                        <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${value.color} text-white text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {value.icon}
                        </div>
                        
                        {/* Content */}
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h4>
                        <p className="text-gray-600 mb-6">{value.desc}</p>
                        
                        {/* Stats - FIXED: Removed dynamic width causing hydration mismatch */}
                        <div className="pt-6 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Commitment Level</span>
                            <span className="font-bold text-gray-900">{value.stats}</span>
                          </div>
                          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${value.color} transition-all duration-1000 group-hover:w-full`}
                              style={{ width: '95%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Our Team Tab */}
              {activeTab === 'team' && (
                <div>
                  <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Dream Team</h3>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                      Passionate professionals dedicated to crafting your perfect travel experience
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                      <div 
                        key={member.key}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4"
                      >
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                          
                          {imageError[member.key] ? (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-yellow-500/20">
                              <div className="text-center">
                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 p-2 mb-4">
                                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <FaUserTie className="text-3xl text-emerald-600" />
                                  </div>
                                </div>
                                <p className="text-gray-700 font-medium">{member.name}</p>
                              </div>
                            </div>
                          ) : (
                            <img 
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                              onError={() => handleImageError(member.key)}
                              loading="lazy"
                            />
                          )}
                          
                          {/* Experience Badge */}
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-lime-500 text-white px-4 py-2 rounded-full text-sm font-bold z-20">
                            {member.experience}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                          <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                          <p className="text-gray-600 text-sm mb-6">{member.desc}</p>
                          
                          {/* Expertise Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {member.expertise.map((skill, idx) => (
                              <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar key={star} className="text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">Expert</span>
                          </div>
                        </div>
                        
                        {/* Founder Badge */}
                        {index === 0 && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold z-20 shadow-lg">
                            Founder
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Milestones Tab - FIXED: No random values */}
              {activeTab === 'milestones' && (
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-emerald-400 via-lime-400 to-yellow-400"></div>
                  
                  <div className="space-y-16">
                    {milestones.map((milestone, index) => (
                      <div 
                        key={index}
                        className={`relative flex flex-col lg:flex-row items-center ${
                          index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                        }`}
                      >
                        {/* Content Card */}
                        <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:order-2'}`}>
                          <div className={`group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${
                            index % 2 === 0 ? 'border-r-8 border-emerald-500' : 'border-l-8 border-yellow-500'
                          }`}>
                            <div className="flex items-center space-x-6 mb-6">
                              <div className={`p-5 rounded-2xl bg-gradient-to-r ${milestone.color} text-white text-3xl transform group-hover:rotate-12 transition-transform duration-500`}>
                                {milestone.icon}
                              </div>
                              <div>
                                <div className="text-4xl font-black text-gray-900">{milestone.year}</div>
                                <div className="text-gray-600">Milestone</div>
                              </div>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">{milestone.event}</h4>
                            <p className="text-gray-600">{milestone.desc}</p>
                            
                            {/* Progress Line - FIXED: Using Tailwind classes instead of random values */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Achievement</span>
                                <span className="font-bold text-gray-900">✓ Completed</span>
                              </div>
                              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full bg-gradient-to-r ${milestone.color} ${milestone.width}`}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Timeline Dot (Desktop) */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 border-8 border-white shadow-2xl"></div>
                        
                        {/* Year Marker (Mobile) */}
                        <div className="lg:hidden mt-6 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 border-4 border-white shadow-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{milestone.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Final Call to Action - FIXED: Removed random background pattern */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 rounded-4xl blur-3xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-emerald-600 via-lime-500 to-yellow-400 rounded-3xl p-12 md:p-16 border-2 border-white/30 shadow-2xl overflow-hidden">
              {/* Simple fixed pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-4xl">✈️</div>
                <div className="absolute bottom-10 right-10 text-4xl">🌍</div>
                <div className="absolute top-1/2 left-1/4 text-4xl">🏝️</div>
                <div className="absolute top-1/3 right-1/3 text-4xl">🗺️</div>
              </div>
              
              <div className="relative text-center max-w-4xl mx-auto">
                <GiJourney className="text-8xl text-white/50 mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready for Your Next Adventure?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join thousands of happy travelers who have experienced the Travelya difference. 
                  Let's create your perfect journey together!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group px-10 py-5 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3">
                    <FaCompass className="text-xl" />
                    <span>Start Planning Your Trip</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                  <button className="group px-10 py-5 bg-emerald-800/30 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-emerald-800/50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3">
                    <FaUsers className="text-xl" />
                    <span>Contact Our Team</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">✉️</span>
                  </button>
                </div>
                
                {/* Trust Badges */}
                <div className="mt-12 pt-12 border-t border-white/30">
                  <p className="text-white/80 mb-6">Trusted By Travelers Worldwide</p>
                  <div className="flex flex-wrap justify-center gap-8">
                    {['🏆 Best Service 2025', '⭐ 4.9/5 Rating', '✅ Verified Partner', '🛡️ Secure Booking'].map((badge, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .rounded-4xl {
          border-radius: 2.5rem;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}