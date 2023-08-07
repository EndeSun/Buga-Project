import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BurguerButton from "./BurguerButton";
import logo from "../assets/logo.png";

function HeaderApp() {
  // Por defecto sera false
  const [clicked, setClicked] = useState(false);
  // Esta funcion cambia el estado del boton
  const handleClick = () => {
    setClicked(!clicked);
  };
  
  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="Logo" />
        <Title>
          <Link to="/">
            <span>Buga Ramen</span>
          </Link>
        </Title>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}>
          <Links className={`links ${clicked ? 'active' : ''}`}>
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
              <Link to="/Idiomas">Idiomas</Link>
            </li>
            <li>
              <Link to="/FormularioContacto">Contacto</Link>
            </li>
          </Links>
        </BgDiv>
      </HeaderContainer>
    </>
  );
}

export default HeaderApp;

/* Aplicamos estilos directamente */
const HeaderContainer = styled.header`
  padding: 0.4rem;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
  }
`;

const Links = styled.ul`
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all 0.5s ease;

  &.active {
    width: 100%;
    display: block;
  }

  li {
    a {
      color: white;
      font-size: 2rem;
      display: block;
      margin-top: 1rem;
    }
  }
`;

const Logo = styled.img`
  width: 80px; /* Ajusta el tamaño del logotipo según tu diseño */
  margin-left: 1rem;
`;

const Title = styled.h2`
  color: black;
  font-weight: 400;
  text-align: center;
  flex-grow: 1;
`;

const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  top: 0;
  right: -45%;
  width: 25%;
  height: 70%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    right: 0;
  }
`;
