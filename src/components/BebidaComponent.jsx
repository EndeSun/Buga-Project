import React from "react";
import {motion} from "framer-motion"

function BebidaComponent({ source, nombreBebida }) {
  return (
    <>
      <div className="flex-col items-center justify-center border-4 border-slate-950 rounded-xl shadow-md shadow-teal-100 relative overflow-hidden ">
        <motion.img src={source} alt={nombreBebida} initial={{scale:1.3}} whileHover={{scale: 1.5}} transition={{duration:0.3}}/>
        
        <p className=" text-white text-center text-md font-semibold m-2 drop-shadow-2xl font-caprasimo sm:text-3xla absolute bottom-0 left-0  sm:text-xl md:text-2xl lg:text-3xl">
          {nombreBebida}
        </p>
      </div>
    </>
  );
}

export default BebidaComponent;
