import fotos from "../../imgs.js";
import { useEffect, useRef, useState } from "react";
import { RenderCard } from "./resources.jsx";
import PropTypes from "prop-types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import "./mainImgs.css";

MainImgs.propTypes = {
  items: PropTypes.array.isRequired,
};

function MainImgs({ items }) {
  const [indexTotal, setIndexCurrent] = useState(10);
  const refMain = useRef();
  const masonryRef = useRef();

  useEffect(() => {
    if (masonryRef.current) {
      masonryRef.current.layout();
    }
  }, [indexTotal]);

  const handleScroll = () => {
    if (indexTotal < fotos.length) {
      setIndexCurrent((prev) => prev + 20);
    }
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
              {items.slice(0, indexTotal).map((item, i) => (
                <RenderCard
                  key={item.id + i + item.title}
                  item={item}
                  index={i}
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
