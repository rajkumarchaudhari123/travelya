'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaPlane, FaHotel, FaCar, FaMapMarkerAlt, FaStar, FaCheckCircle, 
  FaPhone, FaEnvelope, FaShieldAlt, FaTags, FaUsers, FaArrowLeft, 
  FaArrowRight, FaUmbrellaBeach, FaMountain, FaCity, FaSpa, FaLeaf,
  FaWater, FaPalette, FaCamera, FaHeart, FaShareAlt, FaRupeeSign,
  FaCalendarAlt, FaUserFriends, FaGlobeAsia, FaBus, FaTrain
} from 'react-icons/fa';
import { 
  MdFamilyRestroom, MdFestival, MdFoodBank, 
  MdLocalAirport, MdHotel as MdHotelIcon, MdNaturePeople,
  MdLandscape, MdLocalOffer, MdSupportAgent
} from 'react-icons/md';
import {
  GiElephant,
  GiTigerHead,
  GiLotus,
  GiDesert,
  GiRiver,
  GiModernCity,
  GiCampingTent,
  GiBeachBucket,
  GiIsland,
  GiWorld,
  GiCommercialAirplane,
  GiCastle
} from 'react-icons/gi';

import { TbBuildingCastle, TbBeach } from 'react-icons/tb';
import { MdLocationCity, MdTempleHindu } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

