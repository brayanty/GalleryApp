import fotos from "../../imgs.js";
import { useEffect, useRef, useState } from "react";
import { RenderCard } from "../resources/resources.jsx";
import PropTypes from "prop-types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import "./mainImgs.css";

MainImgs.propTypes = {
  handlerSelect: PropTypes.func.isRequired,
  handlerUserView: PropTypes.func.isRequired,
};

function MainImgs({ handlerSelect, handlerUserView }) {
  const [indexTotal, setIndexCurrent] = useState(10);
  const refMain = useRef();
  const masonryRef = useRef();

  useEffect(() => {
    if (masonryRef.current) {
      masonryRef.current.layout();
    }
  }, [indexTotal]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       if (indexTotal >= fotos.length) {
  //         return;
  //       }
  //       setIndexCurrent((prev) => prev + fotos.length / 4);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [indexTotal, setIndexCurrent]);

  const handleScroll = () => {
    if (indexTotal < fotos.length) {
      setIndexCurrent((prev) => prev + 20);
    }
  };

  const handlerClick = (index) => {
    const img = {
      title: fotos[index].title,
      src: fotos[index].src,
      alt: fotos[index].alt,
      tags: fotos[index].tags,
    };

    handlerSelect(img);

    window.scrollTo({
      top: 80,
      left: 80,
      behavior: "smooth",
    });
  };

  return (
    <main className="container mx-auto max-w-[1440px] flex flex-col gap-3 p-2">
      <div className="flex flex-col gap-2" ref={refMain}>
        <InfiniteScroll
          dataLength={indexTotal}
          next={handleScroll}
          hasMore={indexTotal < fotos.length}
          loader={<h4>Loading...</h4>}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 640: 2, 900: 4, 1440: 5 }}
          >
            <Masonry columnsCount={7} gutter="10px" elementType={"ul"}>
              {fotos.slice(0, indexTotal).map((foto, i) => (
                <RenderCard
                  key={foto.id + i + foto.title}
                  foto={foto}
                  index={i}
                  handlerClick={handlerClick}
                  handlerUserView={handlerUserView}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </div>
    </main>
  );
}

export default MainImgs;
