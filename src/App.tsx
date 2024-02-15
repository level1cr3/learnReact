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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // .finally(() => {
    //   // this method will always get executed when our promise is settled. for some reason it doesn't work-in in strict mode.
    //   setIsLoading(false);
    // });

    //calling a server is an asynchronous operation. asynchronous means a non-blocking operation. It won't block the other operation.

    // so it will execute below code immediately and that is the reason we cannot put it here
    //setIsLoading(false);

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
