// 
import React from 'react'

function SobreNosotros() {
  const imagenDeFondo = '../../src/assets/Ramen/MalaChickenRamen.png';
  return (
    <>
      <div className='h-full w-full bg-white'>
        <div className= "bg-slate-400 bg-cover bg-center h-80" style={{ backgroundImage: `url(${imagenDeFondo})` }}>
          <h1 className='mb-4 text-3xl font-extrabold text-center pt-20 text-white dark:text-white md:text-5xl lg:text-6xl'>Sobre Nosotros</h1>
        </div>
        <div className='h-80 pt-10'>
          <h2 className='mb-4 text-2xl font-extrabold text-center text-black dark:text-white md:text-5xl lg:text-6xl'>Buga Ramen</h2>
          <p className='text-black mr-5 ml-5'>En nuestro restaurante Ramen Yokohama queremos agradar a nuestros clientes, ofreciendo la más y mejor valorada cocina del planeta: la Comida japonesa. Nuestro éxito reside en la excelente combinación de sabores y texturas: verduras, especies, pescados, mariscos, carnes básicas, arroz, elaborados sin abandonar nuestras tradiciones. Ven a conocer nuestra carta, en la que encontraras opciones para todas las dietas, tanto si eres vegano, como vegetariano o carnívoro incondicional, además tendrás la posibilidad de degustar un menú diario.</p>
          <p className='mt-5 font-bold text-center'>Te Esperamos!!!</p>
        </div>
        <div className='grid grid-cols-2 gap-4 pt-20 pb-10'>
          <div className='space-y-4'>
            <img src='../../src/assets/Ramen/MalaChickenRamen.png' alt='Imagen 1' className='w-full h-auto bg-black' />
            <img src='../../src/assets/Ramen/MalaChickenRamen.png' alt='Imagen 2' className='w-full h-auto bg-black' />
          </div>
          <img src='../../src/assets/Ramen/MalaChickenRamen.png' alt='Imagen 3' className='w-full h-full bg-black' />
        </div>
        <div>
          <h2 className='mb-4 text-2xl font-extrabold text-center text-black dark:text-white md:text-5xl lg:text-6xl'>Estamos aquí 📍</h2>
          <div className="w-full p-4">
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11925.715115230732!2d-0.8997949268310532!3d41.646476974801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5915b26ce0717f%3A0xfa6f8c695b94b014!2sBuga%20Ramen!5e0!3m2!1ses!2ses!4v1692283256326!5m2!1ses!2ses"
      title="Google Map"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-80"
    ></iframe>
  </div>
</div>
        </div>
      </div>
    </>
  )
}

export default SobreNosotros