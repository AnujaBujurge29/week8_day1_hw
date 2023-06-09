import Subscription from "./Components/Subscription";
import Sentiment from "./Components/Sentiment";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Reviews from "./Components/Reviews";


function App() {
  // const [counter, setCounter] = useState(0);
  // const addOne = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <div className="App">
      <div className="block b1">
        <div className="aside-bar">
          <Sidebar></Sidebar>
          {/* <p>DashBoard</p>
          <p>Widget</p>
          <p>Reviews</p>
          <p>Customers</p>
          <p>Online Analysis</p>
          <p>Setting</p> */}
        </div>
      </div>

      <div className="block b2">
        Reviews
        <br />
        <br />
        <Reviews></Reviews>
      </div>
      <div className="block b3">
        Average Rating
        <br />
        <br />
        4.8
       
      </div>
      <div className="block b4">
        Sentiment Analysis
        <br />
        <br />
        <Sentiment></Sentiment>
      </div>
      <div className="block b5">
        Total Subscribers
        <br />
        <br />
        <Subscription></Subscription>
        <br />
      </div>
    </div>
  );
}

export default App;
