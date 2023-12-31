import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";


function Home() {
  return (
    <>
      <section className="bg-slate-900 h-screen w-screen text-center overflow-hidden relative">
        <div className="z-20 relative h-full">
          <header>
            <section className="pt-40 font-sans font-medium uppercase">
              <p className="sm:text-6xl text-4xl text-neutral-100">Disfruta de</p>
              <p className="text-3xl sm:text-5xl text-neutral-200"> una experiencia inolvidable!</p>
            </section>
            <ul>
              <li>
                <Link className="no-underline border-[3px] backdrop-blur-sm rounded text-2xl text-slate-100 font-sans font-bold px-12 py-2 m-2 inline-block hover:bg-white hover:text-black hover:font-black" to="/Carta">Ver Carta</Link>
              </li>
              <li>
                <Link className="no-underline border-[3px] backdrop-blur-sm rounded text-2xl px-3 py-2 text-slate-100 inline-block hover:bg-white hover:text-black font-sans font-bold hover:font-black transition-colors" to="/SobreNosotros">Sobre Nosotros</Link>
              </li>
            </ul>
            <section className="pt-40 font-bold font-sans text-4xl text-slate-200 uppercase ">
              <p>Os esperamos</p> 
              <p>con los brazos abiertos !!!</p>
              </section>
          </header>
        </div>

        {/* Div que contiene al vídeo */}
        <div className="absolute top-0 bottom-0 h-full w-full">
          <video
            className="object-center object-cover h-full w-full"
            autoPlay
            muted
            loop
          >
            <source src="../src/assets/Buga Portada.webm" />
          </video>
        </div>
      </section>
    </>
  );
}

export default Home;
