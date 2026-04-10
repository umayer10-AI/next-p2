import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
            {/* 404 Text */}
            <h1 className="text-8xl font-extrabold">
                404
            </h1>

            {/* Message */}
            <p className="mt-4 text-xl text-gray-300 text-center">
                Oops! Page not found 😢
            </p>

            {/* Image */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="404"
                className="w-60 my-8"
            />

            {/* Button */}
            <div>
                <Link href="/">
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;