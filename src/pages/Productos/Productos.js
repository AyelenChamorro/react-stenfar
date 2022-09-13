import React from "react";
import {Banner} from "../../componentes/Banner/Banner";
import OnClickProductos from '../../componentes/Header/OnClickProductos/OnClickProductos';
import {NavbarProductos} from '../../componentes/NavbarProductos/NavbarProductos';


export const Productos = () => {
  return (
    <div className="Productos">
      <OnClickProductos />
      <NavbarProductos/>
      <Banner/>
    </div>
  );
};