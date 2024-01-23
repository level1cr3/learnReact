import { useEffect, useRef, useState } from "react";
import ProductList from "./connect-backend/ProductList";

function App() {
  const [category, setCategory] = useState("");

  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnecting");

  useEffect(() => {
    document.title = "my app"; // doesn't need cleanup.

    // but if code needs cleanup like disconnecting from the server
    connect(); // think of connecting to chat server.

    // so function that we pass to effect hook can optionally return a function for cleanup
    return () => disconnect(); // we use code like this to run the cleanup code.

    // generally our cleanup function undo's whatever our effect was doing.
    // ex1 : if we are showing modal. our cleanup should hide the modal.
  });

  return (
    <>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
