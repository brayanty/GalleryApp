import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

Login.propTypes = {
  visible: PropTypes.bool.isRequired,
  handlerLogin: PropTypes.func.isRequired,
};
function Login({ visible, handlerLogin }) {
  const formRef = useRef(null);
  const [valideForm, setValideForm] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    const validateEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    const validatePasswork = /[a-zA-Z0-9_.+-]/;

    const loginUser = {
      email: formRef.current["email"].value,
      passwork: formRef.current["passwork"].value,
    };

    if (
      validateEmail.test(loginUser.email) &&
      validatePasswork.test(loginUser.passwork)
    ) {
      setValideForm(false);
    } else {
      console.log("No es valido");
      setValideForm("border-Alert ");
      return;
    }
  };

  return (
    visible && (
      <div className="z-50 absolute top-0 right-0 left-0 bottom-0 ">
        <div className="bg-slate-400/40 dark:bg-slate-500/40 w-full h-full flex justify-center items-center">
          <div className="relative flex flex-col gap-4 justify-evenly items-center bg-slate-50 dark:bg-slate-900 h-[500px] w-[500px] rounded-md p-5">
            <button
              onClick={() => handlerLogin()}
              className="absolute top-2 right-3"
            >
              <FontAwesomeIcon
                className="text-black dark:text-WitherDark"
                icon={faClose}
                size="3x"
              />
            </button>
            <div className="flex flex-row gap-3">
              <FontAwesomeIcon
                className="text-black dark:text-WitherDark"
                icon={faUser}
                size="2x"
              />
              <h4 className="text-black dark:text-WitherDark text-4xl font-primarybold">
                Login
              </h4>
            </div>
            <form
              ref={formRef}
              className="flex justify-center items-center"
              action=""
              method="post"
            >
              <fieldset className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-3">
                  <label
                    className="dark:text-WitherDark flex flex-col gap-2 font-primaryMedium"
                    htmlFor="email"
                  >
                    Correo Electronico
                    <input
                      className={`${valideForm} rounded-md border-2 outline-none p-2 bg-slate-300 dark:bg-GrayClaroDark/30 `}
                      type="email"
                      id="email"
                      placeholder="Mariaperez@email.com"
                      required
                    />
                  </label>
                  <label
                    className="text-black dark:text-WitherDark flex flex-col gap-2 font-primaryMedium"
                    htmlFor="passwork"
                  >
                    Contraseña
                    <input
                      className={`${valideForm} rounded-md border-2 outline-none p-2 bg-slate-300 dark:bg-GrayClaroDark/30 `}
                      type="password"
                      id="passwork"
                      placeholder="Contraseña"
                      required
                    />
                  </label>
                </div>

                <div className="font-primaryRegular text-xs hover:text-Blueclaro dark:hover:text-Blueclaro text-black dark:text-WitherDark cursor-pointer ">
                  ¿Olvide mi contraseña?
                </div>
                <button
                  onClick={(e) => {
                    validateForm(e);
                  }}
                  className="p-3 pr-10 pl-10 rounded-md bg-Blue font-primaryMedium text-WitherDark"
                  type="submit"
                >
                  Entrar
                </button>
              </fieldset>
            </form>
            <div className="flex flex-row gap-3 text-black dark:text-WitherDark">
              <button className="hover:text-Blueclaro">Registrar</button>
              <a className="hover:text-Blueclaro" href="#Policy">
                Terminos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Login;
