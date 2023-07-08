import './styles.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget';

const Navbar = ({ child1, child2, child3, child4, child5 }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          {child1}
        </a>
        <ul className="navbar-nav d-flex flex-row">
          {child2}
          {child3}
          {child4}
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
