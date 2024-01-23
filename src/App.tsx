import { useEffect, useRef, useState } from "react";
import ProductList from "./connect-backend/ProductList";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // using fetch
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data: User[]) => setUsers(data));

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));

    //Promise : an object that holds the eventual result or failure of an asynchronous (long running) operation.
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
