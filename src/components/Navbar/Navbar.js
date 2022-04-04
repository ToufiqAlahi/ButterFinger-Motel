import React from 'react';
import Links from '../Link/Link';

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
            routes.map(route => <Links 
                key={route.id}
                route={route}
                ></Links>
            )}
        </ul>
    );
};

export default Navbar;