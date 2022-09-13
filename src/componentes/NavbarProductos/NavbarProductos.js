import React from 'react';
import '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';

export const NavbarProductos = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="">
            <Link to={'/'}>Gráfica / Cartuchos y tóners</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};
