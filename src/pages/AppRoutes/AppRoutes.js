import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Productos } from '../Productos/Productos';
import { SobreNosotros } from '../SobreNosotros/SobreNosotros';

export const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/productos" element={<Productos />}></Route>
     <Route path="/sobrenosotros" element={<SobreNosotros/>}></Route>
    </Routes>
  );
};
