import { useState } from "react";

// shape of the input to this component. we can use interface or type here.
// using an interface we can define shape or interface of an object.

// we use Props by convention.
type Props = {
  items: string[];
  heading: string;
  // after selecting the item. something should happen either some data gets filtered or we are redirected to some page.
  // we cannot write that logic directly into the ListGroup component. because then that component is no longer reuseable.
  // so we pass a function to this function component. which then notifies the parent of this component in our case.
  // that is app component.
  // so when an item is selected we should notify the app component that an item is selected.

  // remember the naming convention. we write on then type of event in our case that is 'select item'
  onSelectItem: (item: string) => void;
};

function ListGroup({ items, heading, onSelectItem }: Props) {
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

// to make this component reuseable. so we can show like list of cities, colors, animals etc..
// we props or property for that.
// props are the inputs to our components. similar to how we give argument to a function
