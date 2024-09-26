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

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  handlerClickDark: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

function Navbar({ className, handlerClickDark, theme }) {
  return (
    <nav className={className}>
      <div className="font-primarybold p-3 text-slate-800 dark:text-white flex flex-row justify-between items-center">
        <div>
          <h4 className="text-lg">Gallery-APP</h4>
        </div>
        <ul className="flex flex-row gap-4 justify-center items-center">
          <li>
            <FontAwesomeIcon icon={faHome} size="xl" />
            <a href="#home"> Home</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} size="xl" />
            <a href="#about"> About us</a>{" "}
          </li>
          <li>
            <button
              className="w-10 p-1"
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
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
