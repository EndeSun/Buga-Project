import React from "react";
import Comida from "../../components/Comida";

function Entrantes() {
  return (
    <>
      <h1 className='text-center font-bold text-4xl text-amber-500 mt-8'>Entrantes</h1>
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
      <hr className="my-8"/>
    </>
  );
}

export default Entrantes;
