import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [fullName, setFullName] = useState(""); // don't use state hook for storing fullName here because it is redundant
  // we can just use the local variable or event directly use these values.
  const fullName = `${firstName} ${lastName}`;

  // sometimes state variables are related in that case we should store them inside the object.
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    // we should avoid nesting our object. updating an object with below structure is difficult.
    // prefer flat structure.
    contact: {
      address: {
        street: "",
      },
    },
  });
  const [isLoading, setLoading] = useState(true);

  return <div>{fullName}</div>;
}

export default App;
