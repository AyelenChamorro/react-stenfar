import React from "react";
import { dataItemVenta } from "../../API/db";
import "./ItemMasVendido.scss";
import { TarjetaMasVendido } from "./TarjetaMasVendido/TarjetaMasVendido";

export const ItemMasVendido = () => {
  console.log(dataItemVenta);
  return (
    <div className="bg-ofertas-destacadas">
      <div className="ofertas-destacadas container">
        <h2>Mas Vendido</h2>
        <div className="row justify-content-center align-items-center">
          {dataItemVenta.map((e, i) => (
            <TarjetaMasVendido {...e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};