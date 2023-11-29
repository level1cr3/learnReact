import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup />
    </div>
  );

  // we can use our component like regular html element
  // we should always close our react component. or we would get the compilation error.
}

export default App;

// vite under the hood monitors our files for changes. whenever we make any changes it will automatically refresh our page.
// hmr : hot module replacement.
