import ListGroup from "./components/ListGroup";
import "./App.css";

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
