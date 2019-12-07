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
import { useRef, useState } from "react";

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  handlerClickDark: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

function Navbar({ className, handlerClickDark, theme }) {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);
  const itemsNavbar = [
    { title: "Home", logo: faHome, href: "#home", id: "dGhG43GDAF" },
    { title: "About us", logo: faUsers, href: "#about", id: "dGgrpóekgw4" },
  ];

  const handlerClickNav = () => {
    setNavOpen((prenVent) => !prenVent);
  };

  return (
    <nav ref={navRef} className={className}>
      <div className="font-primarybold p-3 text-slate-800 dark:text-white flex flex-row justify-between items-center">
        <div>
          <h4 className="text-lg">Gallery-APP</h4>
        </div>
        <div
          className={`${
            navOpen == true
              ? "max-md:opacity-100"
              : "max-md:opacity-0 max-md:-z-10"
          } transition-opacity duration-300 ease-in-out max-md:absolute max-md:py-5 max-md:pb-3 max-md:bg-slate-200 max-md:dark:bg-slate-900 top-[4em] right-0 left-0 max-md:flex-col flex flex-row gap-3`}
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
            <li className="">
              <a className="p-3 bg-slate-300/40 rounded-full" href="#user">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </a>
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
