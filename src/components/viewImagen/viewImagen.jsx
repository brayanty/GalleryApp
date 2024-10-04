// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

ViewImagen.propTypes = {
  imagenSelect: PropTypes.string.isRequired,
};
function ViewImagen({ imagenSelect }) {
  const [like, setLike] = useState(false);

  const handlerClick = () => {
    setLike((prenVent) => !prenVent);
  };

  if (imagenSelect == " ") {
    return;
  }

  return (
    <div className="container  w-full mx-auto flex justify-center">
      <div className="p-4 m-4 flex gap-3 bg-transparent shadow-md shadow-black rounded-lg">
        <figure className="md:col-span-2 max-md:row-span-3 overflow-hidden ">
          <img
            className="w-full h-[70vh]  object-scale-down rounded-2xl"
            src={imagenSelect?.src}
            alt={imagenSelect?.alt}
          />
        </figure>
        <header className="flex justify-end flex-col">
          <div className="flex flex-row gap-3 ">
            <button
              className="cursor-pointer p-1 rounded-md"
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
            <button className="p-2 rounded-lg bg-green-600">Donwload</button>
          </div>
          <h3 className="font-primarybold text-2xl dark:text-white text-black">
            {imagenSelect?.title}
          </h3>
          <div className="flex gap-2">
            {["Waifus", "Venom", "loquesea"].map((item) => {
              return (
                <div
                  className="cursor-pointer transition-all dark:text-white font-primarybold p-1 "
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-row gap-1 justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-8 bg-slate-300 rounded-full"></div>
                <header className="dark:text-white">
                  <h4 className="font-primarybold">Brayan Palacios</h4>
                  <span>Artista</span>
                </header>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default ViewImagen;
