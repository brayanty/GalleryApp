import { useState } from "react";

function useLoaderImage() {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = (value) => {
    setLoading(value);
  };

  const loadingRender = (
    <div className="absolute p-4 inset-0 flex items-center justify-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  return [loadingRender, loading, handleImageLoad];
}

export default useLoaderImage;
