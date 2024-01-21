import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// We use React-Dom to render the component tree. inside the element with id 'root'.
// our 'App' component is wrapped by another component called <React.StrictMode>.
// This is built-in component in react. It doesn't have a visual representation.
// It's purpose is to identify the potential problems.
// one of these potential problem is impure component.
// So when the strict mode is enabled in development react renders each component twice.
// that is why we where getting message 2,4,6 ...
// so in our case react was rendering each MyMsg component twice and takes the result of second render.
// the first render is used primarily for detecting and reporting the potential issue with our code. while second
// render is used to actually update our user interface.
// starting from react 18. strict mode is turned on by default. It only behaves this way in development mode.

// when we build our application for production.
// strict mode checks are not included and our component is rendered only once.
