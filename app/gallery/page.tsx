import React from 'react';

const images = [
  { src: '/galley.jpg', title: 'Beach Escape' },
  { src: '/gallery.jpg', title: 'Mountain Adventure' },
  { src: '/gallery1.jpg', title: 'City Lights' },
  { src: '/gallery2.jpg', title: 'Desert Safari' },
  { src: '/gallery3.jpg', title: 'Island Paradise' },
  { src: '/gallery4.jpg', title: 'Snow Trek' },
  { src: '/gallery5.jpg', title: 'Cultural Tour' },
  { src: '/gallery6.jpg', title: 'Nature Walk' },
];

export default function Page() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-16 bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50">

      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
          📸 Travelya Gallery
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our beautiful travel moments, destinations, and unforgettable journeys.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-xl bg-white cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-lg font-bold tracking-wide">
                {item.title}
              </h3>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
