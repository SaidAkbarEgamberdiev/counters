import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  const handleIncreament = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <React.Fragment>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncreament({ id: 1 })}
        className="btn btn-secondary"
      >
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary">
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
