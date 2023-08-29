import React, { useState } from "react";
import { Link } from "react-router-dom";
("use cliente");
import { Navbar } from "flowbite-react";

function HeaderApp() {
  return (
    <>
      <Navbar fluid className="bg-neutral-950 w-screen">
        {/* Logo con el link del home */}
        <Link
          className="no-underline hover:brightness-125 hover:duration-300"
          to="/"
        >
          <img
            alt="Logo de Buga Ramen"
            src="../src/assets/logo.png"
            width="80"
          />
        </Link>

        {/* Logo del dropbar */}
        <div className="flex md:order-2">
          <Navbar.Toggle className="hover:duration-300" />
        </div>

        {/* Los  Elementos del menú*/}
        <Navbar.Collapse>
          <Link
            to="/Entrantes"
            className="p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300" //hidden md:block y esta guarrada
          >
            Entrantes
          </Link>
          {/* <a
            href="/Entrantes"
            className= 'p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300 md:hidden'
          >
            Entrantes
            </a>  No sé si hacer esta guarrada*/}
          <Link
            to="/Ramen"
            className="p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300"
          >
            Ramen
          </Link>
          <Link
            to="/Don"
            className="p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none lg:m-4 md:shadow-md md:shadow-orange-300"
          >
            Don Style
          </Link>
          <Link
            to="/Combos"
            className="p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none lg:m-4 md:shadow-md md:shadow-orange-300"
          >
            Combos
          </Link>
          <Link
            to="/BebidaPostre"
            className="p-1 no-underline  rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none lg:m-4 md:shadow-md md:shadow-orange-300"
          >
            Bebida y Postres
          </Link>
          <Link
            to="/"
            className="p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-4xl md:borderc-none md:hidden md:shadow-md md:shadow-orange-300"
          >
            Idiomas
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HeaderApp;
