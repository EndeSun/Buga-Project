import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Comida({
  source,
  foodName,
  foodDescription,
  foodPrice,
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
  picante = false,
  // Diferentes caldos del Ramen
  caldos = [],
  // Etiqueda de recomendación
  hotSale = false,
  // Excepciones
  gyoza_verdura = false,
  wakame = false,
}) {
  // posición inicial del section
  const initialX = animacion ? (right ? 100 : -100) : 0;
  // La descripción del plato
  const [showDescription, setShowDescription] = useState(false);

  return (
    <motion.div className="flex justify-center relative">
      <motion.section
        className={
          vegan
            ? "mb-6 mt-2  w-4/6 rounded-xl  border-zinc-950 border-4 bg-slate-50 font-caprasimo shadow-emerald-200/80 shadow-2xl relative text-center"
            : "mb-6 mt-2  w-4/6 rounded-xl  border-zinc-950 border-4 bg-slate-50 font-caprasimo shadow-amber-100/80 shadow-2xl relative text-center"
        }
        initial={{ x: initialX }}
        whileInView={{ x: [initialX, 0], opacity: animacion ? [0, 1] : 1 }}
        transition={{
          duration: animacion ? 2 : 0,
          delay: animacion ? 0.1 : 0,
          layout: { duration: 3, type: "spring" },
        }}
        viewport={{ once: true }} //Para que se muestre solo una vez
      >
        <AnimatePresence>
          {/* Título de la comida */}
          <p className="text-orange-700 text-center text-xl font-bold m-2">
            {foodName}
          </p>
          <motion.div
            className="imagen-ramen flex justify-center relative"
            layout
          >
            {/* Imagen de la comida */}
            <motion.img
              src={source}
              alt={foodName}
              width="90%"
              className="lg:w-2/4"
            ></motion.img>
            {/* Etiqueta de cerdo | vegetariano */}
            {cerdo || vegan ? (
              <img
                src={
                  cerdo ? "../src/assets/cerdo.png" : "../src/assets/vegan.png"
                }
                width="13.5%"
                className={
                  cerdo
                    ? "absolute right-1/4 bottom-0"
                    : gyoza_verdura
                    ? "absolute top-5 right-8"
                    : wakame
                    ? "absolute top-5 left-1/4 w-1/6"
                    : "absolute top-5 right-1/4"
                }
              ></img>
            ) : null}
          </motion.div>
          {/* Apartado de picante */}
          {picante && (
            <motion.p className="text-red-800 text-xs p-1 text-center">
              Elige el grado de picante: 🌶🌶
              <span className="opacity-40">🌶</span>
            </motion.p>
          )}
          {/* Apartado de diferentes caldos */}
          <dl
            className={
              // Eliminado una variable de ramen, cogemos directamente de la variable de caldos
              caldos.length != 0
                ? "text-xs flex flex-col items-center justify-center text-center mx-2 px-8 rounded-md list-none"
                : "hidden"
            }
          >
            <dt>Otras opciones de caldo:</dt>
            {caldos.map((caldo, index) => (
              <dd
                className="m-0 font-bold border-1 rounded-full p-1 text-orange-700 bg-slate-50 bg-opacity-60 mt-1 w-3/4 shadow-md "
                key={index}
              >
                {caldo}
              </dd>
            ))}
          </dl>
          <motion.button
            className="border-2 rounded-lg text-xs font-bold p-1 m-1 border-gray-900 hover:bg-slate-400 hover:duration-300"
            onClick={() => {
              setShowDescription(!showDescription);
            }}
          >
            👉🏻DESCRIPCIÓN
          </motion.button>
        </AnimatePresence>

        {/* Div de los alérgenos */}
        <motion.div className={showDescription ? "opacity-20" : "opacity-100"}>
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
        </motion.div>
      </motion.section>

      {/* Descripción apilada */}
      <AnimatePresence>
        {showDescription ? (
          //Cuando el showDescription es true
          <motion.div
            className="w-5/6 h-4/6 bg-slate-100 rounded-xl border-2 border-black text-black text-center absolute grid grid-cols-2 items-center"
            onClick={() => {
              setShowDescription(false);
            }}
            layout
            animate={{
              scale: showDescription ? [0.8, 1] : 1,
              opacity: showDescription ? [0.6, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* La imagen en miniatura */}
            <motion.img
              className="lg:w-2/4"
              src={source}
              alt={foodName}
              width="100%"
            ></motion.img>
            {/* El párrafo de la descripción */}
            <div className="pr-1">
              <p className="text-left text-xs">{foodDescription}</p>
              <p className="font-bold text-red-600">{foodPrice} €</p>
            </div>
            {/* Botón de salir */}
            <motion.button className="absolute bottom-2 right-2">
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
                onClick={() => setShowDescription(!showDescription)}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Etiqueta de recomendado */}
      {hotSale && (
        <motion.img
          src="../src/assets/recomended.png"
          alt="recomendado"
          width="25%"
          className={
            showDescription
              ? "absolute top-0 left-2 opacity-0"
              : "absolute top-0 left-2"
          }
          initial={{ x: initialX }}
          whileInView={{ x: [initialX, 0], opacity: animacion ? [0, 1] : 1 }}
          transition={{
            duration: animacion ? 2 : 0,
            delay: animacion ? 0.1 : 0,
          }}
          viewport={{ once: true }} //Para que se muestre solo una vez
        />
      )}
    </motion.div>
  );
}

export default Comida;
