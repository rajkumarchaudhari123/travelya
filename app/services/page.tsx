'use client';

import React, { useState } from 'react';
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaPassport,
  FaSuitcase,
  FaCreditCard,
  FaHeadset,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaStar
} from 'react-icons/fa';
import { MdDirectionsCar, MdLocalAirport, MdFamilyRestroom, MdCardTravel } from 'react-icons/md';
import { GiWorld, GiCommercialAirplane, GiSuitcase, GiPriceTag } from 'react-icons/gi';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('flight');

  // Main Services
  const services = [
    {
      id: 'flight',
      title: 'Flight Booking',
      icon: <FaPlane className="text-4xl" />,
      description: 'Best deals on domestic and international flights',
      features: [
        'Compare 500+ airlines',
        '24/7 booking support',
        'Flexible date search',
        'Lowest price guarantee',
        'Seat selection',
        'Flight status alerts'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'hotel',
      title: 'Hotel Reservation',
      icon: <FaHotel className="text-4xl" />,
      description: 'Luxury and budget accommodations worldwide',
      features: [
        '100,000+ properties',
        'Best price guarantee',
        'Free cancellation',
        'Member discounts',
        'Reviews & ratings',
        'Special offers'
      ],
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'car',
      title: 'Car Rental',
      icon: <FaCar className="text-4xl" />,
      description: 'Convenient transportation at your destination',
      features: [
        'Global providers',
        'Best rates guaranteed',
        '24/7 roadside assistance',
        'Insurance included',
        'Flexible pickup',
        'GPS navigation'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'tour',
      title: 'Tour Packages',
      icon: <FaMapMarkerAlt className="text-4xl" />,
      description: 'Customized itineraries for every traveler',
      features: [
        'Tailored packages',
        'Expert local guides',
        'All-inclusive deals',
        'Group & private tours',
        'Cultural experiences',
        'Adventure activities'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'visa',
      title: 'Visa Assistance',
      icon: <FaPassport className="text-4xl" />,
      description: 'Complete visa processing support',
      features: [
        'Document preparation',
        'Application filing',
        'Appointment booking',
        'Status tracking',
        'Expert guidance',
        'Fast processing'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'insurance',
      title: 'Travel Insurance',
      icon: <FaShieldAlt className="text-4xl" />,
      description: 'Comprehensive coverage for peace of mind',
      features: [
        'Medical coverage',
        'Trip cancellation',
        'Baggage protection',
        '24/7 emergency',
        'COVID-19 coverage',
        'Family plans'
      ],
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      icon: <MdFamilyRestroom className="text-3xl" />,
      title: 'Family Vacations',
      description: 'Special packages for families with kids'
    },
    {
      icon: <GiCommercialAirplane className="text-3xl" />,
      title: 'Business Travel',
      description: 'Corporate travel management solutions'
    },
    {
      icon: <FaSuitcase className="text-3xl" />,
      title: 'Honeymoon Packages',
      description: 'Romantic getaways for couples'
    },
    {
      icon: <MdCardTravel className="text-3xl" />,
      title: 'Cruise Bookings',
      description: 'Luxury cruise packages worldwide'
    },
    {
      icon: <GiWorld className="text-3xl" />,
      title: 'International Tours',
      description: 'Multi-country travel experiences'
    },
    {
      icon: <GiPriceTag className="text-3xl" />,
      title: 'Group Discounts',
      description: 'Special rates for group travel'
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Discuss your travel preferences and requirements',
      icon: <FaUsers className="text-2xl" />
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Create customized itinerary and budget',
      icon: <FaMapMarkerAlt className="text-2xl" />
    },
    {
      step: 3,
      title: 'Booking',
      description: 'Secure all travel arrangements',
      icon: <FaCreditCard className="text-2xl" />
    },
    {
      step: 4,
      title: 'Support',
      description: '24/7 assistance throughout your journey',
      icon: <FaHeadset className="text-2xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Our <span className="text-yellow-200">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Comprehensive travel solutions for every need
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">✈️</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 animate-float animation-delay-300">🏨</div>
        <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-float animation-delay-700">🚗</div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a perfect journey, from flights to accommodations and beyond
            </p>
          </div>

          {/* Service Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${activeService === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-2xl`
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                    }`}
                >
                  <span>{service.icon}</span>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Side - Service Info */}
                <div className="p-8 md:p-12">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${services.find(s => s.id === activeService)?.color} text-white mb-6`}>
                    {services.find(s => s.id === activeService)?.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {services.find(s => s.id === activeService)?.title}
                  </h3>

                  <p className="text-xl text-gray-600 mb-8">
                    {services.find(s => s.id === activeService)?.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {services.find(s => s.id === activeService)?.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FaCheckCircle className="text-emerald-600 text-xl" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300">
                      Get Started
                    </button>
                    <button className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Side - Stats */}
                <div className={`bg-gradient-to-br ${services.find(s => s.id === activeService)?.color} p-8 md:p-12 text-white`}>
                  <div className="h-full flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-8">Why Choose Our {services.find(s => s.id === activeService)?.title}?</h4>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-bold">99%</div>
                          <div className="text-white/80">Customer Satisfaction</div>
                        </div>
                        <FaStar className="text-3xl text-yellow-300" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-bold">24/7</div>
                          <div className="text-white/80">Support Available</div>
                        </div>
                        <FaHeadset className="text-3xl" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-bold">Best</div>
                          <div className="text-white/80">Price Guarantee</div>
                        </div>
                        <GiPriceTag className="text-3xl" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-bold">5K+</div>
                          <div className="text-white/80">Happy Customers</div>
                        </div>
                        <FaUsers className="text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">More Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-100 to-lime-100 text-emerald-600 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                    Explore →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-emerald-50 to-lime-50 rounded-3xl p-8 border-2 border-emerald-100 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">How It Works</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="text-emerald-600">
                        {step.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>

                  {step.step < 4 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-emerald-300"></div>
                      <div className="absolute right-0 top-1/2 transform translate-y-[-50%]">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-emerald-400 transform rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Plan Your Journey?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let our travel experts create the perfect itinerary for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918368273091?text=Hello%20Travelya!%20I%20want%20to%20get%20a%20free%20quote%20for%20a%20travel%20package.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Get  Quote
                  </button>
                </a>

                <a
                  href="https://wa.me/918368273091?text=Hello%20Travelya!%20I%20would%20like%20to%20contact%20a%20travel%20expert%20for%20guidance.%20Please%20assist%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    Contact Expert
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}