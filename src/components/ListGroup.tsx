function ListGroup() {
  let cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  cities = [];

  // conditional rendering.
  // if (cities.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items found</p>
  //     </>
  //   );
  // with this implementation we are repeating the h1 element.

  //const message = cities.length === 0 ? <p>No items found</p> : null;

  // const getMessage = () => {
  //   return cities.length === 0 ? <p>No items found</p> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {
        //cities.length === 0 ? <p>No items found</p> : null
        // sometimes these logic can get complex and it can pollute our JSX markup. In that case we should.
        // extract the logic into variable or the function.
        // to render something dynamically.
        //message // using constant.
        //getMessage() // benefit of using function is that. Our function can have parameters. perhaps we can get different
        // messages based on different arguments.
      }
      {
        cities.length === 0 && <p>No items found</p>
        // if condition is true it will always return the second items. else it will return false. and false will not
        // render anything
      }
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
