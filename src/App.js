import {BrowserRouter as Router,Routes,Route,Link,Layout} from "react-router-dom";
import Landing from './Landing';
import Payment from "./Payment";
import Ticket from "./Ticket";
import Success from "./Success";


function App() {
  return(
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/buy" element={<Ticket/>}/>
          <Route exact path="/payment" element={<Payment />}/>
          <Route exact path="/success" element={<Success />}/>
        </Routes>
    </Router>
  );
}

export default App;
