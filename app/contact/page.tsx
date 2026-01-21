'use client';

import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGlobeAmericas,
  FaPlane,
  FaHotel,
  FaCar,
  FaUser,
  FaCalendarAlt,
  FaComments,
  FaHeadset,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdSupportAgent, MdTravelExplore } from 'react-icons/md';
import { GiWorld, GiCommercialAirplane, GiIndianPalace } from 'react-icons/gi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    package: 'india'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      package: 'india'
    });
  };

  // WhatsApp URL generator
  const whatsappUrl = `https://wa.me/918368273091?text=${encodeURIComponent(
    `Hello Travelya! I'm interested in your travel packages. Could you please provide more information?`
  )}`;

  // Call URL
  const callUrl = `tel:+918368273091`;

  // Popular Indian packages
  const indiaPackages = [
    { name: 'Golden Triangle Tour', duration: '6D/5N', price: '$699', cities: ['Delhi', 'Agra', 'Jaipur'], bestFor: 'First-time visitors' },
    { name: 'Kerala Backwaters', duration: '7D/6N', price: '$899', cities: ['Kochi', 'Alleppey', 'Munnar'], bestFor: 'Nature lovers' },
    { name: 'Rajasthan Royalty', duration: '8D/7N', price: '$1099', cities: ['Udaipur', 'Jodhpur', 'Jaisalmer'], bestFor: 'Cultural experience' },
    { name: 'Goa Beach Vacation', duration: '5D/4N', price: '$549', cities: ['North Goa', 'South Goa'], bestFor: 'Beach relaxation' },
    { name: 'Himalayan Adventure', duration: '9D/8N', price: '$1299', cities: ['Shimla', 'Manali', 'Leh'], bestFor: 'Adventure seekers' },
    { name: 'South India Temple Tour', duration: '10D/9N', price: '$1199', cities: ['Chennai', 'Madurai', 'Mysore'], bestFor: 'Spiritual journey' },
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-4xl" />,
      title: 'WhatsApp',
      info: '+91 836 827 3091',
      description: 'Fastest response time',
      color: 'from-green-500 to-emerald-600',
      action: 'Chat Now',
      link: whatsappUrl
    },
    {
      icon: <FaPhone className="text-4xl" />,
      title: 'Call Now',
      info: '+91 836 827 3091',
      description: '24/7 Customer Support',
      color: 'from-blue-500 to-cyan-600',
      action: 'Call Now',
      link: callUrl
    },
    {
      icon: <FaEnvelope className="text-4xl" />,
      title: 'Email Us',
      info: 'info@travelya.com',
      description: 'Response within 2 hours',
      color: 'from-red-500 to-pink-600',
      action: 'Send Email',
      link: 'mailto:info@travelya.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: 'Visit Us',
      info: 'Travelya Headquarters',
      description: 'New Delhi, India',
      color: 'from-purple-500 to-violet-600',
      action: 'Get Directions',
      link: 'https://maps.google.com'
    }
  ];

  // Global offices
  const globalOffices = [
    { city: 'Delhi, India', flag: '🇮🇳', phone: '+91 836 827 3091', email: 'india@travelya.com' },
    { city: 'Dubai, UAE', flag: '🇦🇪', phone: '+971 4 123 4567', email: 'dubai@travelya.com' },
    { city: 'Singapore', flag: '🇸🇬', phone: '+65 6123 4567', email: 'singapore@travelya.com' },
    { city: 'London, UK', flag: '🇬🇧', phone: '+44 20 7123 4567', email: 'london@travelya.com' },
    { city: 'New York, USA', flag: '🇺🇸', phone: '+1 212 123 4567', email: 'ny@travelya.com' },
    { city: 'Sydney, Australia', flag: '🇦🇺', phone: '+61 2 1234 5678', email: 'sydney@travelya.com' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Contact <span className="text-yellow-200">Travelya</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Your Gateway to Unforgettable Indian & International Travel Experiences
            </p>
            
            {/* Emergency Contact Card */}
            <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
              <GiCommercialAirplane className="text-3xl text-white animate-pulse" />
              <div className="text-left">
                <p className="text-white/80 text-sm">24/7 Emergency Support</p>
                <a href={callUrl} className="text-2xl font-bold text-white hover:text-yellow-200 transition-colors">
                  +91 836 827 3091
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp Now</span>
              </a>
              
              <a 
                href={callUrl}
                className="inline-flex items-center space-x-3 bg-white hover:bg-gray-100 text-emerald-600 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaPhone className="text-2xl" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">✈️</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 animate-float animation-delay-300">🇮🇳</div>
        <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-float animation-delay-700">🏔️</div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us Your Way</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach our travel experts. Choose what works best for you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${method.color}`}></div>
                
                <div className="p-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} text-white mb-4`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-1">{method.info}</p>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <span className="font-bold text-gray-700 group-hover:text-emerald-600 transition-colors">
                      {method.action}
                    </span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Global Presence */}
          <div className="bg-gradient-to-r from-emerald-50 via-lime-50 to-yellow-50 rounded-3xl p-8 mb-16 border-2 border-emerald-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Global Presence</h3>
                <p className="text-gray-600">Connect with our offices worldwide</p>
              </div>
              <GiWorld className="text-4xl text-emerald-600" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalOffices.map((office, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">{office.city}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <FaPhone className="text-emerald-600" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <FaEnvelope className="text-emerald-600" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-500">
                  <FaComments className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
              </div>
              
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <FaCheckCircle className="text-6xl text-emerald-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Our travel expert will contact you within 2 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          <FaUser className="inline mr-2 text-emerald-600" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          <FaPhone className="inline mr-2 text-emerald-600" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                          placeholder="+91 123 456 7890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <MdEmail className="inline mr-2 text-emerald-600" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <GiIndianPalace className="inline mr-2 text-emerald-600" />
                        Select Package Interest
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      >
                        <option value="india">India Packages</option>
                        <option value="international">International Packages</option>
                        <option value="custom">Custom Itinerary</option>
                        <option value="honeymoon">Honeymoon Packages</option>
                        <option value="family">Family Vacations</option>
                        <option value="business">Business Travel</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FaCalendarAlt className="inline mr-2 text-emerald-600" />
                        Travel Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 resize-none"
                        placeholder="Tell us about your travel plans, dates, number of travelers, and any special requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span className="flex items-center justify-center space-x-3">
                        <MdTravelExplore className="text-xl" />
                        <span>Get Free Travel Consultation</span>
                      </span>
                    </button>
                    
                    <p className="text-center text-gray-600 text-sm">
                      By submitting, you agree to our Privacy Policy. We'll contact you within 2 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* India Packages & Info */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500">
                  <GiIndianPalace className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Exclusive India Packages</h2>
              </div>
              
              <div className="space-y-6">
                {/* Featured Package */}
                <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white">
                  <div className="absolute top-4 right-4 bg-white text-amber-600 px-4 py-1 rounded-full font-bold">
                    🔥 POPULAR
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Golden Triangle Special</h3>
                    <p className="opacity-90">Delhi • Agra • Jaipur • 6 Days • All Inclusive</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">$699</div>
                      <div className="text-sm opacity-80">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">6D/5N</div>
                      <div className="text-sm opacity-80">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">⭐ 4.9</div>
                      <div className="text-sm opacity-80">Rating</div>
                    </div>
                  </div>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 w-full bg-white text-amber-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Get Package Details on WhatsApp</span>
                  </a>
                </div>
                
                {/* Package Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {indiaPackages.map((pkg, index) => (
                    <div 
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{pkg.name}</h4>
                          <p className="text-sm text-gray-600">{pkg.duration}</p>
                        </div>
                        <div className="text-lg font-bold text-emerald-600">{pkg.price}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {pkg.cities.map((city, i) => (
                            <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                              {city}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Best for:</span> {pkg.bestFor}
                        </p>
                      </div>
                      
                      <a 
                        href={`${whatsappUrl}&text=${encodeURIComponent(`I'm interested in ${pkg.name} package. Please send details.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 w-full py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors group-hover:bg-emerald-100 group-hover:text-emerald-700"
                      >
                        <FaWhatsapp className="text-lg" />
                        <span className="text-sm font-medium">Quick Inquiry</span>
                      </a>
                    </div>
                  ))}
                </div>
                
                {/* Support Info */}
                <div className="bg-gradient-to-r from-emerald-50 to-lime-50 rounded-2xl p-6 border-2 border-emerald-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500">
                      <FaHeadset className="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">24/7 Support Available</h4>
                      <p className="text-gray-600 text-sm">Our travel experts are always ready to assist you</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <FaCheckCircle className="text-emerald-600" />
                      <span className="text-gray-700">Instant WhatsApp response</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaCheckCircle className="text-emerald-600" />
                      <span className="text-gray-700">Customized itinerary planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaCheckCircle className="text-emerald-600" />
                      <span className="text-gray-700">Best price guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaCheckCircle className="text-emerald-600" />
                      <span className="text-gray-700">Visa assistance available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Map & Hours */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Business Hours</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-emerald-600 text-xl" />
                    <div>
                      <div className="font-bold text-gray-800">Monday - Friday</div>
                      <div className="text-gray-600">Customer Support</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800">9:00 AM - 9:00 PM</div>
                    <div className="text-emerald-600 font-bold">24/7 Emergency</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-emerald-600 text-xl" />
                    <div>
                      <div className="font-bold text-gray-800">Saturday - Sunday</div>
                      <div className="text-gray-600">Weekend Support</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800">10:00 AM - 6:00 PM</div>
                    <div className="text-emerald-600 font-bold">WhatsApp 24/7</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-600 to-lime-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <MdSupportAgent className="text-3xl" />
                    <div>
                      <h4 className="font-bold text-xl">Emergency Support</h4>
                      <p>For travelers in India needing immediate assistance</p>
                    </div>
                  </div>
                  <a 
                    href={callUrl}
                    className="inline-flex items-center space-x-3 bg-white text-emerald-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <FaPhone />
                    <span>Call +91 836 827 3091</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-emerald-600 via-lime-500 to-yellow-400 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <GiCommercialAirplane className="text-6xl mx-auto mb-6 animate-pulse" />
                <h3 className="text-3xl font-bold mb-4">Ready to Explore India?</h3>
                <p className="opacity-90">Get expert guidance for your Indian adventure</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-bold">WhatsApp Direct</div>
                    <a href={whatsappUrl} className="text-2xl font-bold hover:text-yellow-200 transition-colors">
                      +91 836 827 3091
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-bold">Direct Call</div>
                    <a href={callUrl} className="text-2xl font-bold hover:text-yellow-200 transition-colors">
                      +91 836 827 3091
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-bold">Email</div>
                    <a href="mailto:india@travelya.com" className="text-xl font-bold hover:text-yellow-200 transition-colors">
                      india@travelya.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-center opacity-90">
                  Average response time: <span className="font-bold">15 minutes</span> on WhatsApp
                </p>
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