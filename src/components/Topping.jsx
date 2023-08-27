import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Topping() {
  const [showToppings, setShowToppings] = useState(false);
  return (
    <>
      <motion.button
        className="fixed bottom-6 left-6 border-2 bg-amber-300 rounded-xl text-lg p-2 border-black font-bold font-caprasimo uppercase hover:scale-105"
        onClick={() => {
          setShowToppings(!showToppings);
        }}
      >
      ➕ Agregar Topping
      </motion.button>
      
      <AnimatePresence>
        {showToppings && (
          <motion.div
            className="overflow-x-auto whitespace-nowrap w-full h-54 bg-slate-700 text-white fixed bottom-0"
            animate={{ y: [60, 0] }}
            exit={{ y: [0, 60], opacity: [1,0]}}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-row [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:my-2 [&>div]:mx-6 [&>div]:p-1 [&>div]:border-1" onClick={()=>{setShowToppings(!showToppings)}}>
              <div>
                <p>Huevo cocido marinado 1,50 €</p>
                <img
                  src="../src/assets/Toppings/huevo cocido marinado.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Huevo Hervido 1,50 €</p>
                <img
                  src="../src/assets/Toppings/huevo hervido.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Bambú 1,50 €</p>
                <img
                  src="../src/assets/Toppings/bambu.png"
                  width="40"
                ></img>
              </div>
              <div>
                <p>Alga Nori 1,50 €</p>
                <img
                  src="../src/assets/Toppings/alga nori.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Cebollino 1,50 €</p>
                <img
                  src="../src/assets/Toppings/cebollino.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Verduras 1,50 €</p>
                <img
                  src="../src/assets/Toppings/verduras.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Ramen 2,50 €</p>
                <img
                  src="../src/assets/Toppings/ramen.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Wantang (5u) 2,50 €</p>
                <img
                  src="../src/assets/Toppings/wangtang.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>Naruto 1,50 €</p>
                <img
                  src="../src/assets/Toppings/naruto.png"
                  width="60"
                ></img>
              </div>
              
            </div>
            <button
            className="fixed border-2 p-1 bottom-2 left-2 bg-slate-400 text-red-800 rounded-lg"
              onClick={() => {
                setShowToppings(!showToppings);
              }}
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Topping;
