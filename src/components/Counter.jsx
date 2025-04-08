import { useState } from "react";
import PageIcon from "../assets/svg/PageIcon";

//   # The actual counter logic + buttons
function Counter() {
  const [count, setCount] = useState(0);

  // Increment Counter
  const handleIncrement = () => {
    setCount(count + 1);
  };
  // Decrement Counter
  const handleDecrement = () => {
    setCount(count - 1);
  };
  // Rest Counter
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <PageIcon />
      <section className="container">
        <div className="counterCard">
          <h2 className="counterCard__title">Counter App</h2>
          <h3 className="counterCard__number">{count}</h3>
          <div className="counterCard__message">
            {count === 5 && <p>You've reached max count: {count}</p>}
            {count === 0 && <p>Can't go below 0</p>}
          </div>
          <div className="counterCard__buttonGroup">
            <button
              disabled={count === 5}
              onClick={handleIncrement}
              type="button"
              className="counterCard__buttonGroup--button btn success"
            >
              Increase
            </button>
            <button
              disabled={count === 0}
              type="button"
              onClick={handleDecrement}
              className="counterCard__buttonGroup--button btn primary"
            >
              Decrease
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="counterCard__buttonGroup--button btn danger"
            >
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Counter;
