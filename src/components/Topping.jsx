import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";

function Topping({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <Button
        variant="warning"
        onClick={handleShow}
        className="me-2 fixed ml-4 bottom-10 uppercase"
      >
        👉🏻 Extra topping
      </Button>

      <Offcanvas
        scroll="true"
        placement="bottom"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header
          className="flex bg-black text-white font-bold justify-center"
          closeButton
          closeVariant="white"
        >
          <p>Añade tu extra topping favorito</p>
        </Offcanvas.Header>

        <Offcanvas.Body className="bg-black text-white mt-2">
          <div className="grid grid-cols-9">
            <div>
              Huevo cocido marinado 1,50 €
              <img
                src="../src/assets/Toppings/huevo cocido marinado.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Huevo hervido 1,50 €
              <img
                src="../src/assets/Toppings/huevo hervido.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Bambú 1,50 €
              <img
                src="../src/assets/Toppings/bambu.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Nori 1,50 €
              <img
                src="../src/assets/Toppings/alga nori.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Cebollino 1,50 €
              <img
                src="../src/assets/Toppings/cebollino.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Verduras 1,50 €
              <img
                src="../src/assets/Toppings/verduras.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Ramen 2,50 €
              <img
                src="../src/assets/Toppings/ramen.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Wantang 2,50 €
              <img
                src="../src/assets/Toppings/wangtang.png"
                width="20"
                height="auto"
              ></img>
            </div>
            <div>
              Naruto 1,50 €
              <img
                src="../src/assets/Toppings/naruto.png"
                width="20"
                height="auto"
              ></img>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Topping;
