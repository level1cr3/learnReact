import { useState } from "react";
import MyMsg from "./MyMsg";
import Button from "./components/Button";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    //drink.price = 6; // setting like this won't re-render the component.
    // we should treat this drink object as immutable. similar to how we treat props as immutable.

    // what we need to do is pass the new drink object with updated value that you want.
    const newDrink = { ...drink, price: drink.price + 1 };
    setDrink(newDrink);
  };
  return (
    <div>
      {drink.price}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
