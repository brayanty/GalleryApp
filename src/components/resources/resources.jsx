import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

RenderCard.propTypes = {
  foto: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handlerClick: PropTypes.func.isRequired,
  handlerUserView: PropTypes.func.isRequired,
};

export function RenderCard({ foto, index, handlerClick, handlerUserView }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const getRowSpan = (index) => {
    return index % 2 === 0 ? "270px" : index % 3 === 0 ? "270px" : "330px";
  };

  return (
    <li
      className={`bg-slate-500/30 rounded-xl p-2 flex flex-col gap-2 items-center`}
    >
      <div className="w-full h-full relative" onClick={() => handlerClick(index)}>
        <figure
          className="cursor-pointer"
          style={{ height: getRowSpan(index), width: "100%" }}
        >
          {loading && (
            <div className="absolute p-4 inset-0 flex items-center justify-center">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          <img
            className="w-full h-full rounded-lg object-cover object-center transition-transform ease-in-out duration-300 hover:scale-105"
            src={foto.src}
            alt={foto.alt}
            onLoad={handleImageLoad}
            onError={() => setLoading(false)}
          />
        </figure>
      </div>
      <div className="self-start">
        <h5 className="text-textSubTitleLights dark:text-WitherDark font-primaryMedium text-lg max-md:text-xs">
          {foto.title}
        </h5>
      </div>
      <div className="self-start flex flex-col items-center justify-center">
        <div className="flex gap-1 justify-center items-center">
          <div className="p-4 bg-slate-300 rounded-full"></div>
          <header className="flex gap-1 justify-around dark:text-white">
            <h4
              onClick={() => {
                handlerUserView(foto.idUser);
              }}
              className="cursor-pointer hover:text-blue-300 font-primaryMedium text-sm max-md:text-xs"
            >
              Brayan Palacios
            </h4>
          </header>
        </div>
      </div>
    </li>
  );
}

export function RenderSearch() {
  return (
    <div className="w-full max-w-[400px] inline-block">
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
