import React from "react";

import { Header } from "../../componentes/Header/Header";
import { ItemVenta } from "../../componentes/ItemVenta/ItemVenta";
import { Navbar } from "../../componentes/Navbar/Navbar";
import { NavbarFilter } from "../../componentes/NavbarFilter/NavbarFilter";
import { Slideshow } from "../../componentes/Slideshow/Slideshow";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <NavbarFilter />
      <Slideshow />{" "}
     
      <ItemVenta />
     
    </div>
  );
};
