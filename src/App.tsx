import { useState } from "react";
import MyMsg from "./MyMsg";
import Button from "./components/Button";

function App() {
  // updating array of objects.
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", isFixed: false },
    { id: 2, title: "bug 2", isFixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
    );

    // so what happened was we had array with two object.
    // on click event we update one of the object with brand new object.
    // and other object is same that we had in original array
    //with this we are telling react that first object in this array has been updated and react will do necessary
    // work to update the dom to match the component state.

    // Note : we don't need to create brand new copy of every bug object in the array.
    // only the object that is supposed to be modified
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
