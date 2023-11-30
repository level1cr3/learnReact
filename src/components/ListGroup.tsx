import { MouseEvent } from "react";

function ListGroup() {
  let cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  // by convention we write handle in front of event handling functions.
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className="list-group-item"
            key={city}
            onClick={
              handleClick // we are passing reference to function instead of calling it. It will get called in runtime.

              //(event) => console.log(event);
              // event : is 'SyntheticBaseEvent' this is built-in class in react. Because different browsers have different
              // implementation of event object. So to make it cross-browser react team created this class.
              // It is a wrapper around native browser event object.

              // here we can pass small arrowFunc. again if it gets big or complex it is better to move it on
              // separate function.
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
