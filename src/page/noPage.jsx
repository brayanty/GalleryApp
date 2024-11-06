function NoPage() {
  return (
    <>
      <div className="h-[500px] flex items-center justify-center p-2 bg-gray-100 dark:bg-slate-500/30 ">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-yellow-500 mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
          </svg>
          <h1 className="mt-4 text-2xl dark:text-white font-semibold">
            Pagina no encontrada
          </h1>
          <p className="mt-2 text-gray-600 dark:text-slate-200">
            Lo sentimos, la pagina que buscas no existe en nuestra base de
            datos.
          </p>
        </div>
      </div>
    </>
  );
}

export default NoPage;
