import React from "react";
import Comida from "../../components/Comida";

function Don() {
  return (
    <>
      <h1 className="text-center font-extrabold font-razha text-3xl text-amber-600 my-6 drop-shadow-md ">
        Donbury Style
      </h1>

      <Comida
        source="../src/assets/Don/Arroz.png"
        foodName="Arroz"
        foodDescription="Arroz blanco aromatizada"
        foodPrice="2.60"
        gluten={true}
        soja={true}
        animacion={true}
        right={true}
      />

      <Comida
        source="../src/assets/Don/Karaage Don.png"
        foodName="Karaage Don"
        foodDescription="Pollo frito con arroz"
        foodPrice="9.80"
        gluten={true}
        soja={true}
        huevos={true}
        mayonesa={true}
        animacion={true}
        hotSale={true}
      />

      <Comida
        source="../src/assets/Don/Chicken Don.png"
        foodName="Chicken Don"
        foodDescription="Pollo con arroz"
        foodPrice="9.80"
        gluten={true}
        soja={true}
        huevos={true}
        sesamo={true}
        mayonesa={true}
        animacion={true}
        right={true}
      />

      <Comida
        source="../src/assets/Don/Unagi Don.png"
        foodName="Unagi Don"
        foodDescription="Anguila con arroz"
        foodPrice="13.80"
        gluten={true}
        soja={true}
        pescado={true}
        huevos={true}
        mayonesa={true}
        animacion={true}
        sesamo= {true}
      />

      <Comida
        source="../src/assets/Don/Pato Don.png"
        foodName="Pato Don"
        foodDescription="Pato con arroz"
        foodPrice="9.80"
        gluten={true}
        soja={true}
        huevos={true}
        mayonesa={true}
        animacion={true}
        right={true}
      />

      <Comida
        source="../src/assets/Don/Ebi Don.png"
        foodName="Ebi Don"
        foodDescription="Gambas con arroz"
        foodPrice="9.80"
        gluten={true}
        soja={true}
        huevos={true}
        crustaceos={true}
        mayonesa={true}
        animacion={true}
      />
    </>
  );
}

export default Don;
