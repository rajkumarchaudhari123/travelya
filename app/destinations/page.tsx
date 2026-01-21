'use client';

import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaStar, 
  FaCalendarAlt, 
  FaUserFriends,
  FaSearch,
  FaFilter,
  FaPlane,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaLeaf,
  FaPalette
} from 'react-icons/fa';
import { MdBeachAccess, MdHiking, MdFamilyRestroom, MdLocalDining } from 'react-icons/md';
import { GiModernCity, GiMountainCave, GiPalmTree, GiVillage, GiIsland } from 'react-icons/gi';

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories
  const categories = [
    { id: 'all', name: 'All Destinations', icon: <FaMapMarkerAlt />, count: 25 },
    { id: 'beach', name: 'Beach Holidays', icon: <FaUmbrellaBeach />, count: 8 },
    { id: 'mountain', name: 'Mountain Getaways', icon: <FaMountain />, count: 6 },
    { id: 'city', name: 'City Tours', icon: <FaCity />, count: 7 },
    { id: 'cultural', name: 'Cultural Heritage', icon: <FaPalette />, count: 4 },
    { id: 'nature', name: 'Nature & Wildlife', icon: <FaLeaf />, count: 5 },
  ];

  // Destinations data
  const destinations = [
    {
      id: 1,
      name: 'Goa Beaches',
      category: 'beach',
      country: 'India',
      rating: 4.8,
      duration: '5-7 Days',
      bestFor: 'Couples, Beach Lovers',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      highlights: ['Sunset Cruises', 'Water Sports', 'Portuguese Heritage', 'Seafood']
    },
    {
      id: 2,
      name: 'Swiss Alps',
      category: 'mountain',
      country: 'Switzerland',
      rating: 4.9,
      duration: '7-10 Days',
      bestFor: 'Adventure, Photography',
      price: '$2499',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      highlights: ['Skiing', 'Mountain Trains', 'Lake Views', 'Chocolate Tours']
    },
    {
      id: 3,
      name: 'Bali Paradise',
      category: 'beach',
      country: 'Indonesia',
      rating: 4.7,
      duration: '6-8 Days',
      bestFor: 'Honeymoon, Wellness',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80',
      highlights: ['Rice Terraces', 'Temples', 'Beach Clubs', 'Spa Retreats']
    },
    {
      id: 4,
      name: 'Tokyo Metropolis',
      category: 'city',
      country: 'Japan',
      rating: 4.6,
      duration: '5-7 Days',
      bestFor: 'Foodies, Tech Lovers',
      price: '$1899',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      highlights: ['Cherry Blossoms', 'Sushi Making', 'Anime Culture', 'Shopping']
    },
    {
      id: 5,
      name: 'Paris Romance',
      category: 'city',
      country: 'France',
      rating: 4.8,
      duration: '4-6 Days',
      bestFor: 'Couples, Art Lovers',
      price: '$1499',
      image: 'https://images.unsplash.com/photo-1502602898667-7e55819e91e2?w=800&q=80',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'River Seine', 'French Cuisine']
    },
    {
      id: 6,
      name: 'Maldives Luxury',
      category: 'beach',
      country: 'Maldives',
      rating: 4.9,
      duration: '7-10 Days',
      bestFor: 'Luxury, Honeymoon',
      price: '$2999',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      highlights: ['Overwater Villas', 'Snorkeling', 'Spa', 'Private Beaches']
    },
    {
      id: 7,
      name: 'Himalayan Trek',
      category: 'mountain',
      country: 'Nepal',
      rating: 4.5,
      duration: '10-14 Days',
      bestFor: 'Adventure, Trekking',
      price: '$1299',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      highlights: ['Everest View', 'Mountain Villages', 'Buddhist Monasteries', 'Trekking']
    },
    {
      id: 8,
      name: 'Dubai Luxury',
      category: 'city',
      country: 'UAE',
      rating: 4.7,
      duration: '5-7 Days',
      bestFor: 'Luxury, Shopping',
      price: '$1799',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Shopping Malls', 'Luxury Dining']
    },
    {
      id: 9,
      name: 'Kerala Backwaters',
      category: 'nature',
      country: 'India',
      rating: 4.6,
      duration: '6-8 Days',
      bestFor: 'Family, Nature',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?w=800&q=80',
      highlights: ['Houseboat Stay', 'Ayurveda', 'Elephant Safari', 'Tea Gardens']
    },
    {
      id: 10,
      name: 'Egypt Pyramids',
      category: 'cultural',
      country: 'Egypt',
      rating: 4.4,
      duration: '7-9 Days',
      bestFor: 'History, Culture',
      price: '$1199',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80',
      highlights: ['Pyramids', 'Nile Cruise', 'Museums', 'Ancient Temples']
    },
  ];

  // Filter destinations based on category and search
  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = activeCategory === 'all' || dest.category === activeCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-400 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Explore <span className="text-yellow-200">Destinations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Discover amazing places around the world with our curated travel experiences
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">🗺️</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 animate-float animation-delay-300">✈️</div>
        <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-float animation-delay-700">🌍</div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search destinations, countries, or activities..."
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                    />
                  </div>
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaFilter className="mr-3 text-emerald-600" />
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 shadow hover:shadow-lg'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-emerald-100 text-emerald-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                {activeCategory === 'all' ? 'All Destinations' : 
                 categories.find(c => c.id === activeCategory)?.name}
                <span className="text-emerald-600 ml-3">({filteredDestinations.length})</span>
              </h2>
              <div className="text-gray-600">
                Showing {filteredDestinations.length} of {destinations.length} destinations
              </div>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                <FaSearch className="text-6xl text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No destinations found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Destination Image */}
                    <div className="h-64 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold rounded-full text-sm">
                          {categories.find(c => c.id === destination.category)?.name}
                        </span>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                        {destination.price}
                        <div className="text-xs opacity-90">Starting from</div>
                      </div>
                    </div>

                    {/* Destination Info */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {destination.name}
                          </h3>
                          <div className="flex items-center text-gray-600">
                            <FaMapMarkerAlt className="mr-2 text-emerald-600" />
                            <span>{destination.country}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span className="font-bold text-gray-800">{destination.rating}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {destination.highlights.slice(0, 3).map((highlight, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <FaCalendarAlt className="text-emerald-600" />
                          <span className="text-sm">{destination.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <FaUserFriends className="text-emerald-600" />
                          <span className="text-sm">{destination.bestFor}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300">
                          View Details
                        </button>
                        <button className="px-6 py-3 bg-white border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Featured Section */}
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-lime-50 rounded-3xl p-8 border-2 border-emerald-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Need Help Choosing?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our travel experts can help you find the perfect destination based on your preferences, budget, and travel style.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300">
                    Get Free Consultation
                  </button>
                  <button className="px-8 py-3 bg-white border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                    View All Packages
                  </button>
                </div>
              </div>
              <div className="text-center">
                <GiPalmTree className="text-6xl text-emerald-600 mb-4" />
                <div className="text-3xl font-bold text-emerald-700">25+</div>
                <div className="text-gray-600">Destinations Worldwide</div>
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