// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { SaveItem } from "../logic/handlerLocalStorage";
import useLoaderImage from "@components/hooks/useLoaderImage.jsx";
import searchUsers from "../logic/searchUsers";
import { Outlet, Link } from "react-router-dom";

RenderCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export function RenderCard({ item, index }) {
  const [loadingRender, loading, handleImageLoad] = useLoaderImage();

  const handlerViewImg = (item) => {
    window.scrollTo(0, 0);
    SaveItem("saveImg", item);
  };

  const getRowSpan = (index) => {
    return index % 2 === 0 ? "270px" : index % 5 === 0 ? "450px" : "300px";
  };

  return (
    <li
      className={`bg-slate-500/30 rounded-xl p-2 flex flex-col gap-2 items-center`}
    >
      <div className="w-full h-full relative">
        <figure
          className="cursor-pointer"
          style={{ height: getRowSpan(index), width: "100%" }}
        >
          {loading && loadingRender}
          <Link
            onClick={() => {
              handlerViewImg(item);
            }}
            to={`/viewimagen/${item.id}`}
          >
            <img
              className="w-full h-full rounded-lg object-cover object-center transition-transform ease-in-out duration-200 hover:scale-105"
              src={item.src}
              alt={item.alt}
              onLoad={() => handleImageLoad(false)}
              onError={() => handleImageLoad(true)}
            />
          </Link>
          <Outlet />
        </figure>
      </div>
      <div className="self-start">
        <h5 className="text-textSubTitleLights dark:text-WitherDark font-primaryMedium text-lg max-md:text-xs">
          {item.title}
        </h5>
      </div>
      {item.idUser ? <RenderUsers idUser={item.idUser} /> : ""}
    </li>
  );
}

RenderUsers.propTypes = {
  idUser: PropTypes.string.isRequired,
};

function RenderUsers({ idUser }) {
  const user = searchUsers(idUser);

  return (
    <div className="self-start flex flex-col items-center justify-center">
      <div className="flex gap-1 justify-center items-center">
        <div className="p-4 bg-slate-300 rounded-full"></div>
        <header className="flex gap-1 justify-around dark:text-white">
          <Link to={`/User/${user?.id || "anonimo"}`}>
            <h4 className="cursor-pointer hover:text-blue-300 font-primarybold text-xs max-md:text-xs">
              {user?.name || "Anonimo"}
            </h4>
          </Link>
          <Outlet />
        </header>
      </div>
    </div>
  );
}

export default RenderUsers;

// function RenderSearch() {
//   return (
//     <div className="w-full max-w-[400px] inline-block">
//       <form
//         method="get"
//         id="formSearch"
//         className="p-0 float-left clear-both w-full relative"
//       >
//         <fieldset className="float-left w-full">
//           <input
//             // ref={inputRef}
//             className="w-full rounded-full bg-white float-left p-2 text-lg text-[#555555] outline-none border border-white box-border h-[42px] indent-[10px]"
//             type="text"
//             name="text"
//             id="text"
//             placeholder="¿Qué deseas buscar?"
//           />
//           <button
//             className="absolute right-0 top-0 p-2  h-full text-center"
//             onClick={(e) => {
//               e.preventDefault();
//             }}
//             type="submit"
//           >
//             <FontAwesomeIcon
//               className="text-black"
//               icon={faMagnifyingGlass}
//               size="lg"
//             />
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }
