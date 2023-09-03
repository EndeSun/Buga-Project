import React from "react";

function BebidaComponent({ source, nombreBebida }) {
  return (
    <>
      <div className="flex-col items-center justify-center border-4 border-slate-950 rounded-xl shadow-md shadow-teal-100 p-1 relative">
        <img src={source} alt={nombreBebida} />
        <p className=" text-amber-600 text-center text-md font-semibold m-2 drop-shadow-2xl font-caprasimo sm:text-3xla absolute bottom-0 sm:text-xl md:text-2xl lg:text-3xl">
          {nombreBebida}
        </p>
      </div>
    </>
  );
}

export default BebidaComponent;
