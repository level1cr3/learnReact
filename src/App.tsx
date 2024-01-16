import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      {cart.items.map((item) => (
        <span>
          ID: {item.id},qty: {item.quantity},title: {item.title}
          <br />
        </span>
      ))}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
