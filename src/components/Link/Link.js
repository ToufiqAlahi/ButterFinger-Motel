import React from 'react';

const Link = (props) => {
    const {name, link} = props.route;
    return (
        <li className='mr-10 text-2xl font-bold  hover:text-white hover:p-0 hover:bg-fuchsia-700'>
            <a className='p-5 ' href={link}>{name}</a>
        </li>
    );
};

export default Link;