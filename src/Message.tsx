// PascalCasing : for function components
function Message() {
  // here we should describe what the UI should look like where we use this component.

  const name = ""; // JSX: allows us to create dynamic content.
  if (name) return <h1>Hello {name}</h1>; // this syntax is not HTML. It is JSX : javascript and XML
  return <h1>Hello World</h1>;
  // so this code under the hood is gonna get compile down to js.
  // inside the braces we can write any js expression. expression is a piece of code that produces value.
}

export default Message;
