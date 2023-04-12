import Counter from "./Components/Counter";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(0);
  // const addOne = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <div className="App">

      <div className="block b1">
        <p className="aside-bar">
        <p>DashBoard</p>
        <p>Widget</p>
        <p>Reviews</p>
        <p>Customers</p>
        <p>Online Analysis</p>
        <p>Settings</p>
        </p>
      </div>

      <div className="block b2">Reviews<br/><br/>1,281</div>
      <div className="block b3">Average Rating<br/><br/>4.6</div>
      <div className="block b4">Sentiment Analysis<br/><br/>960<br/>122<br></br>321</div>
      <div className="block b5">Website Subscribers<br/><br/>
      <Counter></Counter>
      </div>
   
      {/* <button className="Button" onClick={addOne}><h3>Subscribe Here</h3></button> */}
      </div>
    
  );
}

export default App;
