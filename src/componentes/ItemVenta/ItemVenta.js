import React from "react";
import imageauricular from "../../imagenes/auriculares-gamer.webp";
import imagecartucho from "../../imagenes/cartucho-hp.webp";
import imageimpresora from "../../imagenes/impresora-magnetica.jpg";
import imagebrothertoner from "../../imagenes/brother-toner-magenta.jpg";
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
