import React from "react";
import OnClickSobreNosotros from "../../componentes/Header/OnClickSobreNosotros/OnClickSobreNosotros";
import {NavbarSobreNosotros} from "../../componentes/NavbarSobreNosotros/NavbarSobreNosotros";
import BgSobreNosotros from "../../componentes/BackgroundSobreNosotros/BgSobreNosotros";
import Blog from "../../componentes/Blog/Blog";

export const SobreNosotros = () => {
  return (
    <div className="SobreNosotros">
      <OnClickSobreNosotros />
      <NavbarSobreNosotros />
      <BgSobreNosotros/>  
      <Blog />
    </div>
  );
};
