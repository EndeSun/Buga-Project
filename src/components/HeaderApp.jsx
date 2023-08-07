import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams, Outlet} from 'react-router-dom'

function Header() {
  return (
    <>
      <h1><Link to = "/" >Header de la aplicación</Link></h1>
      <ul>
        <li>
          <Link to="/Entrantes">Entrantes</Link>
        </li>
        <li>
          <Link to="/Ramen">Ramen</Link>
        </li>
        <li>
          <Link to="/Don">Don Style</Link>
        </li>
        <li>
          <Link to="/Combos">Combos Especiales</Link>
        </li>
        <li>
          <Link to="#">Idiomas</Link> {/* Falta ver cómo hacerlo */}
        </li>
        <li>
          <Link to="/FormularioContacto">Contacto</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
