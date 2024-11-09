import BaseDeDatos from "../../imgs";

const searchImagen = (idImagem) => {
  if (!BaseDeDatos) return -1;

  const imagen = BaseDeDatos.find(
    (item) => item.id.toLowerCase() == idImagem.toLowerCase()
  );
  return imagen ? imagen : { result: "No found" };
};

export default searchImagen;
