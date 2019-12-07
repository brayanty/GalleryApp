// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

ViewImagen.propTypes = {
  imagenSelect: PropTypes.object.isRequired,
};
function ViewImagen({ imagenSelect }) {
  const [like, setLike] = useState(false);

  const handlerClickLike = () => {
    setLike((prenVent) => !prenVent);
  };

  if (imagenSelect == " ") {
    return;
  }

  return (
    <div className="container w-full h-full mx-auto flex justify-center">
      <div className="p-4 m-4 flex gap-3 bg-transparent shadow-md shadow-black rounded-lg">
        <figure className="w-full h-[70vh] md:col-span-2 max-md:row-span-3">
          <img
            className="w-full h-full  rounded-3xl overflow-hidden"
            src={imagenSelect?.src}
            alt={imagenSelect?.alt}
          />
        </figure>
        <header className="flex justify-end flex-col gap-2">
          <div className="flex flex-row gap-3 ">
            <button
              className="cursor-pointer p-1 rounded-md"
              onClick={() => {
                handlerClickLike();
              }}
            >
              <FontAwesomeIcon
                className={`${
                  like
                    ? "text-red-500"
                    : "text-textSubTitleLight dark:text-WitherDark"
                }`}
                icon={faHeart}
                size="2x"
              />
            </button>
            <button type="button">
              <FontAwesomeIcon
                className={`${
                  like ? "text-Blueclaro" : "text-black dark:text-WitherDark"
                }`}
                icon={faBookmark}
                size="2x"
              />
            </button>
            <button className="pr-2 pl-2  rounded-lg text-WitherDark bg-green-600 ">
              <FontAwesomeIcon icon={faDownload} size="2x" />
            </button>
          </div>
          <h3 className="font-primarybold text-2xl w-60 text-wrap dark:text-white text-black">
            {imagenSelect?.title}
          </h3>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-row gap-1 justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-8 bg-slate-300 rounded-full"></div>
                <header className="dark:text-white">
                  <h4 className="font-primarybold">Brayan Palacios</h4>
                  <span className="text-textSubTitleLight dark:text-WitherDark">
                    Artista
                  </span>
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
