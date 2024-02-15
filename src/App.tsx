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
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
    //   .then((res) => setUsers(res.data))
    //   .catch((err: Error | AxiosError) => {
    //     if (axios.isAxiosError(err)) setError(err.message);
    //     else console.error(err.message);
    //   });
    //Promise : an object that holds the eventual result or failure of an asynchronous (long running) operation.

    // get -> await Promise -> res/error
    // we created fetUsers. because react doesn't allow us to pass async function in effect hook.
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();

    // using js fetch.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => console.log(data[0].name, data[0].id))
      .catch((err: AxiosError) => setError(err.message));
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
