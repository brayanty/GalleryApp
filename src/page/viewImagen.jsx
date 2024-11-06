import { LoadItem } from "../components/logic/handlerLocalStorage";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useHandlerTags from "../components/tags/useHandlerTags";
import SelectImagen from "../components/selectImagen/selectImagen";
import MainImgs from "../components/mainImgs/mainImgs";
import Footer from "../components/footer/footer";
import Tags from "../components/tags/tags";

import imgs from "../imgs";

function ViewImagen() {
  const location = useLocation();

  // Función para obtener el id de la imagen desde la URL
  const getImagenIdFromPath = (path) =>
    path.toLowerCase().replace("/viewimagen/", "");

  // Estado inicial calculado basado en la URL
  const [imagenSelect, setImagenSelect] = useState(
    LoadItem(getImagenIdFromPath(location.pathname))
  );

  // Efecto para actualizar `imagenSelect` cuando cambia la URL
  useEffect(() => {
    setImagenSelect(LoadItem(getImagenIdFromPath(location.pathname)));
  }, [location]);

  const [items, handlerTags] = useHandlerTags(imgs);
  const tags = ["Explorar", "anime", "arte", "naturaleza"];

  return (
    <>
      <SelectImagen imagenSelect={imagenSelect} />
      <Tags items={tags} handlerTags={handlerTags} />
      <MainImgs items={items} />
      <Footer />
    </>
  );
}

export default ViewImagen;
