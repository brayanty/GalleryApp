import {
  faArrowLeft,
  faBookmark,
  faDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

ViewImagen.propTypes = {
  imagenSelect: PropTypes.object,
};

function ViewImagen({ imagenSelect }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  if (imagenSelect == " ") {
    return;
  }

  const handlerLike = () => {
    if (likeCount >= 10) {
      return;
    }
    if (likeCount == 7) {
      setTimeout(() => {
        setLikeCount(0);
      }, 10000);
    }

    setLike((prenVent) => !prenVent);
    setLikeCount((countLikes) => (countLikes = countLikes + 1));
  };

  const handlerFavorite = () => {
    if (favoriteCount >= 10) {
      return;
    }
    if (favoriteCount == 7) {
      setTimeout(() => {
        setFavoriteCount(0);
      }, 10000);
    }
    setFavorite((prenVent) => !prenVent);
    setFavoriteCount((countFavorite) => (countFavorite = countFavorite + 1));
  };

  return (
    <div
      id="viewImagen"
      className="relative container mx-auto flex justify-center"
    >
      <div
        onClick={() => {
          window.history.back();
        }}
        className="absolute left-6 top-3 p-2 rounded-full hover:bg-slate-700/50 transition duration-200"
      >
        <FontAwesomeIcon className="h-8 w-8" icon={faArrowLeft} />
      </div>
      <div className="min-w-[70vw] p-5 pl-10 pr-10 m-2 flex flex-col gap-3 bg-transparent md:shadow-md md:shadow-black rounded-lg">
        <figure className="max-md:h-full h-[70vh] w-auto md:col-span-2 max-md:row-span-3">
          <img
            className="w-full h-full object-scale-down max-md:object-cover rounded-3xl overflow-hidden"
            src={imagenSelect?.src}
            alt={imagenSelect?.alt}
          />
        </figure>
        <header className="flex justify-between flex-col gap-3">
          <div className="flex justify-between gap-3 pr-2 pl-2s">
            <h3 className="font-primarybold text-2xl w-60 text-wrap dark:text-white text-black">
              {imagenSelect?.title}
            </h3>
            <div className="flex flex-row gap-4">
              <button
                className="cursor-pointer p-1 rounded-md"
                onClick={() => {
                  handlerLike();
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
              <button
                className="cursor-pointer p-1 rounded-md"
                type="button"
                onClick={() => {
                  handlerFavorite();
                }}
              >
                <FontAwesomeIcon
                  className={` ${
                    favorite
                      ? "text-Blueclaro"
                      : "text-black dark:text-WitherDark"
                  }`}
                  icon={faBookmark}
                  size="2x"
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="text-green-600 dark:text-green-500"
                  icon={faDownload}
                  size="2x"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-row gap-1 justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-4 bg-slate-300 rounded-full"></div>
                <header className="dark:text-white">
                  <h4 className="font-primarybold text-xs">Brayan Palacios</h4>
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
