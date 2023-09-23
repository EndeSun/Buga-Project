import React from "react";
import Comida from "../../components/Comida";

function Combos() {
  return (
    <>
      <h1 className="text-center font-extrabold font-razha text-3xl text-amber-600 my-6 drop-shadow-md ">
        Combo Style
      </h1>

      <Comida
        source="../src/assets/Combos/Combo Ebi Furay Curry.png"
        foodName="Combo Ebi Furai Curry"
        foodDescription="Arroz con salsa de curry, camarones fritos, ensalada y sopa"
        foodPrice="13.50"
        gluten={true}
        mayonesa={true}
        crustaceos={true}
        huevos={true}
        animacion={true}
        right={true}
        pescado ={true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Combos/Combo Pato Curry.png"
        foodName="Combo Pato Curry"
        foodDescription="Arroz con salsa de curry, pato, ensalada y sopa"
        foodPrice="11.80"
        gluten={true}
        mayonesa={true}
        animacion={true}
        pescado ={true}
        sesamo = {true}
        pescados = {true}
      />

      <Comida
        source="../src/assets/Combos/Combo Teriyaki Chicken Curry.png"
        foodName="Combo Teriyaki Chicken Curry"
        foodDescription="Arroz con salsa de curry, pollo Teriyaki, ensalada y sopa"
        foodPrice="12.80"
        gluten={true}
        mayonesa={true}
        sesamo={true}
        animacion={true}
        right={true}
        pescado ={true}
      />

      <Comida
        source="../src/assets/Combos/Combo Karaage Curry.png"
        foodName="Combo Karaage Curry"
        foodDescription="Arroz con salsa de curry, pollo frito, ensalada y sopa"
        foodPrice="12.80"
        gluten={true}
        mayonesa={true}
        huevos={true}
        animacion={true}
        hotSale={true}
        pescado ={true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Combos/Combo Chicken Katsu Curry.png"
        foodName="Combo Chicken Katsu Curry"
        foodDescription="Arroz con salsa de curry, pollo frito, ensalada y sopa"
        foodPrice="13.50"
        gluten={true}
        mayonesa={true}
        huevos={true}
        animacion={true}
        right = {true}
        pescado ={true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Combos/Combo Teriyaki.png"
        foodName="Combo Teriyaki"
        foodDescription="Pollo Teriyaki con Kimchi, ensalada, arroz y sopa"
        foodPrice="11.80"
        gluten={true}
        mayonesa={true}
        sesamo={true}
        animacion={true}
        pescado ={true}
      />

      <Comida
        source="../src/assets/Combos/Combo Pato.png"
        foodName="Combo Pato"
        foodDescription="Pato con ensalada, arroz y sopa"
        foodPrice="10.80"
        gluten={true}
        mayonesa={true}
        animacion={true}
        right = {true}
        pescado ={true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Combos/ComboGyoza.png"
        foodName="Combo Gyoza"
        foodDescription="Gyoza (10 unidades) con ensalada, arroz y sopa"
        foodPrice="10.80"
        gluten={true}
        mayonesa={true}
        animacion={true}
        pescado ={true}
        soja = {true}
        sesamo = {true}
      />

      <Comida
        source="../src/assets/Combos/Combo Chicken Katsu.png"
        foodName="Combo Chicken Katsu"
        foodDescription="Pollo frito con Kimchi, ensalada, arroz y sopa"
        foodPrice="12.80"
        gluten={true}
        mayonesa={true}
        animacion={true}
        right={true}
        hotSale={true}
        pescado ={true}
        sesamo = {true}
        huevos= {true}
      />

      <Comida
        source="../src/assets/Combos/Combo Korokke.png"
        foodName="Combo Korokke"
        foodDescription="Croqueta fritas de calabaza con Kimchi, ensalada, arroz y sopa"
        foodPrice="10.80"
        gluten={true}
        mayonesa={true}
        animacion={true}
        pescado ={true}
        huevos = {true}
        sesamo = {true}
      />
    </>
  );
}

export default Combos;
