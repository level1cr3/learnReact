import { useState } from "react";
import MyMsg from "./MyMsg";
import Button from "./components/Button";

function App() {
  // updating arrays.
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //tags.push('exciting'); we can't do this because it modifies the original array.
    // same concept of objects apply to array. if we have array we should not mutate or change it.
    // instead we should give react a brand new array.

    // add
    setTags([...tags, "exciting"]);

    // remove
    setTags(tags.filter((tag) => tag !== "happy")); // that will get us all the tags except the happy tag. we will filter it.

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
    // another way is to do this is copy all items in new array and then modify that array. map i think is better
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
