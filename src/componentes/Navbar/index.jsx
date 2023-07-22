import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget';

const Navbar = ({ child1, data, onCategoryChange }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          {child1}
        </a>
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
          <li className='numberItem'>( 0 )</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
