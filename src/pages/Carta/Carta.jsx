// La galería, Como una ruta que contiene el enlace a todas las otras páginas.
import React from 'react'
import './Carta.css'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

function Carta() {
  return (
    <>
      <div className= 'grid grid-cols-1 text-center sm:grid-cols-6 '>
        {/* ENTRANTES */}
        <section className='carta-section bg-slate-200 w-100 h-100 border border-white-500 text-white sm:col-span-2 sm:order-1'>
            <img src="../../src/assets/Entrantes/Chicken Katsu.png" className='w-full carta-img'/>
            <div className='carta-overlay'>
              <Link to='/Entrantes' className='carta-link-overlay inline-block bg-transparent text-black py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out'>
                ENTRANTES
              </Link>
            </div>
          </section>
        {/* RAMEN */}
        <section className='carta-section pt-3  bg-slate-200 w-100 h-100 border border-white-500 text-white sm:col-span-3'>
            <img src="../../src/assets/Ramen/MalaChickenRamen.png" className='w-full carta-img'/>
            <div className='carta-overlay'>
              <Link to='/Ramen' className='carta-link-overlay  inline-block bg-transparent text-black py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out'>
                RAMEN
              </Link>
            </div>
          </section>
          {/* COMBOS */}
          <section className='carta-section  bg-slate-200 w-100 h-100 border border-white-500 text-white sm:col-span-3'>
            <img src="../../src/assets/Combos/ComboGyoza.png" className='w-full carta-img'/>
            <div className='carta-overlay'>
              <Link to='/Combos' className='carta-link-overlay inline-block bg-transparent text-black py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out'>
                COMBOS
              </Link>
            </div>
          </section>
          {/* DON STYLE */}
          <section className='carta-section bg-slate-200 w-100 h-100 border border-white-500 text-white sm:col-span-2 sm:order-2'>
            <img src="../../src/assets/Don/Chicken Don.png" className='w-full carta-img'/>
            <div className='carta-overlay'>
              <Link to='/Don' className='carta-link-overlay inline-block bg-transparent text-black py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out'>
                DON STYLE
              </Link>
            </div>
          </section>
          {/* POSTRES Y BEBIDAS PROXIMAMENTE */}
          <section className='carta-section bg-slate-200 w-100 h-100 border border-white-500 text-white sm:col-span-2 sm:order-3'>
            <img src="../../src/assets/Ramen/MalaChickenRamen.png" className='w-full carta-img'/>
            <div className='carta-overlay'>
              <Link to='/Ramen' className='carta-link-overlay inline-block bg-transparent text-black py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out'>
                POSTRES
              </Link>
            </div>
          </section>
      </div>
    </>
  )
}

export default Carta