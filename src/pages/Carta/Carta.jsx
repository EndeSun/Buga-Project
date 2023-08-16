// La galería, Como una ruta que contiene el enlace a todas las otras páginas.
import React from "react";

function Carta() {
  return (
    <>
      <div className="sm:grid grid:cols-1 sm:grid-cols-6  text-center text-white">
        <section className="bg-slate-800 w-100 h-32 border border-white-500 sm:col-span-2 sm:order-1">
          Entrantes
        </section>
        <section className="bg-slate-800 w-100 h-32 border border-white-500 sm:col-span-3">
          Ramen
        </section>
        <section className="bg-slate-800 w-100 h-32 border border-white-500 sm:col-span-3">
          Combos
        </section>

        <section className="bg-slate-800 w-100 h-32 border border-white-500 sm:col-span-2 sm:order-2">
          Don Style
        </section>
        <section className="bg-slate-800 w-100 h-32 border border-white-500 sm:col-span-2 sm:order-3">
          Postres
        </section>
      </div>
    </>
  );
}

export default Carta;
