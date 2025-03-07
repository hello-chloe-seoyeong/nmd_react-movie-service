import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time...");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]); // [지켜볼 state, 콤마로 여러개 가능]
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} />
      <h1>{counter}</h1>
      <Button text={"OK"} onClick={onClick} />
    </div>
  );
}

export default App;
