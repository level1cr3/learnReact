import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
    </div>
  );

  // we can use our component like regular html element
  // we should always close our react component. or we would get the compilation error.
  // we could use <Message /> or <Message></Message>
}

export default App;

// vite under the hood monitors our files for changes. whenever we make any changes it will automatically refresh our page.
// hmr : hot module replacement.
// in real world example a component can have behaviors