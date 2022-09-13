import React from "react";


export const TarjetaBanner = (tarjetaItem) => {
  const { imagenItem, modelItem, nombreItem, stockItem, precioItem } =
    tarjetaItem;
  return (
    <div className="tarjeta-item-venta d-flex  ">
      <div className="bg-image  ">
        <img src={imagenItem} alt="" />
      </div>

      <div className="container-item ">
        <h3 className="model-item">{modelItem}</h3>
        <h4 className="nombre-item">{nombreItem}</h4>
        <p className="stock-item">Stock:{stockItem} Unidades</p>
        <div className="d-flex justify-content-evenly">
          <h3 className="precio-item">${precioItem}</h3>
          <p className="iva">IVA 21%</p>
        </div>
        <div className="buttons-counter-agregar d-flex">
          <div className="item-counter d-flex justify-content-center align-items-center">
            <div>-</div>
            <div>0</div>
            <div>+</div>
          </div>

          <button className="button-agregar" type="">
            AGREGAR +
          </button>
        </div>
      </div>
    </div>
  );
};
