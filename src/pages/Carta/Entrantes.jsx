import React from "react";
import Comida from "../../components/Comida";

function Entrantes() {
  return (
    <>
      <h1 className='text-center font-bold text-4xl text-amber-500'>Entrantes</h1>
      <Comida
        source="../src/assets/Entrantes/Ebi furai.png"
        foodName="Ebi Furai"
        foodDescription="Gambas fritas al estilo japonés"
        foodPrice="12.8"
      />
    </>
  );
}

export default Entrantes;
