import './styles.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavElements from '../NavElements';
import CartWidget from '../CartWidget';

const Navbar = ({ child1, data }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          {child1}
        </a>
        <ul className="navbar-nav d-flex flex-row">
          {data.map((category, index) => (
            <NavElements key={index} value={category} />
          ))}
          <CartWidget />
          <li className='numberItem'>( 0 )</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
