import React, { useState } from "react";
import { Link } from "react-router-dom";
("use cliente");
import { Button, Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

function HeaderApp() {
  return (
    <>
      <Navbar fluid className="bg-neutral-950 w-screen">
        {/* Logo con el link del logo */}
        <Link
          className="no-underline hover:brightness-125 hover:duration-700"
          to="/"
        >
          <img
            alt="Logo de Buga Ramen"
            src="../src/assets/logo.png"
            width="80"
          />
        </Link>

        {/* Logo del menú */}
        <div className="flex md:order-2">
          <Navbar.Toggle className="hover:duration-700" />
        </div>

        {/* Los  Elementos del menú*/}
        <Navbar.Collapse>
          <Link
            to="/Entrantes"
            className="navBar2 p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300"
          >
            Entrantes
          </Link>
          <Link
            to="/Ramen"
            className="navBar2 p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300"
          >
            Ramen
          </Link>
          <Link
            to="/Don"
            className="navBar2 p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none lg:m-4 md:shadow-md md:shadow-orange-300"
          >
            Don Style
          </Link>
          <Link
            to="/Combos"
            className="navBar2 p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none lg:m-4 md:shadow-md md:shadow-orange-300"
          >
            Combos
          </Link>
          <Link
            to="/BebidaPostre"
            className="navBar2 p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none lg:m-4 md:shadow-md md:shadow-orange-300"
          >
            Bebida y Postres
          </Link>
          <Link
            to="/"
            className="navBar2 p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-4xl md:borderc-none md:hidden md:shadow-md md:shadow-orange-300"
          >
            Idiomas
          </Link>
          <Link
            to="/FormularioContacto"
            className="navBar2 p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-500 hover:text-amber-200 my-2 md:text-4xl md:border-none md:hidden md:shadow-md md:shadow-orange-300"
          >
            Contacto
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HeaderApp;
