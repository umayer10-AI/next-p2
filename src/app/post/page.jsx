import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Post page</h2>
            <div className="max-w-6xl mx-auto px-4 py-10">

            <div className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl">

                {/* Left Content */}
                <div className="space-y-5">

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Discover Delicious <span className="text-yellow-400">Food</span> & Healthy Meals
                    </h1>

                    <p className="text-gray-300">
                        Explore Mediterranean-inspired dishes, healthy bowls, and tasty recipes made for your lifestyle.
                    </p>

                    <div className="flex gap-3">
                        <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition">
                            Explore Foods
                        </button>

                        <button className="border border-gray-400 px-5 py-2 rounded-xl hover:bg-gray-700 transition">
                            Learn More
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 pt-4 text-sm text-gray-300">
                        <div>
                            <p className="text-white font-bold text-xl">100+</p>
                            <p>Recipes</p>
                        </div>

                        <div>
                            <p className="text-white font-bold text-xl">50+</p>
                            <p>Cuisines</p>
                        </div>

                        <div>
                            <p className="text-white font-bold text-xl">5★</p>
                            <p>Top Rated</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-72 md:h-96 flex justify-center">
                    <Image 
                    height={300}
                    width={300}
                    src="https://plus.unsplash.com/premium_photo-1699851157824-1cff003efbcb"
                        alt="food banner"
                        className="object-cover rounded-xl"
                    ></Image>
                </div>

            </div>
        </div>
        </div>
    );
};

export default page;