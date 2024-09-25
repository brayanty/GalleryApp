import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

function Navbar({ className }) {
  return (
    <nav className={className}>
      <div>
        <div>
          <h4>Gallery-APP</h4>
        </div>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>User</li>
        </ul>
        <div className="md-hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
