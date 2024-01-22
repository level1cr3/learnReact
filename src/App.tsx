import { useRef } from "react";

function App() {
  //lets say when app starts we wanna put focus on this input.
  const ref = useRef<HTMLInputElement>(null);

  // side effect.
  if (ref.current) ref.current.focus(); // this piece of code have nothing to do with returning jsx markup.
  // with this piece of code we changing the state of dom.
  // It is a sideEffect. It is changing something outside of this component.
  // now our component is no longer an pure component. 

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
