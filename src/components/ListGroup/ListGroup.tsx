import { useState } from "react";
import style from "./ListGroup.module.css";

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul
        className={[style.listGroup, style.container].join(" ")}
        style={{ backgroundColor: "rebeccapurple" }}
      >
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
