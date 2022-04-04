import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, link: '/', name: 'HOME' },
        { id: 2, link: '/review', name: 'REVIEWS' },
        { id: 3, link: '/dashboard', name: 'DASHBOARD' },
        { id: 4, link: '/blog', name: 'BLOGS' },
        { id: 5, link: '/about', name: 'ABOUT' },
    ];
    return (
        <ul className='my-12 md:flex lg:flex justify-center ' >
        {
            routes.map(route => <Link 
                key={route.id}
                route={route}
                ></Link>
            )}
        </ul>
    );
};

export default Navbar;