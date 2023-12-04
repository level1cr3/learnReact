import Button from "./components/Button";

function App() {
  const handleClick = (currElement: EventTarget & HTMLButtonElement) => {
    currElement.parentElement?.insertAdjacentHTML(
      "afterbegin",
      `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    );
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
