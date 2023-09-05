import {React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
("use cliente");
// import { Navbar } from "flowbite-react";

function HeaderApp() {
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ocultarMenu = () => {
      if (window.innerWidth > 960 && IsOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", ocultarMenu);

    return () => {
      window.removeEventListener("resize", ocultarMenu);
    };
  });

  const toggleOpen = () => {
    setIsOpen(!IsOpen);
  };
  
  return (
    <>
      <nav className="h-28 text-black relative shadow-sm bg-black w-screen">
        <Link
          className="absolute top-2 left-4 no-underline hover:brightness-125 hover:duration-300"
          to="/"
        >
          <img
            alt="Logo de Buga Ramen"
            src="../src/assets/logo.png"
            width="80"
          />
        </Link>

        <div className="pr-6 hidden [&>a]:m-2 md:flex md:justify-center mt-4">
          <Link
            to="/Entrantes"
            className="p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300"
          >
            Entrantes
          </Link>

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
        </div>

        <div
          className="absolute md:hidden text-slate-200 hover:text-white hover:duration-200 w-auto right-4 top-10"
          onClick={toggleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </nav>

      {/* Enlaces de los elementos internos escondidos de primera*/}
      {IsOpen && (
        <div
          className="w-screen grid grid-rows-6 text-left items-center bg-black p-3"
          onClick={toggleOpen}
        >
          <Link
            to="/Entrantes"
            className="p-1 no-underline rounded-lg bg-transparent text-neutral-200 text-xl font-razha uppercase font-bold hover:duration-300 hover:text-amber-200 my-2 md:text-xl lg:text-3xl md:border-none md:shadow-md md:shadow-orange-300"
          >
            Entrantes
          </Link>

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
        </div>
      )}
    </>
  );
}

export default HeaderApp;
