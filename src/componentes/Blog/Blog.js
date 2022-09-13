import React from 'react'
import blog from '../../imagenes/blog-sobre-nosotros.jpg';
import './Blog.scss';

function Blog() {
  return (
    <div className="seccion-blog container">
      <div className="row">
        <div className=" sobre-nosotros-description col-6">
          <h3 className="sobre-nosotros">Sobre nosotros</h3>
          <p className="description">
            Somos una distribuidora líder en la comercialización de papeles y
            cartulinas para la industria grafica. Pertenecemos al Grupo Suzano
            Papel e Celulosa con más de 58 años de presencia en el mercado
            argentino. Somos distribuidores mayoristas de insumos de computación
            y equipos de impresión.
          </p>
          <p className="description">
            Nuestra motivación es el servicio al cliente, dando soporte y
            asesoramiento técnico, con personal altamente calificado y
            capacitado. Poseemos altos estándares en servicios logísticos,
            canales de comercialización multimodales y personalizados, con
            cobertura a nivel nacional.{' '}
          </p>
        </div>
        <div className="contenedor-imagen  col-6">
          <img className="img-blog" src={blog} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog