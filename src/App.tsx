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

  const deleteUser = (user: User) => {
    // there are 2 approaches when deleting user
    // 1. Optimistic : Update UI first and then call server to save changes. benefit UI will be super fast
    // 2. Pessimistic : First we call the server and wait for the result. If the call is successful then we update the UI.
    // Note : so when possible we use optimistic update.

    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err: AxiosError) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    // we will use the optimistic update.
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Jhon Wick" }; // in real world application this data will come from the form.
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => {
        // post will save the request in server. and give us response with new auto-generate Id for the user.
        // now we will update list so we can have new user with correct id.

        // setUsers([res.data, ...users]);

        // to make it more readable
        setUsers([savedUser, ...users]);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/xusers/" + updatedUser.id,
        updatedUser
      )
      .catch((err: AxiosError) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}

            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
