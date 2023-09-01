import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Topping() {
  const [showToppings, setShowToppings] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-6 left-6 border-2 bg-amber-300 rounded-xl text-md lg:text-3xl p-2 border-black font-bold font-caprasimo uppercase"
        onClick={() => {
          setShowToppings(!showToppings);
        }}
      >
        ➕ Agregar Topping
      </button>
      
      <AnimatePresence>
        {showToppings && (
          <motion.div
            className="overflow-x-auto whitespace-nowrap w-full h-54 bg-slate-700 text-white fixed bottom-0 font-caprasimo"
            animate={{ y: [60, 0] }}
            exit={{ y: [0, 60], opacity: [1, 0] }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="flex flex-row [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:my-2 [&>div]:mx-6 [&>div]:p-1 [&>div]:border-1 lg:[&>div>p]:text-xl"
              onClick={() => {
                setShowToppings(!showToppings);
              }}
            >
              <div>
                <p>
                  Huevo cocido marinado
                  <span className="text-red-500 font-bold m-2">1,50 €</span>
                </p>
                <img
                  src="../src/assets/Toppings/huevo cocido marinado.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>
                  Huevo Hervido
                  <span className="text-red-500 font-bold m-2">1,50 €</span>
                </p>
                <img
                  src="../src/assets/Toppings/huevo hervido.png"
                  width="60"
                ></img>
              </div>
              <div>
                <p>
                  Bambú <span className="text-red-500 font-bold m-2 ">1,50 €</span>
                </p>
                <img src="../src/assets/Toppings/bambu.png" width="40"></img>
              </div>
              <div>
                <p>
                  Alga Nori
                  <span className="text-red-500 font-bold m-2">1,50 €</span>
                </p>
                <img
                  src="../src/assets/Toppings/alga nori.png"
                  width="90"
                ></img>
              </div>
              <div>
                <p>
                  Cebollino
                  <span className="text-red-500 font-bold m-2">1,50 €</span>
                </p>
                <img
                  src="../src/assets/Toppings/cebollino.png"
                  width="90"
                ></img>
              </div>
              <div>
                <p>
                  Verduras
                  <span className="text-red-500 font-bold m-2">1,50 €</span>
                </p>
                <img src="../src/assets/Toppings/verduras.png" width="90"></img>
              </div>
              <div>
                <p>
                  Ramen <span className="text-red-500 font-bold m-2">2,50 €</span>
                </p>
                <img src="../src/assets/Toppings/ramen.png" width="90"></img>
              </div>
              <div>
                <p>
                  Wantang (5u)
                  <span className="text-red-500 font-bold m-2">2,50 €</span>
                </p>
                <img src="../src/assets/Toppings/wangtang.png" width="90"></img>
              </div>
              <div>
                <p>
                  Naruto <span className="text-red-500 font-bold m-2">1,50 €</span>
                </p>
                <img src="../src/assets/Toppings/naruto.png" width="90"></img>
              </div>
            </div>
            <button
              className="fixed p-1 m-2 bottom-2 left bg-white text-red-800 rounded-lg"
              onClick={() => {
                setShowToppings(!showToppings);
              }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Topping;
