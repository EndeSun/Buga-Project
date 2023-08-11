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
}) {
  return (
    <section className="text-center w-screen px-1.5 ">
      <div className="flex justify-center">
        <img src={source} alt={foodName} width="50%"></img>
      </div>

      <dl>
        <dt className="text-4xl">{foodDescription}</dt>
        <dd className="text-3xl">{foodPrice} €</dd>
      </dl>
      <div className="flex flex-row justify-center flex-wrap">
      <Gluten mostrar={gluten}  className="w-1/12 h-auto" />
      <Crustaceos mostrar={crustaceos}/>
      <Huevos mostrar={huevos}/>
      <Pescado mostrar={pescado}/>
      <Cacahuetes mostrar={cacahuetes}/>
      <Soja mostrar={soja}/>
      <Lacteos mostrar={lacteos}/>
      <FrutosCascara mostrar={frutosCascara}/>
      <Apio mostrar={apio}/>
      <Mostaza mostrar={mostaza}/>
      <Sesamo mostrar={sesamo}/>
      <Azufre mostrar={azufre}/>
      <Altramuces mostrar={altramuces}/>
      <Moluscos mostrar={moluscos}/>
      </div>
    </section>
  );
}

export default Comida;