export default function TravelAgencyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Indian Destination Images
  const sliderImages = [
    'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&text=Taj+Mahal+India',
    'https://images.unsplash.com/photo-1614181081801-f241632a4d49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&text=Kerala+Backwaters+India'
  ];

  // Indian Tour Categories
  const tourCategories = [
    { icon: <FaUmbrellaBeach />, title: 'Beach Vacations', count: '12+ Tours', color: 'from-blue-500 to-cyan-500', destinations: 'Goa, Andaman, Puri' },
    { icon: <FaMountain />, title: 'Mountain Trekking', count: '15+ Tours', color: 'from-emerald-500 to-green-600', destinations: 'Himalayas, Ladakh, Sikkim' },
    { icon: <MdFamilyRestroom />, title: 'Family Packages', count: '18+ Tours', color: 'from-purple-500 to-pink-500', destinations: 'Kerala, Mysore, Ooty' },
    { icon: <FaSpa />, title: 'Wellness Retreats', count: '8+ Tours', color: 'from-teal-500 to-blue-500', destinations: 'Rishikesh, Kerala, Goa' },
    { icon: <MdNaturePeople />, title: 'Wildlife Safari', count: '10+ Tours', color: 'from-red-500 to-orange-500', destinations: 'Ranthambore, Kaziranga, Jim Corbett' },
  ];

  // Popular Indian Destinations
  const destinations = [
    { 
      name: 'Taj Mahal, Agra', 
      price: '₹8,999', 
      duration: '3D/2N',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80&text=Taj+Mahal',
      rating: 4.9,
      tag: 'Heritage'
    },
    { 
      name: 'Goa Beaches', 
      price: '₹12,499', 
      duration: '5D/4N',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80&text=Goa+Beach',
      rating: 4.8,
      icon: <TbBeach />,
      tag: 'Beach'
    },
    { 
      name: 'Kashmir Valley', 
      price: '₹15,999', 
      duration: '6D/5N',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
      rating: 4.9,
      icon: <FaMountain />,
      tag: 'Mountains'
    },
    { 
      name: 'Jaipur Heritage', 
      price: '₹9,499', 
      duration: '4D/3N',
      image: 'https://images.unsplash.com/photo-1614181081801-f241632a4d49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.7,
      icon: <TbBuildingCastle />,
      tag: 'Heritage'
    },
    { 
      name: 'Kerala Backwaters', 
      price: '₹14,999', 
      duration: '5D/4N',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80&text=Kerala',
      rating: 4.8,
      icon: <GiRiver />,
      tag: 'Nature'
    },
    { 
      name: 'Leh-Ladakh', 
      price: '₹18,499', 
      duration: '7D/6N',
      image: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
      rating: 4.9,
      icon: <GiCampingTent />,
      tag: 'Adventure'
    },
  ];

  // Indian Gallery Images
  const galleryImages = [
    { img: 'https://images.unsplash.com/photo-1665680878111-9d14f3745a9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Varanasi Ghats', location: 'Uttar Pradesh' },
    { img: 'https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?w=800&q=80&text=Darjeeling', title: 'Darjeeling Tea Gardens', location: 'West Bengal' },
    { img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&text=Mumbai', title: 'Mumbai Skyline', location: 'Maharashtra' },
    { img: 'https://images.unsplash.com/photo-1617653202545-931490e8d7e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Andaman Islands', location: 'Andaman & Nicobar' },
    { img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80&text=Udaipur', title: 'Udaipur Lake Palace', location: 'Rajasthan' },
    { img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&text=Rishikesh', title: 'Rishikesh Adventure', location: 'Uttarakhand' },
  ];

  // Services data
  const services = [
    { icon: <FaPlane />, title: 'Flight Booking', desc: 'Best deals on domestic flights with 24/7 support', features: ['Domestic Flights', 'Lowest Price Guarantee', '24/7 Support'] },
    { icon: <FaHotel />, title: 'Hotel Reservation', desc: 'Luxury and budget stays across India with best price guarantee', features: ['5000+ Hotels', 'Best Price', 'Flexible Booking'] },
    { icon: <FaCar />, title: 'Car Rental', desc: 'Convenient transportation at your destination with insurance included', features: ['All Cities', 'Insurance Included', '24/7 Support'] },
    { icon: <FaTrain />, title: 'Train Tickets', desc: 'IRCTC authorized booking with instant confirmation', features: ['IRCTC Authorized', 'Instant Confirmation', 'All Classes'] },
    { icon: <FaBus />, title: 'Bus Tickets', desc: 'Private and government bus bookings across India', features: ['All Routes', 'Live Tracking', 'Safe Travel'] },
    { icon: <FaMapMarkerAlt />, title: 'Tour Packages', desc: 'Customized itineraries for every traveler with expert guides', features: ['Custom Itineraries', 'Expert Guides', 'All Inclusive'] }
  ];

  // Why choose us points
  const whyChooseUs = [
    { icon: <FaShieldAlt />, title: 'Secure Booking', desc: '100% secure payments with SSL encryption and data protection' },
    { icon: <FaTags />, title: 'Best Price Guarantee', desc: 'We offer the most competitive prices for all Indian destinations' },
    { icon: <MdSupportAgent />, title: '24/7 Customer Support', desc: 'Hindi/English speaking support team available round the clock' },
    { icon: <FaUserFriends />, title: 'Expert Guides', desc: 'Local experts who know the hidden gems of every destination' },
    { icon: <FaCalendarAlt />, title: 'Flexible Dates', desc: 'Easy rescheduling and cancellation options available' },
    { icon: <FaRupeeSign />, title: 'No Hidden Charges', desc: 'Transparent pricing with all taxes and fees included upfront' }
  ];

  // Indian Stats
  const stats = [
    { value: '15+', label: 'Years in Indian Tourism', icon: <FaCalendarAlt /> },
    { value: '10,000+', label: 'Happy Travelers', icon: <FaUserFriends /> },
    { value: '50+', label: 'Indian Destinations', icon: <FaMapMarkerAlt /> },
    { value: '4.9/5', label: 'Customer Rating', icon: <FaStar /> },
  ];

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section with Indian Theme */}
      <section id="home" className="relative overflow-hidden">
        <div className="relative h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
          {/* Background Images */}
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 z-10'
                  : 'opacity-0 z-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition z-20"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-lg md:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition z-20"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-lg md:text-xl" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Hero Content - Centered for Mobile */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <GiWorld className="text-xl" />
                    <span className="text-sm md:text-base">Explore Incredible India</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Discover The Beauty of
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 mt-2">
                    Incredible India
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-95 max-w-2xl mx-auto px-4">
                  Experience the diversity of Indian culture, heritage, and landscapes with personalized travel experiences
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-full hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      <FaPlane className="mr-2 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      Book Your Indian Tour
                    </span>
                  </button>
                  <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/30 hover:border-white transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <FaMapMarkerAlt className="mr-2" />
                      Explore Destinations
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Tour Categories */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Explore Indian Tourism
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover perfect vacations across diverse Indian landscapes and cultures
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {tourCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              >
                <div className={`inline-flex p-3 md:p-4 rounded-full bg-gradient-to-r ${category.color} text-white text-xl md:text-2xl mb-3 md:mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1">{category.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2">{category.count}</p>
                <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.destinations}
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400 rounded-xl md:rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-gradient-to-r from-emerald-50 via-lime-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Our Travel Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive travel solutions across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl md:text-4xl">
                    <div className="inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Indian Destinations */}
      <section id="destinations" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Top Indian Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Most loved destinations by our travelers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-gray-800 flex items-center">
                      {destination.icon}
                      <span className="ml-1">{destination.tag}</span>
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center">
                    <FaStar className="text-xs" />
                    <span className="ml-1 text-sm font-bold">{destination.rating}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{destination.name}</h3>
                      <p className="text-gray-600 text-sm">{destination.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-bold text-emerald-600">{destination.price}</div>
                      <p className="text-gray-500 text-xs">per person</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">

                    <button className="px-4 py-2 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-12 md:py-16 bg-gradient-to-r from-emerald-50 via-lime-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Why Choose Travelya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We're committed to making your Indian journey unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl md:text-3xl text-emerald-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 lg:pr-8 mb-6 lg:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready to Explore India?</h3>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  Let our travel experts create a personalized Indian itinerary just for you. 
                  From Himalayan treks to beach vacations, we handle everything.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 text-sm md:text-base">
                    Get Free Consultation
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 px-6 rounded-full transition-all text-sm md:text-base">
                    Call: +91 836 827 3091
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white/20 p-5 md:p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
                    <div className="text-base md:text-lg mb-3">Customer Rating</div>
                    <div className="flex justify-center text-yellow-300 text-lg md:text-xl">
                      {[...Array(5)].map((_, i) => <FaStar key={i} className="mx-1" />)}
                    </div>
                    <div className="text-sm mt-2 opacity-90">Based on 5000+ reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Gallery Section */}
      <section id="gallery" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Indian Travel Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Beautiful moments captured across incredible India
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((item, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-sm opacity-90">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-gradient-to-r from-emerald-50 via-lime-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Plan Your Indian Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Get in touch with our travel experts to plan your perfect Indian adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-emerald-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <FaPhone className="text-emerald-600 text-lg md:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base md:text-lg">Call Us</h4>
                      <p className="text-gray-600 text-sm md:text-base">+91 836 827 3091</p>
                      <p className="text-gray-500 text-xs md:text-sm">Mon-Sun, 9 AM - 9 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <FaEnvelope className="text-emerald-600 text-lg md:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base md:text-lg">Email Us</h4>
                      <p className="text-gray-600 text-sm md:text-base">info@travelya.com</p>
                      <p className="text-gray-500 text-xs md:text-sm">Response within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <FaMapMarkerAlt className="text-emerald-600 text-lg md:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base md:text-lg">Visit Us</h4>
                      <p className="text-gray-600 text-sm md:text-base">Noida sector-82 pocket-12</p>
                      <p className="text-gray-500 text-xs md:text-sm">Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Card */}
              <div className="mt-6 bg-gradient-to-r from-emerald-600 to-lime-500 rounded-xl md:rounded-2xl p-5 md:p-6 text-white">
                <h4 className="font-bold text-lg md:text-xl mb-4">Quick Contact</h4>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  Prefer instant help? Call or WhatsApp us now!
                </p>
                <a 
                  href="https://wa.me/918368273091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp Now
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-emerald-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Send Your Inquiry</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm md:text-base">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm md:text-base">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm md:text-base">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm md:text-base">Travel Destination</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm md:text-base">
                    <option>Select Destination</option>
                    <option>North India</option>
                    <option>South India</option>
                    <option>East India</option>
                    <option>West India</option>
                    <option>Custom Itinerary</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm md:text-base">Message</label>
                  <textarea 
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Tell us about your travel plans, dates, and preferences..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}