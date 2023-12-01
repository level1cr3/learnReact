import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <ListGroup />
      <ListGroup />
    </>
  );

  // we can use our component like regular html element
  // we should always close our react component. or we would get the compilation error.
  // each component is going to have it's own state. each <ListGroup /> is going to have it's own state.
  // they will be independent of each other.
}

export default App;

// vite under the hood monitors our files for changes. whenever we make any changes it will automatically refresh our page.
// hmr : hot module replacement.
