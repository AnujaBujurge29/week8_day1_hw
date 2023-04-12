import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
  const minusOne = () =>{
    setCount(count -1);
  }
  return (
    <div>
      <p>{count}</p>
      <button className="Button" onClick={addOne}>
      <h3>Subscribe</h3>
      </button>
      <button className="Button" onClick={minusOne}><h3>UnSubscribe</h3></button>
    </div>
  );
}
export default Counter;
