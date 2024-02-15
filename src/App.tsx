import { useEffect, useRef, useState } from "react";
import ProductList from "./connect-backend/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

type User = {
  id: number;
  name: string;
};

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
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
