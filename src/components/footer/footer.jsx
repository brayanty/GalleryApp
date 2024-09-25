// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

Footer.propTypes = {
  className: PropTypes.string.isRequireds,
};
function Footer({ className }) {
  return (
    <main className={className}>
      <div>Main</div>
    </main>
  );
}

export default Footer;
