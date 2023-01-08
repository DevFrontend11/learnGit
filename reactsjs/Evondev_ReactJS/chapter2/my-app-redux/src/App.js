import React from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>App counter: {count}</p>
      <Counter count={count} setCount={setCount}></Counter>
    </div>
  );
}

export default App;
