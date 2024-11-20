import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import '../style/Header.css';

const Header = () => {
  const [menuLinks] = useState([
    { title: "Home", link: "/home", id: 1 },
    { title: "Book", link: "/book", id: 2 },
    { title: "Trips", link: "/trips", id: 3 },
    { title: "FlightRoute", link: "/flightRoute", id: 3 },
  ]);

  return (
    <div className="header">
      <div data-aos="zoom-in" className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        {menuLinks.map((link) => (
          <Link key={link.id} to={link.link} className="menu-link">
            {link.title}
          </Link>
        ))}
      </div>
      <div className="signup-menu">
        <Link to="/notification">
          <button>Notification</button>
        </Link>
      </div>
      <div className="signup-menu">
        <Link to="/status">
          <button>Status</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

