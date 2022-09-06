import iconSerch from "../../imagenes/icon-search.svg";
import { Logo } from "../Logo/Logo";
import iconoUsuario from "../../imagenes/icono-usuario.svg";
import iconoCarrito from "../../imagenes/icono-carrito.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center ">
      <div className="container d-flex justify-content-between align-items-center">
        <Logo className="imagen-Logo " />
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

        <ul className="list-Header d-flex  ">
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Sobre Nosotros</a>
          </li>
          <li>
            <a href="">Novedades</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <div className="d-flex">
          <img className="icono-Usuario " src={iconoUsuario} alt="" />
          <img className="iconoCarrito " src={iconoCarrito} alt="" />
        </div>
      </div>
    </header>
  );
};
