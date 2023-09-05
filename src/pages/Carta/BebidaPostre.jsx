import React from "react";
import BebidaComponent from "../../components/BebidaComponent";

function BebidaPostre() {
  return (
    <>
      <h1 className="text-center font-bold font-caprasimo text-2xl md:text-3xl lg:text-4xl text-amber-500 my-4">
        Bebidas
      </h1>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mx-12 sm:mx-14 md:mx-16">
        <BebidaComponent
          source="../src/assets/Bebidas/vichy.webp"
          nombreBebida="Vichy 300 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/cola.webp"
          nombreBebida="Coca Cola 350 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/colaZero.webp"
          nombreBebida="Coca Cola Zero 350 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/colaZeroZero.webp"
          nombreBebida="Coca Cola Zero Zero 350 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/fantaNaranja.webp"
          nombreBebida="Fanta Naranja 350 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/fantaLimon.webp"
          nombreBebida="Fanta Limón 350 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/aquariusNaranja.webp"
          nombreBebida="Aquarius Naranja 300 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/aquariusLimon.webp"
          nombreBebida="Aquarius Limón 300 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/nestea.webp"
          nombreBebida="Fanta Limón 300 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneLimon.webp"
          nombreBebida="Ramune Limón 200 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneMelon.webp"
          nombreBebida="Ramune Melón 200 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramunePinya.webp"
          nombreBebida="Ramune Piña 200 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneFresa.webp"
          nombreBebida="Ramune Fresa 200 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneLichy.webp"
          nombreBebida="Ramune Lichy 200 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/te.webp"
          nombreBebida="Té verde 500 mL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/agua.webp"
          nombreBebida="Agua 50 cL"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/sapporo.webp"
          nombreBebida="Sapporo"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/kirin.webp"
          nombreBebida="Kirin"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/asahi.webp"
          nombreBebida="Asahi"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ambar.webp"
          nombreBebida="Copa ambar"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ambarLimon.webp"
          nombreBebida="Copa ambar con limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/copaBlanco.webp"
          nombreBebida="Copa vino blanco"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/copaTinto.webp"
          nombreBebida="Copa vino tinto"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/botellaBlanco.webp"
          nombreBebida="Botella vino blanco"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/botellaTinto.webp"
          nombreBebida="Botella vino tinto"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/chupitoSake.webp"
          nombreBebida="Chupito Sake"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/jarraSake.webp"
          nombreBebida="Jarra Sake"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/chupitoAfrutado.webp"
          nombreBebida="Chupito afrutado"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/chupitoSoju.webp"
          nombreBebida="Soju coreano 350 mL"
        />


        {/* Agrega más instancias de BebidaComponent según sea necesario */}
      </div>

      <h1 className="text-center font-bold font-caprasimo text-2xl text-amber-500 md:text-3xl lg:text-4xl my-4">
        Postres
      </h1>
    </>
  );
}

export default BebidaPostre;
