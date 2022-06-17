import {BrowserRouter as Router,Routes,Route,Link,Layout} from "react-router-dom";
import Landing from './Landing';
import Payment from "./Payment";
import Ticket from "./Ticket";


function App() {
  return(
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/buy" element={<Ticket />}/>
          <Route exact path="/payment" element={<Payment />}/>
        </Routes>
    </Router>
  );
}

export default App;
