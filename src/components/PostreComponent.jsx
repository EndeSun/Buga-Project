// Cada uno de los postres de la carta
import React from "react";
import { motion } from "framer-motion";

function PostreComponent({ source, nombrePostre }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="rounded-xl shadow-md relative overflow-hidden w-40 md:w-48 lg:w-96 md:my-4">
        <motion.img
          src={source}
          alt={nombrePostre}
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        />

        <p className=" text-white text-left text-md md:text-xl lg:text-3xl font-bold m-1 drop-shadow-2xl font-caprasimo absolute top-0 right-0">
          {nombrePostre}
        </p>
      </div>
    </div>
  );
}

export default PostreComponent;
