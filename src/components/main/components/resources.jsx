import {
  faClose,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

RenderModalView.propTypes = {
  openImagenSelect: PropTypes.bool.isRequired,
  imagenSelect: PropTypes.string.isRequired,
  handlerClose: PropTypes.func.isRequired,
};

export function RenderModalView({
  openImagenSelect,
  imagenSelect,
  handlerClose,
}) {
  const [like, setLike] = useState(false);

  const handlerClick = () => {
    setLike((prenVent) => !prenVent);
  };

  return (
    <div
      className={`${
        openImagenSelect ? "translate-x-0 " : "translate-x-full"
      } transition-transform duration-300 ease-in-out fixed top-0 bottom-0 right-0 left-0 `}
    >
      <div className="relative w-full h-full grid max-md:grid-rows-4 md:grid-cols-4 rounded-lg">
        <figure className="md:col-span-3 max-md:row-span-3 w-full h-full bg-slate-200 overflow-hidden ">
          <img
            className="w-full h-full object-scale-down"
            src={imagenSelect?.src}
            alt={imagenSelect?.alt}
          />
        </figure>
        <header className="relative border border-black p-2 gap-2 flex flex-col justify-around bg-slate-200">
          <h3 className="font-primarybold text-2xl text-black">
            {imagenSelect?.title}
          </h3>
          <div className="flex gap-2">
            {["Waifus", "Venom", "loquesea"].map((item) => {
              return (
                <div
                  className="cursor-pointer transition-all dark:text-white dark:hover:text-black font-primarybold hover:bg-slate-400 p-2 rounded-lg bg-neutral-500/30 backdrop-blur-sm"
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <button
            className="w-0 h-0"
            onClick={() => {
              handlerClose();
            }}
          >
            <FontAwesomeIcon
              className="absolute top-2 right-4 "
              icon={faClose}
              size="2x"
            />
          </button>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-row gap-1 justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-8 bg-slate-300 rounded-full"></div>
                <header>
                  <h4>Brayan Palacios</h4>
                  <span>Artista</span>
                </header>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <button
                  className="cursor-pointer p-1 bg-slate-400 rounded-md"
                  onClick={() => {
                    handlerClick();
                  }}
                >
                  {like ? (
                    <FontAwesomeIcon
                      style={{ color: "red" }}
                      icon={faHeart}
                      size="2x"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} size="2x" />
                  )}
                </button>
                <button className="p-2 rounded-lg bg-green-600">
                  Donwload
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

RenderCard.propTypes = {
  foto: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handlerClick: PropTypes.func.isRequired,
};

export function RenderCard({ foto, index, handlerClick }) {
  const [like, setLike] = useState(false);

  const handlerlikes = () => {
    setLike((prenVent) => !prenVent);
  };

  return (
    <div
      className={`${
        index % 2 === 0 ? "md:row-span-2" : "md:row-span-4"
      }  flex items-center justify-center relative`}
    >
      <figure
        onClick={() => {
          handlerClick(index);
        }}
        className="h-full w-full cursor-pointer"
      >
        <img
          className="w-full h-full object-cover object-right-top"
          src={foto.src}
          alt={foto.alt}
        />
      </figure>
      <div className="absolute flex flex-col opacity-0 hover:opacity-100  bg-slate-400/60 w-full justify-center items-center bottom-0">
        <header className="flex flex-col p-1 items-center">
          <h5 className="text-white">{foto.alt}</h5>
          <div className="flex gap-1 items-center">
            <div
              onClick={() => {
                handlerlikes();
              }}
            >
              {like ? (
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  icon={faHeart}
                  size="2x"
                />
              ) : (
                <FontAwesomeIcon icon={faHeart} size="2x" />
              )}
            </div>
            <button className="p-1 rounded-sm font-primarybold  bg-green-600">
              Donwload
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export function RenderSearch() {
  return (
    <form
      id="formSearch"
      className="flex flex-row justify-center gap-3 items-center px-3 py-3 w-[20rem] md:w-[30rem] border border-slate-950 dark:border-gray-300 bg-slate-100/45 dark:bg-slate-300 rounded-3xl"
    >
      <div className="w-full overflow-hidden max-h-[20px]">
        <label htmlFor="text"></label>
        <input
          // ref={inputRef}
          className="w-full font-primaryRegular text-black bg-transparent border-none outline-none outline-transparentd"
          type="search"
          name="search"
          id="search"
          placeholder="¿Qué deseas buscar?"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        type="submit"
      >
        <FontAwesomeIcon
          className="dark:text-white"
          icon={faMagnifyingGlass}
          size="lg"
        />
      </button>
    </form>
  );
}
