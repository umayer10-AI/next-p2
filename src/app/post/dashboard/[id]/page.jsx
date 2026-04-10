import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const a = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const comment = await a.json();

    return (
        <div
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-xl transition"
                >

                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                            {comment.name}
                        </h2>

                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            Post #{comment.postId}
                        </span>
                    </div>

                    {/* Email */}
                    <p className="text-sm text-gray-500 mb-2">
                        📧 {comment.email}
                    </p>

                    {/* Body */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {comment.body}
                    </p>

                    {/* Footer */}
                    <div className="mt-4 flex justify-end">
                        <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                            Reply
                        </button>
                    </div>

                </div>
    );
};

export default page;