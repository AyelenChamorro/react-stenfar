import React from 'react';
import '../Navbar/Navbar.scss';
import { Link } from 'react-router-dom';

export const NavbarSobreNosotros = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="">
            <Link to={'/'}>Home / Sobre nosotros</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};
