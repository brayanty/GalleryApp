import SelectImagen from "../components/selectImagen/selectImagen";
import { LoadItem } from "../components/logic/handlerLocalStorage";
import { useState } from "react";

function ViewImagen() {
  const { imagenSelect, setImagenSelect } = useState(
    LoadItem(location.pathname.toLowerCase().replace("/viewimagen/", ""))
  );

  return (
    <>
      <SelectImagen imagenSelect={imagenSelect} />
    </>
  );
}

export default ViewImagen;
