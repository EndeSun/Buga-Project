import React from 'react'

function BebidaComponent({source, nombreBebida}) {
  return (
    <>
      <div className="flex flex-col items-center mr-5 ml-5">
        <img src={source} alt={nombreBebida} className="max-w-full h-auto" />
        <p className="mt-2 text-amber-600 text-center text-xl font-bold m-2 drop-shadow-2xl sm:text-3xl">{nombreBebida}</p>
      </div>
    </>
  )
}

export default BebidaComponent