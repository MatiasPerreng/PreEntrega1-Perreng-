import './styles.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({ child1, child2, child3, child4 }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          {child1}
        </a>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item"><a href="">{child2}</a></li>
          <li className="nav-item"><a href="">{child3}</a></li>
          <li className="nav-item"><a href="">{child4}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
