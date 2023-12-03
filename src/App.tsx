import ListGroup from "./components/ListGroup";

function App() {
  let cities: string[] = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

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
