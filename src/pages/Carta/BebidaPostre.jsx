import React from 'react'
import BebidaComponent from '../../components/BebidaComponent'

function BebidaPostre() {
  return (
    <>
      <h1 className="text-center font-bold font-caprasimo text-4xl text-amber-500 my-6">
        Bebidas
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <BebidaComponent
          source="../src/assets/Entrantes/Karaage/Karaage 2.png"
          nombreBebida="Coca-Cola"
        />
        <BebidaComponent
          source="../src/assets/Entrantes/Karaage/Okonomiyaki karaage 2.png"
          nombreBebida="Pepsi"
        />
        <BebidaComponent
          source="../src/assets/Entrantes/Gyoza/Gyoza 2.png"
          nombreBebida="Agua"
        />
        <BebidaComponent
          source="../src/assets/Entrantes/Gyoza/Okonomiyaki Gyoza 2.png"
          nombreBebida="Red Label"
        />
        {/* Agrega más instancias de BebidaComponent según sea necesario */}
      </div>

      <h1 className="text-center font-bold font-caprasimo text-4xl text-amber-500 my-6">
        Postres
      </h1>
    </>
  )
}

export default BebidaPostre