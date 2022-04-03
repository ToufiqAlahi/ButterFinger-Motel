import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, link: '/', name: 'Home' },
        { id: 2, link: '/review', name: 'Review' },
        { id: 3, link: '/blog', name: 'Blog' },
        { id: 4, link: '/about', name: 'About' },
    ];
    return (
        <ul className='my-12 md:flex lg:flex justify-center' >
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