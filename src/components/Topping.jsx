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
        className="me-2 fixed ml-4 bottom-10"
      >
        EXTRA TOPPINGS
      </Button>

      <Offcanvas
        scroll="true"   
        placement="bottom"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header className="flex bg-black text-white font-bold justify-center" closeButton closeVariant="white">
            <p>Añade tu extra topping favorito</p>
        </Offcanvas.Header>

        <Offcanvas.Body className="bg-black text-white mt-2">
          <Carousel fade controls="true" className="text-center">
            <Carousel.Item>
              {/* <ExampleCarouselImage text="First slide" /> */}
              Primer Slide
            </Carousel.Item>
                
            <Carousel.Item>
                Segundo slide
            </Carousel.Item>
                
            <Carousel.Item>
                Tercer slide
            </Carousel.Item>

          </Carousel>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Topping;
