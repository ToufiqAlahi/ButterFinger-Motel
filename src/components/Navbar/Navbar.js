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
      <div className=" flex flex-row justify-center mx-auto max-w-[50vw] text-center md:max-w-screen-xl mt-3 ">
        <ul className="flex justify-center gap-2 md:gap-8 flex-col md:flex-row">
          {routes.map((route) => (
            <Links key={route.id} route={route}></Links>
          ))}
        </ul>
      </div>
    );
};

export default Navbar;