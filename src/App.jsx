import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";
import { Table } from "react-bootstrap";
import HeaderApp from "./components/HeaderApp";
import FooterApp from './components/FooterApp'
import Home from './pages/Home'
import Bebida from './pages/Carta/Bebida';
import Ramen from './pages/Carta/Ramen';
import Postre from './pages/Carta/Postre';
import Entrantes from './pages/Carta/Entrantes';
import Don from './pages/Carta/Don';
import Combos from './pages/Carta/Combos';
import Carta from './pages/Carta/Carta';
import AvisoLegal from './pages/Documentacion/AvisoLegal'
import Cookies from './pages/Documentacion/Cookies'
import Error from './pages/Documentacion/Error'
import FormularioContacto from './pages/Documentacion/FormularioContacto'
import SobreNosotros from './pages/Documentacion/SobreNosotros'

function App() {
  return (
    <>
      {/* Header de la aplicación que no cambiará */}
      
      <HeaderApp/>
      {/* Todas las rutas de la aplicación */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Bebida' element={<Bebida/>} />
        <Route path='/Carta' element={<Carta/>} />
        <Route path='/Combos' element={<Combos/>} />
        <Route path='/Don' element={<Don/>} />
        <Route path='/Entrantes' element={<Entrantes/>} />
        <Route path='/Postre' element={<Postre/>} />
        <Route path='/Ramen' element={<Ramen/>} />
        <Route path='/AvisoLegal' element={<AvisoLegal/>} />
        <Route path='/Cookies' element={<Cookies/>} />
        <Route path='/Error' element={<Error/>} />
        <Route path='/FormularioContacto' element={<FormularioContacto/>} />
        <Route path='/SobreNosotros' element={<SobreNosotros/>} />
      </Routes>
      {/* Footer de la aplicación que no cambiará */}
      <FooterApp />
    </>
  );
}
export default App;
