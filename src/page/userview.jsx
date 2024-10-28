import useHandlerTags from "../components/tags/useHandlerTags";
import searchUsers from "../components/logic/searchUsers";
import MainImgs from "../components/mainImgs/mainImgs";
import Profile from "../components/profile/profile";
import Footer from "../components/footer/footer";
import Tags from "../components/tags/tags";

import imgs from "../imgs";

function UserView() {
  const [items, handlerTags] = useHandlerTags(imgs);

  const user = searchUsers(
    window.location.pathname.toLowerCase().replace("/user/", "")
  );
  return (
    <>
      <Profile user={user} />
      <Tags items={user.tags} handlerTags={handlerTags} />
      <MainImgs items={items} />
      <Footer />
    </>
  );
}

export default UserView;
