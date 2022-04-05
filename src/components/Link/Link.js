import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Links = (props) => {
    const location = useLocation();
    const { name, link } = props.route;
    return (
        <li className={`${(link === location.pathname && "bg-fuchsia-700 text-white border-fuchsia-600 border-8")} mr-10 text-2xl font-bold text-fuchsia-900 p-2  hover:text-white hover:p-2 hover:bg-fuchsia-700`}>
            <Link className='p-5 ' to={link}> {name}</Link>
        </li>
    );
};

export default Links;