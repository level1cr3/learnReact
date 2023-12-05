import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsCalendar2Fill } from "react-icons/bs";

function App() {
  const colors = ["blue", "red", "yellow"];
  return (
    <>
      <BsCalendar2Fill color="cyan" size={50} />
      <ListGroup
        items={colors}
        heading="colors"
        onSelectItem={() => console.log("clicked")}
      ></ListGroup>
    </>
  );
}

export default App;
