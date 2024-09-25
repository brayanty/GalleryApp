// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

News.propTypes = {
  className: PropTypes.string.isRequired,
};
function News({ className }) {
  return <aside className={className}>news</aside>;
}

export default News;
