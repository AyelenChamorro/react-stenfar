import React from 'react'
import novedades from "../../imagenes/background-novedades.jpg";
import "./Novedades.scss";
function Novedades() {
    return (
        <div className='container container-novedades  d-flex position-relative'>
            <div className='bg-novedades d-flex  justify-content-center'>
                <img className='bg-imagen-novedades ' src={novedades} />


            </div>
            <div className='descripcion-novedades d-flex position-absolute'>
                <h1>
                    Novedades
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy <br /> text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <button className='button-ver-todas'>
                    Ver todas
                </button>
            </div>
        </div>

    )
}

export default Novedades