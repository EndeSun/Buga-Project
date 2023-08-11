import React from "react";
import Gluten from "./Allergen/Gluten";
import Crustaceos from "./Allergen/Crustaceos";
import Huevos from "./Allergen/Huevos";
import Pescado from "./Allergen/Pescado";
import Cacahuetes from "./Allergen/Cacahuetes";
import Soja from "./Allergen/Soja";
import Lacteos from "./Allergen/Lacteos";
import FrutosCascara from "./Allergen/FrutosCascara";
import Apio from "./Allergen/Apio";
import Mostaza from "./Allergen/Mostaza";
import Sesamo from "./Allergen/Sesamo";
import Azufre from "./Allergen/Azufre";
import Altramuces from "./Allergen/Altramuces";
import Moluscos from "./Allergen/Moluscos";

function Comida({
  source,
  foodName,
  foodDescription,
  foodPrice,
  gluten = true,
  crustaceos = true,
  huevos = true,
  pescado = true,
  cacahuetes = true,
  soja = true,
  lacteos = true,
  frutosCascara = true,
  apio = true,
  mostaza = true,
  sesamo = true,
  azufre = true,
  altramuces = true,
  moluscos = true,
}) {
  return (
    <section className="text-center">
      <div className="flex justify-center">
        <img src={source} alt={foodName} width="50%"></img>
      </div>

      <dl>
        <dt>{foodDescription}</dt>
        <dd>{foodPrice} €</dd>
      </dl>
      <div>

        {/* Gluten */}
      <Gluten mostrar={false}/>
      <Crustaceos/>
      <Huevos/>
      <Pescado/>
      <Cacahuetes/>
      <Soja/>
      <Lacteos/>
      <FrutosCascara/>
      <Apio/>
      <Mostaza/>
      <Sesamo/>
      <Azufre/>
      <Altramuces/>
      <Moluscos/>



      </div>
    </section>
  );
}

export default Comida;
