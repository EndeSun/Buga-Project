// 
import React from 'react'
import { motion } from 'framer-motion';


function SobreNosotros() {
  const imagenDeFondo = '../../src/assets/sobreNosotros.jpg';
  // Definicion de la Animacion del Titulo
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Retardo antes de la animación
        duration: 0.4, // Duración de la animación
        ease: 'easeOut', // Tipo de interpolación
      },
    },
  };

  return (
    <>
      <div className='h-full w-full bg-white font-razha'>
        {/* Seccion del Titulo con la imagen de fondo */}
        <div
            className="bg-slate-400 bg-cover bg-center w-screen h-80 relative flex justify-center items-center"
            style={{ backgroundImage: `url(${imagenDeFondo})` }}
          >
          <motion.h1
              className='mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl '
              variants={titleVariants}
              initial='hidden'
              animate='visible'
          >
              Sobre Nosotros
          </motion.h1>
        </div>

        {/* Seccion de la Descripcion del restaurante */}
        <div className='h-auto mt-3'>
          <h2 className='mb-4 text-2xl font-extrabold text-center text-black md:text-5xl lg:text-6xl'>Buga Ramen</h2>

          <p className='text-black md:text-3xl mr-5 ml-5'>¡Bienvenido a Buga Ramen, donde la auténtica cocina japonesa cobra vida! Nuestros platos se destacan por la perfecta combinación de sabores y texturas, con ingredientes frescos como verduras, especias, pescados, mariscos y carnes de alta calidad que respetan nuestras tradiciones culinarias japonesas.</p>
          <p className='text-black md:text-3xl mr-5 ml-5'>En nuestra variada carta, satisfacemos todos los gustos, desde opciones veganas y vegetarianas hasta las delicias más carnívoras. Además, ofrecemos un emocionante menú diario. Ven y descubre la esencia de la cocina japonesa en Buga Ramen, donde te esperamos para compartir esta experiencia culinaria única contigo.</p>
          <p className='mt-3 mb-3 md:text-3xl font-bold text-center'>Te Esperamos!!!</p>
        </div>

        {/* Seccion con el collage de imagenes de comida */}
        <div className='grid md:grid-cols-2 gap-1 mx-5 pt-3 [&>img]:rounded-xl [&>img]:shadow-xl'>
            <img src='../../src/assets/sobreNosotros/sobre1.jpg' alt='Imagen 1' className='w-full h-full  bg-black' />
            <img src='../../src/assets/sobreNosotros/sobre2.jpg' alt='Imagen 3' className='w-full h-full  md:col-start-2 md:row-span-2 bg-black' />
            <img src='../../src/assets/carta/fotoCombo.jpg' alt='Imagen 2' className='w-full h-full  bg-black' />
        </div>

        {/* Seccion con el mapa de la ubicacion  */}
        <div className='mb-1  mt-4 w-full p-4 aspect-w-16 aspect-h-9'> 
          <h2 className='text-2xl font-extrabold text-center text-black dark:text-white md:text-5xl lg:text-6xl'>Estamos aquí 📍</h2>
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
    </>
  )
}

export default SobreNosotros