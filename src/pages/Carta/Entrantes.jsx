import {React, useRef} from "react";
import Comida from "../../components/Comida";
import { useScroll, useTransform, motion } from "framer-motion";
// Este hook useScroll necesita un argumento target:
// El target es la cosa que tú quieres trackear con la posición del scroll dentro de la ventana.
// El Hook de useTransform transforma un valor en otro valor

function Entrantes() {
  const targetRef = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Se necesita otro segundo argumento, que es la de offset. Acepta dos strings start end significa que el comienzo del target encuentra con el final del contenedor
    offset: ["start end", "end start"]
    // Si no hay un contenedor, va a ser la propia ventana.

  });
  // La variable scrollYProgress contiene un número entre el valor 0 y el valor 1 que refiere cuánto ha scrolleado el usuario. 0 es el inicio, y 1 es el fin, está dentro de la propiedad current

  // Podemos utilizar otro Hook de framer-motion para calcular diferentes estilos basado en este hook
  
  // Cualquier elemento podemos cambiarlo por un elemento motion:
  // <motion.section ref={targetRef} Esta sección es la cosa que se quiere trackear

  // Ejemplo
  // El useTransform utiliza tres argumentos
  // El primer argumento es la cosa que quiere transformar
  // El segundo argumento es un array de valores que quieres recorrer y el tercer argumento es otro array de valores que se quiere recorrer

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // Para este caso, cuanndo el scrollYProgress es 0, la opacidad es 1, si el scrollYProgress es 0.5 la opacidad es 0.5 y si el scrollYProgress es 1 la opacidad es 0. Todos los valores de en medio se animará automáticamente.

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])


  return (
    <>
      <motion.h1 className="text-center font-bold font-caprasimo text-4xl text-amber-500 mt-8" style={{opacity}}>
        Entrantes
      </motion.h1>

      <Comida
        source="../src/assets/Entrantes/Ebi furai.png"
        foodName="Ebi Furai"
        foodDescription="Gambas fritas al estilo japonés"
        foodPrice="12.8"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
      />

      <Comida
        source="../src/assets/Entrantes/Edamame.png"
        foodName="Edamame"
        foodDescription="Algas en salsa Soja"
        foodPrice="10.4"
        soja={true}
      />
      <hr className="my-8" />
    </>
  );
}

export default Entrantes;
