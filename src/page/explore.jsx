import Footer from "../components/footer/footer";
import MainImgs from "../components/mainImgs/mainImgs";
import Tags from "../components/tags/tags";
import useHandlerTags from "../components/tags/useHandlerTags";

import imgs from "../imgs";

function Explorer() {
  const [items, handlerTags] = useHandlerTags(imgs);

  const tags = ["Explorar", "anime", "arte", "naturaleza"];

  return (
    <>
      <Tags items={tags} handlerTags={handlerTags} />
      <MainImgs items={items} />
      <Footer />
    </>
  );
}

export default Explorer;
