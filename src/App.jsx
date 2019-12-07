import "./App.css";
import Navbar from "./components/navbar/nav";
import ViewImagen from "./components/viewImagen/viewImagen";
import MainImgs from "./components/main/main";
import Footer from "./components/footer/footer";
import { useDarkLightMode } from "./components/logic/darkMode";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useDarkLightMode();
  const [imagenSelect, setimagenSelect] = useState(" ");
  const handlerClickDark = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handlerImagenSelect = (img) => {
    setimagenSelect(img);
  };

  return (
    <>
      <Navbar
        className="relative bg-slate-200 dark:bg-slate-900 "
        theme={theme}
        handlerClickDark={handlerClickDark}
      />
      <ViewImagen imagenSelect={imagenSelect} />
      <MainImgs
        handlerSelect={handlerImagenSelect}
        tags={imagenSelect.tags}
        items={"items"}
      />
      <Footer />
    </>
  );
}

export default App;
