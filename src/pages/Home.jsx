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
            <h2 className="text-white pt-40 text-[40px] font-medium">
              Disfruta de una experiencia inolvidable!
            </h2>
            <ul>
              <li>
                <Link className="no-underline border-[3px] backdrop-blur-sm rounded text-2xl text-slate-100 font-bold px-12 py-2 m-2 inline-block hover:bg-white hover:text-black hover:font-black" to="/Carta">Ver Carta</Link>
              </li>
              <li>
                <Link className="no-underline border-[3px] backdrop-blur-sm rounded text-2xl px-3 py-2 text-slate-100 inline-block hover:bg-white hover:text-black text-bold hover:font-black transition-colors" to="/SobreNosotros">Sobre Nosotros</Link>
              </li>
            </ul>
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
