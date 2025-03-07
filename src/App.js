import { useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div>
      <h1>{counter}</h1>
      <Button text={"OK"} onClick={onClick} />
    </div>
  );
}

export default App;
