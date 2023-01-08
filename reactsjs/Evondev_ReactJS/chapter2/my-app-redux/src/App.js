import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <p>App counter: {count}</p>
      <Counter></Counter>
    </div>
  );
}

export default App;
