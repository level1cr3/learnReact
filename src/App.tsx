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

  // effect cleanup : sometimes we need to return a cleanup function from our effect.
  // In example we are sending http-request to server to get the users. What if the user navigates away from this page.
  // We don't wanna wait for server to return the data and then render it here.
  // So as a best practice when we fetch the data in an effect.
  // We should also provide an cleanup function for cancelling the fetch request in case the data is no longer needed.

  useEffect(() => {
    const controller = new AbortController();
    // this is built-in class in modern browser that allows to abort asynchronous operation(any operation that is long running)
    // ex fetch request or dom manipulation any operation that might take long time to complete.

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        // this object to used to config the request. it is request configuration object.
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort(); // cleanup function.
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
