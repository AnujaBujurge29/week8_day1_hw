import { useState } from "react";

export default function Subscription(){
  const [subscribers, setSubscribers] = useState(821);
  const addOne = () => {
    setSubscribers(subscribers + 1);
  };
  const minusOne = () => {
    setSubscribers(subscribers - 1);
  };
  return (
    <div>
      <p>{subscribers}</p>
      <button className="Button" onClick={addOne}>
        <h3>Subscribe</h3>
      </button>
      <button className="Button" onClick={minusOne}>
        <h3>UnSubscribe</h3>
      </button>
    </div>
  );
};