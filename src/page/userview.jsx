import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useHandlerTags from "../components/tags/useHandlerTags";
import searchUsers from "../components/logic/searchUsers";
import MainImgs from "../components/mainImgs/mainImgs";
import Profile from "../components/profile/profile";
import Footer from "../components/footer/footer";
import Tags from "../components/tags/tags";

import imgs from "../imgs";

function UserView() {
  const location = useLocation();

  // Función para obtener el id de la imagen desde la URL
  const getIdUser = (path) => path.toLowerCase().replace("/user/", "");

  // Estado inicial calculado basado en la URL
  const [userSelect, setUserSelect] = useState(
    searchUsers(getIdUser(location.pathname))
  );

  const [items, handlerTags] = useHandlerTags(imgs);

  // Efecto para actualizar `userView` cuando cambia la URL
  useEffect(() => {
    setUserSelect(searchUsers(getIdUser(location.pathname)));
  }, [location]);

  return (
    <>
      <Profile user={userSelect} />
      <Tags items={userSelect.tags} handlerTags={handlerTags} />
      <MainImgs items={items} />
      <Footer />
    </>
  );
}

export default UserView;
