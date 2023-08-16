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
  animacion = false
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
        className="text-center px-1.5 mb-6 mt-2  w-3/4 rounded-2xl  border-zinc-950 border-8 bg-slate-100 font-caprasimo hover:shadow-orange-300 hover:shadow-2xl hover:duration-500"
        initial={{ x: initialX}}
        whileInView={{ x: [initialX, 0], opacity: animacion ? [0, 1] : 1 }}
        transition={{ duration: animacion ? 2 : 0, delay: animacion ? 0.1 : 0}} 
        viewport={{ once: true }}//Para que se muestre solo una vez
      >
        <dl>
          <dt className="text-orange-700 text-4xl lg:text-4xl m-6 ">
            {foodName} <span>{foodPrice} €</span>
          </dt>
          <dd
            className={
              ramen
                ? "text-orange-700 text-4xl lg:text-4xl m-6 text-left bg-gray-400 rounded-md p-2"
                : "hidden"
            }
          >
            Información Ramen
          </dd>
        </dl>

        <div className="flex justify-center">
          <motion.img src={source} alt={foodName} width="50%"></motion.img>
        </div>

        <p className="text-orange-700 text-2xl lg:text-4xl text-left mx-8">
          {foodDescription}{" "}
        </p>

        {/* Div de los alérgenos */}
        <div>
          <div className="primera-fila flex flex-row justify-center flex-wrap">
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
          <div className="Segunda-fila flex flex-row justify-center flex-wrap pb-8">
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
