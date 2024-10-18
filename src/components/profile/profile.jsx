import PropTypes from "prop-types";
import "./profile.css";
import { useEffect, useState } from "react";
import userBaseDeDatos from "../../Users";

Profile.propTypes = {
  profileView: PropTypes.bool.isRequired,
};

const searchUsers = (idUser) => {
  return userBaseDeDatos.find((item) => item.id == idUser);
};

function Profile({ profileView }) {
  const [user, setUser] = useState(" ");

  useEffect(() => {
    if (profileView != " ") {
      const newUser = searchUsers(profileView);
      setUser(newUser);
    }
  }, [profileView]);

  return (
    profileView !== " " && (
      <div className="relative flex flex-col items-center h-[400px] bg-white/20">
        <div
          style={{
            backgroundImage: `url(${user?.bg})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
          className="flex justify-center items-end bg-slate-100 h-[50%] w-full"
        >
          <figure className="p-2 w-32 h-32 bg-white rounded-full overflow-hidden">
            <img
              className="w-full h-full rounded-full"
              src={user.profile}
              alt=""
            />
          </figure>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center items-center m-2 gap-2 text-black dark:text-white ">
            <h4 className="font-primaryMedium text-xl">{user.name}</h4>
            <div className="font-primaryRegular text-base">{user.subTitle}</div>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              className="h-12 p-2 text-sm border-none rounded-lg bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] flex items-center justify-center gap-2 text-[#796703] font-primaryMedium transition-all duration-[1s] shadow-[5px_5px_10px_rgba(0,0,0,0.144)] bg-[length:200%_200%] hover:scale-[0.95] hover:bg-right hover:animate-[gradient_3s_ease_infinite]"
              type="button"
            >
              {" "}
              <svg
                viewBox="0 0 576 512"
                height="1em"
                className="fill-[rgb(121,103,3)]"
              >
                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"></path>
              </svg>
              <span>Premiun</span>
            </button>
            <button
              className="btn-Followers h-12 p-2 border-none font-primaryMedium text-sm text-center text-slate-200 shadow-[5px_5px_10px_rgba(0,0,0,0.144)] rounded-lg"
              type="button"
            >
              <span>Followers &nbsp; {user.followers}</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
