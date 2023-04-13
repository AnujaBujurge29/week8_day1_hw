import { useState } from "react";

export default function Sentiment() {
  const [happy, setHappy] = useState(960);
  const [neutral, setNeutral] = useState(122);
  const [sad, setSad] = useState(321);
  const addOneHappy = () => {
    setHappy(happy + 1);
  };
  const addOneNeutral = () => {
    setNeutral(neutral + 1);
  };
  const addOneSad = () => {
    setSad(sad + 1);
  };
  return (
    <div>
      <i className="far fa-grin-beam"></i> Positive:&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="sentiments" onClick={addOneHappy}>{happy}</button>
      <br />
      <i className="far fa-meh-blank"></i> Neutral:&nbsp;&nbsp;&nbsp;&nbsp;
      <button  className="sentiments" onClick={addOneNeutral}>{neutral}</button><br />
      <i className="far fa-angry"></i> Negative: &nbsp;
      <button  className="sentiments" onClick={addOneSad}>{sad}</button><br />
    </div>
  );
}
