import React from 'react'
import { dataItemVenta } from '../../../API/db'
import "./TarjetaItemVenta.scss"

export const TarjetaItemVenta = (tarjeaItem) => {
  const { imagenItem, modelItem, nombreItem, stockItem, precioItem } = tarjeaItem
  return (
    <div className="tarjeta-item-venta col-2 col-xxl-3  d-flex justify-content-start ">
      <div className="bg-image  ">
        <img src={imagenItem} alt="" />
      </div>

      <div className='container-item'>

        <h4 className='text-start'>{modelItem}</h4>
        <h4 className='text-start'>{nombreItem}</h4>
        <p>Stock:{stockItem} Unidades</p>
        <div className="d-flex">
          <h3>{precioItem}</h3>
          <p>IVA 21%</p>
        </div>
        <div className="buttons-counter-agregar d-flex">
          <div className="item-counter d-flex justify-content-center align-items-center">
            <div>-</div>
            <div>0</div>
            <div>+</div>
          </div>

          <button className="button-agregar" type="">
            Agregar +
          </button>
        </div>
      </div>
    </div>

  )
}
