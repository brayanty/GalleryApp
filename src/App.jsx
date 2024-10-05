import "./App.css";
import Navbar from "./components/navbar/nav";
import ViewImagen from "./components/viewImagen/viewImagen";
import MainImgs from "./components/main/main";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import { useDarkLightMode } from "./components/logic/darkMode";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useDarkLightMode();
  const [imagenSelect, setimagenSelect] = useState(" ");
  const [visibleLogin, SetVisibleLogin] = useState(false);

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

  const handlerLogin = () => {
    SetVisibleLogin((prenVent) => !prenVent);
  };

  return (
    <>
      <div>
        <Navbar
          theme={theme}
          handlerClickDark={handlerClickDark}
          handlerLogin={handlerLogin}
        />
        <ViewImagen imagenSelect={imagenSelect} />
        <Login visible={visibleLogin} handlerLogin={handlerLogin} />
        <MainImgs
          handlerSelect={handlerImagenSelect}
          tags={imagenSelect.tags}
          items={"items"}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
