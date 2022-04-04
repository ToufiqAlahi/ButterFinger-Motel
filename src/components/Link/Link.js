import React from 'react';
import { Link } from "react-router-dom";

const Links = (props) => {
    const { name, link } = props.route;
    return (
        <li className='mr-10 text-2xl font-bold  hover:text-white hover:p-0 hover:bg-fuchsia-700'>
            <Link className='p-5 ' to={link}> {name}</Link>
        </li>

    );
};

export default Links;