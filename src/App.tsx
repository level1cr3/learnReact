import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button onClick={() => console.log("btn clicked")}>my Btn</Button>
    </>
  );
}

export default App;
