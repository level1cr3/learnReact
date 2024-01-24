import { useEffect, useRef, useState } from "react";
import ProductList from "./connect-backend/ProductList";
import axios, { AxiosError } from "axios";

type User = {
  id: number;
  name: string;
};

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // using fetch
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data: User[]) => setUsers(data));

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) setError(err.message);
        else console.error(err.message);
      });

    //Promise : an object that holds the eventual result or failure of an asynchronous (long running) operation.
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
