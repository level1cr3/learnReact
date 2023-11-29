function ListGroup() {
  const cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
          // warning is saying that each list-item should have key prop that uniquely identifies that item.
          // react needs this to keep track of our items. so later when we add or remove items dynamically.
          // react knows what part of the page should be updated.
          // here since each city is unique we can use city only. But in general when we get data from db.
          // each object has and Id property which we can use. like ex : city.Id
        ))}
      </ul>

      <ul>{myFunc(cities)}</ul>
    </>
  ); // parenthesis is required to break jsx into multiple line
  // class is reserved keyword in js and ts. that is why we use className
}

function myFunc(cites: string[]): JSX.Element[] {
  const output: JSX.Element[] = [];

  for (const city of cites) {
    output.push(<li key={city}>{city}</li>);
  }

  return output;
}

export default ListGroup;

// If we wanna add. h1 element on top of this ul list. we will get error 'JSX Expression must have one parent'.
// Because in react a component cannot return more then one element.
// so possible solutions are.
// 1. wrap everything inside a div. (ctrl + shift + p and search 'wrap with abbreviation')
// 2. use fragment to wrap everything. (if you don't wanna add 'div' just to make react happy.)
// 3. use this syntax <> </> to wrap everything. (this empty brackets are shorter syntax to use fragments)

// to render dynamic list. we cannot directly use for inside the. JSX it doesn't work like that.
