import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Your Future with Code 🚀
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Learn modern web development and create amazing projects using React & Next.js
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>
          </Link>

          <Link href="/about">
            <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;