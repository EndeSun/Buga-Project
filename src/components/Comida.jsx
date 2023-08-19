import React from "react";
import { motion } from "framer-motion";

function Comida({
  source,
  foodName,
  foodDescription,
  foodPrice,
  ramen = false,
  gluten = false,
  crustaceos = false,
  huevos = false,
  pescado = false,
  cacahuetes = false,
  soja = false,
  lacteos = false,
  frutosCascara = false,
  apio = false,
  mostaza = false,
  sesamo = false,
  azufre = false,
  altramuces = false,
  moluscos = false,
  right = false,
  animacion = false,
  cerdo = false,
  vegan = false,
}) {
  const initialX = animacion ? (right ? 200 : -200) : 0;
  // Cuidado con los valores que se definen, en tamaño grande el whileInView no pasaría nada, porque se encuentra dentro, pero en tamaños más pequeños, cuando el scroll baja, no consigue ver la comida.
  // console.log(initialX)
  // Si el animacion es falso, que la posición inicial se quede en el 0
  // Si el animacion es verdadero, hay que mirar la otra varible de right
  // Si right es verdadero, que entre por la derecha (posición 1000)
  // Si right es falso, que entre por la izquierda (posición -1000)

  return (
    <div className="flex justify-center">
      <motion.section
        className="text-center mb-6 mt-2  w-4/6 rounded-xl  border-zinc-950 border-4 bg-slate-100 font-caprasimo shadow-orange-300 shadow-2xl"
        initial={{ x: initialX }}
        whileInView={{ x: [initialX, 0], opacity: animacion ? [0, 1] : 1 }}
        transition={{ duration: animacion ? 2 : 0, delay: animacion ? 0.1 : 0 }}
        viewport={{ once: true }} //Para que se muestre solo una vez
      >
        <dl className="text-orange-700 text-xl m-2">
          <dt>{foodName}</dt>
          <dd
            className={
              ramen ? "text-sm m-2 text-left bg-gray-400 rounded-md" : "hidden"
            }
          >
            Caldo a elegir entre:
            <ul>
              <li>Chashu Shoyu</li>
              <li>Spicy Chashu</li>
            </ul>
          </dd>
        </dl>

        <div className="flex justify-center relative">
          <motion.img src={source} alt={foodName} width="90%"></motion.img>
          {cerdo || vegan ? (
            <img src={cerdo ? "../src/assets/cerdo.png":"../src/assets/vegan.png"} width="15%" className={cerdo ? "absolute right-1/4 bottom-0":"absolute top-1/4 right-1/4"}></img>
        ): null}
        </div>

        {/* <p className="text-orange-700 text-md text-left mx-8">
          {foodDescription}{" "}
        </p> */}

        {/* Div de los alérgenos */}
        <div className="">
          <div className="primera-fila flex flex-row justify-center">
            <img
              src="../src/assets/alergenos/gluten.svg"
              className={
                gluten
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/crustaceos.svg"
              className={
                crustaceos
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/huevos.svg"
              className={
                huevos
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/pescado.svg"
              className={
                pescado
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/cacahuetes.svg"
              className={
                cacahuetes
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/soja.svg"
              className={
                soja
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/lacteos.svg"
              className={
                lacteos
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
          </div>
          <div className="Segunda-fila flex flex-row justify-center pb-2">
            <img
              src="../src/assets/alergenos/frutosCascara.svg"
              className={
                frutosCascara
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/apio.svg"
              className={
                apio
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/mostaza.svg"
              className={
                mostaza
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/sesamo.svg"
              className={
                sesamo
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/azufre.svg"
              className={
                azufre
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/altramuces.svg"
              className={
                altramuces
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
            <img
              src="../src/assets/alergenos/moluscos.svg"
              className={
                moluscos
                  ? "alergeno-visible w-1/12 h-1/6"
                  : "opacity-20 w-1/12 h-1/6"
              }
            ></img>
          </div>
        </div>



      </motion.section>
    </div>
  );
}

export default Comida;
