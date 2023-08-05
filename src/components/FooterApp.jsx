import React from 'react'
import {BrowserRouter, Route, Routes, Link, useParams, Outlet} from 'react-router-dom'

function Footer() {
  return (
    <>
        <h1>Footer de la aplicación</h1>
        <ul>
        <li>
          <Link to="/AvisoLegal">Aviso Legal</Link>
        </li>
        <li>
          <Link to="/Cookies">Cookies</Link>
        </li>
        </ul>
    </>
  )
}

export default Footer