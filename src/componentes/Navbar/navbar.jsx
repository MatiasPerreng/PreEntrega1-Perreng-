import React from 'react';
import logo from '../../assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = ({ data, onCategoryChange, cartCount }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>

        <Link to="/" className="" id="HomeButton">
          Inicio
        </Link>

        <ul className="navbar-nav d-flex flex-row">
          {data.map((category, index) => (
            <li key={index} className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </a>
            </li>
          ))}
          <CartWidget />
          <li className='numberItem'>({cartCount})</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

