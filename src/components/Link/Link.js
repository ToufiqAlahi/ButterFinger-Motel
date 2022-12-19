import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Links = (props) => {
    const location = useLocation();
    const { name, link } = props.route;
    return (
      <li
        className={`${
          link === location.pathname && "bg-fuchsia-700 rounded-md text-white"
        } border-2 border-fuchsia-400 text-xl font-bold text-fuchsia-900 p-1 hover:border-fuchsia-500 `}
      >
        <Link className="px-3" to={link}>
          {" "}
          {name}
        </Link>
      </li>
    );
};

export default Links;