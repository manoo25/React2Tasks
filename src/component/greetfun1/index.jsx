
import React, { useState } from 'react';
import './Counter.css';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Function Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
         <button onClick={decrement}>Decrease (-)</button>
        <button onClick={increment}>increase (+)</button>
       
        
      </div>
    </div>
  );
}
export default Counter;
