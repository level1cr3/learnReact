import ListGroup from "./components/ListGroup";

function App() {
  let cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  return (
    <>
      <ListGroup items={cities} heading="Cities" />
    </>
  );
}

export default App;

// we pass the values. similar to how we set html attributes.
// we did not put cities in {} because it is static value. heading="Cities"
