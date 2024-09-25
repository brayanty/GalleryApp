// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

Hero.propTypes = {
  className: PropTypes.string.isRequireds,
};
function Hero({ className }) {
  return (
    <main className={className}>
      <div>Hero</div>
    </main>
  );
}

export default Hero;
