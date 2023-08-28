// La galería, Como una ruta que contiene el enlace a todas las otras páginas.
import React from 'react'
import './Carta.css'
import { motion } from 'framer-motion';
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
      <div className= 'grid grid-cols-1 text-center sm:grid-cols-6 '>
        {/* ENTRANTES */}
        <motion.section
          className='relative w-full h-full bg-slate-200 sm:col-span-2 sm:order-1 border border-white-500 text-white flex flex-col items-center justify-center cursor-pointer group'
        >
          <motion.img
            src="../../src/assets/Entrantes/Chicken Katsu.png"
            className='w-full'
            alt='Chicken Katsu'
            whileHover={{ scale: 1.3 }}
          />
         <motion.div
          className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center opacity-0 invisible"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link
            to="/Entrantes"
            className="bg-transparent text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group-hover:block"
          >
            ENTRANTES
          </Link>
        </motion.div>
        </motion.section>

        {/* RAMEN */}
        <motion.section
          className='sm:col-span-3 relative pt-3 w-full h-full bg-slate-200 border border-white-500 text-white flex flex-col items-center justify-center cursor-pointer group'
        >
          <motion.img
            src="../../src/assets/Ramen/MalaChickenRamen.png"
            className='w-full'
            alt='Chicken Katsu'
            whileHover={{ scale: 1.3 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center opacity-0 invisible"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to="/Ramen"
              className="bg-transparent text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group-hover:block"
            >
              RAMEN
            </Link>
          </motion.div>
        </motion.section>
       
          {/* COMBOS */}
          <motion.section
          className='sm:col-span-3 relative pt-3 w-full h-full bg-slate-200 border border-white-500 text-white flex flex-col items-center justify-center cursor-pointer group'
        >
          <motion.img
            src="../../src/assets/Combos/ComboGyoza.png"
            className='w-full'
            alt='Chicken Katsu'
            whileHover={{ scale: 1.3 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center opacity-0 invisible"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to="/Combos"
              className="bg-transparent text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group-hover:block"
            >
              COMBOS
            </Link>
          </motion.div>
        </motion.section>

          {/* DON STYLE */}
          <motion.section
          className='sm:col-span-2 sm:order-2 relative pt-3 w-full h-full bg-slate-200 border border-white-500 text-white flex flex-col items-center justify-center cursor-pointer group'
        >
          <motion.img
            src="../../src/assets/Don/Chicken Don.png"
            className='w-full'
            alt='Chicken Katsu'
            whileHover={{ scale: 1.3 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center opacity-0 invisible"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to="/Don"
              className="bg-transparent text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group-hover:block"
            >
              DON STYLE
            </Link>
          </motion.div>
        </motion.section>

          {/* POSTRES Y BEBIDAS PROXIMAMENTE */}
          <motion.section
          className='sm:col-span-2 sm:order-3 relative pt-3 w-full h-full bg-slate-200 border border-white-500 text-white flex flex-col items-center justify-center cursor-pointer group'
        >
          <motion.img
            src="../../src/assets/Ramen/MalaChickenRamen.png"
            className='w-full'
            alt='Chicken Katsu'
            whileHover={{ scale: 1.3 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center opacity-0 invisible"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to="/Postres"
              className="bg-transparent text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out group-hover:block"
            >
              POSTRES
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}

export default Carta