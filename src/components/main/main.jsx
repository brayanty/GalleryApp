import PropTypes from "prop-types";
import fotos from "../../imgs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

Main.propTypes = {
  className: PropTypes.string.isRequired,
};
function Main({ className }) {
  const [imagenSelect, setImagenSelect] = useState(null);
  const [openImagenSelect, setOpenImagenSelect] = useState(null);

  const handlerClick = (e) => {
    setOpenImagenSelect(true);
    setImagenSelect({
      src: e.target.currentSrc,
    });
    if (e.target.currentSrc == "") {
      return;
    }
  };

  const handlerClose = () => {
    setOpenImagenSelect(false);
  };
  return (
    <main className={className}>
      <div className="grid container mx-auto  md:grid-cols-[repeat(3,minmax(300px,1fr))] grid-rows-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {fotos.map((foto, index) => {
          return (
            <div
              className={`${
                index % 2 === 0 ? "md:row-span-2" : "md:row-span-3"
              } flex items-center justify-center relative`}
              key={foto.id}
            >
              <figure
                onClick={(e) => {
                  handlerClick(e);
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
                    <div>
                      <FontAwesomeIcon icon={faCode} size="2x" />
                    </div>
                    <button className="p-1 rounded-sm font-primarybold  bg-green-600">
                      Donwload
                    </button>
                  </div>
                </header>
              </div>
            </div>
          );
        })}
      </div>
      {openImagenSelect && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
          className={`${
            openImagenSelect ? "opacity-100" : "opacity-0"
          } transition-all  w-full h-full  flex flex-col justify-center items-center bg-slate-500/70 `}
        >
          <div className="relative w-[75%] h-[90vh] flex gap-1 flex-col bg-slate-100 border-2 border-gray-800 rounded-lg  p-5 pr-6">
            <button
              className="w-0 h-0"
              onClick={() => {
                handlerClose();
              }}
            >
              <FontAwesomeIcon
                className="absolute top-2 right-2 "
                icon={faClose}
                size="2x"
              />
            </button>
            <figure className="p-4 w-full h-full overflow-hidden ">
              <img
                className="w-full h-full object-cover object-top max-md:object-fill"
                src={imagenSelect.src}
                alt={imagenSelect.alt}
              />
            </figure>
            <header className="flex justify-between">
              <h3 className="font-primaryMedium text-2xl text-black">
                {imagenSelect.alt}
              </h3>
              <button className="p-2 bg-green-600">Donwload</button>
            </header>
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
