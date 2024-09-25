// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

Main.propTypes = {
  className: PropTypes.string.isRequireds,
};
function Main({ className }) {
  return (
    <main className={className}>
      <div>Main</div>
    </main>
  );
}

export default Main;
