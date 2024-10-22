import {
  faHome,
  faMagnifyingGlass,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

NavbarMobile.propTypes = {
  LoginVisible: PropTypes.func.isRequired,
};

function NavbarMobile({ LoginVisible }) {
  const items = [
    { logo: faHome, alt: "home", id: (Math.random() * 1000).toString(36) },
    {
      logo: faMagnifyingGlass,
      alt: "search",
      id: (Math.random() * 100).toString(36),
    },
    {
      logo: faMessage,
      alt: "Message",
      id: (Math.random() * 100).toString(36),
    },
    {
      logo: faUser,
      alt: "Profile",
      id: (Math.random() * 100).toString(36),
      onClick: LoginVisible,
    },
  ];
  return (
    <nav className="h-12 z-40 fixed right-0 left-0 bottom-0 bg-slate-200 dark:bg-slate-900">
      <ul className="h-full w-full text-black dark:text-white flex flex-row gap-4 justify-around items-center">
        {items.map((item) => (
          <li className="" key={item.id}>
            <button onClick={item?.onClick} alt={item.alt}>
              {<FontAwesomeIcon icon={item.logo} size="2x" />}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarMobile;
