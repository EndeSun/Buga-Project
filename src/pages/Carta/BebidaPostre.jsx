import React from 'react'
import BebidaComponent from '../../components/BebidaComponent'

function BebidaPostre() {
  return (
    <>
      <h1 className="text-center font-bold font-caprasimo text-2xl md:text-3xl lg:text-4xl text-amber-500 my-4">
        Bebidas
      </h1>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mx-12 sm:mx-14 md:mx-16">
        <BebidaComponent
          source="../src/assets/Bebidas/agua.webp"
          nombreBebida="Agua"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ambar.webp"
          nombreBebida="Ambar"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/ambarLimon.webp"
          nombreBebida="Ambar con Limón"
        />
        <BebidaComponent
          source="../src/assets/Bebidas/aquariusLimon.webp"
          nombreBebida="Aquarius Limón"
        />
        {/* Agrega más instancias de BebidaComponent según sea necesario */}
      </div>

      <h1 className="text-center font-bold font-caprasimo text-2xl text-amber-500 md:text-3xl lg:text-4xl my-4">
        Postres
      </h1>
    </>
  )
}

export default BebidaPostre