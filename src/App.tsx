import { useState } from "react";
import MyMsg from "./MyMsg";
import Button from "./components/Button";

function App() {
  const handleClick = () => {};

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
