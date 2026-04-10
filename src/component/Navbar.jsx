"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const p = usePathname()
    return (
        <div className='flex justify-between items-center px-10 py-4 bg-gray-800'>
            <h2 className='text-2xl font-bold'>Navber</h2>
            <ul className='flex gap-5'>
                <Link className={p=== '/'? "btn btn-accent btn-outline" : "btn"} href={'/'}>Home</Link>
                <Link className={p=== '/about'? "btn btn-accent btn-outline" : "btn"} href={'/about'}>About</Link>
                <Link className={p=== '/post'? "btn btn-accent btn-outline" : "btn"} href={'/post'}>Post</Link>
                <Link className={p=== '/product'? "btn btn-accent btn-outline" : "btn"} href={'/product'}>Product</Link>
            </ul>
        </div>
    );
};

export default Navbar;