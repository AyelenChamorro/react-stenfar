import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faSquare} from '@fortawesome/free-regular-svg-icons';
import { dataItemVenta2 } from "../../API/db";
import { TarjetaBanner } from "../Banner/TarjetaBanner/TarjetaBanner";
import  Check from "../../componentes/Banner/Checkbox/Checkbox.js";
import Switch from "../../componentes/Banner/CheckSwitch/CheckSwich.js"
import "./Banner.scss";

export const Banner = () => {
  console.log(dataItemVenta2);

  
  return (
    <div className="container">
      <div className="contenedor-banner row">
        <div className=" col-3 seccion-filter">
          <p className="inicio-seccion-filter">Inicio / Cartuchos y tóners</p>
          <div className="cartuchos-y-torners d-flex justify-content-between ">
            <h4 className="cartuchos">Cartuchos y tóners</h4>
            <p className="contador-filter">150</p>
          </div>
          <div className="border-items d-flex mt-4 justify-content-between">
            <p>Cartuchos y tóners</p>
            <p className="contador-filter">150</p>
          </div>
          <div className="border-items d-flex  justify-content-between">
            <p>Cartuchos XL</p>
            <p className="contador-filter">39</p>
          </div>
          <div className="border-items d-flex  justify-content-between">
            <p>Toners</p>
            <p className="contador-filter">75</p>
          </div>
          <div className=" border-items d-flex  justify-content-between">
            <p>Ofertas</p>
            <p className="contador-filter">10</p>
          </div>
          <div className="precio-filter d-flex  justify-content-between">
            <h4 className="precio">Precio</h4>
    
           <FontAwesomeIcon icon={faAngleUp} />

           
          </div>
          <div className="d-flex mt-4 justify-content-around">
            <p>Desde</p>
            <p>-</p>
            <p>Hasta</p>
          </div>
          <div className="d-flex justify-content-around">
            <button className="boton-desde-hasta">950</button>
            <button className="boton-desde-hasta">34079</button>
          </div>
          <div className="por-stock-filter d-flex mt-4 justify-content-between">
            <h4 className="por-stock">Por stok</h4>
            <FontAwesomeIcon icon={faAngleUp} />
         
             
            
          </div>
          <div className="d-flex mt-4 justify-content-between ">
            <p className="mas-de">Más de 50</p>
            <Check/>
            
          </div>
          <div className="d-flex justify-content-between">
            <p className="mas-de">Más de 85</p>
            <Check/>
          </div>
          <div className="d-flex justify-content-between ">
            <p className="mas-de">Más de 200</p>
            <Check/>
          </div>
          <div className="envio-de-muestras d-flex justify-content-between">
            <p>Envío de muestras</p>
            <Switch/>
          </div>
          <div>
            <button className="boton-aplicar">Aplicar</button>
          </div>
          <div className="mt-2">
            <p>
              {" "}
              <a href="">Limpiar filtros</a>
            </p>
          </div>
        </div>
        <div className=" col-9">
          <div className="d-flex">
            {dataItemVenta2.map((e, i) => (
              <TarjetaBanner {...e} key={i} />
            ))}
          </div>

          <div className="d-flex mt-4">
            {dataItemVenta2.map((e, i) => (
              <TarjetaBanner {...e} key={i} />
            ))}
          </div>
          <div className="d-flex mt-4">
            {dataItemVenta2.map((e, i) => (
              <TarjetaBanner {...e} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
