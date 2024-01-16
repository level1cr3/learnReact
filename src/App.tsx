import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "jhon",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };

  return (
    <div>
      {game.player.name}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default App;
