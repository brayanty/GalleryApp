// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};
function Footer({ className }) {
  return (
    <main className={className}>
      <div>footer</div>
    </main>
  );
}

export default Footer;
