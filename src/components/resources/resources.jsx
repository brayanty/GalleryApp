import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

RenderCard.propTypes = {
  foto: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handlerClick: PropTypes.func.isRequired,
};

export function RenderCard({ foto, index, handlerClick }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const getRowSpan = (index) =>
    index % 2 === 0 ? "md:row-span-2 max-md:pb-4" : "md:row-span-4";

  return (
    <div
      className={`${getRowSpan(
        index
      )} max-md:w-full max-md:h-[350px] row-span-2 flex flex-col gap-3 items-center`}
    >
      <div className="relative w-full h-full">
        <figure
          onClick={() => handlerClick(index)}
          className="h-full w-full cursor-pointer"
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          <img
            className="w-full h-full rounded-lg object-cover object-right-top"
            src={foto.src}
            alt={foto.alt}
            onLoad={handleImageLoad}
            onError={() => setLoading(false)} // Maneja el error en caso de que la imagen no se cargue
          />
        </figure>
      </div>
      <div className="justify-center bottom-0 flex flex-col p-1 items-center">
        {/* Components users todavia no lo voy a arreglar */}
        <div className="w-full flex gap-3 items-center ">
          <div className="flex gap-1 justify-center items-center">
            <figure>
              <img
                className="rounded-full w-10"
                src="https://randomuser.me/api/portraits/thumb/men/31.jpg"
                alt="Usurio"
              />
            </figure>
            <header className="dark:text-white">
              <h4 className="font-primaryMedium text-sm">Brayan Palacios</h4>
              <div className="font-primaryRegular text-xs">Artistas</div>
            </header>
          </div>
          <div>
            <button className="font-primaryMedium p-1 rounded-md bg-slate-300 border border-gray-900">
              Seguir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RenderSearch() {
  return (
    <div className="w-full max-w-[453px] inline-block">
      <form
        method="get"
        id="formSearch"
        className="p-0 float-left clear-both w-full relative"
      >
        <fieldset className="float-left w-full">
          <input
            // ref={inputRef}
            className="w-full rounded-full bg-white float-left p-2 text-lg text-[#555555] outline-none border border-white box-border h-[42px] indent-[10px]"
            type="text"
            name="text"
            id="text"
            placeholder="¿Qué deseas buscar?"
          />
          <button
            className="absolute right-0 top-0 p-2  h-full text-center"
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
          >
            <FontAwesomeIcon
              className="text-black"
              icon={faMagnifyingGlass}
              size="lg"
            />
          </button>
        </fieldset>
      </form>
    </div>
  );
}
