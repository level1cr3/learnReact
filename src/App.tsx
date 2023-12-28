import { useState } from "react";
import MyMsg from "./MyMsg";
import Button from "./components/Button";
import produce from "immer";

function App() {
  // updating array of objects.
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", isFixed: false },
    { id: 2, title: "bug 2", isFixed: false },
  ]);

  const handleClick = () => {
    // setBugs(
    //   bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
    // ); // updating without immer.

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);
        if (bug) bug.isFixed = true;
      })
    );

    // draft is a proxy object that records the changes we are going to apply to the bugs array.
    // imagine draft is copy of bugs array. so we are free to mutate just like regular js object.
    // behind the scene immer keeps track of those changes. then it will create copy of the bugs array with those
    // changes.

    // updating array and object without mutation can get complex and repetitive. so we will update using immer library.
    // which takes care of the mutations.
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.isFixed ? "Fixed" : "New"}
        </p>
      ))}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
