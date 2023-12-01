import { useState } from "react";

function ListGroup() {
  let cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  // We want to highlight the selected item.
  // To do that we need a variable to keep track of index of selected item.
  //let selectedIndex = -1; // -1 no item is selected. 0 first item is selected and so on...

  // using this variable we are not able to change the state. why is that ?
  // because this variable is local to this function component. So react is not aware of it.
  // To solve this problem. We should tell react this component is going to have data or state that might change overtime.
  // to do that we have to use built-in function in react called 'useSate'

  //this function is called a 'Hook'. A hook is function that allows us to tap into built-in features in react.
  // this is called a 'state hook'. Using state hook we can tell react that this component can have data or state
  // that will change over time.

  const [selectedIndex, setSelectedIndex] = useState(-1); //initialize our variable.
  // we are destructuring the array above. this is the convention followed in react.
  // useState returns array of 2 elements.
  // 1 element = variable
  // 2 element = updater function
  // using updater function we can update the variable. and at that point react would be notified.
  // so it knows that state of our component is changed. and then it will re-render our component. which cause dom to be
  // updated under the hood. we never touch the dom directly.
  // in react we think in terms of component that have state. When the state of component changes. React will update
  // the dom to match the new component state.

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;


