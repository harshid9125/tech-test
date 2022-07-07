import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Introduction from "./components/Introduction";

function App()
  {
   return (<Router>
    <div className="App">
        <Switch>
          <Route exact path="/"> 
            <Introduction/>
            
          </Route>
          </Switch>
    </div>
    </Router>
    
  );
}

export default App;