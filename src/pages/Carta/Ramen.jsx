import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comida from "../../components/Comida";
import Topping from "../../components/Topping";
import Scroll from "../../components/Scroll";

function Ramen() {
  // const comidas = [
  //   {
  //     source: '../src/assets/Entrantes/Ebi furai.png',
  //     foodName: 'Ebi Furai',
  //     foodDescription: 'Gambas fritas al estilo japonés',
  //     foodPrice: '12.8',
  //     gluten: true,
  //     crustaceos: true,
  //     moluscos: true,
  //     pescado: true,
  //   },
  //   {
  //     source: '../src/assets/Entrantes/Edamame.png',
  //     foodName: 'Edamame',
  //     foodDescription: 'Algas en salsa Soja',
  //     foodPrice: '10.4',
  //     soja: true,
  //   },
  //   // Puedes agregar más comidas aquí en pares
  // ];

  // const comidasPares = [];
  // for (let i = 0; i < comidas.length; i += 2) {
  //   if (i + 1 < comidas.length) {
  //     comidasPares.push([comidas[i], comidas[i + 1]]);
  //   } else {
  //     comidasPares.push([comidas[i], null]);
  //   }
  // }
  return (
    // <Carousel
    //   className="rounded-xl"
    //   showArrows={true}
    //   showThumbs={false}
    //   showStatus={false}
    //   showIndicators={false}
    //   emulateTouch={true}
    //   swipeable={true}
    //   dynamicHeight={false}
    //   centerSlidePercentage={50}
    //   renderArrowPrev={(onClickHandler, hasPrev, label) =>
    //     hasPrev && (
    //       <button type="button" onClick={onClickHandler} title={label} style={{ left: 15 }}>
    //         {"<"}
    //       </button>
    //     )
    //   }
    //   renderArrowNext={(onClickHandler, hasNext, label) =>
    //     hasNext && (
    //       <button type="button" onClick={onClickHandler} title={label} style={{ right: 15 }}>
    //         {">"}
    //       </button>
    //     )
    //   }
    // >
    //   {comidasPares.map((par, index) => (
    //     <div key={index} className="flex justify-between">
    //       {par[0] && <Comida {...par[0]} />}
    //       {par[1] && <Comida {...par[1]} />}
    //     </div>
    //   ))}
    // </Carousel>
    <>
      <h1 className="text-center font-extrabold font-caprasimo text-3xl text-amber-500 mt-6 drop-shadow-md ">
        Ramen
      </h1>

      <Comida
        source="../src/assets/Ramen/Chashu Miso Ramen_Chashu Shoyu Ramen_Spicy Chashu Ramen.png"
        foodName="Chashu Miso"
        foodDescription="Ramen shoyu con pollo frito, verduras, bambú,cebollino, naruto y huevo marinado."
        foodPrice="12.8"
        ramen={true}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right={true}
        animacion = {true}
        cerdo = {true}
        picante = {true}
        caldos = {["Chashu Shoyu"," Spicy Chashu"]}
        hotSale =  {true}
      />

      <Comida
        ramen={true}
        source="../src/assets/Entrantes/Edamame.png"
        foodName="Edamame"
        foodDescription="Algas en salsa Soja"
        foodPrice="10.4"
        soja={true}
        animacion = {true}
        vegan = {true}
      />

      <Comida
        source="../src/assets/Ramen/Chashu Miso Ramen_Chashu Shoyu Ramen_Spicy Chashu Ramen.png"
        foodName="Chashu Miso Ramen"
        foodDescription="Ramen shoyu con pollo frito, verduras, bambú,cebollino, naruto y huevo marinado."
        foodPrice="12.8"
        ramen={true}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right = {true}
        animacion = {true}
      />

      <Comida
        ramen={true}
        source="../src/assets/Entrantes/Edamame.png"
        foodName="Edamame"
        foodDescription="Algas en salsa Soja"
        foodPrice="10.4"
        soja={true}
        animacion = {true}
      />

      <Topping/>

      <hr className="my-8" />
    </>
  );
}

export default Ramen;
