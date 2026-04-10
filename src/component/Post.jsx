import Link from 'next/link';
import React from 'react';

const Post = ({p}) => {
    return (
        <div className='p-4 rounded-2xl border'>
            <h2>{p.id}</h2>
            <h2 className='font-bold text-green-500'>{p.name}</h2>
            <h2 className='font-bold text-yellow-400'>{p.email}</h2>
            <h2>{p.body}</h2>
            <Link href={`/post/dashboard/${p.id}`}><button className='btn btn-primary'>Details</button></Link>
        </div>
    );
};

export default Post;