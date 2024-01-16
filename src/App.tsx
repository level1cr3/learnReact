import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [pizza, setPizza] = useState({
    name: "jhon",
    toppings: ["mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };

  return (
    <div>
      {pizza.toppings.join(" ")}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
