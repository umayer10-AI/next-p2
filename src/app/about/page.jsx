import FoodsCart from '@/component/FoodsCart';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>About page</h2>
            <FoodsCart></FoodsCart>
        </div>
    );
};

export default page;