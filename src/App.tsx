import ListGroup from "./components/ListGroup";

function App() {
  let cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  // remember the naming convention. we start with handle and then specify the type of event.
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;

// we pass the values. similar to how we set html attributes.
// we did not put cities in {} because it is static value. heading="Cities"
