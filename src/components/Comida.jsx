import React from "react";

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
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default Comida;
