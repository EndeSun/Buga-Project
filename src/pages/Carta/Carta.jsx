// La galería, Como una ruta que contiene el enlace a todas las otras páginas.
import React from 'react'

function Carta() {
  return (
    <>

    <div className='grid grid-cols-2'>
      {/* section main header footer nav article...  super importante, los contenedores a disponer tienen que estar en un contenedor padre*/}
      <section className="bg-slate-800 w-18 h-18 m-4 text-white ">
        <ul className='flex justify-around pt-2'>
          <li>1.1</li>
          <li>1.2</li>
          <li>1.3</li>
        </ul>
      </section>
      <section className="bg-slate-800 w-18 h-18 m-4 text-white">2</section>
    </div>

    <div className='grid grid-cols-3'>
      <section className="bg-slate-800 w-18 h-18 m-4 text-white col-span-2 col-start-2">3</section>
      <section className="bg-slate-800 w-18 h-18 m-4 text-white">4</section>
      <section className="bg-slate-800 w-18 h-18 m-4 text-white">5</section>
    </div>

      <div className='grid grid-cols-2 text-center'>
        <section className='bg-slate-800 w-auto h-auto border border-white-500 text-white relative'>
            Ramen
        </section>

        <section className='bg-slate-800 w-auto h-auto border border-white-500 text-white relative'>
            Combos
        </section>
      </div>


      <div className='grid grid-cols-3 pt-10 text-center'>
        <section className='bg-slate-800 w-100 h-16 border border-white-500 text-white'>Entrantes</section>
        <section className='bg-slate-800 w-100 h-16 border border-white-500 text-white'>Don Style</section>
        <section className='bg-slate-800 w-100 h-16 border border-white-500 text-white'>Postres</section>
      </div>
    </>
  )
}

export default Carta