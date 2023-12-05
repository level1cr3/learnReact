import ListGroup from "./components/ListGroup";

function App() {
  const colors = ["blue", "red", "yellow"];
  return (
    <>
      <ListGroup
        items={colors}
        heading="colors"
        onSelectItem={() => console.log("clicked")}
      ></ListGroup>
    </>
  );
}

export default App;
