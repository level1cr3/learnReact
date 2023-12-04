import Button from "./components/Button";

function App() {
  const handleClick = (btnName: string) => {
    console.log(btnName);
  };

  return (
    <>
      <Button color="success" onClick={handleClick}>
        My Button
      </Button>
    </>
  );
}

export default App;
