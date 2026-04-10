import React from 'react';
import FCarts from './FCarts';

const FoodsCart = async () => {

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const a = data.data

    return (
        <div>
            <FCarts p={a}></FCarts>
        </div>
    );
};

export default FoodsCart;