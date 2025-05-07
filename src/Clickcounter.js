import React, { useState } from 'react';
import './Clickcounter.css'; // Make sure to create this CSS file

function Clickcounter() {
  const [count, setCount] = useState(0);
  const LIMIT = 10;

  const handleIncrease = () => {
    if (count < LIMIT) {
      setCount(prev => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1>Click Counter</h1>
        <p className="count">{count}</p>

        {count >= LIMIT && <p className="limit-message">You've reached the limit!</p>}

        <div className="button-group">
          <button onClick={handleDecrease} disabled={count === 0}>Decrease</button>
          <button onClick={handleIncrease} disabled={count === LIMIT}>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default Clickcounter;
