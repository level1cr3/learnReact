import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// We use React-Dom to render the component tree. inside the element with id 'root'.
// our 'App' component is wrapped by another component called <React.StrictMode>.
// This is built-in component in react. It doesn't have a visual representation.
// It's purpose is to identify the potential problems.
