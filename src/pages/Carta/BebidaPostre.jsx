import React from "react";
import BebidaComponent from "../../components/BebidaComponent";

function BebidaPostre() {
  return (
    <section className="bg-black">
      <h1 className="text-center font-bold font-caprasimo text-2xl md:text-3xl lg:text-4xl text-amber-500 mb-8">
        Bebidas
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:grid-cols-4 mx-12 sm:mx-14 md:mx-1 lg:px-24">
        <BebidaComponent
          source="../src/assets/Bebidas/vichy.webp"
          nombreBebida="Vichy"
          
        />
        <BebidaComponent
          source="../src/assets/Bebidas/cola.webp"
          nombreBebida="Coca Cola"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/colaZero.webp"
          nombreBebida="Coca Cola Zero"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/colaZeroZero.webp"
          nombreBebida="Coca Cola Zero Zero"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/fantaNaranja.webp"
          nombreBebida="Fanta Naranja"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/fantaLimon.webp"
          nombreBebida="Fanta Limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/aquariusNaranja.webp"
          nombreBebida="Aquarius Naranja"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/aquariusLimon.webp"
          nombreBebida="Aquarius Limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/nestea.webp"
          nombreBebida="Fanta Limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneLimon.webp"
          nombreBebida="Ramune Limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneMelon.webp"
          nombreBebida="Ramune Melón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramunePinya.webp"
          nombreBebida="Ramune Piña"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneFresa.webp"
          nombreBebida="Ramune Fresa"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ramuneLichy.webp"
          nombreBebida="Ramune Lichy"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/te.webp"
          nombreBebida="Té verde"
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
          nombreBebida="Copa Ambar"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ambarLimon.webp"
          nombreBebida="Copa Ambar con Limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/copaBlanco.webp"
          nombreBebida="Copa Vino Blanco"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/copaTinto.webp"
          nombreBebida="Copa Vino Tinto"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/botellaBlanco.webp"
          nombreBebida="Botella Vino Blanco"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/botellaTinto.webp"
          nombreBebida="Botella Vino Tinto"
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
          nombreBebida="Chupito Afrutado"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/chupitoSoju.webp"
          nombreBebida="Soju Coreano"
        />
      </div>

      <h1 className="text-center font-bold font-caprasimo text-2xl text-amber-500 md:text-3xl lg:text-4x my-2">
        Postres
      </h1>

    </section>
  );
}

export default BebidaPostre;
