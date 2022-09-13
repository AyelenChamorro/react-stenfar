import React from "react";
import bgHome from "../../imagenes/background.home.webp";
import bgHome2 from "../../imagenes/background.home2.jpeg";
import bgHome3 from "../../imagenes/background.home3.jpg";
import "./Slideshow.scss";

export const Slideshow = () => {
  return (
    <div id="slidehows" className="carousel slide" data-bs-ride="carousel">
    
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#slidehows"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#slidehows"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#slidehows"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bgHome} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={bgHome2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={bgHome3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slidehows"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slidehows"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="bg-container">
        <h2 className="hacete-cliente">Hacete cliente</h2>
        <h2 className="contacto">11 2664-7387</h2>
        <p>También podés enviar un mail a</p>
        <p className="email">marketing@stenfar.com.ar</p>
      </div>
    </div>
  );
};
