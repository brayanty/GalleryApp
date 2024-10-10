import {
  faHome,
  faMagnifyingGlass,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

NavbarMobile.propTypes = {
  handlerClickDark: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  handlerLogin: PropTypes.func.isRequired,
};

function NavbarMobile() {
  return (
    <nav className="md:hidden h-12 z-40 fixed right-0 left-0 bottom-0 bg-slate-200 dark:bg-slate-900">
      <ul className="h-full w-full text-black dark:text-white flex flex-row gap-4 justify-around items-center">
        <li className="after:block after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:transition-all after:hover:w-[100%]">
          <FontAwesomeIcon icon={faHome} size="xl" />
        </li>
        <li className="after:block after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:transition-all after:hover:w-[100%]">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </li>
        <li className="after:block after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:transition-all after:hover:w-[100%]">
          <FontAwesomeIcon icon={faMessage} size="xl" />
        </li>
        <li className="after:block after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:transition-all after:hover:w-[100%]">
          <FontAwesomeIcon icon={faUser} size="xl" />
        </li>
      </ul>
    </nav>
  );
}

export default NavbarMobile;
