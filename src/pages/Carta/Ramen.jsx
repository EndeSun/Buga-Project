import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Comida from '../../components/Comida';

function Ramen() {
  const comidas = [
    {
      source: '../src/assets/Entrantes/Ebi furai.png',
      foodName: 'Ebi Furai',
      foodDescription: 'Gambas fritas al estilo japonés',
      foodPrice: '12.8',
      gluten: true,
      crustaceos: true,
      moluscos: true,
      pescado: true,
    },
    {
      source: '../src/assets/Entrantes/Edamame.png',
      foodName: 'Edamame',
      foodDescription: 'Algas en salsa Soja',
      foodPrice: '10.4',
      soja: true,
    },
    // Puedes agregar más comidas aquí en pares
  ];

  const comidasPares = [];
  for (let i = 0; i < comidas.length; i += 2) {
    if (i + 1 < comidas.length) {
      comidasPares.push([comidas[i], comidas[i + 1]]);
    } else {
      comidasPares.push([comidas[i], null]);
    }
  }

  return (
    <Carousel
      className="rounded-xl"
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      emulateTouch={true}
      swipeable={true}
      dynamicHeight={false}
      centerSlidePercentage={50}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} style={{ left: 15 }}>
            {"<"}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label} style={{ right: 15 }}>
            {">"}
          </button>
        )
      }
    >
      {comidasPares.map((par, index) => (
        <div key={index} className="flex justify-between">
          {par[0] && <Comida {...par[0]} />}
          {par[1] && <Comida {...par[1]} />}
        </div>
      ))}
    </Carousel>
  );
}

export default Ramen;
