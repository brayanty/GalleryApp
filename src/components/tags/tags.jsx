import { useState } from "react";

const tags = ["Inicio", "Explorar"];

function Tags() {
  const [tagsSelect, setTagsSelect] = useState(null);
  if (!tags) {
    return;
  }
  const handlerTagsSelect = (e) => {
    setTagsSelect(e.target.innerText);
  };
  return (
    <div className="container mx-auto p-3 mb-2">
      <nav className="flex gap-3">
        {tags.map((tag) => (
          <div
            onClick={handlerTagsSelect}
            className={`${
              tagsSelect === tag ? "border-b-4 border-Blueclaro" : ""
            } flex cursor-pointer transition-all text-black dark:text-white hover:text-Blue hover:dark:text-Blue font-primarybold`}
            key={tag}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Tags;
