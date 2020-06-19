import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../logo.svg";

export const Sidebar = () => {
  const active = false;

  return (
    <nav id="sidebar" className={active ? "active" : "null"}>
      <div className="sidebar-header text-center">
        <Image src={img} rounded width={100} height={100} />
      </div>

      <ul className="list-unstyled components">
        <li>
          <Link to="/sales">Sales</Link>
        </li>

        <li>
          <Link to="/customer">Customer</Link>
        </li>
        <li>
          <Link to="/items">Item List</Link>
        </li>
      </ul>
    </nav>
  );
};
