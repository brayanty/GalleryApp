import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

Profile.propTypes = {
  user: PropTypes.object,
};

function Profile({ user }) {
  const navegate = useNavigate();

  const handleBack = () => {
    navegate(-1);
  };
  if (user.result) {
    return (
      <>
        <div className="relative flex items-center justify-center p-2 bg-gray-100 dark:bg-slate-500/30 ">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-yellow-500 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
            </svg>
            <h1 className="mt-4 text-2xl dark:text-white font-semibold">
              Usuario no encontrado
            </h1>
            <p className="mt-2 text-gray-600 dark:text-slate-200">
              Lo sentimos, el usuario que buscas no existe en nuestra base de
              datos.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="relative flex flex-col gap-3 items-center h-[400px] bg-white/10 shadow-lg rounded-lg overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${user.bg})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-end bg-slate-100 h-[50%] w-full"
        aria-label="User background image"
      >
        <figure className="p-2 w-32 h-32 bg-white rounded-full shadow-lg overflow-hidden">
          <img
            className="w-full h-full rounded-full object-cover"
            src={user.profile}
            alt={user.alt}
          />
        </figure>
      </div>
      <div className="flex flex-col gap-3 p-4 w-[400px] bg-slate-200/90 rounded-lg shadow-md">
        <div className="flex flex-col justify-center items-center gap-2 text-black dark:text-white">
          <h4 className="font-primaryMedium text-2xl dark:text-black">
            {user.name}
          </h4>
          <div className="font-primaryRegular text-base text-gray-700">
            {user.subTitle}
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          {/* boton para retroceder */}
          <div
            onClick={() => {
              handleBack();
            }}
            className="h-12 p-2 border-none font-primaryMedium text-sm text-center bg-slate-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-slate-500"
          >
            <FontAwesomeIcon
              className="h-8 w-8 dark:text-white"
              icon={faArrowLeft}
              aria-hidden="true"
            />
          </div>
          <button
            className="h-12 p-2 text-sm border-none rounded-lg bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] flex items-center justify-center gap-2 text-[#796703] font-primaryMedium transition-all duration-[1s] shadow-[5px_5px_10px_rgba(0,0,0,0.144)] bg-[length:200%_200%] hover:scale-[0.95] hover:bg-right hover:animate-[gradient_3s_ease_infinite]"
            type="button"
            aria-label="Premium button"
          >
            {" "}
            <svg
              viewBox="0 0 576 512"
              height="1em"
              className="fill-[rgb(121,103,3)]"
              aria-hidden="true"
            >
              <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"></path>
            </svg>
            <span>Premiun</span>
          </button>
          <button
            className="h-12 p-2 border-none font-primaryMedium text-sm text-center text-slate-200 bg-slate-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-slate-500"
            type="button"
            aria-label={`Followers count: ${user.followers}`}
          >
            <span>Followers &nbsp; {user.followers}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
