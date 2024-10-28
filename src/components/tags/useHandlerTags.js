import { useState } from "react";

const useTagHandler = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const handlerTags = (tag) => {
    if (tag.includes("Explorar")) {
      setItems(initialItems);
      return;
    }

    const filteredItems = initialItems.filter((item) =>
      item.tags.includes(tag)
    );
    setItems(filteredItems);
  };

  return [items, handlerTags];
};

export default useTagHandler;
