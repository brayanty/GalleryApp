import fotos from "../../imgs";
import { useRef, useState } from "react";
import { RenderCard } from "../resources/resources.jsx";
import { useEffect } from "react";
import PropTypes from "prop-types";

MainImgs.propTypes = {
  handlerSelect: PropTypes.func.isRequired,
  tags: PropTypes.array,
};

function MainImgs({ handlerSelect, tags }) {
  const [indexTotal, setIndexCurrent] = useState(10);
  const [tagsSelect, setTagsSelect] = useState(null);
  const refMain = useRef();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      // Altura total del documento
      let scrollHeight = document.documentElement.scrollHeight;
      // Altura visible de la ventana
      let clientHeight = document.documentElement.clientHeight;
      // Posición actual del scroll
      let scrollTop = document.documentElement.scrollTop;

      if (scrollTop + clientHeight >= scrollHeight) {
        setIndexCurrent((p) => {
          return p + 7;
        });
      }
    });
  }, []);

  const handlerClick = (index) => {
    const img = {
      title: fotos[index].title,
      src: fotos[index].src,
      alt: fotos[index].alt,
      tags: fotos[index].tags,
    };

    handlerSelect(img);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlerTagsSelect = (e) => {
    setTagsSelect(e.target.innerText);
  };

  return (
    <main className="flex flex-col gap-3 p-2">
      <div className="flex flex-col gap-2" ref={refMain}>
        <div className="flex flex-row gap-4">
          {tags?.map((item) => {
            return (
              <div
                onClick={(e) => {
                  handlerTagsSelect(e);
                }}
                className={`${
                  tagsSelect == item ? "text-Blue dark:text-Blueclaro" : ""
                } cursor-pointer transition-all dark:text-white dark:hover:text-Blue font-primarybold`}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="p-1 grid grid-cols-[repeat(2,minmax(240px,1fr))] grid-rows-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-[repeat(5,minmax(240px,1fr))] md:grid-rows-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
          {fotos.slice(0, indexTotal).map((foto, index) => (
            <RenderCard
              foto={foto}
              index={index}
              key={index}
              handlerClick={handlerClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainImgs;
