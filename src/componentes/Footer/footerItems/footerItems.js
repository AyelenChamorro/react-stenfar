import React from 'react';
import './footerItems.scss';

export const FooterItems = (footerItems) => {
  const { imagenItem, nombreItem } = footerItems;
  return (
    <div className="items-servicios " >
      <div className='items-footer '>
        <img className='img-items' src={imagenItem} alt="" />
        <h4 className='nombre-items'>{nombreItem}</h4>
      </div>
    </div>
  );
};
