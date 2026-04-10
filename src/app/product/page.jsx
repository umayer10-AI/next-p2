import Image from "next/image";
import React from "react";

const ProductUI = () => {
    return (
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg">

            <div className="relative w-full h-52">
                <Image
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                    alt="product"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5 space-y-2">

                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    Wireless Headphones
                </h2>

                <p className="text-sm text-gray-500">
                    Electronics
                </p>

                <div className="flex justify-between items-center mt-3">

                    <span className="text-lg font-semibold text-green-600">
                        ৳ 2500
                    </span>

                    <span className="text-yellow-500 text-sm">
                        ⭐ 4.5
                    </span>

                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                    High quality wireless headphones with noise cancellation and long battery life.
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                    Buy Now
                </button>

            </div>
        </div>
    );
};

export default ProductUI;