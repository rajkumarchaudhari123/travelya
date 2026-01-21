'use client';

import React, { useState, useEffect } from 'react';
import { FaPlane, FaHotel, FaCar, FaMapMarkerAlt, FaStar, FaCheckCircle, FaPhone, FaEnvelope, FaShieldAlt, FaTags, FaUsers, FaArrowLeft, FaArrowRight, FaUmbrellaBeach, FaMountain, FaCity, FaSpa } from 'react-icons/fa';
import { MdFamilyRestroom, MdLocalAirport, MdHotel as MdHotelIcon } from 'react-icons/md';

export default function TravelAgencyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Image URLs from Unsplash
  const sliderImages = [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ];

  // Tour Categories
  const tourCategories = [
    { icon: <FaUmbrellaBeach />, title: 'Beach Vacations', count: '25+ Tours', color: 'from-blue-400 to-cyan-400' },
    { icon: <FaMountain />, title: 'Mountain Trekking', count: '18+ Tours', color: 'from-green-400 to-emerald-500' },
    { icon: <FaCity />, title: 'City Tours', count: '32+ Tours', color: 'from-purple-400 to-pink-500' },
    { icon: <MdFamilyRestroom />, title: 'Family Packages', count: '15+ Tours', color: 'from-orange-400 to-red-500' },
    { icon: <FaSpa />, title: 'Wellness Retreats', count: '12+ Tours', color: 'from-teal-400 to-blue-500' },
  ];

  // Popular Destinations
  const destinations = [
    { name: 'Maldives', price: '$1,299', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80' },
    { name: 'Switzerland', price: '$2,499', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w-800&q=80' },
    { name: 'Bali', price: '$899', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80' },
    { name: 'Dubai', price: '$1,599', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
    { name: 'Thailand', price: '$749', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80' },
    { name: 'Paris', price: '$1,899', image: 'https://images.unsplash.com/photo-1502602898667-7e55819e91e2?w=800&q=80' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80',
    'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80'
  ];

  // Services data
  const services = [
    { icon: <FaPlane />, title: 'Flight Booking', desc: 'Best deals on domestic and international flights with 24/7 support' },
    { icon: <FaHotel />, title: 'Hotel Reservation', desc: 'Luxury and budget stays worldwide with best price guarantee' },
    { icon: <FaCar />, title: 'Car Rental', desc: 'Convenient transportation at your destination with insurance included' },
    { icon: <FaMapMarkerAlt />, title: 'Tour Packages', desc: 'Customized itineraries for every traveler with expert guides' }
  ];

  // Why choose us points
  const whyChooseUs = [
    { icon: <FaShieldAlt />, title: 'Secure Booking', desc: 'Your data and payments are 100% secure with SSL encryption' },
    { icon: <FaTags />, title: 'Best Price Guarantee', desc: 'We offer the most competitive prices or we match the difference' },
    { icon: <FaUsers />, title: '24/7 Customer Support', desc: 'Our dedicated team is always ready to help you anytime' },
    { icon: <MdLocalAirport />, title: 'Flexible Cancellation', desc: 'Easy cancellation and rescheduling options available' }
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
    <div className="pt-16">
      {/* Hero Section with 3D Slider */}
      <section id="home" className="relative overflow-hidden">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0 scale-100'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full scale-90'
                  : 'opacity-0 translate-x-full scale-90'
              }`}
              style={{
                transform: `perspective(1000px) rotateY(${
                  index === currentSlide ? '0deg' : index < currentSlide ? '-10deg' : '10deg'
                }) scale(${index === currentSlide ? 1 : 0.9})`,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
              </div>
            </div>
          ))}
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Explore The World With
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                     Travelya
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-95">
                  Your journey begins with us - We make travel dreams come true with personalized experiences
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    <span className="flex items-center justify-center">
                      <FaPlane className="mr-2 transform -rotate-45" />
                      Book Your Trip
                    </span>
                  </button>
                  <button className="btn-secondary border-white text-white hover:bg-white/20">
                    View All Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover perfect vacations tailored to your interests
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tourCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} text-white text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="text-4xl mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Top picks for your next unforgettable journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-blue-200">Starting from {destination.price}</p>
                    </div>
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full font-bold transition-all transform group-hover:scale-105">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose  Travelya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out from the competition with exceptional service
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-xl"
              >
                <div className="text-3xl mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 lg:pr-12 mb-8 lg:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready for Your Next Adventure?</h3>
                <p className="text-lg mb-6 opacity-95">
                  Let our travel experts create a personalized itinerary just for you. 
                  From flights to accommodations and activities, we handle everything.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                    Get Free Consultation
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 px-8 rounded-full transition-all">
                    View Sample Itineraries
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 text-center">
                <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl font-bold mb-2">4.9/5</div>
                  <div className="text-lg mb-4">Customer Rating</div>
                  <div className="flex justify-center text-yellow-300 text-xl">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <div className="text-sm mt-2 opacity-90">Based on 2000+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Travel Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moments captured from around the world by our travelers
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Travel destination ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="font-bold text-xl mb-2">Destination {index + 1}</div>
                    <div className="text-sm">Experience this amazing place</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with our travel experts to plan your next adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">info@aktravelya.com</p>
                    <p className="text-gray-600">bookings@aktravelya.com</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                  <h4 className="font-bold text-gray-800 text-xl mb-4">Ready to Travel?</h4>
                  <p className="text-gray-600 mb-6">
                    Contact us today for a free consultation and customized travel quote. 
                    No commitment required.
                  </p>
                  <button className="btn-primary">
                    Request a Free Quote
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your travel plans, dates, and preferences..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}