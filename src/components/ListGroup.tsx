import { useState } from "react";

// shape of the input to this component. we can use interface or type here.
// using an interface we can define shape or interface of an object.

// we use Props by convention.
type Props = {
  items: string[];
  heading: string;
};

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
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

// to make this component reuseable. so we can show like list of cities, colors, animals etc..
// we props or property for that.
// props are the inputs to our components. similar to how we give argument to a function
