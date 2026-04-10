"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({children}) => {
    const p = usePathname()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {children}
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 h-full w-50 p-4">
                {/* Sidebar content here */}
                <Link href={'/post'}><button className={p=== '/post'? 'btn btn-info btn-outline w-full': 'btn w-full'}>Home</button></Link>
                <Link href={'/post/dashboard'}><button className={p=== '/post/dashboard'? 'btn btn-info btn-outline w-full': 'btn w-full'}>Dashboard</button></Link>
                <Link href={'/post/profile'}><button className={p=== '/post/profile'? 'btn btn-info btn-outline w-full': 'btn w-full'}>Profile</button></Link>
                
                </ul>
            </div>
        </div>
    );
};

export default layout;