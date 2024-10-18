// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./galery.css";

Galery.propTypes = {
  className: PropTypes.string.isRequired,
};

// Mini galeria de imagenes creada a base de un tutorial de midudev
function Galery() {
  return (
    <section className="miniGalery container mx-auto p-2 m-2">
      <img
        src="http://localhost:5173/src/img/460145958_976053084534952_628303302477674893_n.jpg"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1728314167652-dc3c8848dd80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1728314167652-dc3c8848dd80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1728314167652-dc3c8848dd80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1728314167652-dc3c8848dd80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </section>
  );
}

export default Galery;
