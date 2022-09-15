import useHooks from "../../useHooks/useHooks";
import "./TarjetaItemVenta.scss";

export const TarjetaItemVenta = (tarjetaItem) => {
  const { handleClickMenos, handleClickMas, contador } = useHooks();
  const { imagenItem, modelItem, nombreItem, stockItem, precioItem } =
    tarjetaItem;

  return (
    <div className="tarjeta-item-venta col-2 col-xxl-3  d-flex justify-content-start ">
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
          <div className="item-counter-seccion d-flex justify-content-center align-items-center">
            <button className="item-counter" onClick={handleClickMenos}>
              -
            </button>
            <p className="mt-3 ">{contador}</p>
            <button className="item-counter" onClick={handleClickMas}>
              +
            </button>
          </div>
          <button className="button-agregar" type="">
            AGREGAR +
          </button>
        </div>
      </div>
    </div>
  );
};
