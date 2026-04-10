import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';

const FCarts = ({p}) => {
    console.log(p)
    return (
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                p.map(v => (
                    <div 
                        key={v.id} 
                        className="rounded-2xl border p-4 bg-gray-900 border-gray-500 shadow-lg h-full overflow-hidden hover:scale-105 transition duration-500"
                    >
                        <Image
                        height={200}
                        width={200}
                        src={v.image_link} 
                            alt={v.dish_name} 
                            className="mx-auto object-cover"
                        ></Image>

                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">
                                {v.dish_name}
                            </h2>

                            <p className="text-gray-600 text-sm mb-2">
                                {v.cuisine}
                            </p>

                            {/* Price + Rating */}
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-lg font-semibold text-blue-600">
                                    ৳ {v.price}
                                </span>

                                <span className="text-yellow-500">
                                    ⭐ {v.rating}
                                </span>
                            </div>

                            {/* Button */}
                            <Link href={`/about/${v.id}`}><button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                                View Details
                            </button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default FCarts;