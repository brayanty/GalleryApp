import {
  faBars,
  faHome,
  faMoon,
  faSun,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { RenderSearch } from "../resources/resources";
import { useMenu } from "./useCustom.js";

Navbar.propTypes = {
  handlerClickDark: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  handlerLogin: PropTypes.func.isRequired,
};

function Navbar({ handlerClickDark, theme, handlerLogin }) {
  const [isMenuOpen, setIsMenuOpen, menuRef] = useMenu();
  const [navOpen, setNavOpen] = useState(false);
  const itemsNavbar = [
    {
      title: "Home",
      logo: faHome,
      href: "#home",
      id: (Math.random() * 100).toString(36).slice(3),
    },
    {
      title: "About us",
      logo: faUsers,
      href: "#about",
      id: (Math.random() * 100).toString(36).slice(3),
    },
  ];

  const menuVisible = () => {
    setIsMenuOpen((prenVent) => !prenVent);
  };
  const handlerClickNav = () => {
    setNavOpen((prenVent) => !prenVent);
  };

  return (
    <nav className="bg-slate-200 dark:bg-slate-900">
      <div className="font-primarybold p-3 text-slate-800 dark:text-white flex flex-row justify-between items-center">
        <div>
          <h4 className="text-lg">Gallery-APP</h4>
        </div>
        <RenderSearch />
        <div
          ref={menuRef}
          className={`${
            navOpen == true
              ? "max-md:opacity-100 max-md:z-50"
              : "max-md:opacity-0 max-md:-z-10"
          } md:z-50 transition-opacity duration-300 ease-in-out max-md:absolute max-md:py-5 max-md:pb-3 max-md:bg-slate-200/90 max-md:dark:bg-slate-900/70 backdrop-blur-sm top-[70px] right-0 left-0 max-md:flex-col flex flex-row gap-3`}
        >
          <ul className="max-md:flex-col flex flex-row gap-4 justify-center items-center">
            {itemsNavbar.map((items) => {
              return (
                <li
                  key={items.id}
                  className="after:block after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:transition-all after:hover:w-[100%]"
                >
                  <FontAwesomeIcon icon={items.logo} size="1x" />
                  <a href={items.href}> {items.title}</a>
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
                } absolute md:right-10 transition-all ease-in-out duration-200 font-semibold bg-slate-500 backdrop-blur-sm w-32 shadow-lg rounded-md p-2`}
              >
                <ul className=" flex flex-col ">
                  <li
                    onClick={() => {
                      handlerLogin();
                      menuVisible();
                    }}
                    className="text-xl hover:bg-gray-200 rounded-md text-WitherDark hover:text-black cursor-pointer p-2"
                  >
                    <FontAwesomeIcon icon={faUser} size="1x" /> Login
                  </li>
                  <li className="text-xl hover:bg-gray-200 rounded-md text-WitherDark hover:text-black cursor-pointer p-2">
                    Settings
                  </li>
                  <li className="text-xl hover:bg-gray-200 rounded-md text-WitherDark hover:text-black cursor-pointer p-2">
                    Subir
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            handlerClickNav();
          }}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
