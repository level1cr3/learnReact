import { useEffect, useRef } from "react";

function App() {
  //lets say when app starts we wanna put focus on this input.
  const ref = useRef<HTMLInputElement>(null);

  // side effect.
  //if (ref.current) ref.current.focus(); // this piece of code have nothing to do with returning jsx markup.
  // with this piece of code we changing the state of dom.
  // It is a sideEffect. It is changing something outside of this component.
  // now our component is no longer an pure component.

  // to make it pure component we can use Effect hook.
  // it should have been called 'afterRender'
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }); // the function that we pass here will be called after each render.
  // and this is opportunity for us to write any piece of code that causes side-effects.
  // we can store something in local storage.
  // we can work with the dom element.
  // we can call server and so on...

  // just like state and ref hooks. we can only call the effect hook at top level of our components.
  // so we cannot call it inside loops and if statements
  // and also. we can call it multiple times for different purposes

  useEffect(() => {
    document.title = "My App"; // since they are two different responsibility. we can put each similar side effects together.
  });

  // so when we have multiple effects. react will run them in order after each render.

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
