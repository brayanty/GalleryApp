import Navbar from "../components/navbar/nav";
import NavbarMobile from "../components/navbar/navMobile";
import Login from "../components/login/login";
import UploadImagen from "../components/uploadImg/upload";
import { useDarkLightMode } from "../components/logic/darkMode";
import { useState } from "react";

function Layout() {
  const [theme, setTheme] = useDarkLightMode();
  const [visibleLogin, SetVisibleLogin] = useState(false);
  const [isUploadImg, setUploadImg] = useState(false);

  const LoginVisible = () => {
    SetVisibleLogin((prenVent) => !prenVent);
  };

  const selectLogin = () => {
    SetVisibleLogin((prenVent) => !prenVent);
  };

  const uploadImgVisible = () => {
    setUploadImg((prenVent) => !prenVent);
  };

  const handlerClickDark = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div>
        <div className="md:hidden">
          <NavbarMobile LoginVisible={LoginVisible} />
        </div>
        <div>
          <Navbar
            theme={theme}
            handlerClickDark={handlerClickDark}
            LoginVisible={LoginVisible}
            selectLogin={selectLogin}
            uploadImgVisible={uploadImgVisible}
          />
        </div>
      </div>
      <UploadImagen visible={isUploadImg} closeModall={uploadImgVisible} />
      <Login visible={visibleLogin} LoginVisible={LoginVisible} />
    </>
  );
}

export default Layout;
