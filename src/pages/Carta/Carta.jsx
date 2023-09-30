// La galería, Como una ruta que contiene el enlace a todas las otras páginas.
import React from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

function Carta() {
  return (
    <>
      <div className=" w-screen grid grid-cols-1 sm:grid-cols-6">
        {/* ENTRANTES */}

        <Link
          to="/Entrantes"
          className="relative sm:col-span-2 overflow-hidden  mx-auto group"
        >
          <figure className="relative w-full h-full group-hover:scale-125 duration-300">
            <motion.img
              src="../../src/assets/carta/fotoEntrante.jpg"
              className="w-full h-full"
              alt="Entrantes"
            />
          </figure>
          <motion.div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold absolute inset-0 flex justify-center items-center ">
              Entrantes
          </motion.div>
        </Link>

        <Link
          to="/Ramen"
          className="relative sm:col-span-2 overflow-hidden  mx-auto group"
        >
          <figure className="relative w-full h-full group-hover:scale-125 duration-300">
            <motion.img
              src="../../src/assets/carta/fotoRamen.jpg"
              className="w-full h-full"
              alt="Ramen"
            />
          </figure>
          <motion.div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold absolute inset-0 flex justify-center items-center ">
              Ramen
          </motion.div>
        </Link>

        

        <Link
          to="/Entrantes"
          className="relative sm:col-span-2 overflow-hidden  mx-auto group"
        >
          <figure className="relative w-full h-full group-hover:scale-125 duration-300">
            <motion.img
              src="../../src/assets/carta/fotoCombo.jpg"
              className="w-full h-full"
              alt="Entrantes"
            />
          </figure>
          <motion.div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold absolute inset-0 flex justify-center items-center ">
              Combo
          </motion.div>
        </Link>

        <Link
          to="/Don"
          className="relative sm:col-span-3 overflow-hidden  mx-auto group"
        >
          <figure className="relative w-full h-full group-hover:scale-125 duration-300">
            <motion.img
              src="../../src/assets/carta/fotoDon.jpg"
              className="w-full h-full"
              alt="Donbury"
            />
          </figure>
          <motion.div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold absolute inset-0 flex justify-center items-center ">
              Donbury
          </motion.div>
        </Link>

        <Link
          to="/Entrantes"
          className="relative sm:col-span-3 overflow-hidden mx-auto group"
        >
          <figure className="relative w-full h-full group-hover:scale-125 duration-300">
            <motion.img
              src="../../src/assets/carta/fotoBebidaPostre.jpg"
              className="w-full h-full"
              alt="Bebida y postres"
            />
          </figure>
          <motion.div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold absolute inset-0 flex justify-center items-center ">
              Bebidas y Postres
          </motion.div>
        </Link>
      </div>

      {/* <motion.a href="../src/assets/Carta Buga Zaragoza.pdf" download="Carta Buga Ramen Zaragoza" className='no-underline  text-right p-2 text-2xl text-amber-600 font-bold hover:animate-bounce italic'>Descargar carta en PDF</motion.a> */}
    </>
  );
}

export default Carta;
