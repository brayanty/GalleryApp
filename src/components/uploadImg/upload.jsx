import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

UploadImagen.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModall: PropTypes.func.isRequired,
};
function UploadImagen({ visible, closeModall }) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // Generar una URL temporal para previsualizar la imagen
    const previewUrl = URL.createObjectURL(selectedFile);
    URL.revokeObjectURL(selectedFile);
    setImagePreview(previewUrl);
  };

  return (
    visible && (
      <div className="z-50 fixed top-0 right-0 left-0 bottom-0">
        <div className="bg-slate-400/40 dark:bg-slate-500/40 w-full h-full flex justify-center items-center">
          <div className="relative flex flex-col gap-2 justify-evenly items-center bg-slate-50 dark:bg-slate-900 h-[500px] w-[500px] rounded-md p-2">
            <button
              onClick={() => closeModall()}
              className="absolute top-2 right-3"
            >
              <FontAwesomeIcon
                className="text-black dark:text-WitherDark"
                icon={faClose}
                size="3x"
              />
            </button>
            {/* Mostrar la imagen cargada */}
            {imagePreview && (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ width: "300px", height: "auto" }}
                />
              </div>
            )}
            <div>
              <div className="flex items-center justify-center font-primaryMedium">
                <label
                  className="flex items-center justify-center w-[200px] cursor-pointer rounded-lg h-[60px] bg-green-700"
                  htmlFor="file-input"
                >
                  Subir Imagen
                  <input
                    className="hidden"
                    id="file-input"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default UploadImagen;
