import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>my children</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </>
  );
}

export default App;
