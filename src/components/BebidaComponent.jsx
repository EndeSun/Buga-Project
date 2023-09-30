import React from "react";
import {motion} from "framer-motion"

function BebidaComponent({ source, nombreBebida }) {
  return (
    <div className="flex justify-center">
      <div className="rounded-xl shadow-md relative overflow-hidden w-40 md:w-48 lg:w-80 md:my-4 flex justify-center">
        <motion.img src={source} alt={nombreBebida} initial={{scale:1.3}} whileHover={{scale: 1.5}} transition={{duration:0.3}} className="w-full flex-none"/>
        
        <p className=" text-white text-left text-md md:text-xl lg:text-3xl font-bold m-1 drop-shadow-2xl font-caprasimo absolute top-0">
          {nombreBebida}
        </p>
      </div>
    </div>
  );
}

export default BebidaComponent;
