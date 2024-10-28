import {
  faGear,
  faHome,
  faMoon,
  faSun,
  faUpload,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useMenu } from "./useCustom.js";
import { Outlet, Link } from "react-router-dom";

Navbar.propTypes = {
  handlerClickDark: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  LoginVisible: PropTypes.func.isRequired,
  uploadImgVisible: PropTypes.func.isRequired,
};

function Navbar({ handlerClickDark, theme, LoginVisible, uploadImgVisible }) {
  const [isMenuOpen, setIsMenuOpen, menuRef] = useMenu();
  const itemsNavbar = [
    {
      title: "Explorer",
      logo: faHome,
      href: "/",
      id: (Math.random() * 100).toString(36).slice(3),
    },
    {
      title: "About us",
      logo: faUsers,
      href: "about",
      id: (Math.random() * 100).toString(36).slice(3),
    },
  ];

  const menuVisible = () => {
    setIsMenuOpen((prenVent) => !prenVent);
  };

  return (
    <>
      <nav className="bg-slate-200 dark:bg-slate-900 h-[70px]">
        <div className="font-primarybold p-3 text-slate-800 dark:text-white flex flex-row justify-between items-center">
          <div>
            <h4 className="text-lg">Gallery-APP</h4>
          </div>
          <div
            ref={menuRef}
            className={`max-md:hidden md:z-50 transition-opacity duration-300 ease-in-out max-md:absolute max-md:py-5 max-md:pb-3 max-md:bg-slate-200/90 max-md:dark:bg-slate-900/70 backdrop-blur-sm top-[70px] right-0 left-0 max-md:flex-col flex flex-row gap-3`}
          >
            <ul className=" flex flex-row gap-4 justify-center items-center">
              {itemsNavbar.map((items) => {
                return (
                  <li
                    key={items.id}
                    className="after:block after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:transition-all after:hover:w-[100%]"
                  >
                    <FontAwesomeIcon icon={items.logo} size="1x" />
                    <Link to={items.href}>{items.title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="max-md:flex-row flex gap-2 justify-evenly items-center">
              <li>
                <button
                  className="w-10"
                  onClick={() => {
                    handlerClickDark();
                  }}
                >
                  {theme == "dark" ? (
                    <FontAwesomeIcon icon={faMoon} size="xl" />
                  ) : (
                    <FontAwesomeIcon icon={faSun} size="xl" />
                  )}
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={() => {
                    menuVisible();
                  }}
                  className="p-3 bg-slate-300/40 rounded-full"
                >
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </button>
                <div
                  className={`${
                    isMenuOpen ? "top-10 z-50 " : "-top-[1000px] "
                  } absolute md:right-10 transition-all ease-in-out duration-200 font-semibold bg-slate-500 backdrop-blur-sm w-[max-content] shadow-lg rounded-md p-2`}
                >
                  <ul className="flex flex-col ">
                    <li
                      onClick={() => {
                        LoginVisible();
                        menuVisible();
                      }}
                      className="text-base hover:bg-gray-200 rounded-md text-WitherDark hover:text-black cursor-pointer p-2"
                    >
                      <FontAwesomeIcon icon={faUser} /> Login/Register
                    </li>
                    <li className="text-base hover:bg-gray-200 rounded-md text-WitherDark hover:text-black cursor-pointer p-2">
                      <FontAwesomeIcon icon={faGear} /> Settings
                    </li>
                    <li
                      onClick={uploadImgVisible}
                      className="text-base hover:bg-gray-200 rounded-md text-WitherDark hover:text-black cursor-pointer p-2"
                    >
                      <button>
                        <FontAwesomeIcon icon={faUpload} /> Subir
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
