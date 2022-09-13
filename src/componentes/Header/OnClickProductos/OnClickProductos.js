import React from 'react';
import iconSerch from '../../../imagenes/icon-search.svg';
import { Logo } from '../../Logo/Logo';
import iconoUsuario from '../../../imagenes/icono-usuario.svg';
import iconoCarrito from '../../../imagenes/icono-carrito.svg';
import { Link } from 'react-router-dom';
import './OnClickProductos.scss';

export const OnClickProductos = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center ">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to={'/'}>
          {' '}
          <Logo className="imagen-Logo " />
        </Link>

        <div className="d-flex">
          <input
            className="input-Header "
            placeholder="Buscar productos, marcas y más… "
            type="text"
            name=""
            value=""
          />
          <img className="icono-Input" src={iconSerch} alt="" />
        </div>
        <div className="list-Header d-flex">
          <button className="b-productos ">
            <Link to={'/productos'}>Productos</Link>
          </button>
          <button>
            <Link to={'/sobrenosotros'}>Sobre Nosotros</Link>
          </button>
          <button>Novedades</button>
          <button>Contacto</button>
        </div>
        <div className="d-flex">
          <img className="icono-Usuario " src={iconoUsuario} alt="" />
          <img className="iconoCarrito " src={iconoCarrito} alt="" />
        </div>
      </div>
    </header>
  );
};
export default OnClickProductos;
