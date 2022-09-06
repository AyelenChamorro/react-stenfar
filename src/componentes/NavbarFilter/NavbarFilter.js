import React from "react";
import "./NavbarFilter.scss";
import itemResmas from "../../imagenes/itemResmas.svg";
import itemComputacion from "../../imagenes/itemComputacion.svg";
import itemAccesorios from "../../imagenes/itemAccesorios.svg";
import itemImpresoras from "../../imagenes/itemImpresoras.svg";
import itemAlmacenamiento from "../../imagenes/itemAlmacenamiento.svg";
export const NavbarFilter = () => {
  return (
    <div className="bg-navbar-filter">
      <div className="m-auto">
        <div className="row">
          <div className="resmas col">
            <img src={itemResmas} alt="" />
            <p>Resmas</p>
          </div>

          {/* Aca bb tenes codigo repetitvo, Te conviene hacer un componente */}

          <div className="computacion col">
            <img src={itemComputacion} alt="" />
            <p>Computacion</p>
          </div>
          <div className="accesorios col ">
            <img src={itemAccesorios} alt="" />
            <p>Accesorios</p>
          </div>
          <div className="impresoras col">
            <img src={itemImpresoras} alt="" />
            <p>Impresoras</p>
          </div>
          <div className="almacenamiento col">
            <img src={itemAlmacenamiento} alt="" />
            <p>Almacenamiento</p>
          </div>
        </div>
      </div>
    </div>
  );
};
