import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Counter</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={decrease}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;