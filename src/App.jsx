import "./App.css";
import Navbar from "./components/navbar/nav";
import NavbarMobile from "./components/navbar/navMobile";
import ViewImagen from "./components/viewImagen/viewImagen";
import MainImgs from "./components/MainImgs/MainImgs";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import UploadImagen from "./components/uploadImg/upload";
import Tags from "./components/tags/tags";
// import Galery from "./components/miniGalery/galery";
import Profile from "./components/profile/profile";
import CardMoreUsers from "./components/cardMoreUsers/cardMoreUsers.jsx";

import { useDarkLightMode } from "./components/logic/darkMode";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useDarkLightMode();
  const [imagenSelect, setimagenSelect] = useState(" ");
  const [visibleLogin, SetVisibleLogin] = useState(false);
  const [mobileOn, setMobileOn] = useState(true);
  const [isUploadImg, setUploadImg] = useState(false);
  const [profileView, setProfileView] = useState(" ");

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

  const LoginVisible = () => {
    SetVisibleLogin((prenVent) => !prenVent);
  };

  const selectLogin = () => {
    SetVisibleLogin((prenVent) => !prenVent);
  };

  const handlerUserView = (IdUser) => {
    setProfileView(IdUser);
  };

  const uploadImgVisible = () => {
    setUploadImg((prenVent) => !prenVent);
  };

  return (
    <>
      {mobileOn ? (
        <>
          <NavbarMobile LoginVisible={LoginVisible} />
        </>
      ) : (
        <Navbar
          theme={theme}
          handlerClickDark={handlerClickDark}
          LoginVisible={LoginVisible}
          selectLogin={selectLogin}
          uploadImgVisible={uploadImgVisible}
        />
      )}
      <Profile profileView={profileView} />
      <ViewImagen imagenSelect={imagenSelect} />
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className="col-span-3 w-full">
          <Tags />
          <MainImgs
            handlerSelect={handlerImagenSelect}
            handlerUserView={handlerUserView}
            items={"items"}
          />
        </div>
        <div className="w-[300px] h-[400px]">
          <CardMoreUsers />
        </div>
      </div>

      <Footer />
      <UploadImagen visible={isUploadImg} closeModall={uploadImgVisible} />
      <Login visible={visibleLogin} LoginVisible={LoginVisible} />
    </>
  );
}

export default App;
