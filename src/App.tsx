import { useState } from "react";
import MyMsg from "./MyMsg";
import Button from "./components/Button";

function App() {
  // updating nested object
  const [customer, setCustomer] = useState({
    name: "jhon",
    address: {
      city: "san francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });

    // the object that we pass in setCustomer should be completely independent of customer object.
    // (....) the spread operator in js is swallow. which means when we use it to copy customer object. It is going to
    // return existing address object in the memory. so that means if we create 2 customer objects this way. both of
    // them are going to reference same address object in the memory. This is not what we want.
    // When updating state in react applications we should make sure that our new state object is completely independent
    // of the existing state object. They don't share anything.

    // to solve the problem. we set address to new object. as done above.

    // when working with state object. we should avoid deeply nested structure. Because deeper this structure gets
    // the more complicated our update logic will be. So prefer flat structure over deeply nested object.
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
