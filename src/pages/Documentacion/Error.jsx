import React from "react";
import {Link} from "react-router-dom"

function Error() {
  return (
    <section className="bg-whit">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Error 404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Algo falla !
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Lo sentimos, no podemos encontrar la página.{" "}
          </p>
          <Link
            to="/"
            className="inline-flex text-slate-900 bg-primary-600 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 no-underline border-2 border-slate-800 uppercase"
          >
            Volver a home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
