import "./App.css";
import Navbar from "./components/navbar/nav";
import NavbarMobile from "./components/navbar/navMobile";
import ViewImagen from "./components/viewImagen/viewImagen";
import MainImgs from "./components/MainImgs/MainImgs.jsx";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Tags from "./components/tags/tags.jsx";
import { useDarkLightMode } from "./components/logic/darkMode";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useDarkLightMode();
  const [imagenSelect, setimagenSelect] = useState(" ");
  const [visibleLogin, SetVisibleLogin] = useState(false);
  const [mobileOn, setMobileOn] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setMobileOn(false);
    }
  }, []);

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
      {mobileOn ? (
        <>
          <NavbarMobile
            theme={theme}
            handlerClickDark={handlerClickDark}
            handlerLogin={handlerLogin}
          />
        </>
      ) : (
        <Navbar
          theme={theme}
          handlerClickDark={handlerClickDark}
          handlerLogin={handlerLogin}
        />
      )}
      <ViewImagen imagenSelect={imagenSelect} />
      <Tags />
      <Login visible={visibleLogin} handlerLogin={handlerLogin} />
      <MainImgs handlerSelect={handlerImagenSelect} items={"items"} />
      <Footer />
    </>
  );
}

export default App;
