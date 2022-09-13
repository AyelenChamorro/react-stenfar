import React from 'react';
import './Footer.scss';
import { ItemsFooter } from '../../API/ItemsFooter';
import { FooterItems } from '../Footer/footerItems/footerItems';

export const Footer = () => {
  return (
    console.log(ItemsFooter),
    (
      <div className=" bg-azul ">
        <div className="servicios">
          <h1>Servicios</h1>
        </div>

        <div className=" items d-flex  col-2">
          {ItemsFooter.map((e, i) => (
            <FooterItems {...e} key={i} />
          ))}
          ;
        </div>
      </div>
    )
  );
};
