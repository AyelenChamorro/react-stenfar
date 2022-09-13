import React from 'react'
import background from '../../imagenes/background-sobre-nosotros.jpg';
import './BgSobreNosotros.scss';

function BgSobreNosotros() {
  return (
    <div className="bg-sobre-nosotros">
      <img className="bg-sobre-nosotros" src={background} alt="" />
    </div>
  );
}

export default BgSobreNosotros