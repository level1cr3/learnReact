function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  ); // parenthesis is required to break jsx into multiple line
  // class is reserved keyword in js and ts. that is why we use className
}

export default ListGroup;

// If we wanna add. h1 element on top of this ul list. we will get error 'JSX Expression must have one parent'.
// Because in react a component cannot return more then one element.
// so possible solutions are.
// 1. wrap everything inside a div. (ctrl + shift + p and search 'wrap with abbreviation')
// 2. use fragment to wrap everything. (if you don't wanna add 'div' just to make react happy.)
// 3. use this syntax <> </> to wrap everything. (this empty brackets are shorter syntax to use fragments)
