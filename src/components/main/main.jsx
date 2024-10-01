import fotos from "../../imgs";
import { useRef, useState } from "react";
import {
  RenderCard,
  RenderModalView,
  RenderSearch,
} from "./components/resources.jsx";

function Main() {
  const [imagenSelect, setImagenSelect] = useState(" ");
  const [openImagenSelect, setOpenImagenSelect] = useState(false);
  const refMain = useRef();

  const handlerClick = (index) => {
    const img = {
      title: fotos[index].title,
      src: fotos[index].src,
      alt: fotos[index].alt,
    };

    setImagenSelect(img);
    setOpenImagenSelect(true);
  };

  const handlerClose = () => {
    setOpenImagenSelect(false);
    setTimeout(() => {
      setImagenSelect(" ");
    }, 150);
  };

  return (
    <main className="container mx-auto flex flex-col gap-3">
      <div className="flex justify-center">
        {/* Search bar */}
        <RenderSearch />
      </div>
      <div className="flex flex-col gap-2" ref={refMain}>
        <div className="flex flex-row gap-2">
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
        <div className="grid grid-cols-1 grid-rows-4  md:grid-cols-[repeat(4,minmax(240px,1fr))] md:grid-rows-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
          {fotos.map((foto, index) => {
            return (
              <RenderCard
                key={foto.id}
                foto={foto}
                index={index}
                handlerClick={handlerClick}
              />
            );
          })}
        </div>
      </div>
      {
        <RenderModalView
          openImagenSelect={openImagenSelect}
          imagenSelect={imagenSelect}
          handlerClose={handlerClose}
        />
      }
    </main>
  );
}

export default Main;
