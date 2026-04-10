import Post from '@/component/Post';
import React from 'react';

const page = async () => {

    const a = await fetch("https://jsonplaceholder.typicode.com/comments")
    const b = await a.json();

    return (
        <div className='max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 py-10 gap-4'>
            {
                b.map(v => <Post key={v.id} p={v}></Post>)
            }
        </div>
    );
};

export default page;