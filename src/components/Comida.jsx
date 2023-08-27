import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Comida({
  // Fuente
  source,
  // Nombre
  foodName,
  // Descripción
  foodDescription,
  // Precio
  foodPrice,
  // ALÉRGENOS -------------------
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
  // ---------------------------------
  // Animación activa por la derecha, tiene que tener animacion como true
  right = false,
  // Animación activa por la izquierda
  animacion = false,
  // Etiqueta de cerdo
  cerdo = false,
  // Etiqueta de vegano
  vegan = false,
  // Apartado de picante que se puede elegir en ramen
  picante = false,
  // Apartado de picante de los entrantes
  picanteEntrante = false,
  // Picante leve
  picanteLeve = false,
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
    // DIV PRINCIPAL QUE ENVUELVE A TODOS LOS ELEMENTOS
    // SECTION
    // DESCRIPCIÓN
    // HOTSALE
    <motion.div className="flex justify-center relative">
      {/* SECCIÓN PRINCIPAL */}
      <motion.section
        className={`mb-6 mt-2  w-4/6 rounded-xl  border-zinc-950 border-4 bg-slate-50 font-caprasimo  shadow-2xl relative text-center ${
          vegan ? "shadow-emerald-200/80" : "shadow-amber-100/80"
        }`}
        whileInView={{ x: [initialX, 0], opacity: animacion ? [0, 1] : 1 }}
        transition={{
          duration: animacion ? 2 : 0,
          delay: animacion ? 0.1 : 0,
        }}
        viewport={{ once: true }} //Para que se muestre solo una vez
      >
        {/* CONTENIDO DEL PLATO */}
          {/* Título de la comida */}
          <p className="text-orange-700 text-center text-xl font-bold m-2">
            {foodName}
          </p>
          {/*  Imagen de la comida y la etiqueta de cerdo o vegetariano*/}
          <motion.figure
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
          </motion.figure>
          {/* Apartado de picante del ramen que se puede elegir*/}
          {picante && (
            <motion.p className={`text-red-800 text-xs p-1 text-center ${showDescription ? "opacity-20":"opacity-100"}`}>
              Elige el grado de picante: 🌶🌶
              <span className="opacity-40">🌶</span>
            </motion.p>
          )}
          {/* Apartado de picante fijo (3:picante 1:picante leve) */}
          {picanteEntrante && (
            <motion.p className={`text-red-800 text-xs p-1 m-0 text-center ${showDescription ? "opacity-20": "opacity-100"}`}>
              🌶<span className={picanteLeve ? "hidden":"leve"}>🌶🌶</span>
            </motion.p>
          )}

          {/* Apartado de diferentes caldos */}
          <dl
            className={
              caldos.length != 0
                ? (`text-xs flex flex-col items-center justify-center text-center mx-2 px-8 rounded-md list-none ${showDescription ? "opacity-20" : "opacity-100"}`)
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

          {/* Botón para abrir la descripción */}
          <motion.button
            className={`border-2 rounded-lg text-xs font-bold p-1 m-1 border-gray-900 hover:bg-slate-400 mb-3 hover:duration-300 ${showDescription ? "opacity-20": "opacity-100"}`}
            onClick={() => {
              setShowDescription(!showDescription);
            }}
          >
            👉🏻DESCRIPCIÓN
          </motion.button>

        {/* ALÉRGENOS */}
        <motion.div className={showDescription ? "opacity-20":"opacity-100 mb-2.5"}>
          {/* ------------------------Corregir-------------------------- */}
          
          {/* Primera fila de alérgenos */}
          <div className="flex flex-row justify-center">
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
          {/* Segunda fila de alérgenos */}
          <div className="flex flex-row justify-center pb-2">
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

      {/* DESCRIPCIÓN PLATO */}
      <AnimatePresence>
        {showDescription &&
          <motion.div
            className="w-5/6 h-3/6 bg-slate-100 rounded-xl border-2 border-black text-black text-center absolute top-12 grid grid-cols-2 items-center"
            animate={{
              scale: showDescription ? [0.8, 1] : 1,
              opacity: showDescription ? [0.6, 1] : 1,
            }}
            exit={{ opacity: [1,0], scale: [1, 0.6] }}
            transition={{ duration: 0.2 }}
            layout
            onClick={() => {
              setShowDescription(false);
            }}
          >

            {/* Imagen en miniatura */}
            <motion.img
              className="lg:w-2/4"
              src={source}
              alt={foodName}
              width="100%"
            ></motion.img>

            {/* Descripción */}
            <div className="pr-2 mr-1 relative font-caprasimo">
              <p className="text-left text-xs rounded-sm shadow-xl shadow-yellow-400/20 p-3 ">{foodDescription}</p>
              <p className="font-bold text-sm text-yellow-400  border-1 border-yellow-400 rounded-md px-1 bg-slate-950 absolute right-0 -bottom-4">{foodPrice} €</p>
            </div>
            {/* SVG de salida (en posición absoluta)*/}
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

          </motion.div>}
      </AnimatePresence>

      {/* Etiqueta de recomendado */}
      {hotSale && (
        <motion.img
          src="../src/assets/recomended.png"
          alt="recomendado"
          width="25%"
          className={
              `absolute top-0 left-2  ${showDescription && "opacity-0"}`
          }
          whileInView={{ x: [initialX, 0], opacity: animacion ? [0, 1] : 1 }}
          transition={{
            duration: animacion ? 2 : 0,
            delay: animacion ? 0.1 : 0,
          }}
          viewport={{ once: true }}
        />
      )}
    </motion.div>
  );
}

export default Comida;
