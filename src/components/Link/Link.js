import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Links.css'

const Links = (props) => {
  const location = useLocation();
  const { name, link } = props.route;
  return (
    <li
      className={`${
        link === location.pathname &&
        "bg-slate-700 rounded-md text-white gradient-bg"
      }  border-2 border-slate-400 text-xl font-bold text-whi p-1 hover:border-slate-500 `}
    >
      <Link className="px-3" to={link}>
        {name}
      </Link>
    </li>
  );
};

export default Links;
