import { useState } from "react";
import PropTypes from "prop-types";

Tags.propTypes = {
  items: PropTypes.array,
  handlerTags: PropTypes.func,
};

function Tags({ items, handlerTags }) {
  const [tagsSelect, setTagsSelect] = useState("Explorar");

  if (!items) {
    return;
  }

  const handlerTagsSelect = (tag) => {
    setTagsSelect(tag);
    handlerTags(tag);
  };

  return (
    <div className="container mx-auto m-4">
      <nav className="flex gap-3">
        {items.length === 0 ? (
          <div>No tags available</div>
        ) : (
          items.map((tag) => (
            <div
              onClick={() => handlerTagsSelect(tag)}
              className={`${
                tagsSelect === tag
                  ? "border-b-4 border-Blueclaro"
                  : "border-b-4 border-slate-800 dark:border-white"
              } border-b-4 flex cursor-pointer transition-all text-black dark:text-white hover:text-Blue hover:dark:text-Blue font-primarybold`}
              key={tag}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </div>
          ))
        )}
      </nav>
    </div>
  );
}

export default Tags;
