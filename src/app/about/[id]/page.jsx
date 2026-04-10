import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const a = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${id}`)
    const b = await a.json()
    const data = b.data
    console.log(data)

    return (
        <div className="max-w-4xl mx-auto p-6">
            
            {/* Card */}
            <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">

                <Link href={'/about'}><button className='btn btn-accent'>Back</button></Link>
                {/* Image */}
                <div className="w-full h-72 relative">
                    <Image
                    height={300}
                    width={300}
                    src={data.image_link}
                        alt={data.dish_name}
                        className="object-cover mx-auto"
                    ></Image>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">

                    <h1 className="text-2xl font-bold">{data.dish_name}</h1>

                    <p className="text-gray-500">{data.cuisine}</p>

                    <div className="flex gap-4 flex-wrap">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                            ⭐ {data.rating}
                        </span>

                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            ৳ {data.price}
                        </span>

                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                            {data.category}
                        </span>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">Ingredients</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.main_ingredients.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Nutrition */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">Nutrition</h2>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <p>🔥 Calories: {data.approximate_nutrition_per_serving.calories}</p>
                            <p>💪 Protein: {data.approximate_nutrition_per_serving.protein}</p>
                            <p>🍞 Carbs: {data.approximate_nutrition_per_serving.carbohydrates}</p>
                            <p>🧈 Fat: {data.approximate_nutrition_per_serving.fat}</p>
                            <p>🌿 Fiber: {data.approximate_nutrition_per_serving.fiber}</p>
                        </div>
                    </div>

                    {/* Steps */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">Cooking Steps</h2>
                        <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            {data.cooking_steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;