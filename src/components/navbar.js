// Navbar.js
import React, { useState } from 'react';
import './estilos/navbar.css';

const Navbar = () => {
  const [showPedidoMenu, setShowPedidoMenu] = useState(false);
  const [showVentasMenu, setShowVentasMenu] = useState(false);
  const [showEmpleadosMenu, setShowEmpleadosMenu] = useState(false);
  const [showInformeVentasMenu, setShowInformeVentasMenu] = useState(false);
  const [showNotasMenu, setShowNotasMenu] = useState(false);
  const [showProductosMenu, setShowProductosMenu] = useState(false);
  const [showOtrosMenu, setShowOtrosMenu] = useState(false);

  const handleMenuToggle = (menu, setShowMenu) => {
    // Cerrar otros menús antes de abrir el actual
    setShowPedidoMenu(false);
    setShowVentasMenu(false);
    setShowEmpleadosMenu(false);
    setShowInformeVentasMenu(false);
    setShowNotasMenu(false);
    setShowProductosMenu(false);
    setShowOtrosMenu(false);

    // Abrir o cerrar el menú actual
    setShowMenu(!menu);
  };

  const handleMenuClose = () => {
    // Cerrar todos los menús al hacer clic en cualquier parte
    setShowPedidoMenu(false);
    setShowVentasMenu(false);
    setShowEmpleadosMenu(false);
    setShowInformeVentasMenu(false);
    setShowNotasMenu(false);
    setShowProductosMenu(false);
    setShowOtrosMenu(false);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={`nav-item dropdown ${showVentasMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showVentasMenu, setShowVentasMenu)}>
            Ventas
          </a>
          {showVentasMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Listado ventas</a></li>
            </ul>
          )}
        </li>
        <li className={`nav-item dropdown ${showEmpleadosMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showEmpleadosMenu, setShowEmpleadosMenu)}>
            Empleados
          </a>
          {showEmpleadosMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Registro de empleados</a></li>
            </ul>
          )}
        </li>
        <li className={`nav-item dropdown ${showPedidoMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showPedidoMenu, setShowPedidoMenu)}>
            Pedidos
          </a>
          {showPedidoMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Crear pedido</a></li>
              <li><a href="#" className="submenu-link">Estado pedidos</a></li>
              <li><a href="#" className="submenu-link">Lista pedidos</a></li>
            </ul>
          )}
        </li>
        <li className={`nav-item dropdown ${showInformeVentasMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showInformeVentasMenu, setShowInformeVentasMenu)}>
            Informe de Ventas
          </a>
          {showInformeVentasMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Abarrotes</a></li>
              <li><a href="#" className="submenu-link">Ferretería</a></li>
              <li><a href="#" className="submenu-link">Banquetería</a></li>
            </ul>
          )}
        </li>
        <li className={`nav-item dropdown ${showNotasMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showNotasMenu, setShowNotasMenu)}>
            Notas
          </a>
          {showNotasMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Estados</a></li>
            </ul>
          )}
        </li>
        <li className={`nav-item dropdown ${showProductosMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showProductosMenu, setShowProductosMenu)}>
            Productos
          </a>
          {showProductosMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Crear producto</a></li>
              <li><a href="#" className="submenu-link">Catálogo</a></li>
            </ul>
          )}
        </li>
        <li className={`nav-item dropdown ${showOtrosMenu ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => handleMenuToggle(showOtrosMenu, setShowOtrosMenu)}>
            Otros
          </a>
          {showOtrosMenu && (
            <ul className="submenu" onClick={handleMenuClose}>
              <li><a href="#" className="submenu-link">Listado marcas</a></li>
              <li><a href="#" className="submenu-link">Categorías</a></li>
              <li><a href="#" className="submenu-link">Unidades de medida</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
