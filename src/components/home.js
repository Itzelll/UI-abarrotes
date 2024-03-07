// Inicio.js
import React from 'react';
import './estilos/home.css';
import homeImage from '../home.jpg';

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="imagen-izquierda">
        <img src={homeImage} alt="Home" />
      </div>
      <div className="contenido-derecha">
        <h1>Bienvenido al Punto de Venta</h1>
        <p>Selecciona una opción del menú para comenzar.</p>
        {/* Puedes agregar más contenido según sea necesario */}
      </div>
    </div>
  );
};

export default Inicio;
