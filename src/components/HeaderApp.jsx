import React, { useState } from "react";
import { Link } from "react-router-dom";
("use cliente");
import { Button, Navbar } from "flowbite-react";
import { Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

function HeaderApp() {
  return (
    <>
      <Navbar fluid className="bg-neutral-950 w-screen">
        {/* Logo con el link del logo */}
        <Link className="no-underline" to="/">
            <img
              alt="Logo de Buga Ramen"
              src="../src/assets/logo.png"
              width="80"
            />
        </Link>

        {/* Logo del menú */}
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>

        {/* Los  Elementos del menú*/}
        <Navbar.Collapse>
          <Link to="/" className="navBar2 no-underline bg-neutral-950 text-neutral-200 text-xl font-bold hover:duration-500 hover:text-amber-200 my-2 border-b-2 border-b-red-950 md:text-4xl md:border-none">Entrantes</Link>
          <Link to="/" className="navBar2 no-underline bg-neutral-950 text-neutral-200 text-xl font-bold hover:duration-500 hover:text-amber-200 my-2 border-b-2 border-b-red-950 md:text-4xl md:border-none">Ramen</Link>
          <Link to="/" className="navBar2 no-underline bg-neutral-950 text-neutral-200 text-xl font-bold hover:duration-500 hover:text-amber-200 my-2 border-b-2 border-b-red-950 md:text-4xl md:border-none">Don Style</Link>
          <Link to="/" className="navBar2 no-underline bg-neutral-950 text-neutral-200 text-xl font-bold hover:duration-500 hover:text-amber-200 my-2 border-b-2 border-b-red-950 md:text-4xl md:border-none">Combos/Especiales</Link>
          <Link to="/" className="navBar2 no-underline bg-neutral-950 text-neutral-200 text-xl font-bold hover:duration-500 hover:text-amber-200 my-2 border-b-2 border-b-red-950 md:text-4xl md:border-none md:hidden">Idiomas</Link>
          <Link to="/" className="navBar2 no-underline bg-neutral-950 text-neutral-200 text-xl font-bold hover:duration-500 hover:text-amber-200 my-2 border-b-2 border-b-red-950 md:text-4xl md:border-none md:hidden">Contacto</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HeaderApp;
