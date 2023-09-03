import { React, useRef, useState } from "react";
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
    offset: ["start end", "end start"],
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

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Para este caso, cuanndo el scrollYProgress es 0, la opacidad es 1, si el scrollYProgress es 0.5 la opacidad es 0.5 y si el scrollYProgress es 1 la opacidad es 0. Todos los valores de en medio se animará automáticamente.

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <>
      <h1 className="text-center font-bold font-caprasimo text-4xl text-amber-500 my-6">
        Entrantes
      </h1>

      <Comida
        source="../src/assets/Entrantes/Karaage/Karaage 2.png"
        foodName="Karaage"
        foodDescription="Pollo frito, con 5 piezas cada ración."
        foodPrice="4.80"
        animacion={true}
        right={true}
        gluten = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Karaage/Okonomiyaki karaage 2.png"
        foodName="Okonomiyaki Karaage"
        foodDescription="Pollo frito con salsa Okonomiyaki, con 5 piezas cada ración"
        foodPrice="5.80"
        animacion={true}
        hotSale = {true}
        gluten = {true}
        huevos = {true}
        soja =  {true}
      />

      <Comida
        source="../src/assets/Entrantes/Karaage/Spicy Karaage 2.png"
        foodName="Spicy Karaage"
        foodDescription="Pollo frito picante, con 5 piezas cada ración"
        foodPrice="5.80"
        animacion={true}
        right={true}
        picanteEntrante = {true}
        gluten = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Gyoza/Gyoza 2.png"
        foodName="Gyoza"
        foodDescription="Gyoza frita, vienen 6 piezas"
        foodPrice="4.80"
        animacion={true}
        gluten = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Gyoza/Spicy Gyoza 2.png"
        foodName="Spicy Gyoza"
        foodDescription="Gyoza con salsa picante, vienen 6 piezas"
        foodPrice="5.60"
        animacion={true}
        right={true}
        picanteEntrante = {true}
        gluten = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Gyoza/Okonomiyaki Gyoza 2.png"
        foodName="Okonomiyaki Gyoza"
        foodDescription="Gyoza con salsa Okonomiyaki, vienen 6 piezas"
        foodPrice="5.60"
        animacion={true}
        hotSale={true}
        gluten = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Gyoza/Gyoza verdura 2.png"
        foodName="Gyoza de verduras"
        foodDescription="Gyoza de verdura, vienen 6 piezas"
        foodPrice="4.80"
        animacion={true}
        right={true}
        vegan={true}
        gyoza_verdura={true}
        gluten = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Chicken Salad.png"
        foodName="Chicken Salad"
        foodDescription="Ensalada de pollo"
        foodPrice="7.80"
        animacion={true}
        hotSale={true}
        gluten = {true}
        huevos = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Edamame.png"
        foodName="Edamame"
        foodDescription="Habas de Soja"
        foodPrice="3.60"
        animacion={true}
        right={true}
        vegan={true}
        gluten = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Shibuya Chicken Wings.png"
        foodName="Shibuya Chicken Wings"
        foodDescription="Alitas de pollo Shibuya"
        foodPrice="4.80"
        animacion={true}
        gluten = {true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Kimchi.png"
        foodName="Kimchi"
        foodDescription="Col y verdura fermentada"
        foodPrice="4.20"
        animacion={true}
        hotSale={true}
        right={true}
        gluten = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Takoyaki.png"
        foodName="Takoyaki"
        foodDescription="Bolas de calamar con mayonesa, vienen 4 unidades"
        foodPrice="5.60"
        animacion={true}
        hotSale={true}
        gluten = {true}
        huevos = {true}
        pescado = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Spicy Fried Tofu.png"
        foodName="Spicy Fried Tofu"
        foodDescription="Tofu frito picante"
        foodPrice="5.60"
        animacion={true}
        right={true}
        gluten = {true}
        soja = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Koroke.png"
        foodName="Korokke"
        foodDescription="Croquetas fritas de calabaza"
        foodPrice="4.60"
        animacion={true}
        gluten = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Wakame.png"
        foodName="Wakame"
        foodDescription="Ensalada de algas"
        foodPrice="4.20"
        animacion={true}
        vegan={true}
        wakame={true}
        right={true}
        gluten = {true}
        soja = {true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Ebi Furai.png"
        foodName="Ebi Furai"
        foodDescription="Camarones fritos, vienen 3 unidades"
        foodPrice="5.50"
        animacion={true}
        gluten = {true}
        crustaceos = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Gamba Kushiage.png"
        foodName="Gamba Kushiage"
        foodDescription="Brochetas de camarones empanizados"
        foodPrice="4.60"
        animacion={true}
        right={true}
        gluten = {true}
        crustaceos = {true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Chicken Katsu.png"
        foodName="Chicken Katsu"
        foodDescription="Pollo frito"
        foodPrice="4.80"
        animacion={true}
        gluten = {true}
        huevos = {true}
      />

      <Comida
        source="../src/assets/Entrantes/Teriyaki Chicken.png"
        foodName="Teriyaki Chicken"
        foodDescription="Pollo Teriyaki"
        foodPrice="4.80"
        animacion={true}
        right={true}
        gluten = {true}
        sesamo = {true}
      />

      <hr className="my-8" />
    </>
  );
}

export default Entrantes;
