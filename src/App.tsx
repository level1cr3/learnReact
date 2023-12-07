import { useState } from "react";
import Button from "./components/Button";

function App() {
  // react will store value somewhere in memory most likely like this
  //[false,true] . so next time react re-renders our component. it is going to look at this array.
  // grab first value and store it inside the 'isVisible' array.
  // So react relies on the order of these elements. So it can map these values properly to local variable
  // in this function.
  const [isVisible, setVisibility] = useState(false); // we are using state hook to declare
  const [isApproved, setApproved] = useState(true); //and initialize two boolean variables.

  // these names that we have here just local identifier in this function. react is not aware of them

  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    //setName("gayle");

    count++;
    console.log(isVisible);
  }; // react will apply all the updates at once. and then will render our component with updated state.

  return (
    <>
      <Button onClick={handleClick}>Show</Button>
    </>
  );
}

export default App;
