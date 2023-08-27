import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comida from "../../components/Comida";
import Topping from "../../components/Topping";
import Scroll from "../../components/Scroll";

function Ramen() {
  return (
    <>
      <h1 className="text-center font-extrabold font-caprasimo text-3xl text-amber-600 my-6 drop-shadow-md ">
        Ramen
      </h1>
      <Comida
        source="../src/assets/Ramen/Mala Chashu Ramen.png"
        foodName="Mala Chashu"
        foodDescription="Ramen picante con carne de cerdo, verduras, bambú, cebollino, naruto y huevo marinado."
        foodPrice="13.90"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right={true}
        animacion={true}
        cerdo={true}
        picante={true}
        hotSale={true}
      />

      <Comida
        source="../src/assets/Ramen/MalaChickenRamen.png"
        foodName="Mala Chicken"
        foodDescription="Ramen picante con pollo, verdura bambú, cilantro, cebollino, 3 piezas pasta wantang, huevo marinado."
        foodPrice="13.90"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        picante={true}
        hotSale={true}
      />

      <Comida
        source="../src/assets/Ramen/Karaage Spicy Ramen_Karaage Miso Ramen.png"
        foodName="Karaage Spicy"
        foodDescription="Ramen miso con pollo, verduras, bambú, cebollino, naruto y huevo marinado."
        foodPrice="12.80"
        caldos={["Karaage Miso"]}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right={true}
        animacion={true}
        picante={true}
      />

      <Comida
        source="../src/assets/Ramen/Noko Chicken Ramen.png"
        foodName="Noko Chicken"
        foodDescription="Ramen Shio con pollo, verduras, bambú, cebollino, 3 piezas pasta wantang y huevo marinado."
        foodPrice="13.90"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
      />

      <Comida
        source="../src/assets/Ramen/Teriyaki Chicken Miso Ramen_Spicy Teriyaki Chicken Ramen.png"
        foodName="Teriyaki Chicken Miso"
        foodDescription="Ramen miso con pollo, verduras, bambú, cebollino y huevo marinado."
        foodPrice="12.60"
        caldos={["Spicy Teriyaki Chicken"]}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        right={true}
        pescado={true}
        animacion={true}
        picante={true}
      />

      <Comida
        source="../src/assets/Ramen/Teriyaki Chicken Shoyu Ramen.png"
        foodName="Teriyaki Chicken Shoyu"
        foodDescription="Ramen Shoyu con pollo, verduras, bambú, cebollino, 5 piezas pasta wantang y huevo marinado."
        foodPrice="12.80"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        hotSale={true}
      />

      <Comida
        source="../src/assets/Ramen/Chicken Katsu Shoyu Ramen_Spicy Chicken Katsu Ramen.png"
        foodName="Chicken Katsu Shoyu"
        foodDescription="Ramen Shoyu con pollo frito, verduras, bambú, cebollino, naruto y huevo marinado."
        foodPrice="12.80"
        caldos={["Spicy Chicken Katsu"]}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        right={true}
        pescado={true}
        animacion={true}
        hotSale={true}
        picante={true}
      />

      <Comida
        source="../src/assets/Ramen/Ebi Furai Shoyu Ramen_Spicy Ebi Furay Ramen.png"
        foodName="Ebi Furai Shoyu"
        foodDescription="Ramen Shoyu con camarones fritos, verduras, bambú, cebollino, naruto y huevo marinado."
        foodPrice="12.80"
        caldos={["Spicy Ebi Furai"]}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        picante={true}
      />

      <Comida
        source="../src/assets/Ramen/Spicy Ebi Kushi Karaage Ramen_Ebi Kushi Karaage Miso Ramen.png"
        foodName="Spicy Ebi Kushi Karaage"
        foodDescription="Ramen picante con pollo, gambas, verdura, cilantro, cebollino, bambú y huevo marinado."
        foodPrice="13.50"
        caldos={["Ebi Kushi Karaage Miso"]}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        right={true}
        pescado={true}
        animacion={true}
        picante={true}
      />

      <Comida
        source="../src/assets/Ramen/Spicy Ebi Kushi Ramen_Ebi Kushi Shoyu Ramen.png"
        foodName="Spicy Ebi Kushi"
        foodDescription="Ramen picante con verduras, bambú, cebollino, naruto, alga y huevo marinado."
        foodPrice="12.80"
        caldos={["Ebi Kushi Shoyu"]}
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        picante={true}
      />

      <Comida
        source="../src/assets/Ramen/Chashu Miso Ramen_Chashu Shoyu Ramen_Spicy Chashu Ramen.png"
        foodName="Chashu Miso"
        foodDescription="Ramen shoyu con pollo frito, verduras, bambú,cebollino, naruto y huevo marinado."
        foodPrice="12.8"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right={true}
        animacion={true}
        cerdo={true}
        picante={true}
        caldos={["Chashu Shoyu", " Spicy Chashu"]}
        hotSale={true}
      />

      <Comida
        source="../src/assets/Ramen/Pato Shoyu Ramen_Pato Miso Ramen.png"
        foodName="Pato Shoyu"
        foodDescription="Ramen shoyu con pato, verduras, bambú, cebollino, naruto y huevo marinado."
        foodPrice="12.8"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        caldos={["Pato Miso"]}
      />

      <Comida
        source="../src/assets/Ramen/Tantan Miso Ramen_Spicy Tantan Ramen.png"
        foodName="Tantan Miso"
        foodDescription="Ramen miso con carne de cerdo picado, verduras, bambú, cebollino, cacahuete y huevo hervido."
        foodPrice="11.60"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        caldos={["Spicy Tantan"]}
        right={true}
        animacion={true}
        hotSale={true}
        cerdo={true}
      />

      <Comida
        source="../src/assets/Ramen/Chicken Tantan Ramen.png"
        foodName="Chicken Tantan"
        foodDescription="Ramen miso con pollo, verduras, bambú, cebollino, cacahuete y huevo hervido."
        foodPrice="12.80"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        cerdo={true}
      />

      <Comida
        source="../src/assets/Ramen/Yasai Tofu Shoyu Ramen_Yasai Tofu Miso Ramen_Spicy Yasai Tofu Ramen.png"
        foodName="Yasai Tofu Shoyu"
        foodDescription="Ramen shoyu con verduras, algas, setas, espárragos, boniato, pimientos, berenjena y 3 piezas tofu."
        foodPrice="12.80"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right={true}
        animacion={true}
        vegan={true}
        picante={true}
        caldos={["Yasai Tofu Miso", "Spicy Yasai Tofu"]}
      />

      <Comida
        source="../src/assets/Ramen/Yasai Shoyu Ramen.png"
        foodName="Yasai Shoyu"
        foodDescription="Ramen Shoyu con verduras, setas, espárragos, berenjena, pimientos, boniato, alga, bambú y cebollino."
        foodPrice="10.80"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        animacion={true}
        vegan={true}
      />

      <Comida
        source="../src/assets/Ramen/Yasai Miso Ramen_Spicy Yasai Ramen.png"
        foodName="Yasai Miso"
        foodDescription="Ramen miso con verdura, sésamo, alga, boniato, bambú, pimientos, espárragos, cebollino."
        foodPrice="10.80"
        gluten={true}
        crustaceos={true}
        moluscos={true}
        pescado={true}
        right={true}
        animacion={true}
        vegan={true}
        picante={true}
        caldos={["Spicy Yasai"]}
      />

      <Topping />

      <hr className="my-8" />
    </>
  );
}

export default Ramen;
