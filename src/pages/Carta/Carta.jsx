// La galería, Como una ruta que contiene el enlace a todas las otras páginas.
import React from 'react'

function Carta() {
  return (
    <>
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