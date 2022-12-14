import React from "react";
import { dataItemVenta } from "../../API/db";
import "./ItemVenta.scss";
import { TarjetaItemVenta } from "./TarjetaItemVenta/TarjetaItemVenta";

export const ItemVenta = () => {
  console.log(dataItemVenta);
  return (
    <div className="bg-ofertas-destacadas">
      <div className="ofertas-destacadas container">
        <h2>Ofertas destacadas </h2>
        <div className="row justify-content-center align-items-center">
          {dataItemVenta.map((e, i) => (
            <TarjetaItemVenta {...e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
